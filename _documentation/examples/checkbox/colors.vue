<template>
  <BaseFocusLoop class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <BaseCheckbox
      v-model="options.first"
      label="Straight"
      shape="straight"
      :classes="{ wrapper: 'text-gray-500' }"
    />

    <BaseCheckbox
      v-model="options.second"
      label="Straight"
      shape="straight"
      :classes="{ wrapper: 'text-emerald-500' }"
    />

    <BaseCheckbox
      v-model="options.third"
      label="Rounded"
      shape="rounded"
      :classes="{ wrapper: 'text-yellow-500' }"
    />

    <BaseCheckbox
      v-model="options.fourth"
      label="Rounded"
      shape="rounded"
      :classes="{ wrapper: 'text-pink-500' }"
    />

    <BaseCheckbox
      v-model="options.fifth"
      label="Curved"
      shape="curved"
      :classes="{ wrapper: 'text-indigo-500' }"
    />

    <BaseCheckbox
      v-model="options.sixth"
      label="Curved"
      shape="curved"
      :classes="{ wrapper: 'text-primary-500' }"
    />

    <BaseCheckbox
      v-model="options.seventh"
      label="Circle"
      shape="full"
      :classes="{ wrapper: 'text-amber-500' }"
    />

    <BaseCheckbox
      v-model="options.eighth"
      label="Circle"
      shape="full"
      :classes="{ wrapper: 'text-rose-500' }"
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
  eighth: true,
})
</script>
