export const bar = `
<script setup lang="ts">
const progress = ref(25)
</script>

<template>
  <BaseProgress title="Upload progress" size="sm" :value="progress" color="primary" />
</template>
`

export const circle = `
<script setup lang="ts">
const progressCircle = ref(25)
</script>

<template>
  <BaseProgressCircle
    title="Upload progress"
    :size="45"
    :value="progressCircle"
    class="text-primary-500"
  />
</template>
`

export const sizes = `
<template>
  <BaseProgress aria-label="Upload progress" size="xs" :value="78" color="primary" />
  <BaseProgress aria-label="Upload progress" size="sm" :value="78" color="primary" />
  <BaseProgress aria-label="Upload progress" size="md" :value="78" color="primary" />
  <BaseProgress aria-label="Upload progress" size="lg" :value="78" color="primary" />
  <BaseProgress aria-label="Upload progress" size="xl" :value="78" color="primary" />
</template>
`

export const colors = `
<template>
  <BaseProgress aria-label="Upload progress" size="sm" :value="78" color="primary" />
  <BaseProgress aria-label="Upload progress" size="sm" :value="78" color="success" />
  <BaseProgress aria-label="Upload progress" size="sm" :value="78" color="info" />
  <BaseProgress aria-label="Upload progress" size="sm" :value="78" color="warning" />
  <BaseProgress aria-label="Upload progress" size="sm" :value="78" color="danger" />
</template>
`

export const indeterminate = `
<template>
  <BaseProgress
    aria-label="Upload progress"
    size="sm"
    :value="78"
    color="primary"
    indeterminate
  />
  <BaseProgress
    aria-label="Upload progress"
    size="sm"
    :value="78"
    color="success"
    indeterminate
  />
  <BaseProgress
    aria-label="Upload progress"
    size="sm"
    :value="78"
    color="info"
    indeterminate
  />
  <BaseProgress
    aria-label="Upload progress"
    size="sm"
    :value="78"
    color="warning"
    indeterminate
  />
  <BaseProgress
    aria-label="Upload progress"
    size="sm"
    :value="78"
    color="danger"
    indeterminate
  />
</template>
`
