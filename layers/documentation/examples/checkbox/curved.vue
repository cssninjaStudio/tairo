<template>
  <BaseFocusLoop class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <BaseCheckbox v-model="options.first" value="demo-curved-1" label="Default" shape="curved" />

    <BaseCheckbox
      v-model="options.second"
      value="demo-curved-2"
      label="Muted"
      shape="curved"
      color="muted"
    />

    <BaseCheckbox
      v-model="options.third"
      value="demo-curved-3"
      label="Primary"
      shape="curved"
      color="primary"
    />

    <BaseCheckbox
      v-model="options.fourth"
      value="demo-curved-4"
      label="Info"
      shape="curved"
      color="info"
    />

    <BaseCheckbox
      v-model="options.fifth"
      value="demo-curved-5"
      label="Success"
      shape="curved"
      color="success"
    />

    <BaseCheckbox
      v-model="options.sixth"
      value="demo-curved-6"
      label="Warning"
      shape="curved"
      color="warning"
    />

    <BaseCheckbox
      v-model="options.seventh"
      value="demo-curved-2"
      label="Danger"
      shape="curved"
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
