<template>
  <AddonInputPhone
    v-model="phone"
    label="Phone number"
    disabled
  />
</template>

<script lang="ts" setup>
const phone = ref('+1 555 555 5555')
</script>
