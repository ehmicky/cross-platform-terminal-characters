// Serialize codepoint integer to a string like '00ae'
export const serializeHex = function (codepoint) {
  return codepoint.toString(HEX_RADIX).padStart(CODEPOINT_MAX_LENGTH, '0')
}

const HEX_RADIX = 16
const CODEPOINT_MAX_LENGTH = 4
