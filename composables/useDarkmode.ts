const sharedDarkmode = createSharedComposable(() => {
  const preferredDark = usePreferredDark()
  const colorSchema = useCookie<'light' | 'dark' | undefined>('color-schema', {
    default: () => undefined,
  })

  const isDark = computed({
    get() {
      return colorSchema.value
        ? colorSchema.value === 'dark'
        : preferredDark.value
    },
    set(v: boolean) {
      colorSchema.value = v ? 'dark' : 'light'
    },
  })

  const toggleDark = useToggle(isDark)

  return {
    isDark,
    toggleDark,
  }
})

export const useDarkmode = () => sharedDarkmode()
