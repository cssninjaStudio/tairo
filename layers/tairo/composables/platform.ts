import { tryOnBeforeMount } from '~/utils/bundle/vueuse'

const macLikeRE = /Mac|iP/

/**
 * Boolean indicating if the platform is a Mac or iOS device.
 */
export function useIsMacLike() {
  const isMac = ref(false)
  tryOnBeforeMount(() => {
    if (macLikeRE.test(navigator.platform)) {
      isMac.value = true
    }
  })

  return readonly(isMac)
}

export function useMetaKey() {
  const isMac = useIsMacLike()

  return computed(() => {
    return isMac.value ? '⌘' : 'ctrl'
  })
}
