import { format, isDate, parseISO } from 'date-fns'

const DateFormats = {
  Short: 'MMM do, yyyy',
  Long: 'cccc, LLLL do, yyyy h:mm aa',
}

export type DateFormatsNames = keyof typeof DateFormats

export function formatDate(date?: any, pattern: DateFormatsNames = 'Short') {
  if (!date) return ''
  if (isDate(date)) return format(date, DateFormats[pattern])
  return format(parseISO(date), DateFormats[pattern])
}
