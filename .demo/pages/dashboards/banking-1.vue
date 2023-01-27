<script setup lang="ts">
definePageMeta({
  title: 'Overview',
  layout: 'sidebar',
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

const selectedBank = ref(banks[0])
const selectedCurrency = ref('usd')
</script>

<template>
  <!-- Grid -->
  <div class="grid md:grid-cols-12 gap-4">
    <!--Grid column -->
    <div class="col-span-12 ltablet:col-span-4 lg:col-span-4">
      <!--Inner column -->
      <div class="flex flex-col gap-4">
        <BaseCard class="flex flex-col py-6">
          <div class="flex items-center justify-between px-6 mb-6">
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
              <Icon name="lucide:plus" class="w-3 h-3" />
            </BaseButtonIcon>
          </div>
          <div class="flex items-center gap-4 px-6 mb-8">
            <ObjectCreditCardSmall class="text-primary-500" />
            <div>
              <BaseParagraph size="sm" weight="medium">
                <span class="text-muted-400"> Card Balance </span>
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
            <div class="ml-auto">
              <BaseDropdown
                flavor="context"
                label="Dropdown"
                orientation="end"
                compact
                class="z-20"
              >
                <BaseDropdownItem to="/" title="Invest" text="Buys more stocks">
                  <template #start>
                    <Icon name="ph:coin-duotone" class="w-5 h-5 block mr-2" />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownItem
                  to="/"
                  title="Benchmark"
                  text="Compare other sources"
                >
                  <template #start>
                    <Icon
                      name="ph:cell-signal-medium-duotone"
                      class="w-5 h-5 block mr-2"
                    />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownItem
                  to="/"
                  title="Trade"
                  text="View opportunities"
                >
                  <template #start>
                    <Icon name="ph:bank-duotone" class="w-5 h-5 block mr-2" />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownDivide />
                <BaseDropdownItem
                  to="/"
                  title="Wallet"
                  text="Manage your wallet"
                >
                  <template #start>
                    <Icon name="ph:wallet-duotone" class="w-5 h-5 block mr-2" />
                  </template>
                </BaseDropdownItem>
              </BaseDropdown>
            </div>
          </div>
          <div
            class="space-y-5 border-b-2 border-dashed px-6 pb-6 mb-8 border-muted-200 dark:border-muted-700"
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
                to="/"
                class="font-sans text-sm underline-offset-4 text-primary-500 hover:underline"
                >Edit</NuxtLink
              >
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
                <p class="font-sans text-sm text-muted-400">Active</p>
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
                <p class="font-sans text-sm text-muted-400">125 days</p>
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
                <Icon name="cib:visa" class="w-10 h-10 text-muted-400" />
                <p class="font-sans text-xs text-muted-400">Credit Card</p>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-4 px-6 mb-2">
            <ObjectCreditCardSmall class="text-success-500" />
            <div>
              <BaseParagraph size="sm" weight="medium">
                <span class="text-muted-400"> Card Balance </span>
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
            <div class="ml-auto">
              <BaseDropdown
                flavor="context"
                label="Dropdown"
                orientation="end"
                compact
                class="z-20"
              >
                <BaseDropdownItem to="/" title="Invest" text="Buys more stocks">
                  <template #start>
                    <Icon name="ph:coin-duotone" class="w-5 h-5 block mr-2" />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownItem
                  to="/"
                  title="Benchmark"
                  text="Compare other sources"
                >
                  <template #start>
                    <Icon
                      name="ph:cell-signal-medium-duotone"
                      class="w-5 h-5 block mr-2"
                    />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownItem
                  to="/"
                  title="Trade"
                  text="View opportunities"
                >
                  <template #start>
                    <Icon name="ph:bank-duotone" class="w-5 h-5 block mr-2" />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownDivide />
                <BaseDropdownItem
                  to="/"
                  title="Wallet"
                  text="Manage your wallet"
                >
                  <template #start>
                    <Icon name="ph:wallet-duotone" class="w-5 h-5 block mr-2" />
                  </template>
                </BaseDropdownItem>
              </BaseDropdown>
            </div>
          </div>
        </BaseCard>
        <!-- Widget -->
        <BaseCard class="h-full flex flex-col p-6">
          <div class="flex items-center justify-between mb-4">
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
                to="/"
                class="font-sans text-sm underline-offset-4 text-muted-400 hover:text-primary-500 hover:underline transition-colors duration-300"
                >View All</NuxtLink
              >
            </div>
          </div>
          <div class="space-y-4">
            <!-- Item -->
            <div class="flex items-center gap-2">
              <BaseIconBox
                class="bg-success-500/10 text-success-500"
                size="md"
                shape="circle"
              >
                <Icon name="ph:pizza-duotone" class="w-5 h-5" />
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
              <div class="ml-auto">
                <span
                  class="font-sans font-semibold text-sm text-muted-800 dark:text-muted-100"
                  >- $41.49</span
                >
              </div>
            </div>
            <!-- Item -->
            <div class="flex items-center gap-2">
              <BaseIconBox
                class="bg-orange-500/10 text-orange-500"
                size="md"
                shape="circle"
              >
                <Icon name="ph:storefront-duotone" class="w-5 h-5" />
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
              <div class="ml-auto">
                <span
                  class="font-sans font-semibold text-sm text-muted-800 dark:text-muted-100"
                  >+ $263.39</span
                >
              </div>
            </div>
            <!-- Item -->
            <div class="flex items-center gap-2">
              <BaseIconBox
                class="bg-indigo-500/10 text-indigo-500"
                size="md"
                shape="circle"
              >
                <Icon name="ph:shopping-cart-duotone" class="w-5 h-5" />
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
              <div class="ml-auto">
                <span
                  class="font-sans font-semibold text-sm text-muted-800 dark:text-muted-100"
                  >- $92.00</span
                >
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
    <!--Grid column -->
    <div class="col-span-12 ltablet:col-span-8 lg:col-span-8">
      <!-- Sub grid -->
      <div class="grid md:grid-cols-12 gap-4">
        <!-- Sub column -->
        <div
          class="col-span-12 ltablet:col-span-6 lg:col-span-6 flex flex-col gap-4"
        >
          <!-- Widget -->
          <div class="relative">
            <BaseCard class="flex flex-col p-6">
              <div class="flex items-center justify-between mb-4">
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
                  v-model="selectedBank"
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
                    class="font-sans text-xs leading-tight text-muted-500 dark:text-muted-400"
                  >
                    Select one of your bank accounts to transfer some funds. The
                    transfer cannot exceed 20% of your balance.
                  </p>
                  <div class="flex justify-end mt-2">
                    <NuxtLink
                      to="/"
                      class="font-sans text-sm underline-offset-4 text-primary-500 hover:underline"
                      >Confirm and send</NuxtLink
                    >
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
          <!-- Widget -->
          <div class="relative">
            <BaseCard class="flex flex-col p-6">
              <div class="flex items-center justify-between mb-4">
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
                  <span class="font-sans text-sm text-muted-400">Lvl. 3</span>
                </div>
              </div>
              <div>
                <BaseProgress size="xs" :value="60" />
                <div class="mt-2">
                  <p
                    class="font-sans text-xs leading-tight text-muted-500 dark:text-muted-400"
                  >
                    This is your Tairo customer level. Reach out higher levels
                    to unlock achievements, special gifts, and more.
                  </p>
                  <div class="flex justify-end mt-2">
                    <NuxtLink
                      to="/"
                      class="font-sans text-sm underline-offset-4 text-primary-500 hover:underline"
                      >Details</NuxtLink
                    >
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
        <!-- Sub column -->
        <div class="col-span-12 ltablet:col-span-6 lg:col-span-6">
          <!-- Widget -->
          <div class="relative h-full">
            <BaseCard class="h-full flex flex-col p-6">
              <div class="flex items-center justify-between mb-4">
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
                    to="/"
                    class="font-sans text-sm underline-offset-4 text-muted-400 hover:text-primary-500 hover:underline transition-colors duration-300"
                    >See All</NuxtLink
                  >
                </div>
              </div>
              <div>
                <div class="flex gap-3 mb-4">
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
                  to="/"
                  class="font-sans text-sm underline-offset-4 text-muted-400 hover:text-primary-500 hover:underline"
                  >See all contacts</NuxtLink
                >
              </div>
              <form class="mt-auto">
                <div class="space-y-3">
                  <div>
                    <BaseListbox
                      v-model="selectedBank"
                      :items="banks"
                      :properties="{
                        value: 'id',
                        label: 'name',
                        sublabel: 'text',
                        media: 'media',
                      }"
                    />
                  </div>
                  <div class="w-full flex gap-2">
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
                  class="my-3 font-sans text-xs leading-tight text-muted-500 dark:text-muted-400"
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
              </form>
            </BaseCard>
          </div>
        </div>
        <!-- Sub column -->
        <div class="col-span-12">
          <div class="relative h-full">
            <BaseCard class="h-full flex flex-col p-6">
              <div class="flex items-center justify-between mb-4">
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
                    to="/"
                    class="font-sans text-sm underline-offset-4 text-muted-400 hover:text-primary-500 hover:underline transition-colors duration-300"
                    >View Reports</NuxtLink
                  >
                </div>
              </div>
              <ExampleApexchartIncomeHistory />
            </BaseCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
