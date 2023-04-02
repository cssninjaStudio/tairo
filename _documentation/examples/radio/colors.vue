<template>
  <div class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
    <BaseRadio
      v-model="value"
      name="checkbox_colors"
      label="indigo"
      value="indigo"
      :classes="{
        wrapper: 'text-indigo-500',
      }"
    />

    <BaseRadio
      v-model="value"
      name="checkbox_colors"
      label="lime"
      value="lime"
      :classes="{
        wrapper: 'text-lime-500',
      }"
    />

    <BaseRadio
      v-model="value"
      name="checkbox_colors"
      label="pink"
      value="pink"
      :classes="{
        wrapper: 'text-pink-500',
      }"
    />

    <BaseRadio
      v-model="value"
      name="checkbox_colors"
      label="sky"
      value="sky"
      :classes="{
        wrapper: 'text-sky-500',
      }"
    />

    <BaseRadio
      v-model="value"
      name="checkbox_colors"
      label="yellow"
      value="yellow"
      :classes="{
        wrapper: 'text-yellow-500',
      }"
    />

    <BaseRadio
      v-model="value"
      name="checkbox_colors"
      label="purple"
      value="purple"
      :classes="{
        wrapper: 'text-purple-500',
      }"
    />

    <BaseRadio
      v-model="value"
      name="checkbox_colors"
      label="green"
      value="green"
      :classes="{
        wrapper: 'text-green-500',
      }"
    />

    <BaseRadio
      v-model="value"
      name="checkbox_colors"
      label="fuchsia"
      value="fuchsia"
      :classes="{
        wrapper: 'text-fuchsia-500',
      }"
    />

    <BaseRadio
      v-model="value"
      name="checkbox_colors"
      label="rose"
      value="rose"
      :classes="{
        wrapper: 'text-rose-500',
      }"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('pink')
</script>
