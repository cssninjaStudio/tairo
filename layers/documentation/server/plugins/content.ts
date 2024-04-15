import { version } from '../../../../package.json'

export default defineNitroPlugin((nitroApp) => {
  // @ts-ignore
  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    if (file._id.endsWith('.md')) {
      file.body = file.body.replaceAll('__TAIRO_LAYERS_VERSION__', `v${version}`)
    }
  })
})
