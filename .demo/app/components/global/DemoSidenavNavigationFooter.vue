<script setup lang="ts">
</script>

<template>
  <div class="relative flex w-full">
    <NuxtLink
      to="/layouts/preferences"
      class="text-muted-500 hover:text-muted-900 hover:before:bg-muted-50 focus-visible:before:ring-primary-500 dark:text-muted-400 dark:hover:before:bg-muted-800/50 dark:focus-visible:before:ring-primary-400 group relative flex w-full items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium before:absolute before:inset-px before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:hover:text-white dark:focus-visible:outline-none"
    >
      <BaseAvatar
        src="/img/avatars/2.svg"
        size="xxs"
        alt=""
      />
      <span class="relative line-clamp-1 text-sm"> Maya R.</span>
    </NuxtLink>
  </div>
</template>
