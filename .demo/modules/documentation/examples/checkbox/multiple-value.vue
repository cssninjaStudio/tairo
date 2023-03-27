<script setup lang="ts">
const demoMultiple = ref(['Option 1', 'Option 2'])
</script>

<template>
  <BaseCheckbox
    v-model="demoMultiple"
    name="multiple-demo-1"
    label="Option 1"
    value="Option 1"
    shape="curved"
    color="muted"
  />
  <BaseCheckbox
    v-model="demoMultiple"
    name="multiple-demo-2"
    label="Option 2"
    value="Option 2"
    shape="curved"
    color="muted"
  />
  <BaseCheckbox
    v-model="demoMultiple"
    name="multiple-demo-3"
    label="Option 3"
    value="Option 3"
    shape="curved"
    color="muted"
  />
  <BaseCheckbox
    v-model="demoMultiple"
    name="multiple-demo-4"
    label="Option 4"
    value="Option 4"
    shape="curved"
    color="muted"
  />
  <BaseCheckbox
    v-model="demoMultiple"
    name="multiple-demo-5"
    label="Option 5"
    value="Option 5"
    shape="curved"
    color="muted"
  />
</template>
