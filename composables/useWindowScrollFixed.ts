export function useWindowScrollFixed() {
  const { x, y } = useWindowScroll()

  onMounted(() => {
    x.value = 0
    y.value = 0
    nextTick(() => {
      x.value = window.pageXOffset
      y.value = window.pageYOffset
    })
  })

  return { x, y }
}
