<script setup lang="ts">
const {
  activeSidebar,
  sidebars,
  isSidebarOpened,
  toggleActiveSidebar,
  isLayoutModalOpen,
  toggleLayoutModal,
} = useSidebar()

const startSidebars = sidebars.filter(
  (sidebar) => !sidebar.position || sidebar.position === 'start'
)
const endSidebars = sidebars.filter((sidebar) => sidebar.position === 'end')
</script>

<template>
  <div
    class="flex fixed top-0 left-0 h-full z-[60] xl:z-10 pointer-events-none"
  >
    <!-- Icon sidebar -->
    <div
      class="relative flex flex-col w-[80px] h-full bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 z-20 transition-all duration-300 pointer-events-auto"
      :class="isSidebarOpened ? '' : '-translate-x-full xl:translate-x-0'"
    >
      <slot></slot>

      <!-- Top Menu -->
      <div>
        <NavigationSidebarItem
          v-for="sidebar in startSidebars"
          :key="sidebar.name"
          :sidebar="sidebar"
        />
      </div>
      <!-- Bottom Menu -->
      <div class="mt-auto">
        <NavigationSidebarItem
          v-for="sidebar in endSidebars"
          :key="sidebar.name"
          :sidebar="sidebar"
        />

        <slot name="end"></slot>
      </div>
    </div>

    <!-- Menu panel -->
    <div
      v-if="activeSidebar"
      class="relative w-[220px] h-full bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 z-10 transition-all duration-300 pointer-events-auto"
      :class="isSidebarOpened ? '' : '-translate-x-[calc(100%_-_80px)]'"
    >
      <slot
        name="subnav"
        v-bind="{
          activeSidebar,
          sidebars,
          isSidebarOpened,
          toggleActiveSidebar,
        }"
      >
        <!-- Header -->
        <div class="flex items-center h-16 w-full px-6">
          <slot
            name="subnav-header"
            v-bind="{
              activeSidebar,
              sidebars,
              isSidebarOpened,
              toggleActiveSidebar,
            }"
          >
            <h2
              class="font-main text-lg font-semibold text-slate-700 dark:text-white capitalize"
            >
              {{ activeSidebar.name }}
            </h2>
          </slot>
          <button
            type="button"
            class="flex xl:hidden items-center justify-center h-10 w-10 rounded-full ml-auto text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors duration-300"
            @click="isSidebarOpened = false"
          >
            <BaseIcon name="feather:chevron-left" class="w-6 h-6" />
          </button>
        </div>
        <!-- Body -->
        <div
          class="relative h-[calc(100%_-_64px)] w-full overflow-y-auto slimscroll px-6"
        >
          <component
            :is="activeSidebar.subnav"
            v-if="activeSidebar?.subnav"
          ></component>
        </div>
      </slot>

      <BaseModal
        :open="isLayoutModalOpen"
        size="md"
        footer
        @close="toggleLayoutModal"
      >
        <template #header>
          <div class="w-full flex items-center justify-between pt-4 pb-2 px-4">
            <h3
              class="font-main text-lg font-medium leading-6 text-slate-900 dark:text-white"
            >
              Select a Layout
            </h3>
            <BaseButtonClose @click="toggleLayoutModal" />
          </div>
        </template>

        <BaseTabs
          selected="sidebar"
          :tabs="[
            { label: 'Sidebar', value: 'sidebar' },
            { label: 'Sideblock', value: 'sideblock' },
          ]"
        >
          <template #tab="{ activeValue }">
            <div v-if="activeValue === 'sidebar'">
              <div class="grid grid-cols-2 gap-4 px-4 pb-4">
                <!-- Layout 1 -->
                <NuxtLink
                  to="/"
                  class="relative block text-center"
                  @keydown.space.prevent="
                    () => {
                      toggleLayoutModal
                    }
                  "
                  @click.passive="
                    () => {
                      toggleLayoutModal
                    }
                  "
                >
                  <div class="relative max-w-[110px] mx-auto">
                    <img
                      class="block dark:hidden"
                      src="/img/icons/layouts/layout-1.svg"
                      alt=""
                    />
                    <img
                      class="hidden dark:block"
                      src="/img/icons/layouts/layout-1-dark.svg"
                      alt=""
                    />
                    <div
                      class="absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-success-500 text-white rounded-full"
                    >
                      <BaseIcon name="lucide:check" class="w-3 h-3 block" />
                    </div>
                  </div>

                  <BaseHeading
                    as="h4"
                    weight="semibold"
                    size="md"
                    class="text-slate-800 dark:text-white"
                  >
                    Sidebar
                  </BaseHeading>
                  <BaseParagraph size="sm" class="text-slate-400">
                    Dual sidebar default
                  </BaseParagraph>
                </NuxtLink>
                <!-- Layout 1 -->
                <NuxtLink
                  to="/"
                  class="relative block text-center"
                  @keydown.space.prevent="
                    () => {
                      toggleLayoutModal
                    }
                  "
                  @click.passive="
                    () => {
                      toggleLayoutModal
                    }
                  "
                >
                  <div class="relative max-w-[110px] mx-auto">
                    <img
                      class="block dark:hidden"
                      src="/img/icons/layouts/layout-2.svg"
                      alt=""
                    />
                    <img
                      class="hidden dark:block"
                      src="/img/icons/layouts/layout-2-dark.svg"
                      alt=""
                    />
                    <div
                      class="absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-success-500 text-white rounded-full"
                    >
                      <BaseIcon name="lucide:check" class="w-3 h-3 block" />
                    </div>
                  </div>

                  <BaseHeading
                    as="h4"
                    weight="semibold"
                    size="md"
                    class="text-slate-800 dark:text-white"
                  >
                    Sidebar
                  </BaseHeading>
                  <BaseParagraph size="sm" class="text-slate-400">
                    Dual sidebar colored
                  </BaseParagraph>
                </NuxtLink>
              </div>
            </div>
            <div
              v-else-if="activeValue === 'sideblock'"
              class="font-text text-sm text-slate-500 dark:text-slate-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra Aristonem
              dicuntur a Chryippo. Duo Reges: constructio interrete.
            </div>
          </template>
        </BaseTabs>

        <template #footer>
          <!-- Modal footer content -->
        </template>
      </BaseModal>
    </div>
  </div>
</template>
