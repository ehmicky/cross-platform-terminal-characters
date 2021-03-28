import { codepoints } from './codepoints.js'
import { serializeHex } from './serialize.js'

// All cross-platform characters, as codepoint integers
export { codepoints }

// Regular expression matching any non-cross-platform character
const getRegex = function () {
  const regexCodepoints = codepoints.map(serializeRegexCodepoint).join('')
  return new RegExp(`[^${regexCodepoints}]`, 'gu')
}

const serializeRegexCodepoint = function (codepoint) {
  const hex = serializeHex(codepoint)
  return `\\u${hex}`
}

export const regex = getRegex()

// Note: this does not work with characters above U-ffff
// However, no cross-platform-terminal-characters is currently above U-ffff
// Otherwise `eval()` should be used instead.
const codepointToCharacter = function (codepoint) {
  return String.fromCharCode(codepoint)
}

// All cross-platform characters, as strings
const getCharacters = function () {
  return codepoints.map(codepointToCharacter)
}

export const characters = getCharacters()
