<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const page = computed(() => Number.parseInt((route.query.page as string) ?? '1', 10))

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

const { data, status } = await useFetch('/api/transactions', {
  query,
})

function statusColor(itemStatus: string) {
  switch (itemStatus) {
    case 'complete':
      return 'dark'
    case 'in progress':
      return 'primary'
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
  <BaseCard
    rounded="md"
    class="py-4 px-2 md:py-6 md:px-4"
  >
    <div class="px-2 items-center justify-between sm:flex">
      <BaseHeading
        as="h4"
        size="xs"
        weight="medium"
        lead="none"
        class="text-muted-700 dark:text-muted-100 uppercase"
      >
        Recent Transactions
      </BaseHeading>
      <DemoLinkArrow to="#" label="View all" />
    </div>
    <div v-if="status !== 'pending' && data?.data.length === 0" class="px-2">
      <BasePlaceholderPage
        title="No matching results"
        subtitle="Looks like we couldn't find any matching results for your search terms. Try other search terms."
      />
    </div>
    <div v-else class="mt-7 overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr>
            <th class="w-1/5" />
            <th class="w-2/5" />
            <th />
            <th />
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          <!-- Row -->
          <tr
            v-for="item in data?.data"
            :key="item.id"
            tabindex="0"
            class="hover:bg-muted-200/50 dark:hover:bg-muted-900/50 transition-colors duration-100"
          >
            <td class="py-2 ps-2 rounded-s-md">
              <BaseText
                size="sm"
                weight="medium"
                lead="none"
                class="text-muted-400"
              >
                {{ item.date }}
              </BaseText>
            </td>
            <td class="py-2">
              <BaseText
                size="sm"
                weight="medium"
                lead="none"
                class="text-muted-600 dark:text-muted-300"
              >
                {{ item.issuer }}
              </BaseText>
            </td>
            <td class="px-4 py-2 text-end">
              <BaseText
                size="sm"
                weight="semibold"
                lead="none"
                class="text-muted-800 dark:text-muted-100"
              >
                {{ formatPrice(item.amount) }}
              </BaseText>
            </td>
            <td class="ps-4 pe-2 py-2 rounded-e-md text-end">
              <BaseTag
                :variant="statusColor(item.status)"
                rounded="full"
                size="sm"
              >
                {{ item.status }}
              </BaseTag>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </BaseCard>
</template>
