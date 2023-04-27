<script setup lang="ts">
definePageMeta({
  title: 'Table List',
  preview: {
    title: 'Table list 2',
    description: 'For list views and collections',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-table-list-2.png',
    srcDark: '/img/screens/layouts-table-list-2-dark.png',
    order: 45,
  },
})

const route = useRoute()
const router = useRouter()
const page = computed(() => parseInt((route.query.page as string) ?? '1'))

const filter = ref('')
const perPage = ref(10)

watch([filter, perPage], () => {
  router.push({
    query: {
      page: undefined,
    },
  })
})

const query = computed(() => {
  return {
    filter: filter.value,
    perPage: perPage.value,
    page: page.value,
  }
})

const { data, pending, error, refresh } = await useFetch('/api/products', {
  query,
})
</script>

<template>
  <div>
    <TairoContentWrapper>
      <template #left>
        <BaseInput
          v-model="filter"
          icon="lucide:search"
          placeholder="Filter products..."
          :classes="{
            wrapper: 'w-full sm:w-auto',
          }"
        />
      </template>
      <template #right>
        <BaseSelect
          v-model="perPage"
          label=""
          :classes="{
            wrapper: 'w-full sm:w-40',
          }"
        >
          <option :value="10">10 per page</option>
          <option :value="25">25 per page</option>
          <option :value="50">50 per page</option>
          <option :value="100">100 per page</option>
        </BaseSelect>
      </template>
      <div>
        <div v-if="!pending && data?.data.length === 0">
          <BasePlaceholderPage
            title="No matching results"
            subtitle="Looks like we couldn't find any matching results for your search terms. Try other search terms."
          >
            <template #image>
              <img
                class="block dark:hidden"
                src="/img/illustrations/placeholders/flat/placeholder-search-4.svg"
                alt="Placeholder image"
              />
              <img
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-4-dark.svg"
                alt="Placeholder image"
              />
            </template>
          </BasePlaceholderPage>
        </div>
        <div v-else>
          <div class="w-full">
            <TairoTable shape="rounded">
              <template #header>
                <TairoTableHeading uppercase spaced>Product</TairoTableHeading>
                <TairoTableHeading uppercase spaced>Name</TairoTableHeading>
                <TairoTableHeading uppercase spaced>Sku</TairoTableHeading>
                <TairoTableHeading uppercase spaced>Price</TairoTableHeading>
                <TairoTableHeading uppercase spaced>Stock</TairoTableHeading>
                <TairoTableHeading uppercase spaced>Category</TairoTableHeading>
                <TairoTableHeading uppercase spaced>Action</TairoTableHeading>
              </template>

              <TairoTableRow v-for="item in data?.data" :key="item.id">
                <TairoTableCell spaced>
                  <div class="flex items-center">
                    <img
                      :src="item.image"
                      :alt="item.name"
                      class="max-w-[80px]"
                    />
                  </div>
                </TairoTableCell>
                <TairoTableCell spaced>
                  {{ item.name }}
                </TairoTableCell>
                <TairoTableCell light spaced>
                  {{ item.sku }}
                </TairoTableCell>
                <TairoTableCell spaced>
                  <span class="font-semibold">${{ item.price }}</span>
                </TairoTableCell>
                <TairoTableCell light spaced>
                  {{ item.stock }}
                </TairoTableCell>
                <TairoTableCell light spaced>
                  <span class="text-primary-500 text-sm font-medium">
                    {{ item.category }}
                  </span>
                </TairoTableCell>
                <TairoTableCell spaced>
                  <BaseButtonAction muted>Manage</BaseButtonAction>
                </TairoTableCell>
              </TairoTableRow>
            </TairoTable>
          </div>
          <div class="mt-6">
            <BasePagination
              :total-items="data?.total ?? 0"
              :item-per-page="perPage"
              :current-page="page"
              shape="curved"
            />
          </div>
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
