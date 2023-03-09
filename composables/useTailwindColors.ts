import { useCssVar } from '@vueuse/core'

export function useTailwindColors() {
  const primary = process.server
    ? ref('transparent')
    : useCssVar('--color-primary-500', document.documentElement)
  const success = process.server
    ? ref('transparent')
    : useCssVar('--color-success-500', document.documentElement)
  const info = process.server
    ? ref('transparent')
    : useCssVar('--color-info-500', document.documentElement)
  const warning = process.server
    ? ref('transparent')
    : useCssVar('--color-warning-500', document.documentElement)
  const danger = process.server
    ? ref('transparent')
    : useCssVar('--color-danger-500', document.documentElement)
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
