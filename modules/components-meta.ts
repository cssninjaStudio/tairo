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
      schema: {
        enabled: true,
        ignore: ['RouteLocationRaw'],
      },
    })

    const defaultProps = checker.getGlobalPropNames()

    function reducer(acc: any, component: any) {
      if (component.name) {
        acc[component.name] = component
      }

      return acc
    }

    function mapper(component: any) {
      const path = resolveModule(component.filePath, {
        paths: nuxt.options.rootDir,
      })

      const data = {
        meta: {} as any,
      }
      try {
        // if (path.includes('Autocomplete.vue')) {
        //   console.log(path)
        const vueMeta = checker.getComponentMeta(path)
        data.meta = {
          name: component.pascalName,
          props: vueMeta.props
            .filter((prop) => !defaultProps.includes(prop.name))
            .sort((a, b) => {
              if (!a.required && b.required) {
                return 1
              }
              if (a.required && !b.required) {
                return -1
              }
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
        // }
      } catch (error: any) {
        console.error(`Unable to parse component "${path}": ${error}`)
        data.meta = {}
      }

      return data.meta
    }

    let componentMeta: any
    let script = 'export const all = {}\nexport default all'
    let dts = `import type { ComponentMeta } from 'vue-component-meta'`
    dts += `\nexport type VueComponentMeta = ComponentMeta & { name: string, global?: boolean }`
    dts += `\ndeclare const all: Record<string, VueComponentMeta>`

    nuxt.hook('components:extend', (components) => {
      componentMeta = components.map(mapper).reduce(reducer, {})

      script = `export const all = ${JSON.stringify(componentMeta)}`
      script += `\nexport default all`

      for (const key in componentMeta) {
        script += `\nexport const ${key}Meta = ${JSON.stringify(
          componentMeta[key]
        )}`
      }

      const metaComponentNames = Object.keys(componentMeta).map(
        (key) => `${key}Meta`
      )
      for (const name of metaComponentNames) {
        dts += `\ndeclare const ${name}: VueComponentMeta`
      }
      dts += `\nexport { all as default, all, ${metaComponentNames.join(',')} }`
    })

    const template = addTemplate({
      filename: 'vue-component-meta.mjs',
      getContents: () => script,
    })
    addTemplate({
      filename: 'vue-component-meta.d.ts',
      getContents: () => dts,
      write: true,
    })
    nuxt.options.alias['#vue-component-meta'] = template.dst!

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
