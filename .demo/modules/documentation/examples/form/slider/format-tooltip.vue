<script setup lang="ts">
import '~/assets/css/slider.css'
import Slider from '@vueform/slider'
const value = ref(20)
const format = (value: any) => `${value}%`
</script>

<template>
  <Slider
    v-model="value"
    :format="format"
    class="rounded-tooltip"
  />
</template>
