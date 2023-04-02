<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseInputFile v-model="first" shape="straight" label="Straight input" />

    <BaseInputFile v-model="second" shape="rounded" label="Rounded input" />

    <BaseInputFile v-model="third" shape="curved" label="Curved input" />

    <BaseInputFile v-model="fourth" shape="full" label="Full input" />
  </div>
</template>

<script setup lang="ts">
const first = ref<FileList | null>(null)
const second = ref<FileList | null>(null)
const third = ref<FileList | null>(null)
const fourth = ref<FileList | null>(null)
</script>
