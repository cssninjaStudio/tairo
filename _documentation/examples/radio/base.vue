<template>
  <div class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <BaseRadio v-model="value" name="checkbox_base" label="default" value="default" />

    <BaseRadio
      v-model="value"
      name="checkbox_base"
      label="primary"
      value="primary"
      color="primary"
    />

    <BaseRadio v-model="value" name="checkbox_base" value="muted" label="muted" color="muted" />

    <BaseRadio v-model="value" name="checkbox_base" value="info" label="info" color="info" />

    <BaseRadio
      v-model="value"
      name="checkbox_base"
      value="success"
      label="success"
      color="success"
    />

    <BaseRadio
      v-model="value"
      name="checkbox_base"
      value="warning"
      label="warning"
      color="warning"
    />

    <BaseRadio v-model="value" name="checkbox_base" value="danger" label="danger" color="danger" />
  </div>
</template>

<script setup lang="ts">
const value = ref('primary')
</script>
