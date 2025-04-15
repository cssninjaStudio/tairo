<script lang="ts" setup>
const phone = ref('+33612345678')
const country = ref('FR')
</script>

<template>
  <div class="flex flex-wrap gap-4 sm:flex-nowrap">
    <LazyAddonInputPhone
      v-model="phone"
      v-model:country="country"
      size="sm"
    />

    <LazyAddonInputPhone
      v-model="phone"
      v-model:country="country"
      size="md"
    />

    <LazyAddonInputPhone
      v-model="phone"
      v-model:country="country"
      size="lg"
    />
  </div>
</template>
