import type { EventCategory, EventCategoryTheme } from './types'

export const categoryTheme: Record<EventCategory, EventCategoryTheme> = {
  none: {
    name: 'Uncategorized',
    color: 'bg-muted-400 dark:bg-muted-600',
    outline: 'outline-muted-500/30',
  },
  customer: {
    name: 'Customers',
    color: 'bg-lime-500',
    outline: 'outline-lime-500/30',
  },
  internal: {
    name: 'Internal',
    color: 'bg-sky-500',
    outline: 'outline-sky-500/30',
  },
  team: {
    name: 'Team',
    color: 'bg-purple-500',
    outline: 'outline-purple-500/30',
  },
  personal: {
    name: 'Personal',
    color: 'bg-rose-500',
    outline: 'outline-rose-500/30',
  },
}
