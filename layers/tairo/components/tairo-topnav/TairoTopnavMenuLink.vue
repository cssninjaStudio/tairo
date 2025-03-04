<script setup lang="ts">
const { to } = defineProps<{
  to: string
}>()
</script>

<template>
  <NavigationMenuLink
    :href="to"
    class="text-muted-700 hover:text-muted-900 dark:text-muted-500 dark:hover:text-muted-100 hover:bg-muted-100 dark:hover:bg-muted-900 focus:nui-focus block select-none rounded-md px-3 py-2 text-[15px] font-sans leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
  >
    <slot />
  </NavigationMenuLink>
</template>
