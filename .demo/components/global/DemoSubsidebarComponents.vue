<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

type ComponentsTree = Record<string, RouteRecordRaw[]>

const categoryOrders = [
  'Uncategorized',
  'NUI Forms',
  'NUI Elements',
  'Tairo Elements',
  'Addons',
  // 'Content',
  // 'Interaction',
  // 'Display',
  // 'Forms',
  // 'Addons',
] as const

const { displayMode, isSearching, filter } = useDocumentationMenu()
const router = useRouter()

const show = reactive({
  'NUI Forms': true,
  'NUI Elements': true,
  'Tairo Elements': true,
  Addons: true,
  Uncategorized: true,
})

const componentHubRoute = router.resolve('/components')
const componentChildRoutes = computed(() => {
  const childrens = componentHubRoute.matched[0]?.children
    ?.filter((route) => {
      if (!filter.value) {
        return true
      }

      if (displayMode.value === 'category') {
        return (route.meta as any)?.title
          ?.toLowerCase()
          .includes(filter.value.toLowerCase())
      }

      return (route.meta as any)?.documentation?.components?.some(
        (component: any) =>
          component?.toLowerCase().includes(filter.value.toLowerCase()),
      )
    })
    ?.reduce<ComponentsTree>((acc, child) => {
      if (child) {
        const category =
          (child.meta as any)?.documentation?.category ?? 'Uncategorized'
        acc[category] = acc[category] ?? []
        acc[category].push(child)
      }
      return acc
    }, {})

  Object.keys(childrens).forEach((category) => {
    childrens[category].sort((a, b) => {
      const aName = a.path.toLowerCase()
      const bName = b.path.toLowerCase()

      if (aName < bName) {
        return -1
      }
      if (aName > bName) {
        return 1
      }
      return 0
    })
  })

  return childrens
})

function hightlightSearch(text?: string, search?: string): string {
  if (!text) {
    return ''
  }

  if (!search) {
    return text
  }

  const regex = new RegExp(search, 'gi')

  return text.replace(regex, (part) => {
    return `<mark class="bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-200">${part}</mark>`
  })
}

defineEmits<{
  (event: 'close'): void
}>()
</script>

<template>
  <TairoSubsidebar>
    <template #header>
      <DemoSubsidebarComponentsHeader />
    </template>

    <div>
      <template v-for="category in categoryOrders">
        <div v-if="componentChildRoutes[category]" :key="category">
          <button
            v-if="category !== 'Uncategorized'"
            type="button"
            class="group nui-focus mt-8 mb-1 flex min-h-[2rem] w-full items-center justify-between focus-within:outline-0 focus-visible:outline-1"
            @click="show[category] = !show[category]"
          >
            <span
              class="font-sans text-[.7rem] font-medium uppercase text-muted-500"
            >
              {{ category }}
            </span>
            <div
              class="text-muted-400 group-hover:text-primary-400 group-focus-visible:text-primary-400 dark:text-muted-500"
            >
              <!-- <Icon
                v-if="!show[category]"
                name="mdi:minus-box-outline"
                class="h-4 w-4"
              /> -->
              <!-- <Icon name="mdi:plus-box-outline" class="h-4 w-4" /> -->
            </div>
          </button>
          <ul v-show="filter || show[category]">
            <li
              v-for="route in componentChildRoutes[category]"
              :key="route.name"
              class="mb-1 flex min-h-[2rem] w-full items-center"
            >
              <NuxtLink
                :to="{ name: route.name }"
                :class="
                  displayMode === 'component'
                    ? 'flex-col'
                    : 'flex-row items-center'
                "
                exact-active-class="text-primary-500"
                class="group nui-focus flex w-full text-muted-400 transition-colors duration-300 focus-within:outline-0 hover:text-primary-500 focus-visible:text-primary-500 focus-visible:outline-1"
              >
                <template
                  v-if="
                    (route.meta?.documentation as any)?.components &&
                    displayMode === 'component'
                  "
                >
                  <div
                    v-for="(
                      component, index
                    ) in (route.meta?.documentation as any)?.components.filter(
                      (_: any, idx: number) => idx === 0,
                    )"
                    :key="component"
                    class="truncate font-mono"
                    :class="[
                      index !== 0 && 'text-xs opacity-50',
                      index === 0 && `text-sm`,
                    ]"
                    :title="`<${component} />`"
                  >
                    <!-- <span
                      v-if="
                        index !== 0 &&
                        index !==
                          (route.meta?.documentation as any)?.components?.length - 1
                      "
                    >
                      ├─
                    </span>
                    <span
                      v-else-if="
                        index !== 0 &&
                        index ===
                          (route.meta?.documentation as any)?.components?.length - 1
                      "
                    >
                      └─
                    </span> -->
                    <span>&lt;</span>
                    <span v-html="hightlightSearch(component, filter)"></span>
                    <span>&gt;</span>
                  </div>
                  <!-- <div
                    v-for="composable in (route.meta?.documentation as any)?.composables"
                    :key="composable"
                    class="truncate font-mono text-xs opacity-50"
                    :title="composable"
                  >
                    <Icon
                      name="ri:parentheses-line"
                      class="mr-2 inline-block h-4 w-4"
                    />
                    <span v-html="hightlightSearch(composable, filter)"></span>
                  </div> -->
                </template>
                <span
                  v-else
                  class="font-sans text-sm"
                  v-html="hightlightSearch((route.meta as any)?.title, filter)"
                ></span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </TairoSubsidebar>
</template>
