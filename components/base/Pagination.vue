<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationOptions } from 'vue-router'

export interface PaginationProps {
  itemPerPage: number
  totalItems: number
  currentPage?: number
  maxLinksDisplayed?: number
  noRouter?: boolean
  routerQueryKey?: string
}

export interface PaginationEmits {
  (e: 'update:currentPage', currentPage: number): void
}

const emits = defineEmits<PaginationEmits>()
const props = withDefaults(defineProps<PaginationProps>(), {
  currentPage: 1,
  maxLinksDisplayed: 4,
  useRouter: true,
  routerQueryKey: 'page',
})

const route = useRoute()
const lastPage = computed(
  () => Math.ceil(props.totalItems / props.itemPerPage) || 1
)
const totalPageDisplayed = computed(() =>
  lastPage.value > props.maxLinksDisplayed + 2
    ? props.maxLinksDisplayed + 2
    : lastPage.value
)
const pages = computed(() => {
  const _pages = []
  let firstButton = props.currentPage - Math.floor(totalPageDisplayed.value / 2)
  let lastButton =
    firstButton +
    (totalPageDisplayed.value - Math.ceil(totalPageDisplayed.value % 2))

  if (firstButton < 1) {
    firstButton = 1
    lastButton = firstButton + (totalPageDisplayed.value - 1)
  }

  if (lastButton > lastPage.value) {
    lastButton = lastPage.value
    firstButton = lastButton - (totalPageDisplayed.value - 1)
  }

  for (let page = firstButton; page <= lastButton; page += 1) {
    if (page === firstButton || page === lastButton) {
      continue
    }

    _pages.push(page)
  }

  return _pages
})

const showLastLink = computed(() => lastPage.value > 1)

const paginatedLink = (page = 1) => {
  if (props.noRouter) {
    return {}
  }

  const _page = Math.max(1, Math.min(page, lastPage.value))
  const query: any = {
    ...route.query,
  }

  if (props.routerQueryKey) {
    query[props.routerQueryKey] = _page <= 1 ? undefined : _page
  }

  return {
    name: route.name,
    params: route.params,
    query,
  } as RouteLocationOptions
}
const handleLinkClick = (e: MouseEvent, page = 1) => {
  const _page = Math.max(1, Math.min(page, lastPage.value))
  emits('update:currentPage', _page)

  if (props.noRouter) {
    e.preventDefault()
    e.stopPropagation()

    return false
  }
}
</script>

<template>
  <div class="flex">
    <ul class="flex">
      <slot name="before-pagination"></slot>
      <!-- Link -->
      <li>
        <NuxtLink
          :to="paginatedLink(1)"
          tabindex="0"
          :class="[currentPage === 1 && 'is-current']"
          @keydown.space.prevent="(e:any) => (e.target as HTMLAnchorElement).click()"
          @click="(e:any) => handleLinkClick(e, 1)"
        >
          1
        </NuxtLink>
      </li>

      <!-- Ellipsis -->
      <li v-if="showLastLink && (pages.length === 0 || pages[0] > 2)">
        <span>…</span>
      </li>

      <!-- Link -->
      <li v-for="page in pages" :key="page">
        <NuxtLink
          :to="paginatedLink(page)"
          tabindex="0"
          :aria-current="currentPage === page ? 'page' : undefined"
          :class="[currentPage === page && 'is-current']"
          @keydown.space.prevent="(e:any) => (e.target as HTMLAnchorElement).click()"
          @click="(e:any) => handleLinkClick(e, page)"
        >
          {{ page }}
        </NuxtLink>
      </li>

      <!-- Ellipsis -->
      <li v-if="showLastLink && pages[pages.length - 1] < lastPage - 1">
        <span>…</span>
      </li>

      <!-- Link -->
      <li v-if="showLastLink">
        <NuxtLink
          :to="paginatedLink(lastPage)"
          tabindex="0"
          :class="[currentPage === lastPage && 'is-current']"
          @keydown.space.prevent="(e:any) => (e.target as HTMLAnchorElement).click()"
          @click="(e:any) => handleLinkClick(e, lastPage)"
        >
          {{ lastPage }}
        </NuxtLink>
      </li>
      <slot name="after-pagination"></slot>
    </ul>

    <slot name="before-navigation"></slot>

    <!-- Previous -->
    <NuxtLink
      :to="paginatedLink(currentPage - 1)"
      tabindex="0"
      @keydown.space.prevent="(e:any) => (e.target as HTMLAnchorElement).click()"
      @click="(e:any) => handleLinkClick(e, currentPage - 1)"
    >
      <i aria-hidden="true" class="i-lucide-chevron-left w-5 h-5"></i>
    </NuxtLink>

    <!-- Next -->
    <NuxtLink
      :to="paginatedLink(currentPage + 1)"
      tabindex="0"
      @keydown.space.prevent="(e:any) => (e.target as HTMLAnchorElement).click()"
      @click="(e:any) => handleLinkClick(e, currentPage + 1)"
    >
      <i aria-hidden="true" class="i-lucide-chevron-right w-5 h-5"></i>
    </NuxtLink>
    <slot name="after-navigation"></slot>
  </div>
</template>
