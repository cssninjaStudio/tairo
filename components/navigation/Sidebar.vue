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
      class="relative flex flex-col w-[80px] h-full bg-white dark:bg-muted-800 border-r border-muted-200 dark:border-muted-700 z-20 transition-all duration-300 pointer-events-auto"
      :class="isSidebarOpened ? '' : '-tranmuted-x-full xl:tranmuted-x-0'"
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
      class="relative w-[220px] h-full bg-white dark:bg-muted-800 border-r border-muted-200 dark:border-muted-700 z-10 transition-all duration-300 pointer-events-auto"
      :class="isSidebarOpened ? '' : '-tranmuted-x-[calc(100%_-_80px)]'"
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
        <div class="flex flex-col h-screen">
          <component
            :is="activeSidebar.subnavHeader"
            v-if="activeSidebar.subnavHeader"
          ></component>

          <!-- Body -->
          <div
            v-if="activeSidebar?.subnav"
            class="relative h-full w-full overflow-y-auto slimscroll"
          >
            <div class="px-6 pb-8">
              <component :is="activeSidebar.subnav"></component>
            </div>

            <div
              class="fixed bottom-0 w-[212px] h-10 z-10 bg-gradient-to-t from-white dark:from-muted-800 to-transparent pointer-events-none"
            ></div>
          </div>
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
              class="font-heading text-lg font-medium leading-6 text-muted-900 dark:text-white"
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
                <button
                  type="button"
                  class="relative block text-center"
                  @click="toggleLayoutModal"
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
                    class="text-muted-800 dark:text-white"
                  >
                    Sidebar
                  </BaseHeading>
                  <BaseParagraph size="sm" class="text-muted-400">
                    Dual sidebar default
                  </BaseParagraph>
                </button>
                <!-- Layout 1 -->
                <button
                  type="button"
                  class="relative block text-center"
                  @click="toggleLayoutModal"
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
                    class="text-muted-800 dark:text-white"
                  >
                    Sidebar
                  </BaseHeading>
                  <BaseParagraph size="sm" class="text-muted-400">
                    Dual sidebar colored
                  </BaseParagraph>
                </button>
              </div>
            </div>
            <div
              v-else-if="activeValue === 'sideblock'"
              class="font-sans text-sm text-muted-500 dark:text-muted-400"
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
