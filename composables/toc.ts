export interface TocItem {
  id: string
  label: string
  level: number
}

/**
 * This component is used to generate the table of content
 * Use this in combination with the `TairoTocAnchor` component
 */
export function useToc() {
  const toc = useState<TocItem[]>('toc', () => [])
  const route = useRoute()

  function register(item: TocItem) {
    nextTick(() => {
      if (!toc.value.some((i) => i.id === item.id)) {
        toc.value.push(item)
      }
    })
  }

  watch(
    () => route.path,
    () => {
      toc.value = []
    },
    {
      immediate: true,
    },
  )

  return {
    toc,
    register,
  }
}
