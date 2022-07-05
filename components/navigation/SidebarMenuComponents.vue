<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

type ComponentsTree = Record<string, RouteRecordRaw[]>

const categoryOrders = [
  'Uncategorized',
  'Content',
  'Interaction',
  'Display',
  'Forms',
] as const

const { displayMode, isSearching, filter, reset } = useDocumentationMenu()
const router = useRouter()

const show = reactive({
  Uncategorized: true,
  Content: true,
  Interaction: true,
  Display: true,
  Forms: true,
})

const componentHubRoute = router.resolve('/components')
const componentChildRoutes = computed(() => {
  const childrens = componentHubRoute.matched[0]?.children
    ?.filter((route) => {
      if (!filter.value) {
        return true
      }

      if (displayMode.value === 'category') {
        return route.meta?.title
          ?.toLowerCase()
          .includes(filter.value.toLowerCase())
      }

      return route.meta?.documentation?.components?.some((component) =>
        component?.toLowerCase().includes(filter.value.toLowerCase())
      )
    })
    ?.reduce<ComponentsTree>((acc, child) => {
      if (child) {
        const category = child.meta?.documentation?.category ?? 'Uncategorized'
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

const hightlightSearch = (text?: string, search?: string): string => {
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
</script>

<template>
  <div>
    <template v-for="category in categoryOrders">
      <div v-if="componentChildRoutes[category]" :key="category">
        <button
          v-if="category !== 'Uncategorized'"
          type="button"
          class="group flex justify-between items-center min-h-[2rem] mt-4 mb-1 w-full tairo-focus focus-within:outline-0 focus-visible:outline-1"
          @click="show[category] = !show[category]"
        >
          <span
            class="font-text text-[.7rem] font-medium uppercase text-slate-500"
          >
            {{ category }}
          </span>
          <div
            v-if="!filter"
            class="text-slate-400 dark:text-slate-500 group-hover:text-primary-400 group-focus-visible:text-primary-400"
          >
            <BaseIcon
              v-if="!show[category]"
              name="mdi:minus-box-outline"
              class="w-4 h-4"
            />
            <BaseIcon v-else name="mdi:plus-box-outline" class="w-4 h-4" />
          </div>
        </button>
        <ul v-show="filter || show[category]">
          <li
            v-for="route in componentChildRoutes[category]"
            :key="route.name"
            class="flex items-center min-h-[2rem] mb-1 w-full"
          >
            <NuxtLink
              :to="{ name: route.name }"
              :class="
                displayMode === 'component'
                  ? 'flex-col'
                  : 'flex-row items-center'
              "
              class="flex group w-full text-slate-400 hover:text-primary-500 focus-visible:text-primary-500 transition-colors duration-300 tairo-focus focus-within:outline-0 focus-visible:outline-1"
            >
              <template
                v-if="
                  route.meta?.documentation?.components &&
                  displayMode === 'component'
                "
              >
                <div
                  v-for="(component, index) in route.meta?.documentation
                    ?.components"
                  :key="component"
                  class="truncate font-mono before:content-['<'] after:content-['_/>']"
                  :class="
                    index === 0
                      ? 'text-sm'
                      : 'text-xs text-slate-300 group-hover:text-primary-300 dark:text-slate-500 dark:group-hover:text-primary-400/50'
                  "
                  :title="`<${component} />`"
                  v-html="hightlightSearch(component, filter)"
                ></div>
              </template>
              <span
                v-else
                class="font-text text-sm"
                v-html="hightlightSearch(route.meta?.title, filter)"
              ></span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>
