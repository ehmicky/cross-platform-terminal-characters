import {
  codepoints,
  characters,
  regex,
} from 'cross-platform-terminal-characters'
import { expectType } from 'tsd'


expectType<number>(codepoints[0]!)
expectType<string>(characters[0]!)
expectType<RegExp>(regex)
