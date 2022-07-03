import { basename } from 'pathe'

export const useBaseComponentMeta = () => {
  const baseComponents =
    import.meta.globEager?.('~/components/base/**/*.vue') ?? {}

  // const nuxtApp = useNuxtApp()

  const components = Object.keys(baseComponents)
    .map((path) => {
      const component = baseComponents[path]?.default
      let name = 'Base'

      if (path.includes('form/')) {
        name += 'Form'
      }

      name += basename(path, '.vue')

      if (component.__name) {
        console.log(name, basename(path, '.vue'), component)
      }
      //
      return {
        name,
        emits: component.emits,
        props: component.props,
        component,
      }
    })
    .reduce<
      Record<string, { name: string; emits: any; props: any; component: any }>
    >((acc, component) => {
      acc[component.name] = component

      return acc
    }, {})

  return components
}
