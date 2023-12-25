<template>
  <BaseFocusLoop
    class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
  >
    <BaseCheckbox
      v-model="options.first"
      label="Default"
      rounded="sm"
    />

    <BaseCheckbox
      v-model="options.second"
      label="Muted"
      rounded="sm"
      color="muted"
    />

    <BaseCheckbox
      v-model="options.third"
      label="Primary"
      rounded="sm"
      color="primary"
    />

    <BaseCheckbox
      v-model="options.fourth"
      label="Info"
      rounded="sm"
      color="info"
    />

    <BaseCheckbox
      v-model="options.fifth"
      label="Success"
      rounded="sm"
      color="success"
    />

    <BaseCheckbox
      v-model="options.sixth"
      label="Warning"
      rounded="sm"
      color="warning"
    />

    <BaseCheckbox
      v-model="options.seventh"
      label="Danger"
      rounded="sm"
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
