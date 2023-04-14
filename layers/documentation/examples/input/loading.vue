<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseInput
      v-model="value"
      shape="rounded"
      type="email"
      label="Email Address"
      placeholder="Enter your email..."
      icon="lucide:mail"
      loading
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
</script>
