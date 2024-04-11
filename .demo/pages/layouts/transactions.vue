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
const page = computed(() => parseInt((route.query.page as string) ?? '1'))

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
      return 'success'
    case 'in progress':
      return 'primary'
    case 'processing':
      return 'info'
    case 'cancelled':
      return 'warning'
    default:
      break
  }
}
</script>

<template>
  <div class="w-full pb-24">
    <!--Header-->
    <div class="flex items-center justify-between py-6">
      <div>
        <BaseInput
          v-model="filter"
          icon="lucide:search"
          rounded="lg"
          placeholder="Search transactions..."
        />
      </div>
      <div class="flex items-center gap-2">
        <span class="text-muted-400 font-sans text-sm">
          0-{{ perPage }} of {{ data?.total }}
        </span>
      </div>
    </div>

    <div class="w-full">
      <!--Filters-->
      <div class="flex w-full items-center gap-5">
        <!--Dropdown-->
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
            rounded="full"
            size="sm"
          >
            <Icon name="lucide:download" class="size-4" />
            <span>Export All</span>
          </BaseButton>
        </div>
      </div>
    </div>

    <DemoTransactionsListPlaceload v-if="!pending && data?.data.length === 0" />
    <div v-else class="mt-7 overflow-x-auto px-2">
      <table class="w-full whitespace-nowrap">
        <thead>
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
        </thead>
        <tbody>
          <!--Row-->
          <tr
            v-for="(item, index) in data?.data"
            :key="item.id"
            tabindex="0"
            class="hover:bg-muted-200 dark:hover:bg-muted-800 transition-colors duration-300 ease-in-out"
          >
            <td class="p-4">
              <BaseText
                size="sm"
                weight="medium"
                lead="none"
                class="text-muted-400"
              >
                {{ item.date }}
              </BaseText>
            </td>
            <td class="p-4">
              <BaseText
                size="sm"
                weight="medium"
                lead="none"
                class="text-muted-600 dark:text-muted-300"
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
                :variant="index > 6 ? 'solid' : 'pastel'"
                rounded="full"
                :color="index > 6 ? 'default' : statusColor(item.status)"
                size="sm"
              >
                {{ item.status }}
              </BaseTag>
            </td>
            <td class="p-4">
              <div class="text-muted-400 flex items-center gap-2">
                <Icon
                  v-if="item.method === 'credit card'"
                  name="ph:credit-card-duotone"
                  class="size-5"
                />
                <Icon
                  v-else-if="item.method === 'cheque'"
                  name="ph:pen-nib-duotone"
                  class="size-5"
                />
                <Icon
                  v-else-if="item.method === 'transfer'"
                  name="ph:arrows-left-right-duotone"
                  class="size-5"
                />
                <Icon
                  v-else-if="item.method === 'bank'"
                  name="ph:bank-duotone"
                  class="size-5"
                />
                <BaseText
                  size="sm"
                  weight="medium"
                  lead="none"
                  class="text-muted-400"
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
          :total-items="data?.total ?? 0"
          :item-per-page="perPage"
          :current-page="page"
          rounded="md"
        />
      </div>
    </div>
  </div>
</template>
