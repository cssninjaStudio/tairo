<script setup lang="ts">
import type { NuxtError } from '#app'

const error = new Error('An error has occured') as NuxtError
</script>

<template>
  <div>
    <TairoError :error />
  </div>
</template>
