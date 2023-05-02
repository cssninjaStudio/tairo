const macLikeRE = /Mac|iP/

export function useMetaKey() {
  const metaKey = ref('ctrl')
  tryOnBeforeMount(() => {
    if (macLikeRE.test(navigator.platform)) {
      metaKey.value = '⌘'
    }
  })

  return metaKey
}
