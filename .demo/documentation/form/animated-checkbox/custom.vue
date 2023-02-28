<script setup lang="ts">
const customValue = ref()
</script>

<template>
  <BaseAnimatedCheckbox
    v-model="customValue"
    :true-value="'checked'"
    :false-value="'not-checked'"
    class="text-primary-500"
  />
</template>
