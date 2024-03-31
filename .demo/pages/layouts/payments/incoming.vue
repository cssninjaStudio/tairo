<script setup lang="ts">
definePageMeta({
  title: 'Payments',
  preview: {
    title: 'Incoming payments',
    description: 'For payments management',
    categories: ['layouts', 'lists', 'payments'],
    src: '/img/screens/layouts-payments-incoming.png',
    srcDark: '/img/screens/layouts-payments-incoming-dark.png',
    order: 80,
    new: true,
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
  '/api/payments/incoming',
  {
    query,
  },
)

const completed = computed(() => {
  return data?.value?.data.filter((item: any) => item.status === 'complete')
})

const active = computed(() => {
  return data?.value?.data.filter((item: any) => item.status !== 'complete')
})

function statusColor(itemStatus: string) {
  switch (itemStatus) {
    case 'complete':
      return 'default'
    case 'in progress':
      return 'success'
    case 'sent':
      return 'info'
    case 'opened':
      return 'primary'
    default:
      break
  }
}
</script>

<template>
  <div class="mt-6 w-full">
    <div class="space-y-10">
      <!-- Payments received -->
      <div class="mb-16 w-full">
        <h3
          class="font-heading text-muted-800 dark:text-muted-200 mb-5 text-xl"
        >
          Received payments
        </h3>

        <!--Placeholder-->
        <DemoPlaceholderMinimal
          v-if="completed?.length === 0"
          title="No payments to show"
          description="Yo have no payment requests completed. Please come back later."
        />

        <!--Payments list-->
        <div v-else class="mt-7 overflow-x-auto">
          <table class="w-full whitespace-nowrap">
            <thead>
              <th
                class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold md:w-1/5"
              >
                <span>Created</span>
              </th>
              <th
                class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold md:w-2/5"
              >
                <span>Contact</span>
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
                <span>Actions</span>
              </th>
            </thead>
            <tbody>
              <!--Row-->
              <tr
                v-for="(item, index) in completed"
                :key="item.id"
                tabindex="0"
                class="hover:bg-muted-200 dark:hover:bg-muted-800 transition-colors duration-300"
              >
                <td class="p-4">
                  <span
                    class="text-muted-500 dark:text-muted-300 font-sans text-sm font-medium leading-none"
                  >
                    {{ item.date }}
                  </span>
                </td>
                <td class="p-4">
                  <div class="me-5 flex items-center gap-2 md:me-0">
                    <BaseAvatar
                      rounded="full"
                      size="xs"
                      :src="item.recipient.photo"
                      class="bg-muted-100 dark:bg-muted-700/60"
                    />
                    <BaseText
                      size="sm"
                      lead="none"
                      weight="medium"
                      class="text-muted-500 dark:text-muted-300"
                    >
                      {{ item.recipient.name }}
                    </BaseText>
                  </div>
                </td>
                <td class="p-4">
                  <span
                    class="text-muted-800 dark:text-muted-100 font-sans text-base font-medium leading-none"
                  >
                    ${{ item.amount.toFixed(2) }}
                  </span>
                </td>
                <td class="p-4">
                  <span
                    class="text-muted-400 font-sans text-sm font-medium leading-none"
                  >
                    {{ item.account }}
                  </span>
                </td>
                <td class="p-4">
                  <BaseTag
                    :variant="item.status === 'complete' ? 'solid' : 'pastel'"
                    rounded="full"
                    :color="index > 6 ? 'muted' : statusColor(item.status)"
                    size="sm"
                  >
                    {{ item.status }}
                  </BaseTag>
                </td>
                <td class="p-4 text-end">
                  <BaseButton rounded="md" size="sm">
                    Details
                  </BaseButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Payments requests -->
      <div class="w-full">
        <h3
          class="font-heading text-muted-800 dark:text-muted-200 mb-5 text-xl"
        >
          Payment requests
        </h3>

        <!--Placeholder-->
        <DemoPlaceholderMinimal
          v-if="active?.length === 0"
          title="No payments requests"
          description="Yo have no payment requests pending. Please come back later."
        />

        <!--Payments list-->
        <div v-else class="mt-7 overflow-x-auto">
          <table class="w-full whitespace-nowrap">
            <thead>
              <th
                class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold md:w-1/5"
              >
                <span>Created</span>
              </th>
              <th
                class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold md:w-2/5"
              >
                <span>Contact</span>
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
                <span>Actions</span>
              </th>
            </thead>
            <tbody>
              <!--Row-->
              <tr
                v-for="(item, index) in active"
                :key="item.id"
                tabindex="0"
                class="hover:bg-muted-200 dark:hover:bg-muted-800 transition-colors duration-300"
              >
                <td class="p-4">
                  <span
                    class="text-muted-500 dark:text-muted-300 font-sans text-sm font-medium leading-none"
                  >
                    {{ item.date }}
                  </span>
                </td>
                <td class="p-4">
                  <div class="me-5 flex items-center gap-2 md:me-0">
                    <BaseAvatar
                      rounded="full"
                      size="xs"
                      :src="item.recipient.photo"
                      class="bg-muted-100 dark:bg-muted-700/60"
                    />
                    <BaseText
                      size="sm"
                      lead="none"
                      weight="medium"
                      class="text-muted-500 dark:text-muted-300"
                    >
                      {{ item.recipient.name }}
                    </BaseText>
                  </div>
                </td>
                <td class="p-4">
                  <span
                    class="text-muted-800 dark:text-muted-100 font-sans text-base font-medium leading-none"
                  >
                    ${{ item.amount.toFixed(2) }}
                  </span>
                </td>
                <td class="p-4">
                  <span
                    class="text-muted-400 font-sans text-sm font-medium leading-none"
                  >
                    {{ item.account }}
                  </span>
                </td>
                <td class="p-4">
                  <BaseTag
                    :variant="item.status === 'complete' ? 'solid' : 'pastel'"
                    rounded="full"
                    :color="index > 6 ? 'muted' : statusColor(item.status)"
                    size="sm"
                  >
                    {{ item.status }}
                  </BaseTag>
                </td>
                <td class="p-4 text-end">
                  <BaseButton
                    color="muted"
                    rounded="md"
                    size="sm"
                  >
                    Cancel
                  </BaseButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
