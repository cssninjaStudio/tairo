import { useCssVar } from '@vueuse/core'

export function useTailwindColors() {
  const primary = process.server
    ? ref('transparent')
    : useCssVar('--primary', document.documentElement)
  const success = process.server
    ? ref('transparent')
    : useCssVar('--success', document.documentElement)
  const info = process.server
    ? ref('transparent')
    : useCssVar('--info', document.documentElement)
  const warning = process.server
    ? ref('transparent')
    : useCssVar('--warning', document.documentElement)
  const danger = process.server
    ? ref('transparent')
    : useCssVar('--danger', document.documentElement)
  const yellow = process.server
    ? ref('transparent')
    : useCssVar('--color-yellow-400', document.documentElement)
  const title = process.server
    ? ref('transparent')
    : useCssVar('--title', document.documentElement)
  const subtitle = process.server
    ? ref('transparent')
    : useCssVar('--subtitle', document.documentElement)

  return {
    primary,
    info,
    success,
    warning,
    danger,
    yellow,
    title,
    subtitle,
  }
}
