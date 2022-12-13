import { createWriteStream } from 'node:fs'

import { execa } from 'execa'
import { getBinPath } from 'get-bin-path'

const binPath = getBinPath()

export const print = async () => {
  const writeStream = createWriteStream(LIST_PATH)
  const childProcess = execa(await binPath, { stderr: 'inherit' })
  childProcess.stdout.pipe(writeStream)
  await childProcess
}

const LIST_PATH = new URL('../characters.txt', import.meta.url)

print.description = 'Print the list of characters to a file for non-npm users'
