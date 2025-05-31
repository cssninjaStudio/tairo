<script setup lang="ts">
definePageMeta({
  title: 'Sales',
  preview: {
    title: 'Sales dashboard',
    description: 'For sales and marketing',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-sales.png',
    srcDark: '/img/screens/dashboards-sales-dark.png',
    order: 6,
  },
})

// Datepicker
const date = ref(new Date())
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20 overflow-hidden">
    <!-- Header -->
    <div class="mb-8 flex flex-col justify-between md:flex-row md:items-center">
      <div
        class="lg:landscape:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-start 2xl:landscape:max-w-full"
      >
        <BaseAvatar src="/img/avatars/10.svg" size="lg" />
        <div>
          <BaseHeading
            as="h2"
            size="xl"
            weight="medium"
            lead="tight"
            class="text-muted-900 dark:text-white"
          >
            <span>Welcome back, Kendra</span>
          </BaseHeading>
          <BaseParagraph size="sm">
            <span class="text-muted-600 dark:text-muted-400">
              Happy to see you again on your dashboard.
            </span>
          </BaseParagraph>
        </div>
      </div>
      <div
        class="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start"
      >
        <BaseButton rounded="md">
          <span>View Reports</span>
        </BaseButton>
        <BaseButton variant="primary" rounded="md">
          <span>Transactions</span>
        </BaseButton>
      </div>
    </div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-4">
      <!-- Sparkline -->
      <div
        class="lg:landscape:col-span-3 relative col-span-12 md:col-span-6 2xl:landscape:col-span-3"
      >
        <BaseCard rounded="md" class="pt-4">
          <DemoChartAreaSparkSalesOne />
        </BaseCard>
      </div>
      <!-- Sparkline -->
      <div
        class="lg:landscape:col-span-3 relative col-span-12 md:col-span-6 2xl:landscape:col-span-3"
      >
        <BaseCard rounded="md" class="pt-4">
          <DemoChartAreaSparkSalesTwo />
        </BaseCard>
      </div>
      <!-- Sparkline -->
      <div
        class="lg:landscape:col-span-3 relative col-span-12 md:col-span-6 2xl:landscape:col-span-3"
      >
        <BaseCard rounded="md" class="pt-4">
          <DemoChartAreaSparkSalesThree />
        </BaseCard>
      </div>
      <!-- Sparkline -->
      <div
        class="lg:landscape:col-span-3 relative col-span-12 md:col-span-6 2xl:landscape:col-span-3"
      >
        <BaseCard rounded="md" class="pt-4">
          <DemoChartAreaSparkSalesFour />
        </BaseCard>
      </div>
      <!-- Chart -->
      <div class="relative col-span-12 xl:landscape:col-span-6 2xl:landscape:col-span-7">
        <BaseCard rounded="md" class="p-4 md:p-6 flex flex-col h-full">
          <div class="mb-2 flex items-center justify-between">
            <BaseHeading
              as="h3"
              size="md"
              weight="medium"
              lead="tight"
              class="text-muted-900 dark:text-white"
            >
              <span>Revenue Overview</span>
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
            <div>
              <span class="text-muted-600 dark:text-muted-400 font-sans text-xs">Average</span>
              <p
                class="text-muted-900 dark:text-muted-100 font-sans text-lg font-medium"
              >
                $66,561
              </p>
            </div>
          </div>
          <div class="mt-auto">
            <DemoChartAreaCustomers />
          </div>
        </BaseCard>
      </div>
      <!-- Column -->
      <div class="relative col-span-12 xl:landscape:col-span-6 2xl:landscape:col-span-5">
        <div class="flex h-full flex-col gap-4">
          <!-- Chart -->
          <BaseCard class="flex-1 p-6">
            <div class="flex items-center justify-center">
              <div class="flex-1">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 mb-4 dark:text-white"
                >
                  <span>Sales Revenue</span>
                </BaseHeading>
                <BaseHeading
                  as="h4"
                  size="lg"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 mb-2 dark:text-white"
                >
                  <span>$8,641.26</span>
                </BaseHeading>
                <BaseParagraph size="xs">
                  <span class="text-muted-600 dark:text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Bonum integritas corporis.
                  </span>
                </BaseParagraph>
              </div>
              <div class="flex-1">
                <DemoChartRadialSalesRevenue />
              </div>
            </div>
          </BaseCard>
          <!-- Charts -->
          <BaseCard rounded="md" class="flex-1 p-6">
            <div class="mb-6 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="medium"
                lead="tight"
                class="text-muted-900 dark:text-white"
              >
                <span>Additional Stats</span>
              </BaseHeading>
            </div>
            <div class="flex justify-between">
              <div class="flex flex-col gap-2 text-center w-1/3">
                <DemoChartRadialSmallOne />
                <div class="-mt-6">
                  <BaseHeading
                    as="h5"
                    size="md"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>278</span>
                  </BaseHeading>
                  <BaseParagraph size="xs">
                    <span class="text-muted-600 dark:text-muted-400">New Deals</span>
                  </BaseParagraph>
                </div>
              </div>
              <div class="flex flex-col gap-2 text-center w-1/3">
                <DemoChartRadialSmallTwo />
                <div class="-mt-6">
                  <BaseHeading
                    as="h5"
                    size="md"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>1,519</span>
                  </BaseHeading>
                  <BaseParagraph size="xs">
                    <span class="text-muted-600 dark:text-muted-400">Proposals</span>
                  </BaseParagraph>
                </div>
              </div>
              <div class="flex flex-col gap-2 text-center w-1/3">
                <DemoChartRadialSmallThree />
                <div class="-mt-6">
                  <BaseHeading
                    as="h5"
                    size="md"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>3,214</span>
                  </BaseHeading>
                  <BaseParagraph size="xs">
                    <span class="text-muted-600 dark:text-muted-400">Closed deals</span>
                  </BaseParagraph>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
      <!-- Column -->
      <BaseCard
        rounded="md"
        class="flex flex-col p-4 md:p-6 lg:landscape:col-span-4 relative col-span-12 md:col-span-6 2xl:landscape:col-span-3"
      >
        <div class="mb-6 flex items-center justify-between">
          <BaseHeading
            as="h3"
            size="md"
            weight="medium"
            lead="tight"
            class="text-muted-900 dark:text-white"
          >
            <span>Personal Score</span>
          </BaseHeading>
        </div>
        <div class="py-16">
          <DemoChartRadialGaugeAlt class="-mt-14" />
        </div>
        <div class="mt-auto text-center">
          <BaseParagraph size="sm">
            <span class="text-muted-500 dark:text-muted-400">
              Your score has been calculated based on the latest metrics
            </span>
          </BaseParagraph>
        </div>
      </BaseCard>
      <!-- Column -->
      <BaseCard
        rounded="md"
        class="lg:landscape:col-span-4 relative p-4 md:p-6 col-span-12 md:col-span-6 2xl:landscape:col-span-6"
      >
        <div class="mb-6">
          <BaseHeading
            as="h3"
            size="md"
            weight="medium"
            lead="tight"
            class="text-muted-900 dark:text-white"
          >
            <span>Orders Summary</span>
          </BaseHeading>
        </div>
        <DemoChartBarOrders />
      </BaseCard>
      <!-- Column -->
      <BaseCard
        class="p-2 lg:landscape:col-span-4 relative col-span-12 md:col-span-6 2xl:landscape:col-span-3"
        rounded="md"
      >
        <LazyAddonDatepicker v-model="date" locale="en" label="Start date" />
      </BaseCard>
    </div>
  </div>
</template>
