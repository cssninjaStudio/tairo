<script setup lang="ts">
const isSwitcherOpen = useState('switcher-open', () => false)
</script>

<template>
  <TairoSidenavLayout>
    <TairoSidenavSidebar>
      <TairoSidenavSidebarHeader>
        <NuxtLink to="/">
          <TairoLogoText class="text-primary-500 h-6 w-auto" />
        </NuxtLink>
        <div class="ms-auto scale-[0.8]">
          <BaseThemeSwitch />
        </div>
      </TairoSidenavSidebarHeader>
      <TairoSidenavLinks class="p-4 grow">
        <TairoSidenavCollapsible>
          <template #trigger>
            <TairoSidenavCollapsibleTrigger icon="solar:sidebar-minimalistic-linear" label="Dashboards" />
          </template>
          <TairoSidenavCollapsibleLink to="/" label="Personal V1" />
          <TairoSidenavCollapsibleLink to="/" label="Personal V2" />
          <TairoSidenavCollapsibleLink to="/" label="Personal V3" />
        </TairoSidenavCollapsible>
        <TairoSidenavCollapsible>
          <template #trigger>
            <TairoSidenavCollapsibleTrigger
              icon="solar:widget-linear"
              label="Widgets"
            />
          </template>
          <TairoSidenavCollapsibleLink
            to="/"
            label="Widgets v1"
          />
          <TairoSidenavCollapsibleLink
            to="/"
            label="Widgets v2"
          />
          <TairoSidenavCollapsibleLink
            to="/"
            label="Widgets v3"
          />
        </TairoSidenavCollapsible>
        <TairoSidenavCollapsible>
          <template #trigger>
            <TairoSidenavCollapsibleTrigger
              icon="solar:widget-4-linear"
              label="Applications"
            />
          </template>
          <TairoSidenavCollapsibleLink
            to="/"
            label="Widgets v1"
          />
          <TairoSidenavCollapsibleLink
            to="/"
            label="Widgets v2"
          />
          <TairoSidenavCollapsibleLink
            to="/"
            label="Widgets v3"
          />
        </TairoSidenavCollapsible>
        <TairoSidenavCollapsible>
          <template #trigger>
            <TairoSidenavCollapsibleTrigger
              icon="solar:widget-3-linear"
              label="Widgets"
            />
          </template>
          <TairoSidenavCollapsibleLink
            to="/"
            label="Widgets v1"
          />
          <TairoSidenavCollapsibleLink
            to="/"
            label="Widgets v2"
          />
          <TairoSidenavCollapsibleLink
            to="/"
            label="Widgets v3"
          />
        </TairoSidenavCollapsible>
        <TairoSidenavSidebarDivider />
        <TairoSidenavLink to="/" icon="solar:bolt-linear" label="Daily perks" count="3" />
        <TairoSidenavLink icon="solar:palette-round-linear" label="Customize" @click="isSwitcherOpen = true" />
        <TairoSidenavSidebarDivider />
        <BaseHeading size="xs" weight="medium" class="uppercase mt-2 mb-3">
          Recently viewed
        </BaseHeading>
        <TairoSidenavLink to="/">
          <BaseAvatar size="xxs" src="/img/avatars/15.svg" />
          <span class="relative">Joshua M.</span>
        </TairoSidenavLink>
        <TairoSidenavLink to="/">
          <BaseAvatar size="xxs" src="/img/avatars/3.svg" />
          <span class="relative">Chris G.</span>
          <span class="ms-auto bg-muted-50 text-muted-700 ring-muted-300 dark:bg-muted-800 dark:text-muted-200 dark:ring-muted-700 relative ms-auto inline-flex shrink-0 items-center rounded-sm px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset">
            5
          </span>
        </TairoSidenavLink>
        <TairoSidenavLink to="/">
          <BaseAvatar size="xxs" src="/img/avatars/16.svg" />
          <span class="relative">Hermann M.</span>
        </TairoSidenavLink>
        <TairoSidenavLink to="/">
          <BaseAvatar size="xxs" src="/img/avatars/25.svg" />
          <span class="relative">Helen C.</span>
        </TairoSidenavLink>
        <TairoSidenavSidebarDivider />
        <BaseHeading size="xs" weight="medium" class="uppercase mt-2 mb-3">
          Companies
        </BaseHeading>
        <TairoSidenavLink to="/">
          <BaseAvatar size="xxs" src="/img/icons/logos/okano.svg" />
          <span class="relative">Okano LLC</span>
        </TairoSidenavLink>
        <TairoSidenavLink to="/">
          <BaseAvatar size="xxs" src="/img/icons/logos/nitro.svg" />
          <span class="relative">Nitro LLC</span>
        </TairoSidenavLink>
        <TairoSidenavLink to="/">
          <BaseAvatar size="xxs" src="/img/icons/logos/flashlite.svg" />
          <span class="relative">Flashlite LLC</span>
        </TairoSidenavLink>
      </TairoSidenavLinks>
      <TairoSidenavLinks class="p-4 shrink-0">
        <TairoSidenavLink to="/">
          <BaseAvatar size="xxs" src="/img/avatars/10.svg" />
          <span class="relative">My Account</span>
        </TairoSidenavLink>
      </TairoSidenavLinks>
    </TairoSidenavSidebar>
    <TairoSidenavLayoutContent>
      <slot />
    </TairoSidenavLayoutContent>
    <TairoPanels />
  </TairoSidenavLayout>
</template>
