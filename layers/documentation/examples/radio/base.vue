<script setup lang="ts">
const value = ref('primary')
</script>

<template>
  <BaseRadioGroup v-model="value" class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <BaseRadio
      name="checkbox_base"
      label="default"
      value="default"
    />

    <BaseRadio
      name="checkbox_base"
      label="primary"
      value="primary"
      color="primary"
    />

    <BaseRadio
      name="checkbox_base"
      value="muted"
      label="muted"
      color="muted"
    />

    <BaseRadio
      name="checkbox_base"
      value="info"
      label="info"
      color="info"
    />

    <BaseRadio
      name="checkbox_base"
      value="success"
      label="success"
      color="success"
    />

    <BaseRadio
      name="checkbox_base"
      value="warning"
      label="warning"
      color="warning"
    />

    <BaseRadio
      name="checkbox_base"
      value="danger"
      label="danger"
      color="danger"
    />
  </BaseRadioGroup>
</template>
