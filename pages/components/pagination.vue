<script setup lang="ts">
// import { toc } from '@@/documentation/components/pagination/toc'
// import { } from '@@/documentation/components/pagination'

definePageMeta({
  title: 'Pagination',
})

const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'i-lucide-home',
    hideIcon: false,
    to: '/',
  },
  {
    label: 'Components',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components',
  },
  {
    label: 'Pagination',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components/pagination',
  },
]

const route = useRoute()
const currentPage = computed(() => {
  try {
    return Number.parseInt(route.query.page as string) || 1
  } catch {}
  return 1
})
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Pagination -->
        <DocSection id="pagination-base" title="Pagination" tag="1.0.0">
          <DocComponent label="Pagination component example">
            <template #demo>
              <BasePagination
                :item-per-page="8"
                :total-items="512"
                :current-page="currentPage"
                :max-links-displayed="5"
              />
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>
      </template>
      <!-- Toc -->
      <template #toc></template>
    </DocLayout>
  </div>
</template>
