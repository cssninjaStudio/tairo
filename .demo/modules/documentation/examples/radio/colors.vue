<script setup lang="ts">
const demoColors = ref('primary')
</script>

<template>
  <BaseRadio
    id="demo-colors-indigo"
    v-model="demoColors"
    name="demo_colors"
    label="indigo"
    value="indigo"
    :classes="{
      wrapper: 'text-indigo-500',
    }"
  />

  <BaseRadio
    id="demo-colors-lime"
    v-model="demoColors"
    name="demo_colors"
    label="lime"
    value="lime"
    :classes="{
      wrapper: 'text-lime-500',
    }"
  />

  <BaseRadio
    id="demo-colors-pink"
    v-model="demoColors"
    name="demo_colors"
    label="pink"
    value="pink"
    :classes="{
      wrapper: 'text-pink-500',
    }"
  />

  <BaseRadio
    id="demo-colors-sky"
    v-model="demoColors"
    name="demo_colors"
    label="sky"
    value="sky"
    :classes="{
      wrapper: 'text-sky-500',
    }"
  />

  <BaseRadio
    id="demo-colors-yellow"
    v-model="demoColors"
    name="demo_colors"
    label="yellow"
    value="yellow"
    :classes="{
      wrapper: 'text-yellow-500',
    }"
  />

  <BaseRadio
    id="demo-colors-purple"
    v-model="demoColors"
    name="demo_colors"
    label="purple"
    value="purple"
    :classes="{
      wrapper: 'text-purple-500',
    }"
  />

  <BaseRadio
    id="demo-colors-green"
    v-model="demoColors"
    name="demo_colors"
    label="green"
    value="green"
    :classes="{
      wrapper: 'text-green-500',
    }"
  />

  <BaseRadio
    id="demo-colors-fuchsia"
    v-model="demoColors"
    name="demo_colors"
    label="fuchsia"
    value="fuchsia"
    :classes="{
      wrapper: 'text-fuchsia-500',
    }"
  />

  <BaseRadio
    id="demo-colors-rose"
    v-model="demoColors"
    name="demo_colors"
    label="rose"
    value="rose"
    :classes="{
      wrapper: 'text-rose-500',
    }"
  />
</template>
