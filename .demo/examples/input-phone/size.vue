<script lang="ts" setup>
const phone = ref('+33612345678')
const country = ref('FR')
</script>

<template>
  <div class="flex flex-wrap gap-4 sm:flex-nowrap">
    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      size="sm"
    />

    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      size="md"
    />

    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      size="lg"
    />
  </div>
</template>
