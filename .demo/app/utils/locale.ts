export function getLocaleFlag(code: string) {
  switch (code) {
    case 'en':
      return '/img/icons/flags/united-states-of-america.svg'
    case 'fr':
      return '/img/icons/flags/france.svg'
    case 'es':
      return '/img/icons/flags/spain.svg'
    case 'de':
      return '/img/icons/flags/germany.svg'
    case 'ar':
    case 'js':
    default:
      return '/img/icons/flags/united-states-of-america.svg'
  }
}
