<script setup lang="ts">
const inputFile = ref<FileList | null>()
</script>

<template>
  <BaseInputFile
    v-model="inputFile"
    shape="curved"
  />
</template>
