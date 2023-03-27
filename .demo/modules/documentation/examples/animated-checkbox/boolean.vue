<template>
  <BaseAnimatedCheckbox v-model="checked" :classes="{ label: 'text-primary-500' }" />
</template>

<script setup lang="ts">
const checked = ref(false)
</script>
