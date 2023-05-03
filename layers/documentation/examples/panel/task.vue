<template>
  <div>
    <BaseButton @click="open('task', { task: task })">Open Panel</BaseButton>
  </div>
</template>

<script setup lang="ts">
const { open } = usePanels()

const task = {
  id: 0,
  name: 'Create a new figma design for the new homepage elements',
  description:
    'We should have a collection of the most basic UI elements like buttons, badges and form elements. Then we should use these to create reusable section blocks that we can also use in other pages of the project.',
  completion: 100,
  status: 5,
  created: '2 days ago',
  assignee: {
    id: 27,
    src: '/img/avatars/24.svg',
    badge: '/img/stacks/illustrator.svg',
    role: 'UI/UX Designer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
    tooltip: 'Carmen E.',
    text: 'CE',
  },
  files: [
    {
      id: 0,
      name: 'company-ux-guide.pdf',
      icon: '/img/icons/files/pdf.svg',
      size: '4.7MB',
      version: '1.5.2',
      uploaded: '2 weeks ago',
      author: {
        name: 'Hermann M.',
        picture: '/img/avatars/16.svg',
      },
    },
    {
      id: 1,
      name: 'project_sketches.ai',
      icon: '/img/icons/files/ai.svg',
      size: '8.9MB',
      version: '1.1.3',
      uploaded: 'a week ago',
      author: {
        name: 'Clarissa M.',
        picture: '/img/avatars/5.svg',
      },
    },
  ],
  checklist: [
    {
      text: 'Create a set of button elements',
      done: true,
    },
    {
      text: 'Create a set of badge elements',
      done: true,
    },
    {
      text: 'Create a set of input elements',
      done: true,
    },
    {
      text: 'Create a set of checkbox elements',
      done: true,
    },
    {
      text: 'Create a set of card elements',
      done: true,
    },
  ],
  comments: [
    {
      text: 'I think buttons corners should be a little more rounded.',
      author: {
        name: 'Marjory L.',
        picture: '/img/avatars/12.svg',
        posted: '2 days ago',
      },
    },
    {
      text: 'Are you planning to add this as a global setting in the configuration file?',
      author: {
        name: 'Kendra W.',
        picture: '/img/avatars/10.svg',
        posted: '2 days ago',
      },
    },
    {
      text: 'Not sure about it yet. Still need to check this out with the engineering team',
      author: {
        name: 'Marjory L.',
        picture: '/img/avatars/12.svg',
        posted: '2 days ago',
      },
    },
  ],
}
</script>
