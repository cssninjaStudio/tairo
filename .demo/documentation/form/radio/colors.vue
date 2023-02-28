<script setup lang="ts">
const demoColors = ref('primary')
</script>

<template>
  <BaseRadio
    id="demo-colors-primary"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="primary"
    :classes="{
      wrapper: 'text-primary-500',
    }"
  />

  <BaseRadio
    id="demo-colors-lime"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="lime"
    :classes="{
      wrapper: 'text-lime-500',
    }"
  />

  <BaseRadio
    id="demo-colors-pink"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="pink"
    :classes="{
      wrapper: 'text-pink-500',
    }"
  />

  <BaseRadio
    id="demo-colors-sky"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="sky"
    :classes="{
      wrapper: 'text-sky-500',
    }"
  />

  <BaseRadio
    id="demo-colors-yellow"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="yellow"
    :classes="{
      wrapper: 'text-yellow-500',
    }"
  />

  <BaseRadio
    id="demo-colors-indigo"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="indigo"
    :classes="{
      wrapper: 'text-indigo-500',
    }"
  />

  <BaseRadio
    id="demo-colors-emerald"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="emerald"
    :classes="{
      wrapper: 'text-emerald-500',
    }"
  />

  <BaseRadio
    id="demo-colors-fuchsia"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="fuchsia"
    :classes="{
      wrapper: 'text-fuchsia-500',
    }"
  />

  <BaseRadio
    id="demo-colors-rose"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="rose"
    :classes="{
      wrapper: 'text-rose-500',
    }"
  />
</template>
