<template>
  <div class="grid gap-4 md:grid-cols-2">
    <div class="px-4 py-6">
      <Slider v-model="info" class="slider-info circle-tooltip" />
    </div>

    <div class="px-4 py-6">
      <Slider v-model="success" class="slider-success circle-tooltip" />
    </div>

    <div class="px-4 py-6">
      <Slider v-model="warning" class="slider-warning circle-tooltip" />
    </div>

    <div class="px-4 py-6">
      <Slider v-model="danger" class="slider-danger circle-tooltip" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Slider from '@vueform/slider'
import '~/assets/css/slider.css'
const info = ref(38)
const success = ref(84)
const warning = ref(53)
const danger = ref(67)
</script>
