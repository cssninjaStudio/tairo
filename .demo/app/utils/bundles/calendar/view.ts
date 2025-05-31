import type { CalendarSettings } from './types'

import { differenceInMinutes, isSameDay, setHours, setMinutes } from '~/utils/bundles/date-fns'

export function dateToTop(
  settings: CalendarSettings,
  date: Date,
  currentDay = new Date(),
) {
  if (!isSameDay(currentDay, date)) {
    return settings.dayOffsetY
  }

  const hour = Math.max(date.getHours() - (settings.hourOpen || 0), 0)
  const minutes = date.getMinutes()
  return (
    hour * settings.hourHeight
    + (settings.hourHeight / 60) * minutes
    + settings.dayOffsetY
  )
}

export function topToDate(
  settings: CalendarSettings,
  top = 0,
  currentDay = new Date(),
) {
  const hour
    = Math.floor((top - settings.dayOffsetY) / settings.hourHeight)
      + (settings.hourOpen || 0)
  const minutes = Math.floor(
    ((top - settings.dayOffsetY) % settings.hourHeight)
    / (settings.hourHeight / 60),
  )

  if (hour < (settings.hourOpen || 0) || minutes < 0) {
    return null
  }

  const date = setMinutes(setHours(currentDay, hour), minutes)
  date.setMilliseconds(0)
  date.setSeconds(0)

  return date
}

export function minutesToHeight(settings: CalendarSettings, minutes: number) {
  return (settings.hourHeight / 60) * minutes
}

export function datesToHeight(
  settings: CalendarSettings,
  start: Date,
  end: Date,
  currentDay = new Date(),
) {
  if (isSameDay(start, end)) {
    return Math.min(
      minutesToHeight(settings, differenceInMinutes(end, start)),
      minutesToHeight(
        settings,
        differenceInMinutes(
          setMinutes(setHours(end, settings.hourClose || 0), 0),
          start,
        ),
      ),
    )
  }

  if (isSameDay(currentDay, start)) {
    return minutesToHeight(
      settings,
      differenceInMinutes(
        setMinutes(setHours(start, settings.hourClose || 0), 0),
        start,
      ),
    )
  }

  if (isSameDay(currentDay, end)) {
    return minutesToHeight(
      settings,
      differenceInMinutes(
        end,
        setMinutes(setHours(end, settings.hourOpen || 0), 0),
      ),
    )
  }

  console.error('Unexpected dates')
  return 0
}
