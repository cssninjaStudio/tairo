<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseInputNumber
      v-model="fields.first"
      shape="straight"
      label="Temperature (°C)"
      icon="carbon:temperature-celsius"
      :min="-20"
      :max="20"
      :step="0.05"
    />

    <BaseInputNumber
      v-model="fields.second"
      shape="rounded"
      label="Temperature (°F)"
      icon="carbon:temperature-fahrenheit"
      :min="0"
      :step="0.5"
    />

    <BaseInputNumber
      v-model="fields.third"
      shape="rounded"
      label="BTC"
      icon="ic:sharp-currency-bitcoin"
      :min="0"
      :step="0.000001"
    />

    <BaseInputNumber
      v-model="fields.fourth"
      shape="full"
      icon="material-symbols-light:encrypted-outline"
      label="Bytes"
      :min="0"
      :step="1024"
    />
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: 0.15,
  second: 1.5,
  third: 1.542312,
  fourth: 1024,
})
</script>
