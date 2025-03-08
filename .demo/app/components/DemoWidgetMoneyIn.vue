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

const { data } = await useFetch('/api/transactions', {
  query,
})

const ingoing = computed(() => {
  if (data.value?.data.length && data.value?.data.length > 0) {
    return data.value.data.filter(item => item.type === 'in')
  }
  return []
})

const total = computed(() => {
  let amount = 0
  for (const item of data.value?.data ?? []) {
    if (item.type === 'in') {
      amount = amount + item.amount
    }
  }
  return amount
})
</script>

<template>
  <BaseCard
    rounded="md"
    class="h-full p-10"
  >
    <div class="flex h-full flex-col justify-between gap-7">
      <BaseHeading
        as="h4"
        size="xs"
        weight="medium"
        lead="none"
        class="text-muted-700 dark:text-muted-100 uppercase"
      >
        Money in last 30 days
      </BaseHeading>

      <div class="flex items-center gap-3 mt-4">
        <BaseText weight="light" size="3xl">
          +
        </BaseText>
        <span
          class="text-muted-900 font-sans text-3xl font-medium dark:text-white"
        >
          ${{ total.toFixed(2) }}
        </span>
      </div>

      <div v-if="ingoing?.length === 0" class="mb-2 space-y-4">
        <div class="space-y-1">
          <p class="text-muted-500 font-sans">
            No ingoing transactions yet
          </p>
          <div class="bg-muted-200 dark:bg-muted-800 h-0.5 w-full" />
        </div>
      </div>

      <div v-else class="mb-2 space-y-4">
        <div
          v-for="item in ingoing?.slice(0, 4)"
          :key="item.id"
          class="space-y-1"
        >
          <BaseParagraph size="sm" class="text-muted-500">
            {{
              item.issuer
            }}
          </BaseParagraph>
          <div class="relative flex w-full items-center gap-4">
            <BaseProgress
              :model-value="(item.amount / total) * 100"
              :max="100"
              variant="primary"
              size="xs"
            />
            <BaseText
              weight="medium"
              class="text-muted-800 dark:text-muted-100 block w-1/5 text-end"
            >
              ${{ item.amount.toFixed(2) }}
            </BaseText>
          </div>
        </div>
      </div>
      <div class="mt-auto text-end">
        <DemoLinkArrow to="#" />
      </div>
    </div>
  </BaseCard>
</template>
