<script setup lang="ts">
const value = ref('')
</script>

<template>
  <BaseField label="Username">
    <TairoInput v-model="value" icon="solar:user-linear" />
  </BaseField>
</template>
