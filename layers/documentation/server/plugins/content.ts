import { version } from '../../../../package.json'

const markdownRe = /\.md$/g
const placeholderRe = /__TAIRO_LAYERS_VERSION__/g

export default defineNitroPlugin((nitroApp) => {
  // @ts-ignore
  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    if (!markdownRe.test(file.path)) {
      return
    }

    file.body = file.body.replace(placeholderRe, `v${version}`)
  })
})
