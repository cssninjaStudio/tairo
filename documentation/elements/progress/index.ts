export const bar = `
<script setup lang="ts">
const progress = ref(25)
</script>

<template>
  <BaseProgress size="sm" :value="progress" color="primary" />
</template>
`

export const circle = `
<script setup lang="ts">
const progressCircle = ref(25)
</script>

<template>
  <BaseProgressCircle
    :size="45"
    :value="progressCircle"
    class="text-primary-500"
  />
</template>
`

export const sizes = `
<template>
  <BaseProgress size="xs" :value="78" color="primary" />
  <BaseProgress size="sm" :value="78" color="primary" />
  <BaseProgress size="md" :value="78" color="primary" />
  <BaseProgress size="lg" :value="78" color="primary" />
  <BaseProgress size="xl" :value="78" color="primary" />
</template>
`

export const colors = `
<template>
  <BaseProgress size="sm" :value="78" color="primary" />
  <BaseProgress size="sm" :value="78" color="success" />
  <BaseProgress size="sm" :value="78" color="info" />
  <BaseProgress size="sm" :value="78" color="warning" />
  <BaseProgress size="sm" :value="78" color="danger" />
</template>
`

export const indeterminate = `
<template>
  <BaseProgress
    size="sm"
    :value="78"
    color="primary"
    indeterminate
  />
  <BaseProgress
    size="sm"
    :value="78"
    color="success"
    indeterminate
  />
  <BaseProgress
    size="sm"
    :value="78"
    color="info"
    indeterminate
  />
  <BaseProgress
    size="sm"
    :value="78"
    color="warning"
    indeterminate
  />
  <BaseProgress
    size="sm"
    :value="78"
    color="danger"
    indeterminate
  />
</template>
`
