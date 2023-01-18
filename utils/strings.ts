import type { MaybeRef } from '@vueuse/shared'
import { format, parseISO, isDate } from 'date-fns'

export enum DateFormats {
  Short = 'MMM do, yyyy',
  Long = 'cccc, LLLL do, yyyy h:mm aa',
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
})

export function formatPrice(price?: MaybeRef<number>) {
  return formatter.format(unref(price ?? 0)).replace('.00', '')
}

export function formatDate(
  date?: any,
  pattern: DateFormats = DateFormats.Short,
) {
  if (!date) return ''
  if (isDate(date)) return format(date, pattern)
  return format(parseISO(date), pattern)
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
