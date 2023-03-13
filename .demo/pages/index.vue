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
    <NuxtLink to="/documentation">View components</NuxtLink>
    <div>
      <BaseButton to="/test-error">Test error</BaseButton>
    </div>
  </div>
</template>
