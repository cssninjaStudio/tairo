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

const transactions = [
  {
    icon: 'solar:chef-hat-bold-duotone',
    iconColor: 'bg-success-500/10 text-success-500',
    title: 'Food delivery',
    subtitle: 'Oct 23, 2022 - 8:46pm',
    amount: -41.49,
  },
  {
    icon: 'solar:shop-bold-duotone',
    iconColor: 'bg-orange-500/10 text-orange-500',
    title: 'Market Earnings',
    subtitle: 'Oct 18, 2022 - 9:11am',
    amount: 263.39,
  },
  {
    icon: 'solar:bag-smile-bold-duotone',
    iconColor: 'bg-indigo-500/10 text-indigo-500',
    title: 'Online order',
    subtitle: 'Oct 16, 2022 - 2:13pm',
    amount: -92.00,
  },
  {
    icon: 'solar:screencast-2-bold-duotone',
    iconColor: 'bg-yellow-400/10 text-yellow-500',
    title: 'Netflix subscription',
    subtitle: 'Oct 5, 2022 - 8:22pm',
    amount: -18.00,
  },
]

const selectedBankTransfert = shallowRef(banks[0])
const selectedBankSendTo = shallowRef(banks[0])
const selectedCurrency = ref('usd')
const amount = ref<number>(0)
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <!-- Grid -->
    <div class="grid gap-4 md:grid-cols-12">
      <!-- Grid column -->
      <div class="lg:landscape:col-span-4 col-span-12 xl:landscape:col-span-4">
        <!-- Inner column -->
        <div class="flex flex-col gap-4">
          <BaseCard rounded="md" class="flex flex-col py-4 md:py-6">
            <div class="mb-6 flex items-center justify-between px-4 md:px-6">
              <BaseHeading
                as="h3"
                size="md"
                weight="medium"
                lead="tight"
                class="text-muted-900 dark:text-white"
              >
                <span>My Cards</span>
              </BaseHeading>
              <BaseButton rounded="full" size="icon-sm">
                <Icon name="lucide:plus" class="size-3" />
              </BaseButton>
            </div>
            <div class="mb-8 flex items-center gap-4 px-6">
              <DemoCreditCardSmall class="text-primary-600" />
              <div>
                <BaseParagraph size="xs" weight="medium">
                  <span class="text-muted-600 dark:text-muted-400">Card Balance</span>
                </BaseParagraph>
                <BaseHeading
                  as="h4"
                  size="lg"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
                >
                  <span>$2,834.31</span>
                </BaseHeading>
              </div>
              <div class="ms-auto">
                <BaseDropdown
                  label="Actions"
                  placement="bottom-end"
                  size="md"
                  class="z-20"
                >
                  <template #button>
                    <BaseButton
                      rounded="full"
                      size="icon-sm"
                      class="shrink-0 text-muted-500 dark:text-muted-400"
                    >
                      <Icon name="lucide:more-horizontal" class="size-3" />
                    </BaseButton>
                  </template>
                  <BaseDropdownItem
                    to="#"
                    title="Invest"
                    text="Buys more stocks"
                  >
                    <template #start>
                      <Icon name="solar:wad-of-money-linear" class="me-2 block size-5" />
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownItem
                    to="#"
                    title="Benchmark"
                    text="Compare other sources"
                  >
                    <template #start>
                      <Icon
                        name="solar:mirror-left-linear"
                        class="me-2 block size-5"
                      />
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownItem
                    to="#"
                    title="Trade"
                    text="View opportunities"
                  >
                    <template #start>
                      <Icon name="solar:filters-linear" class="me-2 block size-5" />
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownItem
                    to="#"
                    title="Wallet"
                    text="Manage your wallet"
                  >
                    <template #start>
                      <Icon name="solar:wallet-2-linear" class="me-2 block size-5" />
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
                  <span class="block size-2 rounded-full bg-emerald-500" />
                  <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
                    Active
                  </BaseParagraph>
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
                  <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
                    125 days
                  </BaseParagraph>
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
                  <Icon name="cib:visa" class="text-muted-400 size-10" />
                  <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
                    Credit Card
                  </BaseParagraph>
                </div>
              </div>
            </div>
            <div class="mb-2 flex items-center gap-4 px-6">
              <DemoCreditCardSmall class="text-success-600" />
              <div>
                <BaseParagraph size="xs" weight="medium">
                  <span class="text-muted-600 dark:text-muted-400">Card Balance</span>
                </BaseParagraph>
                <BaseHeading
                  as="h4"
                  size="lg"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>$2,834.31</span>
                </BaseHeading>
              </div>
              <div class="ms-auto">
                <BaseDropdown
                  label="Actions"
                  placement="bottom-end"
                  size="md"
                  class="z-20"
                >
                  <template #button>
                    <BaseButton
                      rounded="full"
                      size="icon-sm"
                      class="shrink-0 text-muted-500 dark:text-muted-400"
                    >
                      <Icon name="lucide:more-horizontal" class="size-3" />
                    </BaseButton>
                  </template>
                  <BaseDropdownItem
                    to="#"
                    title="Invest"
                    text="Buys more stocks"
                  >
                    <template #start>
                      <Icon name="solar:wad-of-money-linear" class="me-2 block size-5" />
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownItem
                    to="#"
                    title="Benchmark"
                    text="Compare other sources"
                  >
                    <template #start>
                      <Icon
                        name="solar:mirror-left-linear"
                        class="me-2 block size-5"
                      />
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownItem
                    to="#"
                    title="Trade"
                    text="View opportunities"
                  >
                    <template #start>
                      <Icon name="solar:filters-linear" class="me-2 block size-5" />
                    </template>
                  </BaseDropdownItem>
                  <BaseDropdownItem
                    to="#"
                    title="Wallet"
                    text="Manage your wallet"
                  >
                    <template #start>
                      <Icon name="solar:wallet-2-linear" class="me-2 block size-5" />
                    </template>
                  </BaseDropdownItem>
                </BaseDropdown>
              </div>
            </div>
          </BaseCard>
          <!-- Widget -->
          <BaseCard rounded="md" class="flex h-full flex-col py-4 px-2 md:py-6 md:px-4">
            <div class="mb-8 px-2 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="medium"
                lead="tight"
                class="text-muted-900 dark:text-white"
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
            <div class="space-y-2">
              <!-- Item -->
              <div
                v-for="item in transactions"
                :key="item.title"
                class="py-2 px-2 flex items-center gap-2 hover:bg-muted-200/50 dark:hover:bg-muted-900/50 transition-colors duration-100 rounded-lg"
              >
                <BaseIconBox
                  :class="item.iconColor"
                  size="sm"
                  rounded="full"
                  variant="none"
                >
                  <Icon :name="item.icon" class="size-5" />
                </BaseIconBox>
                <div>
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="medium"
                    lead="tight"
                    class="text-muted-900 dark:text-white"
                  >
                    <span>{{ item.title }}</span>
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400">
                    <span>{{ item.subtitle }}</span>
                  </BaseParagraph>
                </div>
                <div class="ms-auto">
                  <span
                    class="text-muted-900 dark:text-muted-100 font-sans text-sm font-semibold"
                  >
                    {{ formatPrice(item.amount) }}
                  </span>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
      <!-- Grid column -->
      <div class="lg:landscape:col-span-8 col-span-12 xl:landscape:col-span-8">
        <!-- Sub grid -->
        <div class="grid gap-4 md:grid-cols-12">
          <!-- Sub column -->
          <div
            class="col-span-12 flex flex-col gap-4 lg:col-span-6"
          >
            <!-- Widget -->
            <form
              method="POST"
              action=""
              class="relative"
              @submit.prevent
            >
              <BaseCard rounded="md" class="flex flex-col p-4 md:p-6">
                <div class="mb-4 flex items-center justify-between">
                  <BaseHeading
                    as="h3"
                    size="md"
                    weight="medium"
                    lead="tight"
                    class="text-muted-900 dark:text-white"
                  >
                    <span>Quick Transfer</span>
                  </BaseHeading>
                </div>
                <div>
                  <BaseSelect v-model="selectedBankTransfert">
                    <TairoSelectItem
                      v-for="item in banks"
                      :key="item.id"
                      :value="item"
                      :media="item.media"
                      :name="item.name"
                      :text="item.text"
                    />
                  </BaseSelect>
                  <div class="mt-2">
                    <p
                      class="text-muted-600 dark:text-muted-400 font-sans text-xs leading-tight"
                    >
                      Select one of your bank accounts to transfer some funds. The
                      transfer cannot exceed 20% of your balance.
                    </p>
                    <div class="mt-4 flex justify-end">
                      <BaseButton
                        type="submit"
                        class="w-full"
                        rounded="md"
                      >
                        Confirm and send
                      </BaseButton>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </form>
            <!-- Widget -->
            <div class="relative">
              <BaseCard rounded="md" class="flex flex-col p-4 md:p-6">
                <div class="mb-4 flex items-center justify-between">
                  <BaseHeading
                    as="h3"
                    size="md"
                    weight="medium"
                    lead="tight"
                    class="text-muted-900 dark:text-white"
                  >
                    <span>Overall Progress</span>
                  </BaseHeading>
                  <div>
                    <BaseText size="sm" class="text-muted-400">
                      Lvl. 3
                    </BaseText>
                  </div>
                </div>
                <div>
                  <BaseProgress size="xs" variant="primary" :model-value="60" />
                  <div class="mt-2">
                    <p
                      class="text-muted-600 dark:text-muted-400 font-sans text-xs leading-tight"
                    >
                      This is your Tairo customer level. Reach out higher levels
                      to unlock achievements, special gifts, and more.
                    </p>
                    <div class="mt-2 flex justify-end">
                      <NuxtLink
                        to="#"
                        class="text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                      >
                        View details
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
            class="col-span-12 lg:col-span-6"
            @submit.prevent
          >
            <!-- Widget -->
            <div class="relative h-full">
              <BaseCard rounded="md" class="flex h-full flex-col p-4 md:p-6">
                <div class="mb-4 flex items-center justify-between">
                  <BaseHeading
                    as="h3"
                    size="md"
                    weight="medium"
                    lead="tight"
                    class="text-muted-900 dark:text-white"
                  >
                    <span>Send money to</span>
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
                    class="text-muted-500 dark:text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                  >
                    See all contacts
                  </NuxtLink>
                </div>
                <div class="mt-auto">
                  <div class="space-y-3">
                    <div>
                      <BaseSelect v-model="selectedBankSendTo" rounded="sm">
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
                    <div class="grid grid-cols-12 w-full gap-2">
                      <BaseSelect
                        v-model="selectedCurrency"
                        rounded="sm"
                        label="Currency"
                        class="col-span-3"
                      >
                        <BaseSelectItem value="usd">
                          $
                        </BaseSelectItem>
                        <BaseSelectItem value="gbp">
                          £
                        </BaseSelectItem>
                        <BaseSelectItem value="eur">
                          €
                        </BaseSelectItem>
                      </BaseSelect>
                      <div class="col-span-9">
                        <BaseInputNumber
                          v-model="amount"
                          placeholder="0.00"
                          rounded="sm"
                          label="Amount"
                          :min="0"
                        />
                      </div>
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
                      rounded="md"
                      variant="primary"
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
              <BaseCard rounded="md" class="flex h-full flex-col p-4 md:p-6">
                <div class="mb-4 flex items-center justify-between">
                  <BaseHeading
                    as="h3"
                    size="md"
                    weight="medium"
                    lead="tight"
                    class="text-muted-900 dark:text-white"
                  >
                    <span>History</span>
                  </BaseHeading>
                  <div>
                    <NuxtLink
                      to="#"
                      class="text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 transition-colors duration-300 hover:underline"
                    >
                      View reports
                    </NuxtLink>
                  </div>
                </div>
                <DemoChartAreaIncomeHistory />
              </BaseCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
