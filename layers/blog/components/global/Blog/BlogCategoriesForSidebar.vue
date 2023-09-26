<script setup lang="ts">
const contentQueryResults = await queryContent().find()
const getAllTagsAvailable = () => {
  const uniqueTags: string[] = []
  const allTags = contentQueryResults.map((obj) => obj.tags)
  allTags.forEach((element: string) => {
    element.forEach((tag: string) => {
      if (!uniqueTags.includes(tag)) {
        uniqueTags.push(tag)
      }
    })
  })
  return uniqueTags
}
const getAllCategoriesAvailable = () => {
  const uniqueCategories: string[] = []
  const allCategories = contentQueryResults.map((obj) => obj.categories)
  allCategories.forEach((element) => {
    element.forEach((tag: any) => {
      if (!uniqueCategories.includes(tag)) {
        uniqueCategories.push(tag)
      }
    })
  })
  return uniqueCategories
}
const categories = computed(() => getAllCategoriesAvailable())
const tags = computed(() => getAllTagsAvailable())
</script>

<template>
  <div>
    <div class="sticky flex justify-start">
      <NuxtLink class="me-1" to="/blog">All Categories</NuxtLink>
    </div>
    <span class="flex flex-wrap gap-2 py-4">
      <div v-for="(category, index) in categories" :key="index">
        <NuxtLink :to="`/blog/categories/${category}`">
          <BaseTag
            shape="curved"
            class="hover:border-primary-500 hover:dark:border-primary-500 hover:text-primary-500 hover:dark:text-primary-500 group flex space-x-1 transition-all duration-300"
          >
            <span>{{ category }}</span>
          </BaseTag>
        </NuxtLink>
      </div>
    </span>
  </div>
</template>
