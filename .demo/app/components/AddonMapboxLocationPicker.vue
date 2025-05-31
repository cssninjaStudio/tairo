<script lang="ts">
import type { GeocoderOptions } from '@mapbox/mapbox-gl-geocoder'
import type { Map, MapOptions, Marker, MarkerOptions } from 'mapbox-gl'
import { useVModel } from '@vueuse/core'
import { hash } from 'ohash'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import 'mapbox-gl/dist/mapbox-gl.css'

type MapboxGL = typeof import('mapbox-gl').default
type MapboxGeocoderGL = typeof import('@mapbox/mapbox-gl-geocoder')
type MapboxGeocoder = InstanceType<MapboxGeocoderGL>

export interface MapInitEvent {
  mapboxgl: MapboxGL
  map: Map
  geocoder: MapboxGeocoder
}
export interface MapPosition {
  lat: number
  lng: number
}

export interface AddonMapboxLocationPickerProps {
  /** The position of the marker when it is initially rendered. Use when you do not need to control its value. */
  defaultValue?: MapPosition
  /** The controlled position of the marker. Can be binded with v-model. */
  modelValue?: MapPosition
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
  options?: Omit<MapOptions, 'container'>
  geocoder?: boolean | Omit<GeocoderOptions, 'accessToken' | 'mapboxgl'>
  marker?: boolean | MarkerOptions
  geolocation?: boolean
}
export interface AddonMapboxLocationPickerEmits {
  'init': [MapInitEvent]
  'update:modelValue': [MapPosition]
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<AddonMapboxLocationPickerProps>(), {
  rounded: 'md',
  geocoder: true,
  geolocation: true,
  marker: true,
  options: () => ({}),
})
const emits = defineEmits<AddonMapboxLocationPickerEmits>()

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: (props.modelValue === undefined) as false,
}) as Ref<MapPosition>

let mapboxgl: MapboxGL
let Geocoder: MapboxGeocoderGL

const isCurrentLocation = ref(false)
const isLoading = ref(true)
const hasError = ref(true)
const config = useRuntimeConfig()
const colorMode = useColorMode()

const mapElement = useTemplateRef<HTMLElement>('mapElement')
const map = shallowRef<Map>()
const marker = shallowRef<Marker>()
const geocoder = shallowRef<MapboxGeocoder>()

watch([
  () => hash(props.options),
  () => hash(props.geocoder),
  () => hash(props.marker),
  () => hash(props.geolocation),
], initMapbox)
onMounted(initMapbox)
onBeforeUnmount(() => {
  map.value?.remove()
  map.value = undefined
})
watch(colorMode, updateMapStyle)
watch(modelValue, updatePositionMarker)

async function initMapbox() {
  try {
    if (!config.public.mapboxToken) {
      hasError.value = true
      return
    }
    if (!mapElement.value) {
      return
    }

    hasError.value = false
    isLoading.value = true

    if (!mapboxgl || !Geocoder) {
      // Lazy load mapbox and geocoder to reduce bundle size
      const [_MapboxGl, _MapboxGeocoder] = await Promise.all([
        import('mapbox-gl').then(m => m.default),
        import('@mapbox/mapbox-gl-geocoder').then(m => m.default),
      ])

      mapboxgl = _MapboxGl
      Geocoder = _MapboxGeocoder
    }
    mapboxgl.accessToken = config.public.mapboxToken

    if (map.value) {
      map.value?.remove()
    }

    map.value = new mapboxgl.Map({
      container: mapElement.value,
      style: getMapStyle(),
      center: modelValue.value,
      zoom: 11,
      ...props.options,
    })
    map.value.on('style.load', waitStyleLoaded)
    map.value.on('error', (event) => {
      hasError.value = true
    })

    // Update position on map click
    map.value.on('click', (event) => {
      modelValue.value = {
        lat: event.lngLat.lat,
        lng: event.lngLat.lng,
      }
      isCurrentLocation.value = false
    })

    if (props.geocoder && (!geocoder.value || !map.value.hasControl(geocoder.value as any))) {
      geocoder.value = new Geocoder({
        accessToken: mapboxgl.accessToken,
        // @ts-ignore
        mapboxgl,
        marker: false,
        ...(typeof props.geocoder === 'object' && props.geocoder ? props.geocoder : {}),
      })

      map.value.addControl(geocoder.value as any, 'top-left')
    }

    emits('init', {
      mapboxgl,
      map: map.value,
      geocoder: geocoder.value as any,
    })
  }
  catch (error) {
    hasError.value = true
  }
  finally {
    setTimeout(() => {
      isLoading.value = false
    }, 100)
  }
}
async function waitStyleLoaded() {
  if (!map.value) {
    return
  }

  if (!map.value.isStyleLoaded()) {
    await map.value.once('idle')
  }

  updatePositionMarker()
}
function getMapStyle() {
  if (props.options?.style) {
    return props.options.style
  }

  return colorMode.value === 'dark'
    ? 'mapbox://styles/mapbox/dark-v11'
    : 'mapbox://styles/mapbox/light-v11'
}
function updateMapStyle() {
  if (!map.value) {
    return
  }

  const style = getMapStyle()
  if (map.value.style.globalId !== style) {
    map.value.setStyle(style)
    waitStyleLoaded()
  }
}
function updatePositionMarker() {
  if (!map.value) {
    return
  }

  if (marker.value) {
    marker.value.remove()
    marker.value = undefined
  }

  if (!modelValue.value) {
    return
  }

  if (!props.marker) {
    return
  }

  marker.value = new mapboxgl.Marker({
    // Can't be a CSS variable because it doesn't work with the mapbox-gl-geocoder
    color: '#5d0ec0',
    draggable: true,
    ...(typeof props.marker === 'object' && props.marker ? props.marker : {}),
  })
    .setLngLat(modelValue.value)
    .on('dragend', (event) => {
      modelValue.value = {
        lat: event.target.getLngLat().lat,
        lng: event.target.getLngLat().lng,
      }
      isCurrentLocation.value = false
    })
    .addTo(map.value)
}
function getUsersLocation() {
  if (!navigator.geolocation) {
    return
  }

  navigator.geolocation.getCurrentPosition((pos) => {
    modelValue.value = {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    }
    isCurrentLocation.value = true

    nextTick(() => {
      map.value?.flyTo({
        center: modelValue.value,
      })
    })
  })
}
</script>

<template>
  <div
    class="location-picker relative overflow-hidden"
    :class="[
      props.rounded === 'none' && 'rounded-none',
      props.rounded === 'sm' && 'rounded-sm',
      props.rounded === 'md' && 'rounded-md',
      props.rounded === 'lg' && 'rounded-lg',
      props.rounded === 'xl' && 'rounded-xl',
    ]"
  >
    <div ref="mapElement" class="absolute inset-0 size-full">
      <div class="absolute inset-0 bg-muted-100 dark:bg-muted-800 flex items-center justify-center flex-col">
        <template v-if="isLoading">
          <Icon name="nui-icon:spiner" class="size-6 text-muted-400 dark:text-muted-500" />
        </template>
        <template v-else-if="hasError">
          <DevOnly>
            <BaseHeading size="lg">
              Invalid Mapbox token.
            </BaseHeading>
            <BaseParagraph class="text-muted-500">
              Set `NUXT_PUBLIC_MAPBOX_TOKEN` in the .env file.
            </BaseParagraph>
          </DevOnly>
        </template>
      </div>
    </div>

    <div class="absolute end-2.5 top-2.5">
      <BaseButton
        v-if="props.geolocation"
        size="icon-md"
        :rounded="props.rounded === 'xl' ? 'lg' : props.rounded"
        class="shadow-xl shadow-muted-300/30 dark:shadow-muted-900/40"
        @click="getUsersLocation"
      >
        <Icon :name="isCurrentLocation ? 'lucide:locate-fixed' : 'lucide:locate'" class="size-4 text-muted-500" />
      </BaseButton>
    </div>

    <slot />
  </div>
</template>

<style>
@reference '~/assets/main.css';

.location-picker {
  .mapboxgl-ctrl-geocoder {
    @apply bg-transparent shadow-none;
  }

  .mapboxgl-ctrl-geocoder input {
    @apply h-10 ps-10 font-sans text-input-default-text bg-input-default-bg border border-input-default-border shadow-xl shadow-muted-300/30 dark:shadow-muted-900/40 transition-colors duration-300;
    @apply in-[.rounded-none]:rounded-none!;
    @apply in-[.rounded-sm]:rounded-sm;
    @apply in-[.rounded-md]:rounded-md;
    @apply in-[.rounded-lg]:rounded-lg;
    @apply in-[.rounded-xl]:rounded-xl;
  }

  .mapboxgl-ctrl-geocoder--button {
    @apply bg-transparent;
  }

  .mapboxgl-ctrl-geocoder--icon-search {
    @apply text-muted-400 dark:text-muted-600 fill-current top-2.5 start-3 scale-[1.1];
  }
}
</style>
