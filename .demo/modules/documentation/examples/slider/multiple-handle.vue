<script setup lang="ts">
import '~/assets/css/slider.css'
import Slider from '@vueform/slider'
const multiple = ref([16, 84])
</script>

<template>
  <Slider v-model="multiple" class="circle-tooltip" />
</template>
