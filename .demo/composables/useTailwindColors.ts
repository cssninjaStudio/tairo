import { reactive } from 'vue'
import { useCssVar } from '@vueuse/core'

export const useTailwindColors = () => {
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

  return {
    primary,
    info,
    success,
    warning,
    danger,
  }
}
