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
    class="grow bg-slate-100 dark:bg-slate-700 p-4 space-y-2 rounded-md"
    :style="`min-height:${props.height}`"
  >
    <div class="flex">
      <span class="font-text text-xs uppercase text-slate-400">State</span>
    </div>
    <div class="flex flex-col gap-y-4">
      <div
        class="flex font-text text-sm text-slate-500 dark:text-slate-200 break-words"
      >
        <span>{{ props.state }}</span>
      </div>
    </div>
  </div>
</template>
