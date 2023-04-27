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
  <div class="mx-auto w-full max-w-5xl">
    <div class="mx-auto mt-6 flex w-full max-w-sm items-center justify-center">
      <BaseInput
        v-model="searchTerms"
        icon="lucide:search"
        placeholder="Search..."
        shape="full"
        :classes="{
          wrapper: 'w-full',
          input: 'h-12 !ps-12',
          icon: 'h-12 w-12 [& > svg]:!w-7 [& > svg]:!h-7',
        }"
      />
    </div>
    <div class="mb-12 mt-2 text-center">
      <BaseText size="sm" class="text-muted-400"
        >0 results for "Ice cream pizza"</BaseText
      >
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
          />
          <img
            class="hidden dark:block"
            src="/img/illustrations/placeholders/flat/placeholder-search-4-dark.svg"
            alt="Placeholder image"
          />
        </template>
      </BasePlaceholderPage>
    </div>
  </div>
</template>
