<template>
  <BaseFocusLoop class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <BaseCheckbox v-model="options.first" label="Default" shape="straight" />

    <BaseCheckbox v-model="options.second" label="Muted" shape="straight" color="muted" />

    <BaseCheckbox v-model="options.third" label="Primary" shape="straight" color="primary" />

    <BaseCheckbox v-model="options.fourth" label="Info" shape="straight" color="info" />

    <BaseCheckbox v-model="options.fifth" label="Success" shape="straight" color="success" />

    <BaseCheckbox v-model="options.sixth" label="Warning" shape="straight" color="warning" />

    <BaseCheckbox v-model="options.seventh" label="Danger" shape="straight" color="danger" />
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
