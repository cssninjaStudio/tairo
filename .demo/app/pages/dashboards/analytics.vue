<script setup lang="ts">
definePageMeta({
  title: 'Analytics',
  preview: {
    title: 'Analytics dashboard',
    description: 'For heavy stats and kpis',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-analytics.png',
    srcDark: '/img/screens/dashboards-analytics-dark.png',
    order: 4,
  },
})

// Datepicker
const date = ref(new Date())
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <div class="grid grid-cols-12 gap-4">
      <!-- Grid column -->
      <div class="col-span-12 2xl:landscape:col-span-9">
        <!-- Inner grid -->
        <div class="grid grid-cols-12 gap-4">
          <!-- Stat tile -->
          <div class="col-span-12 md:col-span-4">
            <BaseCard rounded="md" class="p-4">
              <div class="mb-1 flex items-center justify-between">
                <BaseHeading
                  as="h5"
                  size="sm"
                  weight="medium"
                  lead="tight"
                  class="text-muted-500 dark:text-muted-400"
                >
                  <span>Transactions</span>
                </BaseHeading>
                <BaseIconBox
                  size="xs"
                  class="bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2"
                  rounded="full"
                  variant="none"
                >
                  <Icon name="solar:chart-square-bold-duotone" class="size-5" />
                </BaseIconBox>
              </div>
              <div class="mb-2">
                <BaseHeading
                  as="h4"
                  size="3xl"
                  weight="bold"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
                >
                  <span>7,549</span>
                </BaseHeading>
              </div>
              <div
                class="text-success-500 flex items-center gap-1 font-sans text-sm"
              >
                <span>+7.8%</span>
                <Icon name="lucide:trending-up" class="size-5" />
                <span class="text-muted-400 text-xs">since last month</span>
              </div>
            </BaseCard>
          </div>
          <!-- Stat tile -->
          <div class="col-span-12 md:col-span-4">
            <BaseCard rounded="md" class="p-4">
              <div class="mb-1 flex items-center justify-between">
                <BaseHeading
                  as="h5"
                  size="sm"
                  weight="medium"
                  lead="tight"
                  class="text-muted-500 dark:text-muted-400"
                >
                  <span>Subscriptions</span>
                </BaseHeading>
                <BaseIconBox
                  size="xs"
                  class="bg-primary-100 text-primary-500 dark:border-2 dark:border-primary-500 dark:bg-primary-500/20 dark:text-primary-400"
                  rounded="full"
                  variant="none"
                >
                  <Icon name="solar:gamepad-bold-duotone" class="size-5" />
                </BaseIconBox>
              </div>
              <div class="mb-2">
                <BaseHeading
                  as="h4"
                  size="3xl"
                  weight="bold"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
                >
                  <span>1,611</span>
                </BaseHeading>
              </div>
              <div
                class="text-destructive-500 flex items-center gap-1 font-sans text-sm"
              >
                <span>-2.7%</span>
                <Icon name="lucide:trending-down" class="size-5" />
                <span class="text-muted-400 text-xs">going down</span>
              </div>
            </BaseCard>
          </div>
          <!-- Stat tile -->
          <div class="col-span-12 md:col-span-4">
            <BaseCard rounded="md" class="p-4">
              <div class="mb-1 flex items-center justify-between">
                <BaseHeading
                  as="h5"
                  size="sm"
                  weight="medium"
                  lead="tight"
                  class="text-muted-500 dark:text-muted-400"
                >
                  <span>Referals</span>
                </BaseHeading>
                <BaseIconBox
                  size="xs"
                  class="bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2"
                  rounded="full"
                  variant="none"
                >
                  <Icon name="solar:home-smile-angle-bold-duotone" class="size-5" />
                </BaseIconBox>
              </div>
              <div class="mb-2">
                <BaseHeading
                  as="h4"
                  size="3xl"
                  weight="bold"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
                >
                  <span>862</span>
                </BaseHeading>
              </div>
              <div
                class="text-success-500 flex items-center gap-1 font-sans text-sm"
              >
                <span>+4.5%</span>
                <Icon name="lucide:trending-up" class="size-5" />
                <span class="text-muted-400 text-xs">going up</span>
              </div>
            </BaseCard>
          </div>
          <!-- Chart -->
          <div class="col-span-12 md:col-span-8">
            <BaseCard rounded="md" class="p-6">
              <div class="mb-2 flex items-center justify-between">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
                >
                  <span>Revenue</span>
                </BaseHeading>
                <BaseButton
                  size="sm"
                  rounded="md"
                >
                  Details
                </BaseButton>
              </div>
              <div class="flex gap-8">
                <div>
                  <span class="text-muted-600 dark:text-muted-400 font-sans text-xs">This month</span>
                  <p class="text-muted-900 dark:text-muted-100 font-sans text-lg font-medium">
                    $75,689
                  </p>
                </div>
                <div>
                  <span class="text-muted-600 dark:text-muted-400 font-sans text-xs">Last month</span>
                  <p
                    class="text-muted-900 dark:text-muted-100 font-sans text-lg font-medium"
                  >
                    $59,724
                  </p>
                </div>
              </div>
              <DemoChartLineRevenue />
            </BaseCard>
          </div>
          <!-- Chart -->
          <div class="col-span-12 md:col-span-4">
            <BaseCard rounded="md" class="flex h-full flex-col p-6">
              <div class="mb-10 flex items-center justify-between">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
                >
                  <span>Goal Overview</span>
                </BaseHeading>
              </div>
              <div class="mb-6">
                <DemoChartRadialGoal />
              </div>
              <div class="mt-auto">
                <div
                  class="border-muted-200 dark:border-muted-700 flex w-full border-t pt-4 text-center"
                >
                  <div
                    class="border-muted-200 dark:border-muted-700 flex-1 border-r px-2"
                  >
                    <span class="text-muted-400 font-sans text-xs">
                      Completed
                    </span>
                    <p
                      class="text-muted-900 dark:text-muted-100 font-sans text-lg font-medium"
                    >
                      1431
                    </p>
                  </div>
                  <div class="flex-1 px-2">
                    <span class="text-muted-400 font-sans text-xs">
                      In Progress
                    </span>
                    <p
                      class="text-muted-900 dark:text-muted-100 font-sans text-lg font-medium"
                    >
                      219
                    </p>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
          <!-- Chart -->
          <div class="col-span-12 md:col-span-4">
            <BaseCard rounded="md" class="flex h-full flex-col p-6">
              <div class="mb-5 flex items-center justify-between">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
                >
                  <span>Sales Growth</span>
                </BaseHeading>
              </div>
              <div class="mb-6">
                <DemoChartRadialGrowth />
              </div>
              <div class="mt-auto">
                <div class="flex justify-center gap-2">
                  <Icon name="logos:shopify" class="size-8" />
                  <div>
                    <BaseHeading
                      as="h5"
                      size="sm"
                      weight="medium"
                      lead="tight"
                      class="text-muted-900 dark:text-white"
                    >
                      <span>Shopify</span>
                    </BaseHeading>
                    <BaseParagraph size="xs">
                      <span class="text-muted-600 dark:text-muted-400">Best selling channel</span>
                    </BaseParagraph>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
          <!-- Chart -->
          <div class="col-span-12 md:col-span-8">
            <BaseCard rounded="md" class="relative p-6">
              <div class="mb-6">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
                >
                  <span>Profit</span>
                </BaseHeading>
              </div>
              <DemoChartBarMulti />
            </BaseCard>
          </div>
        </div>
      </div>
      <!-- Grid column -->
      <div class="col-span-12 2xl:landscape:col-span-3">
        <!-- Inner column -->
        <div
          class="lg:portrait:grid-cols-2 lg:landscape:grid-cols-2 grid gap-4 2xl:landscape:flex 2xl:landscape:flex-col"
        >
          <!-- Vcard -->
          <BaseCard rounded="md" class="p-4 md:p-6">
            <DemoVcardRight />
          </BaseCard>
          <!-- Calendar -->
          <BaseCard rounded="md" class="p-4">
            <AddonDatepicker v-model="date" locale="en" label="Start date" />
          </BaseCard>
          <!-- Followers -->
          <BaseCard rounded="md" class="p-4 md:p-6">
            <DemoFollowersCompact />
          </BaseCard>
          <!-- Notifications -->
          <BaseCard rounded="md" class="p-4 md:p-6">
            <DemoNotificationsCompact />
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
