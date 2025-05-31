<script setup lang="ts">
definePageMeta({
  title: 'Transactions',
  preview: {
    title: 'Transactions',
    description: 'For transactions history',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-transactions.png',
    srcDark: '/img/screens/layouts-transactions-dark.png',
    order: 69,
    new: true,
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
const perPage = ref(20)

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

const { data, pending, error, refresh } = await useFetch('/api/transactions', {
  query,
})

function statusColor(itemStatus: string) {
  switch (itemStatus) {
    case 'complete':
      return 'primary'
    case 'in progress':
      return 'dark'
    case 'processing':
      return 'default'
    case 'cancelled':
      return 'muted'
    default:
      break
  }
}
</script>

<template>
  <div class="w-full px-4 md:px-6 lg:px-8 pb-20 dark:[--color-input-default-bg:var(--color-muted-950)]">
    <!-- Header -->
    <div class="flex items-center justify-between pb-6">
      <TairoInput
        v-model="filter"
        icon="lucide:search"
        rounded="lg"
        placeholder="Search transactions..."
      />
      <div class="flex items-center gap-2">
        <span class="text-muted-400 font-sans text-sm">
          0-{{ perPage }} of {{ data?.total }}
        </span>
      </div>
    </div>

    <div class="w-full">
      <!-- Filters -->
      <div class="flex w-full items-center gap-5">
        <!-- Dropdown -->
        <div>
          <DemoTransactionsFilters />
        </div>

        <span
          class="text-muted-600 dark:text-muted-500 hidden font-sans text-sm font-medium md:block"
        >
          No filters applied
        </span>

        <div class="ms-auto">
          <BaseButton
            rounded="md"
            size="sm"
          >
            <Icon name="solar:download-linear" class="size-4" />
            <span>Export All</span>
          </BaseButton>
        </div>
      </div>
    </div>

    <DemoTransactionsListPlaceload v-if="!pending && data?.data.length === 0" />
    <div v-else class="mt-7 overflow-x-auto px-2">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr>
            <th
              class="text-muted-400 dark:text-muted-300 w-1/5 px-4 pb-3 text-start font-sans text-xs font-semibold"
            >
              <span>Date</span>
            </th>
            <th
              class="text-muted-400 dark:text-muted-300 w-2/5 px-4 pb-3 text-start font-sans text-xs font-semibold"
            >
              <span>To / From</span>
            </th>
            <th
              class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold"
            >
              <span>Amount</span>
            </th>
            <th
              class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold"
            >
              <span>Account</span>
            </th>
            <th
              class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold"
            >
              <span>Status</span>
            </th>
            <th
              class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold"
            >
              <span>Payment method</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Row -->
          <tr
            v-for="(item, index) in data?.data"
            :key="item.id"
            tabindex="0"
            class="hover:bg-muted-200 dark:hover:bg-muted-800 transition-colors duration-300 ease-in-out"
          >
            <td class="p-4">
              <BaseText
                size="sm"
                lead="none"
                class="text-muted-600 dark:text-muted-400"
              >
                {{ item.date }}
              </BaseText>
            </td>
            <td class="p-4">
              <BaseText
                size="sm"
                weight="medium"
                lead="none"
                class="text-muted-600 dark:text-muted-400"
              >
                {{ item.issuer }}
              </BaseText>
            </td>
            <td class="p-4">
              <BaseText
                size="sm"
                weight="semibold"
                lead="none"
                class="text-muted-800 dark:text-muted-100"
              >
                {{ item.type === 'in' ? '+' : '-' }} ${{
                  item.amount.toFixed(2)
                }}
              </BaseText>
            </td>
            <td class="p-4">
              <BaseText
                size="sm"
                weight="medium"
                lead="none"
                class="text-muted-400"
              >
                {{ item.account }}
              </BaseText>
            </td>
            <td class="p-4">
              <BaseTag
                rounded="full"
                :variant="index > 6 ? 'default' : statusColor(item.status)"
                size="sm"
              >
                {{ item.status }}
              </BaseTag>
            </td>
            <td class="p-4">
              <div class="text-muted-400 flex items-center gap-2">
                <Icon
                  v-if="item.method === 'credit card'"
                  name="solar:card-linear"
                  class="size-5"
                />
                <Icon
                  v-else-if="item.method === 'cheque'"
                  name="solar:document-linear"
                  class="size-5"
                />
                <Icon
                  v-else-if="item.method === 'transfer'"
                  name="solar:transfer-horizontal-linear"
                  class="size-5"
                />
                <Icon
                  v-else-if="item.method === 'bank'"
                  name="solar:safe-square-linear"
                  class="size-5"
                />
                <BaseText
                  size="sm"
                  lead="none"
                  class="text-muted-600 dark:text-muted-400"
                >
                  {{ item.method }}
                </BaseText>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

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
</template>
