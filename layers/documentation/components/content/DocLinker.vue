<script setup lang="ts">
const props = defineProps<{
  to: string
}>()

const { pending, data } = useAsyncData(
  `doc-linker-to-${props.to}`,
  () => {
    if (!props.to) return Promise.resolve(null)

    return queryContent()
      .where({
        components: { $contains: props.to },
      })
      .only(['_path'])
      .findOne()
  },
  {
    watch: [() => props.to],
  },
)

const tooltip = computed(() => {
  if (!data.value?._path) return `Documentation for ${props.to} is missing`
  return `Read ${props.to} docs`
})
</script>

<template>
  <NuxtLink
    :to="data?._path"
    class="nui-focus inline-block rounded font-mono text-sm"
    :class="[
      pending
        ? 'bg-muted-100 dark:bg-muted-800/60 text-muted-500 cursor-help no-underline'
        : data?._path
        ? 'nui-mark dark:decoration-primary-100/60 decoration-dotted underline-offset-4'
        : 'bg-danger-100 dark:bg-danger-800/60 text-danger-500 cursor-help no-underline',
    ]"
    :data-tooltip="tooltip"
    >&lt;{{ props.to }}&gt;</NuxtLink
  >
</template>
