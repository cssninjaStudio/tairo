<script setup lang="ts">
const id = useId()
</script>

<template>
  <svg class="shrink-0" viewBox="0 0 500 500">
    <defs>
      <path :id="`${id}_a`" d="M228.4 181.2c59.6 0 107.8 48.3 107.8 107.8 0 59.6-48.3 107.8-107.8 107.8-59.6 0-107.8-48.3-107.8-107.8s48.2-107.8 107.8-107.8m0-103.2c-116.5 0-211 94.5-211 211s94.5 211 211 211 211-94.5 211-211c0-25.2-4.4-49.5-12.6-71.9-5.2-14.4-16.9-24.2-32-26.9-45.1-7.9-82-39.7-97.1-81.9-5.2-14.5-16.8-24.3-31.9-27-12.1-2.1-24.6-3.3-37.4-3.3z" />
    </defs>
    <use :xlink:href="`#${id}_a`" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd" />
    <clipPath :id="`${id}_b`">
      <use :xlink:href="`#${id}_a`" class="overflow-visible" />
    </clipPath>
    <path fill="currentColor" d="M17.4 78h422v422h-422z" :clip-path="`url(#${id}_b)`" />
    <defs>
      <path :id="`${id}_c`" d="M416.8 0c36.3 0 65.8 29.5 65.8 65.8s-29.5 65.8-65.8 65.8S351 102.1 351 65.8 380.5 0 416.8 0" />
    </defs>
    <use :xlink:href="`#${id}_c`" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd" />
    <clipPath :id="`${id}_d`">
      <use :xlink:href="`#${id}_c`" class="overflow-visible" />
    </clipPath>
    <path fill="currentColor" d="M351 0h131.6v131.6H351z" :clip-path="`url(#${id}_d)`" />
  </svg>
</template>
