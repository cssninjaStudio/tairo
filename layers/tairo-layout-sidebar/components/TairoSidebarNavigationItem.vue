<script setup lang="ts">
import { useSidebar } from '../composables/sidebar'
import type { SidebarNavigationItemConfig } from '../types'

const props = defineProps<{
  sidebar: SidebarNavigationItemConfig
}>()

const { currentName, isOpen } = useSidebar()

function onSidebarItemClick() {
  if (typeof props.sidebar.click === 'function') {
    return props.sidebar.click()
  }

  currentName.value = props.sidebar.title
  isOpen.value = true
}
</script>

<template>
  <div class="flex h-16 w-full items-center justify-center">
    <span>{{ props.sidebar.order }}</span>
    <component
      :is="resolveComponentOrNative(props.sidebar.component)"
      v-if="props.sidebar.component"
      v-bind="props.sidebar.props"
    />
    <NuxtLink
      v-else-if="props.sidebar.to && props.sidebar.icon"
      :to="props.sidebar.to"
      class="text-muted-400 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300"
      data-tooltip-position="right"
      :data-tooltip="props.sidebar.title"
    >
      <Icon v-bind="props.sidebar.icon" />
    </NuxtLink>

    <button
      v-else-if="props.sidebar.icon"
      type="button"
      class="flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300"
      :class="
        currentName === props.sidebar.title
          ? 'bg-primary-100 text-primary-500 dark:bg-primary-500/10'
          : 'text-muted-400'
      "
      data-tooltip-position="right"
      :data-tooltip="props.sidebar.title"
      @click="onSidebarItemClick"
    >
      <Icon v-bind="props.sidebar.icon" />
    </button>
  </div>
</template>
