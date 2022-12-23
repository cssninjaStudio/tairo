```vue {highlight: '7,14,30'}
<script setup lang="ts">
const hobbies = [
  {
    id: 1,
    name: 'Movies',
    text: 'Cinema & shows',
    icon: 'ph:sword-duotone',
  },
  //...
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
  <BaseListbox
    v-model="selectedHobby"
    label="Hobbies"
    :items="hobbies"
    :properties="{
      value: 'id',
      label: 'name',
      sublabel: 'text',
      icon: 'icon',
    }"
  />
</template>
```
