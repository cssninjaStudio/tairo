<script setup lang="ts">
import { useDocumentationMenu } from '../composables/menu'
import { useDocumentationRoutes } from '../composables/routes'
import { hightlightDocumentationSearch } from '../utils/highlight'

const { displayMode, filter } = useDocumentationMenu()
const { routesByCategory, categoryOrders } = useDocumentationRoutes()

const show = reactive({
  'Base Forms': true,
  'Base UI Elements': true,
  'Layout Elements': true,
  Addons: true,
  Uncategorized: true,
} as Record<string, boolean>)

defineEmits<{
  (event: 'close'): void
}>()
</script>

<template>
  <TairoSubsidebar>
    <template #header>
      <DocSubsidebarComponentsHeader />
    </template>

    <div>
      <template v-for="category in categoryOrders">
        <div v-if="routesByCategory[category]" :key="category">
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
              <Icon
                v-if="!show[category]"
                name="mdi:minus-box-outline"
                class="h-4 w-4"
              />
              <Icon v-else name="mdi:plus-box-outline" class="h-4 w-4" />
            </div>
          </button>
          <ul v-show="filter || show[category]">
            <li
              v-for="route in routesByCategory[category]"
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
                    ) in (route.meta?.documentation as any)?.components"
                    :key="component + index"
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
                    <span
                      v-html="hightlightDocumentationSearch(component, filter)"
                    ></span>
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
                    <span v-html="hightlightDocumentationSearch(composable, filter)"></span>
                  </div> -->
                </template>
                <span
                  v-else
                  class="font-sans text-sm"
                  v-html="hightlightDocumentationSearch((route.meta as any)?.title, filter)"
                ></span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </TairoSubsidebar>
</template>
