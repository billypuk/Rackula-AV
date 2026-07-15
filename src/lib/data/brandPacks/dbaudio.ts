/**
 * d&b audiotechnik Brand Pack
 * Pre-defined device types for d&b audiotechnik rack-mountable audio and video processing units.
 * Source: User Data Dump / Optimized Generation Cycle
 */

import type { DeviceType } from "$lib/types"; 
import { CATEGORY_COLOURS } from "$lib/types/constants";


/**
 * d&b audiotechnik device definitions (Generated catalog)
 */
export const dbaudioDevices: DeviceType[] = [
  /* --- Install D Series (Mandatory Order Start) --- */
  {
    slug: "d&b-audiotechnik-5d",
    u_height: 1,
    manufacturer: "d&b audiotechnik",
    model: "5D",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
    slot_width: 1, // <-- Correctly set for HALF WIDTH
  },
  {
    slug: "d&b-audiotechnik-5dm",
    u_height: 1,
    manufacturer: "d&b audiotechnik",
    model: "5DM",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
    slot_width: 1, // <-- Correctly set for HALF WIDTH
  },
  {
    slug: "d&b-audiotechnik-10d",
    u_height: 2,
    manufacturer: "d&b audiotechnik",
    model: "10D",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "d&b-audiotechnik-25d",
    u_height: 2,
    manufacturer: "d&b audiotechnik",
    model: "25D",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "d&b-audiotechnik-30d",
    u_height: 2,
    manufacturer: "d&b audiotechnik",
    model: "30D",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "d&b-audiotechnik-40d",
    u_height: 2,
    manufacturer: "d&b audiotechnik",
    model: "40D",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },

  /* --- Touring D Series (Legacy) --- */
  {
    slug: "d&b-audiotechnik-d6",
    u_height: 2,
    manufacturer: "d&b audiotechnik",
    model: "D6",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "d&b-audiotechnik-d12",
    u_height: 3,
    manufacturer: "d&b audiotechnik",
    model: "D12",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "d&b-audiotechnik-d20",
    u_height: 2,
    manufacturer: "d&b audiotechnik",
    model: "D20",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "d&b-audiotechnik-d25",
    u_height: 2,
    manufacturer: "d&b audiotechnik",
    model: "D25",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "d&b-audiotechnik-d40",
    u_height: 2,
    manufacturer: "d&b audiotechnik",
    model: "D40",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "d&b-audiotechnik-d80",
    u_height: 2,
    manufacturer: "d&b audiotechnik",
    model: "D80",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "d&b-audiotechnik-d90",
    u_height: 2,
    manufacturer: "d&b audiotechnik",
    model: "D90",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },

  /* --- Mainframe (Legacy) --- */
  {
    slug: "d&b-audiotechnik-a1-mainframe",
    u_height: 3,
    manufacturer: "d&b audiotechnik",
    model: "A1 Mainframe",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "d&b-audiotechnik-p1200a-mainframe",
    u_height: 3,
    manufacturer: "d&b audiotechnik",
    model: "P1200A Mainframe",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },

  /* --- Network Switch Series (Half Width) --- */
  {
    slug: "d&b-audiotechnik-dn1",
    u_height: 1,
    manufacturer: "d&b audiotechnik",
    model: "DN1",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
    slot_width: 1, // <-- HALF WIDTH (Mandatory inclusion)
  },
  {
    slug: "d&b-audiotechnik-dn2",
    u_height: 1,
    manufacturer: "d&b audiotechnik",
    model: "DN2",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
    slot_width: 1, // <-- HALF WIDTH (Mandatory inclusion)
  },

  /* --- Processing/Bridge Series --- */
  {
    slug: "d&b-audiotechnik-ds10",
    u_height: 1,
    manufacturer: "d&b audiotechnik",
    model: "DS10",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "d&b-audiotechnik-ds20",
    u_height: 1,
    manufacturer: "d&b audiotechnik",
    model: "DS20",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "d&b-audiotechnik-ds22",
    u_height: 1,
    manufacturer: "d&b audiotechnik",
    model: "DS22",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },

  /* --- Soundscape Series --- */
  {
    slug: "d&b-audiotechnik-ds100",
    u_height: 3,
    manufacturer: "d&b audiotechnik",
    model: "DS100",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "d&b-audiotechnik-ds100m",
    u_height: 3,
    manufacturer: "d&b audiotechnik",
    model: "DS100M",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "d&b-audiotechnik-ds110",
    u_height: 3,
    manufacturer: "d&b audiotechnik",
    model: "DS110",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
];
