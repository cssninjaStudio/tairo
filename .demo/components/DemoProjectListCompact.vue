<script setup lang="ts">
const projects = [
  {
    id: 0,
    name: 'Delivery App Project',
    image: '/img/icons/logos/fastpizza.svg',
    badge: '/img/stacks/illustrator.svg',
    updated: '30m ago',
    members: [
      {
        tooltip: 'Clarke Smith',
        src: '/img/avatars/3.svg',
      },
      {
        tooltip: 'Clarissa Gheller',
        src: '/img/avatars/5.svg',
      },
    ],
  },
  {
    id: 1,
    name: 'Health and Fitness Dashboard',
    image: '/img/icons/logos/slicer.svg',
    badge: '/img/stacks/reactjs.svg',
    updated: '30m ago',
    members: [
      {
        tooltip: 'Maya (You)',
        src: '/img/avatars/2.svg',
      },
      {
        tooltip: 'John Rowner',
        src: '/img/avatars/6.svg',
      },
      {
        tooltip: 'Maggie Pitts',
        src: '/img/avatars/9.svg',
      },
    ],
  },
  {
    id: 2,
    name: 'Learning Tracker Dashboard',
    image: '/img/icons/logos/metamovies.svg',
    badge: '/img/stacks/angular.svg',
    updated: '30m ago',
    members: [
      {
        tooltip: 'Alan Mariovski',
        src: '/img/avatars/11.svg',
      },
      {
        tooltip: 'Robert Mapa',
        src: '/img/avatars/7.svg',
      },
      {
        tooltip: 'Chris Welling',
        src: '/img/avatars/8.svg',
      },
      {
        tooltip: 'Ruth Raminov',
        src: '/img/avatars/19.svg',
      },
    ],
  },
  {
    id: 3,
    name: 'Marketing Dashboard',
    image: '/img/icons/logos/envato.svg',
    badge: '/img/stacks/js.svg',
    updated: '30m ago',
    members: [
      {
        tooltip: 'Maya (You)',
        src: '/img/avatars/2.svg',
      },
      {
        tooltip: 'Maggie Pitts',
        src: '/img/avatars/9.svg',
      },
    ],
  },
]
</script>

<template>
  <div class="space-y-6">
    <!-- Projects -->
    <div
      v-for="project in projects"
      :key="project.id"
      class="flex items-center gap-4"
    >
      <BaseAvatar
        :src="project.image"
        :badge-src="project.badge"
        class="shrink-0"
      />
      <div>
        <BaseHeading
          as="h4"
          size="md"
          weight="light"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>{{ project.name }}</span>
        </BaseHeading>
        <BaseParagraph size="xs">
          <span class="text-muted-400">Last updated {{ project.updated }}</span>
        </BaseParagraph>
      </div>
      <div class="ms-auto hidden md:block">
        <BaseAvatarGroup :avatars="project.members" size="sm" :limit="3" />
      </div>
    </div>
  </div>
</template>
