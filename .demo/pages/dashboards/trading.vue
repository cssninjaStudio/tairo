<script setup lang="ts">
definePageMeta({
  title: 'Trading',
  preview: {
    title: 'Trading',
    description: 'For finance and investment',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-trading.png',
    srcDark: '/img/screens/dashboards-trading-dark.png',
    order: 5,
    new: true,
  },
})

const banks = ref([
  {
    id: 1,
    name: 'Chase',
    logo: '/img/logos/companies/chase-full.svg',
    series: [
      {
        name: 'Stock value',
        data: [
          1231.37, 1453.78, 1739.87, 2156.32, 1932.29, 1832.38, 1732.29,
          1832.29, 1989.39, 1783.29, 2130.39, 2256.39,
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Eurasian',
    logo: '/img/logos/companies/eurasian-full.svg',
    series: [
      {
        name: 'Stock value',
        data: [
          1200.23, 1405.67, 1653.42, 1950.18, 2301.76, 2714.92, 3196.57,
          3753.61, 4393.04, 5121.88, 5957.25, 6907.34,
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Bank of America',
    logo: '/img/logos/companies/bank-of-america-full.svg',
    series: [
      {
        name: 'Stock value',
        data: [
          1300.45, 1425.67, 1578.93, 1750.21, 1940.56, 2151.99, 2386.56,
          2646.32, 2933.34, 3249.67, 3597.38, 3979.54,
        ],
      },
    ],
  },
])

const activePeriod = ref('year')
const orderShares = ref()
const selectedBank = ref(banks.value[0])
const target = ref(null)
const open = ref(false)

function openDropdown() {
  open.value = true
}

onClickOutside(target, () => (open.value = false))

function setAccount(account: any) {
  selectedBank.value = account
  open.value = false
}

const areaBtcPrice = reactive(useStockPrice())

function useStockPrice() {
  const { primary } = useTailwindColors()

  const type = 'area'
  const height = 390

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth',
    },
    colors: [primary.value],
    legend: {
      show: false,
      position: 'top',
    },
    grid: {
      show: false,
      padding: {
        left: -10,
        right: 0,
        bottom: 10,
      },
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2023-01-01T00:00:00.000Z',
        '2023-02-01T00:00:00.000Z',
        '2023-03-01T00:00:00.000Z',
        '2023-04-01T00:00:00.000Z',
        '2023-05-01T00:00:00.000Z',
        '2023-06-01T00:00:00.000Z',
        '2023-07-01T00:00:00.000Z',
        '2023-08-01T00:00:00.000Z',
        '2023-09-01T00:00:00.000Z',
        '2023-10-01T00:00:00.000Z',
        '2023-11-01T00:00:00.000Z',
        '2023-12-01T00:00:00.000Z',
      ],
    },
    yaxis: {
      labels: {
        show: false,
        offsetX: -15,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
      y: {
        formatter: (val: number) => `$${val}`,
      },
    },
  }

  const series = ref(selectedBank.value.series)

  return {
    type,
    height,
    options,
    series,
  }
}
</script>

<template>
  <div class="pb-20">
    <!-- Header -->
    <div
      class="mb-6 flex flex-col justify-between gap-y-4 sm:flex-row sm:items-center"
    >
      <div>
        <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
          Current Trading Balance
        </BaseParagraph>
        <BaseHeading
          size="4xl"
          weight="medium"
          class="text-muted-800 dark:text-white"
        >
          <span
            class="after:text-success-500 after:relative after:-end-2 after:-top-3 after:text-sm after:content-['+3.4%']"
          >
            {{ formatPrice(22529.43) }}
          </span>
        </BaseHeading>
      </div>
      <div class="flex gap-2 sm:justify-end">
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
      <div class="ltablet:col-span-8 col-span-12 gap-4 lg:col-span-8">
        <div class="flex flex-col gap-4">
          <!-- Tile grid -->
          <div class="grid gap-4 sm:grid-cols-3">
            <!-- Tile -->
            <div class="relative">
              <BaseCard
                rounded="md"

                class="flex gap-3 p-5"
              >
                <div class="shrink-0">
                  <img
                    src="/img/logos/companies/chase-full.svg"
                    alt="Bank logo"
                    class="size-6"
                  >
                </div>
                <div class="space-y-1">
                  <BaseParagraph
                    size="xs"
                    class="text-muted-500 dark:text-muted-400"
                  >
                    Chase stocks
                  </BaseParagraph>
                  <BaseHeading
                    as="h5"
                    size="md"
                    weight="medium"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>+{{ formatPrice(53.14) }}</span>
                    <span class="text-success-500 ps-2 text-sm font-semibold">(+1.2%)</span>
                  </BaseHeading>
                </div>
              </BaseCard>
            </div>
            <!-- Tile -->
            <div class="relative">
              <BaseCard
                rounded="md"

                class="flex gap-3 p-5"
              >
                <div class="shrink-0">
                  <img
                    src="/img/logos/companies/eurasian-full.svg"
                    alt="Bank logo"
                    class="size-6"
                  >
                </div>
                <div class="space-y-1">
                  <BaseParagraph
                    size="xs"
                    class="text-muted-500 dark:text-muted-400"
                  >
                    Eurasian stocks
                  </BaseParagraph>
                  <BaseHeading
                    as="h5"
                    size="md"
                    weight="medium"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>-{{ formatPrice(12.37) }}</span>
                    <span class="text-danger-500 ps-2 text-sm font-semibold">(-0.7%)</span>
                  </BaseHeading>
                </div>
              </BaseCard>
            </div>
            <!-- Tile -->
            <div class="relative">
              <BaseCard
                rounded="md"

                class="flex gap-3 p-5"
              >
                <div class="shrink-0">
                  <img
                    src="/img/logos/companies/bank-of-america-full.svg"
                    alt="Bank logo"
                    class="size-6"
                  >
                </div>
                <div class="space-y-1">
                  <BaseParagraph
                    size="xs"
                    class="text-muted-500 dark:text-muted-400"
                  >
                    BOA stocks
                  </BaseParagraph>
                  <BaseHeading
                    as="h5"
                    size="md"
                    weight="medium"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>-{{ formatPrice(23.19) }}</span>
                    <span class="text-success-500 ps-2 text-sm font-semibold">(+1.9%)</span>
                  </BaseHeading>
                </div>
              </BaseCard>
            </div>
          </div>
          <!-- Chart -->
          <div class="relative">
            <div class="absolute end-2 top-2 w-52">
              <div ref="target" class="relative z-10 w-full">
                <button
                  type="button"
                  class="click-blur dark:bg-muted-950 border-muted-200 dark:border-muted-800 w-full rounded-full border bg-white p-3"
                  @click="openDropdown()"
                >
                  <span class="flex w-full items-center gap-3 text-start">
                    <img
                      :src="selectedBank.logo"
                      :alt="selectedBank.name"
                      class="size-6 shrink-0"
                    >
                    <div>
                      <BaseText
                        size="sm"
                        class="text-muted-800 dark:text-muted-200 block capitalize"
                      >
                        {{ selectedBank.name }}
                      </BaseText>
                    </div>
                    <Icon
                      name="lucide:chevron-down"
                      class="text-muted-400 ms-auto size-4 transition-transform duration-300"
                      :class="open && 'rotate-180'"
                    />
                  </span>
                </button>
                <Transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <div
                    v-if="open"
                    class="border-muted-200 dark:border-muted-800 dark:bg-muted-950 shadow-muted-400/10 dark:shadow-muted-800/10 absolute start-0 top-14 w-full rounded-xl border bg-white p-2 shadow-xl"
                  >
                    <!--banks-->
                    <ul>
                      <li v-for="bank in banks" :key="bank.id">
                        <button
                          type="button"
                          class="hover:bg-muted-100 dark:hover:bg-muted-900 flex w-full items-center gap-3 rounded-lg px-4 py-2 text-start transition-colors duration-300"
                          @click="setAccount(bank)"
                        >
                          <img
                            :src="bank.logo"
                            :alt="bank.name"
                            class="size-6 shrink-0"
                          >
                          <span class="block">
                            <span
                              class="font-heading text-muted-800 dark:text-muted-200 block text-sm capitalize"
                            >
                              {{ bank.name }}
                            </span>
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </Transition>
              </div>
            </div>
            <AddonApexcharts v-bind="areaBtcPrice" />
          </div>
          <!-- Table -->
          <div>
            <BaseCard
              rounded="md"
              class="p-8"
            >
              <div class="mb-6 flex items-center justify-between">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>Trending Stocks</span>
                </BaseHeading>
                <DemoLinkArrow to="#" label="View all" />
              </div>
              <div
                class="divide-muted-200 dark:divide-muted-800 mb-2 space-y-4 divide-y"
              >
                <!-- List item -->
                <div class="flex items-center gap-2 pt-4">
                  <div class="shrink-0">
                    <img
                      src="/img/logos/companies/chase-full.svg"
                      alt="Bank logo"
                      class="size-8"
                    >
                  </div>

                  <div>
                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="medium"
                      lead="snug"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>Chase Bank</span>
                    </BaseHeading>
                  </div>
                  <div class="ms-auto flex items-center gap-1">
                    <BaseHeading
                      as="h5"
                      size="md"
                      weight="medium"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>+{{ formatPrice(53.14) }}</span>
                      <span class="text-success-500 ps-2 text-xs font-semibold">(+1.2%)</span>
                    </BaseHeading>
                    <Icon
                      name="lucide:trending-up"
                      class="text-success-500 size-4"
                    />
                  </div>
                </div>
                <!-- List item -->
                <div class="flex items-center gap-2 pt-4">
                  <div class="shrink-0">
                    <img
                      src="/img/logos/companies/eurasian-full.svg"
                      alt="Bank logo"
                      class="size-8"
                    >
                  </div>

                  <div>
                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="medium"
                      lead="snug"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>Eurasian Bank</span>
                    </BaseHeading>
                  </div>
                  <div class="ms-auto flex items-center gap-1">
                    <BaseHeading
                      as="h5"
                      size="md"
                      weight="medium"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>-{{ formatPrice(12.37) }}</span>
                      <span class="text-danger-500 ps-2 text-xs font-semibold">(-0.7%)</span>
                    </BaseHeading>
                    <Icon
                      name="lucide:trending-down"
                      class="text-danger-500 size-4"
                    />
                  </div>
                </div>
                <!-- List item -->
                <div class="flex items-center gap-2 pt-4">
                  <div class="shrink-0">
                    <img
                      src="/img/logos/companies/bank-of-america-full.svg"
                      alt="Bank logo"
                      class="size-8"
                    >
                  </div>

                  <div>
                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="medium"
                      lead="snug"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>Bank of America</span>
                    </BaseHeading>
                  </div>
                  <div class="ms-auto flex items-center gap-1">
                    <BaseHeading
                      as="h5"
                      size="md"
                      weight="medium"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>+{{ formatPrice(23.19) }}</span>
                      <span class="text-success-500 ps-2 text-xs font-semibold">(+1.9%)</span>
                    </BaseHeading>
                    <Icon
                      name="lucide:trending-up"
                      class="text-success-500 size-4"
                    />
                  </div>
                </div>
                <!-- List item -->
                <div class="flex items-center gap-2 pt-4">
                  <div class="shrink-0">
                    <img
                      src="/img/logos/companies/td-full.svg"
                      alt="Bank logo"
                      class="size-8"
                    >
                  </div>

                  <div>
                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="medium"
                      lead="snug"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>TD Bank</span>
                    </BaseHeading>
                  </div>
                  <div class="ms-auto flex items-center gap-1">
                    <BaseHeading
                      as="h5"
                      size="md"
                      weight="medium"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>+{{ formatPrice(39.71) }}</span>
                      <span class="text-success-500 ps-2 text-xs font-semibold">(+2.6%)</span>
                    </BaseHeading>
                    <Icon
                      name="lucide:trending-up"
                      class="text-success-500 size-4"
                    />
                  </div>
                </div>
                <!-- List item -->
                <div class="flex items-center gap-2 pt-4">
                  <div class="shrink-0">
                    <img
                      src="/img/logos/companies/kaspi-full.svg"
                      alt="Bank logo"
                      class="size-8"
                    >
                  </div>

                  <div>
                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="medium"
                      lead="snug"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>Kaspi Bank</span>
                    </BaseHeading>
                  </div>
                  <div class="ms-auto flex items-center gap-1">
                    <BaseHeading
                      as="h5"
                      size="md"
                      weight="medium"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>+{{ formatPrice(76.87) }}</span>
                      <span class="text-success-500 ps-2 text-xs font-semibold">(+5.8%)</span>
                    </BaseHeading>
                    <Icon
                      name="lucide:trending-up"
                      class="text-success-500 size-4"
                    />
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div class="ltablet:col-span-4 col-span-12 lg:col-span-4">
        <div class="flex flex-col gap-4">
          <!-- Insights -->
          <div class="relative">
            <BaseCard
              rounded="md"
              class="p-6 md:p-8"
            >
              <div class="mb-6 flex items-center gap-2">
                <TairoLogo class="text-primary-500 size-9" />
                <div>
                  <BaseHeading
                    as="h3"
                    size="md"
                    weight="semibold"
                    lead="snug"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>Market Insights</span>
                  </BaseHeading>
                  <BaseParagraph
                    size="xs"
                    weight="medium"
                    class="text-muted-500 dark:text-muted-400"
                  >
                    Tairo market shares
                  </BaseParagraph>
                </div>
              </div>
              <div class="space-y-5">
                <div class="flex items-center justify-between">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-400"
                  >
                    Open
                  </BaseParagraph>
                  <BaseParagraph
                    size="sm"
                    weight="semibold"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    {{ formatPrice(2394.64) }}
                  </BaseParagraph>
                </div>
                <div class="flex items-center justify-between">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-400"
                  >
                    High
                  </BaseParagraph>
                  <BaseParagraph
                    size="sm"
                    weight="semibold"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    {{ formatPrice(2789.12) }}
                  </BaseParagraph>
                </div>
                <div class="flex items-center justify-between">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-400"
                  >
                    Low
                  </BaseParagraph>
                  <BaseParagraph
                    size="sm"
                    weight="semibold"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    {{ formatPrice(2118.27) }}
                  </BaseParagraph>
                </div>
                <div class="flex items-center justify-between">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-400"
                  >
                    Close
                  </BaseParagraph>
                  <BaseParagraph
                    size="sm"
                    weight="semibold"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    {{ formatPrice(2091.14) }}
                  </BaseParagraph>
                </div>
                <div class="flex items-center justify-between">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-400"
                  >
                    % Change
                  </BaseParagraph>
                  <BaseParagraph
                    size="sm"
                    weight="semibold"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    6.92%
                  </BaseParagraph>
                </div>
              </div>
            </BaseCard>
          </div>
          <!-- Buy shares -->
          <div class="relative">
            <BaseCard
              rounded="md"
              class="p-6 md:p-8"
            >
              <div class="mb-6 flex items-center gap-2">
                <div>
                  <BaseHeading
                    as="h3"
                    size="md"
                    weight="semibold"
                    lead="snug"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>Market Order</span>
                  </BaseHeading>
                  <BaseParagraph
                    size="xs"
                    weight="medium"
                    class="text-muted-500 dark:text-muted-400"
                  >
                    Place a share order
                  </BaseParagraph>
                </div>
              </div>
              <div class="space-y-5">
                <div class="flex items-center justify-between">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-400"
                  >
                    Shares
                  </BaseParagraph>
                  <div class="max-w-[140px]">
                    <BaseInputNumber
                      v-model="orderShares"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-400"
                  >
                    Market price
                  </BaseParagraph>
                  <BaseParagraph
                    size="sm"
                    weight="semibold"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    {{ formatPrice(689.17) }}
                  </BaseParagraph>
                </div>
                <div class="flex items-center justify-between">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-400"
                  >
                    Commissions
                  </BaseParagraph>
                  <BaseParagraph
                    size="sm"
                    weight="semibold"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    {{ formatPrice(0.0) }}
                  </BaseParagraph>
                </div>
                <hr
                  class="bg-transprent border-muted-200 dark:border-muted-800 border-t"
                >
                <div class="flex items-center justify-between">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-400"
                  >
                    Estimated cost
                  </BaseParagraph>
                  <BaseParagraph
                    size="sm"
                    weight="semibold"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    {{ formatPrice(0.0) }}
                  </BaseParagraph>
                </div>
                <div>
                  <BaseButton
                    rounded="md"
                    color="primary"
                    class="w-full"
                  >
                    Buy Shares
                  </BaseButton>
                </div>
              </div>
            </BaseCard>
          </div>
          <!--Learn more-->
          <BaseCard
            rounded="md"
            class="relative flex flex-col gap-4 sm:flex-row"
          >
            <div class="flex flex-col p-6 md:p-8">
              <div
                class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 mb-4 flex size-14 items-center justify-center rounded-full border bg-white"
              >
                <div
                  class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 flex size-10 items-center justify-center rounded-full border bg-white"
                >
                  <Icon
                    name="ph:bank-duotone"
                    class="text-primary-500 size-6"
                  />
                </div>
              </div>
              <BaseHeading
                as="h3"
                weight="medium"
                size="lg"
                class="text-muted-800 dark:text-muted-100 mb-2"
              >
                Try Quick Cash
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400 mb-4"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork
                Idem adhuc; Igitur neque stultorum quisquam beatus.
              </BaseParagraph>
              <div class="mb-1 mt-auto">
                <DemoLinkArrow to="#" label="Learn more about it" />
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
