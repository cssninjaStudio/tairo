export const straight = `
<script setup lang="ts">
const selectStraight = ref('')
</script>

<template>
  <BaseFormSelect
    v-model="selectStraight"
    shape="straight"
    label="Select a hero"
    >
    <option value="">Select a hero</option>
    <option value="Superman">Superman</option>
    <option value="Batman">Batman</option>
    <option value="Iron man">Iron man</option>
    <option value="Magneto">Magneto</option>
    <option value="Cyclops">Cyclops</option>
  </BaseFormSelect>
</template>
`

export const rounded = `
<script setup lang="ts">
const selectRounded = ref('')
</script>

<template>
  <BaseFormSelect
    v-model="selectRounded"
    shape="rounded"
    label="Select a hero"
    >
    <option value="">Select a hero</option>
    <option value="Superman">Superman</option>
    <option value="Batman">Batman</option>
    <option value="Iron man">Iron man</option>
    <option value="Magneto">Magneto</option>
    <option value="Cyclops">Cyclops</option>
  </BaseFormSelect>
</template>
`

export const curved = `
<script setup lang="ts">
const selectCurved = ref('')
</script>

<template>
  <BaseFormSelect
    v-model="selectCurved"
    shape="curved"
    label="Select a hero"
    >
    <option value="">Select a hero</option>
    <option value="Superman">Superman</option>
    <option value="Batman">Batman</option>
    <option value="Iron man">Iron man</option>
    <option value="Magneto">Magneto</option>
    <option value="Cyclops">Cyclops</option>
  </BaseFormSelect>
</template>
`

export const full = `
<script setup lang="ts">
const selectFull = ref('')
</script>

<template>
  <BaseFormSelect
    v-model="selectFull"
    shape="full"
    label="Select a hero"
    >
    <option value="">Select a hero</option>
    <option value="Superman">Superman</option>
    <option value="Batman">Batman</option>
    <option value="Iron man">Iron man</option>
    <option value="Magneto">Magneto</option>
    <option value="Cyclops">Cyclops</option>
  </BaseFormSelect>
</template>
`

export const icon = `
<template>
  <BaseFormSelect
    shape="rounded"
    label="Select a hero"
    icon="icon-park-outline:muscle"
    >
    <option value="">Select a hero</option>
    <option value="Superman">Superman</option>
    <option value="Batman">Batman</option>
    <option value="Iron man">Iron man</option>
    <option value="Magneto">Magneto</option>
    <option value="Cyclops">Cyclops</option>
  </BaseFormSelect>
</template>
`

export const group = `
<template>
  <BaseFormSelect shape="rounded" label="Select a hero">
    <option value="">Select a hero</option>
    <optgroup label="Marvel">
      <option value="Iron man">Iron man</option>
      <option value="Magneto">Magneto</option>
      <option value="Cyclops">Cyclops</option>
    </optgroup>
    <optgroup label="DC Comics">
      <option value="Superman">Superman</option>
      <option value="Batman">Batman</option>
    </optgroup>
  </BaseFormSelect>
</template>
`

export const loading = `
<template>
  <BaseFormSelect shape="rounded" label="Select a hero" loading>
    <option value="">Select a hero</option>
    <option value="Superman">Superman</option>
    <option value="Batman">Batman</option>
    <option value="Iron man">Iron man</option>
    <option value="Magneto">Magneto</option>
    <option value="Cyclops">Cyclops</option>
  </BaseFormSelect>
</template>
`

export const invalid = `
<template>
  <BaseFormSelect shape="curved" label="Select a hero" invalid>
    <option value="">Select a hero</option>
    <option value="Superman">Superman</option>
    <option value="Batman">Batman</option>
    <option value="Iron man">Iron man</option>
    <option value="Magneto">Magneto</option>
    <option value="Cyclops">Cyclops</option>
  </BaseFormSelect>
</template>
`
