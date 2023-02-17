<script setup lang="ts">
import ExampleApexchartRadialEvolution from '~~/components/ExampleApexchartRadialEvolution.vue'

definePageMeta({
  title: 'Cryptocurrency',
  layout: 'sidebar',
})

const activePeriod = ref('week')
</script>

<template>
  <div>
    <!-- Header -->
    <div
      class="flex flex-col sm:flex-row sm:items-center justify-between gap-y-4 mb-6"
    >
      <div>
        <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
          Latest Bitcoin (BTC) Price Chart
        </BaseParagraph>
        <BaseHeading
          size="3xl"
          weight="bold"
          class="text-muted-800 dark:text-white"
        >
          <span
            class="after:content-['+3.4%'] after:relative after:-top-3 after:-right-2 after:text-sm after:text-success-500"
          >
            {{ formatPrice(10584.3) }}
          </span>
        </BaseHeading>
      </div>
      <div class="flex sm:justify-end gap-2">
        <BaseButtonAction
          :color="activePeriod === 'hour' ? 'primary' : 'default'"
          @click="activePeriod = 'hour'"
        >
          Hour
        </BaseButtonAction>
        <BaseButtonAction
          :color="activePeriod === 'day' ? 'primary' : 'default'"
          @click="activePeriod = 'day'"
        >
          Day
        </BaseButtonAction>
        <BaseButtonAction
          :color="activePeriod === 'week' ? 'primary' : 'default'"
          @click="activePeriod = 'week'"
        >
          Week
        </BaseButtonAction>
        <BaseButtonAction
          :color="activePeriod === 'month' ? 'primary' : 'default'"
          @click="activePeriod = 'month'"
        >
          Month
        </BaseButtonAction>
        <BaseButtonAction
          :color="activePeriod === 'year' ? 'primary' : 'default'"
          @click="activePeriod = 'year'"
        >
          Year
        </BaseButtonAction>
      </div>
    </div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-4">
      <!-- Column -->
      <div class="col-span-12 ltablet:col-span-8 lg:col-span-8 gap-4">
        <div class="flex flex-col gap-4">
          <!-- Tile grid -->
          <div class="grid sm:grid-cols-3 gap-4">
            <!-- Tile -->
            <div class="relative">
              <BaseCard class="p-5 space-y-1">
                <BaseParagraph
                  size="xs"
                  class="text-muted-500 dark:text-muted-400"
                >
                  Market Cap
                </BaseParagraph>
                <BaseHeading
                  size="lg"
                  weight="semibold"
                  class="text-muted-800 dark:text-white"
                >
                  <span>{{ formatPrice(129992260090) }}</span>
                </BaseHeading>
              </BaseCard>
            </div>
            <!-- Tile -->
            <div class="relative">
              <BaseCard class="p-5 space-y-1">
                <BaseParagraph
                  size="xs"
                  class="text-muted-500 dark:text-muted-400"
                >
                  Volume 24h
                </BaseParagraph>
                <BaseHeading
                  size="lg"
                  weight="semibold"
                  class="text-muted-800 dark:text-white"
                >
                  <span>{{ formatPrice(453178) }}K</span>
                </BaseHeading>
              </BaseCard>
            </div>
            <!-- Tile -->
            <div class="relative">
              <BaseCard class="p-5 space-y-1">
                <BaseParagraph
                  size="xs"
                  class="text-muted-500 dark:text-muted-400"
                >
                  Low/high 24h
                </BaseParagraph>
                <BaseHeading
                  size="lg"
                  weight="semibold"
                  class="text-muted-800 dark:text-white"
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
                class="text-muted-800 dark:text-white"
              >
                <span>BTC Price Chart</span>
              </BaseHeading>
            </div>
            <ExampleApexchartAreaBtcPrice />
          </BaseCard>
          <!-- Subgrid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Chart -->
            <div class="relative">
              <BaseCard class="p-6">
                <div class="flex items-center justify-between mb-6">
                  <BaseHeading
                    as="h3"
                    size="md"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>BTC Evolution</span>
                  </BaseHeading>
                  <NuxtLink
                    to="/"
                    class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
                  >
                    Buy BTC
                  </NuxtLink>
                </div>
                <ExampleApexchartRadialEvolution />
              </BaseCard>
            </div>
            <!-- Chart -->
            <div class="relative">
              <BaseCard class="p-6">
                <div class="flex items-center justify-between mb-6">
                  <BaseHeading
                    as="h3"
                    size="md"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>BTC Popularity</span>
                  </BaseHeading>
                  <NuxtLink
                    to="/"
                    class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
                  >
                    Buy BTC
                  </NuxtLink>
                </div>
                <ExampleApexchartRadialPopularity />
              </BaseCard>
            </div>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div class="col-span-12 ltablet:col-span-4 lg:col-span-4">
        <div class="flex flex-col gap-4">
          <!-- Currency -->
          <div class="relative">
            <BaseCard class="p-8">
              <div class="flex items-center gap-2 mb-6">
                <Icon
                  name="cryptocurrency:btc"
                  class="h-9 w-9 text-orange-400"
                />
                <div>
                  <BaseHeading
                    as="h3"
                    size="md"
                    weight="semibold"
                    lead="snug"
                    class="text-muted-800 dark:text-white"
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
                <div class="ml-auto">
                  <BaseButtonAction
                    size="sm"
                    class="text-muted-500 dark:text-muted-400"
                  >
                    Currencies
                  </BaseButtonAction>
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
              <div class="flex items-center gap-2 mt-6">
                <BaseButton color="default" class="w-full">
                  <span>Compare</span>
                </BaseButton>
                <BaseButton color="primary" class="w-full">
                  <span>Buy BTC</span>
                </BaseButton>
              </div>
            </BaseCard>
          </div>
          <!-- Widget -->
          <div class="relative">
            <BaseCard class="p-6">
              <!-- Title -->
              <div class="flex items-center justify-between mb-8">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>My Team</span>
                </BaseHeading>
                <NuxtLink
                  to="/"
                  class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
                >
                  View All
                </NuxtLink>
              </div>
              <WidgetTeamListCompact actions />
            </BaseCard>
          </div>
          <!--Grid item-->
          <div class="relative">
            <BaseCard class="p-6">
              <!-- Title -->
              <div class="flex items-center justify-between mb-8">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>Popular Coins</span>
                </BaseHeading>
                <NuxtLink
                  to="/"
                  class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
                >
                  View All
                </NuxtLink>
              </div>
              <WidgetPopularCryptos />
            </BaseCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
