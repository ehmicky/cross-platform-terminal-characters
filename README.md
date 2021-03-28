<img src="https://raw.githubusercontent.com/ehmicky/design/main/cross-platform/cross-platform.svg?sanitize=true" width="500"/>

[![Build](https://github.com/ehmicky/cross-platform-terminal-characters/workflows/Build/badge.svg)](https://github.com/ehmicky/cross-platform-terminal-characters/actions)
[![Node](https://img.shields.io/node/v/cross-platform-terminal-characters.svg?logo=node.js)](https://www.npmjs.com/package/cross-platform-terminal-characters)
[![Twitter](https://img.shields.io/badge/%E2%80%8B-twitter-4cc61e.svg?logo=twitter)](https://twitter.com/intent/follow?screen_name=ehmicky)
[![Medium](https://img.shields.io/badge/%E2%80%8B-medium-4cc61e.svg?logo=medium)](https://medium.com/@ehmicky)

All the characters that work on most terminals and most operating systems.

# Background

While [ASCII characters](https://en.wikipedia.org/wiki/ASCII) display correctly
on all terminals, this is not the case of all characters. When building a
terminal application or tool, it is common to experience cross-platform issues
like:

<img src="https://raw.githubusercontent.com/ehmicky/cross-platform-terminal-characters/main/invalid_terminal_characters.png" width="259"/>

The main reasons are:

- The terminal font might not include this specific character.
- The terminal encoding may not support
  [Unicode](https://en.wikipedia.org/wiki/Unicode). For example, Windows default
  terminal (Console Host) often use specific encodings like
  [CP437](https://en.wikipedia.org/wiki/Code_page_437),
  [CP850](https://en.wikipedia.org/wiki/Code_page_850) or
  [Windows-1252](https://en.wikipedia.org/wiki/Windows-1252).
- The application might not be properly converting encodings when reading or
  writing terminal characters.

The first two points can be solved by using characters known to display
correctly on most terminals and environments.

This repository contains a list of those characters:

- in this [`README.md`](#list-of-characters)
- as a [`characters.txt` file](characters.txt)
- as a [binary](#cli) printing the full list
- as a [Node.js module](#api) for programmatic usage

# Terminals

This was tested on:

- Ubuntu 20.10:
  - Gnome VTE, Gnome terminal 3.38.0
  - xterm 353
  - terminator 1.92
  - konsole 20.08.2
  - rxvt 9.22
  - PuTTY 0.74
  - xterm.js, VSCode 1.54.3 terminal
  - Linux console (kernel)
- macOS 10.14:
  - terminal.app 2.9
  - iTerm2 3.4.4
  - Alacritty 0.7.2
- Windows 10.0.17763:
  - Console Host (CP850):
    - `cmd.exe`
    - Powershell 5.1
  - mintty, Git-for-Windows 2.31.1
  - ConEmu 201314
  - Fluent terminal 0.7.5.0

This does not cover:

- EBCDIC
- Custom fonts

Please note this is **only for terminals not GUI applications**. This includes
the **web browser** you might use to view this page. This means some characters
might not be displayed correctly depending on your web browser's font (notably
using **Chrome on Android**).

# List of characters

The following characters work on most terminals.

When the character is displayed, its
[Unicode codepoint](https://en.wikipedia.org/wiki/Code_point) is shown above it.

## ASCII

Characters with [Unicode codepoints](https://en.wikipedia.org/wiki/Code_point)
[`0020-007f`](<https://en.wikipedia.org/wiki/Basic_Latin_(Unicode_block)>) work
on all terminals.

[Control characters](https://en.wikipedia.org/wiki/Control_character)
`0000-001f` and `0080-009f` have varying levels of support. However, the most
commonly used ones work on all terminals.

## Western languages

[Most characters](characters.txt) with
[Unicode codepoints](https://en.wikipedia.org/wiki/Code_point) `00a0-0587` and
`1e00-1ffe` work on most terminals. They include:

- [latin alphabet](<https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)>)
- [greek/coptic alphabet](https://en.wikipedia.org/wiki/Greek_and_Coptic)
- [cyrillic alphabet](<https://en.wikipedia.org/wiki/Cyrillic_(Unicode_block)>)
- [armenian alphabet](<https://en.wikipedia.org/wiki/Armenian_(Unicode_block)>)

## Box drawing

```
2588 2592 2591
██   ▒▒   ░░
25a0
■■

2500 2012 2014 2015 2501
─    ‒    —    ―    ━
2212 2574 2013 2010 2578 2576
−−   ╴╴   ––   ‐‐   ╸╸   ╶╶
257a 257c 257e
╺╺   ╼╼   ╾╾

2502 2503
│    ┃
2575 2579 2577 257b 257d 257f
╵    ╹    ╷    ╻    ╽    ╿

250c 250f 2510 2513
┌    ┏    ┐    ┓
2514 2517 2518 251b
└    ┗    ┘    ┛
251c 2523 2524 252b
├    ┣    ┤    ┫
252c 2533 2534 253b
┬    ┳    ┴    ┻
253c 254b 256c
┼    ╋    ╬
250d 250e 2511 2512
┍    ┎    ┑    ┒
2515 2516 2519 251a
┕    ┖    ┙    ┚
251d 251e 251f 2520 2521 2522
┝    ┞    ┟    ┠    ┡    ┢
2525 2526 2527 2528 2529 252a
┥    ┦    ┧    ┨    ┩    ┪
252d 252e 252f 2530 2531 2532
┭    ┮    ┯    ┰    ┱    ┲
2535 2536 2537 2538 2539 253a
┵    ┶    ┷    ┸    ┹    ┺
253d 253e 253f 2540 2541 2542
┽    ┾    ┿    ╀    ╁    ╂
2543 2544 2545 2546 2547 2548
╃    ╄    ╅    ╆    ╇    ╈
2549 254a 256a
╉    ╊    ╪
```

## Geometrical shapes

```
2219 2022 25cf 25ca
∙    •    ●    ◊
25b2 25bc 25b4 25be 25c2 25b8
▲    ▼    ▴    ▾    ◂    ▸
2190 2191 2192 2193
←    ↑    →    ↓
```

## Punctuation

```
2026 2030 203c
…    ‰    ‼

2018 2019 201a 201c 201d 201e
‘    ’    ‚    “    ”    „
2039 203a
‹    ›
```

## Numbers and math

```
2248 2260 2261 2264 2265
≈    ≠    ≡    ≤    ≥

2206 221a 221e 2320 2321
∆    √    ∞    ⌠    ⌡
2229 2310 207f
∩    ⌐    ⁿ

24ea 2460 2461 2462 2463 2464
⓪   ①   ②    ③    ④    ⑤
2465 2466 2467 2468
⑥   ⑦    ⑧   ⑨
```

## Other symbols

```
2020 2021
†    ‡
2116 2122 2126 20a7 20ac 20ae
№    ™    Ω    ₧    €    ₮
```

# API

A Node module is available to retrieve the list of characters above or test
specific characters.

## Install

```
npm install cross-platform-terminal-characters
```

## Usage

```js
const {
  regex,
  codepoints,
  characters,
} = require('cross-platform-terminal-characters')

// false, i.e. cross-platform
console.log(regex.test('≈'))
// true, i.e. not cross-platform
console.log(regex.test('≐'))
// Remove not cross-platform characters, i.e. print `example ≈ test  text`
console.log('example ≈ test ≐ text'.replace(regex, ''))

// Array of codepoint integers: [0x0000, 0x0001, ..., 0xfb17]
console.log(codepoints)
// Array of single-character strings: ['\x00', '\x01', ..., 'ﬗ']
console.log(characters)
```

# CLI

The following command prints the full list of characters and their codepoints.

```
npx cross-platform-terminal-characters
```

If you don't have `npm` installed, the full list is available in
[`characters.txt`](characters.txt). The file is UTF-8 encoded.

# See also

- [cross-platform-node-guide](https://github.com/ehmicky/cross-platform-node-guide):
  How to write cross-platform Node.js code.
- [figures](https://github.com/sindresorhus/figures): Unicode symbols with
  Windows terminal fallbacks
- [log-symbols](https://github.com/sindresorhus/log-symbols): Colored symbols
  for various log levels

# Support

For any question, _don't hesitate_ to [submit an issue on GitHub](../../issues).

Everyone is welcome regardless of personal background. We enforce a
[Code of conduct](CODE_OF_CONDUCT.md) in order to promote a positive and
inclusive environment.

# Contributing

This project was made with ❤️. The simplest way to give back is by starring and
sharing it online.

If the documentation is unclear or has a typo, please click on the page's `Edit`
button (pencil icon) and suggest a correction.

If you would like to help us fix an error or add more information, please check
our [guidelines](CONTRIBUTING.md). Pull requests are welcome!

Thanks go to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/ehmicky"><img src="https://avatars2.githubusercontent.com/u/8136211?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ehmicky</b></sub></a><br /><a href="https://github.com/ehmicky/cross-platform-terminal-characters/commits?author=ehmicky" title="Code">💻</a> <a href="#design-ehmicky" title="Design">🎨</a> <a href="#ideas-ehmicky" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ehmicky/cross-platform-terminal-characters/commits?author=ehmicky" title="Documentation">📖</a></td>
    <td align="center"><a href="http://bayleshanks.com"><img src="https://avatars.githubusercontent.com/u/586225?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bayle Shanks</b></sub></a><br /><a href="#userTesting-bshanks" title="User Testing">📓</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
