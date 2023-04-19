export default defineEventHandler((event) => {
  const query = getQuery(event)
  const from = query.from || 'Tairo'

  return `Hello ${from}!`
})
