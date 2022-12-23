<script setup lang="ts">
export interface DocStateProps {
  state: any
  height: string
}

const props = withDefaults(defineProps<DocStateProps>(), {
  height: '100%',
})
</script>

<template>
  <div
    class="grow space-y-2 rounded-md bg-muted-100 p-4 dark:bg-muted-700"
    :style="`min-height:${props.height}`"
  >
    <div class="flex">
      <span class="font-sans text-xs uppercase text-muted-400">State</span>
    </div>
    <div class="flex flex-col gap-y-4">
      <div
        class="flex break-words font-sans text-sm text-muted-500 dark:text-muted-200"
      >
        <pre>{{ props.state }}</pre>
      </div>
    </div>
  </div>
</template>
