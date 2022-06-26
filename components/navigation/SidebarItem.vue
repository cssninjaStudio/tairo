<script setup lang="ts">
import type { NavigationSidebarItem } from '~~/composables/useSidebar'

const { activeSidebar, toggleActiveSidebar } = useSidebar()

const props = defineProps<{
  sidebar: NavigationSidebarItem
}>()
</script>

<template>
  <div class="flex items-center justify-center w-full h-16">
    <NuxtLink
      v-if="props.sidebar.to"
      :to="props.sidebar.to"
      class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300 text-gray-400"
      :title="props.sidebar.name"
    >
      <component :is="props.sidebar.icon" />
    </NuxtLink>

    <button
      v-else
      class="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300"
      :class="
        activeSidebar?.name === props.sidebar.name
          ? 'bg-primary-100 text-primary-500 dark:bg-primary-500/10'
          : 'text-gray-400'
      "
      :title="props.sidebar.name"
      @click="() => toggleActiveSidebar(props.sidebar)"
    >
      <component :is="props.sidebar.icon" />
    </button>
  </div>
</template>
