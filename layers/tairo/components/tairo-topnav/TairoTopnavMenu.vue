<script setup lang="ts">
const { currentTrigger } = useLayoutTopnavContext()
</script>

<template>
  <div class="relative z-0 flex w-full max-w-[var(--tairo-topnav-width)] mx-auto items-center justify-between h-12">
    <NavigationMenuRoot
      v-model="currentTrigger"
      class="relative z-[1] flex w-full"
    >
      <slot />
    </NavigationMenuRoot>
  </div>
</template>
