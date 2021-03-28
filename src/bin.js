#!/usr/bin/env node
import { codepoints } from './main.js'

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
  return !isControlCharacter(codepoint)
}

const isControlCharacter = function (codepoint) {
  return (
    (codepoint >= MIN_C0_CODEPOINT && codepoint <= MAX_C0_CODEPOINT) ||
    (codepoint >= MIN_C1_CODEPOINT && codepoint <= MAX_C1_CODEPOINT)
  )
}

const MIN_C0_CODEPOINT = 0
const MAX_C0_CODEPOINT = 31
const MIN_C1_CODEPOINT = 128
const MAX_C1_CODEPOINT = 159

const serializeCodepoint = function (codepoint) {
  const hex = serializeHex(codepoint)
  const character = String.fromCharCode(codepoint)
  return `${hex} ${character}`
}

const serializeHex = function (codepoint) {
  return codepoint.toString(HEX_RADIX).padStart(CODEPOINT_MAX_LENGTH, '0')
}

const HEX_RADIX = 16
const CODEPOINT_MAX_LENGTH = 4

runCli()
