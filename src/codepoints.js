/* eslint-disable max-lines, no-magic-numbers,
   unicorn/numeric-separators-style */
const getRange = function (min, max) {
  const length = max - min + 1
  return Array.from({ length }, (_, index) => min + index)
}

// All cross-platform characters, as codepoint integers
export const codepoints = [
  0x0008,
  0x0009,
  0x000a,
  0x000d,
  0x001b,
  ...getRange(0x0020, 0x007e),
  ...getRange(0x00a0, 0x00ac),
  ...getRange(0x00ae, 0x0113),
  ...getRange(0x0116, 0x0127),
  0x012a,
  0x012b,
  0x012e,
  0x012f,
  0x0130,
  0x0131,
  0x0134,
  0x0135,
  0x0136,
  0x0137,
  ...getRange(0x0139, 0x013e),
  ...getRange(0x0141, 0x0148),
  0x014c,
  0x014d,
  ...getRange(0x0150, 0x0165),
  ...getRange(0x016a, 0x017e),
  0x0192,
  0x0218,
  0x0219,
  0x021a,
  0x021b,
  0x02c6,
  0x02c7,
  0x02c9,
  0x02d8,
  0x02d9,
  0x02db,
  0x02dc,
  0x02dd,
  0x0384,
  0x0385,
  0x0386,
  0x0388,
  0x0389,
  0x038a,
  0x038c,
  ...getRange(0x038e, 0x03a1),
  ...getRange(0x03a3, 0x03ce),
  0x03f3,
  0x03f4,
  ...getRange(0x0400, 0x045f),
  0x0490,
  0x0491,
  0x04ae,
  0x04d0,
  0x04d1,
  0x1e02,
  0x1e03,
  0x1e0a,
  0x1e0b,
  0x1e1e,
  0x1e1f,
  0x1e40,
  0x1e41,
  0x1e56,
  0x1e57,
  0x1e60,
  0x1e61,
  0x1e6a,
  0x1e6b,
  ...getRange(0x1e80, 0x1e85),
  0x1ef2,
  0x1ef3,
  0x2010,
  0x2012,
  0x2013,
  0x2014,
  0x2015,
  0x2018,
  0x2019,
  0x201a,
  0x201c,
  0x201d,
  0x201e,
  0x2020,
  0x2021,
  0x2022,
  0x2026,
  0x2030,
  0x2039,
  0x203a,
  0x203c,
  0x207f,
  0x20a7,
  0x20ac,
  0x2116,
  0x2122,
  0x2126,
  0x2190,
  0x2191,
  0x2192,
  0x2193,
  0x2206,
  0x2212,
  0x2219,
  0x221a,
  0x221e,
  0x2229,
  0x2248,
  0x2260,
  0x2261,
  0x2264,
  0x2265,
  0x2310,
  0x2320,
  0x2321,
  ...getRange(0x2460, 0x2468),
  0x24ea,
  0x2500,
  0x2501,
  0x2502,
  0x2503,
  0x250c,
  0x250f,
  0x2510,
  0x2513,
  0x2514,
  0x2517,
  0x2518,
  0x251b,
  0x251c,
  0x251d,
  0x2520,
  0x2523,
  0x2524,
  0x2525,
  0x2528,
  0x252b,
  0x252c,
  0x252f,
  0x2530,
  0x2533,
  0x2534,
  0x2537,
  0x2538,
  0x253b,
  0x253c,
  0x253f,
  0x2542,
  0x254b,
  0x256a,
  0x256c,
  0x2588,
  0x2591,
  0x2592,
  0x25a0,
  0x25b2,
  0x25bc,
  0x25ca,
  0x25cf,
]
/* eslint-enable max-lines, no-magic-numbers,
   unicorn/numeric-separators-style */