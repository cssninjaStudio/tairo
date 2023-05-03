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
  } else {
    selected.value = data.value?.data.map((item) => item.id) ?? []
  }
}
</script>

<template>
  <div>
    <TairoContentWrapper>
      <template #left>
        <BaseInput
          v-model="filter"
          icon="lucide:search"
          placeholder="Filter files..."
          :classes="{
            wrapper: 'w-full sm:w-auto',
          }"
        />
      </template>
      <template #right>
        <BaseSelect
          v-model="perPage"
          placeholder="Items per page"
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
                <TairoTableHeading uppercase spaced class="p-4">
                  <div class="flex items-center">
                    <BaseCheckbox
                      :model-value="isAllVisibleSelected"
                      :indeterminate="
                        selected.length > 0 && !isAllVisibleSelected
                      "
                      name="table-1-main"
                      shape="full"
                      class="text-primary-500"
                      @click="toggleAllVisibleSelection"
                    />
                  </div>
                </TairoTableHeading>
                <TairoTableHeading uppercase spaced>Type</TairoTableHeading>
                <TairoTableHeading uppercase spaced>Name</TairoTableHeading>
                <TairoTableHeading uppercase spaced>Size</TairoTableHeading>
                <TairoTableHeading uppercase spaced>Version</TairoTableHeading>
                <TairoTableHeading uppercase spaced>
                  Last Updated
                </TairoTableHeading>
                <TairoTableHeading uppercase spaced>Action</TairoTableHeading>
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
                    >Click here to everything</a
                  >
                </TairoTableCell>
              </TairoTableRow>

              <TairoTableRow v-for="item in data?.data" :key="item.id">
                <TairoTableCell spaced>
                  <div class="flex items-center">
                    <BaseCheckbox
                      v-model="selected"
                      :value="item.id"
                      :name="`item-checkbox-${item.id}`"
                      shape="full"
                      class="text-primary-500"
                    />
                  </div>
                </TairoTableCell>
                <TairoTableCell light spaced>
                  <img :src="item.icon" :alt="item.name" class="max-w-[46px]" />
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
                      :text="item.initials"
                      size="xs"
                      class="bg-muted-500/20 text-muted-500"
                    />
                    <div class="ms-3 leading-none">
                      <h4 class="font-sans text-sm font-medium">
                        {{ item.author.name }}
                      </h4>
                      <p class="text-muted-400 font-sans text-xs">
                        {{ item.uploaded }}
                      </p>
                    </div>
                  </div>
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
