import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

// This is a regular expression used to extract the example source code from the markdown content.
const docExampleRe = /demo: '#examples\/([\w-]+)\/([\w-]+).vue'\r?\n---\r?\n([\s\S]*?)\r?\n::\r?\n/g

export default defineNuxtConfig({
  compatibilityDate: '2025-03-05',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },

  extends: [
    /**
     * This extends the base Tairo layer.
     *
     * Alternatively you can use the following:
     * ["gh:cssninjaStudio/tairo/layers/tairo#v1.4.0", {
     *    install: true,
     *    giget: { auth: import.meta.env.GITHUB_TOKEN },
     * }]
     *
     * @see https://github.com/unjs/c12#extending-config-layer-from-remote-sources
     *
     * This would allows you to create an empty git repository
     * with only your source code and no demo.
     */
    '../layers/tairo',
  ],

  modules: [
    '@nuxt/image',
    '@nuxt/content',
    'nuxt-component-meta',
  ],
  alias: {
    '#examples': fileURLToPath(new URL('./examples', import.meta.url)),
  },
  hooks: {
    /**
     * This hook is used to inject the example source code
     * into the markdown documentation content.
     */
    'content:file:beforeParse': async ({ file }) => {
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
    },
  },
  content: {
    build: {
      markdown: {
        toc: { depth: 5, searchDepth: 120 },
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
          },
        },
      },
    },
    renderer: {
      anchorLinks: true,
    },
  },
  componentMeta: {
    metaSources: ['@shuriken-ui/nuxt-component-meta'],
    exclude: [
      (component: any) => {
        return true

        // const hasTairoPrefix = component?.pascalName?.startsWith('Tairo')
        // const hasAddonPrefix = component?.pascalName?.startsWith('Addon')
        // const isBlacklisted = ['TairoWelcome'].includes(component?.pascalName)

        // const isExcluded = !(hasTairoPrefix || hasAddonPrefix)

        // return isBlacklisted || isExcluded
      },
    ],
  },

  experimental: {
    viewTransition: true,
    defaults: {
      nuxtLink: {
        prefetchOn: {
          visibility: false,
          interaction: true,
        },
      },
    },
  },
  $development: {
    experimental: {
      appManifest: false,
      defaults: {
        nuxtLink: {
          prefetch: false,
        },
      },
    },
  },

  css: [
    /**
     * Load local font with @fontsource packages
     * @see https://fontsource.org/
     */
    '@fontsource-variable/fira-code/index.css',
    '@fontsource-variable/inter/index.css',
    '@fontsource-variable/karla/index.css',
    /**
     * Load Tailwind CSS
     */
    '~/assets/tailwind.css',
  ],

  typescript: {
    tsConfig: {
      // Here you can customize the generated tsconfig.json file
      // vueCompilerOptions: {
      //   target: 3.4,
      // },
    },
  },

  runtimeConfig: {
    public: {
      // mapbox config
      mapboxToken: '', // set it via NUXT_PUBLIC_MAPBOX_TOKEN env
      siteUrl: '', // set it via NUXT_PUBLIC_SITE_URL
    },
  },

  routeRules: {
    '/': {
      swr: 3600,
    },
    '/demos': {
      swr: 3600,
    },
    '/auth/**': {
      swr: 3600,
    },
    '/documentation': {
      swr: 3600,
    },
    '/documentation/**': {
      swr: 3600,
    },
    '/dashboards/**': {
      swr: 3600,
    },
    '/layouts/**': {
      swr: 3600,
    },
    '/wizard/**': {
      swr: 3600,
    },
  },

  // nuxt build configuration
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  vite: {
    define: {
      // Enable / disable Options API support. Disabling this will result in smaller bundles,
      // but may affect compatibility with 3rd party libraries if they rely on Options API.
      __VUE_OPTIONS_API__: false,
    },
    css: {
      // LightningCSS is a rust based CSS minifier that is faster than the default CSS minifier.
      // @see https://vite.dev/guide/features.html#lightning-css
      // @see https://lightningcss.dev/
      transformer: 'lightningcss',
    },
    build: {
      target: 'esnext',
      cssMinify: 'lightningcss',
    },
    // Defining the optimizeDeps.include option prebuilds the dependencies, this avoid
    // some reloads when navigating between pages during development.
    // It's also useful to track them usage.
    optimizeDeps: {
      include: [
        'scule',
        'klona',
        'v-calendar',
        // AddonApexcharts
        'vue3-apexcharts',
        // AddonInputPhone
        'libphonenumber-js/max',
        'country-codes-list',
        // AddonInputPassword
        '@zxcvbn-ts/core',
        '@zxcvbn-ts/language-common',
        '@zxcvbn-ts/language-en',
        '@zxcvbn-ts/language-fr',
        // AddonMarkdownRemark
        'rehype-external-links',
        'rehype-raw',
        'rehype-sanitize',
        'rehype-stringify',
        '@shikijs/rehype',
        'remark-gfm',
        'remark-parse',
        'remark-rehype',
        'unified',
        // AddonMapboxLocationPicker
        'ohash',
        'mapbox-gl',
        '@mapbox/mapbox-gl-geocoder',
        // useTailwindColors
        'colorjs.io',
        // form validation
        '@vee-validate/zod',
        'vee-validate',
        'zod',
        // calendar app
        'vue3-smooth-dnd',
        'date-fns',
        'date-fns/locale',
        // profile edit page
        'imask',
      ],
    },
  },
})
