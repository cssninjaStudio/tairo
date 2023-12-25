<template>
  <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <BaseTextarea
      v-model="value"
      contrast="default-contrast"
      size="sm"
      label="Message"
      rounded="md"
      placeholder="Write a message..."
      color-focus
    />

    <BaseTextarea
      v-model="value"
      contrast="default-contrast"
      label="Message"
      rounded="md"
      placeholder="Write a message..."
      color-focus
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
</script>
