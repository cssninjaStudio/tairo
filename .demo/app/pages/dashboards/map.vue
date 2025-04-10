<script setup lang="ts">
import type { GeoJSONSource, LngLatLike, Map, MapOptions, Popup, TargetFeature } from 'mapbox-gl'
import type { GeoJsonLocationProperties } from '~~/server/api/geojson/locations'
import 'mapbox-gl/dist/mapbox-gl.css'

type MapboxGL = typeof import('mapbox-gl').default

definePageMeta({
  title: 'Map locations',
  preview: {
    title: 'Mapbox GL for location based apps',
    description: 'For location based apps',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-map-left.png',
    srcDark: '/img/screens/dashboards-map-left-dark.png',
    order: 23,
  },
})

// You must set the NUXT_PUBLIC_MAPBOX_TOKEN inside .env file
const options: Partial<MapOptions> = {
  center: [-77.02183, 38.90201],
  // pitch: 67.4,
  // bearing: 67,
  // zoom: 14.04,
  zoom: 12,
  hash: true,
  antialias: true,
  projection: 'globe',
  config: {
    basemap: {
      font: 'Inter',
      showPointOfInterestLabels: false,
      showPedestrianRoads: false,
      showTransitLabels: false,
    },
  },
}

let mapboxgl: MapboxGL

const mode = ref<'base' | 'navigation' | 'satellite'>('base')

const isLoading = ref(true)
const hasError = ref(true)
const config = useRuntimeConfig()
const colorMode = useColorMode()
const mapElement = useTemplateRef<HTMLElement>('mapElement')
const popupElement = useTemplateRef<HTMLElement>('popupElement')
const selectedLocation = shallowRef<TargetFeature>()
const map = shallowRef<Map>()
const popup = shallowRef<Popup>()

const { data: places, status } = useFetch('/api/geojson/locations', {
  lazy: true,
  server: false,
})

if (import.meta.dev && !config.public.mapboxToken) {
  console.warn(
    'NUXT_PUBLIC_MAPBOX_TOKEN environment variable is not defined, mapbox features are disabled',
  )
}

onMounted(initMapbox)
onBeforeUnmount(() => {
  map.value?.remove()
  map.value = undefined
})

watch(selectedLocation, updatePopup, { flush: 'post' })
watch(selectedLocation, focusFeatureCard)
watch(places, loadPlacesSource)
watch(colorMode, updateMapStyle)

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

    mapboxgl = await import('mapbox-gl').then(m => m.default)
    mapboxgl.accessToken = config.public.mapboxToken

    map.value = new mapboxgl.Map({
      ...options,
      container: mapElement.value,
      style: getMapStyle(),
    })
    map.value.on('style.load', waitStyleLoaded)
    map.value.on('error', (event) => {
      hasError.value = true
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

  loadPlacesSource()
  loadTerrain()

  if (!map.value.isStyleLoaded()) {
    await map.value.once('idle')
  }

  loadPlacesLayers()

  if (selectedLocation.value) {
    map.value?.setFeatureState(selectedLocation.value, { selected: true })
  }
}
function getMapStyle() {
  switch (mode.value) {
    case 'base':
      return colorMode.value === 'dark'
        ? 'mapbox://styles/mapbox/dark-v11'
        : 'mapbox://styles/mapbox/light-v11'
    case 'navigation':
      return colorMode.value === 'dark'
        ? 'mapbox://styles/mapbox/navigation-night-v1'
        : 'mapbox://styles/mapbox/navigation-day-v1'
    case 'satellite':
      return 'mapbox://styles/mapbox/standard-satellite'
  }
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

  if (mode.value === 'satellite') {
    if (colorMode.value === 'dark') {
      map.value.setConfigProperty('basemap', 'lightPreset', 'night')
    }
    else {
      map.value.setConfigProperty('basemap', 'lightPreset', 'day')
    }
  }
}
function loadPlacesLayers() {
  if (!map.value) {
    return
  }
  if (!map.value.getSource('places')) {
    map.value.addSource('places', {
      type: 'geojson',
      promoteId: 'id',
    })
  }

  const layers = map.value?.getStyle()?.layers
  const placeLayer = layers?.find(layer => layer.id === 'places')

  if (!placeLayer) {
    map.value.addLayer({
      id: 'places',
      type: 'circle',
      source: 'places',
      paint: {
        // 'circle-color': [
        //   'case',
        //   ['==', ['feature-state', 'selected'], true],
        //   '#ea3941',
        //   '#536ddd',
        // ],
        // 'circle-radius': [
        //   'case',
        //   ['==', ['feature-state', 'highlight'], true],
        //   7,
        //   6,
        // ],
        'circle-color': '#536ddd',
        'circle-radius': [
          'interpolate',
          ['linear'],
          ['zoom'],
          11,
          [
            'case',
            ['==', ['feature-state', 'selected'], true],
            5,
            ['==', ['feature-state', 'highlight'], true],
            7,
            6,
          ],
          16,
          [
            'case',
            ['==', ['feature-state', 'selected'], true],
            8,
            ['==', ['feature-state', 'highlight'], true],
            10,
            9,
          ],
        ],
        // 'circle-stroke-opacity': 0.2,
        // 'circle-stroke-width': [
        //   'case',
        //   ['==', ['feature-state', 'highlight'], true],
        //   3,
        //   4,
        // ],
        // 'circle-stroke-color': [
        //   'case',
        //   ['==', ['feature-state', 'selected'], true],
        //   '#ea3941',
        //   '#536ddd',
        // ],
        'circle-stroke-color': '#536ddd',
        'circle-stroke-opacity': 0.2,
        'circle-stroke-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          11,
          [
            'case',
            ['==', ['feature-state', 'selected'], true],
            5,
            ['==', ['feature-state', 'highlight'], true],
            3,
            4,
          ],
          16,
          [
            'case',
            ['==', ['feature-state', 'selected'], true],
            7,
            ['==', ['feature-state', 'highlight'], true],
            5,
            6,
          ],
        ],
      },
    })
  }

  if (!map.value._interactions.get('place-click')) {
    map.value.addInteraction('place-click', {
      type: 'click',
      target: { layerId: 'places' },
      handler: ({ feature, lngLat }) => {
        if (selectedLocation.value) {
          map.value?.setFeatureState(selectedLocation.value, { selected: false })
        }

        if (!feature) {
          selectedLocation.value = undefined
          return
        }

        map.value?.setFeatureState(feature, { selected: true })
        selectedLocation.value = feature
      },
    })

    map.value.addInteraction('place-mouseenter', {
      type: 'mouseenter',
      target: { layerId: 'places' },
      handler: ({ feature }) => {
        map.value!.setFeatureState(feature!, { highlight: true })
        map.value!.getCanvas().style.cursor = 'pointer'
      },
    })
    map.value.addInteraction('place-mouseleave', {
      type: 'mouseleave',
      target: { layerId: 'places' },
      handler: ({ feature }) => {
        map.value!.setFeatureState(feature!, { highlight: false })
        map.value!.getCanvas().style.cursor = ''
        return false
      },
    })
  }
}
async function loadPlacesSource() {
  if (!map.value) {
    return
  }
  if (!map.value.getSource('places')) {
    map.value.addSource('places', {
      type: 'geojson',
      data: places.value ?? {
        type: 'FeatureCollection',
        features: [],
      },
      promoteId: 'id',
    })
  }
  else if (places.value) {
    map.value.getSource<GeoJSONSource>('places')?.setData(places.value)
  }
}
function loadTerrain() {
  if (!map.value) {
    return
  }
  // Add terrain source, with slight exaggeration
  if (!map.value.getSource('mapbox-dem')) {
    map.value.addSource('mapbox-dem', {
      type: 'raster-dem',
      url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
      tileSize: 512,
      maxzoom: 10,
    })
  }
  map.value.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })

  // Add 3D buildings layer
  const layers = map.value?.getStyle()?.layers
  const buildingLayer = layers?.find(layer => layer.id === '3d-buildings')

  if (buildingLayer?.id) {
    map.value?.removeLayer(buildingLayer.id)
  }

  if (mode.value !== 'satellite') {
    // Get layer id to insert the 3d buildings below (if exists), to ensure buildings are below place markers
    const labelLayerId = layers?.find(layer => layer.type === 'symbol' && layer.layout?.['text-field'])?.id

    map.value?.addLayer(
      {
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 0,
        'maxzoom': 24,
        'paint': {
          'fill-extrusion-color': colorMode.value === 'dark' ? '#666' : '#ccc',
          'fill-extrusion-cast-shadows': true,
          'fill-extrusion-flood-light-intensity': 0.5,

          // Use an 'interpolate' expression to
          // add a smooth transition effect to
          // the buildings as the user zooms in.
          'fill-extrusion-height': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'height'],
          ],
          'fill-extrusion-base': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'min_height'],
          ],
          'fill-extrusion-opacity': 0.6,
        },
      },
      labelLayerId,
    )
  }
}
function focusFeatureCard() {
  if (!selectedLocation.value) {
    return
  }

  const id = selectedLocation.value.id
  document.querySelector(`[data-feature-id="${id}"]`)?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  })
}
function updatePopup() {
  if (popup.value) {
    popup.value.remove()
  }
  if (!selectedLocation.value || !popupElement.value || !map.value || !mapboxgl) {
    return
  }

  const feature = selectedLocation.value
  const coordinates = ((feature.geometry || {}) as any)?.coordinates as LngLatLike
  const properties = feature.properties as GeoJsonLocationProperties

  popup.value = new mapboxgl.Popup({
    closeOnClick: false,
    closeButton: false,
    className: '',
    offset: 20,
  })

  popup.value.setLngLat(coordinates)
  popup.value.setDOMContent(popupElement.value)
  popup.value.addTo(map.value)

  map.value.flyTo({
    center: coordinates,
    zoom: properties?.zoom ?? 17,
    bearing: properties?.bearing ?? 0,
    pitch: properties?.pitch ?? 45,
    essential: true, // this animation is considered essential with respect to prefers-reduced-motion
  })
}
function selectFeature(feature?: any) {
  if (selectedLocation.value) {
    map.value?.setFeatureState(selectedLocation.value, { selected: false })
  }

  if (!feature) {
    selectedLocation.value = undefined
    return
  }

  selectedLocation.value = {
    ...feature,
    source: 'places',
    id: feature.id,
  }
  map.value?.setFeatureState(selectedLocation.value!, { selected: true })
}
</script>

<template>
  <div
    class="map-container flex -mt-6 h-[calc(100dvh_-_56px)] flex-col lg:flex-row"
  >
    <!-- Sidebar -->
    <div
      class="dark:bg-muted-900 w-full shrink-0 bg-muted-50 h-[calc(100dvh_-_56px)] lg:w-96"
    >
      <div
        class="nui-slimscroll overflow-y-auto p-6 h-[calc(100dvh_-_56px)]!"
      >
        <!-- Title -->
        <BaseHeading
          size="xs"
          weight="medium"
          class="mb-4 uppercase tracking-wider flex"
        >
          <span class="text-muted-600 dark:text-muted-400 grow">Recent Locations</span>
          <Icon v-if="status === 'pending'" name="nui-icon:spiner" class="size-4 text-muted-400" />
        </BaseHeading>

        <!-- Cards list -->
        <div
          class="flex flex-col gap-4"
        >
          <template v-if="status === 'pending' && !places?.features">
            <BaseCard v-for="index in 5" :key="index" rounded="md" class="p-4 md:p-5">
              <div class="flex flex items-center gap-2">
                <BasePlaceload class="size-8 rounded-full shrink-0" />
                <div class="space-y-1 grow">
                  <BasePlaceload class="w-1/3 h-2 rounded-md" />
                  <BasePlaceload class="w-1/2 h-2 rounded-md" />
                </div>
              </div>
              <div class="space-y-1 mt-3">
                <BasePlaceload class="w-4/6 h-2 rounded-md" />
                <BasePlaceload class="w-5/6 h-2 rounded-md" />
              </div>
            </BaseCard>
          </template>
          <template v-else-if="places?.features">
            <BaseCard
              v-for="(feature, key) in places!.features"
              :key="key"
              class="cursor-pointer p-4 md:p-5"
              rounded="md"
              :data-feature-id="feature.properties?.id"
              :class="[
                selectedLocation?.id === feature.properties?.id && 'border-primary-500',
              ]"
              tabindex="0"
              role="button"
              @keydown.space.prevent="selectFeature(feature)"
              @click="selectFeature(feature)"
            >
              <div class="relative">
                <div class="relative mb-3 flex items-center gap-2">
                  <BaseAvatar size="xs" :src="feature.properties?.logo" />
                  <div class="font-sans">
                    <h4
                      class="text-muted-800 dark:text-muted-100 text-sm font-medium leading-none"
                    >
                      {{ feature.properties?.name }}
                    </h4>
                    <p class="text-muted-400 text-xs">
                      Open until {{ feature.properties?.openingCount }}
                    </p>
                  </div>
                  <div class="ms-auto flex items-center gap-1">
                    <Icon name="uiw:star-on" class="size-3 text-yellow-400" />
                    <BaseText size="xs" weight="medium" class="text-muted-400">
                      {{ feature.properties?.rating }}
                    </BaseText>
                  </div>
                </div>
                <div
                  class="text-muted-500 dark:text-muted-400 font-sans text-xs"
                >
                  <p>
                    {{ feature.properties?.description }}
                  </p>
                </div>

                <div
                  v-if="selectedLocation?.id === feature.properties?.id"
                  class="mt-3 flex items-center gap-2"
                >
                  <BaseButton size="sm" variant="primary">
                    Schedule a trip
                  </BaseButton>
                  <BaseButton size="sm" variant="muted">
                    Details
                  </BaseButton>
                  <div
                    class="ms-auto text-muted-400 flex items-center gap-1 font-sans text-xs"
                  >
                    <Icon name="lucide:flag" class="size-3" />
                    <span class="dark-inverted">
                      {{ feature.properties?.distance }} miles
                    </span>
                  </div>
                </div>
              </div>
            </BaseCard>
          </template>
        </div>
      </div>
    </div>

    <!-- Map -->
    <div class="relative grow h-[calc(100dvh_-_56px)]">
      <div
        v-if="selectedLocation"
        ref="popupElement"
        class="starting:opacity-0 transition-discrete duration-300 transition-all"
      >
        <DemoMapMarker
          v-bind="(selectedLocation.properties as GeoJsonLocationProperties)"
          @close="selectFeature()"
        />
      </div>
      <div
        ref="mapElement"
        class="absolute inset-0 size-full"
      >
        <div class="absolute inset-0 bg-muted-100 dark:bg-muted-800 flex items-center justify-center flex-col">
          <template v-if="isLoading">
            <Icon name="nui-icon:spiner" class="size-5 text-muted-400 dark:text-muted-500" />
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

      <div class="group/modes absolute bottom-8 start-2">
        <div class="flex items-center gap-3">
          <BaseTooltip :content="`Mode: ${mode}`" :bindings="{ portal: { disabled: true } }">
            <div role="button" class="group/button flex items-center justify-center size-20 border border-muted-300 dark:border-muted-800 rounded-xl bg-white dark:bg-muted-950 shadow-lg">
              <img :src="`/img/illustrations/maps/${mode}.svg`" alt="Map mode" class="size-[4.35rem] rounded-lg group-hover/button:scale-95 transition-all duration-200">
            </div>
          </BaseTooltip>
          <div class="flex items-center gap-3 h-20 border border-muted-300 dark:border-muted-800 rounded-lg bg-white dark:bg-muted-950 shadow-lg px-3 pointer-events-none group-hover/modes:pointer-events-auto opacity-0 group-hover/modes:opacity-100 transition-opacity duration-200">
            <div v-for="modeId in (['base', 'navigation', 'satellite'] as const)" :key="modeId" class="group/mode">
              <button
                type="button"
                class="cursor-pointer text-center flex flex-col items-center gap-0.5"
                @click="() => {
                  mode = modeId
                  updateMapStyle()
                }"
              >
                <img :src="`/img/illustrations/maps/${modeId}.svg`" alt="Map mode" class="size-10 rounded-md group-hover/mode:grayscale-0 transition-all duration-200" :class="mode === modeId ? 'ring-2 ring-primary-500 dark:ring-primary-400' : 'grayscale opacity-60'">
                <BaseText size="xs" weight="medium" class="capitalize text-muted-400 group-hover/mode:text-muted-900 dark:group-hover/mode:text-muted-100 transition-colors duration-200" :class="mode === modeId ? 'text-muted-900 dark:text-muted-100' : 'text-muted-400'">
                  {{ modeId }}
                </BaseText>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@reference '~/assets/main.css';

.map-container {
  .mapboxgl-popup-content {
    @apply p-3 pb-3! rounded-lg shadow-xl shadow-muted-300/30 dark:shadow-muted-900/40 border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800;
  }
}
</style>
