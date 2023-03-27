<script setup lang="ts">
const radioSelected = ref('option_1')
</script>

<template>
  <BaseRadio id="demo-info-1" v-model="radioSelected" name="demo_info" label="Option 1" value="option_1" color="info" />

  <BaseRadio id="demo-info-2" v-model="radioSelected" name="demo_info" label="Option 2" value="option_2" color="info" />

  <BaseRadio id="demo-info-3" v-model="radioSelected" name="demo_info" label="Option 3" value="option_3" color="info" />
</template>
