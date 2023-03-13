<script setup lang="ts">
const frameworks = [
  'Javascript',
  'Vue.js',
  'React.js',
  'Angular',
  'Alpine.js',
]

const selectedFramework = ref()
</script>

<template>
  <BaseListbox
    v-model="selectedFramework"
    label="Straight listbox"
    :items="frameworks"
    placeholder="Select a framework"
    shape="straight"
    label-float
  />

  <BaseListbox
    v-model="selectedFramework"
    label="Rounded listbox (default)"
    :items="frameworks"
    placeholder="Select a framework"
    shape="rounded"
    label-float
  />

  <BaseListbox
    v-model="selectedFramework"
    label="Curved listbox"
    :items="frameworks"
    placeholder="Select a framework"
    shape="curved"
    label-float
  />

  <BaseListbox
    v-model="selectedFramework"
    label="Full listbox"
    :items="frameworks"
    placeholder="Select a framework"
    shape="full"
    label-float
  />
</template>
