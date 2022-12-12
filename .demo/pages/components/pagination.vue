<script setup lang="ts">
import {
  curved,
  full,
  rounded,
  straight,
} from '@@/documentation/components/pagination'



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
        <DocSection title="Straight shape" tag="1.0.0">
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
        <DocSection title="Rounded shape" tag="1.0.0">
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
        <DocSection title="Curved shape" tag="1.0.0">
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
        <DocSection title="Full shape" tag="1.0.0">
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
        <DocComponentMeta name="BasePagination" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
