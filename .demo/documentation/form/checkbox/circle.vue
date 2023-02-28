<script setup lang="ts">
const demoFour = ref(true)
</script>

<template>
  <BaseCheckbox
    v-model="demoFour"
    name="demo-4"
    label="Circle checkbox"
    shape="circle"
    :true-value="'checked'"
    :false-value="'not-checked'"
    :classes="{ wrapper: 'text-gray-500' }"
  />
</template>
