import { copy } from 'fs-extra'

const dereference = process.platform === 'win32' ? true : undefined

await copy(
  '_demo/public/shiki/themes/cssninja-light-theme.json',
  'node_modules/shiki/themes/cssninja-light-theme.json',
  {
    dereference,
  },
)

await copy(
  '_demo/public/shiki/themes/cssninja-dark-theme.json',
  'node_modules/shiki/themes/cssninja-dark-theme.json',
  {
    dereference,
  },
)

// Copy shiki assets to public folder, so that they can be lazy loaded
// from the browser
await copy(
  'node_modules/vscode-oniguruma/release/onig.wasm',
  '_demo/public/shiki/dist/onig.wasm',
  {
    dereference,
  },
)
await copy('node_modules/shiki/languages', '_demo/public/shiki/languages', {
  dereference,
})
await copy('node_modules/shiki/themes', '_demo/public/shiki/themes', {
  dereference,
})
