import type {
  Awaitable,
  CalendarCustomAttribute,
  CalendarEvent,
  CalendarSettings,
} from '../types'

import { addMinutes, roundToNearestMinutes } from '~/utils/bundles/date-fns'

import { minutesToHeight, topToDate } from '../view'

export function useDragEventPending(
  settings: CalendarSettings,
  calendarEvents: MaybeRefOrGetter<CalendarCustomAttribute<CalendarEvent>[]>,
  onDragEnd: (
    event: CalendarCustomAttribute<CalendarEvent>,
  ) => Awaitable<void> = () => {},
) {
  const isPendingEventDragging = ref(false)
  const pendingEventDraggingId = ref('')

  function onPendingEventDragStart({ payload }: { payload: CalendarEvent }) {
    if (isPendingEventDragging.value || !payload?.id) {
      return
    }

    isPendingEventDragging.value = true
    pendingEventDraggingId.value = payload.id

    // ghost event
    const ghostEvent: CalendarCustomAttribute<CalendarEvent> = {
      key: payload.id,
      customData: payload,
      dates: [payload.startDate, payload.endDate],
    }

    const onPointerMove = (e: PointerEvent) => {
      const targetDay = (e.target as HTMLElement)?.dataset?.day
      if (!targetDay) {
        clearPendingEventDragging()
        return
      }

      const y = e.offsetY - minutesToHeight(settings, 5)

      const dateClick = topToDate(settings, y, new Date(targetDay))
      if (!dateClick) {
        return
      }
      const date = roundToNearestMinutes(dateClick, {
        nearestTo: settings.hourPrecision,
      })
      if (date !== ghostEvent.customData.startDate) {
        const start = date
        const end = addMinutes(start, ghostEvent.customData.duration)

        const calendarEventsValue = toValue(calendarEvents)
        const idx = calendarEventsValue.findIndex(
          item => item.customData.id === ghostEvent.customData.id,
        )
        if (idx === -1) {
          calendarEventsValue.push({
            ...ghostEvent,
            customData: {
              ...ghostEvent.customData,
              startDate: start,
              endDate: end,
            },
            dates: [start, end],
          })
          return
        }
        calendarEventsValue[idx] = {
          ...calendarEventsValue[idx],
          customData: {
            ...(calendarEventsValue[idx]?.customData || {} as CalendarEvent),
            startDate: start,
            endDate: end,
          },
          dates: [start, end],
        }
      }
    }

    const onPointerUp = async (e: MouseEvent | TouchEvent) => {
      document.documentElement.removeEventListener('pointerup', onPointerUp)
      document.documentElement.removeEventListener('pointermove', onPointerMove)

      const calendarEventsValue = toValue(calendarEvents)
      const idx = calendarEventsValue.findIndex(
        item => item.customData.id === ghostEvent.customData.id,
      )

      if (idx !== -1) {
        const event = calendarEventsValue[idx]
        if (event) {
          calendarEventsValue.splice(idx, 1)
          await onDragEnd(event)
        }
      }

      setTimeout(() => {
        isPendingEventDragging.value = false
      }, 100)
    }

    document.documentElement.addEventListener('pointerup', onPointerUp, false)
    document.documentElement.addEventListener(
      'pointermove',
      onPointerMove,
      false,
    )
  }

  function clearPendingEventDragging() {
    // clear unscheduled
    const calendarEventsValue = toValue(calendarEvents)
    const idx = calendarEventsValue.findIndex(
      attr => attr.customData.id === pendingEventDraggingId.value,
    )

    if (idx !== -1) {
      calendarEventsValue.splice(idx, 1)
    }
  }

  return {
    isPendingEventDragging,
    pendingEventDraggingId,
    onPendingEventDragStart,
    clearPendingEventDragging,
  }
}
