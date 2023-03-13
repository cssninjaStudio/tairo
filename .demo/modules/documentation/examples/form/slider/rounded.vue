<script setup lang="ts">
import Slider from '@vueform/slider'
const value = ref(20)
</script>

<template>
  <Slider
    v-model="value"
    class="rounded-tooltip"
  />
</template>
