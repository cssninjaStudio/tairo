<script setup lang="ts">
definePageMeta({
  title: 'Table List',
  preview: {
    title: 'Table list 3',
    description: 'For list views and collections',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-table-list-3.png',
    srcDark: '/img/screens/layouts-table-list-3-dark.png',
    order: 46,
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

const { data, pending, error, refresh } = await useFetch(
  '/api/company/documents/',
  {
    query,
  },
)

const selected = ref<number[]>([])

const isAllVisibleSelected = computed(() => {
  return selected.value.length === data.value?.data.length
})

function toggleAllVisibleSelection() {
  if (isAllVisibleSelected.value) {
    selected.value = []
  }
  else {
    selected.value = data.value?.data.map(item => item.id) ?? []
  }
}
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20 dark:[--color-input-default-bg:var(--color-muted-950)]">
    <TairoContentWrapper>
      <template #left>
        <TairoInput
          v-model="filter"
          icon="lucide:search"
          placeholder="Filter files..."
        />
      </template>
      <template #right>
        <BaseSelect
          v-model="perPage"
          placeholder="Items per page"
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
                <TairoTableHeading
                  uppercase
                  spaced
                  class="p-4"
                >
                  <div class="flex items-center">
                    <BaseCheckbox
                      :model-value="selected.length > 0 && !isAllVisibleSelected ? 'indeterminate' : isAllVisibleSelected"
                      @click="toggleAllVisibleSelection"
                    />
                  </div>
                </TairoTableHeading>
                <TairoTableHeading uppercase spaced>
                  Type
                </TairoTableHeading>
                <TairoTableHeading uppercase spaced>
                  Name
                </TairoTableHeading>
                <TairoTableHeading uppercase spaced>
                  Size
                </TairoTableHeading>
                <TairoTableHeading uppercase spaced>
                  Version
                </TairoTableHeading>
                <TairoTableHeading uppercase spaced>
                  Last Updated
                </TairoTableHeading>
                <TairoTableHeading uppercase spaced>
                  Action
                </TairoTableHeading>
              </template>

              <TairoTableRow v-if="selected.length > 0" :hoverable="false">
                <TairoTableCell
                  colspan="6"
                  class="bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"
                >
                  You have selected {{ selected.length }} items of the total
                  {{ data?.total }} items.
                  <a
                    href="#"
                    class="outline-none hover:underline focus:underline"
                  >Click here to everything</a>
                </TairoTableCell>
              </TairoTableRow>

              <BaseCheckboxGroup v-model="selected" as-child>
                <TairoTableRow v-for="item in data?.data" :key="item.id">
                  <TairoTableCell spaced>
                    <div class="flex items-center">
                      <BaseCheckbox :value="item.id" />
                    </div>
                  </TairoTableCell>
                  <TairoTableCell light spaced>
                    <img
                      :src="item.icon"
                      :alt="item.name"
                      class="max-w-[46px]"
                    >
                  </TairoTableCell>
                  <TairoTableCell spaced>
                    <span class="font-medium">{{ item.name }}</span>
                  </TairoTableCell>
                  <TairoTableCell light spaced>
                    {{ item.size }}
                  </TairoTableCell>
                  <TairoTableCell light spaced>
                    {{ item.version }}
                  </TairoTableCell>
                  <TairoTableCell spaced>
                    <div class="flex items-center">
                      <BaseAvatar
                        :src="item.author.picture"
                        size="xs"
                        class="bg-muted-500/20 text-muted-500"
                      />
                      <div class="ms-3 leading-none">
                        <h4 class="text-muted-900 dark:text-muted-400 font-sans text-sm font-medium">
                          {{ item.author.name }}
                        </h4>
                        <p class="text-muted-600 dark:text-muted-400 font-sans text-xs">
                          {{ item.uploaded }}
                        </p>
                      </div>
                    </div>
                  </TairoTableCell>
                  <TairoTableCell spaced>
                    <BaseButton rounded="md" size="sm">
                      Manage
                    </BaseButton>
                  </TairoTableCell>
                </TairoTableRow>
              </BaseCheckboxGroup>
            </TairoTable>
          </div>
          <div class="mt-6">
            <BasePagination
              v-model:page="page"
              :total="data?.total ?? 0"
              :items-per-page="perPage"
              rounded="lg"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
