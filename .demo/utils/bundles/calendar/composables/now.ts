import type { CalendarSettings } from '../types'

import { dateToTop } from '../view'

export function useNowMarker(
  container: Ref<HTMLElement | null>,
  settings: CalendarSettings,
) {
  // now line
  const now = useNow({
    interval: 60_000, // 1 minute
  })

  const showNow = computed(() => {
    const hour = now.value.getHours()
    return hour > (settings.hourOpen || 0) && hour < (settings.hourClose || 0)
  })

  // scroll to now
  onMounted(async () => {
    if (!showNow.value || !container.value) {
      return
    }

    await new Promise(resolve => setTimeout(resolve, 200))
    const rect = container.value.getBoundingClientRect()

    const top = dateToTop(settings, now.value, now.value)
    const headOffset = 48 * 2

    container.value.scrollTo({
      top: top + headOffset - rect.height / 2,
      behavior: 'auto',
    })
  })

  return {
    now,
    showNow,
  }
}
