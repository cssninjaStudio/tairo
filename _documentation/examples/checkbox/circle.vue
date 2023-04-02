<template>
  <BaseFocusLoop class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <BaseCheckbox v-model="options.first" value="demo-full-1" label="Default" shape="full" />

    <BaseCheckbox
      v-model="options.second"
      value="demo-full-2"
      label="Muted"
      shape="full"
      color="muted"
    />

    <BaseCheckbox
      v-model="options.third"
      value="demo-full-3"
      label="Primary"
      shape="full"
      color="primary"
    />

    <BaseCheckbox
      v-model="options.fourth"
      value="demo-full-4"
      label="Info"
      shape="full"
      color="info"
    />

    <BaseCheckbox
      v-model="options.fifth"
      value="demo-full-5"
      label="Success"
      shape="full"
      color="success"
    />

    <BaseCheckbox
      v-model="options.sixth"
      value="demo-full-6"
      label="Warning"
      shape="full"
      color="warning"
    />

    <BaseCheckbox
      v-model="options.seventh"
      value="demo-full-2"
      label="Danger"
      shape="full"
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
