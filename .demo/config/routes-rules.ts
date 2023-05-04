import { isProduction } from 'std-env'

const staticAssetsRule = isProduction
  ? {
      headers: {
        'Cache-Control': 'public, max-age=31536000',
      },
    }
  : {}

const staticPageRule = isProduction
  ? {
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
    }
  : {}

export const demoRules = {
  '/img/**': staticAssetsRule,
  '/shiki/**': staticAssetsRule,
  '/api/**': staticAssetsRule,
  '/dashboards/**': staticPageRule,
  '/layouts/**': staticPageRule,
  '/wizard/**': staticPageRule,
  '/auth/**': staticPageRule,
}

export const landingRules = {
  '/_ipx/**': staticAssetsRule,
  '/': staticPageRule,
  '/demos': staticPageRule,
}

export const documentationRules = {
  '/documentation/**': staticPageRule,
}
