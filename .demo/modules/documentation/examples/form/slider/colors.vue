<script setup lang="ts">
import '~/assets/css/slider.css'
import Slider from '@vueform/slider'
const info = ref(38)
const success = ref(84)
const warning = ref(53)
const danger = ref(67)
</script>

<template>
  <div class="px-4 py-6">
    <Slider
      v-model="info"
      class="slider-info circle-tooltip"
    />
  </div>

  <div class="px-4 py-6">
    <Slider
      v-model="success"
      class="slider-success circle-tooltip"
    />
  </div>

  <div class="px-4 py-6">
    <Slider
      v-model="warning"
      class="slider-warning circle-tooltip"
    />
  </div>

  <div class="px-4 py-6">
    <Slider
      v-model="danger"
      class="slider-danger circle-tooltip"
    />
  </div>
</template>
