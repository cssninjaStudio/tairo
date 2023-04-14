<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseSwitchThin
      v-model="value"
      label="Primary"
      sublabel="This is a primary switch"
      color="primary"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref(true)
</script>
