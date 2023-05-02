<script setup lang="ts">
const { isOpen } = useCollapse()
</script>

<template>
  <div
    class="flex h-16 w-full items-center gap-4 transition-all duration-150"
    :class="!isOpen ? 'px-2 justify-center' : 'px-6'"
  >
    <!--Account menu-->
    <DemoAccountMenu />
    <span
      class="text-muted-500 dark:text-muted-400/80 whitespace-nowrap font-sans text-sm"
      :class="!isOpen ? 'hidden' : 'block'"
    >
      My Account
    </span>
  </div>
</template>
