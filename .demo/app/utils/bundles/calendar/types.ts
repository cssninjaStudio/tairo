import type { Calendar } from 'v-calendar'

export type Awaitable<T> = T | Promise<T>

export type VCalendarAttribute = NonNullable<
  InstanceType<typeof Calendar>['$props']['attributes']
>[number]

export type CalendarCustomAttribute<T = unknown> = Partial<
  Omit<VCalendarAttribute, 'customData'>
> & {
  customData: T
  dates: Date[]
}

export interface CalendarSettings {
  hideWeekends: boolean
  hourOpen: number
  hourClose: number
  hourPrecision: number
  hourHeight: number
  dayOffsetY: number
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export type EventCategory =
  | 'customer'
  | 'internal'
  | 'team'
  | 'personal'
  | 'none'
export interface EventCategoryTheme {
  name: string
  color: string
  outline: string
}

export interface CalendarEvent {
  id: string
  startDate: Date
  endDate: Date
  duration: number

  title: string
  category: EventCategory
  features?: {
    record?: boolean
    drive?: boolean
    external?: boolean
    conversation?: boolean
  }
  participants: {
    id: number
    photo: string
    name: string
  }[]
  // tasks?: {
  //   status: string
  //   name: string
  // }[]
}
