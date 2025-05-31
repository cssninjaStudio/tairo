<script setup lang="ts">
import { useBodyScrollLock } from '~/utils/bundle/reka-ui'

const { isCollapsed, isMobileOpen, toggleMobileNav } = createLayoutCollapseContext()

const locked = useBodyScrollLock()

watch(isMobileOpen, (value) => {
  locked.value = value
})
</script>

<template>
  <div class="min-h-screen w-full bg-white dark:bg-muted-900">
    <div>
      <slot v-bind="{ isCollapsed, isMobileOpen, toggleMobileNav }" />
    </div>
    <TairoCollapseBackdrop />
  </div>
</template>
