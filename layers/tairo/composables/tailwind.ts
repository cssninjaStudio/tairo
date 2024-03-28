import type { MaybeRefOrGetter } from 'vue'
import { useCssVar, useMediaQuery } from '@vueuse/core'

const rgbRe = /(\d+) (\d+) (\d+)/

function convertRGBToHex(color: string) {
  const [, r, g, b] = color.match(rgbRe) || []
  const red = Number(r).toString(16)
  const green = Number(g).toString(16)
  const blue = Number(b).toString(16)
  return `#${red}${green}${blue}`
}

function useCssVarWithRGB(name: MaybeRefOrGetter<string>) {
  if (import.meta.server) {
    return computed(() => 'transparent')
  }

  const color = useCssVar(name, document.documentElement)

  return computed(() => {
    if (color.value && rgbRe.test(color.value)) {
      return convertRGBToHex(color.value)
    }

    return color.value
  })
}

/**
 * This function is used to expose Tailwind colors as reactive variables.
 *
 * @see layers/tairo/tailwind/plugin-expose-colors.ts
 */
export function useTailwindColors() {
  const primary = useCssVarWithRGB('--color-primary-500')
  const success = useCssVarWithRGB('--color-success-500')
  const info = useCssVarWithRGB('--color-info-500')
  const warning = useCssVarWithRGB('--color-warning-500')
  const danger = useCssVarWithRGB('--color-danger-500')
  const yellow = useCssVarWithRGB('--color-yellow-400')
  const title = useCssVarWithRGB('--color-muted-600')
  const subtitle = useCssVarWithRGB('--color-muted-400')

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
