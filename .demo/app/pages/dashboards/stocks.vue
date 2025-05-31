<script setup lang="ts">
definePageMeta({
  title: 'Stocks',
  preview: {
    title: 'Stocks dashboard',
    description: 'For stock market analysis',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-stocks.png',
    srcDark: '/img/screens/dashboards-stocks-dark.png',
    order: 5,
  },
})

const stocks = ref([
  {
    id: 'LKN',
    icon: 'fa6-brands:linkedin-in',
    iconColors: 'bg-blue-800 text-white shadow-blue-500/20 dark:shadow-blue-800/20',
    name: 'Linkedin Corp.',
    price: 1478.32,
  },
  {
    id: 'GTB',
    icon: 'fa6-brands:github',
    iconColors: 'bg-muted-900 dark:bg-muted-100 dark:text-muted-900 text-white',
    name: 'Github Inc.',
    price: 978.21,
  },
  {
    id: 'INV',
    icon: 'fa6-brands:invision',
    iconColors: 'bg-rose-500 text-white shadow-rose-500/20 dark:shadow-rose-800/20',
    name: 'Invision Corp.',
    price: 1671.89,
  },
  {
    id: 'TLG',
    icon: 'fa-brands:telegram-plane',
    iconColors: 'bg-sky-700 text-white shadow-sky-500/20 dark:shadow-sky-800/20',
    name: 'Telegram Inc.',
    price: 491.54,
  },
  {
    id: 'KCK',
    icon: 'fa-brands:kickstarter-k',
    iconColors: 'bg-emerald-500 text-white shadow-emerald-500/20 dark:shadow-emerald-800/20',
    name: 'Kickstarter Inc.',
    price: 1115.68,
  },
  {
    id: 'GGL',
    icon: 'fa-brands:google',
    iconColors: 'bg-yellow-500 text-white shadow-yellow-500/20 dark:shadow-yellow-800/20',
    name: 'Google Corp.',
    price: 2514.51,
  },
])

// Datepicker
const date = ref(new Date())
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <!-- Investments -->
    <div
      class="flex justify-around gap-6 overflow-x-auto pb-6 lg:overflow-visible"
    >
      <!-- Item -->
      <NuxtLink to="#" class="group flex flex-1 flex-col text-center">
        <div
          class="nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 mx-auto flex size-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90 group-hover:bg-yellow-400 dark:group-hover:bg-yellow-400"
        >
          <div
            class="nui-mask nui-mask-hexed dark:bg-muted-800 flex size-16 scale-95 items-center justify-center bg-white"
          >
            <Icon name="solar:bolt-bold-duotone" class="size-7 text-yellow-400" />
          </div>
        </div>
        <BaseHeading
          as="h5"
          size="md"
          weight="medium"
          lead="tight"
          class="text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
        >
          <span class="font-sans text-sm">Energy</span>
        </BaseHeading>
      </NuxtLink>
      <!-- Item -->
      <NuxtLink to="#" class="group flex flex-1 flex-col text-center">
        <div
          class="nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 group-hover:bg-primary-500 dark:group-hover:bg-primary-500 mx-auto flex size-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90"
        >
          <div
            class="nui-mask nui-mask-hexed dark:bg-muted-800 flex size-16 scale-95 items-center justify-center bg-white"
          >
            <Icon
              name="solar:buildings-bold-duotone"
              class="text-primary-500 size-7"
            />
          </div>
        </div>
        <BaseHeading
          as="h5"
          size="md"
          weight="medium"
          lead="tight"
          class="text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
        >
          <span class="font-sans text-sm">Estate</span>
        </BaseHeading>
      </NuxtLink>
      <!-- Item -->
      <NuxtLink to="#" class="group flex flex-1 flex-col text-center">
        <div
          class="nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 group-hover:bg-success-500 dark:group-hover:bg-success-500 mx-auto flex size-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90"
        >
          <div
            class="nui-mask nui-mask-hexed dark:bg-muted-800 flex size-16 scale-95 items-center justify-center bg-white"
          >
            <Icon name="solar:earth-bold-duotone" class="text-success-500 size-7" />
          </div>
        </div>
        <BaseHeading
          as="h5"
          size="md"
          weight="medium"
          lead="tight"
          class="text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
        >
          <span class="font-sans text-sm">Agriculture</span>
        </BaseHeading>
      </NuxtLink>
      <!-- Item -->
      <NuxtLink to="#" class="group flex flex-1 flex-col text-center">
        <div
          class="nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 mx-auto flex size-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-500"
        >
          <div
            class="nui-mask nui-mask-hexed dark:bg-muted-800 flex size-16 scale-95 items-center justify-center bg-white"
          >
            <Icon name="solar:money-bag-bold-duotone" class="size-7 text-indigo-500" />
          </div>
        </div>
        <BaseHeading
          as="h5"
          size="md"
          weight="medium"
          lead="tight"
          class="text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
        >
          <span class="font-sans text-sm">Finance</span>
        </BaseHeading>
      </NuxtLink>
      <!-- Item -->
      <NuxtLink to="#" class="group flex flex-1 flex-col text-center">
        <div
          class="nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 mx-auto flex size-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90 group-hover:bg-lime-500 dark:group-hover:bg-lime-500"
        >
          <div
            class="nui-mask nui-mask-hexed dark:bg-muted-800 flex size-16 scale-95 items-center justify-center bg-white"
          >
            <Icon name="solar:heart-lock-bold-duotone" class="size-7 text-lime-500" />
          </div>
        </div>
        <BaseHeading
          as="h5"
          size="md"
          weight="medium"
          lead="tight"
          class="text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
        >
          <span class="font-sans text-sm">Diamonds</span>
        </BaseHeading>
      </NuxtLink>
      <!-- Item -->
      <NuxtLink to="#" class="group flex flex-1 flex-col text-center">
        <div
          class="nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 mx-auto flex size-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90 group-hover:bg-sky-500 dark:group-hover:bg-sky-500"
        >
          <div
            class="nui-mask nui-mask-hexed dark:bg-muted-800 flex size-16 scale-95 items-center justify-center bg-white"
          >
            <Icon name="solar:atom-bold-duotone" class="size-7 text-sky-500" />
          </div>
        </div>
        <BaseHeading
          as="h5"
          size="md"
          weight="medium"
          lead="tight"
          class="text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
        >
          <span class="font-sans text-sm">Research</span>
        </BaseHeading>
      </NuxtLink>
      <!-- Item -->
      <NuxtLink to="#" class="group flex flex-1 flex-col text-center">
        <div
          class="nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 mx-auto flex size-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90 group-hover:bg-orange-500 dark:group-hover:bg-orange-500"
        >
          <div
            class="nui-mask nui-mask-hexed dark:bg-muted-800 flex size-16 scale-95 items-center justify-center bg-white"
          >
            <Icon name="solar:home-wifi-angle-bold-duotone" class="size-7 text-orange-500" />
          </div>
        </div>
        <BaseHeading
          as="h5"
          size="md"
          weight="medium"
          lead="tight"
          class="text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
        >
          <span class="font-sans text-sm">Technology</span>
        </BaseHeading>
      </NuxtLink>
      <!-- Item -->
      <NuxtLink to="#" class="group flex flex-1 flex-col text-center">
        <div
          class="nui-mask nui-mask-hexed bg-muted-200 dark:bg-muted-700 mx-auto flex size-16 scale-90 items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-90 group-hover:bg-rose-500 dark:group-hover:bg-rose-500"
        >
          <div
            class="nui-mask nui-mask-hexed dark:bg-muted-800 flex size-16 scale-95 items-center justify-center bg-white"
          >
            <Icon name="solar:pill-bold-duotone" class="size-7 text-rose-500" />
          </div>
        </div>
        <BaseHeading
          as="h5"
          size="md"
          weight="medium"
          lead="tight"
          class="text-muted-400 dark:text-muted-400 group-hover:text-muted-600 dark:group-hover:text-muted-200"
        >
          <span class="font-sans text-sm">Healthcare</span>
        </BaseHeading>
      </NuxtLink>
    </div>
    <!-- Tile grid -->
    <div
      class="mb-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <!-- Tile -->
      <div class="relative">
        <BaseCard rounded="lg" class="p-4 md:p-6">
          <div class="mb-2 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="block size-2 rounded-full bg-emerald-500" />
              <span class="text-muted-400 font-sans text-xs font-medium">
                Open to transactions
              </span>
            </div>
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
          <div class="mb-4">
            <VectorChartStockOne
              class="text-muted-200 dark:text-muted-700 mx-auto mb-4"
            />
          </div>
          <div class="flex items-center gap-2">
            <BaseIconBox
              rounded="full"
              size="xs"
              class="bg-red-500 text-white shadow-xl shadow-red-500/20 dark:shadow-red-800/20"
              variant="none"
            >
              <Icon name="cib:tesla" class="size-4" />
            </BaseIconBox>
            <div>
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
                lead="snug"
                class="text-muted-900 dark:text-white"
              >
                <span>TSL</span>
              </BaseHeading>
              <BaseParagraph lead="none" size="sm">
                <span class="text-muted-600 dark:text-muted-400">Tesla Motors</span>
              </BaseParagraph>
            </div>
            <div class="ms-auto flex items-center gap-1">
              <span
                class="text-muted-600 dark:text-muted-400 font-sans text-sm font-medium"
              >
                $3,876.21
              </span>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Tile -->
      <div class="relative">
        <BaseCard rounded="lg" class="p-4 md:p-6">
          <div class="mb-2 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="block size-2 rounded-full bg-emerald-500" />
              <span class="text-muted-400 font-sans text-xs font-medium">
                Open to transactions
              </span>
            </div>
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
          <div class="mb-4">
            <VectorChartStockTwo
              class="text-muted-200 dark:text-muted-700 mx-auto mb-4"
            />
          </div>
          <div class="flex items-center gap-2">
            <BaseIconBox
              rounded="full"
              size="xs"
              class="bg-blue-800 text-white shadow-xl shadow-blue-500/20 dark:shadow-blue-800/20"
              variant="none"
            >
              <Icon name="fa6-brands:facebook-f" class="size-4" />
            </BaseIconBox>
            <div>
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
                lead="snug"
                class="text-muted-900 dark:text-white"
              >
                <span>FCB</span>
              </BaseHeading>
              <BaseParagraph lead="none" size="sm">
                <span class="text-muted-600 dark:text-muted-400">Facebook Inc</span>
              </BaseParagraph>
            </div>
            <div class="ms-auto flex items-center gap-1">
              <span
                class="text-muted-600 dark:text-muted-400 font-sans text-sm font-medium"
              >
                $5,214.87
              </span>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Tile -->
      <div class="relative">
        <BaseCard rounded="lg" class="p-4 md:p-6">
          <div class="mb-2 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span
                class="bg-muted-300 dark:bg-muted-700/60 block size-2 rounded-full"
              />
              <span class="text-muted-400 font-sans text-xs font-medium">
                Closed to transactionseee
              </span>
            </div>
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
          <div class="mb-4">
            <VectorChartStockThree
              class="text-muted-200 dark:text-muted-700 mx-auto mb-4"
            />
          </div>
          <div class="flex items-center gap-2">
            <BaseIconBox
              rounded="full"
              size="xs"
              class="bg-sky-500 text-white shadow-xl shadow-sky-500/20 dark:shadow-sky-800/20"
              variant="none"
            >
              <Icon name="fa6-brands:x-twitter" class="size-4" />
            </BaseIconBox>
            <div>
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
                lead="snug"
                class="text-muted-900 dark:text-white"
              >
                <span>TWT</span>
              </BaseHeading>
              <BaseParagraph lead="none" size="sm">
                <span class="text-muted-600 dark:text-muted-400">X Inc</span>
              </BaseParagraph>
            </div>
            <div class="ms-auto flex items-center gap-1">
              <span
                class="text-muted-600 dark:text-muted-400 font-sans text-sm font-medium"
              >
                $1,657.12
              </span>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
    <!-- Card grid -->
    <div class="grid grid-cols-12 gap-4">
      <!-- Grid item -->
      <div class="col-span-12 md:col-span-6 lg:col-span-4">
        <BaseCard rounded="lg" class="py-4 px-2 md:py-6 md:px-4">
          <div class="mb-8 px-2 flex items-center justify-between">
            <BaseHeading
              as="h3"
              size="md"
              weight="medium"
              lead="tight"
              class="text-muted-900 dark:text-white"
            >
              <span>Trending Stocks</span>
            </BaseHeading>
            <BaseButton
              size="sm"
              rounded="md"
            >
              View all
            </BaseButton>
          </div>
          <div class="space-y-2">
            <!-- List item -->
            <div
              v-for="item in stocks"
              :key="item.id"
              class="py-2 px-2 flex items-center gap-2 hover:bg-muted-200/50 dark:hover:bg-muted-900/50 transition-colors duration-100 rounded-lg"
            >
              <BaseIconBox
                rounded="full"
                size="xs"
                :class="item.iconColors"
                variant="none"
              >
                <Icon :name="item.icon" class="size-3" />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="medium"
                  lead="snug"
                  class="text-muted-900 dark:text-white"
                >
                  <span>{{ item.name }}</span>
                </BaseHeading>
                <BaseParagraph lead="none" size="xs">
                  <span class="text-muted-600 dark:text-muted-400">{{ item.name }}</span>
                </BaseParagraph>
              </div>
              <div class="ms-auto flex items-center gap-1">
                <span
                  class="text-muted-600 dark:text-muted-400 font-sans text-sm font-medium"
                >
                  {{ formatPrice(item.price) }}
                </span>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Grid item -->
      <div class="col-span-12 md:col-span-6 lg:col-span-4">
        <BaseCard class="relative p-4 md:p-6 h-full flex flex-col" rounded="lg">
          <div class="mb-6 flex items-center justify-between">
            <BaseHeading
              as="h3"
              size="md"
              weight="medium"
              lead="tight"
              class="text-muted-900 dark:text-white"
            >
              <span>Profit Evolution</span>
            </BaseHeading>
            <BaseButton
              size="sm"
              rounded="md"
            >
              View all
            </BaseButton>
          </div>
          <div class="mt-auto">
            <DemoChartBarProfit />
          </div>
        </BaseCard>
      </div>
      <!-- Grid item -->
      <div class="col-span-12 md:col-span-6 lg:col-span-4">
        <BaseCard class="p-4" rounded="lg">
          <LazyAddonDatepicker v-model="date" locale="en" label="Start date" />
        </BaseCard>
      </div>
    </div>
  </div>
</template>
