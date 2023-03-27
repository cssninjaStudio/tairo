<template>
  <BaseAnimatedCheckbox
    v-model="customValue"
    :true-value="'checked'"
    :false-value="'not-checked'"
    :classes="{ label: 'text-primary-500' }"
  />
</template>

<script setup lang="ts">
const customValue = ref()
</script>
