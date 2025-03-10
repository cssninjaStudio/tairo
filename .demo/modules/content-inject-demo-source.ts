import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'content-inject-demo-source',
  },
  setup(options, nuxt) {
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
        const path = fileURLToPath(new URL(`./examples/${folder}/${name}.vue`, import.meta.url))

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
                `demo: '#examples/${folder}/${name}.vue'`,
                '---',
                slot,
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
  },
})
