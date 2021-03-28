#!/usr/bin/env node
import { codepoints } from './main.js'
import { serializeHex, serializeCharacter } from './serialize.js'

// Print all cross-platform terminal characters
const runCli = function () {
  const output = codepoints
    .filter(shouldBePrinted)
    .map(serializeCodepoint)
    .join('\n')
  console.log(output)
}

// Do not print control characters
const shouldBePrinted = function (codepoint) {
  return codepoint > MAX_C0_CODEPOINT
}

const MAX_C0_CODEPOINT = 31

const serializeCodepoint = function (codepoint) {
  const hex = serializeHex(codepoint)
  const character = serializeCharacter(codepoint)
  return `${hex}  ${character}`
}

runCli()
