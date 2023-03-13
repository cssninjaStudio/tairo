export function hightlightDocumentationSearch(
  text?: string,
  search?: string,
): string {
  if (!text) {
    return ''
  }

  if (!search) {
    return text
  }

  const regex = new RegExp(search, 'gi')

  return text.replace(regex, (part) => {
    return `<mark class="bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-200">${part}</mark>`
  })
}
