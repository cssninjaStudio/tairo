<script setup lang="ts">
definePageMeta({
  title: 'Payments',
  preview: {
    title: 'Outgoing payments',
    description: 'For payments management',
    categories: ['layouts', 'lists', 'payments'],
    src: '/img/screens/layouts-payments.png',
    srcDark: '/img/screens/layouts-payments-dark.png',
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
  '/api/payments/outgoing',
  {
    query,
  },
)

const toApprove = computed(() => {
  return data?.value?.data.filter((item: any) => item.status === 'pending')
})

const scheduled = computed(() => {
  return data?.value?.data.filter((item: any) => item.status === 'scheduled')
})
</script>

<template>
  <div class="mt-6 w-full">
    <div class="space-y-10">
      <!--Needs approval-->
      <div class="w-full">
        <h3
          class="font-heading text-muted-800 dark:text-muted-200 mb-5 text-xl"
        >
          Needs approval
        </h3>

        <!--Placeholder-->
        <DemoPlaceholderMinimal
          v-if="toApprove?.length === 0"
          title="No pending approvals"
          description="Yo have no payment approvals. Please come back later."
        />

        <!--Payments approval list-->
        <div
          v-else
          class="divide-muted-200 dark:divide-muted-800 mt-3 divide-y"
        >
          <!--item-->
          <div
            v-for="item in toApprove"
            :key="item.id"
            class="hover:bg-muted-200 dark:hover:bg-muted-800 flex flex-col items-center py-3 transition-colors duration-300 md:flex-row"
          >
            <div class="flex flex-col items-center gap-2 md:flex-row">
              <BaseAvatar
                rounded="full"
                size="md"
                :src="item.recipient.logo"
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
            <div
              class="flex flex-col items-center gap-6 md:ms-auto md:flex-row"
            >
              <div>
                <span
                  class="text-muted-800 dark:text-muted-100 font-sans text-base font-medium leading-none"
                >
                  ${{ item.amount }}
                </span>
              </div>
              <div>
                <span
                  class="text-muted-500 dark:text-muted-300 font-sans text-sm font-medium leading-none"
                >
                  {{ item.date }}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <BaseButton
                  color="default"
                  rounded="md"
                  size="sm"
                >
                  Cancel
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Scheduled-->
      <div class="w-full">
        <h3
          class="font-heading text-muted-800 dark:text-muted-200 mb-5 text-xl"
        >
          Scheduled
        </h3>

        <!--Placeholder-->
        <DemoPlaceholderMinimal
          v-if="scheduled?.length === 0"
          title="No scheduled payments"
          description="Yo have no payment scheduled. Please come back later."
        />

        <!--Scheduled payments list-->
        <div
          v-else
          class="divide-muted-200 dark:divide-muted-800 mt-3 divide-y"
        >
          <!--item-->
          <div
            v-for="item in scheduled"
            :key="item.id"
            class="hover:bg-muted-200 dark:hover:bg-muted-800 flex flex-col items-center py-3 transition-colors duration-300 md:flex-row md:px-3"
          >
            <div class="flex flex-col items-center gap-2 md:flex-row">
              <BaseAvatar
                rounded="full"
                size="md"
                :src="item.recipient.logo"
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
            <div
              class="flex flex-col items-center gap-6 md:ms-auto md:flex-row"
            >
              <div>
                <span
                  class="text-muted-800 dark:text-muted-100 font-sans text-base font-medium leading-none"
                >
                  ${{ item.amount }}
                </span>
              </div>
              <div>
                <span
                  class="text-muted-500 dark:text-muted-300 font-sans text-sm font-medium leading-none"
                >
                  {{ item.date }}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <BaseButton
                  color="muted"
                  rounded="md"
                  size="sm"
                >
                  Cancel
                </BaseButton>
                <BaseButton rounded="md" size="sm">
                  Pay Now
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
