<script setup lang="ts">
import '~/assets/css/slider.css'
import Slider from '@vueform/slider'
const value = ref(20)
</script>

<template>
  <Slider v-model="value" class="rounded-tooltip" />
</template>
