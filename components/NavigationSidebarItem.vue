<script setup lang="ts">
// import type { SidebarItem } from '../stores/sidebar'
import type { SidebarItem } from '../composables/useSidebar'

const sidebar = reactive(useSidebar())

const props = defineProps<{
  sidebar: SidebarItem
}>()

function onSidebarItemClick() {
  if (typeof props.sidebar.click === 'function') {
    return props.sidebar.click()
  }

  sidebar.currentName = props.sidebar.name
  sidebar.isOpen = true
}
</script>

<template>
  <div class="flex h-16 w-full items-center justify-center">
    <NuxtLink
      v-if="props.sidebar.to"
      :to="props.sidebar.to"
      class="flex h-12 w-12 items-center justify-center rounded-2xl text-muted-400 transition-colors duration-300"
      :title="props.sidebar.name"
    >
      <Icon v-bind="props.sidebar.icon" />
    </NuxtLink>

    <button
      v-else
      type="button"
      class="flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300"
      :class="
        sidebar.currentName === props.sidebar.name
          ? 'bg-primary-100 text-primary-500 dark:bg-primary-500/10'
          : 'text-muted-400'
      "
      :title="props.sidebar.name"
      @click="onSidebarItemClick"
    >
      <Icon v-bind="props.sidebar.icon" />
    </button>
  </div>
</template>
