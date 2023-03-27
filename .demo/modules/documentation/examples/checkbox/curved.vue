<script setup lang="ts">
const demoThree = ref(true)
</script>

<template>
  <BaseCheckbox v-model="demoThree" name="demo-curved-1" label="Default" shape="curved" />
  <BaseCheckbox v-model="demoThree" name="demo-curved-2" label="Muted" shape="curved" color="muted" />
  <BaseCheckbox v-model="demoThree" name="demo-curved-3" label="Primary" shape="curved" color="primary" />
  <BaseCheckbox v-model="demoThree" name="demo-curved-4" label="Info" shape="curved" color="info" />
  <BaseCheckbox v-model="demoThree" name="demo-curved-5" label="Success" shape="curved" color="success" />
  <BaseCheckbox v-model="demoThree" name="demo-curved-6" label="Warning" shape="curved" color="warning" />
  <BaseCheckbox v-model="demoThree" name="demo-curved-2" label="Danger" shape="curved" color="danger" />
</template>
