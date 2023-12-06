import { customList, type CountryProperty } from 'country-codes-list'

export type CountriesPhoneCode = {
  code: string
  label: string
  labelLocal: string
  callingCode: string
}
export type CountriesPhoneCodes = Record<
  string,
  CountriesPhoneCode
>

export function getPhoneCountries(): CountriesPhoneCodes {
  const key = 'countryCode' as CountryProperty

  const countryLabels = customList(key, '{countryNameEn}') as Record<string, string>
  const countryLocalLabels = customList(key, '{countryNameLocal}') as Record<string, string>
  const countryCallingCodes = customList(key, '{countryCallingCode}') as Record<string, string>

  const countryCodes = Object.keys(countryLabels)
  const countries: CountriesPhoneCodes = {}

  for (const key of countryCodes) {
    countries[key] = {
      code: key,
      label: countryLabels[key],
      labelLocal: countryLocalLabels[key],
      callingCode: countryCallingCodes[key],
    }
  }

  return countries
}
