<template>
  <BaseCheckbox v-model="value" disabled label="I'm disabled" />
</template>

<script setup lang="ts">
const value = ref(true)
</script>
