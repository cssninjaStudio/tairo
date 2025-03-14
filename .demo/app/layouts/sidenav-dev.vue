<script setup lang="ts">
const isSwitcherOpen = useColorSwitcherOpen()

const menu = [
  {
    label: 'Dashboards',
    icon: 'solar:box-minimalistic-linear',
    children: [
      {
        label: 'Personal v1',
        to: '/dashboards',
      },
      {
        label: 'Personal v2',
        to: '/dashboards/personal-2',
      },
      {
        label: 'Personal v3',
        to: '/dashboards/personal-3',
      },
    ],
  },
  {
    label: 'Banking',
    icon: 'solar:buildings-linear',
    children: [
      {
        label: 'Account balance',
        to: '/dashboards/balance',
      },
      {
        label: 'Account overview',
        to: '/dashboards/banking-1',
      },
      {
        label: 'Account expenses',
        to: '/dashboards/banking-2',
      },
      {
        label: 'Account aggregator',
        to: '/dashboards/banking-5',
      },
    ],
  },
  {
    label: 'Lifestyle',
    icon: 'solar:confetti-minimalistic-linear',
    children: [
      {
        label: 'Influencer',
        to: '/dashboards/influencer',
      },
      {
        label: 'Hobbies',
        to: '/dashboards/hobbies',
      },
      {
        label: 'Health',
        to: '/dashboards/health',
      },
      {
        label: 'Writer',
        to: '/dashboards/writer',
      },
      {
        label: 'Video log',
        to: '/dashboards/video',
      },
      {
        label: 'Soccer',
        to: '/dashboards/soccer',
      },
    ],
  },
  {
    label: 'Widgets',
    icon: 'solar:widget-add-linear',
    children: [
      {
        label: 'UI widgets',
        to: '/dashboards/widgets',
      },
      {
        label: 'Creative widgets',
        to: '/dashboards/widgets/creative',
      },
      {
        label: 'List widgets',
        to: '/dashboards/widgets/list',
      },
    ],
  },
  {
    label: 'Projects',
    icon: 'solar:suitcase-linear',
    children: [
      {
        label: 'Projects v1',
        to: '/layouts/projects',
      },
      {
        label: 'Projects v2',
        to: '/layouts/projects/project-list-2',
      },
      {
        label: 'Projects v3',
        to: '/layouts/projects/project-list-3',
      },
    ],
  },
  {
    label: 'Multistep wizard',
    icon: 'solar:bolt-linear',
    to: '/wizard',
  },
]

const people = [
  {
    name: 'Joshua M.',
    avatar: '/img/avatars/15.svg',
  },
  {
    name: 'Chris G.',
    avatar: '/img/avatars/3.svg',
    count: 5,
  },
  {
    name: 'Hermann M.',
    avatar: '/img/avatars/16.svg',
  },
  {
    name: 'Helen C.',
    avatar: '/img/avatars/25.svg',
  },
]

const companies = [
  {
    name: 'Okano LLC',
    logo: '/img/icons/logos/okano.svg',
  },
  {
    name: 'Nitro LLC',
    logo: '/img/icons/logos/nitro.svg',
    count: '9+',
  },
  {
    name: 'Flashlite LLC',
    logo: '/img/icons/logos/flashlite.svg',
  },
]
</script>

<template>
  <TairoSidenavLayout v-slot="{ toggleMobileNav }">
    <TairoSidenavSidebar>
      <TairoSidenavSidebarHeader>
        <NuxtLink to="/">
          <TairoLogoText class="text-primary-500 h-6 w-auto" />
        </NuxtLink>
        <div class="ms-auto scale-[0.8]">
          <BaseThemeSwitch />
        </div>
      </TairoSidenavSidebarHeader>
      <TairoSidenavSidebarLinks class="p-4 grow">
        <template v-for="item in menu" :key="item.label">
          <TairoSidenavSidebarLink
            v-if="!item.children"
            :to="item.to"
            :icon="item.icon"
            :label="item.label"
          />
          <TairoSidenavCollapsible
            v-else
            :default-open="item.children.some((child) => child.to === $route.path) || undefined"
          >
            <template #trigger>
              <TairoSidenavCollapsibleTrigger :icon="item.icon" :label="item.label" />
            </template>
            <TairoSidenavCollapsibleLink
              v-for="child in item.children"
              :key="child.label"
              :to="child.to"
              :label="child.label"
            />
          </TairoSidenavCollapsible>
        </template>
        <TairoSidenavSidebarDivider />
        <TairoSidenavSidebarLink to="/" icon="solar:bolt-linear" label="Daily perks" count="3" />
        <TairoSidenavSidebarLink icon="solar:palette-round-linear" label="Customize" @click="isSwitcherOpen = true" />
        <TairoSidenavSidebarDivider />
        <BaseHeading size="xs" weight="medium" class="uppercase mt-2 mb-3">
          Recently viewed
        </BaseHeading>
        <TairoSidenavSidebarLink v-for="person in people" :key="person.name" to="/">
          <BaseAvatar size="xxs" :src="person.avatar" />
          <span class="relative">{{ person.name }}</span>
          <span v-if="person.count" class="ms-auto bg-muted-50 text-muted-700 ring-muted-300 dark:bg-muted-800 dark:text-muted-200 dark:ring-muted-700 relative ms-auto inline-flex shrink-0 items-center rounded-sm px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset">
            {{ person.count }}
          </span>
        </TairoSidenavSidebarLink>
        <TairoSidenavSidebarDivider />
        <BaseHeading size="xs" weight="medium" class="uppercase mt-2 mb-3">
          Companies
        </BaseHeading>
        <TairoSidenavSidebarLink v-for="company in companies" :key="company.name" to="/">
          <BaseAvatar size="xxs" :src="company.logo" />
          <span class="relative">{{ company.name }}</span>
          <span v-if="company.count" class="ms-auto bg-muted-50 text-muted-700 ring-muted-300 dark:bg-muted-800 dark:text-muted-200 dark:ring-muted-700 relative ms-auto inline-flex shrink-0 items-center rounded-sm px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset">
            {{ company.count }}
          </span>
        </TairoSidenavSidebarLink>
      </TairoSidenavSidebarLinks>
      <TairoSidenavSidebarLinks class="p-4 shrink-0">
        <TairoSidenavSidebarLink to="/">
          <BaseAvatar size="xxs" src="/img/avatars/10.svg" />
          <span class="relative">My Account</span>
        </TairoSidenavSidebarLink>
      </TairoSidenavSidebarLinks>
    </TairoSidenavSidebar>
    <TairoSidenavContent class="min-h-screen">
      <div class="px-4 md:px-6 xl:px-8">
        <DemoToolbar @toggle-mobile-nav="toggleMobileNav" />
      </div>
      <slot />
    </TairoSidenavContent>
  </TairoSidenavLayout>
</template>
