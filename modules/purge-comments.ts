import { addVitePlugin, defineNuxtModule } from '@nuxt/kit'
import MagicString from 'magic-string'

/**
 * This module removes HTML comments from Vue files.
 * 
 * Comments are rendered in the DOM, which can cause issues with some transitions and 
 * can cause hydration issues, so we remove them.
 */
export default defineNuxtModule({
  meta: {
    name: 'purge-comments',
  },
  setup() {
    addVitePlugin({
      name: 'purge-comments',
      enforce: 'pre',
      transform: (code, id) => {
        if (!id.endsWith('.vue') || !code.includes('<!--'))
          return

        const s = new MagicString(code)
        s.replace(/<!--(?:.*?)-->/sg, '')

        if (s.hasChanged()) {
          return {
            code: s.toString(),
            map: s.generateMap({ source: id, includeContent: true }),
          }
        }
      },
    })
  },
})
