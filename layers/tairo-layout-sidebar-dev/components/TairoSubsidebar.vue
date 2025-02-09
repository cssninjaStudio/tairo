<script setup lang="ts">
import { useLayoutSidebarContext } from '../composables/sidebar'

const { menu } = defineProps<{
  menu: string
}>()

const { currentMenu } = useLayoutSidebarContext()
</script>

<template>
  <div v-if="menu === currentMenu" class="px-4 pb-6 pt-2 space-y-1">
    <slot />
  </div>
</template>
