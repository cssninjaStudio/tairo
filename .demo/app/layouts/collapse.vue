<script setup lang="ts">
const isSwitcherOpen = useColorSwitcherOpen()

const menu = [
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
        to: '/dashboards',
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
  {
    label: 'AI assistant',
    icon: 'solar:sticker-smile-square-linear',
    children: [
      {
        label: 'AI chat v1',
        to: '/ai',
      },
      {
        label: 'AI chat v2',
        to: '/ai/ui',
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
    label: 'Map overview',
    icon: 'solar:map-linear',
    to: '/dashboards/map',
  },
  {
    label: 'Email inbox',
    icon: 'solar:letter-unread-linear',
    to: '/dashboards/inbox',
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
        to: '/layouts/accounts',
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
    to: '/auth/forgot',
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
        to: '/layouts/user',
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
]
</script>

<template>
  <TairoCollapseLayout v-slot="{ isCollapsed, toggleMobileNav }">
    <TairoCollapseSidebar>
      <TairoCollapseSidebarHeader>
        <NuxtLink to="/" class="flex items-center" :class="isCollapsed ? 'w-full justify-center!' : ''">
          <TairoLogo v-if="isCollapsed" class="size-8 text-primary-heavy dark:text-primary-light mx-auto" />
          <TairoLogoText v-else class="h-7 text-primary-heavy dark:text-primary-light mx-3" />
        </NuxtLink>
      </TairoCollapseSidebarHeader>
      <TairoCollapseSidebarClose class="mx-4 my-3" />
      <TairoCollapseSidebarLinks class="px-4 space-y-1 grow">
        <template v-for="item in menu" :key="item.label">
          <BaseTooltip
            v-if="!item.children"
            :content="item.label"
            :disabled="!isCollapsed"
            :bindings="{ content: { side: 'right' } }"
          >
            <TairoCollapseSidebarLink
              :to="item.to"
              :icon="item.icon"
              :label="item.label"
            />
          </BaseTooltip>
          <TairoCollapseCollapsible
            v-else
            :default-open="item.children.some((child) => child.to === $route.path) || undefined"
          >
            <template #trigger>
              <BaseTooltip
                :content="item.label"
                :disabled="!isCollapsed"
                :bindings="{ content: { side: 'right' } }"
              >
                <TairoCollapseCollapsibleTrigger
                  :icon="item.icon"
                  :label="item.label"
                />
              </BaseTooltip>
            </template>
            <TairoCollapseCollapsibleLink
              v-for="child in item.children"
              :key="child.label"
              :to="child.to"
              :label="child.label"
              data-state="active"
            />
          </TairoCollapseCollapsible>
        </template>
      </TairoCollapseSidebarLinks>
      <TairoCollapseSidebarLinks class="px-4 py-2 space-y-1 shrink-0">
        <BaseTooltip
          content="Customize"
          :disabled="!isCollapsed"
          :bindings="{ content: { side: 'right' } }"
        >
          <TairoCollapseSidebarLink
            tabindex="0"
            icon="solar:palette-round-linear"
            label="Customize"
            @click="isSwitcherOpen = true"
          />
        </BaseTooltip>
        <TairoCollapseSidebarLink to="/">
          <BaseAvatar size="xxs" src="/img/avatars/10.svg" />
          <span v-if="!isCollapsed" class="-ms-1">Account</span>
        </TairoCollapseSidebarLink>
      </TairoCollapseSidebarLinks>
    </TairoCollapseSidebar>

    <TairoCollapseContent class="min-h-screen">
      <div class="px-4 md:px-6 xl:px-8">
        <DemoToolbar @toggle-mobile-nav="toggleMobileNav" />
      </div>
      <slot />
    </TairoCollapseContent>
  </TairoCollapseLayout>
</template>
