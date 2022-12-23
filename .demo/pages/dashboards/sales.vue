<script setup lang="ts">
definePageMeta({
  title: 'Sales',
  layout:'sidebar',
})
</script>

<template>
  <div>
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between mb-8">
      <div
        class="flex flex-col md:flex-row items-center gap-4 text-center md:text-left max-w-[425px] ltablet:max-w-full lg:max-w-full"
      >
        <BaseAvatar src="/img/avatars/2.svg" size="lg" />
        <div>
          <BaseHeading
            as="h2"
            size="xl"
            weight="light"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Welcome back, Maya</span>
          </BaseHeading>
          <BaseParagraph>
            <span class="text-muted-500">
              Happy to see you again on your dashboard.
            </span>
          </BaseParagraph>
        </div>
      </div>
      <div
        class="flex items-center justify-center md:justify-start gap-2 mt-4 md:mt-0"
      >
        <BaseButton>
          <span>View Reports</span>
        </BaseButton>
        <BaseButton color="primary">
          <span>Transactions</span>
        </BaseButton>
      </div>
    </div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Sparkline -->
      <div class="relative col-span-12 md:col-span-6 ltablet:col-span-3 lg:col-span-3">
        <BaseCard class="pt-4">
          <ExampleApexChartSparkSalesOne />
        </BaseCard>
      </div>
      <!-- Sparkline -->
      <div class="relative col-span-12 md:col-span-6 ltablet:col-span-3 lg:col-span-3">
        <BaseCard class="pt-4">
          <ExampleApexChartSparkSalesTwo />
        </BaseCard>
      </div>
      <!-- Sparkline -->
      <div class="relative col-span-12 md:col-span-6 ltablet:col-span-3 lg:col-span-3">
        <BaseCard class="pt-4">
          <ExampleApexChartSparkSalesThree />
        </BaseCard>
      </div>
      <!-- Sparkline -->
      <div class="relative col-span-12 md:col-span-6 ltablet:col-span-3 lg:col-span-3">
        <BaseCard class="pt-4">
          <ExampleApexChartSparkSalesFour />
        </BaseCard>
      </div>
      <!-- Chart -->
      <div class="relative col-span-12 md:col-span-7">
        <BaseCard class="p-6">
          <div class="flex items-center justify-between mb-2">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Revenue Overview</span>
            </BaseHeading>
            <RouterLink to="/" class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300">Details</RouterLink>
          </div>
          <div class="flex gap-8">
            <div>
              <span class="font-sans text-xs text-muted-400">This month</span>
              <p class="font-sans font-medium text-lg text-primary-500">$75,689</p>
            </div>
            <div>
              <span class="font-sans text-xs text-muted-400">Last month</span>
              <p class="font-sans font-medium text-lg text-muted-800 dark:text-muted-100">$59,724</p>
            </div>
            <div>
              <span class="font-sans text-xs text-muted-400">Average</span>
              <p class="font-sans font-medium text-lg text-muted-800 dark:text-muted-100">$66,561</p>
            </div>
          </div>
          <ExampleApexchartAreaCustomer />
        </BaseCard>
      </div>
      <!-- Column -->
      <div class="relative col-span-12 md:col-span-5">
        <div class="flex flex-col gap-6 h-full">
          <!-- Chart -->
          <BaseCard class="flex-1 p-6">
            <div class="flex items-center justify-center">
              <div class="flex-1">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white mb-4"
                >
                  <span>Sales Revenue</span>
                </BaseHeading>
                <BaseHeading
                  as="h4"
                  size="lg"
                  weight="light"
                  lead="tight"
                  class="text-muted-800 dark:text-white mb-2"
                >
                  <span>$8,641.26</span>
                </BaseHeading>
                <BaseParagraph size="xs">
                  <span class="text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum integritas corporis.
                  </span>
                </BaseParagraph>
              </div>
              <div class="flex-1">
                <ExampleApexchartRadialSalesRevenue />
              </div>
            </div>
          </BaseCard>
          <!-- Charts -->
          <BaseCard class="flex-1 p-6">
            <div class="flex items-center justify-between mb-6">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Additional Stats</span>
              </BaseHeading>
            </div>
            <div class="flex justify-between gap-2">
              <div class="flex-1 flex flex-col gap-2 text-center">
                <ExampleApexchartRadialSmallOne />
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
                    <span class="text-muted-400">
                      New Deals
                    </span>
                  </BaseParagraph>
                </div>
              </div>
              <div class="flex-1 flex flex-col gap-2 text-center">
                <ExampleApexchartRadialSmallTwo />
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
                    <span class="text-muted-400">
                      Proposals
                    </span>
                  </BaseParagraph>
                </div>
              </div>
              <div class="flex-1 flex flex-col gap-2 text-center">
                <ExampleApexchartRadialSmallThree />
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
                    <span class="text-muted-400">
                      Closed deals
                    </span>
                  </BaseParagraph>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
      <!-- Column -->
      <div class="relative col-span-12 md:col-span-6 ltablet:col-span-4 lg:col-span-3">
        <BaseCard class="flex flex-col p-6">
          <div class="flex items-center justify-between mb-6">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Personal Score</span>
            </BaseHeading>
          </div>
          <div class="py-16">
            <ExampleApexchartGaugePersonal />
          </div>
          <div class="text-center mt-auto">
            <BaseParagraph size="sm">
              <span class="text-muted-400">
                Your score has been calculated based on the latest metrics
              </span>
            </BaseParagraph>
          </div>
        </BaseCard>
      </div>
      <!-- Column -->
      <div class="relative col-span-12 md:col-span-6 ltablet:col-span-4 lg:col-span-6">
        <BaseCard class="relative p-6">
          <div class="mb-6">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Orders Summary</span>
            </BaseHeading>
          </div>
          <ExampleApexchartBarOrders />
        </BaseCard>
      </div>
      <!-- Column -->
      <div class="relative col-span-12 md:col-span-6 ltablet:col-span-4 lg:col-span-3">
        <!-- Calendar -->
        <BaseCard class="p-6">
          <WidgetDatepicker />
        </BaseCard>
      </div>
    </div>
  </div>
</template>