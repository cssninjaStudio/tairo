<script setup lang="ts">
const props = defineProps<{
  to: string
}>()

const route = useRoute()

const { data } = await useAsyncData('doc-linker', () => {
  return queryContent()
    .where({
      _source: 'docs',
      components: { $contains: props.to },
    })
    .only(['_path'])
    .findOne()
})

const tooltip = computed(() => {
  if (!data.value?._path) return ''
  if (data.value._path !== route.path) {
    return `Go to ${props.to} documentation`
  }
  return `Currently viewing ${props.to} documentation`
})
</script>

<template>
  <NuxtLink
    :to="data?._path"
    class="nui-focus font-mono rounded before:content-['<'] after:content-['>']"
    :class="[
      data?._path
        ? 'nui-mark decoration-dotted dark:decoration-primary-100/60 underline-offset-4'
        : 'bg-danger-100 dark:bg-danger-800/60 text-danger-500 no-underline',
    ]"
    :title="tooltip"
    >{{ props.to }}</NuxtLink
  >
</template>
