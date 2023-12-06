<template>
  <AddonInputPhone
    v-model="phone"
    v-model:country="country"
  />
</template>

<script lang="ts" setup>
const phone = ref('+1 555 555 5555')
const country = ref('US')
</script>
