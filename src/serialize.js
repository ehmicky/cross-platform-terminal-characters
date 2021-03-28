// Serialize codepoint integer to a string like '00ae'
export const serializeHex = function (codepoint) {
  return codepoint.toString(HEX_RADIX).padStart(CODEPOINT_MAX_LENGTH, '0')
}

const HEX_RADIX = 16
const CODEPOINT_MAX_LENGTH = 4

// Serialize codepoint integer to a character string.
// Note: this does not work with characters above U-ffff
// However, no cross-platform-terminal-characters is currently above U-ffff
// Otherwise `eval()` should be used instead.
export const serializeCharacter = function (codepoint) {
  return String.fromCharCode(codepoint)
}
