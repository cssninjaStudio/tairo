<script setup lang="ts">
definePageMeta({
  title: 'Account expenses',
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
</script>

<template>
  <div class="relative px-4 md:px-6 lg:px-8 pb-20">
    <div class="flex flex-col gap-6">
      <BaseCard
        rounded="md"
        class="lg:landscape:flex-row flex flex-col gap-y-10 overflow-hidden p-4 sm:p-6 md:p-10 xl:landscape:flex-row"
      >
        <div class="lg:landscape:w-3/5 w-full xl:landscape:w-3/5">
          <div class="mb-12 flex items-center justify-between">
            <BaseHeading
              as="h3"
              size="md"
              weight="medium"
              lead="tight"
              class="text-muted-900 dark:text-white"
            >
              <span>My Cards</span>
            </BaseHeading>
            <div />
          </div>
          <div
            class="lg:landscape:pe-12 flex flex-col gap-y-4 sm:flex-row sm:gap-x-8 xl:landscape:pe-12"
          >
            <div>
              <BaseButton size="icon-md" rounded="md">
                <Icon name="lucide:plus" class="size-4" />
              </BaseButton>
            </div>
            <div
              class="nui-slimscroll grid max-h-[164px] w-full gap-4 overflow-y-auto px-6 sm:grid-cols-2"
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
              class="lg:landscape:mx-0 text-muted-400 mx-auto max-w-xs text-center font-sans text-xs xl:landscape:mx-0"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Peccata
              paria minime esse deterritum.
            </p>
          </div>
        </div>
        <div class="lg:landscape:w-2/5 w-full xl:landscape:w-2/5">
          <div
            class="lg:landscape:ps-12 lg:landscape:border-l border-muted-200 dark:border-muted-800/80 flex h-full flex-col xl:landscape:border-s xl:landscape:ps-12"
          >
            <div class="mb-4 flex items-center justify-between">
              <BaseHeading
                as="h4"
                size="md"
                weight="medium"
                lead="tight"
                class="text-muted-900 dark:text-white"
              >
                <span>Balance</span>
              </BaseHeading>
              <div
                class="lg:landscape:max-w-[230px] hidden max-w-[260px] grow sm:block"
              >
                <BaseSelect v-model="selectedBank">
                  <TairoSelectItem
                    v-for="item in banks"
                    :key="item.id"
                    :value="item"
                    :media="item.media"
                    :name="item.name"
                    :text="item.text"
                  />
                </BaseSelect>
              </div>
            </div>
            <div
              class="lg:portrait:flex lg:landscape:items-end lg:portrait:justify-between lg:portrait:mt-10 mt-auto"
            >
              <div class="lg:portrait:mb-0 mb-6 leading-relaxed">
                <span
                  class="text-muted-900 dark:text-muted-100 block font-sans text-3xl font-semibold"
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
                      class="bg-muted-100 dark:bg-muted-900 flex size-10 items-center justify-center rounded-full"
                    >
                      <Icon
                        name="lucide:arrow-right"
                        class="text-success-500 size-4 -rotate-45"
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
                      class="bg-muted-100 dark:bg-muted-900 flex size-10 items-center justify-center rounded-full"
                    >
                      <Icon
                        name="lucide:arrow-right"
                        class="text-destructive-500 size-4 rotate-45"
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
        rounded="md"
        variant="muted"
        class="lg:landscape:flex-row flex flex-col gap-y-10 p-4 sm:p-6 md:p-10 xl:landscape:flex-row"
      >
        <div
          class="lg:landscape:w-3/5 lg:landscape:border-r border-muted-200 dark:border-muted-800/80 w-full xl:landscape:w-3/5 xl:landscape:border-e"
        >
          <div class="flex size-full flex-col gap-16 sm:flex-row">
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
                class="border-muted-300 divide-muted-300 dark:border-muted-800/80 dark:divide-muted-800/80 flex flex-col divide-y rounded-lg border"
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
                  <div class="text-destructive-500 font-sans text-sm font-semibold">
                    <span>- {{ formatPrice(1509.27) }}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Chart -->
            <div class="lg:landscape:pe-12 flex h-full grow flex-col xl:landscape:pe-12">
              <div class="mt-auto">
                <DemoChartAreaExpenses />
              </div>
            </div>
          </div>
        </div>
        <div class="lg:landscape:w-2/5 w-full xl:landscape:w-2/5">
          <div class="lg:landscape:ps-12 h-full xl:landscape:ps-12">
            <div class="flex size-full flex-col">
              <div class="mb-6 flex items-center justify-between">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 mb-6 dark:text-white"
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
                      rounded="full"
                      variant="none"
                    >
                      <Icon name="solar:chef-hat-bold-duotone" class="size-5" />
                    </BaseIconBox>
                    <div>
                      <BaseHeading
                        as="h4"
                        size="sm"
                        weight="medium"
                        lead="tight"
                        class="text-muted-900 dark:text-white"
                      >
                        <span>Food delivery</span>
                      </BaseHeading>
                      <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
                        <span>Oct 23, 2022 - 8:46pm</span>
                      </BaseParagraph>
                    </div>
                    <div class="ms-auto">
                      <span
                        class="text-muted-900 dark:text-muted-100 font-sans text-sm font-semibold"
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
                      rounded="full"
                      variant="none"
                    >
                      <Icon name="solar:shop-bold-duotone" class="size-5" />
                    </BaseIconBox>
                    <div>
                      <BaseHeading
                        as="h4"
                        size="sm"
                        weight="medium"
                        lead="tight"
                        class="text-muted-900 dark:text-white"
                      >
                        <span>Market Earnings</span>
                      </BaseHeading>
                      <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
                        <span>Oct 18, 2022 - 9:11am</span>
                      </BaseParagraph>
                    </div>
                    <div class="ms-auto">
                      <span
                        class="text-muted-900 dark:text-muted-100 font-sans text-sm font-semibold"
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
                      rounded="full"
                      variant="none"
                    >
                      <Icon name="solar:bag-smile-bold-duotone" class="size-5" />
                    </BaseIconBox>
                    <div>
                      <BaseHeading
                        as="h4"
                        size="sm"
                        weight="medium"
                        lead="tight"
                        class="text-muted-900 dark:text-white"
                      >
                        <span>Online order</span>
                      </BaseHeading>
                      <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
                        <span>Oct 16, 2022 - 2:13pm</span>
                      </BaseParagraph>
                    </div>
                    <div class="ms-auto">
                      <span
                        class="text-muted-900 dark:text-muted-100 font-sans text-sm font-semibold"
                      >
                        - {{ formatPrice(92.17) }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="mt-6 flex items-center gap-2">
                  <BaseButton class="w-full">
                    <span>Settings</span>
                  </BaseButton>
                  <BaseButton variant="primary" class="w-full">
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
