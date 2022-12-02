<script setup lang="ts">
const { activeSidebar, sidebars, isSidebarOpened, toggleActiveSidebar } =
  useSidebar()

const startSidebars = sidebars.filter(
  (sidebar) => !sidebar.position || sidebar.position === 'start',
)
const endSidebars = sidebars.filter((sidebar) => sidebar.position === 'end')
</script>

<template>
  <div
    class="pointer-events-none fixed top-0 left-0 z-[60] flex h-full xl:z-10"
  >
    <!-- Icon sidebar -->
    <div
      class="pointer-events-auto relative z-20 flex h-full w-[80px] flex-col border-r border-muted-200 bg-white transition-all duration-300 dark:border-muted-700 dark:bg-muted-800"
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
      class="pointer-events-auto relative z-10 h-full w-[220px] border-r border-muted-200 bg-white transition-all duration-300 dark:border-muted-700 dark:bg-muted-800"
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
        <div class="flex h-screen flex-col">
          <component
            :is="activeSidebar.subnavHeader"
            v-if="activeSidebar.subnavHeader"
          ></component>

          <!-- Body -->
          <div
            v-if="activeSidebar?.subnav"
            class="slimscroll relative h-full w-full overflow-y-auto"
          >
            <div class="px-6 pb-8">
              <component :is="activeSidebar.subnav"></component>
            </div>

            <div
              class="pointer-events-none fixed bottom-0 z-10 h-10 w-[212px] bg-gradient-to-t from-white to-transparent dark:from-muted-800"
            ></div>
          </div>
        </div>
      </slot>
      <!-- 
      <BaseModal
        :open="isLayoutModalOpen"
        size="md"
        footer
        @close="toggleLayoutModal"
      >
        <template #header>
          <div class="flex w-full items-center justify-between px-4 pt-4 pb-2">
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
              <button
                type="button"
                class="relative block text-center"
                @click="toggleLayoutModal"
              >
                <div class="relative mx-auto max-w-[110px]">
                  <NuxtImg
                    class="block dark:hidden"
                    src="/img/icons/layouts/layout-1.svg"
                    alt=""
                  />
                  <NuxtImg
                    class="hidden dark:block"
                    src="/img/icons/layouts/layout-1-dark.svg"
                    alt=""
                  />
                  <div
                    class="absolute top-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-success-500 text-white"
                  >
                    <Icon name="lucide:check" class="block h-3 w-3" />
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
              <button
                type="button"
                class="relative block text-center"
                @click="toggleLayoutModal"
              >
                <div class="relative mx-auto max-w-[110px]">
                  <NuxtImg
                    class="block dark:hidden"
                    src="/img/icons/layouts/layout-2.svg"
                    alt=""
                  />
                  <NuxtImg
                    class="hidden dark:block"
                    src="/img/icons/layouts/layout-2-dark.svg"
                    alt=""
                  />
                  <div
                    class="absolute top-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-success-500 text-white"
                  >
                    <Icon name="lucide:check" class="block h-3 w-3" />
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
            sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
            abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo.
            Duo Reges: constructio interrete.
          </div>
        </template>
        </BaseTabs>

        <template #footer>
        </template>
      </BaseModal> -->
    </div>
  </div>
</template>

<style scoped>
/* Router Link */
.slimscroll :deep(.router-link-exact-active) {
  @apply text-primary-500;
}
</style>
