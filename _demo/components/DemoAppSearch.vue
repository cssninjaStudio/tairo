<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

const isOpen = useState('search-open', () => false)
// const isOpen = ref(false)
const search = ref('')

// this is a local directive (it begins with V..., usable with v-focus)
// that is used to force the focus on input when mounted
const VFocus = {
  mounted(el: HTMLInputElement) {
    el.focus()
  },
}

onKeyStroke('k', (event) => {
  if (event.ctrlKey) {
    event.preventDefault()

    isOpen.value = !isOpen.value
  }
})

const { data: contentDocs, pending } = useAsyncData(
  () => {
    if (!search.value) return Promise.resolve([] as any[])

    // @ts-ignore This may be undefined if documentation is disabled
    return queryContent()
      .where({
        $or: [
          {
            components: { $icontains: search.value },
          },
          {
            title: { $regex: `/${search.value}/i` },
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
      } else if (route.meta?.title && searchRe.test(route.meta?.title)) {
        match.push(route)
      } else if (typeof route.name === 'string' && searchRe.test(route.name)) {
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
  // search.value = ''
}
</script>

<template>
  <div>
    <TairoModal
      :classes="{
        wrapper: '!items-start pt-20',
        dialog: 'p-2',
      }"
      :open="isOpen"
      size="md"
      @close="isOpen = false"
    >
      <BaseFocusLoop next-keys="ArrowDown" prev-keys="ArrowUp">
        <div class="px-2 pb-2">
          <BaseInput
            type="search"
            icon="lucide:search"
            v-model="search"
            placeholder="Search in docs and demo pages"
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
                  press <kbd>ctrl</kbd> + <kbd>k</kbd> to search
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
                :title="page?.meta?.title"
                :subtitle="(page?.name as string)"
                @click.passive="onClick"
              />
            </li>
          </ul>
        </div>
      </BaseFocusLoop>
    </TairoModal>
  </div>
</template>
