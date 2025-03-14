<script setup lang="ts">
const props = defineProps<{
  to?: any
  icon?: string
  label?: string
}>()

const { isCollapsed } = useLayoutCollapseContext()
</script>

<template>
  <NuxtLink
    v-if="props.to"
    :to="props.to"
    class="z-10 flex w-full items-center rounded-lg text-muted-500 dark:text-muted-400 hover:bg-muted-100 hover:text-muted-900 dark:hover:text-white dark:hover:bg-muted-900/50 gap-2 text-sm outline-none focus-visible:nui-focus focus-visible:ring-inset"
    active-class="bg-muted-100 text-muted-900 dark:text-white dark:bg-muted-900/50"
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
  </NuxtLink>
  <button
    v-else
    type="button"
    class="cursor-pointer z-10 flex w-full items-center rounded-lg text-muted-500 dark:text-muted-400 hover:bg-muted-100 hover:text-muted-900 dark:hover:text-white dark:hover:bg-muted-900/50 gap-2 text-sm outline-none focus-visible:nui-focus focus-visible:ring-inset"
  >
    <span
      class="z-10 flex h-10 w-full items-center text-sm"
      :class="[
        isCollapsed ? 'w-12 justify-center' : 'gap-4 px-4',
      ]"
    >
      <slot :is-collapsed="isCollapsed">
        <Icon
          v-if="props.icon"
          :name="props.icon"
          class="size-5 text-muted-500 dark:text-muted-400 shrink-0"
        />
        <span v-if="!isCollapsed">{{ props.label }}</span>
      </slot>
    </span>
  </button>
</template>
