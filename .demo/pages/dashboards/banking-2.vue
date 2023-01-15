<script setup lang="ts">
definePageMeta({
  title: 'Banking 2',
  layout: 'sidebar',
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
</script>

<template>
  <div class="relative">
    <div class="flex flex-col gap-6">
      <BaseCard
        class="flex flex-col ltablet:flex-row lg:flex-row p-6 sm:p-10 gap-y-10 overflow-hidden"
      >
        <div class="w-full ltablet:w-3/5 lg:w-3/5">
          <div class="flex items-center justify-between mb-12">
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
            class="flex flex-col sm:flex-row sm:gap-x-8 gap-y-4 ltablet:pr-12 lg:pr-12"
          >
            <div>
              <BaseButtonIcon shape="rounded">
                <Icon name="lucide:plus" class="w-4 h-4" />
              </BaseButtonIcon>
            </div>
            <Swiper
              class="py-6"
              :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
              :slidesPerView="2"
              :loop="true"
              :effect="'slide'"
              :spaceBetween="16"
              :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
              }"
              ,
              :breakpoints="{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 2,
                },
              }"
            >
              <SwiperSlide
                v-for="(card, index) in cards"
                :key="index"
                v-slot="{ isActive }"
              >
                <ObjectCreditCard
                  :balance="card.balance"
                  :endingNumber="card.endingNumber"
                  :type="card.type"
                  :active="isActive"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="flex sm:pl-16 mt-4">
            <p
              class="font-sans text-xs max-w-xs mx-auto text-center ltablet:mx-0 lg:mx-0 ltablet:text-left lg:text-left text-muted-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Peccata
              paria minime esse deterritum.
            </p>
          </div>
        </div>
        <div class="w-full ltablet:w-2/5 lg:w-2/5">
          <div
            class="h-full flex flex-col ltablet:pl-12 lg:pl-12 ltablet:border-l lg:border-l border-muted-200 dark:border-muted-700"
          >
            <div class="flex items-center justify-between mb-4">
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
                class="hidden sm:block grow max-w-[260px] ltablet:max-w-[230px]"
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
              class="mt-auto ptablet:flex ptablet:items-end ptablet:justify-between ptablet:mt-10"
            >
              <div class="leading-relaxed mb-6 ptablet:mb-0">
                <span
                  class="block font-sans font-semibold text-3xl text-muted-800 dark:text-muted-100"
                  >{{ formatPrice(6341.14) }}</span
                >
                <span class="block font-sans text-sm text-muted-400"
                  >**** **** **** 4986</span
                >
              </div>
              <div class="flex items-center gap-12">
                <div class="card-balance-stat">
                  <div
                    class="font-sans text-xs uppercase font-medium text-muted-400 mb-1"
                  >
                    <span>Income</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div
                      class="h-10 w-10 flex items-center justify-center rounded-full bg-muted-100"
                    >
                      <Icon
                        name="lucide:arrow-right"
                        class="w-4 h-4 -rotate-45 text-success-500"
                      />
                    </div>
                    <div
                      class="font-sans text-sm text-muted-500 dark:text-muted-400"
                    >
                      <span>+ {{ formatPrice(2324.12) }}</span>
                    </div>
                  </div>
                </div>
                <div class="card-balance-stat">
                  <div
                    class="font-sans text-xs uppercase font-medium text-muted-400 mb-1"
                  >
                    <span>Expense</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div
                      class="h-10 w-10 flex items-center justify-center rounded-full bg-muted-100"
                    >
                      <Icon
                        name="lucide:arrow-right"
                        class="w-4 h-4 rotate-45 text-danger-500"
                      />
                    </div>
                    <div
                      class="font-sans text-sm text-muted-500 dark:text-muted-400"
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
        class="flex flex-col ltablet:flex-row lg:flex-row gap-y-10 p-6 sm:p-10 bg-muted-200 dark:bg-muted-800"
      >
        <div
          class="w-full ltablet:w-3/5 lg:w-3/5 ltablet:border-r lg:border-r border-muted-300 dark:border-muted-700"
        >
          <div class="w-full h-full flex flex-col sm:flex-row gap-16">
            <!-- Monthly Summary -->
            <div class="shrink-0">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="mb-6 text-muted-800 dark:text-white"
              >
                <span>Monthly Summary</span>
              </BaseHeading>
              <div
                class="flex flex-col rounded-lg border border-muted-300 divide-y divide-muted-300 dark:border-muted-700 dark:divide-muted-700"
              >
                <div class="p-4">
                  <div
                    class="font-sans text-xs uppercase font-medium text-muted-400 mb-1"
                  >
                    <span>Income</span>
                  </div>
                  <div class="font-sans font-semibold text-sm text-success-500">
                    <span>+ {{ formatPrice(2324.12) }}</span>
                  </div>
                </div>
                <div class="p-4">
                  <div
                    class="font-sans text-xs uppercase font-medium text-muted-400 mb-1"
                  >
                    <span>Expenses</span>
                  </div>
                  <div class="font-sans font-semibold text-sm text-danger-500">
                    <span>- {{ formatPrice(1509.27) }}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Chart -->
            <div class="h-full flex flex-col grow ltablet:pr-12 lg:pr-12">
              <div class="mt-auto">
                <ExampleApexchartAreaExpenses />
              </div>
            </div>
          </div>
        </div>
        <div class="w-full ltablet:w-2/5 lg:w-2/5">
          <div class="h-full ltablet:pl-12 lg:pl-12">
            <div class="w-full h-full flex flex-col">
              <div class="flex items-center justify-between mb-6">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="mb-6 text-muted-800 dark:text-white"
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
                        >- {{ formatPrice(41.49) }}</span
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
                        >+ {{ formatPrice(263.39) }}</span
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
                        >- {{ formatPrice(92.17) }}</span
                      >
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-2 mt-6">
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
