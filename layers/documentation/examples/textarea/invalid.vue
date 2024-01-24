<template>
  <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <BaseTextarea
      v-model="value"
      size="sm"
      label="Message"
      rounded="md"
      placeholder="Write a message..."
      error="Please enter a message"
    />

    <BaseTextarea
      v-model="value"
      label="Message"
      rounded="md"
      placeholder="Write a message..."
      error="Please enter a message"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
</script>
