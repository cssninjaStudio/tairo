export const shapes = `
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

const selectedFramework = ref(frameworks[0])
</script>

<template>
  <BaseComboBox
    v-model="selectedFramework"
    label="Framework"
    :items="frameworks"
    shape="straight"
  />

  <BaseComboBox
    v-model="selectedFramework"
    label="Framework"
    :items="frameworks"
    shape="rounded"
  />

  <BaseComboBox
    v-model="selectedFramework"
    label="Framework"
    :items="frameworks"
    shape="curved"
  />

  <BaseComboBox
    v-model="selectedFramework"
    label="Framework"
    :items="frameworks"
    shape="full"
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

const selectedFramework = ref(frameworks[0])
</script>

<template>
  <BaseComboBox
    v-model="selectedFramework"
    label="Framework"
    :items="frameworks"
    shape="rounded"
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

const selectedFramework = ref(frameworks[0])
</script>

<template>
  <BaseComboBox
    v-model="selectedFramework"
    label="Framework"
    :items="frameworks"
    shape="rounded"
    loading
  />
</template>
`

export const sublabels = `
<script setup lang="ts">
const peopleNames = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
  },
  ...
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
  },
]

const selectedPersonName = ref(peopleNames[0])
</script>

<template>
  <BaseComboBox
    v-model="selectedPersonName"
    label="Assignee"
    :items="peopleNames"
  />
</template>
`

export const icon = `
<script setup lang="ts">
const hobbies = [
  {
    id: 1,
    name: 'Movies',
    text: 'Cinema & shows',
    icon: 'ph:sword-duotone',
  },
  ...
  {
    id: 5,
    name: 'Karaoke',
    text: 'singing with friends',
    icon: 'ph:microphone-stage-duotone',
  },
]

const selectedHobby = ref(hobbies[0])
</script>

<template>
  <BaseComboBox
    v-model="selectedHobby"
    label="Assignee"
    :items="hobbies"
  />
</template>
`

export const media = `
<script setup lang="ts">
const people = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
    media: '/img/avatars/19.svg',
  },
  ...
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
    media: '/img/avatars/2.svg',
  },
]

const selectedPerson = ref(people[2])
</script>

<template>
  <BaseComboBox
    v-model="selectedPerson"
    label="Assignee"
    :items="people"
  />
</template>
`
