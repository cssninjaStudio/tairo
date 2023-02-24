<script setup lang="ts">
definePageMeta({
  breadcrumb: {
    label: 'Home',
    hideLabel: true,
    icon: 'lucide:home',
  },
})

const app = useAppConfig()
</script>

<template>
  <div>
    {{ app.tairo.title }} demo -
    <NuxtLink to="/components">View components</NuxtLink>
  </div>
</template>
