import { expectType } from 'tsd'

import { codepoints, characters, regex } from './main.js'

expectType<number>(codepoints[0]!)
expectType<string>(characters[0]!)
expectType<RegExp>(regex)
