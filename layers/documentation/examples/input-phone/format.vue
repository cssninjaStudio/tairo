<template>
  <AddonInputPhone
    v-model="phone"
    format="national"
    country="US"
  />
</template>

<script lang="ts" setup>
const phone = ref('+1 555 555 5555')
</script>
