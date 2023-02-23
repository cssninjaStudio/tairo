<script setup lang="ts">
definePageMeta({
  title: 'Analytics',
  layout: 'sidebar',
})
</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <!-- Grid column -->
    <div class="col-span-12 ltablet:col-span-9 lg:col-span-9">
      <!-- Inner grid -->
      <div class="grid grid-cols-12 gap-4">
        <!-- Stat tile -->
        <div class="col-span-12 md:col-span-4">
          <BaseCard class="p-4">
            <div class="flex items-center justify-between mb-1">
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
                class="bg-success-100 text-success-500 dark:bg-success-500/20 dark:text-success-400 dark:border-2 dark:border-success-500"
                shape="circle"
              >
                <Icon name="ph:sketch-logo-duotone" class="w-5 h-5" />
              </BaseIconBox>
            </div>
            <div class="mb-2">
              <BaseHeading
                as="h4"
                size="3xl"
                weight="bold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>7,549</span>
              </BaseHeading>
            </div>
            <div
              class="flex items-center gap-1 font-sans text-sm text-success-500"
            >
              <span>+7.8%</span>
              <Icon name="lucide:trending-up" class="w-5 h-5" />
              <span class="text-xs text-muted-400">since last month</span>
            </div>
          </BaseCard>
        </div>
        <!-- Stat tile -->
        <div class="col-span-12 md:col-span-4">
          <BaseCard class="p-4">
            <div class="flex items-center justify-between mb-1">
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
                class="bg-yellow-100 text-yellow-500 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-2 dark:border-yellow-500"
                shape="circle"
              >
                <Icon name="ph:rocket-duotone" class="w-5 h-5" />
              </BaseIconBox>
            </div>
            <div class="mb-2">
              <BaseHeading
                as="h4"
                size="3xl"
                weight="bold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>1,611</span>
              </BaseHeading>
            </div>
            <div
              class="flex items-center gap-1 font-sans text-sm text-danger-500"
            >
              <span>-2.7%</span>
              <Icon name="lucide:trending-down" class="w-5 h-5" />
              <span class="text-xs text-muted-400">going down</span>
            </div>
          </BaseCard>
        </div>
        <!-- Stat tile -->
        <div class="col-span-12 md:col-span-4">
          <BaseCard class="p-4">
            <div class="flex items-center justify-between mb-1">
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
                class="bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-2 dark:border-primary-500"
                shape="circle"
              >
                <Icon name="ph:megaphone-simple-duotone" class="w-5 h-5" />
              </BaseIconBox>
            </div>
            <div class="mb-2">
              <BaseHeading
                as="h4"
                size="3xl"
                weight="bold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>862</span>
              </BaseHeading>
            </div>
            <div
              class="flex items-center gap-1 font-sans text-sm text-success-500"
            >
              <span>+4.5%</span>
              <Icon name="lucide:trending-up" class="w-5 h-5" />
              <span class="text-xs text-muted-400">going up</span>
            </div>
          </BaseCard>
        </div>
        <!-- Chart -->
        <div class="col-span-12 md:col-span-8">
          <BaseCard class="p-6">
            <div class="flex items-center justify-between mb-2">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Revenue</span>
              </BaseHeading>
              <NuxtLink
                to="#/"
                class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
              >
                Details
              </NuxtLink>
            </div>
            <div class="flex gap-8">
              <div>
                <span class="font-sans text-xs text-muted-400">This month</span>
                <p class="font-sans font-medium text-lg text-primary-500">
                  $75,689
                </p>
              </div>
              <div>
                <span class="font-sans text-xs text-muted-400">Last month</span>
                <p
                  class="font-sans font-medium text-lg text-muted-800 dark:text-muted-100"
                >
                  $59,724
                </p>
              </div>
            </div>
            <ExampleApexchartLineRevenue />
          </BaseCard>
        </div>
        <!-- Chart -->
        <div class="col-span-12 md:col-span-4">
          <BaseCard class="h-full flex flex-col p-6">
            <div class="flex items-center justify-between mb-10">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Goal Overview</span>
              </BaseHeading>
            </div>
            <div class="mb-6">
              <ExampleApexchartRadialGoal />
            </div>
            <div class="mt-auto">
              <div
                class="w-full flex text-center pt-4 border-t border-muted-200 dark:border-muted-700"
              >
                <div
                  class="flex-1 px-2 border-r border-muted-200 dark:border-muted-700"
                >
                  <span class="font-sans text-xs text-muted-400">
                    Completed
                  </span>
                  <p
                    class="font-sans font-medium text-lg text-muted-800 dark:text-muted-100"
                  >
                    1431
                  </p>
                </div>
                <div class="flex-1 px-2">
                  <span class="font-sans text-xs text-muted-400">
                    In Progress
                  </span>
                  <p
                    class="font-sans font-medium text-lg text-muted-800 dark:text-muted-100"
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
          <BaseCard class="h-full flex flex-col p-6">
            <div class="flex items-center justify-between mb-5">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Sales Growth</span>
              </BaseHeading>
            </div>
            <div class="mb-6">
              <ExampleApexchartRadialGrowth />
            </div>
            <div class="mt-auto">
              <div class="flex justify-center gap-2">
                <Icon name="logos:shopify" class="w-8 h-8" />
                <div>
                  <BaseHeading
                    as="h5"
                    size="sm"
                    weight="light"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>Shopify</span>
                  </BaseHeading>
                  <BaseParagraph size="xs">
                    <span class="text-muted-400">Best selling channel</span>
                  </BaseParagraph>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
        <!-- Chart -->
        <div class="col-span-12 md:col-span-8">
          <BaseCard class="relative p-6">
            <div class="mb-6">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Profit</span>
              </BaseHeading>
            </div>
            <ExampleApexchartBarSalesProfit />
          </BaseCard>
        </div>
      </div>
    </div>
    <!-- Grid column -->
    <div class="col-span-12 ltablet:col-span-3 lg:col-span-3">
      <!--Inner column -->
      <div
        class="grid ptablet:grid-cols-2 ltablet:flex ltablet:flex-col lg:flex lg:flex-col gap-4"
      >
        <!-- Vcard -->
        <BaseCard class="p-6">
          <WidgetVcardRight />
        </BaseCard>
        <!-- Calendar -->
        <BaseCard class="p-6">
          <WidgetDatepicker />
        </BaseCard>
        <!-- Followers -->
        <BaseCard class="p-6">
          <WidgetFollowersCompact />
        </BaseCard>
        <!-- Notifications -->
        <BaseCard class="p-6">
          <WidgetNotificationsCompact />
        </BaseCard>
      </div>
    </div>
  </div>
</template>
