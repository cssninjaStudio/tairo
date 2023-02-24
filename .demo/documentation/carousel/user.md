```vue
<script setup lang="ts">
const team = [
  {
    id: 0,
    avatar: '/img/avatars/3.svg',
    badge:
      '/img/icons/flags/united-states-of-america.svg',
    name: 'Daniel Clarke',
    role: 'Frontend developer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    skills: [
      {
        name: 'Vue.js',
        logo: '/img/logos/stacks/vue.svg',
      },
      {
        name: 'React.js',
        logo: '/img/logos/stacks/react.svg',
      },
      {
        name: 'Sass',
        logo: '/img/logos/stacks/sass.svg',
      },
    ],
    to: '#/',
  },
  //...
  {
    id: 5,
    avatar: '/img/avatars/14.svg',
    badge:
      '/img/icons/flags/united-states-of-america.svg',
    name: 'Raymond Perez',
    role: 'Frontend developer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    skills: [
      {
        name: 'Vue.js',
        logo: '/img/logos/stacks/vue.svg',
      },
      {
        name: 'React.js',
        logo: '/img/logos/stacks/react.svg',
      },
      {
        name: 'Typescript',
        logo: '/img/logos/stacks/typescript.svg',
      },
    ],
    to: '#/',
  },
]
</script>

<template>
  <CarouselTeam
    :slides-to-show="3"
    :slides="team"
  />
</template>
```
