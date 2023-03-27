<script setup lang="ts">
const demoFour = ref(true)
</script>

<template>
  <BaseCheckbox v-model="demoFour" name="demo-full-1" label="Default" shape="full" />
  <BaseCheckbox v-model="demoFour" name="demo-full-2" label="Muted" shape="full" color="muted" />
  <BaseCheckbox v-model="demoFour" name="demo-full-3" label="Primary" shape="full" color="primary" />
  <BaseCheckbox v-model="demoFour" name="demo-full-4" label="Info" shape="full" color="info" />
  <BaseCheckbox v-model="demoFour" name="demo-full-5" label="Success" shape="full" color="success" />
  <BaseCheckbox v-model="demoFour" name="demo-full-6" label="Warning" shape="full" color="warning" />
  <BaseCheckbox v-model="demoFour" name="demo-full-2" label="Danger" shape="full" color="danger" />
</template>
