<script setup lang="ts">
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import type { Map, Popup } from 'mapbox-gl'
import 'mapbox-gl/src/css/mapbox-gl.css'

const props = defineProps<{
  reversed?: boolean
}>()
const { open } = usePanels()
const { primary } = useTailwindColors()

const colorMode = useColorMode()

const selectedFeature = ref()
const selectedFeatureLatLng = ref()
const selectedFeatureName = ref('')
const mapElement = shallowRef<HTMLElement>()
const geocoderElement = shallowRef<HTMLElement>()
const popupElement = shallowRef<HTMLElement>()
const map = shallowRef<Map>()
const popup = shallowRef<Popup>()
const geocoder = shallowRef<any>()

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
let mapboxgl: typeof import('mapbox-gl')

const locations = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Fast Pizza',
        logo: '/img/icons/logos/fastpizza.svg',
        distance: 0.3,
        openingCount: '6pm',
        phone: '+1 555 456-5659',
        website: 'https://huro.cssninja.io',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.038659, 38.931567],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Envato',
        logo: '/img/icons/logos/envato.svg',
        distance: 0.8,
        openingCount: '5pm',
        phone: '+1 555 154-4568',
        website: 'https://huro.cssninja.io',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.003168, 38.894651],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Lipflow',
        logo: '/img/icons/logos/lipflow.svg',
        distance: 1.2,
        openingCount: '8pm',
        phone: '+1 555 456-7897',
        website: 'https://huro.cssninja.io',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.090372, 38.881189],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Metamovies',
        logo: '/img/icons/logos/metamovies.svg',
        distance: 0.5,
        openingCount: '11pm',
        phone: '+1 555 456-5659',
        website: 'https://huro.cssninja.io',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.111561, 38.882342],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Slicer',
        logo: '/img/icons/logos/slicer.svg',
        distance: 0.2,
        openingCount: '4:30pm',
        phone: '+1 555 456-7568',
        website: 'https://huro.cssninja.io',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.052477, 38.943951],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Drop',
        logo: '/img/icons/logos/drop.svg',
        distance: 2.1,
        openingCount: '7pm',
        phone: '+1 555 456-5659',
        website: 'https://huro.cssninja.io',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.043444, 38.909664],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Fresco',
        logo: '/img/icons/logos/fresco.svg',
        distance: 0.6,
        openingCount: '6pm',
        phone: '+1 555 456-5659',
        website: 'https://huro.cssninja.io',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.031706, 38.914581],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Hairz',
        logo: '/img/icons/logos/hairz.svg',
        distance: 0.3,
        openingCount: '6pm',
        phone: '+1 555 755-3382',
        website: 'https://huro.cssninja.io',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.020945, 38.878241],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Vego LLC',
        logo: '/img/icons/logos/vego.svg',
        distance: 0.3,
        openingCount: '9pm',
        phone: '+1 555 456-8984',
        website: 'https://huro.cssninja.io',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.007481, 38.876516],
      },
    },
  ],
} as const

function loadLayers() {
  if (!map.value) {
    return
  }

  // Do nothing if source already added
  if (map.value.getSource('places')) {
    return
  }

  map.value.addSource('places', {
    type: 'geojson',
    data: locations as any,
  })

  // Add a layer showing the places.
  map.value.addLayer({
    id: 'places',
    type: 'circle',
    source: 'places',
    paint: {
      'circle-color':
        colorMode.value === 'dark' ? primary.value : primary.value,
      'circle-radius': 6,
      'circle-stroke-width': 2,
      'circle-stroke-color':
        colorMode.value === 'dark' ? primary.value : primary.value,
    },
  })

  map.value.on('click', 'places', (e: any) => {
    selectedFeature.value = e.features[0]
    selectedFeatureLatLng.value = e.lngLat
  })

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.value.on('mouseenter', 'places', () => {
    if (!map.value) {
      return
    }

    map.value.getCanvas().style.cursor = 'pointer'
  })

  // Change it back to a pointer when it leaves.
  map.value.on('mouseleave', 'places', () => {
    if (!map.value) {
      return
    }

    map.value.getCanvas().style.cursor = ''
  })
}

function selectFeature(feature: any) {
  selectedFeature.value = undefined
  selectedFeature.value = feature
}
const config = useRuntimeConfig()
if (process.dev) {
  // This block will be removed in production build

  if (!config.public.mapboxToken) {
    console.warn(
      'NUXT_PUBLIC_MAPBOX_TOKEN environment variable is not defined, mapbox features are disabled',
    )
  }
}

onMounted(() => {
  if (!config.public.mapboxToken) {
    return
  }

  Promise.all([
    import('mapbox-gl').then((m) => m.default),
    import('@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js').then(
      (m) => m.default,
    ),
  ]).then(([_mapboxgl, MapboxGeocoder]) => {
    mapboxgl = _mapboxgl
    if (!mapElement.value || !geocoderElement.value) {
      return
    }
    // You can set the NUXT_PUBLIC_MAPBOX_TOKEN inside .env file
    mapboxgl.accessToken = config.public.mapboxToken

    map.value = new mapboxgl.Map({
      container: mapElement.value,
      style:
        colorMode.value === 'dark'
          ? 'mapbox://styles/mapbox/dark-v10'
          : 'mapbox://styles/mapbox/light-v10',
      center: [-77.04, 38.907],
      zoom: 12,
    })

    geocoder.value = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl,
      marker: true,
    })

    map.value.on('style.load', () => {
      function loadingStyles() {
        if (!map.value?.isStyleLoaded()) {
          setTimeout(loadingStyles, 1500)
          return
        }

        loadLayers()
      }
      loadingStyles()
    })

    geocoderElement.value.appendChild(geocoder.value.onAdd(map.value))
  })
})

watchEffect(
  () => {
    if (!selectedFeature.value || !popupElement.value || !map.value) {
      return
    }

    const feature = selectedFeature.value
    const { geometry, properties } = feature
    const { name } = properties
    const coordinates = geometry.coordinates.slice()

    console.log('zooming at: ', properties, coordinates)

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    if (selectedFeatureLatLng.value) {
      while (Math.abs(selectedFeatureLatLng.value.lng - coordinates[0]) > 180) {
        coordinates[0] +=
          selectedFeatureLatLng.value.lng > coordinates[0] ? 360 : -360
      }
    }

    map.value.flyTo({
      center: coordinates,
      zoom: 15,
      bearing: 0,
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    })

    if (popup.value) {
      popup.value.remove()
    }

    popup.value = new mapboxgl.Popup()
      .on('open', () => {
        selectedFeatureName.value = name
      })
      .on('close', () => {
        selectedFeatureName.value = ''
      })
      .setLngLat(coordinates)
      .setHTML(popupElement.value.innerHTML)
      .addTo(map.value)
  },
  { flush: 'post' },
)

watch(
  () => colorMode.value === 'dark',
  () => {
    if (!map.value) {
      return
    }

    if (colorMode.value === 'dark') {
      map.value.setStyle('mapbox://styles/mapbox/dark-v10')
    } else {
      map.value.setStyle('mapbox://styles/mapbox/light-v10')
    }
  },
)
</script>

<template>
  <div class="relative">
    <div
      class="bg-muted-100 dark:bg-muted-900 ltablet:flex-row flex min-h-screen flex-col lg:flex-row"
    >
      <!-- Sidebar -->
      <div
        class="ltablet:h-screen ltablet:w-20 ltablet:border-r border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative z-10 h-16 w-full bg-white lg:h-screen lg:w-20 lg:border-r"
      >
        <div class="ltablet:flex-col flex h-full justify-between lg:flex-col">
          <div class="ltablet:flex-col flex lg:flex-col">
            <div
              class="ltablet:w-full flex h-16 w-16 shrink-0 items-center justify-center lg:w-full"
            >
              <NuxtLink to="#" class="flex items-center justify-center">
                <TairoLogo class="text-primary-600 h-10" />
              </NuxtLink>
            </div>
            <div
              class="ltablet:w-full flex h-16 w-16 shrink-0 items-center justify-center lg:w-full"
            >
              <a
                href="#"
                class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300"
                title="Back"
                @click.prevent="$router.back()"
              >
                <Icon name="lucide:arrow-left" class="h-5 w-5" />
              </a>
            </div>
          </div>
          <div
            class="ltablet:flex-col ltablet:pe-0 flex pe-4 lg:flex-col lg:pe-0"
          >
            <div class="flex h-16 w-full items-center justify-center">
              <button
                type="button"
                class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300"
                title="Search"
                @click="open('search')"
              >
                <Icon name="ph:magnifying-glass-duotone" class="h-5 w-5" />
              </button>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <NuxtLink
                to="#"
                class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300"
                title="Settings"
              >
                <Icon name="ph:gear-six-duotone" class="h-5 w-5" />
              </NuxtLink>
            </div>
            <div
              class="ltablet:flex hidden h-16 w-full items-center justify-center lg:flex"
            >
              <DemoAccountMenu />
            </div>
            <div
              class="ltablet:hidden flex h-16 w-full items-center justify-center lg:hidden"
            >
              <DemoAccountMenu horizontal />
            </div>
          </div>
        </div>
      </div>

      <template v-if="!props.reversed">
        <div class="ltablet:h-auto relative h-96 grow lg:h-auto">
          <div ref="mapElement" class="absolute inset-0 h-full w-full"></div>
          <div
            ref="geocoderElement"
            class="geocoder absolute inset-x-0 top-6 mx-auto flex items-center justify-center px-6 sm:px-0"
          ></div>
          <div
            ref="popupElement"
            style="display: none; visibility: hidden"
            class="absolute"
          >
            <DemoMapMarker
              v-if="selectedFeature"
              :logo="selectedFeature.properties.logo"
              :name="selectedFeature.properties.name"
              :opening-count="selectedFeature.properties.openingCount"
              :description="selectedFeature.properties.description"
            />
          </div>
        </div>
      </template>

      <div
        class="ltablet:w-96 ltablet:h-screen dark:bg-muted-800 h-[calc(100vh_-_428px)] w-full shrink-0 bg-white lg:h-screen lg:w-96"
      >
        <div
          class="relative z-10 flex h-16 w-full items-center justify-between px-6"
        >
          <BaseHeading size="xl" weight="medium">
            <span class="text-muted-800 dark:text-white">Locations</span>
          </BaseHeading>

          <TairoSidebarTools />
        </div>
        <div
          class="ltablet:h-[calc(100%_-_64px)] slimscroll h-[calc(100vh_-_492px)] overflow-y-auto p-6 lg:h-[calc(100%_-_64px)]"
        >
          <!--Title-->
          <BaseHeading
            size="xs"
            weight="medium"
            class="mb-4 uppercase tracking-wider"
          >
            <span class="text-muted-400">Recent Locations</span>
          </BaseHeading>

          <!--Map Box-->
          <div
            class="ptablet:flex-none ptablet:grid ptablet:grid-cols-2 ptablet:pb-10 flex flex-col gap-4"
          >
            <BaseCard
              v-for="(feature, key) in locations.features"
              :key="key"
              class="cursor-pointer p-6"
              shape="curved"
              :class="[
                selectedFeatureName === feature.properties.name &&
                  'border-primary-500',
              ]"
              tabindex="0"
              role="button"
              @keydown.space.prevent="selectFeature(feature)"
              @click="selectFeature(feature)"
            >
              <div class="relative">
                <div class="relative">
                  <div class="mb-3 flex items-center gap-2">
                    <BaseAvatar size="xs" :src="feature.properties.logo" />
                    <div class="font-sans">
                      <h4
                        class="text-muted-800 dark:text-muted-100 text-sm font-medium leading-none"
                      >
                        {{ feature.properties.name }}
                      </h4>
                      <p class="text-muted-400 text-sm">
                        Open until {{ feature.properties.openingCount }}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="text-muted-500 dark:text-muted-400 mb-4 font-sans text-sm"
                >
                  <p>
                    {{ feature.properties.description }}
                  </p>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex gap-1">
                    <Icon name="uiw:star-on" class="h-3 w-3 text-yellow-400" />
                    <Icon name="uiw:star-on" class="h-3 w-3 text-yellow-400" />
                    <Icon name="uiw:star-on" class="h-3 w-3 text-yellow-400" />
                    <Icon name="uiw:star-on" class="h-3 w-3 text-yellow-400" />
                    <Icon name="uiw:star-on" class="h-3 w-3 text-yellow-400" />
                  </div>
                  <div class="relative">
                    <div
                      class="text-muted-400 flex items-center gap-1 font-sans text-sm"
                    >
                      <Icon name="lucide:flag" class="h-4 w-4" />
                      <span class="dark-inverted">
                        {{ feature.properties.distance }} mile
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>

      <template v-if="props.reversed">
        <div class="ltablet:h-auto relative h-96 grow lg:h-auto">
          <div ref="mapElement" class="absolute inset-0 h-full w-full"></div>
          <div
            ref="geocoderElement"
            class="geocoder absolute inset-x-0 top-6 mx-auto flex items-center justify-center px-6 sm:px-0"
          ></div>
          <div
            ref="popupElement"
            style="display: none; visibility: hidden"
            class="absolute"
          >
            <DemoMapMarker
              v-if="selectedFeature"
              :logo="selectedFeature.properties.logo"
              :name="selectedFeature.properties.name"
              :opening-count="selectedFeature.properties.openingCount"
              :description="selectedFeature.properties.description"
            />
          </div>
        </div>
      </template>
    </div>

    <TairoPanels />
  </div>
</template>

<style lang="pcss">
.mapboxgl-popup .mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {
  @apply relative z-[30] top-[-2px];
}
.mapboxgl-popup .mapboxgl-popup-anchor-top .mapboxgl-popup-tip {
  @apply relative z-[30] bottom-[-2px];
}

.mapboxgl-popup .mapboxgl-popup-anchor-right .mapboxgl-popup-tip {
  @apply relative z-[30] start-[-2px];
}
.mapboxgl-popup .mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
  @apply relative z-[30] end-[-2px];
}

.mapboxgl-popup-close-button {
  @apply h-6 w-6 flex items-center justify-center;
}

.mapboxgl-popup-content {
  @apply rounded-xl shadow-xl shadow-muted-300/30 dark:shadow-muted-900/40 border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800;
}

.mapboxgl-ctrl-geocoder {
  @apply bg-transparent shadow-none;
}

.mapboxgl-ctrl-geocoder input {
 @apply h-12 ps-12 font-sans text-muted-700 dark:text-muted-100 rounded-full bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/40 transition-colors duration-300;
}

.mapboxgl-ctrl-geocoder--button {
  @apply bg-transparent;
}

.mapboxgl-ctrl-geocoder--icon-search {
  @apply text-primary-500 fill-current top-3.5 start-3.5 scale-[1.1];
}

.mapboxgl-ctrl-geocoder--icon-close {
  @apply text-muted-400 dark:text-muted-100 fill-current;
}
</style>
