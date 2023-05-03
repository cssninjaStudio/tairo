<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

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
  () => {
    if (!search.value) return Promise.resolve([] as any[])

    // @ts-ignore This may be undefined if documentation is disabled
    return queryContent()
      .where({
        $and: [
          {
            _type: 'markdown',
            _empty: false,
          },
          {
            $or: [
              {
                components: { $icontains: search.value },
              },
              {
                title: { $regex: `/${search.value.replaceAll(' ', '.*')}/i` },
              },
              {
                _path: { $regex: `/${search.value.replaceAll(' ', '.*')}/i` },
              },
            ],
          },
        ],
      })
      .limit(6)
      .find() as Promise<any[]>
  },
  {
    watch: [search],
  },
)

const router = useRouter()
const demoPages = computed(() => {
  if (!search.value) return []

  const match: RouteRecordRaw[] = []
  const searchRe = new RegExp(search.value, 'i')

  function traverseRoutes(routes: Readonly<RouteRecordRaw[]>) {
    for (const route of routes) {
      if (route.children) {
        traverseRoutes(route.children)
      } else if (route.path.includes(':')) {
        // skip dynamic route
        continue
      } else if (
        route.meta?.preview?.title &&
        searchRe.test(route.meta?.preview?.title)
      ) {
        match.push(route)
      } else if (
        route.meta?.preview?.description &&
        searchRe.test(route.meta?.preview?.description)
      ) {
        match.push(route)
      }
    }
  }

  traverseRoutes(router.options.routes)

  return match.slice(0, 6)
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
</script>

<template>
  <div>
    <TairoModal
      :classes="{
        wrapper: '!items-start pt-20',
        dialog: 'p-3 rounded-xl',
      }"
      :open="isOpen"
      size="md"
      @close="isOpen = false"
    >
      <BaseFocusLoop next-keys="ArrowDown" prev-keys="ArrowUp">
        <div class="px-2 pb-2">
          <BaseInput
            type="search"
            shape="curved"
            icon="lucide:search"
            v-model="search"
            placeholder="Ex: button or analytics..."
            v-focus
            color-focus
          >
            <template #label>
              <span class="flex w-full justify-between">
                <span>Search</span>
                <span v-if="hasResult" class="text-xs opacity-60">
                  navigate with <kbd>↑</kbd> and <kbd>↓</kbd>
                </span>
                <span v-else-if="!search" class="text-xs opacity-60">
                  press <kbd>{{ metaKey }}</kbd> + <kbd>k</kbd> to open
                </span>
              </span>
            </template>
          </BaseInput>
        </div>

        <div v-if="contentDocsResults?.length">
          <div class="px-3 pt-2">
            <span
              class="nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider"
            >
              Documentation Hub
            </span>
          </div>
          <ul>
            <li v-for="page in contentDocsResults" :key="page?._path" class="">
              <DemoAppSearchResult
                :to="page?._path"
                :search="search"
                :title="page?.title"
                :subtitle="page?._path"
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
            <li v-for="page in demoPagesResults" :key="page?.name" class="">
              <DemoAppSearchResult
                :to="{
                  name: page?.name as string
                }"
                :search="search"
                :title="page?.meta?.preview?.title"
                :subtitle="page?.meta?.preview?.description"
                @click.passive="onClick"
              />
            </li>
          </ul>
        </div>
      </BaseFocusLoop>
      <div class="flex flex-col items-center py-3 text-center">
        <div class="scale-[0.8]">
          <BaseText size="xs" weight="medium" class="text-muted-400"
            >Search by</BaseText
          >
          <TairoLogoText class="text-muted-400 mx-auto w-20" />
        </div>
      </div>
    </TairoModal>
  </div>
</template>
