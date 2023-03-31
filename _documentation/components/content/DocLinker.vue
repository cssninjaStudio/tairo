<script setup lang="ts">
const props = defineProps<{
  to: string
}>()

const { data } = await useAsyncData('doc-linker', () => {
  if (!props.to) return Promise.resolve(null)

  return queryContent()
    .where({
      _source: 'docs',
      components: { $contains: props.to },
    })
    .only(['_path'])
    .findOne()
})

const tooltip = computed(() => {
  if (!data.value?._path) return `Documentation for ${props.to} is missing`
  // if (data.value._path === route.path) {
  //   return `Currently viewing ${props.to} documentation`
  // }
  return `Read ${props.to} docs`
})
</script>

<template>
  <NuxtLink
    :to="data?._path"
    class="nui-focus inline-block rounded font-mono text-sm"
    :class="[
      data?._path
        ? 'nui-mark dark:decoration-primary-100/60 decoration-dotted underline-offset-4'
        : 'bg-danger-100 dark:bg-danger-800/60 text-danger-500 cursor-help no-underline',
    ]"
    :data-tooltip="tooltip"
    >&lt;{{ props.to }}&gt;</NuxtLink
  >
</template>
