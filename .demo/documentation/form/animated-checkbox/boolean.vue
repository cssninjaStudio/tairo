<script setup lang="ts">
const checked = ref(false)
</script>

<template>
  <BaseAnimatedCheckbox
    v-model="checked"
    class="text-primary-500"
  />
</template>
