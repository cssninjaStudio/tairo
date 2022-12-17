<script setup lang="ts">
const app = useAppConfig()

definePageMeta({
  breadcrumb: {
    label: 'Home',
    hideLabel: true,
    icon: 'lucide:home',
  },
})
</script>

<template>
  <div>{{ app.tairo.title }} quickstarter</div>
</template>
