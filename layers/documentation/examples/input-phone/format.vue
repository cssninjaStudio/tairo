<template>
  <div class="max-w-md">
    <AddonInputPhone
      v-model="phone"
      format="national"
      country="US"
    />
  </div>
</template>

<script lang="ts" setup>
const phone = ref('+1 555 555 5555')
</script>
