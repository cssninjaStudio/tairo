<template>
  <BaseFocusLoop class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <BaseCheckbox v-model="options.first" value="demo-rounded-1" label="Default" shape="rounded" />

    <BaseCheckbox
      v-model="options.second"
      value="demo-rounded-2"
      label="Muted"
      shape="rounded"
      color="muted"
    />

    <BaseCheckbox
      v-model="options.third"
      value="demo-rounded-3"
      label="Primary"
      shape="rounded"
      color="primary"
    />

    <BaseCheckbox
      v-model="options.fourth"
      value="demo-rounded-4"
      label="Info"
      shape="rounded"
      color="info"
    />

    <BaseCheckbox
      v-model="options.fifth"
      value="demo-rounded-5"
      label="Success"
      shape="rounded"
      color="success"
    />

    <BaseCheckbox
      v-model="options.sixth"
      value="demo-rounded-6"
      label="Warning"
      shape="rounded"
      color="warning"
    />

    <BaseCheckbox
      v-model="options.seventh"
      value="demo-rounded-2"
      label="Danger"
      shape="rounded"
      color="danger"
    />
  </BaseFocusLoop>
</template>

<script setup lang="ts">
const options = reactive({
  first: true,
  second: true,
  third: true,
  fourth: true,
  fifth: true,
  sixth: true,
  seventh: true,
})
</script>
