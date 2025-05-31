<script setup lang="ts">
const { locale } = useI18n()
const head = useLocaleHead()
const route = useRoute()

/**
 * Global head configuration
 * @see https://nuxt.com/docs/getting-started/seo-meta
 */
useHead({
  title: () => route?.meta?.title ?? '',
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Tairo`
      : `Tairo`
  },
  htmlAttrs: {
    lang: () => head.value.htmlAttrs!.lang,
    dir: () => head.value.htmlAttrs!.dir as any,
  },
  link: () => [
    ...(head.value.link || []),
    {
      rel: 'icon',
      type: 'image/png',
      href: '/img/favicon.png',
    },
  ],
  meta: () => [
    ...(head.value.meta || []),
    {
      name: 'description',
      content: () =>
        route?.meta?.description
        ?? 'The most advanced Nuxt and Tailwind CSS dashboard template',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@cssninjaStudio',
    },
    {
      name: 'og:image:type',
      content: 'image/png',
    },
    {
      name: 'og:image:width',
      content: '1200',
    },
    {
      name: 'og:image:height',
      content: '630',
    },
    {
      name: 'og:image',
      content: `https://media.cssninja.io/embed/marketplace/product/wide.png?headline=${encodeURIComponent(
        route?.meta?.description
        || (route?.meta?.preview
          ? `${route.meta?.preview?.title} - ${route.meta?.preview?.description}`
          : 'Nuxt & Tailwind CSS dashboard system'),
      )}&url=${encodeURIComponent(
        'https://media.cssninja.io/content/products/logos/tairo-text-white.svg',
      )}&previewUrl=${encodeURIComponent(
        `https://tairo.cssninja.io${
          route.meta?.preview?.src || '/img/screens/documentation-hub.png'
        }`,
      )}`,
    },
  ],
})
</script>

<template>
  <BaseProviders
    :config="{ dir: head.htmlAttrs!.dir as any, locale }"
    :toast="{ position: 'top-center' }"
  >
    <!--
      Global app search modal
      @see .demo/components/DemoAppSearch.vue
    -->
    <DemoAppSearch />
    <!--
      Global app layout switcher
      @see .demo/components/DemoAppLayoutSwitcher.vue
    -->
    <DemoAppLayoutSwitcher />

    <NuxtLayout>
      <NuxtLoadingIndicator color="var(--color-primary-500)" />
      <NuxtPage />
    </NuxtLayout>

    <TairoPanels />
  </BaseProviders>
</template>
