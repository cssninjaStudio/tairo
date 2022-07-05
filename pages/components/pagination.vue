<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/pagination/toc'
import {
  curved,
  full,
  rounded,
  straight,
} from '@@/documentation/components/pagination'
import { properties } from '@@/documentation/components/pagination/properties'

definePageMeta({
  title: 'Pagination',
  documentation: {
    category: 'Interaction',
    components: ['BasePagination'],
  },
})

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
    <BaseBreadcrumb />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Pagination straight -->
        <DocSection id="pagination-straight" title="Straight shape" tag="1.0.0">
          <DocComponent label="Straight pagination example">
            <template #demo>
              <BasePagination
                :item-per-page="8"
                :total-items="512"
                :current-page="currentPage"
                :max-links-displayed="5"
                shape="straight"
              />
            </template>
            <template #code>
              <DocCode language="html" :code="straight" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Pagination rounded -->
        <DocSection id="pagination-rounded" title="Rounded shape" tag="1.0.0">
          <DocComponent label="Rounded pagination example">
            <template #demo>
              <BasePagination
                :item-per-page="8"
                :total-items="512"
                :current-page="currentPage"
                :max-links-displayed="5"
                shape="rounded"
              />
            </template>
            <template #code>
              <DocCode language="html" :code="rounded" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Pagination curved -->
        <DocSection id="pagination-curved" title="Curved shape" tag="1.0.0">
          <DocComponent label="Curved pagination example">
            <template #demo>
              <BasePagination
                :item-per-page="8"
                :total-items="512"
                :current-page="currentPage"
                :max-links-displayed="5"
                shape="curved"
              />
            </template>
            <template #code>
              <DocCode language="html" :code="curved" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Pagination full -->
        <DocSection id="pagination-full" title="Full shape" tag="1.0.0">
          <DocComponent label="Full pagination example">
            <template #demo>
              <BasePagination
                :item-per-page="8"
                :total-items="512"
                :current-page="currentPage"
                :max-links-displayed="5"
                shape="full"
              />
            </template>
            <template #code>
              <DocCode language="html" :code="full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Pagination props -->
        <DocProps
          id="pagination-props"
          component="Pagination"
          :properties="properties.props"
          :slots="properties.slots"
        />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
