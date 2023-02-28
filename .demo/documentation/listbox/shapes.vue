{highlight: '19,27,35,43'}

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
  />

<BaseListbox
    v-model="selectedFramework"
    label="Rounded listbox (default)"
    :items="frameworks"
    placeholder="Select a framework"
    shape="rounded"
  />

<BaseListbox
    v-model="selectedFramework"
    label="Curved listbox"
    :items="frameworks"
    placeholder="Select a framework"
    shape="curved"
  />

<BaseListbox
    v-model="selectedFramework"
    label="Full listbox"
    :items="frameworks"
    placeholder="Select a framework"
    shape="full"
  />
</template>
