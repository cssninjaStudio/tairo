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
      return '/img/icons/flags/saudi-arabia.svg'
    case 'ch':
      return '/img/icons/flags/china.svg'
    case 'js':
      return '/img/icons/flags/china.svg'
    default:
      return '/img/icons/flags/united-states-of-america.svg'
  }
}
