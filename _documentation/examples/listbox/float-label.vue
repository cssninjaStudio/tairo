<template>
  <div class="mt-6 grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseListbox
      v-model="value"
      label="Straight listbox"
      :items="frameworks"
      placeholder="Select a framework"
      shape="straight"
      label-float
    />

    <BaseListbox
      v-model="value"
      label="Rounded listbox (default)"
      :items="frameworks"
      placeholder="Select a framework"
      shape="rounded"
      label-float
    />

    <BaseListbox
      v-model="value"
      label="Curved listbox"
      :items="frameworks"
      placeholder="Select a framework"
      shape="curved"
      label-float
    />

    <BaseListbox
      v-model="value"
      label="Full listbox"
      :items="frameworks"
      placeholder="Select a framework"
      shape="full"
      label-float
    />
  </div>
</template>

<script setup lang="ts">
const value = ref()

const frameworks = ['Javascript', 'Vue.js', 'React.js', 'Angular', 'Alpine.js']
</script>
