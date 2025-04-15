// @ts-ignore
import type { Page } from 'v-calendar/dist/types/src/utils/page'

import type { CalendarSettings } from '../types'

import { addDays, endOfDay, endOfWeek, startOfDay, startOfWeek } from '~/utils/bundles/date-fns'

export function useDateRange(settings: CalendarSettings) {
  const fromDate = ref(
    startOfWeek(startOfDay(new Date()), {
      weekStartsOn: settings.weekStartsOn,
    }),
  )
  const toDate = ref(
    endOfWeek(endOfDay(new Date()), {
      weekStartsOn: settings.weekStartsOn,
    }),
  )

  function onPageChange(pages: Page[]) {
    if (!pages[0]?.viewDays?.length) {
      return
    }

    fromDate.value = pages[0].viewDays[0].startDate
    toDate.value = pages[0].viewDays.at(-1)!.endDate
  }

  const weekdays = computed(() => {
    const start = fromDate.value
    const length = settings.hideWeekends ? 5 : 7
    const dates = []

    let i = 0
    while (dates.length < length) {
      const date = addDays(start, i)
      const day = date.getDay()
      ++i

      if (settings.hideWeekends && (day === 0 || day === 6)) {
        continue
      }
      dates.push(date)
    }

    return dates
  })

  return {
    fromDate,
    toDate,
    weekdays,
    onPageChange,
  }
}
