/**
 * Avid Brand Pack
 * Pre-defined device types for Avid rack-mountable audio and video processing units.
 * Source: User Data Dump / Optimized Generation Cycle
 */

import type { DeviceType } from "$lib/types"; 
import { CATEGORY_COLOURS } from "$lib/types/constants";


/**
 * Avid device definitions (Generated catalog)
 */
export const avidDevices: DeviceType[] = [
  /* --- D-Show Series --- */
  {
    slug: "avid-dshow-stage-rack",
    u_height: 10,
    manufacturer: "Avid",
    model: "D-Show Stage Rack",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "avid-dshow-foh-rack",
    u_height: 10,
    manufacturer: "Avid",
    model: "D-Show FOH Rack",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },

  /* --- SC48 Series --- */
  {
    slug: "avid-sc48-stage-48",
    u_height: 5,
    manufacturer: "Avid",
    model: "SC48 Stage 48",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },

  /* --- Venue Stage Series (Size Increments) --- */
  {
    slug: "avid-venue-stage-16",
    u_height: 4,
    manufacturer: "Avid",
    model: "VENUE Stage 16",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "avid-venue-stage-32",
    u_height: 5,
    manufacturer: "Avid",
    model: "VENUE Stage 32",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "avid-venue-stage-48",
    u_height: 8,
    manufacturer: "Avid",
    model: "VENUE Stage 48",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "avid-venue-stage-64",
    u_height: 10,
    manufacturer: "Avid",
    model: "VENUE Stage 64",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },

  /* --- Venue Local Series --- */
  {
    slug: "avid-venue-local",
    u_height: 3,
    manufacturer: "Avid",
    model: "VENUE Local 16",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },

  /* --- E6L Series (Low Count) --- */
  {
    slug: "avid-venue-e6l-112",
    u_height: 5,
    manufacturer: "Avid",
    model: "VENUE E6L-112",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "avid-venue-e6l-144",
    u_height: 5,
    manufacturer: "Avid",
    model: "VENUE E6L-144",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "avid-venue-e6l-192",
    u_height: 5,
    manufacturer: "Avid",
    model: "VENUE E6L-192",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },

  /* --- E6LX Series (High Count) --- */
  {
    slug: "avid-venue-e6lx-128",
    u_height: 5,
    manufacturer: "Avid",
    model: "VENUE E6LX-128",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "avid-venue-e6lx-176",
    u_height: 5,
    manufacturer: "Avid",
    model: "VENUE E6LX-176",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "avid-venue-e6lx-256",
    u_height: 5,
    manufacturer: "Avid",
    model: "VENUE E6LX-256",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
];