import type {
  Awaitable,
  CalendarCustomAttribute,
  CalendarEvent,
  CalendarSettings,
} from '../types'

import {
  addMinutes,
  differenceInMinutes,
  isBefore,
  roundToNearestMinutes,
  setDay,
  setMonth,
  setYear,
} from '~/utils/bundles/date-fns'

import { minutesToHeight, topToDate } from '../view'

export function useDragEvent(
  settings: CalendarSettings,
  calendarEvents: MaybeRefOrGetter<CalendarCustomAttribute<CalendarEvent>[]>,
  onDragEnd: (
    event: CalendarCustomAttribute<CalendarEvent>,
  ) => Awaitable<void> = () => {},
) {
  // event height dragging handler, changes endDate
  const isHeightDragging = ref(false)
  function onHeightDragStart(
    attr: CalendarCustomAttribute<CalendarEvent>,
    e: MouseEvent | TouchEvent,
  ) {
    if (isHeightDragging.value) {
      return
    }
    isHeightDragging.value = true

    document.documentElement.classList.add('cursor-n-resize')

    const onPointerMove = (e: PointerEvent) => {
      const targetDay = (e.target as HTMLElement)?.dataset?.day
      if (!targetDay) {
        return
      }

      const y = e.offsetY
      const dateClick = topToDate(settings, y, attr.customData.endDate)
      if (!dateClick) {
        return
      }
      const date = roundToNearestMinutes(dateClick, {
        nearestTo: settings.hourPrecision,
      })
      if (!attr.customData.endDate) {
        return
      }
      if (date === attr.customData.endDate) {
        return
      }
      if (isBefore(date, attr.customData.startDate)) {
        return
      }

      attr.customData.endDate = date
    }

    const onPointerUp = async (e: MouseEvent | TouchEvent) => {
      document.documentElement.removeEventListener('pointerup', onPointerUp)
      document.documentElement.removeEventListener('pointermove', onPointerMove)
      document.documentElement.classList.remove('cursor-n-resize')

      await onDragEnd(attr)

      setTimeout(() => {
        isHeightDragging.value = false
      }, 100)
    }

    document.documentElement.addEventListener('pointerup', onPointerUp, false)
    document.documentElement.addEventListener(
      'pointermove',
      onPointerMove,
      false,
    )
  }

  // event position dragging handler, changes startDate
  const isPositionDragging = ref(false)
  function onPositionDragStart(
    attr: CalendarCustomAttribute<CalendarEvent>,
    e: MouseEvent | TouchEvent,
  ) {
    if (isPositionDragging.value) {
      return
    }
    isPositionDragging.value = true

    document.documentElement.classList.add('cursor-grabbing')

    const onPointerMove = (e: PointerEvent) => {
      const targetDay = (e.target as HTMLElement)?.dataset?.day
      if (!targetDay) {
        return
      }
      const targetDayDate = new Date(targetDay)

      const y = e.offsetY - minutesToHeight(settings, 5)

      const dateClick = topToDate(settings, y, attr.customData.startDate)
      if (!dateClick) {
        return
      }
      const date = roundToNearestMinutes(dateClick, {
        nearestTo: settings.hourPrecision,
      })
      if (!attr.customData.startDate) {
        return
      }
      if (date !== attr.customData.startDate) {
        const diff = differenceInMinutes(
          attr.customData.endDate,
          attr.customData.startDate,
        )
        const start = setYear(
          setMonth(
            setDay(date, targetDayDate.getDay()),
            targetDayDate.getMonth(),
          ),
          targetDayDate.getFullYear(),
        )
        const end = addMinutes(start, diff)

        const calendarEventsValue = toValue(calendarEvents)
        const idx = calendarEventsValue.findIndex(
          item => item.customData.id === attr.customData.id,
        )
        calendarEventsValue[idx] = {
          ...calendarEventsValue[idx],
          customData: {
            ...(calendarEventsValue[idx]?.customData || {}) as CalendarEvent,
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
      document.documentElement.classList.remove('cursor-grabbing')

      const calendarEventsValue = toValue(calendarEvents)
      const idx = calendarEventsValue.findIndex(
        item => item.customData.id === attr.customData.id,
      )

      if (idx !== -1) {
        await onDragEnd(attr)
      }

      setTimeout(() => {
        isPositionDragging.value = false
      }, 100)
    }

    document.documentElement.addEventListener('pointerup', onPointerUp, false)
    document.documentElement.addEventListener(
      'pointermove',
      onPointerMove,
      false,
    )
  }

  return {
    isHeightDragging,
    onHeightDragStart,

    isPositionDragging,
    onPositionDragStart,
  }
}
