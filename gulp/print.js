import { execaNode } from 'execa'
import { getBinPath } from 'get-bin-path'

const binPath = getBinPath()

export const print = async () => {
  await execaNode(await binPath, {
    stdout: { file: 'characters.txt' },
    stderr: 'inherit',
  })
}

print.description = 'Print the list of characters to a file for non-npm users'
