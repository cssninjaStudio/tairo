import type { RouteLocationRaw } from 'vue-router'

export interface BaseButtonProps {
  type?: 'button' | 'submit' | 'reset'
  to?: RouteLocationRaw
  disabled?: boolean
  rel?: string
  target?: string
}

export const useButton = (
  props: BaseButtonProps,
  {
    // @todo: make this configurable (design tokens)
    externalDefaultRel = 'noopener noreferrer',
    externalDefaultTarget = '_blank',
  } = {}
) => {
  const NuxtLink = defineNuxtLink({})

  const is = computed(() => (props.to ? NuxtLink : 'button'))
  const type = computed(() => {
    if (is.value === 'button') {
      return props.type ? props.type : 'button'
    }

    return undefined
  })
  const external = computed(() => {
    if (typeof props.to === 'string' && props.to.startsWith('http')) {
      return true
    } else if (
      typeof props.to === 'object' &&
      'path' in props.to &&
      props.to.path.startsWith('http')
    ) {
      return true
    }

    return false
  })
  const rel = computed(() => {
    if (!external.value) {
      return undefined
    }

    return props.rel ?? externalDefaultRel
  })
  const target = computed(() => {
    if (!external.value) {
      return undefined
    }

    return props.target ?? externalDefaultTarget
  })

  const attributes = computed(() => ({
    to: props.disabled ? undefined : props.to,
    disabled: props.disabled,
    type: type.value,
    rel: rel.value,
    target: target.value,
  }))

  return {
    attributes,
    is,
  }
}
