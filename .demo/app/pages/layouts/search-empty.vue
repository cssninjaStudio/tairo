<script setup lang="ts">
definePageMeta({
  title: 'Empty Search',
  preview: {
    title: 'Empty search',
    description: 'For displaying search results',
    categories: ['layouts'],
    src: '/img/screens/layouts-subpages-search-empty.png',
    srcDark: '/img/screens/layouts-subpages-search-empty-dark.png',
    order: 83,
  },
})

const searchTerms = ref('Ice cream pizza')
</script>

<template>
  <div class="w-full px-4 md:px-6 lg:px-8 pb-20 dark:[--color-input-default-bg:var(--color-muted-950)]">
    <div class="my-6 flex w-full items-center gap-3">
      <TairoInput
        v-model="searchTerms"
        icon="lucide:search"
        placeholder="Search..."
        rounded="full"
      />
      <div>
        <BaseText
          size="sm"
          class="text-muted-400"
        >
          0 results found
        </BaseText>
      </div>
    </div>
    <div>
      <BasePlaceholderPage
        title="No matching results"
        subtitle="Looks like we couldn't find any matching results for your search terms. Try other search terms."
      >
        <template #image>
          <img
            class="block dark:hidden"
            src="/img/illustrations/placeholders/flat/placeholder-search-4.svg"
            alt="Placeholder image"
          >
          <img
            class="hidden dark:block"
            src="/img/illustrations/placeholders/flat/placeholder-search-4-dark.svg"
            alt="Placeholder image"
          >
        </template>
      </BasePlaceholderPage>
    </div>
  </div>
</template>
