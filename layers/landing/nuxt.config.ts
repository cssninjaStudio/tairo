export default defineNuxtConfig({
  modules: ['@nuxt/image-edge'],

  routeRules: {
    '/_ipx/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000',
      },
    },
    '/': {
      prerender: true,
      cache: {
        maxAge: 3600,
        swr: true,
        staleMaxAge: 3600,
      },
      headers: {
        'Cache-Control':
          'public, max-age=3600, s-maxage=3600, stale-while-revalidate=3600, stale-if-error=3600',
      },
    },
    '/demos': {
      prerender: true,
      cache: {
        maxAge: 3600,
        swr: true,
        staleMaxAge: 3600,
      },
      headers: {
        'Cache-Control':
          'public, max-age=3600, s-maxage=3600, stale-while-revalidate=3600, stale-if-error=3600',
      },
    },
  },
})
