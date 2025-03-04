<script setup lang="ts">
const route = useRoute()
const isSearchOpen = useState('search-open', () => false)
const { open } = usePanels()
const { isMobileOpen } = useLayoutCollapseContext()
</script>

<template>
  <div class="relative z-10 w-full flex items-center justify-between h-14 mb-6">
    <slot name="start">
      <div class="flex items-center gap-x-5 justify-center">
        <button
          type="button"
          class="flex xl:hidden items-center"
          @click="isMobileOpen = true"
        >
          <span class="flex flex-col gap-1.5">
            <span class="block w-4 h-0.5 bg-muted-500" />
            <span class="block w-5 h-0.5 bg-muted-500" />
          </span>
        </button>
        <BaseHeading size="xl" weight="medium">
          {{ route.meta.title }}
        </BaseHeading>
      </div>
    </slot>
    <slot name="end">
      <div class="flex items-center justify-end gap-x-3">
        <button
          type="button"
          class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex size-8 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4"
          @click="open('language')"
        >
          <img
            class="size-6 rounded-full"
            src="/img/icons/flags/united-states-of-america.svg"
            alt="flag icon"
          >
        </button>
        <button
          type="button"
          class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex size-8 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4"
          @click="open('activity')"
        >
          <Icon name="solar:widget-2-outline" class="text-muted-400 size-4" />
        </button>
        <div
          role="button"
          class="cursor-pointer h-8 w-36 hidden md:flex items-center justify-between bg-white dark:bg-muted-900 text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:ring-muted-300 dark:hover:ring-muted-700 gap-2 ps-3 pe-1 py-1 rounded-md ring-1 ring-muted-200 dark:ring-muted-800 transition-colors duration-300"
          @click="isSearchOpen = true"
        >
          <div class="pointer-events-none">
            <span class="font-sans text-sm">
              Search...
            </span>
          </div>
          <div class="flex gap-1">
            <BaseKbd
              size="sm"
              variant="default"
              class="!font-semibold h-6!"
            >
              Ctrl
            </BaseKbd>
            <BaseKbd
              size="sm"
              variant="default"
              class="!px-2 !font-semibold h-6!"
            >
              K
            </BaseKbd>
          </div>
        </div>
        <BaseDropdown
          variant="default"
          :bindings="{
            content: {
              align: 'end',
              sideOffset: 10,
            },
          }"
        >
          <template #button>
            <button
              type="button"
            >
              <BaseChip size="sm" color="custom" :offset="3" class="text-success-500">
                <img
                  src="/img/avatars/10.svg"
                  class="size-8 rounded-full object-cover"
                >
              </BaseChip>
            </button>
          </template>
          <BaseDropdownItem>Leads</BaseDropdownItem>
          <BaseDropdownItem>Projects</BaseDropdownItem>
          <BaseDropdownItem>Team</BaseDropdownItem>
          <BaseDropdownItem>Reports</BaseDropdownItem>
          <BaseDropdownItem>
            Settings
            <template #end>
              <BaseKbd size="sm">
                <span class="text-xs font-mono">⌘</span>
              </BaseKbd>
              <BaseKbd size="sm">
                <span class="text-xs font-mono px-0.5">P</span>
              </BaseKbd>
            </template>
          </BaseDropdownItem>
        </BaseDropdown>
      </div>
    </slot>
  </div>
</template>
