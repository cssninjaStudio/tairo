import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { addComponentsDir, defineNuxtModule, installModule, useLogger } from '@nuxt/kit'
import MagicString from 'magic-string'
import { join } from 'pathe'
import { version } from '../../package.json'

// This is a regular expression used to extract the example source code from the markdown content.
const docExampleRe = /^<!-- demo: #examples\/([\w-]+)\/([\w-]+)(:?.vue)? -->$/gm
const tairoVersionRe = /__TAIRO_VERSION__/g

// Custom nuxt module to make the examples available in the markdown content.
// It also enable the nuxt-component-meta module to inject the component metadata.
export default defineNuxtModule({
  meta: {
    name: 'content-documentation',
  },
  setup(options, nuxt) {
    const logger = useLogger('content-documentation')

    const examplesFolder = fileURLToPath(new URL('../examples', import.meta.url))

    addComponentsDir({
      path: examplesFolder,
      prefix: 'examples',
      pathPrefix: true,
      isAsync: true,
    })

    /**
     * This hook is used to inject the tairo version
     * into the markdown documentation content.
     */
    nuxt.hook('content:file:beforeParse', async ({ file }) => {
      if (file.extension !== '.md') {
        return
      }

      const s = new MagicString(file.body)

      s.replace(tairoVersionRe, version)

      file.body = s.toString()
    })

    /**
     * This hook is used to inject the example source code
     * into the markdown documentation content.
     */
    nuxt.hook('content:file:beforeParse', async ({ file }) => {
      if (file.extension !== '.md') {
        return
      }

      if (!docExampleRe.test(file.body)) {
        return
      }

      const reads: Promise<void>[] = []
      const replacements: {
        search: string
        replace: string
      }[] = []

      // Ensure the regex is reset before using it
      docExampleRe.lastIndex = 0
      const matches = [...file.body.matchAll(docExampleRe)]

      for (const [search, folder, name] of matches) {
        const path = join(examplesFolder, `/${folder}/${name}.vue`)

        if (!existsSync(path)) {
          logger.warn(`Example file not found in "${file.id}": ${path}`)
          continue
        }

        reads.push(
          readFile(path, 'utf-8')
            .then((source) => {
              if (!source) {
                logger.warn(`Example file is empty in "${file.id}": ${path}`)
                return
              }

              const replace = [
                '::doc-component-demo',
                '',
                '#demo',
                `:examples-${folder}-${name}`,
                '',
                '#source',
                ':::code-group',
                `\`\`\`vue [#examples/${folder}/${name}.vue]`,
                source.trim(),
                '```',
                ':::',
                '::',
              ].join('\n')

              replacements.push({ search, replace })
            })
            .catch((error) => {
              logger.warn(`Error reading example file in "${file.id}": ${path}`)
              logger.error(error)
            }),
        )
      }

      await Promise.all(reads)

      const s = new MagicString(file.body)
      for (const { search, replace } of replacements) {
        s.replace(search, replace)
      }

      file.body = s.toString()
    })

    // if (nuxt.options.dev && !import.meta.env.ENABLE_DOCUMENTATION) {
    //   logger.info('Documentation component meta disabled during dev, set ENABLE_DOCUMENTATION=true to enable it')

    installModule('nuxt-component-meta', {
      metaSources: ['@cssninja/tairo-component-meta'],
      exclude: [
        () => true,
      ],
    })

    //   return
    // }

    // logger.info('Documentation component meta enabled, make sure to set NODE_OPTIONS=--max-old-space-size=8192')
    // installModule('nuxt-component-meta', {
    //   exclude: [
    //     (component: any) => {
    //       const hasBasePrefix = component?.pascalName?.startsWith('Base')
    //       const hasTairoPrefix = component?.pascalName?.startsWith('Tairo')
    //       const hasAddonPrefix = component?.pascalName?.startsWith('Addon')
    //       const isBlacklisted = hasBasePrefix || ['TairoWelcome', 'TairoLogo', 'TairoLogoText'].includes(component?.pascalName)

    //       const isExcluded = !(hasTairoPrefix || hasAddonPrefix)

    //       return isBlacklisted || isExcluded
    //     },
    //   ],
    // })
  },
})
