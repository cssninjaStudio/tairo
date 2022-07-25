import {
  // addServerHandler,
  addVitePlugin,
  createResolver,
  defineNuxtModule,
  resolveModule,
} from '@nuxt/kit'
import * as metaChecker from 'vue-component-meta'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'vue-component-meta',
    configKey: 'vueComponentMeta',
  },
  setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)
    const internalProps = [
      'ref',
      'key',
      'ref_for',
      'ref_key',
      'onVnodeBeforeMount',
      'onVnodeMounted',
      'onVnodeBeforeUpdate',
      'onVnodeBeforeUnmount',
      'onVnodeUpdated',
      'onVnodeUnmounted',
      'class',
      'style',
    ]

    const tsconfigPath = resolver.resolve(nuxt.options.rootDir, 'tsconfig.json')
    const checker = metaChecker.createComponentMetaChecker(tsconfigPath)

    let componentMeta: any
    nuxt.hook('components:extend', async (components) => {
      componentMeta = components
        .map((component) => {
          const path = resolveModule((component as any).filePath, {
            paths: nuxt.options.rootDir,
          })

          const data = {
            meta: {} as any,
          }
          try {
            const vueMeta = checker.getComponentMeta(path)
            data.meta = {
              name: (component as any).pascalName,
              global: Boolean(component.global),
              props: vueMeta.props
                .filter((prop) => !internalProps.includes(prop.name))
                .map((prop) => {
                  let type = prop.type
                  if (prop.isOptional) {
                    type = type.replace(' | undefined', '')
                  }

                  return {
                    ...prop,
                    type,
                  }
                })
                .sort((a, b) => {
                  if (a.isOptional && !b.isOptional) {
                    return 1
                  }
                  if (!a.isOptional && b.isOptional) {
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
            }
          } catch (error: any) {
            console.error(`Unable to parse component "${path}": ${error}`)
            data.meta = {}
          }

          return data.meta
        })
        .reduce((acc, component: any) => {
          if (component.name) {
            acc[component.name] = component
          }

          return acc
        }, {} as any)
    })

    addVitePlugin({
      name: 'vue-component-meta-loader',
      resolveId(id) {
        if (id === 'virtual:vue-component-meta') {
          return '\0virtual:vue-component-meta'
        }
      },
      load(id) {
        if (id === '\0virtual:vue-component-meta') {
          let script = `export const all = ${JSON.stringify(componentMeta)}`

          for (const key in componentMeta) {
            script += `\nexport const ${key}Meta = ${JSON.stringify(
              componentMeta[key]
            )}`
          }

          return script
        }
      },
    })
  },
})
