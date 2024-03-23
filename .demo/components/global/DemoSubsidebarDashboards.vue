<script setup lang="ts">
const navigation = [
  {
    name: 'Personal',
    children: [
      {
        name: 'Personal V1',
        icon: 'ph:coffee-duotone',
        to: '/dashboards',
        exact: true,
      },
      {
        name: 'Personal V2',
        icon: 'ph:chart-pie-slice-duotone',
        to: '/dashboards/personal-2',
      },
      {
        name: 'Personal 4',
        icon: 'ph:cactus-duotone',
        to: '/dashboards/personal-3',
      },
      {
        name: 'Personal balance',
        icon: 'ph:money-duotone',
        to: '/dashboards/balance',
      },
    ],
  },
  {
    name: 'Finance',
    children: [
      {
        name: 'Analytics dashboard',
        icon: 'ph:gauge-duotone',
        to: '/dashboards/analytics',
      },
      {
        name: 'Overview dashboard',
        icon: 'ph:projector-screen-chart-duotone',
        to: '/dashboards/overview',
      },
      {
        name: 'Quickview dashboard',
        icon: 'ph:app-window-duotone',
        to: '/dashboards/quickview',
      },
      {
        name: 'Stock dashboard',
        icon: 'ph:coin-duotone',
        to: '/dashboards/stocks',
      },
      {
        name: 'Trading dashboard',
        icon: 'ph:read-cv-logo-duotone',
        to: '/dashboards/trading',
      },
      {
        name: 'Sales dashboard',
        icon: 'ph:shopping-cart-duotone',
        to: '/dashboards/sales',
      },
    ],
  },
  {
    name: 'Banking',
    children: [
      {
        name: 'Banking V1',
        icon: 'ph:bank-duotone',
        to: '/dashboards/banking-1',
      },
      {
        name: 'Banking V2',
        icon: 'ph:bank-duotone',
        to: '/dashboards/banking-2',
      },
      {
        name: 'Banking V3',
        icon: 'ph:bank-duotone',
        to: '/dashboards/banking-3',
      },
      {
        name: 'Banking V4',
        icon: 'ph:bank-duotone',
        to: '/dashboards/banking-4',
      },
      {
        name: 'Banking V5',
        icon: 'ph:bank-duotone',
        to: '/dashboards/banking-5',
      },
    ],
  },
  {
    name: 'Business',
    children: [
      {
        name: 'Flights booking',
        icon: 'ph:airplane-duotone',
        to: '/dashboards/flights',
      },
      {
        name: 'Company board',
        icon: 'ph:buildings-duotone',
        to: '/dashboards/company',
      },
      {
        name: 'HR board',
        icon: 'ph:users-four-duotone',
        to: '/dashboards/human-resources',
      },
      {
        name: 'Course dashboard',
        icon: 'ph:graduation-cap-duotone',
        to: '/dashboards/course',
      },
      {
        name: 'Jobs dashboard',
        icon: 'ph:briefcase-duotone',
        to: '/dashboards/jobs',
      },
    ],
  },
  {
    name: 'Lifestyle',
    children: [
      {
        name: 'Influencer',
        icon: 'ph:crown-duotone',
        to: '/dashboards/influencer',
      },
      {
        name: 'Hobbies',
        icon: 'ph:confetti-duotone',
        to: '/dashboards/hobbies',
      },
      {
        name: 'Health',
        icon: 'ph:pill-duotone',
        to: '/dashboards/health',
      },
      {
        name: 'Writer',
        icon: 'ph:pen-nib-duotone',
        to: '/dashboards/writer',
      },
      {
        name: 'Video',
        icon: 'ph:video-camera-duotone',
        to: '/dashboards/video',
      },
      {
        name: 'Soccer',
        icon: 'ph:soccer-ball-duotone',
        to: '/dashboards/soccer',
      },
    ],
  },
  {
    name: 'Ecommerce',
    children: [
      {
        name: 'Ecommerce',
        icon: 'ph:storefront-duotone',
        to: '/dashboards/ecommerce',
      },
    ],
  },
  {
    name: 'Apps',
    children: [
      {
        name: 'Calendar',
        icon: 'ph:calendar-blank-duotone',
        to: '/dashboards/calendar',
      },
      {
        name: 'Food delivery',
        icon: 'ph:cookie-duotone',
        to: '/dashboards/delivery',
      },
      {
        name: 'Maps v1',
        icon: 'ph:map-pin-duotone',
        to: '/dashboards/map-left',
      },
      {
        name: 'Maps v2',
        icon: 'ph:map-pin-duotone',
        to: '/dashboards/map-right',
      },
      {
        name: 'Inbox',
        icon: 'ph:envelope-duotone',
        to: '/dashboards/inbox',
      },
      {
        name: 'Messaging v1',
        icon: 'ph:chat-circle-duotone',
        to: '/dashboards/messaging',
      },
      {
        name: 'Messaging v2',
        icon: 'ph:chat-teardrop-duotone',
        to: '/dashboards/messaging-2',
      },
    ],
  },
  {
    divider: true,
  },
  {
    name: 'Wizard',
    to: '/wizard',
  },
  {
    divider: true,
  },
  {
    name: 'Charts',
    children: [
      {
        name: 'Apex Charts',
        icon: 'ph:chart-pie-slice-duotone',
        to: '/dashboards/charts',
      },
    ],
  },
  {
    name: 'Widgets',
    children: [
      {
        name: 'UI Widgets',
        icon: 'ph:square-half-duotone',
        to: '/dashboards/widgets',
        exact: true,
      },
      {
        name: 'Creative Widgets',
        icon: 'ph:square-half-bottom-duotone',
        to: '/dashboards/widgets/creative',
      },
      {
        name: 'List Widgets',
        icon: 'ph:square-half-duotone',
        to: '/dashboards/widgets/list',
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
