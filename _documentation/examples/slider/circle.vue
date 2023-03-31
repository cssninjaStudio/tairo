<template>
  <div class="flex flex-col gap-6 md:flex-row md:items-end mt-6">
    <div class="w-full max-w-sm space-y-4 px-4">
      <Slider v-model="value" classes="circle-tooltip" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Slider from '@vueform/slider'
// import '~/assets/css/slider.css'
const value = ref(20)
</script>
