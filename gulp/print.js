import { createWriteStream } from 'fs'

import execa from 'execa'
import { getBinPath } from 'get-bin-path'

const binPath = getBinPath()

export const print = async function () {
  const writeStream = createWriteStream(LIST_PATH)
  const childProcess = execa(await binPath, { stderr: 'inherit' })
  childProcess.stdout.pipe(writeStream)
  await childProcess
}

const LIST_PATH = `${__dirname}/../characters.txt`

// eslint-disable-next-line fp/no-mutation
print.description = 'Print the list of characters to a file for non-npm users'
