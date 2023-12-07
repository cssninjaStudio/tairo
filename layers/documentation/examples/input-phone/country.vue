<template>
  <div class="max-w-md">
    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
    />
  </div>
</template>

<script lang="ts" setup>
const phone = ref('+1 555 555 5555')
const country = ref('US')
</script>
