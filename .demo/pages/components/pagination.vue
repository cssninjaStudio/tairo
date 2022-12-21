<script setup lang="ts">
import curved from '~/documentation/pagination/curved.md?raw'
import full from '~/documentation/pagination/full.md?raw'
import rounded from '~/documentation/pagination/rounded.md?raw'
import straight from '~/documentation/pagination/straight.md?raw'

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
              <DocMarkdown :source="straight" class="prose max-w-full" />
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
              <DocMarkdown :source="rounded" class="prose max-w-full" />
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
              <DocMarkdown :source="curved" class="prose max-w-full" />
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
              <DocMarkdown :source="full" class="prose max-w-full" />
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
