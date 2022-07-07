<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationOptions } from 'vue-router'

export type PaginationShapes = 'straight' | 'rounded' | 'curved' | 'full'

export interface PaginationProps {
  itemPerPage: number
  totalItems: number
  currentPage?: number
  maxLinksDisplayed?: number
  noRouter?: boolean
  routerQueryKey?: string
  shape?: PaginationShapes
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
  shape: 'rounded',
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
  <div class="inline-flex w-full flex-col md:flex-row md:justify-between">
    <FocusLoop
      as="ul"
      class="mb-4 inline-flex flex-wrap gap-2 border border-muted-200 bg-muted-100 p-1 dark:border-muted-600 dark:bg-muted-700 md:mb-0 md:gap-1"
      :class="[
        props.shape === 'rounded' && 'rounded-md',
        props.shape === 'curved' && 'rounded-xl',
        props.shape === 'full' && 'rounded-full',
      ]"
    >
      <slot name="before-pagination"></slot>
      <!-- Link -->
      <li>
        <NuxtLink
          :to="paginatedLink(1)"
          tabindex="0"
          class="flex h-10 w-10 items-center justify-center border font-sans text-sm transition-all duration-300"
          :class="[
            currentPage === 1
              ? 'bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-500/50 dark:shadow-primary-500/20'
              : 'bg-white dark:bg-muted-800 border-muted-200 dark:border-muted-700 hover:bg-muted-100 dark:hover:bg-muted-900 text-muted-500 hover:text-muted-700 dark:hover:text-muted-400',
            props.shape === 'rounded' && 'rounded-md',
            props.shape === 'curved' && 'rounded-xl',
            props.shape === 'full' && 'rounded-full',
          ]"
          @keydown.space="(e:any) => (e.target as HTMLAnchorElement).click()"
          @click="(e:any) => handleLinkClick(e, 1)"
        >
          1
        </NuxtLink>
      </li>

      <!-- Ellipsis -->
      <li v-if="showLastLink && (pages.length === 0 || pages[0] > 2)">
        <span
          class="flex h-10 w-10 items-center justify-center border-muted-200 bg-white font-sans text-sm text-muted-500 dark:border-muted-700 dark:bg-muted-800"
          :class="[
            props.shape === 'rounded' && 'rounded-md',
            props.shape === 'curved' && 'rounded-xl',
            props.shape === 'full' && 'rounded-full',
          ]"
        >
          …
        </span>
      </li>

      <!-- Link -->
      <li v-for="page in pages" :key="page">
        <NuxtLink
          :to="paginatedLink(page)"
          tabindex="0"
          :aria-current="currentPage === page ? 'page' : undefined"
          class="flex h-10 w-10 items-center justify-center font-sans text-sm transition-all duration-300"
          :class="[
            currentPage === page
              ? 'bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-500/50 dark:shadow-primary-500/20'
              : 'bg-white dark:bg-muted-800 border-muted-200 dark:border-muted-700 hover:bg-muted-100 dark:hover:bg-muted-900 text-muted-500 hover:text-muted-700 dark:hover:text-muted-400',
            props.shape === 'rounded' && 'rounded-md',
            props.shape === 'curved' && 'rounded-xl',
            props.shape === 'full' && 'rounded-full',
          ]"
          @keydown.space="(e:any) => (e.target as HTMLAnchorElement).click()"
          @click="(e:any) => handleLinkClick(e, page)"
        >
          {{ page }}
        </NuxtLink>
      </li>

      <!-- Ellipsis -->
      <li v-if="showLastLink && pages[pages.length - 1] < lastPage - 1">
        <span
          class="flex h-10 w-10 items-center justify-center border-muted-200 bg-white font-sans text-sm text-muted-500 dark:border-muted-700 dark:bg-muted-800"
          :class="[
            props.shape === 'rounded' && 'rounded-md',
            props.shape === 'curved' && 'rounded-xl',
            props.shape === 'full' && 'rounded-full',
          ]"
        >
          …
        </span>
      </li>

      <!-- Link -->
      <li v-if="showLastLink">
        <NuxtLink
          :to="paginatedLink(lastPage)"
          tabindex="0"
          class="flex h-10 w-10 items-center justify-center font-sans text-sm transition-all duration-300"
          :class="[
            currentPage === lastPage
              ? 'bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-500/50 dark:shadow-primary-500/20'
              : 'bg-white dark:bg-muted-800 border-muted-200 dark:border-muted-700 hover:bg-muted-100 dark:hover:bg-muted-900 text-muted-500 hover:text-muted-700 dark:hover:text-muted-400',
            props.shape === 'rounded' && 'rounded-md',
            props.shape === 'curved' && 'rounded-xl',
            props.shape === 'full' && 'rounded-full',
          ]"
          @keydown.space="(e:any) => (e.target as HTMLAnchorElement).click()"
          @click="(e:any) => handleLinkClick(e, lastPage)"
        >
          {{ lastPage }}
        </NuxtLink>
      </li>
      <slot name="after-pagination"></slot>
    </FocusLoop>

    <FocusLoop
      class="flex items-center justify-end gap-1 border border-muted-200 bg-muted-100 p-1 dark:border-muted-600 dark:bg-muted-700"
      :class="[
        props.shape === 'rounded' && 'rounded-md',
        props.shape === 'curved' && 'rounded-xl',
        props.shape === 'full' && 'rounded-full',
      ]"
    >
      <slot name="before-navigation"></slot>

      <!-- Previous -->
      <NuxtLink
        :to="paginatedLink(currentPage - 1)"
        tabindex="0"
        class="flex h-10 w-full items-center justify-center border-muted-200 bg-white font-sans text-sm text-muted-500 transition-all duration-300 hover:bg-muted-100 hover:text-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:hover:bg-muted-900 dark:hover:text-muted-400 md:w-10"
        :class="[
          props.shape === 'rounded' && 'rounded-md',
          props.shape === 'curved' && 'rounded-xl',
          props.shape === 'full' && 'rounded-full',
        ]"
        @keydown.space="(e:any) => (e.target as HTMLAnchorElement).click()"
        @click="(e:any) => handleLinkClick(e, currentPage - 1)"
      >
        <BaseIcon name="lucide:chevron-left" class="block h-4 w-4" />
      </NuxtLink>

      <!-- Next -->
      <NuxtLink
        :to="paginatedLink(currentPage + 1)"
        tabindex="0"
        class="flex h-10 w-full items-center justify-center border-muted-200 bg-white font-sans text-sm text-muted-500 transition-all duration-300 hover:bg-muted-100 hover:text-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:hover:bg-muted-900 dark:hover:text-muted-400 md:w-10"
        :class="[
          props.shape === 'rounded' && 'rounded-md',
          props.shape === 'curved' && 'rounded-xl',
          props.shape === 'full' && 'rounded-full',
        ]"
        @keydown.space="(e:any) => (e.target as HTMLAnchorElement).click()"
        @click="(e:any) => handleLinkClick(e, currentPage + 1)"
      >
        <BaseIcon name="lucide:chevron-right" class="block h-4 w-4" />
      </NuxtLink>
      <slot name="after-navigation"></slot>
    </FocusLoop>
  </div>
</template>
