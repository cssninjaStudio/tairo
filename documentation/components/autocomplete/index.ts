export const straight = `
<script setup lang="ts">
const frameworks = [
  {
    id: 1,
    name: 'Javascript',
  },
  ...
  {
    id: 5,
    name: 'Alpine.js',
  },
]

const selectedFramework = ref('')
</script>

<template>
  <BaseFormAutocomplete
    v-model="selectedFramework"
    :items="frameworks"
    shape="straight"
    placeholder="Select a framework"
    label="Framework"
  />
</template>
`

export const rounded = `
<script setup lang="ts">
const frameworks = [
  {
    id: 1,
    name: 'Javascript',
  },
  ...
  {
    id: 5,
    name: 'Alpine.js',
  },
]

const selectedFramework = ref('')
</script>

<template>
  <BaseFormAutocomplete
    v-model="selectedFramework"
    :items="frameworks"
    shape="rounded"
    placeholder="Select a framework"
    label="Framework"
  />
</template>
`

export const curved = `
<script setup lang="ts">
const frameworks = [
  {
    id: 1,
    name: 'Javascript',
  },
  ...
  {
    id: 5,
    name: 'Alpine.js',
  },
]

const selectedFramework = ref('')
</script>

<template>
  <BaseFormAutocomplete
    v-model="selectedFramework"
    :items="frameworks"
    shape="curved"
    placeholder="Select a framework"
    label="Framework"
  />
</template>
`

export const full = `
<script setup lang="ts">
const frameworks = [
  {
    id: 1,
    name: 'Javascript',
  },
  ...
  {
    id: 5,
    name: 'Alpine.js',
  },
]

const selectedFramework = ref('')
</script>

<template>
  <BaseFormAutocomplete
    v-model="selectedFramework"
    :items="frameworks"
    shape="full"
    placeholder="Select a framework"
    label="Framework"
  />
</template>
`

export const icon = `
<script setup lang="ts">
const frameworks = [
  {
    id: 1,
    name: 'Javascript',
  },
  ...
  {
    id: 5,
    name: 'Alpine.js',
  },
]

const selectedFramework = ref('')
</script>

<template>
  <BaseFormAutocomplete
    v-model="selectedFramework"
    :items="frameworks"
    icon="lucide:search"
    shape="full"
    placeholder="Select a framework"
    label="Framework"
  />
</template>
`

export const clearable = `
<script setup lang="ts">
const frameworks = [
  {
    id: 1,
    name: 'Javascript',
  },
  ...
  {
    id: 5,
    name: 'Alpine.js',
  },
]

const selectedFramework = ref('')
</script>

<template>
  <BaseFormAutocomplete
    v-model="selectedFramework"
    :items="frameworks"
    icon="lucide:search"
    shape="full"
    placeholder="Select a framework"
    label="Framework"
    clearable
  />
</template>
`

export const disabled = `
<script setup lang="ts">
const frameworks = [
  {
    id: 1,
    name: 'Javascript',
  },
  ...
  {
    id: 5,
    name: 'Alpine.js',
  },
]

const selectedFramework = ref('')
</script>

<template>
  <BaseFormAutocomplete
    v-model="selectedFramework"
    :items="frameworks"
    icon="lucide:search"
    shape="full"
    placeholder="Select a framework"
    label="Framework"
    disabled
  />
</template>
`

export const loading = `
<script setup lang="ts">
const frameworks = [
  {
    id: 1,
    name: 'Javascript',
  },
  ...
  {
    id: 5,
    name: 'Alpine.js',
  },
]

const selectedFramework = ref('')
</script>

<template>
  <BaseFormAutocomplete
    v-model="selectedFramework"
    :items="frameworks"
    icon="lucide:search"
    shape="full"
    placeholder="Select a framework"
    label="Framework"
    loading
  />
</template>
`

export const iconResult = `
<script setup lang="ts">
const companies = [
  {
    id: 1,
    name: 'Airbnb',
    text: 'Booking and travel',
    icon: 'logos:airbnb',
  },
  ...
  {
    id: 5,
    name: 'Figma',
    text: 'Design software',
    icon: 'logos:figma',
  },
]

const selectedCompany = ref('')
</script>

<template>
  <BaseFormAutocomplete
    v-model="selectedCompany"
    :items="companies"
    icon="ph:buildings"
    shape="rounded"
    placeholder="Select a company"
    label="Company"
    clearable
  />
</template>
`

export const mediaResult = `
<script setup lang="ts">
const people = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
    media: '/img/avatars/19.svg',
  },
  {
    id: 2,
    name: 'Aaron Splatter',
    text: 'Project Manager',
    media: '/img/avatars/16.svg',
  },
  {
    id: 3,
    name: 'Mike Miller',
    text: 'UI/UX Designer',
    media: '/img/avatars/3.svg',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    text: 'Mobile Developer',
    media: '/img/avatars/22.svg',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
    media: '/img/avatars/2.svg',
  },
]

const selectedPerson = ref('')
</script>

<template>
  <BaseFormAutocomplete
    v-model="selectedPerson"
    :items="people"
    icon="ph:users-three"
    placeholder="Search..."
    label="Assignee"
    clearable
  />
</template>
`

export const multiple = `
<script setup lang="ts">
const people = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
    media: '/img/avatars/19.svg',
  },
  {
    id: 2,
    name: 'Aaron Splatter',
    text: 'Project Manager',
    media: '/img/avatars/16.svg',
  },
  {
    id: 3,
    name: 'Mike Miller',
    text: 'UI/UX Designer',
    media: '/img/avatars/3.svg',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    text: 'Mobile Developer',
    media: '/img/avatars/22.svg',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
    media: '/img/avatars/2.svg',
  },
]

const selectedPeople = ref([people[0], people[1]])
</script>

<template>
  <BaseFormAutocomplete
    v-model="selectedPeople"
    :items="people"
    shape="rounded"
    icon="ph:users-three"
    placeholder="Search..."
    label="Assignee"
    multiple
  />
</template>
`
