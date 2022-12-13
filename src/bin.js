#!/usr/bin/env node
import { codepoints } from './main.js'
import { serializeHex } from './serialize.js'

// Print all cross-platform terminal characters
const runCli = () => {
  const output = codepoints
    .filter(shouldBePrinted)
    .map(serializeCodepoint)
    .join('\n')
  console.log(output)
}

// Do not print control characters
const shouldBePrinted = (codepoint) => codepoint > MAX_C0_CODEPOINT

const MAX_C0_CODEPOINT = 31

const serializeCodepoint = (codepoint) => {
  const hex = serializeHex(codepoint)
  const character = String.fromCodePoint(codepoint)
  return `${hex}  ${character}`
}

runCli()
