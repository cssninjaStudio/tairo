<script setup lang="ts">
definePageMeta({
  title: 'Roadmap',
  layout: 'empty',
})
</script>

<template>
  <div class="min-h-screen bg-muted-100 dark:bg-muted-900 px-4 overflow-hidden">
    <div class="max-w-4xl mx-auto">
      <div
        class="h-16 w-full max-w-4xl mx-auto px-4 flex items-center justify-between"
      >
        <NuxtLink
          to="/"
          class="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
        >
          <TairoLogo class="w-10 h-10" />
        </NuxtLink>
        <div class="flex items-center gap-8">
          <NuxtLink
            to="/dashboards"
            class="font-sans text-sm text-muted-400 hover:text-primary-500 hover:underline underline-offset-4"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/layouts/utility-status"
            class="font-sans text-sm text-muted-400 hover:text-primary-500 hover:underline underline-offset-4"
            >Status</NuxtLink
          >
          <BaseThemeToggle />
        </div>
      </div>

      <div class="max-w-4xl mx-auto py-12 space-y-12">
        <BaseTabSlider
          selected="roadmap"
          justify="center"
          shape="curved"
          :tabs="[
            { label: 'Roadmap', value: 'roadmap' },
            { label: 'Changelog', value: 'changelog' },
          ]"
        >
          <template #tab="{ activeValue }">
            <div v-if="activeValue === 'roadmap'">
              <div class="py-8 text-center">
                <BaseHeading as="h2" size="3xl" weight="medium" class="mb-6">
                  Our Roadmap
                </BaseHeading>
                <BaseParagraph class="max-w-md mx-auto text-muted-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis
                  enim est natura diligens sui. Philosophi autem in suis
                  lectulis plerumque moriuntur.
                </BaseParagraph>
              </div>
            </div>
            <div v-else-if="activeValue === 'changelog'"></div>
          </template>
        </BaseTabSlider>
      </div>
    </div>
  </div>
</template>
