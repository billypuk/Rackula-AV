# AutoCAD Integration — Design Spec

**Source:** Discussion [#1727](https://github.com/RackulaLives/Rackula/discussions/1727), Issue [#1729](https://github.com/RackulaLives/Rackula/issues/1729)
**Date:** 2026-05-25
**Status:** Design approved, ready for implementation planning
**Milestone:** v0.11.0 (all tracks)

## Context

A Rackula user (dtwitkowski) needed to get rack diagrams into AutoCAD for a data centre project. The direct PDF export produced raster output unusable for CAD work. They discovered a workaround: Rackula SVG → Inkscape → PDF → AutoCAD PDFIMPORT. This works because Inkscape preserves vectors, while Rackula's `exportAsPDF()` rasterizes to canvas/PNG before embedding.

Research confirmed: AutoCAD has no native SVG import in any version through 2026. The two viable paths are vector PDF (for `PDFIMPORT`) and DXF (AutoCAD's native interchange format). An AutoCAD add-on (Track C) was deferred to a separate research spike.

## Research Summary

### Why Current PDF Export Fails

`src/lib/utils/export.ts:1526` — `svgToCanvas()` renders SVG to an HTML canvas, then embeds the result as a PNG data URL inside the PDF. AutoCAD's `PDFIMPORT` sees a raster image with zero editable geometry.

### Key Findings

| Finding                   | Detail                                                                         |
| ------------------------- | ------------------------------------------------------------------------------ |
| AutoCAD SVG support       | None. No native import in any version including 2026                           |
| PDFIMPORT requirements    | PDF must contain vector geometry (not raster) to produce editable DWG entities |
| Best SVG→AutoCAD pipeline | SVG → Inkscape → DXF (R14) or SVG → Inkscape → PDF → PDFIMPORT                 |
| svg2pdf.js                | MIT, 88K/week, maintained by yWorks, converts SVG DOM to jsPDF vector calls    |
| dxf-writer                | MIT, 15K/week, zero deps, generates DXF in browser/Node                        |

---

## Track A: Vector PDF Export

### Problem

`exportAsPDF()` rasterizes to canvas, producing raster PDF that AutoCAD can't use for editable geometry.

### Solution

Replace the canvas rasterization pipeline with `svg2pdf.js`, which converts SVG DOM elements into jsPDF vector drawing commands.

### How It Works

```js
// Current (raster — export.ts:1526-1563)
const canvas = await svgToCanvas(svgString, width, height, background);
pdf.addImage(canvas.toDataURL("image/png"), "PNG", x, y, w, h);

// Proposed (vector)
import "svg2pdf.js";
const svgElement = document.querySelector("svg"); // or use the generated SVG
await doc.svg(svgElement, { x, y, width, height });
```

`generateExportSVG()` already produces a complete SVG DOM element. Instead of serializing it to string and rasterizing, we pass the live DOM element directly to `doc.svg()`.

### Files Modified

- `src/lib/utils/export.ts` — rewrite `exportAsPDF()` and `exportAsMultiPagePDF()` to use svg2pdf.js; remove `svgToCanvas()` if no longer needed
- `package.json` — add `svg2pdf.js` dependency

### SVG Feature Compatibility

| Rackula SVG Feature                   | svg2pdf.js Support                                         | Risk                                          |
| ------------------------------------- | ---------------------------------------------------------- | --------------------------------------------- |
| `<rect>`, `<line>`, `<circle>`        | Full                                                       | None                                          |
| `<text>` with system-ui font          | Supported (falls back to helvetica if font not registered) | Low — text may use fallback font              |
| `<image>` with data URL               | Supported                                                  | Low                                           |
| `clip-path` (device image rounding)   | Partial (v2.5.0 added basic clip-rule)                     | Medium — test and verify                      |
| `text-shadow` CSS (image-mode labels) | Not supported                                              | Low — omit or replace with drop-shadow filter |
| `<pattern>` (blocked-slot hatching)   | Supported                                                  | Low                                           |
| `rgba()` fill colours                 | Supported                                                  | Low                                           |
| `<tspan>` with different colours      | Supported                                                  | Low                                           |

### Mitigations

- **text-shadow:** Replace with SVG `<filter>` drop-shadow, which svg2pdf.js handles
- **clip-path:** Test with svg2pdf.js v2.7.0; fall back to unclipped images if broken
- **Font fallback:** Accept that PDF text may render in Helvetica rather than system-ui (this is standard PDF behaviour)

### Effort

**Low-Medium.** ~2-4 hours. One file modified, one dependency added. The core change is deleting the raster pipeline and plugging in `doc.svg()`.

### Verification

1. Export a rack as PDF with various options (dark/light/transparent bg, front/rear/both, with/without legend)
2. Open in a PDF viewer — confirm text is selectable (proves it's vector, not raster)
3. In AutoCAD: `PDFIMPORT` → confirm geometry imports as editable lines/text
4. Run existing export tests (`src/tests/export-*.test.ts`) — confirm no regressions

---

## Track B: DXF Export

### Why DXF

DXF is AutoCAD's native interchange format. Unlike PDFIMPORT (which reverse-engineers PDF into DWG entities with precision loss), DXF directly describes lines, polylines, circles, and text as AutoCAD-native objects. Precision is preserved. Layers and colours are explicit.

### Library

**dxf-writer** (MIT, ~15K weekly, zero dependencies). Simple API, works in browser. Sufficient for 2D entities Rackula produces.

### Entity Mapping

| Rackula Element         | DXF Entity                      | Notes                                           |
| ----------------------- | ------------------------------- | ----------------------------------------------- |
| Rack rails (rectangles) | `LINE` (4 per rail)             | Horizontal/vertical rail edges                  |
| Rack interior           | `LINE` (rectangle)              | Background fill not needed — DXF has background |
| Device rectangles       | `POLYLINE` (closed, 4 vertices) | Filled with device colour                       |
| Device labels           | `TEXT`                          | Positioned at device centre                     |
| Grid lines              | `LINE` (dashed)                 | Horizontal lines at each U boundary             |
| Mounting holes          | `CIRCLE`                        | Small filled circles on rails                   |
| U number labels         | `TEXT`                          | Left-rail position numbers                      |
| Category icons          | `LINE`/`POLYLINE`/`CIRCLE`      | Decomposed into primitives                      |
| Legend                  | `TEXT` + `POLYLINE`             | Separate layer                                  |
| QR code                 | Skip (DXF doesn't do QR)        | Or render as bitmap image reference             |

### Layer Organisation

```
RACK-RAILS      — rail rectangles, mounting holes
RACK-INTERIOR   — interior background
RACK-DEVICES    — device filled polylines
RACK-LABELS     — device names, U numbers
RACK-GRID       — grid lines
RACK-LEGEND     — legend items
```

### Coordinate System

DXF uses Y-up (origin bottom-left). Rackula SVG uses Y-down (origin top-left). Transform: `dxfY = totalHeight - svgY`. All coordinates are in DXF drawing units (set `INSUNITS` = 1 for inches, or use unitless and let user scale).

### Scaling

A standard 42U rack at Rackula's internal scale renders at ~800px. In DXF we can set this to 19" physical width (standard rack). Set `$INSUNITS` = 1 (inches) so AutoCAD knows the unit. User can then scale to their drawing's units.

### Files Modified

- `src/lib/utils/export-dxf.ts` — new file: `generateDXF()`, `exportAsDXF()`, entity mapping helpers
- `src/lib/types/index.ts` — add `'dxf'` to `ExportFormat` union
- `src/lib/utils/export.ts` — add DXF to export dispatch (or handle in export-dxf.ts)
- `src/lib/components/ExportDialog.svelte` — add DXF format option (or wherever format selector lives)
- `package.json` — add `dxf-writer` dependency

### Effort

**Medium.** ~1-2 days. New file for DXF generation logic, UI changes for format selection, type updates, coordinate transform logic, entity mapping for all element types.

### Verification

1. Export a rack as DXF with various options
2. Open in AutoCAD — verify entities appear on correct layers, colours match, text is editable
3. Open in a free DXF viewer (e.g., LibreCAD, Autodesk Viewer online) — verify visual fidelity
4. Test with multi-rack layouts, bayed groups, half-width devices
5. Verify no regressions in existing export formats

---

## Track C: AutoCAD Add-on (Separate Spike)

Deferred to dedicated research spike. Key facts documented for the spike:

- **SDK:** ObjectARX (C++) or AutoCAD Managed .NET API (C#)
- **Requirements:** Windows, Visual Studio 2022, .NET 8.0
- **Approach:** Plugin reads Rackula JSON layout export, creates native `AcDbEntity` objects
- **Scope:** Separate project/repo from Rackula — different language, different build pipeline

---

## Implementation Order

1. **Track A first** (vector PDF) — quick win, immediate unblock for AutoCAD users
2. **Track B second** (DXF) — higher fidelity, more work
3. **Track C** — separate spike issue, no implementation from this spec

Both tracks are independent and can be shipped as separate releases.

---

## Dependencies

| Package    | Version | License | Size  | Purpose                   |
| ---------- | ------- | ------- | ----- | ------------------------- |
| svg2pdf.js | ^2.7.0  | MIT     | ~30KB | SVG→vector PDF conversion |
| dxf-writer | ^1.18.0 | MIT     | ~15KB | DXF file generation       |
