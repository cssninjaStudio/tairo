<script lang="ts" setup>
const phone = ref('+33612345678')
const country = ref('FR')
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <LazyAddonInputPhone
      v-model="phone"
      v-model:country="country"
      rounded="none"
    />

    <LazyAddonInputPhone
      v-model="phone"
      v-model:country="country"
      rounded="sm"
    />

    <LazyAddonInputPhone
      v-model="phone"
      v-model:country="country"
      rounded="md"
    />

    <LazyAddonInputPhone
      v-model="phone"
      v-model:country="country"
      rounded="lg"
    />

    <LazyAddonInputPhone
      v-model="phone"
      v-model:country="country"
      rounded="full"
    />
  </div>
</template>
