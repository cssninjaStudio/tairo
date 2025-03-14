<script setup lang="ts">
import { BaseCheckboxGroup } from '#components'

definePageMeta({
  title: 'Table List',
  preview: {
    title: 'Table list 1',
    description: 'For list views and collections',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-table-list-1.png',
    srcDark: '/img/screens/layouts-table-list-1-dark.png',
    order: 44,
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
  '/api/company/members/',
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
          placeholder="Filter users..."
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
            <TairoTable rounded="sm" :scrollable="false">
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
                  Collaborator
                </TairoTableHeading>
                <TairoTableHeading uppercase spaced>
                  Location
                </TairoTableHeading>
                <TairoTableHeading uppercase spaced>
                  Status
                </TairoTableHeading>
                <TairoTableHeading uppercase spaced>
                  Completed
                </TairoTableHeading>
                <TairoTableHeading
                  uppercase
                  spaced
                  class="text-end"
                >
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
                  <TairoTableCell spaced>
                    <div class="flex items-center">
                      <BaseAvatar
                        :src="item.picture"
                        :text="item.initials"
                        :class="getRandomColor()"
                      />
                      <div class="ms-3 leading-none">
                        <h4 class="text-muted-900 dark:text-white font-sans text-sm font-medium">
                          {{ item.username }}
                        </h4>
                        <p class="text-muted-600 dark:text-muted-400 font-sans text-xs">
                          {{ item.position }}
                        </p>
                      </div>
                    </div>
                  </TairoTableCell>
                  <TairoTableCell light spaced>
                    {{ item.location }}
                  </TairoTableCell>
                  <TairoTableCell spaced class="capitalize">
                    <BaseTag
                      v-if="item.status === 'available'"
                      variant="none"
                      rounded="full"
                      size="sm"
                      class="font-medium bg-green-500/10 text-green-600 border border-green-500"
                    >
                      {{ item.status }}
                    </BaseTag>
                    <BaseTag
                      v-else-if="item.status === 'new'"
                      variant="primary"
                      rounded="full"
                      size="sm"
                      class="font-medium"
                    >
                      {{ item.status }}
                    </BaseTag>
                    <BaseTag
                      v-else-if="item.status === 'busy'"
                      variant="dark"
                      rounded="full"
                      size="sm"
                      class="font-medium"
                    >
                      {{ item.status }}
                    </BaseTag>
                    <BaseTag
                      v-else-if="item.status === 'offline'"
                      variant="muted"
                      rounded="full"
                      size="sm"
                      class="font-medium"
                    >
                      {{ item.status }}
                    </BaseTag>
                  </TairoTableCell>
                  <TairoTableCell spaced>
                    <div class="flex items-center">
                      <div class="relative">
                        <BaseProgressCircle
                          :model-value="item.completed"
                          :thickness="1"
                          :size="50"
                          variant="primary"
                        />
                        <span
                          class="absolute start-1/2 top-1/2 z-10 ms-0.5 -translate-x-1/2 -translate-y-1/2 font-sans text-[0.65rem] font-semibold rtl:me-0.5 rtl:ms-0 rtl:translate-x-1/2"
                        >
                          {{ item.completed }}%
                        </span>
                      </div>
                      <span class="text-muted-400 font-sans text-xs">
                        Tasks completed
                      </span>
                    </div>
                  </TairoTableCell>
                  <TairoTableCell spaced>
                    <div class="flex justify-end">
                      <BaseDropdown
                        label="Actions"
                        placement="bottom-end"
                        rounded="md"
                      >
                        <BaseDropdownItem
                          to="#"
                          title="Details"
                          text="View user details"
                          rounded="md"
                        />
                      </BaseDropdown>
                    </div>
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
