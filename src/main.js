import { codepoints } from './codepoints.js'
import { serializeHex } from './serialize.js'

// Regular expression matching any non-cross-platform character
const getRegex = () => {
  const regexCodepoints = codepoints.map(serializeRegexCodepoint).join('')
  return new RegExp(`[^${regexCodepoints}]`, 'gu')
}

const serializeRegexCodepoint = (codepoint) => {
  const hex = serializeHex(codepoint)
  return `\\u${hex}`
}

export const regex = getRegex()

// All cross-platform characters, as strings
const getCharacters = () => codepoints.map(serializeCodepoint)

const serializeCodepoint = (codepoint) => String.fromCodePoint(codepoint)

export const characters = getCharacters()
// All cross-platform characters, as codepoint integers
export { codepoints }
