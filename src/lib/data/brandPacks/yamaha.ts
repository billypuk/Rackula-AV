/**
 * Yamaha Brand Pack
 * Pre-defined device types for Yamaha rack-mountable devices
 * Source: NetBox community devicetype-library
 */

import type { DeviceType } from "$lib/types";
import { CATEGORY_COLOURS } from "$lib/types/constants";

/**
 * Yamaha device definitions (7 devices)
 */
export const yamahaDevices: DeviceType[] = [
  {
    slug: "yamaha-rivage-dsp-rx-ex",
    u_height: 5,
    manufacturer: "Yamaha",
    model: "Yamaha Rivage DSP-RX-EX",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "yamaha-rivage-dsp-rx-ex",
    u_height: 5,
    manufacturer: "Yamaha",
    model: "Yamaha Rivage DSP-RX",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "yamaha-rivage-dsp-r10",
    u_height: 5,
    manufacturer: "Yamaha",
    model: "Yamaha Rivage DSP-R10",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "yamaha-rpio622",
    u_height: 10,
    manufacturer: "Yamaha",
    model: "Yamaha RPio622",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "yamaha-rpio222",
    u_height: 5,
    manufacturer: "Yamaha",
    model: "Yamaha RPio222",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "yamaha-rio3224",
    u_height: 5,
    manufacturer: "Yamaha",
    model: "Yamaha Rio3224",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "yamaha-rio1608",
    u_height: 3,
    manufacturer: "Yamaha",
    model: "Yamaha Rio1608",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "yamaha-tio1608",
    u_height: 3,
    manufacturer: "Yamaha",
    model: "Yamaha Tio1608",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "yamaha-rmio64-d",
    u_height: 1,
    manufacturer: "Yamaha",
    model: "Yamaha RMio64-D",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
  {
    slug: "yamaha-rsio64-d",
    u_height: 2,
    manufacturer: "Yamaha",
    model: "Yamaha RSio64-D",
    is_full_depth: false,
    airflow: "right-to-left",
    colour: CATEGORY_COLOURS["av-media"],
    category: "av-media",
  },
];
