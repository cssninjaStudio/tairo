export const straight = `
<script setup lang="ts">
const inputStraight = ref('')
</script>

<template>
  <BaseInput
    v-model="inputStraight"
    shape="straight"
    label="Short description"
    placeholder="Enter a few words..."
  />
</template>
`

export const rounded = `
<script setup lang="ts">
const inputRounded = ref('')
</script>

<template>
  <BaseInput
    v-model="inputRounded"
    shape="rounded"
    label="Short description"
    placeholder="Enter a few words..."
  />
</template>
`

export const curved = `
<script setup lang="ts">
const inputCurved = ref('')
</script>

<template>
  <BaseInput
    v-model="inputCurved"
    shape="curved"
    label="Short description"
    placeholder="Enter a few words..."
  />
</template>
`

export const full = `
<script setup lang="ts">
const inputFull = ref('')
</script>

<template>
  <BaseInput
    v-model="inputFull"
    shape="full"
    label="Short description"
    placeholder="Enter a few words..."
  />
</template>
`

export const icon = `
<template>
  <BaseInput
    shape="straight"
    label="Search"
    placeholder="Enter search terms..."
    icon="lucide:search"
  />
</template>
`

export const focus = `
<template>
  <BaseInput
    v-model="inputRounded"
    shape="rounded"
    label="Email Address"
    placeholder="Enter your email..."
    icon="lucide:mail"
    color-focus
  />
</template>
`

export const loading = `
<template>
  <BaseInput
    shape="rounded"
    label="Email Address"
    placeholder="Enter your email..."
    icon="lucide:mail"
    loading
  />
</template>
`

export const disabled = `
<template>
  <BaseInput
    shape="rounded"
    label="Email Address"
    placeholder="Enter your email..."
    icon="lucide:mail"
    disabled
  />
</template>
`

export const invalid = `
<template>
<BaseInput
  shape="rounded"
  label="Email Address"
  placeholder="Enter your email..."
  icon="lucide:mail"
  invalid
/>
</template>
`
