<script setup lang="ts">
const checked = ref(false)
</script>

<template>
  <label class="flex items-center gap-3">
    <TairoCheckboxAnimated
      v-model="checked"
      variant="success"
    />
    <BaseText
      class="text-muted-500 dark:text"
      size="sm"
    >
      Lowercase
    </BaseText>
  </label>
</template>
