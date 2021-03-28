import { codepoints } from './codepoints.js'
import { serializeHex, serializeCharacter } from './serialize.js'

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

// All cross-platform characters, as strings
const getCharacters = function () {
  return codepoints.map(serializeCharacter)
}

export const characters = getCharacters()
