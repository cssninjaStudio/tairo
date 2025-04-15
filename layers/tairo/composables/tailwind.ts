import { useMediaQuery } from '~/utils/bundle/vueuse'

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
