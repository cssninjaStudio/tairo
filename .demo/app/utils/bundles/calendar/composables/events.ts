import type { CalendarCustomAttribute, CalendarEvent } from '../types'
import { addDays, addHours, addMinutes, roundToNearestMinutes } from '~/utils/bundles/date-fns'

interface UseCalendarEventsProps {
  fromDate: MaybeRefOrGetter<Date>
  toDate: MaybeRefOrGetter<Date>
}

function randomDate(start: Date, end: Date) {
  return roundToNearestMinutes(
    new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    ),
    { nearestTo: 15 },
  )
}

export function useCalendarEvents(props: UseCalendarEventsProps) {
  const calendarEvents = ref<CalendarCustomAttribute<CalendarEvent>[]>([])
  const pendingEvents = ref<Omit<CalendarEvent, 'startDate' | 'endDate'>[]>([])
  async function refresh() {
    // This is a fake data, in real life you would fetch it from an API
    pendingEvents.value = [
      {
        id: '1',
        duration: 15,
        title: 'Sprint planning',
        category: 'team',
        features: {
          conversation: true,
          record: true,
          drive: true,
        },
        participants: [],
      },
      {
        id: '2',
        duration: 45,
        title: 'Weekly meeting',
        category: 'internal',
        features: {
          record: true,
          conversation: true,
        },
        participants: [
          {
            id: 16,
            photo: '/img/avatars/16.svg',
            name: 'Hermann Mayer',
          },
          {
            id: 10,
            photo: '/img/avatars/10.svg',
            name: 'Kendra Wilson',
          },
        ],
      },
      {
        id: '3',
        duration: 90,
        title: 'Feedback client',
        category: 'customer',
        features: {
          record: true,
          external: true,
        },
        participants: [
          {
            id: 5,
            photo: '/img/avatars/5.svg',
            name: 'Clarissa Miller',
          },
          {
            id: 8,
            photo: '/img/avatars/8.svg',
            name: 'Eddy Bricks',
          },
          {
            id: 3,
            photo: '/img/avatars/3.svg',
            name: 'Clark Smith',
          },
        ],
      },
      {
        id: '4',
        duration: 30,
        title: 'Pair programming',
        category: 'team',
        features: {
          conversation: true,
          drive: true,
        },
        participants: [],
      },
      {
        id: '5',
        duration: 60,
        title: 'Code Review',
        category: 'personal',
        features: {
          conversation: true,
        },
        participants: [],
      },
    ]

    for (let i = 0; i < 7; i++) {
      const date = addDays(toValue(props.fromDate), i)
      const events: CalendarCustomAttribute<CalendarEvent>[] = []
      const count = Math.floor(Math.random() * 3)
      for (let j = 0; j < count; j++) {
        const event = pendingEvents.value[
          Math.floor(Math.random() * pendingEvents.value.length)
        ]!
        const startDate = randomDate(addHours(date, 8), addHours(date, 18))
        const endDate = addMinutes(startDate, event.duration)
        events.push({
          key: `${i}-${j}`,
          customData: {
            ...event,
            id: `${i}-${j}`,
            startDate,
            endDate: addMinutes(startDate, event.duration),
          },
          dates: [startDate, endDate],
        })
      }
      calendarEvents.value.push(...events)
    }
  }

  // refresh on fromDate and toDate change and on mounted
  watch([() => toValue(props.fromDate), () => toValue(props.toDate)], refresh, {
    immediate: true,
  })

  return {
    calendarEvents,
    pendingEvents,
    refresh,
  }
}
