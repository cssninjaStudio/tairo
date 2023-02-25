import fs from 'fs-extra'

const dereference = process.platform === 'win32' ? true : undefined

await fs.copy('node_modules/shiki-es/dist/assets', '.demo/public/shiki/', {
  dereference,
  filter: (src) =>
    src === 'node_modules/shiki/' ||
    src.includes('languages') ||
    src.includes('dist'),
})
