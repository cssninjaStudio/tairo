<template>
  <BaseCheckbox
    v-model="value"
    name="true-false"
    :label="value"
    rounded="full"
    :true-value="'checked'"
    :false-value="'not-checked'"
    color="muted"
  />
</template>

<script setup lang="ts">
const value = ref('not-checked')
</script>
