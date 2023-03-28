import fs from 'fs-extra'

const dereference = process.platform === 'win32' ? true : undefined

await fs.copy(
  '.demo/public/shiki/themes/cssninja-light-theme.json',
  'node_modules/shiki/themes/cssninja-light-theme.json',
  {
    dereference,
  },
)

await fs.copy(
  '.demo/public/shiki/themes/cssninja-dark-theme.json',
  'node_modules/shiki/themes/cssninja-dark-theme.json',
  {
    dereference,
  },
)

// Copy shiki assets to public folder, so that they can be lazy loaded
// from the browser
await fs.copy(
  'node_modules/vscode-oniguruma/release/onig.wasm',
  '.demo/public/shiki/dist/onig.wasm',
  {
    dereference,
  },
)
await fs.copy('node_modules/shiki/languages', '.demo/public/shiki/languages', {
  dereference,
})
await fs.copy('node_modules/shiki/themes', '.demo/public/shiki/themes', {
  dereference,
})
