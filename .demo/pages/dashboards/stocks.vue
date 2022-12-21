<script setup lang="ts">
definePageMeta({
  title: 'Stocks',
  layout:'sidebar',
})
</script>

<template>
  <div>
    <!-- Tile grid -->
    <div class="grid md:grid-cols-2 ltablet:grid-cols-3 lg:grid-cols-3 gap-6">
      <!-- Tile -->
      <div class="relative">
        <BaseCard shape="curved" class="p-6">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="block h-2 w-2 rounded-full bg-emerald-500"></span>
              <span class="font-sans font-medium text-xs text-muted-400">Open to transactions</span>
            </div>
            <BaseDropdown
              flavor="context"
              label="Dropdown"
              orientation="end"
              class="z-20"
            >
              <BaseDropdownItem
                to="/"
                title="Invest"
                text="Buys more stocks"
              >
                <template #start>
                  <Icon
                    name="ph:coin-duotone"
                    class="w-5 h-5 block mr-2"
                  />
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
                  <Icon
                    name="ph:bank-duotone"
                    class="w-5 h-5 block mr-2"
                  />
                </template>
              </BaseDropdownItem>
              <BaseDropdownDivide />
              <BaseDropdownItem
                to="/"
                title="Wallet"
                text="Manage your wallet"
              >
                <template #start>
                  <Icon
                    name="ph:wallet-duotone"
                    class="w-5 h-5 block mr-2"
                  />
                </template>
              </BaseDropdownItem>
            </BaseDropdown>
          </div>
          <div class="mb-4">
            <VectorChartStockOne class="mx-auto mb-4 text-muted-200 dark:text-muted-700" />
          </div>
          <div class="flex items-center gap-2">
            <BaseIconBox shape="circle" size="sm" class="bg-red-500 text-white shadow-xl shadow-red-500/20 dark:shadow-red-800/20">
              <Icon name="cib:tesla" class="w-4 h-4" />
            </BaseIconBox>
            <div>
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
                lead="snug"
                class="text-muted-800 dark:text-white"
              >
                <span>TSL</span>
              </BaseHeading>
              <BaseParagraph lead="none" size="sm">
                <span class="text-muted-400">
                  Tesla Motors
                </span>
              </BaseParagraph>
            </div>
            <div class="flex items-center gap-1 ml-auto">
              <Icon name="ph:check-circle-duotone" class="w-4 h-4 text-success-500" />
              <span class="font-sans font-medium text-sm text-muted-600 dark:text-muted-400">$3,876.21</span>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Tile -->
      <div class="relative">
        <BaseCard shape="curved" class="p-6">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="block h-2 w-2 rounded-full bg-emerald-500"></span>
              <span class="font-sans font-medium text-xs text-muted-400">Open to transactions</span>
            </div>
            <BaseDropdown
              flavor="context"
              label="Dropdown"
              orientation="end"
              class="z-20"
            >
              <BaseDropdownItem
                to="/"
                title="Invest"
                text="Buys more stocks"
              >
                <template #start>
                  <Icon
                    name="ph:coin-duotone"
                    class="w-5 h-5 block mr-2"
                  />
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
                  <Icon
                    name="ph:bank-duotone"
                    class="w-5 h-5 block mr-2"
                  />
                </template>
              </BaseDropdownItem>
              <BaseDropdownDivide />
              <BaseDropdownItem
                to="/"
                title="Wallet"
                text="Manage your wallet"
              >
                <template #start>
                  <Icon
                    name="ph:wallet-duotone"
                    class="w-5 h-5 block mr-2"
                  />
                </template>
              </BaseDropdownItem>
            </BaseDropdown>
          </div>
          <div class="mb-4">
            <VectorChartStockTwo class="mx-auto mb-4 text-muted-200 dark:text-muted-700" />
          </div>
          <div class="flex items-center gap-2">
            <BaseIconBox shape="circle" size="sm" class="bg-blue-800 text-white shadow-xl shadow-blue-500/20 dark:shadow-blue-800/20">
              <Icon name="fa6-brands:facebook-f" class="w-4 h-4" />
            </BaseIconBox>
            <div>
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
                lead="snug"
                class="text-muted-800 dark:text-white"
              >
                <span>FCB</span>
              </BaseHeading>
              <BaseParagraph lead="none" size="sm">
                <span class="text-muted-400">
                  Facebook Inc
                </span>
              </BaseParagraph>
            </div>
            <div class="flex items-center gap-1 ml-auto">
              <Icon name="ph:check-circle-duotone" class="w-4 h-4 text-success-500" />
              <span class="font-sans font-medium text-sm text-muted-600 dark:text-muted-400">$5,214.87</span>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Tile -->
      <div class="relative">
        <BaseCard shape="curved" class="p-6">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="block h-2 w-2 rounded-full bg-muted-300 dark:bg-muted-700/60"></span>
              <span class="font-sans font-medium text-xs text-muted-400">Closed to transactions</span>
            </div>
            <BaseDropdown
              flavor="context"
              label="Dropdown"
              orientation="end"
              class="z-20"
            >
              <BaseDropdownItem
                to="/"
                title="Invest"
                text="Buys more stocks"
              >
                <template #start>
                  <Icon
                    name="ph:coin-duotone"
                    class="w-5 h-5 block mr-2"
                  />
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
                  <Icon
                    name="ph:bank-duotone"
                    class="w-5 h-5 block mr-2"
                  />
                </template>
              </BaseDropdownItem>
              <BaseDropdownDivide />
              <BaseDropdownItem
                to="/"
                title="Wallet"
                text="Manage your wallet"
              >
                <template #start>
                  <Icon
                    name="ph:wallet-duotone"
                    class="w-5 h-5 block mr-2"
                  />
                </template>
              </BaseDropdownItem>
            </BaseDropdown>
          </div>
          <div class="mb-4">
            <VectorChartStockThree class="mx-auto mb-4 text-muted-200 dark:text-muted-700" />
          </div>
          <div class="flex items-center gap-2">
            <BaseIconBox shape="circle" size="sm" class="bg-sky-500 text-white shadow-xl shadow-sky-500/20 dark:shadow-sky-800/20">
              <Icon name="fa6-brands:twitter" class="w-4 h-4" />
            </BaseIconBox>
            <div>
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
                lead="snug"
                class="text-muted-800 dark:text-white"
              >
                <span>TWT</span>
              </BaseHeading>
              <BaseParagraph lead="none" size="sm">
                <span class="text-muted-400">
                  Twitter Inc
                </span>
              </BaseParagraph>
            </div>
            <div class="flex items-center gap-1 ml-auto">
              <Icon name="ph:check-circle-duotone" class="w-4 h-4 text-success-500" />
              <span class="font-sans font-medium text-sm text-muted-600 dark:text-muted-400">$1,657.12</span>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
    <!-- Investments -->
    <div class="flex justify-around gap-6 py-8 overflow-x-auto ltablet:overflow-visible lg:overflow-visible">
      <!-- Item -->
      <NuxtLink to="/" class="group flex-1 flex flex-col text-center">
        <div class="h-16 w-16 mx-auto flex items-center justify-center mask mask-hexed bg-muted-200 dark:bg-muted-700 group-hover:bg-yellow-400 dark:group-hover:bg-yellow-400 scale-90 group-hover:scale-90 group-hover:-translate-y-1 transition-all duration-300">
          <div class="h-16 w-16 scale-95 flex items-center justify-center mask mask-hexed bg-white dark:bg-muted-800">
            <Icon name="ph:lightning-duotone" class="w-6 h-6 text-yellow-400" />
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
      <NuxtLink to="/" class="group flex-1 flex flex-col text-center">
        <div class="h-16 w-16 mx-auto flex items-center justify-center mask mask-hexed bg-muted-200 dark:bg-muted-700 group-hover:bg-primary-500 dark:group-hover:bg-primary-500 scale-90 group-hover:scale-90 group-hover:-translate-y-1 transition-all duration-300">
          <div class="h-16 w-16 scale-95 flex items-center justify-center mask mask-hexed bg-white dark:bg-muted-800">
            <Icon name="ph:buildings-duotone" class="w-6 h-6 text-primary-500" />
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
      <NuxtLink to="/" class="group flex-1 flex flex-col text-center">
        <div class="h-16 w-16 mx-auto flex items-center justify-center mask mask-hexed bg-muted-200 dark:bg-muted-700 group-hover:bg-success-500 dark:group-hover:bg-success-500 scale-90 group-hover:scale-90 group-hover:-translate-y-1 transition-all duration-300">
          <div class="h-16 w-16 scale-95 flex items-center justify-center mask mask-hexed bg-white dark:bg-muted-800">
            <Icon name="ph:leaf-duotone" class="w-6 h-6 text-success-500" />
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
      <NuxtLink to="/" class="group flex-1 flex flex-col text-center">
        <div class="h-16 w-16 mx-auto flex items-center justify-center mask mask-hexed bg-muted-200 dark:bg-muted-700 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-500 scale-90 group-hover:scale-90 group-hover:-translate-y-1 transition-all duration-300">
          <div class="h-16 w-16 scale-95 flex items-center justify-center mask mask-hexed bg-white dark:bg-muted-800">
            <Icon name="ph:bank-duotone" class="w-6 h-6 text-indigo-500" />
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
      <NuxtLink to="/" class="group flex-1 flex flex-col text-center">
        <div class="h-16 w-16 mx-auto flex items-center justify-center mask mask-hexed bg-muted-200 dark:bg-muted-700 group-hover:bg-lime-500 dark:group-hover:bg-lime-500 scale-90 group-hover:scale-90 group-hover:-translate-y-1 transition-all duration-300">
          <div class="h-16 w-16 scale-95 flex items-center justify-center mask mask-hexed bg-white dark:bg-muted-800">
            <Icon name="ph:sketch-logo-duotone" class="w-6 h-6 text-lime-500" />
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
      <NuxtLink to="/" class="group flex-1 flex flex-col text-center">
        <div class="h-16 w-16 mx-auto flex items-center justify-center mask mask-hexed bg-muted-200 dark:bg-muted-700 group-hover:bg-sky-500 dark:group-hover:bg-sky-500 scale-90 group-hover:scale-90 group-hover:-translate-y-1 transition-all duration-300">
          <div class="h-16 w-16 scale-95 flex items-center justify-center mask mask-hexed bg-white dark:bg-muted-800">
            <Icon name="ph:atom-duotone" class="w-6 h-6 text-sky-500" />
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
      <NuxtLink to="/" class="group flex-1 flex flex-col text-center">
        <div class="h-16 w-16 mx-auto flex items-center justify-center mask mask-hexed bg-muted-200 dark:bg-muted-700 group-hover:bg-orange-500 dark:group-hover:bg-orange-500 scale-90 group-hover:scale-90 group-hover:-translate-y-1 transition-all duration-300">
          <div class="h-16 w-16 scale-95 flex items-center justify-center mask mask-hexed bg-white dark:bg-muted-800">
            <Icon name="ph:monitor-duotone" class="w-6 h-6 text-orange-500" />
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
      <NuxtLink to="/" class="group flex-1 flex flex-col text-center">
        <div class="h-16 w-16 mx-auto flex items-center justify-center mask mask-hexed bg-muted-200 dark:bg-muted-700 group-hover:bg-rose-500 dark:group-hover:bg-rose-500 scale-90 group-hover:scale-90 group-hover:-translate-y-1 transition-all duration-300">
          <div class="h-16 w-16 scale-95 flex items-center justify-center mask mask-hexed bg-white dark:bg-muted-800">
            <Icon name="ph:pill-duotone" class="w-6 h-6 text-rose-500" />
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
    <!-- Card grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Grid item -->
      <div class="col-span-12 md:col-span-6 ltablet:col-span-4 lg:col-span-4">
        <BaseCard shape="curved" class="p-6">
          <div class="flex items-center justify-between mb-6">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Trending Stocks</span>
            </BaseHeading>
            <RouterLink to="/" class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300">View All</RouterLink>
          </div>
          <div class="space-y-5 mb-2">
            <!-- List item -->
            <div class="flex items-center gap-2">
              <BaseIconBox shape="circle" size="xs" class="bg-blue-800 text-white shadow-xl shadow-blue-500/20 dark:shadow-blue-800/20">
                <Icon name="fa6-brands:linkedin-in" class="w-3 h-3" />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="medium"
                  lead="snug"
                  class="text-muted-800 dark:text-white"
                >
                  <span>LKN</span>
                </BaseHeading>
                <BaseParagraph lead="none" size="xs">
                  <span class="text-muted-400">
                    Linkedin Corp.
                  </span>
                </BaseParagraph>
              </div>
              <div class="flex items-center gap-1 ml-auto">
                <Icon name="ph:check-circle-duotone" class="w-4 h-4 text-success-500" />
                <span class="font-sans font-medium text-sm text-muted-600 dark:text-muted-400">$1,478.32</span>
              </div>
            </div>
            <!-- List item -->
            <div class="flex items-center gap-2">
              <BaseIconBox shape="circle" size="xs" class="bg-muted-900 text-white dark:bg-muted-100 dark:text-muted-800">
                <Icon name="fa6-brands:github" class="w-3 h-3" />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="medium"
                  lead="snug"
                  class="text-muted-800 dark:text-white"
                >
                  <span>GTB</span>
                </BaseHeading>
                <BaseParagraph lead="none" size="xs">
                  <span class="text-muted-400">
                    Github Inc.
                  </span>
                </BaseParagraph>
              </div>
              <div class="flex items-center gap-1 ml-auto">
                <Icon name="ph:check-circle-duotone" class="w-4 h-4 text-success-500" />
                <span class="font-sans font-medium text-sm text-muted-600 dark:text-muted-400">$978.21</span>
              </div>
            </div>
            <!-- List item -->
            <div class="flex items-center gap-2">
              <BaseIconBox shape="circle" size="xs" class="bg-rose-500 text-white shadow-xl shadow-rose-500/20 dark:shadow-rose-800/20">
                <Icon name="fa6-brands:invision" class="w-4 h-4" />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="medium"
                  lead="snug"
                  class="text-muted-800 dark:text-white"
                >
                  <span>INV</span>
                </BaseHeading>
                <BaseParagraph lead="none" size="xs">
                  <span class="text-muted-400">
                    Invision Corp.
                  </span>
                </BaseParagraph>
              </div>
              <div class="flex items-center gap-1 ml-auto">
                <Icon name="ph:check-circle-duotone" class="w-4 h-4 text-success-500" />
                <span class="font-sans font-medium text-sm text-muted-600 dark:text-muted-400">$1,671.89</span>
              </div>
            </div>
            <!-- List item -->
            <div class="flex items-center gap-2">
              <BaseIconBox shape="circle" size="xs" class="bg-sky-700 text-white shadow-xl shadow-sky-500/20 dark:shadow-sky-800/20">
                <Icon name="fa-brands:telegram-plane" class="w-4 h-4" />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="medium"
                  lead="snug"
                  class="text-muted-800 dark:text-white"
                >
                  <span>TLG</span>
                </BaseHeading>
                <BaseParagraph lead="none" size="xs">
                  <span class="text-muted-400">
                    Telegram Inc.
                  </span>
                </BaseParagraph>
              </div>
              <div class="flex items-center gap-1 ml-auto">
                <Icon name="ph:check-circle-duotone" class="w-4 h-4 text-success-500" />
                <span class="font-sans font-medium text-sm text-muted-600 dark:text-muted-400">$491.54</span>
              </div>
            </div>
            <!-- List item -->
            <div class="flex items-center gap-2">
              <BaseIconBox shape="circle" size="xs" class="bg-emerald-500 text-white shadow-xl shadow-emerald-500/20 dark:shadow-emerald-800/20">
                <Icon name="fa-brands:kickstarter-k" class="w-4 h-4" />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="medium"
                  lead="snug"
                  class="text-muted-800 dark:text-white"
                >
                  <span>KCK</span>
                </BaseHeading>
                <BaseParagraph lead="none" size="xs">
                  <span class="text-muted-400">
                    Kickstarter Inc.
                  </span>
                </BaseParagraph>
              </div>
              <div class="flex items-center gap-1 ml-auto">
                <Icon name="ph:check-circle-duotone" class="w-4 h-4 text-success-500" />
                <span class="font-sans font-medium text-sm text-muted-600 dark:text-muted-400">$1115.68</span>
              </div>
            </div>
            <!-- List item -->
            <div class="flex items-center gap-2">
              <BaseIconBox shape="circle" size="xs" class="bg-yellow-500 text-white shadow-xl shadow-yellow-500/20 dark:shadow-yellow-800/20">
                <Icon name="fa-brands:google" class="w-4 h-4" />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="medium"
                  lead="snug"
                  class="text-muted-800 dark:text-white"
                >
                  <span>GGL</span>
                </BaseHeading>
                <BaseParagraph lead="none" size="xs">
                  <span class="text-muted-400">
                    Google Corp.
                  </span>
                </BaseParagraph>
              </div>
              <div class="flex items-center gap-1 ml-auto">
                <Icon name="ph:check-circle-duotone" class="w-4 h-4 text-success-500" />
                <span class="font-sans font-medium text-sm text-muted-600 dark:text-muted-400">$2514.51</span>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Grid item -->
      <div class="col-span-12 md:col-span-6 ltablet:col-span-4 lg:col-span-4">
        <BaseCard class="relative p-6" shape="curved">
          <div class="mb-6">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Profit Evolution</span>
            </BaseHeading>
          </div>
          <ExampleApexchartBarProfit />
        </BaseCard>
      </div>
      <!-- Grid item -->
      <div class="col-span-12 md:col-span-6 ltablet:col-span-4 lg:col-span-4">
        <BaseCard shape="curved" class="p-6">
          <WidgetDatepicker />
        </BaseCard>
      </div>
    </div>
  </div>
</template>