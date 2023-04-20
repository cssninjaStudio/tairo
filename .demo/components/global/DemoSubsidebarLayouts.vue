<script setup lang="ts">
const navigation = [
  {
    name: 'Lists',
    children: [
      {
        name: 'List view V1',
        icon: 'ph:list-bullets',
        to: '/layouts',
        exact: true,
      },
      {
        name: 'List view V2',
        icon: 'ph:list-bullets',
        to: '/layouts/list-view-2',
      },
      {
        name: 'List view V3',
        icon: 'ph:list-bullets',
        to: '/layouts/list-view-3',
      },
      {
        name: 'List view V4',
        icon: 'ph:list-bullets',
        to: '/layouts/list-view-4',
      },
    ],
  },
  {
    name: 'Flex lists',
    children: [
      {
        name: 'Flex list V1',
        icon: 'ph:list-checks',
        to: '/layouts/flex-list-1',
      },
      {
        name: 'Flex list V2',
        icon: 'ph:list-checks',
        to: '/layouts/flex-list-2',
      },
      {
        name: 'Flex list V3',
        icon: 'ph:list-checks',
        to: '/layouts/flex-list-3',
      },
    ],
  },
  {
    name: 'Table lists',
    children: [
      {
        name: 'Table list V1',
        icon: 'ph:table-duotone',
        to: '/layouts/table-list-1',
      },
      {
        name: 'Table list V2',
        icon: 'ph:table-duotone',
        to: '/layouts/table-list-2',
      },
      {
        name: 'Table list V3',
        icon: 'ph:table-duotone',
        to: '/layouts/table-list-3',
      },
    ],
  },
  {
    name: 'Form layouts',
    children: [
      {
        name: 'Company',
        icon: 'ph:article-duotone',
        to: '/layouts/form-1',
      },
      {
        name: 'Doctor',
        icon: 'ph:article-duotone',
        to: '/layouts/form-2',
      },
      {
        name: 'Checkout',
        icon: 'ph:article-duotone',
        to: '/layouts/form-3',
      },
      {
        name: 'Event',
        icon: 'ph:article-duotone',
        to: '/layouts/form-4',
      },
      {
        name: 'Password gen',
        icon: 'ph:article-duotone',
        to: '/layouts/form-5',
      },
      {
        name: 'Meeting',
        icon: 'ph:article-duotone',
        to: '/layouts/form-6',
      },
    ],
  },
  {
    name: 'Placeloads',
    children: [
      {
        name: 'Placeload V1',
        icon: 'ph:timer-duotone',
        to: '/layouts/placeload-1',
      },
      {
        name: 'Placeload V2',
        icon: 'ph:timer-duotone',
        to: '/layouts/placeload-2',
      },
      {
        name: 'Placeload V3',
        icon: 'ph:timer-duotone',
        to: '/layouts/placeload-3',
      },
      {
        name: 'Placeload V4',
        icon: 'ph:timer-duotone',
        to: '/layouts/placeload-4',
      },
    ],
  },
  {
    name: 'Card grids',
    children: [
      {
        name: 'Card grid V1',
        icon: 'ph:circles-four-duotone',
        to: '/layouts/card-grid-1',
      },
      {
        name: 'Card grid V2',
        icon: 'ph:circles-four-duotone',
        to: '/layouts/card-grid-2',
      },
      {
        name: 'Card grid V3',
        icon: 'ph:circles-four-duotone',
        to: '/layouts/card-grid-3',
      },
      {
        name: 'Card grid V4',
        icon: 'ph:circles-four-duotone',
        to: '/layouts/card-grid-4',
      },
    ],
  },
  {
    name: 'Tile grids',
    children: [
      {
        name: 'Tile grid V1',
        icon: 'ph:selection-foreground-duotone',
        to: '/layouts/tile-grid-1',
      },
      {
        name: 'Tile grid V2',
        icon: 'ph:selection-foreground-duotone',
        to: '/layouts/tile-grid-2',
      },
      {
        name: 'Tile grid V3',
        icon: 'ph:selection-foreground-duotone',
        to: '/layouts/tile-grid-3',
      },
    ],
  },
  {
    name: 'User grids',
    children: [
      {
        name: 'User grid V1',
        icon: 'ph:users-three-duotone',
        to: '/layouts/user-grid-1',
      },
      {
        name: 'User grid V2',
        icon: 'ph:users-three-duotone',
        to: '/layouts/user-grid-2',
      },
      {
        name: 'User grid V3',
        icon: 'ph:users-three-duotone',
        to: '/layouts/user-grid-3',
      },
      {
        name: 'User grid V4',
        icon: 'ph:users-three-duotone',
        to: '/layouts/user-grid-4',
      },
    ],
  },
  {
    divider: true,
  },
  {
    name: 'Projects',
    children: [
      {
        name: 'Projects V1',
        icon: 'ph:leaf-duotone',
        to: '/layouts/projects',
        exact: true,
      },
      {
        name: 'Projects V2',
        icon: 'ph:leaf-duotone',
        to: '/layouts/projects/project-list-2',
      },
      {
        name: 'Projects V3',
        icon: 'ph:leaf-duotone',
        to: '/layouts/projects/project-list-3',
      },
      {
        name: 'Project details',
        icon: 'ph:note-duotone',
        to: '/layouts/projects/details',
      },
      {
        name: 'Kanban board',
        icon: 'ph:squares-four-duotone',
        to: '/layouts/projects/board',
      },
    ],
  },
  {
    name: 'Auth',
    children: [
      {
        name: 'Login',
        icon: 'ph:lock-duotone',
        to: '/auth',
        exact: true,
      },
      {
        name: 'Login V1',
        icon: 'ph:lock-duotone',
        to: '/auth/login-1',
      },
      {
        name: 'Login V2',
        icon: 'ph:lock-duotone',
        to: '/auth/login-2',
      },
      {
        name: 'Login V3',
        icon: 'ph:lock-duotone',
        to: '/auth/login-3',
      },
      {
        name: 'Signup V1',
        icon: 'ph:magic-wand-duotone',
        to: '/auth/signup-1',
      },
      {
        name: 'Signup V2',
        icon: 'ph:magic-wand-duotone',
        to: '/auth/signup-2',
      },
      {
        name: 'Signup V3',
        icon: 'ph:magic-wand-duotone',
        to: '/auth/signup-3',
      },
      {
        name: 'Forgot password',
        icon: 'ph:fingerprint-duotone',
        to: '/auth/recover',
      },
    ],
  },
  {
    name: 'Subpages',
    children: [
      {
        name: 'Profile',
        icon: 'ph:lock-duotone',
        to: '/layouts/profile',
        exact: true,
      },
      {
        name: 'Edit profile',
        icon: 'ph:pencil-duotone',
        to: '/layouts/profile-edit',
      },
      {
        name: 'Notifications',
        icon: 'ph:notification-duotone',
        to: '/layouts/profile-notifications',
      },
      {
        name: 'Settings',
        icon: 'ph:gear-duotone',
        to: '/layouts/profile-settings',
      },
      {
        name: 'Search results',
        icon: 'ph:magnifying-glass-duotone',
        to: '/layouts/search-results',
      },
      {
        name: 'Empty search',
        icon: 'ph:magnifying-glass-duotone',
        to: '/layouts/search-empty',
      },
      {
        name: 'SaaS billing',
        icon: 'ph:credit-card-duotone',
        to: '/layouts/utility-billing',
      },
      {
        name: 'Action page v1',
        icon: 'ph:lightning-duotone',
        to: '/layouts/utility-action-1',
      },
      {
        name: 'Action page v2',
        icon: 'ph:lightning-duotone',
        to: '/layouts/utility-action-2',
      },
    ],
  },
  {
    name: 'Utility',
    children: [
      {
        name: 'Confirm account',
        icon: 'ph:square-logo-duotone',
        to: '/layouts/utility-confirm',
      },
      {
        name: 'Promotion',
        icon: 'ph:circle-wavy-check-duotone',
        to: '/layouts/utility-promotion',
      },
      {
        name: 'Invoice',
        icon: 'ph:note-duotone',
        to: '/layouts/utility-invoice',
      },
      {
        name: 'Service status',
        icon: 'ph:notification-duotone',
        to: '/layouts/utility-status',
      },
      {
        name: 'System error',
        icon: 'ph:skull-duotone',
        to: '/layouts/utility-error',
      },
    ],
  },
  {
    name: 'Onboarding',
    children: [
      {
        name: '2 Factor',
        icon: 'ph:fingerprint-duotone',
        to: '/layouts/onboarding-1',
      },
      {
        name: 'Plan boarding',
        icon: 'ph:coins-duotone',
        to: '/layouts/onboarding-2',
      },
      {
        name: 'Role selection',
        icon: 'ph:suitcase-duotone',
        to: '/layouts/onboarding-3',
      },
    ],
  },
]
</script>

<template>
  <TairoSubsidebar>
    <template #header>
      <TairoSubsidebarHeader />
    </template>

    <TairoSubsidebarMenu :navigation="navigation" />
  </TairoSubsidebar>
</template>
