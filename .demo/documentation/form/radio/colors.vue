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
    class="text-primary-500"
  />

  <BaseRadio
    id="demo-colors-lime"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="lime"
    class="text-lime-500"
  />

  <BaseRadio
    id="demo-colors-pink"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="pink"
    class="text-pink-500"
  />

  <BaseRadio
    id="demo-colors-sky"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="sky"
    class="text-sky-500"
  />

  <BaseRadio
    id="demo-colors-yellow"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="yellow"
    class="text-yellow-500"
  />

  <BaseRadio
    id="demo-colors-indigo"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="indigo"
    class="text-indigo-500"
  />

  <BaseRadio
    id="demo-colors-emerald"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="emerald"
    class="text-emerald-500"
  />

  <BaseRadio
    id="demo-colors-fuchsia"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="fuchsia"
    class="text-fuchsia-500"
  />

  <BaseRadio
    id="demo-colors-rose"
    v-model="demoColors"
    name="demo_colors"
    label="color"
    value="rose"
    class="text-rose-500"
  />
</template>
