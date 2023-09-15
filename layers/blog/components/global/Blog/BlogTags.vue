<script setup lang="ts">
const { path } = useRoute()
const { data } = await useAsyncData(`content-${ path }`, () => {
  return queryContent().where({ _path: path }).findOne()
})

type TProps = {
  tags?: string[]
}
const props = defineProps<TProps>()
const tags = computed(() => props.tags ?? data.value.tags)
</script>

<template>
  <span class="flex py-4 gap-2  flex-wrap">
    <div v-for="(tag, index) in tags" :key="index">
      <NuxtLink :to="`/blog/tags/${tag}`">
        <BaseTag shape="curved" class="flex space-x-1 group hover:border-primary-500 hover:dark:border-primary-500 hover:text-primary-500 hover:dark:text-primary-500 transition-all duration-300">
          <Icon name="heroicons:tag" class="w-4 h-4" />
          <span>{{ tag }}</span>
        </BaseTag>
      </NuxtLink>
    </div>
  </span>
</template>
