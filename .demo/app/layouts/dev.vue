<script setup lang="ts">
const isSwitcherOpen = useState('switcher-open', () => false)

const sidebarId = ref('subsidebar-3')
</script>

<template>
  <TairoSidebarLayout v-model="sidebarId" :class="sidebarId === 'subsidebar-3' ? '[--subsidebar-width:4.5rem]' : ''">
    <TairoSidebarLayoutNav>
      <TairoSidebar>
        <NuxtLink to="/" class="flex items-center justify-center size-14 shrink-0">
          <TairoLogo class="size-8 text-primary-heavy dark:text-primary-light" />
        </NuxtLink>

        <TairoSidebarLinks>
          <BaseTooltip
            content="Dashboards"
            variant="dark"
            :bindings="{
              content: { side: 'left' },
              portal: { to: '#teleports' },
            }"
          >
            <TairoSidebarTrigger value="dashboards">
              <Icon name="solar:sidebar-minimalistic-linear" class="size-5" />
            </TairoSidebarTrigger>
          </BaseTooltip>

          <BaseTooltip
            content="Subsidebar 1"
            :bindings="{
              content: { side: 'left' },
              portal: { to: '#teleports' },
            }"
          >
            <TairoSidebarTrigger value="subsidebar-2">
              <Icon name="solar:sticker-square-linear" class="size-5" />
            </TairoSidebarTrigger>
          </BaseTooltip>

          <TairoSidebarTrigger value="subsidebar-3">
            <Icon name="solar:calendar-linear" class="size-5" />
          </TairoSidebarTrigger>
        </TairoSidebarLinks>

        <TairoSidebarLinks class="grow bg-muted-100 dark:bg-muted-900 overflow-y-auto nui-slimscroll">
          <TairoSidebarTrigger value="subsidebar-4">
            <Icon name="solar:widget-3-linear" class="size-5" />
          </TairoSidebarTrigger>
          <TairoSidebarTrigger value="subsidebar-5">
            <Icon name="solar:widget-4-linear" class="size-5" />
          </TairoSidebarTrigger>
        </TairoSidebarLinks>

        <TairoSidebarLinks class="shrink-0 mt-auto">
          <TairoSidebarLink tabindex="0" @click="isSwitcherOpen = true">
            <Icon name="solar:palette-round-linear" class="size-5" />
          </TairoSidebarLink>
          <TairoSidebarLink to="/layouts/settings">
            <Icon name="solar:settings-linear" class="size-5" />
          </TairoSidebarLink>
          <TairoSidebarLink>
            <BaseThemeToggle class="scale-90" />
          </TairoSidebarLink>
          <TairoSidebarLink to="/layouts/profile">
            <BaseChip size="sm" pulse color="custom" :offset="3" class="text-green-600">
              <BaseAvatar
                size="xs"
                src="/img/avatars/10.svg"
              />
            </BaseChip>
          </TairoSidebarLink>
        </TairoSidebarLinks>
      </TairoSidebar>

      <TairoSubsidebar value="dashboards">
        <TairoSubsidebarHeader>
          Header
        </TairoSubsidebarHeader>
        <TairoSubsidebarContent>
          <TairoSubsidebarLink to="/dashboards/personal-3">
            <Icon name="solar:spedometer-middle-linear" class="size-4 text-muted-500 dark:text-muted-400" />
            <span>Dashboard</span>
          </TairoSubsidebarLink>

          <TairoSubsidebarCollapsible
            :children="[
              {
                label: 'Gateways',
                to: '#',
              },
              {
                label: 'Statistics',
                to: '#',
              },
              {
                label: 'API Endpoints',
                to: '#',
              },
            ]"
          >
            <template #trigger>
              <TairoSubsidebarCollapsibleTrigger>
                <Icon name="solar:spedometer-middle-linear" class="size-4 text-muted-500 dark:text-muted-400" />
                <span>Dashboard</span>
              </TairoSubsidebarCollapsibleTrigger>
            </template>
          </TairoSubsidebarCollapsible>

          <TairoSubsidebarCollapsible>
            <template #trigger>
              <TairoSubsidebarCollapsibleTrigger>
                <Icon name="solar:shop-linear" class="size-4 text-muted-500 dark:text-muted-400" />
                <span>Test</span>
              </TairoSubsidebarCollapsibleTrigger>
            </template>

            <TairoSubsidebarCollapsibleLink to="/dashboards/personal-3">
              Overview
            </TairoSubsidebarCollapsibleLink>
            <TairoSubsidebarCollapsibleLink to="#">
              Reports
            </TairoSubsidebarCollapsibleLink>
            <TairoSubsidebarCollapsibleLink to="#">
              Forecast
            </TairoSubsidebarCollapsibleLink>
          </TairoSubsidebarCollapsible>

          <TairoSubsidebarCollapsible
            icon="solar:card-linear"
            label="Payments"
            :children="[
              {
                label: 'Gateways',
                to: '#',
              },
              {
                label: 'Statistics',
                to: '#',
              },
              {
                label: 'API Endpoints',
                to: '#',
              },
            ]"
          />
        </TairoSubsidebarContent>
      </TairoSubsidebar>

      <TairoSubsidebar value="subsidebar-2">
        <TairoSubsidebarHeader>
          <span>Subsidebar 2</span>

          <BaseDropdown
            :bindings="{
              content: { side: 'bottom' },
              portal: { to: '#teleports' },
            }"
          >
            <template #button>
              <BaseChip pusle size="xs" class="ms-auto">
                <Icon name="solar:bell-line-duotone" class="size-4 " />
              </BaseChip>
            </template>

            <BaseDropdownItem>
              test
            </BaseDropdownItem>
          </BaseDropdown>
        </TairoSubsidebarHeader>
        <BaseMessage variant="info" class="mx-4 my-2">
          Hello, World!
        </BaseMessage>
      </TairoSubsidebar>

      <TairoSubsidebar value="subsidebar-3">
        <TairoSubsidebarContent class="px-1!">
          <NuxtLink
            v-for="i in 26"
            :key="i"
            to="#"
            class="flex h-14 w-full items-center justify-center hover:bg-muted-100 dark:hover:bg-muted-900 rounded-lg transitions-colors duration-100"
            :class="i === 1 ? 'bg-primary-100 dark:bg-primary-950 rounded-s-none border-s border-primary-500' : ''"
          >
            <BaseAvatar
              size="xs"
              :src="`/img/avatars/${i}.svg`"
            />
          </NuxtLink>
        </TairoSubsidebarContent>
      </TairoSubsidebar>
    </TairoSidebarLayoutNav>

    <TairoSidebarLayoutContent>
      <slot />
    </TairoSidebarLayoutContent>

    <TairoPanels />
  </TairoSidebarLayout>
</template>
