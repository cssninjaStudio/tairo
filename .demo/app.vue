<script setup lang="ts">
const route = useRoute()
const app = useAppConfig()

/**
 * Global head configuration
 * @see https://unhead.harlanzw.com/
 * @see https://github.com/unjs/unhead/tree/main
 */
useHead({
  title: route.meta.title,
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - ${app.tairo.title}`
      : `${app.tairo.title || 'Tairo'}`
  },
})
</script>

<template>
  <div>
    <!-- 
      Global app search modal
      @see .demo/components/DemoAppSearch.vue
    -->
    <DemoAppSearch />

    <!-- 
      Vue Axe Popup
      @see .demo/plugins/vue-axe.client.ts
    -->
    <VueAxePopup />

    <NuxtLayout>
      <NuxtLoadingIndicator color="var(--color-primary-500)" />
      <SeoKit />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
