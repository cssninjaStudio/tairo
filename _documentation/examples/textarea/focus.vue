<template>
  <div class="grid md:grid-cols-2 md:max-w-xl gap-6">
    <BaseTextarea
      v-model="value"
      label="Message"
      shape="rounded"
      placeholder="Write a message..."
      color-focus
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
</script>
