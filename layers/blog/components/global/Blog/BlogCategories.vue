<script setup lang="ts">
const props = defineProps<TProps>()
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
type TProps = {
  categories?: string[]
}
const categories = computed(() => props.categories ?? data.value.categories)
</script>

<template>
  <div class="flex flex-wrap items-start justify-start gap-2">
    <span class="flex space-x-2 pb-4">
      <div v-for="(category, index) in categories" :key="index">
        <NuxtLink
          :to="`/blog/categories/${category}`"
          class="text-primary-500 hover:text-primary-600 flex cursor-pointer space-x-1 text-sm underline"
        >
          <span>{{ category }}</span>
        </NuxtLink>
      </div>
    </span>
  </div>
</template>
