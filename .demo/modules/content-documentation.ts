import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { addComponentsDir, defineNuxtModule, installModule, useLogger } from '@nuxt/kit'
import { join } from 'pathe'
import { version } from '../../package.json'

// This is a regular expression used to extract the example source code from the markdown content.
const docExampleRe = /demo: '#examples\/([\w-]+)\/([\w-]+).vue'\r?\n---\r?\n?([\s\S]*?)\r?\n?::\r?\n/g

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
      global: true,
      prefix: 'examples',
      pathPrefix: true,
      isAsync: true,
    })

    /**
     * This hook is used to inject the example source code
     * into the markdown documentation content.
     */
    nuxt.hook('content:file:beforeParse', async ({ file }) => {
      if (file.extension !== '.md') {
        return
      }

      file.body = file.body.replace(/__TAIRO_VERSION__/g, version)
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

      for (const [search, folder, name, slot] of matches) {
        const path = join(examplesFolder, `/${folder}/${name}.vue`)

        if (slot?.includes('#source')) {
          continue
        }

        if (!existsSync(path)) {
          console.error(`Example file not found in "${file.id}": ${path}`)
          continue
        }

        reads.push(
          readFile(path, 'utf-8')
            .then((source) => {
              if (!source) {
                console.error(`Example file is empty in "${file.id}": ${path}`)
                return
              }

              const replace = [
                '---',
                slot,
                '',
                '#demo',
                `:examples-${folder}-${name}`,
                '',
                '#source',
                ':::code-group',
                `\`\`\`vue [#examples/${folder}/${name}.vue]`,
                source,
                '```',
                ':::',
                '::',
              ].join('\n')

              replacements.push({ search, replace })
            })
            .catch((error) => {
              console.error(`Error reading example file in "${file.id}": ${path}`)
              console.error(error)
            }),
        )
      }

      await Promise.all(reads)

      for (const { search, replace } of replacements) {
        file.body = file.body.replace(search, replace)
      }
    })

    if (nuxt.options.dev && !import.meta.env.ENABLE_DOCUMENTATION) {
      logger.info('Documentation component meta disabled during dev, set ENABLE_DOCUMENTATION=true to enable it')

      installModule('nuxt-component-meta', {
        exclude: [
          () => true,
        ],
      })

      return
    }

    logger.info('Documentation component meta enabled, make sure to set NODE_OPTIONS=--max-old-space-size=8192')
    installModule('nuxt-component-meta', {
      metaSources: ['@shuriken-ui/nuxt-component-meta'],
      exclude: [
        (component: any) => {
          const hasTairoPrefix = component?.pascalName?.startsWith('Tairo')
          const hasAddonPrefix = component?.pascalName?.startsWith('Addon')
          const isBlacklisted = ['TairoWelcome'].includes(component?.pascalName)

          const isExcluded = !(hasTairoPrefix || hasAddonPrefix)

          return isBlacklisted || isExcluded
        },
      ],
    })
  },
})
