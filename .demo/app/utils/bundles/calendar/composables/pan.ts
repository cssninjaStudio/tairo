import { useEventListener } from '@vueuse/core'

export function useViewPan(
  container: Ref<HTMLElement | null>,
  canPan: MaybeRefOrGetter<boolean> = true,
) {
  const isViewPaning = ref(false)
  const isViewMoved = ref(false)
  const viewPanStart = ref(0)

  useEventListener(container, 'mousedown', (e: MouseEvent) => {
    if (!container.value) {
      return
    }
    if (!toValue(canPan) || isViewPaning.value) {
      return
    }
    isViewPaning.value = true
    isViewMoved.value = false
    viewPanStart.value = container.value.scrollTop + e.clientY
  })
  useEventListener(container, 'mousemove', (e: MouseEvent) => {
    if (!isViewPaning.value) {
      return
    }

    if (!isViewMoved.value) {
      isViewMoved.value = true
    }

    container.value?.scrollTo({
      top: viewPanStart.value - e.clientY,
    })
  })
  useEventListener(container, 'mouseup', (e: MouseEvent) => {
    if (!isViewPaning.value) {
      return
    }

    isViewPaning.value = false
    isViewMoved.value = false
    viewPanStart.value = 0
  })
  useEventListener(container, 'mouseleave', (e: MouseEvent) => {
    if (!isViewPaning.value) {
      return
    }

    isViewPaning.value = false
    isViewMoved.value = false
    viewPanStart.value = 0
  })

  return {
    isViewPaning,
    isViewMoved,
    // viewPanStart,
  }
}
