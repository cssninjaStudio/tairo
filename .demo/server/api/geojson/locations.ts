import type { FeatureCollection, Geometry } from 'geojson'

export interface GeoJsonLocationProperties {
  id: string
  name: string
  logo: string
  distance: number
  openingCount: string
  phone: string
  website: string
  description: string
  rating?: number
  bearing?: number
  pitch?: number
  zoom?: number
}

const locations = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      id: 'fastpizza',
      properties: {
        id: 'fastpizza',
        name: 'Fast Pizza',
        logo: '/img/icons/logos/fastpizza.svg',
        distance: 0.3,
        openingCount: '6pm',
        phone: '+1 555 456-5659',
        website: 'https://huro.cssninja.io',
        rating: 4.5,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
        bearing: -69,
        pitch: 73,
        zoom: 17.1,
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.055049, 38.870326],
      },
    },
    {
      type: 'Feature',
      id: 'envato',
      properties: {
        id: 'envato',
        name: 'Envato',
        logo: '/img/icons/logos/envato.svg',
        distance: 0.8,
        openingCount: '5pm',
        phone: '+1 555 154-4568',
        website: 'https://huro.cssninja.io',
        rating: 4.9,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
        bearing: -35,
        pitch: 78,
        zoom: 16.8,
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.036574, 38.897684],
      },
    },
    {
      type: 'Feature',
      id: 'lipflow',
      properties: {
        id: 'lipflow',
        name: 'Lipflow',
        logo: '/img/icons/logos/lipflow.svg',
        distance: 1.2,
        openingCount: '8pm',
        phone: '+1 555 456-7897',
        website: 'https://huro.cssninja.io',
        rating: 4.2,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
        bearing: 18.5,
        pitch: 62,
        zoom: 19.42,
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.090372, 38.881189],
      },
    },
    {
      type: 'Feature',
      id: 'metamovies',
      properties: {
        id: 'metamovies',
        name: 'Metamovies',
        logo: '/img/icons/logos/metamovies.svg',
        distance: 0.5,
        openingCount: '11pm',
        phone: '+1 555 456-5659',
        website: 'https://huro.cssninja.io',
        rating: 4.7,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
        bearing: 0,
        pitch: 0,
        zoom: 12.97,
      },
      geometry: {
        type: 'Point',
        coordinates: [-73.99719, 40.70516],
      },
    },
    {
      type: 'Feature',
      id: 'slicer',
      properties: {
        id: 'slicer',
        name: 'Slicer',
        logo: '/img/icons/logos/slicer.svg',
        distance: 0.2,
        openingCount: '4:30pm',
        phone: '+1 555 456-7568',
        website: 'https://huro.cssninja.io',
        rating: 4.6,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
        bearing: -158.3,
        pitch: 80,
        zoom: 16.1,
      },
      geometry: {
        type: 'Point',
        coordinates: [-73.971728, 40.767729],
      },
    },
    {
      type: 'Feature',
      id: 'drop',
      properties: {
        id: 'drop',
        name: 'Drop',
        logo: '/img/icons/logos/drop.svg',
        distance: 2.1,
        openingCount: '7pm',
        phone: '+1 555 456-5659',
        website: 'https://huro.cssninja.io',
        rating: 4.4,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
        bearing: 38.5,
        pitch: 85,
        zoom: 19.48,
      },
      geometry: {
        type: 'Point',
        coordinates: [6.4760238, 44.5509484],
      },
    },
    {
      type: 'Feature',
      id: 'fresco',
      properties: {
        id: 'fresco',
        name: 'Fresco',
        logo: '/img/icons/logos/fresco.svg',
        distance: 0.6,
        openingCount: '6pm',
        phone: '+1 555 456-5659',
        website: 'https://huro.cssninja.io',
        rating: 4.8,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
        bearing: 68.6,
        pitch: 75,
        zoom: 16.36,
      },
      geometry: {
        type: 'Point',
        coordinates: [-0.098362, 51.513870],
      },
    },
    {
      type: 'Feature',
      id: 'hairz',
      properties: {
        id: 'hairz',
        name: 'Hairz',
        logo: '/img/icons/logos/hairz.svg',
        distance: 0.3,
        openingCount: '6pm',
        phone: '+1 555 755-3382',
        website: 'https://huro.cssninja.io',
        rating: 4.9,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
        bearing: -144.8,
        pitch: 67,
        zoom: 16.09,
      },
      geometry: {
        type: 'Point',
        coordinates: [103.858528, 1.282302],
      },
    },
    {
      type: 'Feature',
      id: 'vego',
      properties: {
        id: 'vego',
        name: 'Vego LLC',
        logo: '/img/icons/logos/vego.svg',
        distance: 0.3,
        openingCount: '9pm',
        phone: '+1 555 456-8984',
        website: 'https://huro.cssninja.io',
        rating: 4.7,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
        bearing: 19.7,
        pitch: 71,
        zoom: 17.95,
      },
      geometry: {
        type: 'Point',
        coordinates: [78.042068, 27.173891],
      },
    },
    {
      type: 'Feature',
      id: 'bookworm',
      properties: {
        id: 'bookworm',
        name: 'Bookworm',
        logo: '/img/icons/logos/bookworm.svg',
        distance: 1.5,
        openingCount: '10am',
        phone: '+1 555 123-4567',
        website: 'https://huro.cssninja.io',
        rating: 4.6,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
        bearing: 112.5,
        pitch: 70,
        zoom: 15.92,
      },
      geometry: {
        type: 'Point',
        coordinates: [2.2945, 48.8584],
      },
    },
    {
      type: 'Feature',
      id: 'techhub',
      properties: {
        id: 'techhub',
        name: 'Tech Hub',
        logo: '/img/icons/logos/techhub.svg',
        distance: 0.9,
        openingCount: '8am',
        phone: '+1 555 987-6543',
        website: 'https://huro.cssninja.io',
        rating: 4.8,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
        bearing: -135.5,
        pitch: 82,
        zoom: 17.17,
      },
      geometry: {
        type: 'Point',
        coordinates: [151.2153, -33.8568],
      },
    },
    {
      type: 'Feature',
      id: 'greencafe',
      properties: {
        id: 'greencafe',
        name: 'Green Cafe',
        logo: '/img/icons/logos/greencafe.svg',
        distance: 0.4,
        openingCount: '7am',
        phone: '+1 555 321-7654',
        website: 'https://huro.cssninja.io',
        rating: 4.9,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [12.4922, 41.8902],
      },
    },
    {
      type: 'Feature',
      id: 'artgallery',
      properties: {
        id: 'artgallery',
        name: 'Art Gallery',
        logo: '/img/icons/logos/artgallery.svg',
        distance: 1.8,
        openingCount: '9am',
        phone: '+1 555 654-3210',
        website: 'https://huro.cssninja.io',
        rating: 4.7,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
        bearing: 23.2,
        pitch: 67,
        zoom: 17.04,
      },
      geometry: {
        type: 'Point',
        coordinates: [2.1744, 41.4036],
      },
    },
    {
      type: 'Feature',
      id: 'fitnesspro',
      properties: {
        id: 'fitnesspro',
        name: 'Fitness Pro',
        logo: '/img/icons/logos/fitnesspro.svg',
        distance: 2.3,
        openingCount: '5am',
        phone: '+1 555 789-0123',
        website: 'https://huro.cssninja.io',
        rating: 4.6,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
        bearing: 0,
        pitch: 65,
        zoom: 16.42,
      },
      geometry: {
        type: 'Point',
        coordinates: [116.39152, 39.910358],
      },
    },
    {
      type: 'Feature',
      id: 'museum',
      properties: {
        id: 'museum',
        name: 'Museum',
        logo: '/img/icons/logos/museum.svg',
        distance: 1.1,
        openingCount: '10am',
        phone: '+1 555 012-3456',
        website: 'https://huro.cssninja.io',
        rating: 4.8,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
        bearing: -22.4,
        pitch: 72,
        zoom: 15.84,
      },
      geometry: {
        type: 'Point',
        coordinates: [-73.9857, 40.7484],
      },
    },
    {
      type: 'Feature',
      id: 'musicband',
      properties: {
        id: 'musicband',
        name: 'Music Band',
        logo: '/img/icons/logos/musicband.svg',
        distance: 0.7,
        openingCount: '8pm',
        phone: '+1 555 210-5432',
        website: 'https://huro.cssninja.io',
        rating: 4.9,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
        bearing: 137.4,
        pitch: 79,
        zoom: 15.81,
      },
      geometry: {
        type: 'Point',
        coordinates: [-122.4783, 37.8199],
      },
    },
    {
      type: 'Feature',
      id: 'gym',
      properties: {
        id: 'gym',
        name: 'Gym',
        logo: '/img/icons/logos/gym.svg',
        distance: 1.4,
        openingCount: '6am',
        phone: '+1 555 543-2109',
        website: 'https://huro.cssninja.io',
        rating: 4.7,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-122.3493, 47.6205],
      },
    },
    {
      type: 'Feature',
      id: 'restaurant',
      properties: {
        id: 'restaurant',
        name: 'Restaurant',
        logo: '/img/icons/logos/restaurant.svg',
        distance: 1.9,
        openingCount: '7pm',
        phone: '+1 555 678-9012',
        website: 'https://huro.cssninja.io',
        rating: 4.8,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-118.2502, 34.0553],
      },
    },
    {
      type: 'Feature',
      id: 'coffeebreak',
      properties: {
        id: 'coffeebreak',
        name: 'Coffee Break',
        logo: '/img/icons/logos/coffeebreak.svg',
        distance: 3.2,
        openingCount: '6am',
        phone: '+1 555 111-2222',
        website: 'https://huro.cssninja.io',
        rating: 4.9,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-75.1500, 39.9489],
      },
    },
    {
      type: 'Feature',
      id: 'techies',
      properties: {
        id: 'techies',
        name: 'Techies',
        logo: '/img/icons/logos/techies.svg',
        distance: 4.5,
        openingCount: '9am',
        phone: '+1 555 333-4444',
        website: 'https://huro.cssninja.io',
        rating: 4.7,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
        bearing: 44.8,
        pitch: 78,
        zoom: 17,
      },
      geometry: {
        type: 'Point',
        coordinates: [-78.4531, 38.0106],
      },
    },
    {
      type: 'Feature',
      id: 'bakerystop',
      properties: {
        id: 'bakerystop',
        name: 'Bakery Stop',
        logo: '/img/icons/logos/okano.svg',
        distance: 5.1,
        openingCount: '5am',
        phone: '+1 555 555-6666',
        website: 'https://huro.cssninja.io',
        rating: 4.8,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-121.1686, 35.6852],
      },
    },
    {
      type: 'Feature',
      id: 'gymzone',
      properties: {
        id: 'gymzone',
        name: 'Gym Zone',
        logo: '/img/icons/logos/nitro.svg',
        distance: 6.7,
        openingCount: '4am',
        phone: '+1 555 777-8888',
        website: 'https://huro.cssninja.io',
        rating: 4.7,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-82.5515, 35.5395],
      },
    },
    {
      type: 'Feature',
      id: 'librarycorner',
      properties: {
        id: 'librarycorner',
        name: 'Library Corner',
        logo: '/img/icons/logos/bookworm.svg',
        distance: 7.3,
        openingCount: '8am',
        phone: '+1 555 999-0000',
        website: 'https://huro.cssninja.io',
        rating: 4.8,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-74.0027, 40.7536],
      },
    },
  ],
} as FeatureCollection<Geometry, GeoJsonLocationProperties>

export default defineEventHandler(async (event) => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return locations
})
