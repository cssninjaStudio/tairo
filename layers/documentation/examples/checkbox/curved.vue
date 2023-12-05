<template>
  <BaseFocusLoop class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <BaseCheckbox v-model="options.first" label="Default" shape="curved" />

    <BaseCheckbox
      v-model="options.second"
      label="Muted"
      shape="curved"
      color="muted"
    />

    <BaseCheckbox
      v-model="options.third"
      label="Primary"
      shape="curved"
      color="primary"
    />

    <BaseCheckbox
      v-model="options.fourth"
      label="Info"
      shape="curved"
      color="info"
    />

    <BaseCheckbox
      v-model="options.fifth"
      label="Success"
      shape="curved"
      color="success"
    />

    <BaseCheckbox
      v-model="options.sixth"
      label="Warning"
      shape="curved"
      color="warning"
    />

    <BaseCheckbox
      v-model="options.seventh"
      label="Danger"
      shape="curved"
      color="danger"
    />
  </BaseFocusLoop>
</template>

<script setup lang="ts">
const first = ref(false)
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
