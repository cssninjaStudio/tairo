<script setup lang="ts">
definePageMeta({
  title: 'Overview',
  preview: {
    title: 'Banking dashboard v1',
    description: 'For banking and accounts',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-banking-1.png',
    srcDark: '/img/screens/dashboards-banking-1-dark.png',
    order: 7,
  },
})

const incomeHistory = reactive(useIncomeHistory())

function useIncomeHistory() {
  const { primary, info, success } = useTailwindColors()
  const type = 'area'
  const height = 315

  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value, success.value, info.value],
    title: {
      text: '',
      align: 'left',
    },
    legend: {
      position: 'top',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2022-10-19T00:00:00.000Z',
        '2022-10-20T01:30:00.000Z',
        '2022-10-21T02:30:00.000Z',
        '2022-10-22T03:30:00.000Z',
        '2022-10-23T04:30:00.000Z',
        '2022-10-24T05:30:00.000Z',
        '2022-10-25T06:30:00.000Z',
        '2022-10-26T06:30:00.000Z',
        '2022-10-27T06:30:00.000Z',
        '2022-10-28T06:30:00.000Z',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
      y: {
        formatter: function (val: number) {
          return '$' + val
        },
      },
    },
  }

  const series = ref([
    {
      name: 'Expenses',
      data: [318, 150, 49, 152.13, 421, 1009, 1220, 418, 113, 45],
    },
    {
      name: 'Earnings',
      data: [192, 263, 459, 312, 349, 527, 397, 351, 618, 511],
    },
  ])

  return { type, height, options, series }
}

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

const selectedBankTransfert = shallowRef(banks[0])
const selectedBankSendTo = shallowRef(banks[0])
const selectedCurrency = ref('usd')
const amount = ref<number>()
</script>

<template>
  <!-- Grid -->
  <div class="grid gap-4 md:grid-cols-12">
    <!--Grid column -->
    <div class="ltablet:col-span-4 col-span-12 lg:col-span-4">
      <!--Inner column -->
      <div class="flex flex-col gap-4">
        <BaseCard class="flex flex-col py-6">
          <div class="mb-6 flex items-center justify-between px-6">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>My Cards</span>
            </BaseHeading>
            <BaseButtonIcon shape="full" small>
              <Icon name="lucide:plus" class="h-3 w-3" />
            </BaseButtonIcon>
          </div>
          <div class="mb-8 flex items-center gap-4 px-6">
            <DemoCreditCardSmall class="text-primary-500" />
            <div>
              <BaseParagraph size="sm" weight="medium">
                <span class="text-muted-400">Card Balance</span>
              </BaseParagraph>
              <BaseHeading
                as="h4"
                size="xl"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>$2,834.31</span>
              </BaseHeading>
            </div>
            <div class="ms-auto">
              <BaseDropdown
                flavor="context"
                label="Dropdown"
                orientation="end"
                condensed
                class="z-20"
              >
                <BaseDropdownItem to="#" title="Invest" text="Buys more stocks">
                  <template #start>
                    <Icon name="ph:coin-duotone" class="me-2 block h-5 w-5" />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownItem
                  to="#"
                  title="Benchmark"
                  text="Compare other sources"
                >
                  <template #start>
                    <Icon
                      name="ph:cell-signal-medium-duotone"
                      class="me-2 block h-5 w-5"
                    />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownItem
                  to="#"
                  title="Trade"
                  text="View opportunities"
                >
                  <template #start>
                    <Icon name="ph:bank-duotone" class="me-2 block h-5 w-5" />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownDivide />
                <BaseDropdownItem
                  to="#"
                  title="Wallet"
                  text="Manage your wallet"
                >
                  <template #start>
                    <Icon name="ph:wallet-duotone" class="me-2 block h-5 w-5" />
                  </template>
                </BaseDropdownItem>
              </BaseDropdown>
            </div>
          </div>
          <div
            class="border-muted-200 dark:border-muted-700 mb-8 space-y-5 border-b-2 border-dashed px-6 pb-6"
          >
            <div class="flex items-center justify-between">
              <BaseHeading
                as="h5"
                size="sm"
                weight="medium"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Information</span>
              </BaseHeading>
              <NuxtLink
                to="#"
                class="text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
              >
                Edit
              </NuxtLink>
            </div>
            <div class="flex items-center justify-between">
              <BaseHeading
                as="h5"
                size="sm"
                weight="medium"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Status</span>
              </BaseHeading>
              <div class="flex items-center gap-1">
                <span class="block h-2 w-2 rounded-full bg-emerald-500"></span>
                <p class="text-muted-400 font-sans text-sm">Active</p>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <BaseHeading
                as="h5"
                size="sm"
                weight="medium"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Expires in</span>
              </BaseHeading>
              <div class="flex items-center gap-1">
                <p class="text-muted-400 font-sans text-sm">125 days</p>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <BaseHeading
                as="h5"
                size="sm"
                weight="medium"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Type</span>
              </BaseHeading>
              <div class="flex items-center gap-1">
                <Icon name="cib:visa" class="text-muted-400 h-10 w-10" />
                <p class="text-muted-400 font-sans text-xs">Credit Card</p>
              </div>
            </div>
          </div>
          <div class="mb-2 flex items-center gap-4 px-6">
            <DemoCreditCardSmall class="text-success-500" />
            <div>
              <BaseParagraph size="sm" weight="medium">
                <span class="text-muted-400">Card Balance</span>
              </BaseParagraph>
              <BaseHeading
                as="h4"
                size="xl"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>$2,834.31</span>
              </BaseHeading>
            </div>
            <div class="ms-auto">
              <BaseDropdown
                flavor="context"
                label="Dropdown"
                orientation="end"
                condensed
                class="z-20"
              >
                <BaseDropdownItem to="#" title="Invest" text="Buys more stocks">
                  <template #start>
                    <Icon name="ph:coin-duotone" class="me-2 block h-5 w-5" />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownItem
                  to="#"
                  title="Benchmark"
                  text="Compare other sources"
                >
                  <template #start>
                    <Icon
                      name="ph:cell-signal-medium-duotone"
                      class="me-2 block h-5 w-5"
                    />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownItem
                  to="#"
                  title="Trade"
                  text="View opportunities"
                >
                  <template #start>
                    <Icon name="ph:bank-duotone" class="me-2 block h-5 w-5" />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownDivide />
                <BaseDropdownItem
                  to="#"
                  title="Wallet"
                  text="Manage your wallet"
                >
                  <template #start>
                    <Icon name="ph:wallet-duotone" class="me-2 block h-5 w-5" />
                  </template>
                </BaseDropdownItem>
              </BaseDropdown>
            </div>
          </div>
        </BaseCard>
        <!-- Widget -->
        <BaseCard class="flex h-full flex-col p-6">
          <div class="mb-4 flex items-center justify-between">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Transactions</span>
            </BaseHeading>
            <div>
              <NuxtLink
                to="#"
                class="text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 transition-colors duration-300 hover:underline"
              >
                View All
              </NuxtLink>
            </div>
          </div>
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
                  - $41.49
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
                  + $263.39
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
                  - $92.00
                </span>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
    <!--Grid column -->
    <div class="ltablet:col-span-8 col-span-12 lg:col-span-8">
      <!-- Sub grid -->
      <div class="grid gap-4 md:grid-cols-12">
        <!-- Sub column -->
        <div
          class="ltablet:col-span-6 col-span-12 flex flex-col gap-4 lg:col-span-6"
        >
          <!-- Widget -->
          <form method="POST" action="" @submit.prevent class="relative">
            <BaseCard class="flex flex-col p-6">
              <div class="mb-4 flex items-center justify-between">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>Quick Transfer</span>
                </BaseHeading>
              </div>
              <div>
                <BaseListbox
                  v-model="selectedBankTransfert"
                  :items="banks"
                  :properties="{
                    value: 'id',
                    label: 'name',
                    sublabel: 'text',
                    media: 'media',
                  }"
                />
                <div class="mt-2">
                  <p
                    class="text-muted-500 dark:text-muted-400 font-sans text-xs leading-tight"
                  >
                    Select one of your bank accounts to transfer some funds. The
                    transfer cannot exceed 20% of your balance.
                  </p>
                  <div class="mt-2 flex justify-end">
                    <button
                      type="submit"
                      class="text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                    >
                      Confirm and send
                    </button>
                  </div>
                </div>
              </div>
            </BaseCard>
          </form>
          <!-- Widget -->
          <div class="relative">
            <BaseCard class="flex flex-col p-6">
              <div class="mb-4 flex items-center justify-between">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>Overall Progress</span>
                </BaseHeading>
                <div>
                  <span class="text-muted-400 font-sans text-sm">Lvl. 3</span>
                </div>
              </div>
              <div>
                <BaseProgress size="xs" :value="60" />
                <div class="mt-2">
                  <p
                    class="text-muted-500 dark:text-muted-400 font-sans text-xs leading-tight"
                  >
                    This is your Tairo customer level. Reach out higher levels
                    to unlock achievements, special gifts, and more.
                  </p>
                  <div class="mt-2 flex justify-end">
                    <NuxtLink
                      to="#"
                      class="text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                    >
                      Details
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
        <!-- Sub column -->
        <form
          method="POST"
          action=""
          @submit.prevent
          class="ltablet:col-span-6 col-span-12 lg:col-span-6"
        >
          <!-- Widget -->
          <div class="relative h-full">
            <BaseCard class="flex h-full flex-col p-6">
              <div class="mb-4 flex items-center justify-between">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>Send Money To</span>
                </BaseHeading>
                <div>
                  <NuxtLink
                    to="#"
                    class="text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 transition-colors duration-300 hover:underline"
                  >
                    See All
                  </NuxtLink>
                </div>
              </div>
              <div>
                <div class="mb-4 flex gap-3">
                  <BaseAvatar src="/img/avatars/16.svg" size="xs" />
                  <BaseAvatar
                    text="LT"
                    size="xs"
                    class="bg-yellow-400/20 text-yellow-400"
                  />
                  <BaseAvatar src="/img/avatars/3.svg" size="xs" />
                  <BaseAvatar
                    text="KC"
                    size="xs"
                    class="bg-indigo-400/20 text-indigo-400"
                  />
                </div>
                <NuxtLink
                  to="#"
                  class="text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                >
                  See all contacts
                </NuxtLink>
              </div>
              <div class="mt-auto">
                <div class="space-y-3">
                  <div>
                    <BaseListbox
                      v-model="selectedBankSendTo"
                      :items="banks"
                      :properties="{
                        value: 'id',
                        label: 'name',
                        sublabel: 'text',
                        media: 'media',
                      }"
                    />
                  </div>
                  <div class="flex w-full gap-2">
                    <BaseSelect
                      v-model="selectedCurrency"
                      shape="rounded"
                      label="Currency"
                      class="w-16"
                    >
                      <option value=""></option>
                      <option value="usd">$</option>
                      <option value="gbp">£</option>
                      <option value="eur">€</option>
                    </BaseSelect>
                    <BaseInput
                      v-model.number="amount"
                      type="number"
                      :classes="{ wrapper: 'grow' }"
                      placeholder="0.00"
                      shape="rounded"
                      label="Amount"
                      hide-label
                    />
                  </div>
                </div>
                <p
                  class="text-muted-500 dark:text-muted-400 my-3 font-sans text-xs leading-tight"
                >
                  Funds will reach destination tomorrow.
                </p>
                <div>
                  <BaseButton
                    type="submit"
                    shape="rounded"
                    size="sm"
                    color="primary"
                    class="w-full"
                  >
                    Send Money
                  </BaseButton>
                </div>
              </div>
            </BaseCard>
          </div>
        </form>
        <!-- Sub column -->
        <div class="col-span-12">
          <div class="relative h-full">
            <BaseCard class="flex h-full flex-col p-6">
              <div class="mb-4 flex items-center justify-between">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>History</span>
                </BaseHeading>
                <div>
                  <NuxtLink
                    to="#"
                    class="text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 transition-colors duration-300 hover:underline"
                  >
                    View Reports
                  </NuxtLink>
                </div>
              </div>
              <AddonApexcharts v-bind="incomeHistory" />
            </BaseCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
