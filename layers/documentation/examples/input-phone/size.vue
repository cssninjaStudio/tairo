<template>
  <div class="flex flex-wrap gap-4 sm:flex-nowrap">
    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      size="sm"
      label="Small"
    />

    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      size="md"
      label="Medium"
    />

    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      size="lg"
      label="Large"
    />
  </div>
</template>

<script lang="ts" setup>
const phone = ref('+33612345678')
const country = ref('FR')
</script>
