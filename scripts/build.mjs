// Builds the static site into dist/: index.html, src/ (styles + script), and everything in public/.
// Files are assembled in a temporary folder and swapped in at the end, so a running
// preview server never serves a half-built dist/ (missing images, etc.).
import { copyFile, cp, mkdir, rename, rm } from 'node:fs/promises'

const root = new URL('../', import.meta.url)
const output = new URL('dist/', root)
const staging = new URL(`.dist-build-${process.pid}/`, root)

await rm(staging, { recursive: true, force: true })
await mkdir(staging, { recursive: true })

await Promise.all([
  copyFile(new URL('index.html', root), new URL('index.html', staging)),
  cp(new URL('src/', root), new URL('src/', staging), { recursive: true }),
  cp(new URL('public/', root), staging, { recursive: true, filter: (src) => !src.endsWith('.DS_Store') }),
])

await rm(output, { recursive: true, force: true })
await rename(staging, output)

console.log('Built dist/')
