<script setup lang="ts">
const isSearchOpen = useSearchOpen()
const isSwitcherOpen = useColorSwitcherOpen()
</script>

<template>
  <div class="flex items-center gap-3 flex-1 justify-end">
    <button
      type="button"
      class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 hidden md:flex size-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4"
      @click="
        () => {
          isSwitcherOpen = true
        }
      "
    >
      <Icon
        name="solar:palette-round-linear"
        class="text-muted-400 size-5"
      />
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
    <BaseButton
      size="icon-sm"
      variant="ghost"
      rounded="md"
      class="md:hidden"
      @click="isSearchOpen = true"
    >
      <Icon
        name="lucide:search"
        class="size-5 text-muted-400 dark:text-muted-300"
      />
    </BaseButton>
    <div class="scale-[0.8]">
      <BaseThemeSwitch />
    </div>
    <div class="relative z-10">
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
  </div>
</template>
