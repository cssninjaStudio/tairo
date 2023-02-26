<script setup lang="ts">
export interface DocStateProps {
  state: any
  height?: string
  label?: string
}

const props = withDefaults(defineProps<DocStateProps>(), {
  height: '100%',
  label: 'State',
})
</script>

<template>
  <div
    class="grow space-y-2 rounded-md bg-muted-100 p-4 dark:bg-muted-700"
    :style="`min-height:${props.height}`"
  >
    <div class="flex">
      <span class="font-sans text-xs uppercase text-muted-400">
        {{ props.label }}
      </span>
    </div>
    <div class="flex flex-col gap-y-4">
      <div class="prose flex break-words font-sans text-sm">
        <pre class="!bg-transparent !p-0 text-muted-500 dark:text-muted-200">{{
          props.state
        }}</pre>
      </div>
    </div>
  </div>
</template>
