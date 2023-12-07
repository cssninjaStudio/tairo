<template>
  <div class="md:max-w-lg">
    <BaseAutocomplete
      v-model.prop="selection"
      :items="countries"
      icon="lucide:globe-2"
      clearable
      :properties="{
        label: 'label',
        sublabel: 'region',
        value: 'code',
        icon: 'icon',
      }"
      :filter-items="(query, items) => {
        if (!query) return items?.slice(0, 10) ?? []

        return (items ?? []).filter((item) => {
          const queryLower = query.toLowerCase()
          const label = item.label.toLowerCase()
          const labelLocal = item.labelLocal.toLowerCase()
          const region = item.region.toLowerCase()
          const code = item.code.toLowerCase()

          return (
            region.includes(queryLower) ||
            label.includes(queryLower) ||
            labelLocal.includes(queryLower) ||
            code.includes(queryLower)
          )
        }).slice(0, 10)
      }"
    />
  </div>
</template>

<script setup lang="ts">
import type { CountriesInfo, CountryInfo } from '~/utils/bundles/countries'

const countriesMap = shallowRef<CountriesInfo>({})
const countries = computed(() => Object.values(countriesMap.value))
const selection = ref('IT')

// lazy load heavy dependencies
onNuxtReady(() => {
  import('~/utils/bundles/countries').then(({ getPhoneCountries }) => {
    countriesMap.value = getPhoneCountries()
  })
})
</script>
