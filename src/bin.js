#!/usr/bin/env node
import { codepoints } from './main.js'
import { serializeHex } from './serialize.js'

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
    isC0Character(codepoint) ||
    codepoint === DEL_CODEPOINT ||
    isC1Character(codepoint)
  )
}

const isC0Character = function (codepoint) {
  return codepoint >= MIN_C0_CODEPOINT && codepoint <= MAX_C0_CODEPOINT
}

const isC1Character = function (codepoint) {
  return codepoint >= MIN_C1_CODEPOINT && codepoint <= MAX_C1_CODEPOINT
}

const MIN_C0_CODEPOINT = 0
const MAX_C0_CODEPOINT = 31
const DEL_CODEPOINT = 127
const MIN_C1_CODEPOINT = 128
const MAX_C1_CODEPOINT = 159

const serializeCodepoint = function (codepoint) {
  const hex = serializeHex(codepoint)
  const character = String.fromCharCode(codepoint)
  return `${hex}  ${character}`
}

runCli()
