import type { CountryProperty } from 'country-codes-list'
import { customList } from 'country-codes-list'

export interface CountryInfo {
  code: string
  label?: string
  labelLocal?: string
  callingCode?: string
  icon: string
  region?: string
}
export type CountriesInfo = Record<
  string,
  CountryInfo
>

export function getPhoneCountries(): CountriesInfo {
  const key = 'countryCode' as CountryProperty

  const countryLabels = customList(key, '{countryNameEn}') as Record<string, string>
  const countryLocalLabels = customList(key, '{countryNameLocal}') as Record<string, string>
  const countryCallingCodes = customList(key, '{countryCallingCode}') as Record<string, string>
  const countryRegion = customList(key, '{region}') as Record<string, string>

  const countryCodes = Object.keys(countryLabels)
  const countries: CountriesInfo = {}

  for (const key of countryCodes) {
    countries[key] = {
      code: key,
      label: countryLabels[key],
      region: countryRegion[key],
      labelLocal: countryLocalLabels[key],
      callingCode: countryCallingCodes[key],
      icon: `flagpack:${key.toLowerCase()}`,
    }
  }

  return countries
}
