export interface TocItem {
  id: string
  label: string
  level: number
}

export const useToc = () => {
  const toc = useState<TocItem[]>('toc', () => [])

  function register(item: TocItem) {
    nextTick(() => {
      if (!toc.value.some((i) => i.id === item.id)) {
        toc.value.push(item)
      }
    })
  }

  return {
    toc,
    register,
  }
}
