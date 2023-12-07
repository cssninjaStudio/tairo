<template>
  <div class="md:max-w-lg">
    <BaseAutocomplete
      v-model="selection"
      :items="countries"
      icon="lucide:globe-2"
      multiple
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
    >
      <template
        #autocomplete-multiple-list-item="{
          item,
          displayValue,
          removeItem,
        }"
      >
        <div class="nui-autocomplete-multiple-list-item flex gap-2 !px-2 !py-1">
          <Icon
            :name="item.icon"
            class="w-4"
          >
            {{ item.code }}
          </Icon>

          <span>{{ displayValue }}</span>

          <button type="button" @click="removeItem(item)">
            <Icon
              name="ph:x"
              class="nui-autocomplete-multiple-list-item-icon"
            />
          </button>
        </div>
      </template>
    </BaseAutocomplete>
  </div>
</template>

<script setup lang="ts">
import type { CountriesInfo, CountryInfo } from '~/utils/bundles/countries'

const countriesMap = shallowRef<CountriesInfo>({})
const countries = computed(() => Object.values(countriesMap.value))
const selection = ref<CountryInfo | CountryInfo[]>([])

// lazy load heavy dependencies
onNuxtReady(() => {
  import('~/utils/bundles/countries').then(({ getPhoneCountries }) => {
    countriesMap.value = getPhoneCountries()
  })
})
</script>
