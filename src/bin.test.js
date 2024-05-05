import test from 'ava'
import { execaNode } from 'execa'
import { getBinPath } from 'get-bin-path'

const binPath = getBinPath()

test('Should print all characters', async (t) => {
  // eslint-disable-next-line fp/no-loops
  for await (const line of execaNode(await binPath)) {
    t.regex(line, LINE_REGEX)
  }
})

const LINE_REGEX = /^[0-9a-f]{4} {2}.$/u
