export function useDocumentationMenu() {
  const isSearching = useState('dm-is-searching', () => false)
  const filter = useState('dm-filter', () => '')
  const displayMode = useState<'category' | 'component'>(
    'dm-display-mode',
    () => 'category',
  )

  function reset() {
    isSearching.value = false
    filter.value = ''
  }

  return {
    displayMode,
    isSearching,
    filter,
    reset,
  }
}
