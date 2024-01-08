<template>
  <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <BaseInputFile
      v-model="first"
      rounded="none"
      label="Rounded: none"
    />

    <BaseInputFile
      v-model="second"
      rounded="sm"
      label="Rounded: sm"
    />

    <BaseInputFile
      v-model="third"
      rounded="md"
      label="Rounded: md"
    />

    <BaseInputFile
      v-model="fourth"
      rounded="lg"
      label="Rounded: lg"
    />

    <BaseInputFile
      v-model="fifth"
      rounded="full"
      label="Rounded: full"
    />
  </div>
</template>

<script setup lang="ts">
const first = ref<FileList | null>(null)
const second = ref<FileList | null>(null)
const third = ref<FileList | null>(null)
const fourth = ref<FileList | null>(null)
const fifth = ref<FileList | null>(null)
</script>
