import test from 'ava'
import execa from 'execa'
import { getBinPath } from 'get-bin-path'

const binPath = getBinPath()

test('Should print all characters', async (t) => {
  const { stdout } = await execa(await binPath)
  const lines = stdout.split('\n')
  lines.forEach((line) => {
    t.regex(line, LINE_REGEX)
  })
})

const LINE_REGEX = /^[0-9a-f]{4} {2}.$/u
