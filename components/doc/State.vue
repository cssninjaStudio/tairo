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
    class="grow bg-muted-100 dark:bg-muted-700 p-4 space-y-2 rounded-md"
    :style="`min-height:${props.height}`"
  >
    <div class="flex">
      <span class="font-sans text-xs uppercase text-muted-400">State</span>
    </div>
    <div class="flex flex-col gap-y-4">
      <div
        class="flex font-sans text-sm text-muted-500 dark:text-muted-200 break-words"
      >
        <span>{{ props.state }}</span>
      </div>
    </div>
  </div>
</template>
