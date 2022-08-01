import { basename } from 'pathe'

const toHyphen = (pascalCase: string) => {
  return pascalCase.replace(/([A-Z])/g, '-$1').toLowerCase()
}
const formatPropName = (propName: string) => {
  return propName === 'modelValue' ? 'v-model' : `${toHyphen(propName)}`
}
const formatPropValue = (prop: any) => {
  if (prop.type === Boolean && !prop.default) {
    return 'false'
  }

  if (typeof prop.default === 'undefined') {
    return ''
  }
  return typeof prop.default === 'string' ? `${prop.default}` : prop.default
}
const formatVBindShorthand = (propName: string, prop: any) => {
  if (prop.type === Boolean && prop.default) {
    return ''
  }

  return propName !== 'modelValue' && typeof prop.default !== 'string'
    ? ':'
    : ''
}
const formatProp = (propName: string, prop: any) => {
  let value = ''
  // const value = formatPropValue(prop.default)

  if (prop.type === Array) {
    value = `="[]"`
  } else if (!(prop.type === Boolean && prop.default)) {
    value = `="${formatPropValue(prop)}"`
  }

  // console.log(prop.type)

  return `${formatVBindShorthand(propName, prop)}${formatPropName(
    propName
  )}${value}`
}
const getCode = (component: any) => {
  let code = `<${component.name}`
  const props = component?.props ?? {}
  const emits = (component?.emits ?? []).filter(
    (event: string) => event !== 'update:modelValue'
  )

  const requiredProps = Object.keys(props).filter(
    (prop) => props[prop].required
  )
  const optionalProps = Object.keys(props).filter(
    (prop) => !props[prop].required
  )

  for (const prop of requiredProps) {
    code += `\n  ${formatProp(prop, props[prop])}`
  }

  if (requiredProps.length > 0) {
    code += '\n'
  }

  for (const prop of optionalProps) {
    code += `\n  ${formatProp(prop, props[prop])}`
  }

  if (optionalProps.length > 0) {
    code += '\n'
  }

  for (const event of emits) {
    code += `\n  @${toHyphen(event)}="(value?: any) => {}"`
  }

  if (emits.length > 0) {
    code += '\n'
  }

  code += '/>'

  return code
}

export const useBaseComponentMeta = () => {
  const baseComponents =
    import.meta.globEager?.('~/components/base/**/*.vue') ?? {}

  // const nuxtApp = useNuxtApp()

  const meta = Object.keys(baseComponents)
    .map((path) => {
      const component = baseComponents[path]?.default
      let name = 'Base'

      if (path.includes('form/')) {
        name += 'Form'
      }

      name += basename(path, '.vue')

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

  return {
    meta,
    getCode,
  }
}
