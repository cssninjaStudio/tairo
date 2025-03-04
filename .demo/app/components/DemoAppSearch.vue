<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import { onKeyStroke } from '@vueuse/core'

const isMacLike = useIsMacLike()
const isOpen = useState('search-open', () => false)
const search = ref('')

onKeyStroke('k', (event) => {
  const modifier = isMacLike.value ? event.metaKey : event.ctrlKey
  if (modifier) {
    event.preventDefault()

    isOpen.value = !isOpen.value
  }
})

const { data: contentDocs } = useAsyncData(
  `doc-search:${search.value}`,
  () => {
    if (!search.value)
      return queryCollection('docs').where('extension', '=', 'md').limit(3).all()

    // @todo: content v3 search
    return queryCollection('docs')
      .select('path', 'title', 'description', 'components')
      .where('extension', '=', 'md')
      .andWhere(q => q.where('title', 'LIKE', `%${search.value}%`)
        .orWhere(sq => sq.where('title', 'LIKE', `${search.value}%`)),
      )
      .limit(6)
      .all()
  },
  {
    watch: [search],
  },
)

const router = useRouter()
const demoPages = computed(() => {
  const match: RouteRecordRaw[] = []
  const searchRe = new RegExp(search.value, 'i')

  function traverseRoutes(routes: Readonly<RouteRecordRaw[]>) {
    for (const route of routes) {
      if (route.children) {
        traverseRoutes(route.children)
      }
      else if (!search.value) {
        match.push(route)
      }
      else if (route.path.includes(':')) {
        // skip dynamic route
        continue
      }
      else if (
        route.meta?.preview?.title
        && searchRe.test(route.meta?.preview?.title)
      ) {
        match.push(route)
      }
      else if (
        route.meta?.preview?.description
        && searchRe.test(route.meta?.preview?.description)
      ) {
        match.push(route)
      }
    }
  }

  traverseRoutes(router.options.routes)

  return match.slice(0, search.value ? 6 : 3)
})

const contentDocsResults = computed(() => {
  const max = 6 - Math.min(demoPages.value.length, 3)
  return contentDocs.value?.slice(0, max)
})
const demoPagesResults = computed(() => {
  const max = 6 - Math.min(contentDocs.value?.length || 0, 3)
  return demoPages.value?.slice(0, max)
})

const hasResult = computed(() =>
  Boolean(contentDocsResults.value?.length || demoPagesResults.value?.length),
)

function onClick() {
  isOpen.value = false
}

const metaKey = useMetaKey()

function handleSelect(ev: CustomEvent) {
  ev.preventDefault()
  // isOpen.value = false
  // eslint-disable-next-line no-console
  console.log('Selected: ', ev.detail.value)
}
</script>

<template>
  <DialogRoot v-model:open="isOpen">
    <DialogPortal>
      <DialogOverlay class="bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0 z-50" />

      <DialogContent
        class="p-2 fixed starting:opacity-0 starting:top-[8%] top-[10%] left-[50%] max-h-[85vh] w-[90vw] max-w-[32rem] translate-x-[-50%] text-sm rounded-lg overflow-hidden border border-white dark:border-muted-700 bg-white dark:bg-muted-800 focus:outline-none z-[100] transition-discrete transition-all duration-200 ease-out"
      >
        <ComboboxRoot open ignore-filter :reset-search-term-on-blur="false" :reset-search-term-on-select="false">
          <BaseField class="px-2 pb-2">
            <template #label>
              <BaseText weight="medium" size="sm">
                Search
              </BaseText>
            </template>
            <template #hint>
              <BaseText
                v-if="hasResult"
                size="xs"
                class="opacity-60 ms-auto"
              >
                navigate with <BaseKbd size="sm" variant="muted">tab</BaseKbd>
              </BaseText>
              <BaseText
                v-else-if="!search"
                size="xs"
                class="opacity-60"
              >
                press <kbd>{{ metaKey }}</kbd> + <kbd>k</kbd> to open
              </BaseText>
            </template>

            <template #default="{ inputAttrs, inputRef }">
              <ComboboxInput v-model="search" as-child>
                <TairoInput
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  v-model="search"
                  v-focus
                  type="search"
                  rounded="lg"
                  size="lg"
                  class="focus-visible:ring-0!"
                  icon="lucide:search"
                  placeholder="Ex: button or analytics..."
                  @keydown.enter.prevent
                />
              </ComboboxInput>
            </template>
          </BaseField>

          <ComboboxContent
            class="p-2 max-h-[50vh] nui-slimscroll overflow-y-auto space-y-6 py-4"
            @escape-key-down="isOpen = false"
          >
            <ComboboxEmpty class="text-center text-muted-foreground p-4">
              No results
            </ComboboxEmpty>

            <ComboboxGroup v-if="contentDocsResults?.length">
              <ComboboxLabel class="px-2 mb-2">
                <BaseTag variant="muted">
                  Documentation Hub
                </BaseTag>
              </ComboboxLabel>

              <ComboboxItem
                v-for="page in contentDocsResults"
                :key="page?.path"
                :value="page"
              >
                <DemoAppSearchResult
                  :to="page?.path"
                  :search="search"
                  :title="page?.title"
                  :subtitle="page?.path"
                  @click.passive="onClick"
                />
              </ComboboxItem>
            </ComboboxGroup>

            <ComboboxGroup v-if="demoPagesResults?.length">
              <ComboboxLabel class="px-2 mb-2">
                <BaseTag variant="muted">
                  Demo Pages
                </BaseTag>
              </ComboboxLabel>
              <ComboboxItem
                v-for="page in demoPagesResults"
                :key="page?.name"
                :value="page"
              >
                <DemoAppSearchResult
                  :to="{
                    name: page?.name as string,
                  }"
                  :search="search"
                  :title="page?.meta?.preview?.title"
                  :subtitle="page?.meta?.preview?.description"
                  @click.passive="onClick"
                />
              </ComboboxItem>
            </ComboboxGroup>
          </ComboboxContent>
        </ComboboxRoot>
      </DialogContent>
    </DialogPortal>

    <!-- <FocusScope trapped loop>
      <BaseField class="px-2 pb-2">
        <template #label>
          <BaseText weight="medium" size="sm">
            Search
          </BaseText>
        </template>
        <template #hint>
          <BaseText
            v-if="hasResult"
            size="xs"
            class="opacity-60 ms-auto"
          >
            navigate with <kbd>↑</kbd> and <kbd>↓</kbd>
          </BaseText>
          <BaseText
            v-else-if="!search"
            size="xs"
            class="opacity-60"
          >
            press <kbd>{{ metaKey }}</kbd> + <kbd>k</kbd> to open
          </BaseText>
        </template>

        <template #default="{ inputAttrs, inputRef }">
          <TairoInput
            :ref="inputRef"
            v-bind="inputAttrs"
            v-model="search"
            v-focus
            type="search"
            rounded="lg"
            icon="lucide:search"
            placeholder="Ex: button or analytics..."
          />
        </template>
      </BaseField>

      <div v-if="contentDocsResults?.length">
        <div class="px-3 pt-2">
          <span
            class="nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider"
          >
            Documentation Hub
          </span>
        </div>
        <ul>
          <li
            v-for="page in contentDocsResults"
            :key="page?.path"
            class=""
          >
            <DemoAppSearchResult
              :to="page?.path"
              :search="search"
              :title="page?.title"
              :subtitle="page?.path"
              :icon="page?.icon?.src"
              @click.passive="onClick"
            />
          </li>
        </ul>
      </div>

      <div v-if="demoPagesResults?.length">
        <div class="px-3 pt-2">
          <span
            class="nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider"
          >
            Demo Pages
          </span>
        </div>
        <ul>
          <li
            v-for="page in demoPagesResults"
            :key="page?.name"
            class=""
          >
            <DemoAppSearchResult
              :to="{
                name: page?.name as string,
              }"
              :search="search"
              :title="page?.meta?.preview?.title"
              :subtitle="page?.meta?.preview?.description"
              @click.passive="onClick"
            />
          </li>
        </ul>
      </div>
    </FocusScope>
    <div class="flex flex-col items-center py-3 text-center">
      <div class="scale-[0.8]">
        <BaseText
          size="xs"
          weight="medium"
          class="text-muted-400"
        >
          Search by
        </BaseText>
        <TairoLogoText class="text-muted-400 mx-auto w-20" />
      </div>
    </div> -->
  </DialogRoot>
</template>
