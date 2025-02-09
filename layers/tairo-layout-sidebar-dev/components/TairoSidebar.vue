<script setup lang="ts">
import { useLayoutSidebarContext } from '../composables/sidebar'
import TairoSubsidebar from './TairoSubsidebar.vue'

const { isOpen, currentMenuName } = useLayoutSidebarContext()
const isSwitcherOpen = useState('switcher-open', () => false)

const menuItems = [
  {
    name: 'Dashboard',
    icon: 'solar:spedometer-middle-linear',
    children: [
      {
        name: 'Analytics',
        to: '/',
      },
      {
        name: 'Reports',
        to: '/',
      },
      {
        name: 'Forecast',
        to: '/',
      },
    ],
  },
  {
    name: 'Storefront',
    icon: 'solar:shop-linear',
    children: [
      {
        name: 'Overview',
        to: '/',
      },
      {
        name: 'Customers',
        to: '/',
      },
      {
        name: 'Orders',
        to: '/',
      },
    ],
  },
  {
    name: 'Payments',
    icon: 'solar:card-linear',
    children: [
      {
        name: 'Gateways',
        to: '/',
      },
      {
        name: 'Statistics',
        to: '/',
      },
      {
        name: 'API Endpoints',
        to: '/',
      },
    ],
  },
  {
    name: 'Products',
    icon: 'solar:box-minimalistic-linear',
    activePath: '/',
    to: '/',
  },
  {
    name: 'Messages',
    icon: 'solar:chat-round-unread-linear',
    activePath: '/',
    to: '/',
  },
]
</script>

<template>
  <div
    class="fixed z-50 top-0 start-0 h-full w-auto shrink-0 flex transition-transform duration-300 ease-in-out"
    :class="[
      isOpen ? 'translate-x-0' : '-translate-x-full xl:-translate-x-0',
    ]"
  >
    <div class="flex flex-col w-[var(--icon-sidebar-width)] h-full bg-white dark:bg-muted-950 border-e border-muted-200 dark:border-muted-800">
      <NuxtLink to="/" class="flex items-center justify-center size-14">
        <slot name="logo" />
      </NuxtLink>
      <div class="flex flex-col grow">
        <slot name="icon-top">
          <BaseTooltip content="Subsidebar 1">
            <TairoSidebarIcon
              icon="solar:sidebar-minimalistic-linear"
              menu="dashboards"
              title="Dashboards"
            />
          </BaseTooltip>
          <TairoSidebarIcon
            icon="solar:sticker-square-linear"
            menu="subsidebar-2"
            title="Subsidebar 2"
          />
          <TairoSidebarIcon
            icon="solar:calendar-linear"
            menu="subsidebar-3"
            title="Subsidebar 3"
          />
          <TairoSidebarIcon
            icon="solar:widget-3-linear"
            menu="subsidebar-4"
            title="Subsidebar 4"
          />
          <TairoSidebarIcon
            icon="solar:widget-4-linear"
            menu="subsidebar-5"
            title="Subsidebar 5"
          />
        </slot>
      </div>
      <div class="flex flex-col shrink-0 mt-auto">
        <slot name="icon-bottom">
          <TairoSidebarIcon
            icon="solar:palette-round-linear"
            title="Customize"
            @click="isSwitcherOpen = true"
          />
          <TairoSidebarIcon
            icon="solar:settings-linear"
            to="/settings"
            title="Settings"
          />
          <TairoSidebarIcon
            title="Theme"
          >
            <div class="scale-90">
              <BaseThemeToggle />
            </div>
          </TairoSidebarIcon>
          <TairoSidebarIcon
            title="Account"
          >
            <NuxtLink to="/">
              <BaseChip size="sm" pulse color="custom" :offset="3" class="text-green-600">
                <BaseAvatar
                  size="xs"
                  src="/img/avatars/10.svg"
                />
              </BaseChip>
            </NuxtLink>
          </TairoSidebarIcon>
        </slot>
      </div>
    </div>
    <div class="flex flex-col w-[var(--subsidebar-width)] h-full bg-white dark:bg-muted-950 border-e border-muted-200 dark:border-muted-800">
      <div class="h-14 w-full flex items-center shrink-0 px-4">
        <slot name="subsidebar-header">
          <BaseHeading as="h2" weight="medium" size="md">
            {{ currentMenuName }}
          </BaseHeading>
        </slot>
      </div>
      <div class="grow">
        <slot name="subsidebars">
          <TairoSubsidebar menu="dashboards">
            <TairoSubsidebarMenu
              v-for="item in menuItems"
              :key="item.name"
              :item="item"
            />
          </TairoSubsidebar>
        </slot>
      </div>
    </div>
  </div>
</template>
