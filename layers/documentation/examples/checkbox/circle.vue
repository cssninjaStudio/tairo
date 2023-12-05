<template>
  <BaseFocusLoop class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <BaseCheckbox
      v-model="options.first"
      label="Default"
      shape="full"
    />

    <BaseCheckbox
      v-model="options.second"
      label="Muted"
      shape="full"
      color="muted"
    />

    <BaseCheckbox
      v-model="options.third"
      label="Primary"
      shape="full"
      color="primary"
    />

    <BaseCheckbox
      v-model="options.fourth"
      label="Info"
      shape="full"
      color="info"
    />

    <BaseCheckbox
      v-model="options.fifth"
      label="Success"
      shape="full"
      color="success"
    />

    <BaseCheckbox
      v-model="options.sixth"
      label="Warning"
      shape="full"
      color="warning"
    />

    <BaseCheckbox
      v-model="options.seventh"
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
