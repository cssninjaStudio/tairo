import type {
  Awaitable,
  CalendarCustomAttribute,
  CalendarEvent,
  CalendarSettings,
} from '../types'
import { onKeyStroke } from '@vueuse/core'

import { addMinutes, roundToNearestMinutes } from '~/utils/bundles/date-fns'

import { topToDate } from '../view'

export function useCreateEvent(
  settings: CalendarSettings,
  calendarEvents: MaybeRefOrGetter<CalendarCustomAttribute<CalendarEvent>[]>,
  eventFactory: (date: Date) => Awaitable<Omit<CalendarEvent, 'id'>>,
  canCreate: MaybeRefOrGetter<boolean> = true,
  onCreate: (
    event: CalendarCustomAttribute<CalendarEvent>,
  ) => Awaitable<void> = () => {},
) {
  onKeyStroke('Escape', clearNew)

  const hasNew = computed(() => {
    return toValue(calendarEvents).some(attr => attr.key === 'new')
  })

  function clearNew() {
    const calendarEventsValue = toValue(calendarEvents)
    // clear new
    const idx = calendarEventsValue.findIndex(attr => attr.key === 'new')

    if (idx !== -1) {
      calendarEventsValue.splice(idx, 1)
    }
  }

  async function onCalendarClick(event: MouseEvent, currentDay = new Date()) {
    if (!toValue(canCreate)) {
      return
    }
    clearNew()

    const y = event.offsetY
    const dateClick = topToDate(settings, y, currentDay)
    if (!dateClick) {
      return
    }

    const date = roundToNearestMinutes(addMinutes(dateClick, -5), {
      nearestTo: settings.hourPrecision,
    })

    const newEventData = await eventFactory(date)
    const newEvent = {
      key: 'new',
      customData: {
        id: 'new',
        ...newEventData,
      },
      dates: [newEventData.startDate, newEventData.endDate],
    }

    await onCreate(newEvent)
  }

  return {
    hasNew,
    clearNew,
    onCalendarClick,
  }
}
