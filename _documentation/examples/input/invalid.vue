<template>
  <div class="grid md:grid-cols-2 md:max-w-lg gap-6">
    <BaseInput
      v-model="value"
      type="email"
      label="Email Address"
      placeholder="Enter your email..."
      icon="lucide:mail"
      error="This email is already taken"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
</script>
