<script setup lang="ts">
import { CollapsibleTrigger } from 'reka-ui'

const props = defineProps<{
  icon?: string
  label?: string
}>()

const { isCollapsed } = useLayoutCollapseContext()
</script>

<template>
  <CollapsibleTrigger
    class="cursor-pointer flex w-full items-center justify-between rounded-lg group-data-[state=open]:bg-muted-100 dark:group-data-[state=open]:bg-muted-900 group-data-[state=open]:text-muted-900 dark:group-data-[state=open]:text-white group-data-[state=closed]:text-muted-500 dark:group-data-[state=closed]:text-muted-400 group-data-[state=closed]:hover:bg-muted-100 dark:group-data-[state=closed]:hover:bg-muted-900 group-data-[state=closed]:hover:text-muted-900 dark:group-data-[state=closed]:hover:text-muted-100 outline-none focus-visible:nui-focus focus-visible:ring-inset"
    @click="isCollapsed = false"
  >
    <div
      class="z-10 flex h-10 w-full items-center text-sm"
      :class="[
        isCollapsed ? 'w-12 justify-center' : 'gap-4 px-4',
      ]"
    >
      <slot>
        <Icon
          v-if="props.icon"
          :name="props.icon"
          class="size-5 text-muted-500 dark:text-muted-400 shrink-0"
        />
        <span v-if="!isCollapsed">{{ props.label }}</span>
      </slot>
    </div>
    <div
      v-if="!isCollapsed"
      class="me-2 flex size-6 shrink-0 items-center justify-center rounded-lg text-muted-500 transition group-data-[state=open]:rotate-180"
    >
      <Icon
        name="lucide:chevron-down"
        class="size-4 text-muted-500 dark:text-muted-400"
      />
    </div>
  </CollapsibleTrigger>
</template>
