<template>
  <div class="flex max-w-3xl flex-wrap items-end gap-3">
    <div class="flex-1">
      <BaseListbox
        v-model="value"
        label="Rounded: md"
        size="sm"
        :items="frameworks"
        placeholder="Select a framework"
        rounded="md"
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        label="Rounded: md"
        size="md"
        :items="frameworks"
        placeholder="Select a framework"
        rounded="md"
      />
    </div>

    <div class="flex-1">
      <BaseListbox
        v-model="value"
        label="Rounded: md"
        size="lg"
        :items="frameworks"
        placeholder="Select a framework"
        rounded="md"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref()

const frameworks = ['Javascript', 'Vue.js', 'React.js', 'Angular', 'Alpine.js']
</script>
