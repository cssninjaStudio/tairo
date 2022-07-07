export interface TocItem {
  id: string
  label: string
  level: number
}

export const useToc = () => {
  const toc = useState<TocItem[]>('toc', () => [])
  const route = useRoute()

  watch(
    () => route.path,
    () => {
      toc.value = []
    }
  )

  const register = (item: TocItem) => {
    if (!toc.value.some((i) => i.id === item.id)) {
      toc.value.push(item)
    }
  }

  return {
    toc,
    register,
  }
}
