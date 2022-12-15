import { reactive } from 'vue'
import { useCssVar } from '@vueuse/core'

export const useThemeColors = () => {
  const primary = import.meta.env.SSR
    ? ref('transparent')
    : useCssVar('--primary', document.documentElement)
  const success = import.meta.env.SSR
    ? ref('transparent')
    : useCssVar('--success', document.documentElement)
  const info = import.meta.env.SSR
    ? ref('transparent')
    : useCssVar('--info', document.documentElement)
  const warning = import.meta.env.SSR
    ? ref('transparent')
    : useCssVar('--warning', document.documentElement)
  const danger = import.meta.env.SSR
    ? ref('transparent')
    : useCssVar('--danger', document.documentElement)

  const themeColors = reactive({
    primary,
    info,
    success,
    warning,
    danger,
  } as const)

  return themeColors
}
