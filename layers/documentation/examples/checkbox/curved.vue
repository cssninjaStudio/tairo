<template>
  <BaseFocusLoop
    class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
  >
    <BaseCheckbox
      v-model="options.first"
      label="Default"
      rounded="lg"
    />

    <BaseCheckbox
      v-model="options.second"
      label="Muted"
      rounded="lg"
      color="muted"
    />

    <BaseCheckbox
      v-model="options.third"
      label="Primary"
      rounded="lg"
      color="primary"
    />

    <BaseCheckbox
      v-model="options.fourth"
      label="Info"
      rounded="lg"
      color="info"
    />

    <BaseCheckbox
      v-model="options.fifth"
      label="Success"
      rounded="lg"
      color="success"
    />

    <BaseCheckbox
      v-model="options.sixth"
      label="Warning"
      rounded="lg"
      color="warning"
    />

    <BaseCheckbox
      v-model="options.seventh"
      label="Danger"
      rounded="lg"
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
