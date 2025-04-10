<script setup lang="ts">
const menu = [
  {
    label: 'Dashboards',
    icon: 'solar:sidebar-minimalistic-linear',
    links: [
      {
        label: 'Personal',
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
        label: 'Transactions',
        icon: 'solar:card-linear',
        children: [
          {
            label: 'Overview',
            to: '/dashboards/overview',
          },
          {
            label: 'Quickview',
            to: '/dashboards/quickview',
          },
          {
            label: 'Account tracking',
            to: '/dashboards/banking-4',
          },
        ],
      },
      {
        label: 'Finance',
        icon: 'solar:chart-linear',
        children: [
          {
            label: 'Analytics',
            to: '/dashboards/analytics',
          },
          {
            label: 'Stock market',
            to: '/dashboards/stocks',
          },
          {
            label: 'Stock tracking',
            to: '/dashboards/trading',
          },
        ],
      },
      {
        label: 'Business',
        icon: 'solar:case-linear',
        children: [
          {
            label: 'Flight booking',
            to: '/dashboards/flights',
          },
          {
            label: 'Company overview',
            to: '/dashboards/company',
          },
          {
            label: 'Human Resources',
            to: '/dashboards/human-resources',
          },
          {
            label: 'Course overview',
            to: '/dashboards/course',
          },
          {
            label: 'Job search',
            to: '/dashboards/jobs',
          },
        ],
      },
      {
        label: 'Commerce',
        icon: 'solar:cart-3-linear',
        children: [
          {
            label: 'Sales overview',
            to: '/dashboards/sales',
          },
          {
            label: 'Store overview',
            to: '/dashboards/ecommerce',
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
    ],
  },
  {
    label: 'Applications',
    icon: 'solar:widget-2-linear',
    links: [
      {
        label: 'AI assistant',
        icon: 'solar:sticker-smile-square-linear',
        children: [
          {
            label: 'AI chat v1',
            to: '/layouts/ai',
          },
          {
            label: 'AI chat v2',
            to: '/layouts/ai/ui',
          },
        ],
      },
      {
        label: 'Calendar',
        icon: 'solar:calendar-linear',
        to: '/dashboards/calendar',
      },
      {
        label: 'Food delivery',
        icon: 'solar:map-point-wave-linear',
        to: '/dashboards/delivery',
      },
      {
        label: 'Direct messaging',
        icon: 'solar:chat-square-linear',
        children: [
          {
            label: 'Sidebar chat',
            to: '/dashboards/messaging',
          },
          {
            label: 'Standalone chat',
            to: '/dashboards/messaging-2',
          },
        ],
      },
      {
        label: 'Form layouts',
        icon: 'solar:notes-linear',
        children: [
          {
            label: 'Company info',
            to: '/layouts/form-1',
          },
          {
            label: 'Create doctor',
            to: '/layouts/form-2',
          },
          {
            label: 'Checkout order',
            to: '/layouts/form-3',
          },
          {
            label: 'Create event',
            to: '/layouts/form-4',
          },
          {
            label: 'Password gen',
            to: '/layouts/form-5',
          },
          {
            label: 'Create meeting',
            to: '/layouts/form-6',
          },
          {
            label: 'Create contact',
            to: '/layouts/contacts/create',
          },
          {
            label: 'Edit user',
            to: '/layouts/user-edit',
          },
          {
            label: 'Edit company',
            to: '/layouts/company-edit',
          },
        ],
      },
      {
        label: 'Multistep wizard',
        icon: 'solar:bolt-linear',
        to: '/wizard',
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
        label: 'Apex charts',
        icon: 'solar:pie-chart-2-linear',
        to: '/dashboards/charts',
      },
      {
        label: 'Starters',
        icon: 'solar:widget-linear',
        children: [
          {
            label: 'Sidebar layout',
            to: '/starters/sidebar',
          },
          {
            label: 'Collapse layout',
            to: '/starters/collapse',
          },
          {
            label: 'Sidenav layout',
            to: '/starters/sidenav',
          },
          {
            label: 'Topnav layout',
            to: '/starters/topnav',
          },
          {
            label: 'Toptabs layout',
            to: '/starters/topnav-slim',
          },
        ],
      },
    ],
  },
  {
    label: 'Lists & grids',
    icon: 'solar:align-vertical-spacing-linear',
    links: [
      {
        label: 'List view',
        icon: 'solar:slider-horizontal-linear',
        children: [
          {
            label: 'List view v1',
            to: '/layouts',
          },
          {
            label: 'List view v2',
            to: '/layouts/list-view-2',
          },
          {
            label: 'List view v3',
            to: '/layouts/list-view-3',
          },
          {
            label: 'List view v4',
            to: '/layouts/list-view-4',
          },
        ],
      },
      {
        label: 'Flex list',
        icon: 'solar:mirror-left-linear',
        children: [
          {
            label: 'Flex list v1',
            to: '/layouts/flex-list-1',
          },
          {
            label: 'Flex list v2',
            to: '/layouts/flex-list-2',
          },
          {
            label: 'Flex list v3',
            to: '/layouts/flex-list-3',
          },
        ],
      },
      {
        label: 'Table list',
        icon: 'solar:slider-minimalistic-horizontal-linear',
        children: [
          {
            label: 'Table list v1',
            to: '/layouts/table-list-1',
          },
          {
            label: 'Table list v2',
            to: '/layouts/table-list-2',
          },
          {
            label: 'Table list v3',
            to: '/layouts/table-list-3',
          },
        ],
      },
      {
        label: 'Card grid',
        icon: 'solar:posts-carousel-horizontal-linear',
        children: [
          {
            label: 'Card grid v1',
            to: '/layouts/card-grid-1',
          },
          {
            label: 'Card grid v2',
            to: '/layouts/card-grid-2',
          },
          {
            label: 'Card grid v3',
            to: '/layouts/card-grid-3',
          },
          {
            label: 'Card grid v4',
            to: '/layouts/card-grid-4',
          },
        ],
      },
      {
        label: 'Tile grid',
        icon: 'solar:posts-carousel-vertical-linear',
        children: [
          {
            label: 'Tile grid v1',
            to: '/layouts/tile-grid-1',
          },
          {
            label: 'Tile grid v2',
            to: '/layouts/tile-grid-2',
          },
          {
            label: 'Tile grid v3',
            to: '/layouts/tile-grid-3',
          },
        ],
      },
      {
        label: 'User grid',
        icon: 'solar:users-group-rounded-linear',
        children: [
          {
            label: 'User grid v1',
            to: '/layouts/user-grid-1',
          },
          {
            label: 'User grid v2',
            to: '/layouts/user-grid-2',
          },
          {
            label: 'User grid v3',
            to: '/layouts/user-grid-3',
          },
          {
            label: 'User grid v4',
            to: '/layouts/user-grid-4',
          },
        ],
      },
      {
        label: 'Placeloads',
        icon: 'solar:refresh-circle-linear',
        children: [
          {
            label: 'Placeloads v1',
            to: '/layouts/placeload-1',
          },
          {
            label: 'Placeloads v2',
            to: '/layouts/placeload-2',
          },
          {
            label: 'Placeloads v3',
            to: '/layouts/placeload-3',
          },
          {
            label: 'Placeloads v4',
            to: '/layouts/placeload-4',
          },
        ],
      },
    ],
  },
  {
    label: 'Business',
    icon: 'solar:suitcase-lines-linear',
    links: [
      {
        label: 'Projects overview',
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
        label: 'Project details',
        icon: 'solar:plate-linear',
        to: '/layouts/projects/details',
      },
      {
        label: 'Kanban board',
        icon: 'solar:widget-4-linear',
        to: '/layouts/projects/board',
      },
      {
        label: 'Accounts',
        icon: 'solar:key-minimalistic-square-2-linear',
        children: [
          {
            label: 'Account list',
            to: '/layouts/accounts',
          },
          {
            label: 'Linked accounts',
            to: '/layouts/accounts/linked',
          },
          {
            label: 'Account rules',
            to: '/layouts/accounts/rules',
          },
        ],
      },
      {
        label: 'Credit cards',
        icon: 'solar:card-linear',
        children: [
          {
            label: 'Card list',
            to: '/layouts/cards',
          },
          {
            label: 'New card',
            to: '/layouts/card/new',
          },
        ],
      },
      {
        label: 'Transactions',
        icon: 'solar:transfer-horizontal-linear',
        children: [
          {
            label: 'Transaction list',
            to: '/layouts/transactions',
          },
          {
            label: 'Outgoing payments',
            to: '/layouts/payments',
          },
          {
            label: 'Incoming payments',
            to: '/layouts/payments/incoming',
          },
          {
            label: 'Recipients',
            to: '/layouts/payments/recipients',
          },
        ],
      },
      {
        label: 'Wizards',
        icon: 'solar:bolt-linear',
        children: [
          {
            label: 'Send money',
            to: '/layouts/send',
          },
          {
            label: 'Receive money',
            to: '/layouts/receive',
          },
          {
            label: 'Invite people',
            to: '/layouts/invite',
          },
        ],
      },
      {
        label: 'Miscellaneous',
        icon: 'solar:shield-check-linear',
        children: [
          {
            label: 'Members',
            to: '/layouts/members',
          },
          {
            label: 'Investments',
            to: '/layouts/invest',
          },
          {
            label: 'Credit request',
            to: '/layouts/credit',
          },
          {
            label: 'Personal vault',
            to: '/layouts/vault',
          },
        ],
      },
    ],
  },
  {
    label: 'Utility',
    icon: 'solar:graph-new-linear',
    links: [
      {
        label: 'Login',
        icon: 'solar:lock-linear',
        children: [
          {
            label: 'Login v1',
            to: '/auth',
          },
          {
            label: 'Login v2',
            to: '/auth/login-1',
          },
          {
            label: 'Login v3',
            to: '/auth/login-2',
          },
          {
            label: 'Login v4',
            to: '/auth/login-3',
          },
        ],
      },
      {
        label: 'Signup',
        icon: 'solar:key-minimalistic-linear',
        children: [
          {
            label: 'Signup v1',
            to: '/auth/signup-1',
          },
          {
            label: 'Signup v2',
            to: '/auth/signup-2',
          },
          {
            label: 'Signup v3',
            to: '/auth/signup-3',
          },
        ],
      },
      {
        label: 'Forgot password',
        icon: 'solar:refresh-square-linear',
        to: '/auth/recover',
      },
      {
        label: 'Account',
        icon: 'solar:user-linear',
        children: [
          {
            label: 'Profile',
            to: '/layouts/profile',
          },
          {
            label: 'Profile notifications',
            to: '/layouts/profile-notifications',
          },
          {
            label: 'Profile settings',
            to: '/layouts/profile-settings',
          },
          {
            label: 'Profile edit',
            to: '/layouts/profile-edit',
          },
          {
            label: 'User info',
            to: '/layouts/user-details',
          },
          {
            label: 'Company info',
            to: '/layouts/company',
          },
        ],
      },
      {
        label: 'Subpages',
        icon: 'solar:document-linear',
        children: [
          {
            label: 'Documents',
            to: '/layouts/documents',
          },
          {
            label: 'Downloads',
            to: '/layouts/downloads',
          },
          {
            label: 'Integrations',
            to: '/layouts/integrations',
          },
          {
            label: 'Offers',
            to: '/layouts/offers',
          },
          {
            label: 'SaaS billing',
            to: '/layouts/utility-billing',
          },
        ],
      },
      {
        label: 'Utility',
        icon: 'solar:home-smile-linear',
        children: [
          {
            label: 'Action v1',
            to: '/layouts/utility-action-1',
          },
          {
            label: 'Action v2',
            to: '/layouts/utility-action-2',
          },
          {
            label: 'Promotion',
            to: '/layouts/utility-promotion',
          },
          {
            label: 'Confirm action',
            to: '/layouts/utility-confirm',
          },
          {
            label: 'Invoice v1',
            to: '/layouts/utility-invoice',
          },
          {
            label: 'Invoice v2',
            to: '/layouts/utility-invoice-2',
          },
          {
            label: 'System status',
            to: '/layouts/utility-status',
          },
          {
            label: 'System error',
            to: '/layouts/utility-error',
          },
          {
            label: 'Search results',
            to: '/layouts/search-results',
          },
          {
            label: 'Search empty',
            to: '/layouts/search-empty',
          },
        ],
      },
      {
        label: 'Settings',
        icon: 'solar:settings-linear',
        to: '/layouts/settings',
      },
      {
        label: 'Preferences',
        icon: 'solar:tuning-2-linear',
        to: '/layouts/preferences',
      },
      {
        label: 'Onboarding',
        icon: 'solar:plain-3-linear',
        children: [
          {
            label: '2 factor auth',
            to: '/layouts/onboarding-1',
          },
          {
            label: 'Plan selection',
            to: '/layouts/onboarding-2',
          },
          {
            label: 'Role selection',
            to: '/layouts/onboarding-3',
          },
        ],
      },
    ],
  },
]

const isSwitcherOpen = useColorSwitcherOpen()

const route = useRoute()
const sidebarId = ref(getRouteSidebarId())

watch(() => route.path, () => {
  sidebarId.value = getRouteSidebarId()
})

function getRouteSidebarId() {
  if (route.path.startsWith('/dashboards/messaging')) {
    return 'Messaging'
  }
  if (route.path.startsWith('/dashboards/inbox')) {
    return 'Inbox'
  }
  if (route.path.startsWith('/dashboards/calendar')) {
    return 'Calendar'
  }
  if (route.path.startsWith('/dashboards/map')) {
    return 'Map'
  }

  // search for the active menu item
  for (const item of menu) {
    if (item.links.some(link => link.to === route.path || (link.children && link.children.some(child => child.to === route.path)))) {
      return item.label
    }
  }

  return 'Dashboards'
}
</script>

<template>
  <TairoSidebarLayout
    v-slot="{ toggleMobileNav }"
    v-model="sidebarId"
    :class="[
      sidebarId === 'Messaging' ? '[--tairo-sidebar-subsidebar-width:4.5rem]' : '',
      sidebarId === 'Inbox' ? '[--tairo-sidebar-subsidebar-width:3.5rem]' : '',
      sidebarId === 'Calendar' ? '[--tairo-sidebar-subsidebar-width:3.5rem]' : '',
      sidebarId === 'Map' ? '[--tairo-sidebar-subsidebar-width:0rem]' : '',
    ]"
  >
    <TairoSidebarNav>
      <TairoSidebar>
        <NuxtLink to="/" class="flex items-center justify-center size-14 shrink-0">
          <TairoLogo class="size-8 text-primary-heavy dark:text-primary-light" />
        </NuxtLink>

        <TairoSidebarLinks class="overflow-y-auto nui-slimscroll">
          <BaseTooltip
            v-for="item in menu"
            :key="item.label"
            :content="item.label"
            variant="dark"
            :bindings="{
              content: { side: 'left' },
              portal: { disabled: true },
            }"
          >
            <TairoSidebarTrigger :value="item.label">
              <Icon :name="item.icon" class="size-5" />
            </TairoSidebarTrigger>
          </BaseTooltip>

          <BaseTooltip
            content="Messaging"
            variant="dark"
            :bindings="{
              content: { side: 'left' },
              portal: { disabled: true },
            }"
          >
            <TairoSidebarTrigger value="Messaging" to="/dashboards/messaging">
              <Icon name="solar:chat-round-unread-linear" class="size-5" />
            </TairoSidebarTrigger>
          </BaseTooltip>

          <BaseTooltip
            content="Inbox"
            variant="dark"
            :bindings="{
              content: { side: 'left' },
              portal: { disabled: true },
            }"
          >
            <TairoSidebarTrigger value="Inbox" to="/dashboards/inbox">
              <Icon name="solar:letter-unread-linear" class="size-5" />
            </TairoSidebarTrigger>
          </BaseTooltip>

          <BaseTooltip
            content="Calendar"
            variant="dark"
            :bindings="{
              content: { side: 'left' },
              portal: { disabled: true },
            }"
          >
            <TairoSidebarTrigger value="Calendar" to="/dashboards/calendar">
              <Icon name="solar:calendar-linear" class="size-5" />
            </TairoSidebarTrigger>
          </BaseTooltip>
          <BaseTooltip
            content="Map"
            variant="dark"
            :bindings="{
              content: { side: 'left' },
              portal: { disabled: true },
            }"
          >
            <TairoSidebarTrigger value="Map" to="/dashboards/map">
              <Icon name="solar:map-point-wave-linear" class="size-5" />
            </TairoSidebarTrigger>
          </BaseTooltip>
        </TairoSidebarLinks>

        <TairoSidebarLinks class="shrink-0 mt-auto">
          <BaseTooltip
            content="Customize"
            variant="dark"
            :bindings="{
              content: { side: 'left' },
              portal: { disabled: true },
            }"
          >
            <TairoSidebarLink tabindex="0" @click="isSwitcherOpen = true">
              <Icon name="solar:palette-round-linear" class="size-5" />
            </TairoSidebarLink>
          </BaseTooltip>
          <BaseTooltip
            content="Settings"
            variant="dark"
            :bindings="{
              content: { side: 'left' },
              portal: { disabled: true },
            }"
          >
            <TairoSidebarLink to="/layouts/preferences">
              <Icon name="solar:settings-linear" class="size-5" />
            </TairoSidebarLink>
          </BaseTooltip>
          <TairoSidebarLink>
            <BaseThemeToggle class="scale-90" />
          </TairoSidebarLink>
          <TairoSidebarLink to="/layouts/profile">
            <BaseChip size="sm" pulse color="custom" :offset="3" class="text-green-600 flex items-center justify-center">
              <BaseAvatar
                size="xs"
                src="/img/avatars/10.svg"
              />
            </BaseChip>
          </TairoSidebarLink>
        </TairoSidebarLinks>
      </TairoSidebar>

      <TairoSidebarSubsidebar v-for="item in menu" :key="item.label" :value="item.label">
        <TairoSidebarSubsidebarHeader>
          {{ item.label }}
        </TairoSidebarSubsidebarHeader>
        <TairoSidebarSubsidebarContent>
          <template v-for="link in item.links" :key="link.label">
            <TairoSidebarSubsidebarLink v-if="!link.children" :to="link.to">
              <Icon :name="link.icon" class="size-4 text-muted-500 dark:text-muted-400" />
              <span>{{ link.label }}</span>
            </TairoSidebarSubsidebarLink>
            <TairoSidebarSubsidebarCollapsible
              v-else
              :children="link.children"
              :default-open="link.children.some((child) => child.to === $route.path) || undefined"
            >
              <template #trigger>
                <TairoSidebarSubsidebarCollapsibleTrigger>
                  <Icon :name="link.icon" class="size-4 text-muted-500 dark:text-muted-400" />
                  <span>{{ link.label }}</span>
                </TairoSidebarSubsidebarCollapsibleTrigger>
              </template>
            </TairoSidebarSubsidebarCollapsible>
          </template>
        </TairoSidebarSubsidebarContent>
      </TairoSidebarSubsidebar>

      <TairoSidebarSubsidebar value="Messaging">
        <DemoSubsidebarMessaging />
      </TairoSidebarSubsidebar>

      <TairoSidebarSubsidebar value="Inbox" class="flex flex-col items-center">
        <TairoSidebarSubsidebarContent>
          <div class="flex h-12 w-full items-center justify-center shrink-0">
            <BaseButton size="icon-sm" rounded="full" variant="primary">
              <Icon name="lucide:plus" class="size-4" />
            </BaseButton>
          </div>
          <div class="flex h-12 w-full items-center justify-center shrink-0">
            <BaseTooltip
              content="Received"
              variant="dark"
              :bindings="{
                content: { side: 'left' },
                portal: { disabled: true },
              }"
            >
              <BaseButton size="icon-sm" rounded="md" variant="ghost">
                <Icon name="solar:inbox-linear" class="size-5" />
              </BaseButton>
            </BaseTooltip>
          </div>
          <div class="flex h-12 w-full items-center justify-center shrink-0">
            <BaseTooltip
              content="Sent"
              variant="dark"
              :bindings="{
                content: { side: 'left' },
                portal: { disabled: true },
              }"
            >
              <BaseButton size="icon-sm" rounded="md" variant="ghost">
                <Icon name="solar:inbox-out-linear" class="size-5" />
              </BaseButton>
            </BaseTooltip>
          </div>
          <div class="flex h-12 w-full items-center justify-center shrink-0">
            <BaseTooltip
              content="Important"
              variant="dark"
              :bindings="{
                content: { side: 'left' },
                portal: { disabled: true },
              }"
            >
              <BaseButton size="icon-sm" rounded="md" variant="ghost">
                <Icon name="solar:bookmark-linear" class="size-5" />
              </BaseButton>
            </BaseTooltip>
          </div>
          <div class="flex h-12 w-full items-center justify-center shrink-0">
            <BaseTooltip
              content="Spam"
              variant="dark"
              :bindings="{
                content: { side: 'left' },
                portal: { disabled: true },
              }"
            >
              <BaseButton size="icon-sm" rounded="md" variant="ghost">
                <Icon name="solar:trash-bin-trash-linear" class="size-5" />
              </BaseButton>
            </BaseTooltip>
          </div>
          <div class="flex h-12 w-full items-center justify-center shrink-0">
            <BaseTooltip
              content="Calendar"
              variant="dark"
              :bindings="{
                content: { side: 'left' },
                portal: { disabled: true },
              }"
            >
              <BaseButton size="icon-sm" rounded="md" variant="ghost">
                <Icon name="solar:calendar-linear" class="size-5" />
              </BaseButton>
            </BaseTooltip>
          </div>
        </TairoSidebarSubsidebarContent>
      </TairoSidebarSubsidebar>

      <TairoSidebarSubsidebar value="Calendar" class="flex flex-col items-center">
        <TairoSidebarSubsidebarContent>
          <div class="flex h-12 w-full items-center justify-center shrink-0">
            <BaseButton size="icon-sm" rounded="full" variant="primary">
              <Icon name="lucide:plus" class="size-4" />
            </BaseButton>
          </div>
        </TairoSidebarSubsidebarContent>
      </TairoSidebarSubsidebar>
    </TairoSidebarNav>

    <TairoSidebarContent class="min-h-screen">
      <div class="px-4 md:px-6 xl:px-8">
        <DemoToolbar
          @toggle-mobile-nav="toggleMobileNav"
        />
      </div>
      <slot />
    </TairoSidebarContent>
  </TairoSidebarLayout>
</template>
