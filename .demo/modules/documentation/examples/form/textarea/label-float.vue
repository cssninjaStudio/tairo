<script setup lang="ts">
const textareaRounded = ref('')
</script>

<template>
  <BaseTextarea
    v-model="textareaRounded"
    label="Message"
    shape="rounded"
    placeholder="Write a message..."
    label-float
  />
</template>
