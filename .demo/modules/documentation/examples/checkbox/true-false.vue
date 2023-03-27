<script setup lang="ts">
const demoTrueFalse = ref(true)
</script>

<template>
  <BaseCheckbox
    v-model="demoTrueFalse"
    name="true-false"
    label="True/False"
    shape="full"
    :true-value="'checked'"
    :false-value="'not-checked'"
    color="muted"
  />
</template>
