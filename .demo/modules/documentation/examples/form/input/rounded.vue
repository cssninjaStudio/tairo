<script setup lang="ts">
const inputRounded = ref('')
</script>

<template>
  <BaseInput
    v-model="inputRounded"
    shape="rounded"
    label="Short description"
    placeholder="Enter a few words..."
  />
</template>
