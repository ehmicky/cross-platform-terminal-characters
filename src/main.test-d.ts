import { expectType } from 'tsd'

import {
  characters,
  codepoints,
  regex,
} from 'cross-platform-terminal-characters'

expectType<number>(codepoints[0]!)
expectType<string>(characters[0]!)
expectType<RegExp>(regex)
