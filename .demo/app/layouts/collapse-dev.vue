<script setup lang="ts">
const isSwitcherOpen = useState('switcher-open', () => false)
</script>

<template>
  <TairoCollapseLayout>
    <TairoCollapseSidebar>
        <TairoCollapseSidebarHeader v-slot="{ isCollapsed }">
          <TairoLogo v-if="isCollapsed" class="size-8 text-primary-heavy dark:text-primary-light mx-auto" />
          <TairoLogoText v-else class="h-7 text-primary-heavy dark:text-primary-light mx-3" />
        </TairoCollapseSidebarHeader>
        <TairoCollapseSidebarLinks class="px-4 space-y-1 grow">
          <TairoCollapseSidebarClose class="my-3" />
          <TairoCollapseCollapsible>
            <template #trigger>
              <TairoCollapseCollapsibleTrigger
                icon="solar:sidebar-minimalistic-linear"
                :label="'Dashboards'"
              />
            </template>
            <TairoCollapseCollapsibleLink
              :to="'/'"
              :label="'Personal v1'"
            />
            <TairoCollapseCollapsibleLink
              :to="'/'"
              :label="'Personal v2'"
            />
            <TairoCollapseCollapsibleLink
              :to="'/'"
              :label="'Personal v3'"
            />
          </TairoCollapseCollapsible>
          <TairoCollapseCollapsible>
            <template #trigger>
              <TairoCollapseCollapsibleTrigger
                icon="solar:widget-linear"
                :label="'Widgets'"
              />
            </template>
            <TairoCollapseCollapsibleLink
              :to="'/'"
              :label="'Widgets v1'"
            />
            <TairoCollapseCollapsibleLink
              :to="'/'"
              :label="'Widgets v2'"
            />
            <TairoCollapseCollapsibleLink
              :to="'/'"
              :label="'Widgets v3'"
            />
          </TairoCollapseCollapsible>
          <TairoCollapseCollapsible>
            <template #trigger>
              <TairoCollapseCollapsibleTrigger
                icon="solar:widget-4-linear"
                :label="'Applications'"
              />
            </template>
            <TairoCollapseCollapsibleLink
              :to="'/'"
              :label="'Widgets v1'"
            />
            <TairoCollapseCollapsibleLink
              :to="'/'"
              :label="'Widgets v2'"
            />
            <TairoCollapseCollapsibleLink
              :to="'/'"
              :label="'Widgets v3'"
            />
          </TairoCollapseCollapsible>
          <TairoCollapseCollapsible>
            <template #trigger>
              <TairoCollapseCollapsibleTrigger
                icon="solar:sidebar-minimalistic-linear"
                :label="'Dashboards'"
              />
            </template>
            <TairoCollapseCollapsibleLink
              :to="'/'"
              :label="'Personal v1'"
            />
            <TairoCollapseCollapsibleLink
              :to="'/'"
              :label="'Personal v2'"
            />
            <TairoCollapseCollapsibleLink
              :to="'/'"
              :label="'Personal v3'"
            />
          </TairoCollapseCollapsible>
          <TairoCollapseCollapsible>
            <template #trigger>
              <TairoCollapseCollapsibleTrigger
                icon="solar:widget-linear"
                :label="'Widgets'"
              />
            </template>
            <TairoCollapseCollapsibleLink
              :to="'/'"
              :label="'Widgets v1'"
            />
            <TairoCollapseCollapsibleLink
              :to="'/'"
              :label="'Widgets v2'"
            />
            <TairoCollapseCollapsibleLink
              :to="'/'"
              :label="'Widgets v3'"
            />
          </TairoCollapseCollapsible>
          <TairoCollapseCollapsible>
            <template #trigger>
              <TairoCollapseCollapsibleTrigger
                icon="solar:widget-4-linear"
                :label="'Applications'"
              />
            </template>
            <TairoCollapseCollapsibleLink
              :to="'/'"
              :label="'Widgets v1'"
            />
            <TairoCollapseCollapsibleLink
              :to="'/'"
              :label="'Widgets v2'"
            />
            <TairoCollapseCollapsibleLink
              :to="'/'"
              :label="'Widgets v3'"
            />
          </TairoCollapseCollapsible>
          <TairoCollapseLink
            :to="'/'"
            :icon="'solar:calendar-linear'"
            :label="'Schedule'"
          />
        </TairoCollapseSidebarLinks>
        <TairoCollapseSidebarLinks class="px-4 pb-4 space-y-1">
          <TairoCollapseLink
            v-slot="{ isCollapsed }"
            :to="'/'"
          >
            <BaseAvatar size="xxs" src="/img/avatars/10.svg" />
            <span v-if="!isCollapsed" class="-ms-1">Account</span>
          </TairoCollapseLink>
        </TairoCollapseSidebarLinks>
    </TairoCollapseSidebar>

    <TairoCollapseLayoutContent>
      <slot />
    </TairoCollapseLayoutContent>

    <TairoPanels />
  </TairoCollapseLayout>
</template>
