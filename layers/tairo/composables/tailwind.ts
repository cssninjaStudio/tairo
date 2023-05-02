import { useCssVar } from '@vueuse/core'

/**
 * This function is used to expose Tailwind colors as reactive variables.
 *
 * @see layers/tairo/tailwind/plugin-expose-colors.ts
 */
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
    : useCssVar('--color-muted-600', document.documentElement)
  const subtitle = process.server
    ? ref('transparent')
    : useCssVar('--color-muted-400', document.documentElement)

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

/**
 * This function is used to expose Tailwind breakpoints as reactive variables.
 */
export function useTailwindBreakpoints() {
  const xs = useMediaQuery('(max-width: 639px)')
  const sm = useMediaQuery('(min-width: 640px)')
  const md = useMediaQuery('(min-width: 768px)')
  const lg = useMediaQuery('(min-width: 1025px)')
  const ptablet = useMediaQuery(
    '(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)',
  )
  const ltablet = useMediaQuery(
    '(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)',
  )
  const xl = useMediaQuery('(min-width: 1280px)')
  const doublexl = useMediaQuery('(min-width: 1536px)')

  return {
    xs,
    sm,
    md,
    lg,
    ptablet,
    ltablet,
    xl,
    doublexl,
  }
}
