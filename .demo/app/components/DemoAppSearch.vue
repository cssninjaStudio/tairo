<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import { onKeyStroke } from '@vueuse/core'
import MiniSearch from 'minisearch'

const router = useRouter()
const isMacLike = useIsMacLike()
const isOpen = useSearchOpen()
const search = ref('')

onKeyStroke('k', (event) => {
  const modifier = isMacLike.value ? event.metaKey : event.ctrlKey
  if (modifier) {
    event.preventDefault()

    isOpen.value = !isOpen.value
  }
})

const { data: contentIndex } = await useAsyncData('search', () => queryCollectionSearchSections('docs'))
const contentMS = new MiniSearch({
  fields: ['title', 'titles', 'content'],
  storeFields: ['title', 'titles', 'content'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
  },
})
watchEffect(() => {
  contentMS.removeAll()
  if (!contentIndex.value) {
    return
  }
  contentMS.addAll(contentIndex.value)
})
const contentResults = computed(() => contentMS.search(toValue(search)).slice(0, 6))

const routesIndex = computed(() => {
  const match: any[] = []
  function traverseRoutes(routes: Readonly<RouteRecordRaw[]>) {
    for (const route of routes) {
      if (route.children) {
        traverseRoutes(route.children)
      }
      else if (route.path.includes(':')) {
        // skip dynamic route
        continue
      }
      else if (!route.name) {
        continue
      }
      else {
        match.push({
          ...(route.meta?.preview || {}),
          id: router.resolve({ name: route.name }).href,
        })
      }
    }
  }

  traverseRoutes(router.options.routes)

  return match
})
const routesMS = new MiniSearch({
  fields: ['title', 'description'],
  storeFields: ['title', 'description'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
  },
})
watchEffect(() => {
  routesMS.removeAll()
  if (!routesIndex.value) {
    return
  }
  routesMS.addAll(routesIndex.value)
})
const routesResults = computed(() => routesMS.search(toValue(search)).slice(0, 6))

const isShurikenSearch = computed(() => search.value.toLowerCase().includes('base') || search.value.toLowerCase().includes('shur'))
const hasResult = computed(() =>
  Boolean(contentResults.value?.length || routesResults.value?.length),
)
function handleSelect(ev: CustomEvent) {
  isOpen.value = false
  if (ev.detail.value?.startsWith('/')) {
    ev.preventDefault()
    router.push(ev.detail.value)
  }
}
</script>

<template>
  <DialogRoot v-model:open="isOpen">
    <DialogPortal>
      <DialogOverlay class="bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0 z-50" />

      <DialogContent
        class="p-2 fixed starting:opacity-0 starting:top-[8%] top-[10%] start-[50%] max-h-[85vh] w-[90vw] max-w-[32rem] translate-x-[-50%] text-sm rounded-lg overflow-hidden border border-white dark:border-muted-700 bg-white dark:bg-muted-800 focus:outline-none z-[100] transition-discrete transition-all duration-200 ease-out"
      >
        <VisuallyHidden>
          <DialogTitle>Tairo search</DialogTitle>
          <DialogDescription>Search in tairo demo and documentation</DialogDescription>
        </VisuallyHidden>

        <ComboboxRoot open ignore-filter :reset-search-term-on-blur="false" :reset-search-term-on-select="false">
          <BaseField class="px-2 pb-2">
            <template #label>
              <BaseText weight="medium" size="sm">
                Search
              </BaseText>
            </template>
            <template #hint>
              <BaseText
                size="xs"
                class="opacity-60 ms-auto"
              >
                navigate with <BaseKbd size="sm" variant="muted">
                  ↑
                </BaseKbd> and <BaseKbd size="sm" variant="muted">
                  ↓
                </BaseKbd>
              </BaseText>
            </template>

            <div class="focus-within:nui-focus flex *:rounded-none *:not-last:border-e-0 *:last:border-s-0 rounded-lg *:first:rounded-s-lg *:last:rounded-e-lg">
              <div class="ps-3 border flex items-center justify-center bg-input-default-bg text-input-default-text/60 border-input-default-border">
                <Icon name="lucide:search" class="size-5" />
              </div>
              <ComboboxInput
                v-model="search"
                class="outline-none w-full text-ellipsis font-sans bg-input-default-bg border-input-default-border border text-input-default-text placeholder:text-input-default-placeholder h-12 text-sm ps-3 pe-4 rounded-lg"
                placeholder="Ex: button or analytics..."
                auto-focus
                @keydown.enter.prevent
              />
            </div>
          </BaseField>

          <ComboboxContent
            v-if="hasResult || search"
            class="p-2 max-h-[50vh] nui-slimscroll overflow-y-auto space-y-6 py-4"
            @escape-key-down="isOpen = false"
          >
            <ComboboxGroup v-if="isShurikenSearch">
              <ComboboxLabel class="px-2 mb-2">
                <BaseTag variant="muted">
                  Looking for Shuriken UI components?
                </BaseTag>
              </ComboboxLabel>
              <ComboboxItem
                value="https://shurikenui.com/docs/components"
                class="scroll-mt-2"
                as-child
              >
                <a href="https://shurikenui.com/docs/components" target="_blank">
                  <DemoAppSearchResult
                    title="Shuriken UI"
                    icon="nui-icon:shurikenui-icon"
                    subtitle="View all Base components documentation"
                  />
                </a>
              </ComboboxItem>
            </ComboboxGroup>
            <ComboboxEmpty v-else-if="search" class="text-center text-muted-400 p-4">
              <BaseParagraph size="sm" class="text-muted-400">
                Ops, no results found for
                "<BaseText weight="medium" size="sm">
                  {{ search }}
                </BaseText>"
              </BaseParagraph>

              <BaseParagraph size="xs" class="text-muted-400 dark:text-muted-500">
                Try to search for something else, like
                <BaseLink class="cursor-pointer" @click="search = 'form'">
                  <BaseText weight="medium" class="text-muted-600 dark:text-muted-400" size="xs">
                    form
                  </BaseText>
                </BaseLink>
                or
                <BaseLink class="cursor-pointer" @click="search = 'analytics'">
                  <BaseText weight="medium" class="text-muted-600 dark:text-muted-400" size="xs">
                    analytics
                  </BaseText>
                </BaseLink>
              </BaseParagraph>
            </ComboboxEmpty>

            <ComboboxGroup v-if="contentResults?.length">
              <ComboboxLabel class="px-2 mb-2">
                <BaseTag variant="muted">
                  Documentation Hub
                </BaseTag>
              </ComboboxLabel>

              <ComboboxItem
                v-for="page in contentResults"
                :key="page?.id"
                :value="page?.id"
                class="scroll-mt-2"
                @select="handleSelect"
              >
                <DemoAppSearchResult
                  :search="search"
                  :title="page?.title"
                  :prefix="page?.titles?.join(' > ') ?? ''"
                  :subtitle="page?.content"
                />
              </ComboboxItem>
            </ComboboxGroup>

            <ComboboxGroup v-if="routesResults?.length">
              <ComboboxLabel class="px-2 mb-2">
                <BaseTag variant="muted">
                  Demo Pages
                </BaseTag>
              </ComboboxLabel>
              <ComboboxItem
                v-for="page in routesResults"
                :key="page?.name"
                :value="page?.id"
                class="scroll-mt-2"
                @select="handleSelect"
              >
                <DemoAppSearchResult
                  :search="search"
                  :title="page?.title"
                  :subtitle="page?.description"
                />
              </ComboboxItem>
            </ComboboxGroup>
          </ComboboxContent>
        </ComboboxRoot>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
