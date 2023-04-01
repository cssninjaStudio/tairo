<script setup lang="ts">
defineEmits<{
  (event: 'close'): void
}>()

const { docRoutesByCategory: routesByCategory, categoryOrders } =
  await useDocumentationRoutes()

const route = useRoute()

const show = reactive({
  'Base Forms': true,
  'Base UI Elements': true,
  'Layout Elements': true,
  Addons: true,
  Uncategorized: true,
} as Record<string, boolean>)

const navigation = [
  {
    title: 'Documentation Hub',
    _path: '/documentation',
  },
]

const sidebar = reactive(useSidebar())
const { xl } = useTailwindBreakpoints()

function onLinkClick() {
  if (xl.value) {
    return
  }

  sidebar.toggle()
}
</script>

<template>
  <TairoSubsidebar>
    <template #header>
      <TairoSubsidebarHeader />
    </template>

    <div>
      <ul>
        <li
          v-for="link in navigation"
          :key="link._path"
          class="mb-1 flex min-h-[2rem] w-full items-center"
        >
          <NuxtLink
            :to="link._path"
            :class="[route.path === link._path && 'text-primary-500']"
            class="nui-focus text-muted-400 hover:text-primary-500 focus-visible:text-primary-500 group flex w-full flex-row items-center transition-colors duration-300 focus-within:outline-0 focus-visible:outline-1"
            @click.passive="onLinkClick"
          >
            <span class="font-sans text-sm">{{ link?.title }}</span>
          </NuxtLink>
        </li>
      </ul>

      <template v-for="category in categoryOrders">
        <div v-if="routesByCategory[category]" :key="category">
          <button
            v-if="category !== 'Uncategorized'"
            type="button"
            class="nui-focus group mb-1 mt-8 flex min-h-[2rem] w-full items-center justify-between focus-within:outline-0 focus-visible:outline-1"
            @click="show[category] = !show[category]"
          >
            <span
              class="text-muted-500 mt-1 font-sans text-[.7rem] font-medium uppercase"
            >
              {{ category }}
            </span>
            <div
              class="text-muted-400 group-hover:text-primary-400 group-focus-visible:text-primary-400 dark:text-muted-500"
            >
              <Icon
                v-if="show[category]"
                name="mdi:minus-box-outline"
                class="h-4 w-4"
              />
              <Icon v-else name="mdi:plus-box-outline" class="h-4 w-4" />
            </div>
          </button>
          <ul v-show="show[category]">
            <li
              v-for="link in routesByCategory[category]"
              :key="link._path"
              class="mb-1 flex min-h-[2rem] w-full items-center"
            >
              <NuxtLink
                :to="link._path"
                :class="[route.path === link._path && 'text-primary-500']"
                exact-active-class="text-primary-500"
                class="nui-focus text-muted-400 hover:text-primary-500 focus-visible:text-primary-500 group flex w-full flex-row items-center transition-colors duration-300 focus-within:outline-0 focus-visible:outline-1"
                @click.passive="onLinkClick"
              >
                <span class="font-sans text-sm">{{ link?.title }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </TairoSubsidebar>
</template>
