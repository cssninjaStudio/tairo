<script setup lang="ts">
const props = defineProps<{
  to: string
}>()

const { pending, data } = useAsyncData(
  `doc-linker-to-${props.to}`,
  () => {
    if (!props.to)
      return Promise.resolve(null)

    return queryCollection('docs')
      .select('path')
      .where('components', 'LIKE', `%${props.to}%`)
      .first()
  },
  {
    watch: [() => props.to],
  },
)

const tooltip = computed(() => {
  if (!data.value?.path)
    return `Documentation for ${props.to} is missing`
  return `Read ${props.to} docs`
})
</script>

<template>
  <NuxtLink
    :to="data?.path"
    class="focus-visible:nui-focus inline-block rounded-sm font-mono text-sm"
    :class="[
      pending
        ? 'bg-muted-100 dark:bg-muted-800/60 text-muted-500 cursor-help no-underline'
        : data?.path
          ? 'nui-mark dark:decoration-primary-100/60 decoration-dotted underline-offset-4'
          : 'bg-destructive-100 dark:bg-destructive-800/60 text-destructive-500 cursor-help no-underline',
    ]"
    :data-nui-tooltip="tooltip"
  >
    &lt;{{ props.to }}&gt;
  </NuxtLink>
</template>
