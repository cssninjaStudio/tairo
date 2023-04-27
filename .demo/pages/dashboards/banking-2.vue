<script setup lang="ts">
definePageMeta({
  title: 'Credit Cards',
  preview: {
    title: 'Banking dashboard v2',
    description: 'For banking and accounts',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-banking-2.png',
    srcDark: '/img/screens/dashboards-banking-2-dark.png',
    order: 8,
  },
})

const cards = [
  {
    type: 'visa',
    endingNumber: 4986,
    balance: 6341.14,
  },
  {
    type: 'visa',
    endingNumber: 3619,
    balance: 2211.27,
  },
  {
    type: 'visa',
    endingNumber: 1231,
    balance: 839.49,
  },
]

const banks = [
  {
    id: 1,
    name: 'X Bank',
    text: 'checking **** **** 0499',
    media: '/img/icons/banking/bank-1.svg',
  },
  {
    id: 2,
    name: 'Bankaria',
    text: 'checking **** **** 1548',
    media: '/img/icons/banking/bank-2.svg',
  },
  {
    id: 3,
    name: 'Bankus',
    text: 'checking **** **** 8448',
    media: '/img/icons/banking/bank-3.svg',
  },
]

const selectedBank = ref(banks[0])
const activeCard = ref(0)

const areaExpenses = reactive(useAreaExpenses())

function useAreaExpenses() {
  const { primary, info, success } = useTailwindColors()
  const type = 'area'
  const height = 250

  const options = {
    chart: {
      foreColor: '#999',
      stacked: true,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        enabledSeries: [0],
        top: -2,
        left: 2,
        blur: 5,
        opacity: 0.06,
      },
    },
    colors: [success.value, primary.value, info.value],
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    title: {
      text: '',
      align: 'left',
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      strokeColor: '#fff',
      strokeWidth: 3,
      strokeOpacity: 1,
      fillOpacity: 1,
      hover: {
        size: 6,
      },
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        offsetX: 0,
        offsetY: -5,
      },
      tooltip: {
        enabled: true,
      },
    },
    grid: {
      show: false,
      padding: {
        left: -5,
        right: 5,
      },
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
    fill: {
      type: 'solid',
      fillOpacity: 0.7,
    },
  }

  const series = ref([
    {
      name: 'Cash Expenses',
      data: generateDayWiseTimeSeries(0, 18),
    },
    {
      name: 'Card Expenses',
      data: generateDayWiseTimeSeries(1, 18),
    },
  ])

  function generateDayWiseTimeSeries(s: number, count: number) {
    const values = [
      [4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
      [2, 3, 8, 7, 22, 16, 23, 7, 11, 5, 12, 5, 10, 4, 15, 2, 6, 2],
    ]
    let i = 0
    const series = []
    let x = new Date('11 Nov 2020').getTime()
    while (i < count) {
      series.push([x, values[s][i]])
      x += 86400000
      i++
    }
    return series
  }

  return {
    type,
    height,
    options,
    series,
  }
}
</script>

<template>
  <div class="relative">
    <div class="flex flex-col gap-6">
      <BaseCard
        class="ltablet:flex-row flex flex-col gap-y-10 overflow-hidden p-6 sm:p-10 lg:flex-row"
      >
        <div class="ltablet:w-3/5 w-full lg:w-3/5">
          <div class="mb-12 flex items-center justify-between">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>My Cards</span>
            </BaseHeading>
            <div></div>
          </div>
          <div
            class="ltablet:pe-12 flex flex-col gap-y-4 sm:flex-row sm:gap-x-8 lg:pe-12"
          >
            <div>
              <BaseButtonIcon shape="rounded">
                <Icon name="lucide:plus" class="h-4 w-4" />
              </BaseButtonIcon>
            </div>
            <div
              class="slimscroll grid max-h-[164px] w-full gap-4 overflow-y-auto px-6 sm:grid-cols-2"
            >
              <DemoCreditCard
                v-for="(card, index) in cards"
                :key="index"
                :balance="card.balance"
                :ending-number="card.endingNumber"
                :type="card.type"
                :active="activeCard === index"
                @click="activeCard = index"
              />
            </div>
          </div>
          <div class="mt-4 flex justify-center text-center">
            <p
              class="ltablet:mx-0 text-muted-400 mx-auto max-w-xs text-center font-sans text-xs lg:mx-0"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Peccata
              paria minime esse deterritum.
            </p>
          </div>
        </div>
        <div class="ltablet:w-2/5 w-full lg:w-2/5">
          <div
            class="ltablet:ps-12 ltablet:border-l border-muted-200 dark:border-muted-700 flex h-full flex-col lg:border-l lg:ps-12"
          >
            <div class="mb-4 flex items-center justify-between">
              <BaseHeading
                as="h4"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Balance</span>
              </BaseHeading>
              <div
                class="ltablet:max-w-[230px] hidden max-w-[260px] grow sm:block"
              >
                <BaseListbox
                  v-model="selectedBank"
                  label="Accounts"
                  :items="banks"
                  :properties="{
                    value: 'id',
                    label: 'name',
                    sublabel: 'text',
                    media: 'media',
                  }"
                  hide-label
                />
              </div>
            </div>
            <div
              class="ptablet:flex ptablet:items-end ptablet:justify-between ptablet:mt-10 mt-auto"
            >
              <div class="ptablet:mb-0 mb-6 leading-relaxed">
                <span
                  class="text-muted-800 dark:text-muted-100 block font-sans text-3xl font-semibold"
                >
                  {{ formatPrice(6341.14) }}
                </span>
                <span class="text-muted-400 block font-sans text-sm">
                  **** **** **** 4986
                </span>
              </div>
              <div class="flex items-center gap-12">
                <div class="card-balance-stat">
                  <div
                    class="text-muted-400 mb-1 font-sans text-xs font-medium uppercase"
                  >
                    <span>Income</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div
                      class="bg-muted-100 flex h-10 w-10 items-center justify-center rounded-full"
                    >
                      <Icon
                        name="lucide:arrow-right"
                        class="text-success-500 h-4 w-4 -rotate-45"
                      />
                    </div>
                    <div
                      class="text-muted-500 dark:text-muted-400 font-sans text-sm"
                    >
                      <span>+ {{ formatPrice(2324.12) }}</span>
                    </div>
                  </div>
                </div>
                <div class="card-balance-stat">
                  <div
                    class="text-muted-400 mb-1 font-sans text-xs font-medium uppercase"
                  >
                    <span>Expense</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div
                      class="bg-muted-100 flex h-10 w-10 items-center justify-center rounded-full"
                    >
                      <Icon
                        name="lucide:arrow-right"
                        class="text-danger-500 h-4 w-4 rotate-45"
                      />
                    </div>
                    <div
                      class="text-muted-500 dark:text-muted-400 font-sans text-sm"
                    >
                      <span>+ {{ formatPrice(518.41) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseCard>
      <BaseCard
        class="ltablet:flex-row !bg-muted-200 dark:!bg-muted-800 flex flex-col gap-y-10 p-6 sm:p-10 lg:flex-row"
      >
        <div
          class="ltablet:w-3/5 ltablet:border-r border-muted-300 dark:border-muted-700 w-full lg:w-3/5 lg:border-r"
        >
          <div class="flex h-full w-full flex-col gap-16 sm:flex-row">
            <!-- Monthly Summary -->
            <div class="shrink-0">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 mb-6 dark:text-white"
              >
                <span>Monthly Summary</span>
              </BaseHeading>
              <div
                class="border-muted-300 divide-muted-300 dark:border-muted-700 dark:divide-muted-700 flex flex-col divide-y rounded-lg border"
              >
                <div class="p-4">
                  <div
                    class="text-muted-400 mb-1 font-sans text-xs font-medium uppercase"
                  >
                    <span>Income</span>
                  </div>
                  <div class="text-success-500 font-sans text-sm font-semibold">
                    <span>+ {{ formatPrice(2324.12) }}</span>
                  </div>
                </div>
                <div class="p-4">
                  <div
                    class="text-muted-400 mb-1 font-sans text-xs font-medium uppercase"
                  >
                    <span>Expenses</span>
                  </div>
                  <div class="text-danger-500 font-sans text-sm font-semibold">
                    <span>- {{ formatPrice(1509.27) }}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Chart -->
            <div class="ltablet:pe-12 flex h-full grow flex-col lg:pe-12">
              <div class="mt-auto">
                <AddonApexcharts v-bind="areaExpenses" />
              </div>
            </div>
          </div>
        </div>
        <div class="ltablet:w-2/5 w-full lg:w-2/5">
          <div class="ltablet:ps-12 h-full lg:ps-12">
            <div class="flex h-full w-full flex-col">
              <div class="mb-6 flex items-center justify-between">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 mb-6 dark:text-white"
                >
                  <span>Transactions</span>
                </BaseHeading>
              </div>
              <div class="mt-auto">
                <div class="space-y-4">
                  <!-- Item -->
                  <div class="flex items-center gap-2">
                    <BaseIconBox
                      class="bg-success-500/10 text-success-500"
                      size="md"
                      shape="full"
                    >
                      <Icon name="ph:pizza-duotone" class="h-5 w-5" />
                    </BaseIconBox>
                    <div>
                      <BaseHeading
                        as="h4"
                        size="sm"
                        weight="medium"
                        lead="tight"
                        class="text-muted-800 dark:text-white"
                      >
                        <span>Food delivery</span>
                      </BaseHeading>
                      <BaseParagraph size="xs" class="text-muted-400">
                        <span>Oct 23, 2022 - 8:46pm</span>
                      </BaseParagraph>
                    </div>
                    <div class="ms-auto">
                      <span
                        class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"
                      >
                        - {{ formatPrice(41.49) }}
                      </span>
                    </div>
                  </div>
                  <!-- Item -->
                  <div class="flex items-center gap-2">
                    <BaseIconBox
                      class="bg-orange-500/10 text-orange-500"
                      size="md"
                      shape="full"
                    >
                      <Icon name="ph:storefront-duotone" class="h-5 w-5" />
                    </BaseIconBox>
                    <div>
                      <BaseHeading
                        as="h4"
                        size="sm"
                        weight="medium"
                        lead="tight"
                        class="text-muted-800 dark:text-white"
                      >
                        <span>Market Earnings</span>
                      </BaseHeading>
                      <BaseParagraph size="xs" class="text-muted-400">
                        <span>Oct 18, 2022 - 9:11am</span>
                      </BaseParagraph>
                    </div>
                    <div class="ms-auto">
                      <span
                        class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"
                      >
                        + {{ formatPrice(263.39) }}
                      </span>
                    </div>
                  </div>
                  <!-- Item -->
                  <div class="flex items-center gap-2">
                    <BaseIconBox
                      class="bg-indigo-500/10 text-indigo-500"
                      size="md"
                      shape="full"
                    >
                      <Icon name="ph:shopping-cart-duotone" class="h-5 w-5" />
                    </BaseIconBox>
                    <div>
                      <BaseHeading
                        as="h4"
                        size="sm"
                        weight="medium"
                        lead="tight"
                        class="text-muted-800 dark:text-white"
                      >
                        <span>Online order</span>
                      </BaseHeading>
                      <BaseParagraph size="xs" class="text-muted-400">
                        <span>Oct 16, 2022 - 2:13pm</span>
                      </BaseParagraph>
                    </div>
                    <div class="ms-auto">
                      <span
                        class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"
                      >
                        - {{ formatPrice(92.17) }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="mt-6 flex items-center gap-2">
                  <BaseButton color="default" class="w-full">
                    <span>Settings</span>
                  </BaseButton>
                  <BaseButton color="primary" class="w-full">
                    <span>Create</span>
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
