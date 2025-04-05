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

const { data, pending } = await useFetch('/api/transactions', {
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
    class="p-4 md:p-6"
  >
    <div class="items-center justify-between flex mt-2">
      <BaseHeading
        as="h4"
        size="xs"
        weight="medium"
        lead="none"
        class="text-muted-700 dark:text-muted-100 uppercase"
      >
        Recent Transactions
      </BaseHeading>
      <DemoLinkArrow to="#" label="View all" class="me-4" />
    </div>
    <div v-if="!pending && data?.data.length === 0">
      <BasePlaceholderPage
        title="No matching results"
        subtitle="Looks like we couldn't find any matching results for your search terms. Try other search terms."
      />
    </div>
    <div v-else class="mt-7 overflow-x-auto pb-2">
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
            v-for="item in data?.data.slice(0, 8)"
            :key="item.id"
            tabindex="0"
            class="hover:bg-muted-50 dark:hover:bg-muted-700/50 transition-colors duration-100"
          >
            <td class="xs:pe-6 ps-2 py-2 rounded-s-md">
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
            <td class="px-4 py-2">
              <BaseText
                size="sm"
                weight="medium"
                lead="none"
                class="text-muted-400"
              >
                {{ item.account }}
              </BaseText>
            </td>
            <td class="px-4 py-2">
              <BaseTag
                rounded="full"
                :variant="statusColor(item.status)"
                size="sm"
              >
                {{ item.status }}
              </BaseTag>
            </td>
            <td class="ps-4 pe-2 py-2 rounded-e-md">
              <div class="text-muted-400 flex items-center justify-end gap-2">
                <BaseTag
                  size="sm"
                  weight="medium"
                  lead="none"
                  class="text-muted-400"
                >
                  {{ item.method }}
                </BaseTag>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </BaseCard>
</template>
