import {
  // addServerHandler,
  // addVitePlugin,
  addTemplate,
  createResolver,
  defineNuxtModule,
  resolveModule,
} from '@nuxt/kit'
import { createComponentMetaChecker } from 'vue-component-meta'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'vue-component-meta',
    configKey: 'vueComponentMeta',
  },
  setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)

    const tsconfigPath = resolver.resolve(nuxt.options.rootDir, 'tsconfig.json')
    const checker = createComponentMetaChecker(tsconfigPath, {
      forceUseTs: true,
      schema: {
        // enabled: true,
        ignore: [
          'RouteLocationRaw',
          'PropertyMetaSchema',
          'PropertyMeta',
          'VueComponentMeta',
        ],
      },
    })

    // const defaultProps = checker.getGlobalPropNames()

    function reducer(acc: any, component: any) {
      if (component.name) {
        acc[component.name] = component
      }

      return acc
    }

    async function mapper(component: any) {
      const path = resolveModule(component.filePath, {
        paths: nuxt.options.rootDir,
      })

      const data = {
        meta: {} as any,
        path,
      }
      try {
        const vueMeta = checker.getComponentMeta(path)
        data.meta = {
          name: component.pascalName,
          props: vueMeta.props
            .filter((prop) => !prop.global)
            .sort((a, b) => {
              // sort required properties first
              if (!a.required && b.required) {
                return 1
              }
              if (a.required && !b.required) {
                return -1
              }
              // then ensure boolean properties are sorted last
              if (a.type === 'boolean' && b.type !== 'boolean') {
                return 1
              }
              if (a.type !== 'boolean' && b.type === 'boolean') {
                return -1
              }

              return 0
            }),
          events: vueMeta.events,
          slots: vueMeta.slots,
          exposed: vueMeta.exposed,
        }

        // @ts-expect-error 'component-meta:parsed' is a custom hook
        await nuxt.callHook('component-meta:parsed', data)
      } catch (error: any) {
        console.error(`Unable to parse component "${path}": ${error}`)
        data.meta = {}
      }

      return data.meta
    }

    let componentMeta: any
    let script = 'export const all = {}\nexport default all'
    let dts = `import type { ComponentMeta } from 'vue-component-meta'`
    dts += `\nexport type NuxtComponentMeta = ComponentMeta & { name: string, global?: boolean }`

    nuxt.hook('components:extend', async (components) => {
      componentMeta = (await Promise.all(components.map(mapper))).reduce(
        reducer,
        {}
      )

      script = `export const all = ${JSON.stringify(componentMeta)}`
      script += `\nexport default all`

      for (const key in componentMeta) {
        script += `\nexport const meta${key} = ${JSON.stringify(
          componentMeta[key]
        )}`
      }

      dts += `\ntype NuxtComponentMetaNames = ${Object.keys(componentMeta)
        .map((name) => `"${name}"`)
        .join(' | ')}`
      dts += `\ndeclare const all: Record<NuxtComponentMetaNames, NuxtComponentMeta>`

      for (const key in componentMeta) {
        dts += `\ndeclare const meta${key}: NuxtComponentMeta`
      }
      dts += `\nexport { all as default, ${Object.keys(componentMeta)
        .map((name) => `meta${name}`)
        .join(' ,')} }`
    })

    const template = addTemplate({
      filename: 'nuxt-component-meta.mjs',
      getContents: () => script,
    })
    addTemplate({
      filename: 'nuxt-component-meta.d.ts',
      getContents: () => dts,
      write: true,
    })
    nuxt.options.alias['#nuxt-component-meta'] = template.dst!

    // addVitePlugin({
    //   name: 'vue-component-meta-loader',
    //   resolveId(id) {
    //     if (id === 'virtual:vue-component-meta') {
    //       return '\0virtual:vue-component-meta'
    //     }
    //   },
    //   load(id) {
    //     if (id === '\0virtual:vue-component-meta') {
    // let script = `export const all = ${JSON.stringify(componentMeta)}`

    // for (const key in componentMeta) {
    //   script += `\nexport const ${key}Meta = ${JSON.stringify(
    //     componentMeta[key]
    //   )}`
    // }

    //       return script
    //     }
    //   },
    // })
  },
})
