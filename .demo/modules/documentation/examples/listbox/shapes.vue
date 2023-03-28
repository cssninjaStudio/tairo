<template>
  <div class="grid md:grid-cols-2 md:max-w-lg gap-6">
    <BaseListbox
      v-model="value"
      label="Straight listbox"
      :items="frameworks"
      placeholder="Select a framework"
      shape="straight"
    />

    <BaseListbox
      v-model="value"
      label="Rounded listbox (default)"
      :items="frameworks"
      placeholder="Select a framework"
      shape="rounded"
    />

    <BaseListbox
      v-model="value"
      label="Curved listbox"
      :items="frameworks"
      placeholder="Select a framework"
      shape="curved"
    />

    <BaseListbox
      v-model="value"
      label="Full listbox"
      :items="frameworks"
      placeholder="Select a framework"
      shape="full"
    />
  </div>
</template>

<script setup lang="ts">
const value = ref()

const frameworks = ['Javascript', 'Vue.js', 'React.js', 'Angular', 'Alpine.js']
</script>
