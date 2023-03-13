<script setup lang="ts">
import Slider from '@vueform/slider'
const multiple = ref([16, 84])
</script>

<template>
  <Slider
    v-model="multiple"
    class="circle-tooltip"
  />
</template>
