<script setup lang="ts">
const { path } = useRoute()
const { data } = await useAsyncData(`content-${ path }`, () => {
	return queryContent().where({ _path: path }).findOne()
})

type TProps = {
	categories?: string[]
}
const props = defineProps<TProps>()
const categories = computed(() => props.categories ?? data.value.categories)
</script>

<template>
	<div class="flex items-start justify-start gap-2 flex-wrap">
		<h3 class="text-sm dark:text-slate-600 text-slate-400 uppercase m-0">Categories:</h3>
		<span class="flex pb-4 space-x-2">
    <div v-for="(category, index) in categories" :key="index">
      <NuxtLink
	      :to="`/blog/categories/${category}`"
	      class="flex space-x-1 text-sm text-primary-500 hover:text-primary-600 underline cursor-pointer"
      >
        <span>{{ category }}</span>
      </NuxtLink>
    </div>
  </span>
	</div>
</template>
