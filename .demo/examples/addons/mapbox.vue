<script setup lang="ts">
import type { AddonMapboxLocationPickerProps, MapInitEvent } from '~/components/AddonMapboxLocationPicker.vue'

const options: AddonMapboxLocationPickerProps['options'] = {
  center: {
    lat: 40.730610,
    lng: -73.935242,
  },
  zoom: 10,
}

const center = ref({
  lat: 40.730610,
  lng: -73.935242,
})

function onMapInit({ geocoder, map, mapboxgl }: MapInitEvent) {
  //
}
</script>

<template>
  <div>
    <LazyAddonMapboxLocationPicker
      v-model="center"
      class="col-span-12 aspect-16/9"
      rounded="lg"
      :options="options"
      :geocoder="{
        flyTo: true,
        placeholder: 'Search for a location...',
      }"
      @init="onMapInit"
    />
  </div>
</template>
