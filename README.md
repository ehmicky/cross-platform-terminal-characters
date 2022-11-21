<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/ehmicky/design/main/cross-platform/cross-platform_dark.svg"/>
  <img alt="cross-platform logo" src="https://raw.githubusercontent.com/ehmicky/design/main/cross-platform/cross-platform.svg" width="500"/>
</picture>

[![Node](https://img.shields.io/badge/-Node.js-808080?logo=node.js&colorA=404040&logoColor=66cc33)](https://www.npmjs.com/package/cross-platform-terminal-characters)
[![TypeScript](https://img.shields.io/badge/-Typed-808080?logo=typescript&colorA=404040&logoColor=0096ff)](/types/main.d.ts)
[![Codecov](https://img.shields.io/badge/-Tested%20100%25-808080?logo=codecov&colorA=404040)](https://codecov.io/gh/ehmicky/cross-platform-terminal-characters)
[![Mastodon](https://img.shields.io/badge/-Mastodon-808080.svg?logo=mastodon&colorA=404040&logoColor=9590F9)](https://fosstodon.org/@ehmicky)
[![Medium](https://img.shields.io/badge/-Medium-808080.svg?logo=medium&colorA=404040)](https://medium.com/@ehmicky)

All the characters that work on most terminals.

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
correctly on most terminals and environments. This repository contains a list of
those characters:

- in this [`README.md`](#list-of-characters)
- as a [`characters.txt` file](#text-file)
- as a [binary](#cli) printing the full list
- as a [Node.js module](#api) for programmatic usage

# Terminals

This was tested on the following terminals, with their default font and
encoding.

- Ubuntu 20.10:
  - Gnome VTE:
    - Gnome terminal 3.38.0
    - XFCE terminal 0.8.9.2
    - Guake terminal 3.6.3
    - tilix 1.9.3
    - terminator 1.92
  - xterm 353
  - konsole 20.08.2
  - rxvt 9.22
  - PuTTY 0.74
  - xterm.js:
    - VSCode terminal 1.54.3
    - hyper 3.0.2
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
  - cmder 1.3.18
  - Fluent terminal 0.7.5.0
  - Terminus 1.0.135

This does not cover:

- EBCDIC
- Exotic custom fonts
- Other locales than `en_US` for the following terminals: Linux console (kernel)

# List of characters

The following characters work on most terminals.

When the character is displayed, its
[Unicode codepoint](https://en.wikipedia.org/wiki/Code_point) is shown above it.

## Control characters and spaces

```
000a Line feed          (some behavior is OS-specific)
000d Carriage return    (some behavior is OS-specific)
0009 Horizontal tab
0008 Backspace          (some behavior is terminal-specific)
001b Escape
0020 Space
00a0 Non-breaking space
```

## Latin alphabet

```
0041 0042 0043 0044 0045 0046
A    B    C    D    E    F
0047 0048 0049 004a 004b 004c
G    H    I    J    K    L
004d 004e 004f 0050 0051 0052
M    N    O    P    Q    R
0053 0054 0055 0056 0057 0058
S    T    U    V    W    X
0059 005a
Y    Z

0061 0062 0063 0064 0065 0066
a    b    c    d    e    f
0067 0068 0069 006a 006b 006c
g    h    i    j    k    l
006d 006e 006f 0070 0071 0072
m    n    o    p    q    r
0073 0074 0075 0076 0077 0078
s    t    u    v    w    x
0079 007a
y    z

00c0 00e0 00c1 00e1 00c2 00e2
À    à    Á    á    Â    â
00c3 00e3 00c4 00e4 00c5 00e5
Ã    ã    Ä    ä    Å    å
0100 0101 0102 0103 0104 0105
Ā    ā    Ă    ă    Ą    ą
00c6 00e6
Æ    æ
1e02 1e03
Ḃ    ḃ
00c7 00e7 0106 0107 0108 0109
Ç    ç    Ć    ć    Ĉ    ĉ
010a 010b 010c 010d
Ċ    ċ    Č    č
010e 010f 00d0 0110 00f0 0111
Ď    ď    Ð    Đ    ð    đ
1e0a 1e0b
Ḋ    ḋ
00c8 00e8 00c9 00e9 00ca 00ea
È    è    É    é    Ê    ê
00cb 00eb 0112 0113 0116 0117
Ë    ë    Ē    ē    Ė    ė
0118 0119 011a 011b
Ę    ę    Ě    ě
0192 1e1e 1e1f
ƒ    Ḟ    ḟ
011c 011d 011e 011f 0120 0121
Ĝ    ĝ    Ğ    ğ    Ġ    ġ
0122 0123
Ģ    ģ
0124 0125 0126 0127
Ĥ    ĥ    Ħ    ħ
00cc 00ec 00cd 00ed 00ce 00ee
Ì    ì    Í    í    Î    î
00cf 00ef 012a 012b 012e 012f
Ï    ï    Ī    ī    Į    į
0130 0131
İ    ı
0134 0135
Ĵ    ĵ
0136 0137
Ķ    ķ
0139 013a 013b 013c 013d 013e
Ĺ    ĺ    Ļ    ļ    Ľ    ľ
0141 0142
Ł    ł
1e40 1e41
Ṁ    ṁ
00d1 00f1 0143 0144 0145 0146
Ñ    ñ    Ń    ń    Ņ    ņ
0147 0148
Ň    ň
00d2 00f2 00d3 00f3 00d4 00f4
Ò    ò    Ó    ó    Ô    ô
00d5 00f5 00d6 00f6 014c 014d
Õ    õ    Ö    ö    Ō    ō
0150 0151 0152 0153 00d8 00f8
Ő    ő    Œ    œ    Ø    ø
1e56 1e57
Ṗ    ṗ
0154 0155 0156 0157 0158 0159
Ŕ    ŕ    Ŗ    ŗ    Ř    ř
015a 015b 015c 015d 015e 0218
Ś    ś    Ŝ    ŝ    Ş    Ș
015f 0219 0160 0161 1e60 1e61
ş    ș    Š    š    Ṡ    ṡ
0162 021a 0163 021b 0164 0165
Ţ    Ț    ţ    ț    Ť    ť
1e6a 1e6b
Ṫ    ṫ
00d9 00f9 00da 00fa 00db 00fb
Ù    ù    Ú    ú    Û    û
00dc 00fc 016a 016b 016c 016d
Ü    ü    Ū    ū    Ŭ    ŭ
016e 016f 0170 0171 0172 0173
Ů    ů    Ű    ű    Ų    ų
0174 0175 1e80 1e81 1e82 1e83
Ŵ    ŵ    Ẁ    ẁ    Ẃ    ẃ
1e84 1e85
Ẅ    ẅ
00dd 00fd 0176 0177 0178 00ff
Ý    ý    Ŷ    ŷ    Ÿ    ÿ
1ef2 1ef3
Ỳ    ỳ
0179 017a 017b 017c 017d 017e
Ź    ź    Ż    ż    Ž    ž
00de 00fe
Þ    þ
00df
ß
```

## Greek alphabet

```
0391 0392 0393 0394 0395 0396
Α    Β    Γ    Δ    Ε    Ζ
03b1 03b2 03b3 03b4 03b5 03b6
α    β    γ    δ    ε    ζ
0397 0398 03f4 0399 039a 039b
Η    Θ    ϴ    Ι    Κ    Λ
03b7 03b8      03b9 03ba 03bb
η    θ         ι    κ    λ
039c      039d 039e 039f 03a0
Μ         Ν    Ξ    Ο    Π
00b5 03bc 03bd 03be 03bf 03c0
µ    μ    ν    ξ    ο    π
03a1 03a3      03a4 03a5 03a6
Ρ    Σ         Τ    Υ    Φ
03c1 03c2 03c3 03c4 03c5 03c6
ρ    ς    σ    τ    υ    φ
03a7 03a8 03a9
Χ    Ψ    Ω
03c7 03c8 03c9 03f3
χ    ψ    ω    ϳ

0386 0388 0389 038a 03aa 038c
Ά    Έ    Ή    Ί    Ϊ    Ό
038e 03ab 038f 03ac 03ad 03ae
Ύ    Ϋ    Ώ    ά    έ    ή
03af 03ca 0390 03cc 03cd 03b0
ί    ϊ    ΐ    ό    ύ    ΰ
03cb 03ce 0384 0385
ϋ    ώ    ΄    ΅
```

## Cyrillic alphabet

```
0402 0403 0404 0405 0406 0407
Ђ    Ѓ    Є    Ѕ    І    Ї
0408 0409 040a 040b 040c 040d
Ј    Љ    Њ    Ћ    Ќ    Ѝ
040e 040f 0410 0411 0412 0413
Ў    Џ    А    Б    В    Г
0414 0415 0416 0417 0418 0419
Д    Е    Ж    З    И    Й
041a 041b 041c 041d 041e 041f
К    Л    М    Н    О    П
0420 0421 0422 0423 0424 0425
Р    С    Т    У    Ф    Х
0426 0427 0428 0429 042a 042b
Ц    Ч    Ш    Щ    Ъ    Ы
042c 042d 042e 042f 0430 0431
Ь    Э    Ю    Я    а    б
0432 0433 0434 0435 0436 0437
в    г    д    е    ж    з
0438 0439 043a 043b 043c 043d
и    й    к    л    м    н
043e 043f 0440 0441 0442 0443
о    п    р    с    т    у
0444 0445 0446 0447 0448 0449
ф    х    ц    ч    ш    щ
044a 044b 044c 044d 044e 044f
ъ    ы    ь    э    ю    я
0450 0451 0452 0453 0454 0455
ѐ    ё    ђ    ѓ    є    ѕ
0456 0457 0458 0459 045a 045b
і    ї    ј    љ    њ    ћ
045c 045d 045e 045f 0490 0491
ќ    ѝ    ў    џ    Ґ    ґ
04ae 04d0 04d1
Ү    Ӑ    ӑ
```

## Numbers

```
0030 0031 0032 0033 0034 0035
0    1    2    3    4    5
0036 0037 0038 0039
6    7    8    9

24ea 2460 2461 2462 2463 2464
⓪   ①   ②    ③    ④    ⑤
2465 2466 2467 2468
⑥   ⑦    ⑧   ⑨

00ba 00b9 00b2 00b3
º    ¹    ²    ³

0025 2030 00bc 00bd 00be
%    ‰    ¼    ½    ¾
```

## Math

```
002b 002d 002a 002f 00b1
+    -    *    /    ±
003d 2260 2248 2261
=    ≠    ≈    ≡
003c 003e 2264 2265
<    >    ≤    ≥

00d7 00f7 00ac 2310 2229
×    ÷    ¬    ⌐    ∩
221a 221e 2206 2320 2321
√    ∞    ∆    ⌠    ⌡
2126 00b0 00aa 207f
Ω    °    ª    ⁿ
```

## Punctuation

```
0021 00a1 203c 003f 00bf
!    ¡    ‼    ?    ¿
002c 002e 2026 003a 003b
,    .    …    :    ;
0028 0029 005b 005d 007b 007d
(    )    [    ]    {    }

0022 0027 0060
"    '    `
2018 2019 201a 201c 201d 201e
‘    ’    ‚    “    ”    „
00ab 00bb 2039 203a
«    »    ‹    ›

0026 007c 0023 0040 005c 005f
&    |    #    @    \    _
00a7 00b6
§    ¶
```

## Accents

```
007e 005e 00a8 00af 00b4 00b8
~    ^    ¨    ¯    ´    ¸
02c6 02c7 02c9 02d8 02d9 02db
ˆ    ˇ    ˉ    ˘    ˙    ˛
02dc 02dd
˜    ˝
```

## Box drawing

```
2588 2592 2591 25a0
██   ▒▒   ░░   ■

2500 2012 2014 2015 2501
─    ‒    —    ―    ━
2212 2013 2010
−−   ––   ‐‐

2502 2503 00a6
│    ┃    ¦

250c 250f 2510 2513
┌    ┏    ┐    ┓
2514 2517 2518 251b
└    ┗    ┘    ┛
251c 2523 251d 2520
├    ┣    ┝    ┠
2524 252b 2525 2528
┤    ┫    ┥    ┨
252c 2533 252f 2530
┬    ┳    ┯    ┰
2534 253b 2537 2538
┴    ┻    ┷    ┸
253c 254b 256c 253f 2542 256a
┼    ╋    ╬    ┿    ╂    ╪
```

## Geometrical shapes

```
00b7 2219 2022 25cf 25ca
·    ∙    •    ●    ◊
25b2 25bc 2190 2191 2192 2193
▲    ▼    ←    ↑    →    ↓
```

## Currency

```
0024 00a2 20ac 00a3 00a5 20a7
$    ¢    €    £    ¥    ₧
00a4
¤
```

## Other symbols

```
00a9 00ae 2122 2116 2020 2021
©    ®    ™    №    †    ‡
```

# Text file

The list is available in [`characters.txt`](characters.txt). The file is UTF-8
encoded.

# CLI

The following command prints the list of characters and their codepoints.

```
npx cross-platform-terminal-characters
```

# API

A Node module is available to retrieve the list of characters above or detect
non-cross-platform characters.

```
npm install cross-platform-terminal-characters
```

```js
import {
  regex,
  codepoints,
  characters,
} from 'cross-platform-terminal-characters'

// false, i.e. cross-platform
console.log(regex.test('≈'))
// true, i.e. not cross-platform
console.log(regex.test('≐'))
// Remove not cross-platform characters, i.e. print `example ≈ test  text`
console.log('example ≈ test ≐ text'.replace(regex, ''))

// Array of codepoint integers: [0x0008, 0x0009, ..., 0x25cf]
console.log(codepoints)
// Array of single-character strings: ['\b', '\t', ..., '●']
console.log(characters)
```

This package works in Node.js >=14.18.0. It is an ES module and must be loaded
using
[an `import` or `import()` statement](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c),
not `require()`.

# See also

- [cross-platform-node-guide](https://github.com/ehmicky/cross-platform-node-guide):
  How to write cross-platform Node.js code.
- [figures](https://github.com/sindresorhus/figures): Unicode symbols with
  Windows terminal fallbacks
- [log-symbols](https://github.com/sindresorhus/log-symbols): Colored symbols
  for various log levels
- [awesome-codepoints](https://github.com/Codepoints/awesome-codepoints):
  Curated list of Unicode characters with interesting features

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
    <td align="center"><a href="https://fosstodon.org/@ehmicky"><img src="https://avatars2.githubusercontent.com/u/8136211?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ehmicky</b></sub></a><br /><a href="https://github.com/ehmicky/cross-platform-terminal-characters/commits?author=ehmicky" title="Code">💻</a> <a href="#design-ehmicky" title="Design">🎨</a> <a href="#ideas-ehmicky" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ehmicky/cross-platform-terminal-characters/commits?author=ehmicky" title="Documentation">📖</a></td>
    <td align="center"><a href="http://bayleshanks.com"><img src="https://avatars.githubusercontent.com/u/586225?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bayle Shanks</b></sub></a><br /><a href="#userTesting-bshanks" title="User Testing">📓</a></td>
    <td align="center"><a href="https://github.com/michaelerule"><img src="https://avatars.githubusercontent.com/u/687425?v=4?s=100" width="100px;" alt=""/><br /><sub><b>M Rule</b></sub></a><br /><a href="#ideas-michaelerule" title="Ideas, Planning, & Feedback">🤔</a> <a href="#mentoring-michaelerule" title="Mentoring">🧑‍🏫</a> <a href="https://github.com/ehmicky/cross-platform-terminal-characters/pulls?q=is%3Apr+reviewed-by%3Amichaelerule" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
