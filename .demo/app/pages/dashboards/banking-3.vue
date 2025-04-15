<script setup lang="ts">
definePageMeta({
  title: 'Cryptocurrency',
  preview: {
    title: 'Banking dashboard v3',
    description: 'For banking and accounts',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-banking-3.png',
    srcDark: '/img/screens/dashboards-banking-3-dark.png',
    order: 9,
  },
})

const activePeriod = ref('week')
</script>

<template>
  <div class="relative px-4 md:px-6 lg:px-8 pb-20">
    <!-- Header -->
    <div
      class="mb-6 flex flex-col justify-between gap-y-4 sm:flex-row sm:items-center"
    >
      <div>
        <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
          Latest Bitcoin (BTC) Price Chart
        </BaseParagraph>
        <BaseHeading
          size="3xl"
          weight="bold"
          class="text-muted-900 dark:text-white"
        >
          <span
            class="after:text-success-500 after:relative after:-end-2 after:-top-3 after:text-sm after:content-['+3.4%']"
          >
            {{ formatPrice(10584.3) }}
          </span>
        </BaseHeading>
      </div>
      <div class="flex gap-2 sm:justify-end">
        <BaseButton
          size="sm"
          rounded="md"
          :variant="activePeriod === 'hour' ? 'primary' : 'default'"
          @click="activePeriod = 'hour'"
        >
          Hour
        </BaseButton>
        <BaseButton
          size="sm"
          rounded="md"
          :variant="activePeriod === 'day' ? 'primary' : 'default'"
          @click="activePeriod = 'day'"
        >
          Day
        </BaseButton>
        <BaseButton
          size="sm"
          rounded="md"
          :variant="activePeriod === 'week' ? 'primary' : 'default'"
          @click="activePeriod = 'week'"
        >
          Week
        </BaseButton>
        <BaseButton
          size="sm"
          rounded="md"
          :variant="activePeriod === 'month' ? 'primary' : 'default'"
          @click="activePeriod = 'month'"
        >
          Month
        </BaseButton>
        <BaseButton
          size="sm"
          rounded="md"
          :variant="activePeriod === 'year' ? 'primary' : 'default'"
          @click="activePeriod = 'year'"
        >
          Year
        </BaseButton>
      </div>
    </div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-4">
      <!-- Column -->
      <div class="col-span-12 gap-4 lg:col-span-8">
        <div class="flex flex-col gap-4">
          <!-- Tile grid -->
          <div class="grid gap-4 sm:grid-cols-3">
            <!-- Tile -->
            <div class="relative">
              <BaseCard class="space-y-1 p-4">
                <BaseParagraph
                  size="xs"
                  class="text-muted-600 dark:text-muted-400"
                >
                  Market Cap
                </BaseParagraph>
                <BaseHeading
                  size="lg"
                  weight="semibold"
                  class="text-muted-900 dark:text-white"
                >
                  <span>{{ formatPrice(129992260090) }}</span>
                </BaseHeading>
              </BaseCard>
            </div>
            <!-- Tile -->
            <div class="relative">
              <BaseCard class="space-y-1 p-4">
                <BaseParagraph
                  size="xs"
                  class="text-muted-600 dark:text-muted-400"
                >
                  Volume 24h
                </BaseParagraph>
                <BaseHeading
                  size="lg"
                  weight="semibold"
                  class="text-muted-900 dark:text-white"
                >
                  <span>{{ formatPrice(453178) }}K</span>
                </BaseHeading>
              </BaseCard>
            </div>
            <!-- Tile -->
            <div class="relative">
              <BaseCard class="space-y-1 p-4">
                <BaseParagraph
                  size="xs"
                  class="text-muted-600 dark:text-muted-400"
                >
                  Low/high 24h
                </BaseParagraph>
                <BaseHeading
                  size="lg"
                  weight="semibold"
                  class="text-muted-900 dark:text-white"
                >
                  <span>
                    {{ formatPrice(10212) }} - {{ formatPrice(10584) }}
                  </span>
                </BaseHeading>
              </BaseCard>
            </div>
          </div>
          <!-- Chart -->
          <BaseCard class="relative p-6">
            <div class="mb-6">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-900 dark:text-white"
              >
                <span>BTC Price Chart</span>
              </BaseHeading>
            </div>

            <DemoChartAreaBtcPrice />
          </BaseCard>
          <!-- Subgrid -->
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <!-- Chart -->
            <div class="relative">
              <BaseCard class="p-4 md:p-6">
                <div class="mb-6 flex items-center justify-between">
                  <BaseHeading
                    as="h3"
                    size="md"
                    weight="medium"
                    lead="tight"
                    class="text-muted-900 dark:text-white"
                  >
                    <span>BTC Evolution</span>
                  </BaseHeading>
                  <BaseButton
                    size="sm"
                    rounded="md"
                  >
                    Buy BTC
                  </BaseButton>
                </div>
                <DemoChartRadialEvolution />
              </BaseCard>
            </div>
            <!-- Chart -->
            <div class="relative">
              <BaseCard class="p-6">
                <div class="mb-6 flex items-center justify-between">
                  <BaseHeading
                    as="h3"
                    size="md"
                    weight="medium"
                    lead="tight"
                    class="text-muted-900 dark:text-white"
                  >
                    <span>BTC Popularity</span>
                  </BaseHeading>
                  <BaseButton
                    size="sm"
                    rounded="md"
                  >
                    Buy BTC
                  </BaseButton>
                </div>
                <DemoChartRadialPopularity />
              </BaseCard>
            </div>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div class="col-span-12 lg:col-span-4">
        <div class="flex flex-col gap-4">
          <!-- Currency -->
          <div class="relative">
            <BaseCard class="p-4 md:p-6">
              <div class="mb-6 flex items-center gap-2">
                <Icon
                  name="cryptocurrency:btc"
                  class="size-9 text-orange-400"
                />
                <div>
                  <BaseHeading
                    as="h3"
                    size="md"
                    weight="medium"
                    lead="snug"
                    class="text-muted-900 dark:text-white"
                  >
                    <span>Bitcoin</span>
                  </BaseHeading>
                  <BaseParagraph
                    size="xs"
                    weight="semibold"
                    class="text-muted-500 dark:text-muted-400"
                  >
                    BTC
                  </BaseParagraph>
                </div>
                <div class="ms-auto">
                  <BaseButton
                    size="sm"
                    class="text-muted-500 dark:text-muted-400"
                  >
                    Currencies
                  </BaseButton>
                </div>
              </div>
              <div>
                <BaseParagraph
                  size="sm"
                  class="text-muted-500 dark:text-muted-400"
                >
                  Bitcoin is a cryptocurrency invented in 2008 by an unknown
                  person or group of people using the name Satoshi Nakamoto. It
                  was launched anonymously, with no central bank or single
                  administrator, and is peer-to-peer. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </BaseParagraph>
              </div>
              <div class="mt-6 flex items-center gap-2">
                <BaseButton class="w-full">
                  <span>Compare</span>
                </BaseButton>
                <BaseButton variant="primary" class="w-full">
                  <span>Buy BTC</span>
                </BaseButton>
              </div>
            </BaseCard>
          </div>
          <!-- Widget -->
          <div class="relative">
            <BaseCard class="p-4 md:p-6">
              <!-- Title -->
              <div class="mb-8 flex items-center justify-between">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
                >
                  <span>My Team</span>
                </BaseHeading>
                <BaseButton
                  size="sm"
                  rounded="md"
                >
                  View all
                </BaseButton>
              </div>
              <DemoTeamListCompact actions />
            </BaseCard>
          </div>
          <!-- Grid item -->
          <div class="relative">
            <BaseCard class="p-4 md:p-6">
              <!-- Title -->
              <div class="mb-8 flex items-center justify-between">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
                >
                  <span>Popular Coins</span>
                </BaseHeading>
                <BaseButton
                  size="sm"
                  rounded="md"
                >
                  View all
                </BaseButton>
              </div>
              <DemoPopularCryptos />
            </BaseCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
