// Note: this does not work with characters above U-ffff
// However, no cross-platform-terminal-characters is currently above U-ffff
// Otherwise `eval()` should be used instead.
const codepointToCharacter = function (codepoint) {
  return String.fromCharCode(codepoint)
}

export const codepoints = [0x2588]

export const characters = codepoints.map()
