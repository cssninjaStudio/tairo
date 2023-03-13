<script setup lang="ts">
const inputCurved = ref('')
</script>

<template>
  <BaseInput
    v-model="inputCurved"
    shape="curved"
    label="Short description"
    placeholder="Enter a few words..."
  />
</template>
