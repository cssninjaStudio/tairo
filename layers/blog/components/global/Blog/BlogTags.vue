<script setup lang="ts">
const props = defineProps<TProps>()
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})

type TProps = {
  tags?: string[]
}
const tags = computed(() => props.tags ?? data.value.tags)
</script>

<template>
  <span class="flex flex-wrap gap-2 py-4">
    <div v-for="(tag, index) in tags" :key="index">
      <NuxtLink :to="`/blog/tags/${tag}`">
        <BaseTag
          shape="curved"
          class="hover:border-primary-500 hover:dark:border-primary-500 hover:text-primary-500 hover:dark:text-primary-500 group flex space-x-1 transition-all duration-300"
        >
          <Icon name="heroicons:tag" class="h-4 w-4" />
          <span>{{ tag }}</span>
        </BaseTag>
      </NuxtLink>
    </div>
  </span>
</template>
