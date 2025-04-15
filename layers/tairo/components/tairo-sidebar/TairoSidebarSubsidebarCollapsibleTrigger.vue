<script setup lang="ts">
import { CollapsibleTrigger } from 'reka-ui'

const props = defineProps<{
  icon?: string
  label?: string
}>()
</script>

<template>
  <CollapsibleTrigger
    class="group/button cursor-pointer flex w-full items-center justify-between rounded-lg group-data-[state=open]:bg-muted-100 dark:group-data-[state=open]:bg-muted-900 group-data-[state=open]:text-muted-900 dark:group-data-[state=open]:text-white group-data-[state=closed]:text-muted-500 dark:group-data-[state=closed]:text-muted-400 group-data-[state=closed]:hover:bg-muted-100 dark:group-data-[state=closed]:hover:bg-muted-900 group-data-[state=closed]:hover:text-muted-900 dark:group-data-[state=closed]:hover:text-muted-100 outline-none focus-visible:nui-focus focus-visible:ring-inset"
  >
    <div
      class="z-10 flex h-10 w-full items-center pe-4 ps-2 gap-2 text-sm"
    >
      <slot>
        <Icon
          v-if="props.icon"
          :name="props.icon"
          class="size-4 text-muted-500 dark:text-muted-400"
        />
        <span>{{ props.label }}</span>
      </slot>
    </div>
    <div
      class="me-2 flex size-6 shrink-0 items-center justify-center rounded-lg text-muted-500 transition group-data-[state=open]:-rotate-90"
    >
      <Icon
        name="lucide:chevron-left"
        class="size-4 text-muted-500 dark:text-muted-400"
      />
    </div>
  </CollapsibleTrigger>
</template>
