<script setup lang="ts">
const inputFocus = ref('')
</script>

<template>
  <BaseInput
    v-model="inputFocus"
    shape="rounded"
    label="Email Address"
    placeholder="Enter your email..."
    icon="lucide:mail"
    color-focus
  />
</template>
