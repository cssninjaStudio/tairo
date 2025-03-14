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
const page = computed({
  get: () => Number.parseInt((route.query.page as string) ?? '1', 10),
  set: (value) => {
    router.push({
      query: {
        ...route.query,
        page: value,
      },
    })
  },
})

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
  <div class="px-4 md:px-6 lg:px-8 pb-20 dark:[--color-input-default-bg:var(--color-muted-950)]">
    <TairoContentWrapper>
      <template #left>
        <TairoInput
          v-model="filter"
          icon="lucide:search"
          placeholder="Filter products..."
        />
      </template>
      <template #right>
        <BaseSelect
          v-model="perPage"
          label=""
        >
          <BaseSelectItem :value="10">
            10 per page
          </BaseSelectItem>
          <BaseSelectItem :value="25">
            25 per page
          </BaseSelectItem>
          <BaseSelectItem :value="50">
            50 per page
          </BaseSelectItem>
          <BaseSelectItem :value="100">
            100 per page
          </BaseSelectItem>
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
              >
              <img
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-4-dark.svg"
                alt="Placeholder image"
              >
            </template>
          </BasePlaceholderPage>
        </div>
        <div v-else>
          <div class="w-full">
            <TairoTable rounded="sm">
              <template #header>
                <TairoTableHeading uppercase spaced>
                  Product
                </TairoTableHeading>
                <TairoTableHeading uppercase spaced>
                  Name
                </TairoTableHeading>
                <TairoTableHeading uppercase spaced>
                  Sku
                </TairoTableHeading>
                <TairoTableHeading uppercase spaced>
                  Price
                </TairoTableHeading>
                <TairoTableHeading uppercase spaced>
                  Stock
                </TairoTableHeading>
                <TairoTableHeading uppercase spaced>
                  Category
                </TairoTableHeading>
                <TairoTableHeading uppercase spaced>
                  Action
                </TairoTableHeading>
              </template>

              <TairoTableRow v-for="item in data?.data" :key="item.id">
                <TairoTableCell spaced>
                  <div class="flex items-center">
                    <img
                      :src="item.image"
                      :alt="item.name"
                      class="max-w-[72px]"
                    >
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
                  <BaseTag size="sm" rounded="full">
                    {{ item.category }}
                  </BaseTag>
                </TairoTableCell>
                <TairoTableCell spaced>
                  <BaseButton rounded="md" size="sm">
                    Manage
                  </BaseButton>
                </TairoTableCell>
              </TairoTableRow>
            </TairoTable>
          </div>
          <div class="mt-6">
            <BasePagination
              v-model:page="page"
              :total="data?.total ?? 0"
              :items-per-page="perPage"
              rounded="md"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
