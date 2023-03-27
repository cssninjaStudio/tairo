<script setup lang="ts">
const textareaCurved = ref('')
</script>

<template>
  <BaseTextarea v-model="textareaCurved" label="Message" shape="curved" placeholder="Write a message..." />
</template>
