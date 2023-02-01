<script setup lang="ts">
import { type Map, Popup } from 'mapbox-gl'
import 'mapbox-gl/src/css/mapbox-gl.css'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

const { open } = usePanels()
const panels = reactive(usePanels())
const { primary } = useTailwindColors()

const props = defineProps<{
  reversed?: boolean
}>()

const colorMode = useColorMode()
const darkmode = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(value) {
    if (value) {
      colorMode.preference = 'dark'
    } else {
      colorMode.preference = 'light'
    }
  },
})

const selectedFeature = ref()
const selectedFeatureLatLng = ref()
const selectedFeatureName = ref('')
const mapElement = shallowRef<HTMLElement>()
const geocoderElement = shallowRef<HTMLElement>()
const popupElement = shallowRef<HTMLElement>()
const map = shallowRef<Map>()
const popup = shallowRef<Popup>()
const geocoder = shallowRef<any>()

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

onMounted(() => {
  Promise.all([
    import('mapbox-gl').then((m) => m.default),
    import('@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js').then(
      (m) => m.default,
    ),
  ]).then(([mapboxgl, MapboxGeocoder]) => {
    if (!mapElement.value || !geocoderElement.value) {
      return
    }
    // You can set the VITE_MAPBOX_ACCESS_TOKEN inside .env file
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string

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
      const loadingStyles = () => {
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

// watchPostEffect(() => {
watchEffect(
  () => {
    if (!selectedFeature.value || !popupElement.value || !map.value) {
      return
    }

    const feature = selectedFeature.value
    const { geometry, properties } = feature
    const { name } = properties
    const coordinates = geometry.coordinates.slice()
    // const logo = selectedFeature.value.properties.logo
    // const openingCount = selectedFeature.value.properties.openingCount
    // const description = selectedFeature.value.properties.description

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

    popup.value = new Popup()
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
      class="min-h-screen bg-muted-100 dark:bg-muted-900 flex flex-col ltablet:flex-row lg:flex-row"
    >
      <!-- Sidebar -->
      <div
        class="relative h-16 ltablet:h-screen lg:h-screen w-full ltablet:w-20 lg:w-20 ltablet:border-r lg:border-r border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800 z-10"
      >
        <div class="h-full flex ltablet:flex-col lg:flex-col justify-between">
          <div class="flex ltablet:flex-col lg:flex-col">
            <div
              class="flex h-16 w-16 ltablet:w-full lg:w-full items-center justify-center shrink-0"
            >
              <NuxtLink to="/" class="flex items-center justify-center">
                <IconLogo class="text-primary-600 h-10" />
              </NuxtLink>
            </div>
            <div
              class="flex h-16 w-16 ltablet:w-full lg:w-full items-center justify-center shrink-0"
            >
              <a
                href="#"
                class="text-muted-400 hover:text-primary-500 flex h-12 w-12 items-center justify-center rounded-2xl hover:bg-primary-500/20 transition-colors duration-300"
                title="Back"
                @click.prevent="$router.back()"
              >
                <Icon name="lucide:arrow-left" class="h-5 w-5" />
              </a>
            </div>
          </div>
          <div
            class="flex ltablet:flex-col lg:flex-col pr-4 ltablet:pr-0 lg:pr-0"
          >
            <div class="flex h-16 w-full items-center justify-center">
              <button
                type="button"
                class="text-muted-400 hover:text-primary-500 flex h-12 w-12 items-center justify-center rounded-2xl hover:bg-primary-500/20 transition-colors duration-300"
                title="Search"
                @click="open('search')"
              >
                <Icon name="ph:magnifying-glass-duotone" class="h-5 w-5" />
              </button>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <NuxtLink
                to="/"
                class="text-muted-400 hover:text-primary-500 flex h-12 w-12 items-center justify-center rounded-2xl hover:bg-primary-500/20 transition-colors duration-300"
                title="Settings"
              >
                <Icon name="ph:gear-six-duotone" class="h-5 w-5" />
              </NuxtLink>
            </div>
            <div
              class="hidden lg:flex ltablet:flex h-16 w-full items-center justify-center"
            >
              <NavigationSidebarAccountMenu />
            </div>
            <div
              class="flex lg:hidden ltablet:hidden h-16 w-full items-center justify-center"
            >
              <NavigationSidebarAccountMenu horizontal />
            </div>
          </div>
        </div>
      </div>

      <template v-if="!props.reversed">
        <div class="relative grow h-96 ltablet:h-auto lg:h-auto">
          <div ref="mapElement" class="absolute inset-0 w-full h-full"></div>
          <div
            ref="geocoderElement"
            class="geocoder absolute inset-x-0 top-6 mx-auto flex items-center justify-center px-6 sm:px-0"
          ></div>
          <div
            ref="popupElement"
            style="display: none; visibility: hidden"
            class="absolute"
          >
            <MapMarker
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
        class="w-full ltablet:w-96 lg:w-96 h-[calc(100vh_-_428px)] ltablet:h-screen lg:h-screen shrink-0 bg-white dark:bg-muted-800"
      >
        <div
          class="relative h-16 w-full flex items-center justify-between px-6 z-10"
        >
          <BaseHeading size="xl" weight="medium">
            <span class="text-muted-800 dark:text-white">Locations</span>
          </BaseHeading>
          <div class="flex items-center gap-2">
            <BaseThemeToggle />
            <button
              type="button"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-muted-200 bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-muted-200 dark:hover:ring-muted-700 hover:ring-offset-4 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900"
              @click="open('language')"
            >
              <NuxtImg
                class="h-7 w-7 rounded-full"
                src="/img/icons/flags/united-states-of-america.svg"
                alt="flag icon"
              />
            </button>
            <NavigationToolbarNotifications />
            <button
              type="button"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-muted-200 bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-muted-200 dark:hover:ring-muted-700 hover:ring-offset-4 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900"
              @click="open('activity')"
            >
              <Icon
                name="ph:circles-four-duotone"
                class="h-5 w-5 text-muted-400"
              />
            </button>
          </div>
        </div>
        <div
          class="h-[calc(100vh_-_492px)] ltablet:h-[calc(100%_-_64px)] lg:h-[calc(100%_-_64px)] overflow-y-auto slimscroll p-6"
        >
          <!--Title-->
          <BaseHeading
            size="xs"
            weight="medium"
            class="uppercase mb-4 tracking-wider"
          >
            <span class="text-muted-400">Recent Locations</span>
          </BaseHeading>

          <!--Map Box-->
          <div
            class="flex flex-col gap-4 ptablet:flex-none ptablet:grid ptablet:grid-cols-2 ptablet:pb-10"
          >
            <BaseCard
              v-for="(feature, key) in locations.features"
              :key="key"
              class="p-6 cursor-pointer"
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
                  <div class="flex items-center gap-2 mb-3">
                    <BaseAvatar size="xs" :src="feature.properties.logo" />
                    <div class="font-sans">
                      <h4
                        class="font-medium text-sm leading-none text-muted-800 dark:text-muted-100"
                      >
                        {{ feature.properties.name }}
                      </h4>
                      <p class="text-sm text-muted-400">
                        Open until {{ feature.properties.openingCount }}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="mb-4 font-sans text-sm text-muted-500 dark:text-muted-400"
                >
                  <p>
                    {{ feature.properties.description }}
                  </p>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex gap-1">
                    <Icon name="uiw:star-on" class="text-yellow-400 w-3 h-3" />
                    <Icon name="uiw:star-on" class="text-yellow-400 w-3 h-3" />
                    <Icon name="uiw:star-on" class="text-yellow-400 w-3 h-3" />
                    <Icon name="uiw:star-on" class="text-yellow-400 w-3 h-3" />
                    <Icon name="uiw:star-on" class="text-yellow-400 w-3 h-3" />
                  </div>
                  <div class="relative">
                    <div
                      class="flex items-center gap-1 font-sans text-sm text-muted-400"
                    >
                      <Icon name="lucide:flag" class="w-4 h-4" />
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
        <div class="relative grow h-96 ltablet:h-auto lg:h-auto">
          <div ref="mapElement" class="absolute inset-0 w-full h-full"></div>
          <div
            ref="geocoderElement"
            class="geocoder absolute inset-x-0 top-6 mx-auto flex items-center justify-center px-6 sm:px-0"
          ></div>
          <div
            ref="popupElement"
            style="display: none; visibility: hidden"
            class="absolute"
          >
            <MapMarker
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

    <!-- Active Panel -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      :enter-from-class="
        panels.transitionFrom === 'left'
          ? '-translate-x-full'
          : 'translate-x-full'
      "
      leave-active-class="transition-transform duration-300 ease-in"
      :leave-to-class="
        panels.transitionFrom === 'left'
          ? '-translate-x-full'
          : 'translate-x-full'
      "
    >
      <component
        :is="resolveComponent(panels.current.component)"
        v-if="panels.current?.component"
        class="fixed top-0 z-[100] h-full w-96"
        :class="[panels.current.position === 'left' ? 'left-0' : 'right-0']"
      />
    </Transition>
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
  @apply relative z-[30] left-[-2px];
}
.mapboxgl-popup .mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
  @apply relative z-[30] right-[-2px];
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
 @apply h-12 pl-12 font-sans text-muted-700 dark:text-muted-100 rounded-full bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/40 transition-colors duration-300;
}

.mapboxgl-ctrl-geocoder--button {
  @apply bg-transparent;
}

.mapboxgl-ctrl-geocoder--icon-search {
  @apply text-primary-500 fill-current top-3.5 left-3.5 scale-[1.1];
}

.mapboxgl-ctrl-geocoder--icon-close {
  @apply text-muted-400 dark:text-muted-100 fill-current;
}
</style>
