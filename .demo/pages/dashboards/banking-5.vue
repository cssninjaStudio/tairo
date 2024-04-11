<script setup lang="ts">
definePageMeta({
  title: 'Accounts',
  preview: {
    title: 'Banking dashboard v5',
    description: 'For bank accounts management',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-banking-5.png',
    srcDark: '/img/screens/dashboards-banking-5-dark.png',
    order: 10,
    new: true,
  },
})
</script>

<template>
  <div class="space-y-6 pb-20 pt-4">
    <div class="grid grid-cols-12 gap-6">
      <!-- Balance -->
      <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
        <BaseCard
          rounded="md"
          class="h-full p-8"
        >
          <div
            class="flex h-full flex-col justify-between gap-y-6 sm:flex-row sm:gap-y-0"
          >
            <div class="flex flex-col">
              <BaseParagraph
                size="sm"
                class="text-muted-400 mb-4"
              >
                Main Account
              </BaseParagraph>
              <BaseHeading
                weight="medium"
                class="text-muted-800 dark:text-muted-100"
              >
                Checking account
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-muted-400 mb-6"
              >
                1487 3256 54122 4897
              </BaseParagraph>
              <div class="mt-auto flex flex-col items-center gap-2 sm:flex-row">
                <BaseButton
                  to="/layouts/send"
                  rounded="md"
                  color="primary"
                  class="w-full sm:w-auto"
                >
                  Transfer Money
                </BaseButton>
                <BaseButton
                  to="/layouts/accounts/linked"
                  rounded="md"
                  class="w-full sm:w-auto"
                >
                  Link Accounts
                </BaseButton>
              </div>
            </div>
            <div class="flex flex-col">
              <BaseParagraph
                size="sm"
                class="text-muted-400 mb-4"
              >
                Available Funds
              </BaseParagraph>
              <BaseHeading
                as="h5"
                size="2xl"
                class="mb-6"
              >
                $9,543.12
              </BaseHeading>

              <div class="ms-auto mt-auto">
                <TairoLogo class="text-muted-400 size-12" />
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Orders -->
      <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
        <BaseCard
          rounded="md"
          class="!bg-primary-800 !border-primary-800 h-full p-8"
        >
          <div
            class="flex flex-col justify-between gap-y-16 sm:flex-row sm:gap-y-0"
          >
            <div class="flex flex-col">
              <BaseHeading
                weight="medium"
                class="mb-3 text-white"
              >
                Standing Orders
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-muted-100 mb-6"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si
                longus, levis dictata sunt. Quare attende, quaeso
              </BaseParagraph>
              <div class="mt-auto flex items-center gap-2">
                <BaseButton
                  to="/layouts/send"
                  rounded="md"
                >
                  Manage Orders
                </BaseButton>
              </div>
            </div>
            <div class="relative min-h-[180px] min-w-[160px] shrink-0">
              <div
                class="absolute bottom-0 end-0 min-w-[250px] max-w-[250px] sm:-end-16 sm:min-w-[220px]"
              >
                <VectorIllustrationCalendar class="text-primary-500" />
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Tile -->
      <div class="col-span-12 sm:col-span-4">
        <BaseCard
          rounded="md"
          class="p-6"
        >
          <div class="mb-6 flex justify-between">
            <div class="flex flex-col">
              <BaseHeading
                weight="medium"
                size="md"
                class="text-muted-800 dark:text-muted-100 mb-&"
              >
                Chase bank
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400">
                **** **** 1728
              </BaseParagraph>
            </div>
            <div>
              <img
                src="/img/logos/companies/chase-full.svg"
                alt="Bank logo"
                class="size-8"
              >
            </div>
          </div>
          <div class="flex justify-between">
            <div>
              <BaseHeading as="h5" size="xl">
                $3,462.12
              </BaseHeading>
            </div>
            <div>
              <BaseButtonIcon size="sm" rounded="lg">
                <Icon name="lucide:arrow-right" />
              </BaseButtonIcon>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Tile -->
      <div class="col-span-12 sm:col-span-4">
        <BaseCard
          rounded="md"
          class="p-6"
        >
          <div class="mb-6 flex justify-between">
            <div class="flex flex-col">
              <BaseHeading
                weight="medium"
                size="md"
                class="text-muted-800 dark:text-muted-100 mb-&"
              >
                Eurasian bank
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400">
                **** **** 3291
              </BaseParagraph>
            </div>
            <div>
              <img
                src="/img/logos/companies/eurasian-full.svg"
                alt="Bank logo"
                class="size-8"
              >
            </div>
          </div>
          <div class="flex justify-between">
            <div>
              <BaseHeading as="h5" size="xl">
                $1,763.49
              </BaseHeading>
            </div>
            <div>
              <BaseButtonIcon size="sm" rounded="lg">
                <Icon name="lucide:arrow-right" />
              </BaseButtonIcon>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Tile -->
      <div class="col-span-12 sm:col-span-4">
        <BaseCard
          rounded="md"
          class="p-6"
        >
          <div class="mb-6 flex justify-between">
            <div class="flex flex-col">
              <BaseHeading
                weight="medium"
                size="md"
                class="text-muted-800 dark:text-muted-100 mb-&"
              >
                Bank of America
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400">
                **** **** 5482
              </BaseParagraph>
            </div>
            <div>
              <img
                src="/img/logos/companies/bank-of-america-full.svg"
                alt="Bank logo"
                class="size-8"
              >
            </div>
          </div>
          <div class="flex justify-between">
            <div>
              <BaseHeading as="h5" size="xl">
                $6,729.87
              </BaseHeading>
            </div>
            <div>
              <BaseButtonIcon size="sm" rounded="lg">
                <Icon name="lucide:arrow-right" />
              </BaseButtonIcon>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Transactions -->
      <div class="col-span-12">
        <DemoWidgetTransactionSummary />
      </div>
      <!-- Chart -->
      <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
        <BaseCard
          rounded="md"
          class="flex h-full flex-col p-8"
        >
          <div class="mb-8 items-center justify-between sm:flex">
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              lead="none"
              class="text-muted-400 uppercase"
            >
              All Expenses
            </BaseHeading>
          </div>
          <div
            class="border-muted-200 dark:border-muted-800 mb-4 flex justify-between border-b pb-4"
          >
            <div>
              <BaseParagraph size="xs" class="text-muted-400 mb-1">
                Daily
              </BaseParagraph>
              <BaseHeading as="h5" size="md">
                $276.40
              </BaseHeading>
            </div>
            <div>
              <BaseParagraph size="xs" class="text-muted-400 mb-1">
                Weekly
              </BaseParagraph>
              <BaseHeading as="h5" size="md">
                $1,287.12
              </BaseHeading>
            </div>
            <div>
              <BaseParagraph size="xs" class="text-muted-400 mb-1">
                Monthly
              </BaseParagraph>
              <BaseHeading as="h5" size="md">
                $6,832.41
              </BaseHeading>
            </div>
          </div>
          <div class="mt-auto sm:px-4">
            <DemoChartDonutExpenses />
          </div>
        </BaseCard>
      </div>
      <!-- Chart -->
      <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
        <BaseCard
          rounded="md"
          class="h-full flex-col p-8"
        >
          <div class="mb-8 items-center justify-between sm:flex">
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              lead="none"
              class="text-muted-400 uppercase"
            >
              Income
            </BaseHeading>
          </div>
          <div
            class="border-muted-200 dark:border-muted-800 mb-4 flex justify-between border-b pb-4"
          >
            <div>
              <BaseParagraph size="xs" class="text-muted-400 mb-1">
                Daily
              </BaseParagraph>
              <BaseHeading as="h5" size="md">
                $378.12
              </BaseHeading>
            </div>
            <div>
              <BaseParagraph size="xs" class="text-muted-400 mb-1">
                Weekly
              </BaseParagraph>
              <BaseHeading as="h5" size="md">
                $832.21
              </BaseHeading>
            </div>
            <div>
              <BaseParagraph size="xs" class="text-muted-400 mb-1">
                Monthly
              </BaseParagraph>
              <BaseHeading as="h5" size="md">
                $4214.97
              </BaseHeading>
            </div>
          </div>
          <div class="mt-auto sm:px-4">
            <DemoChartBarMultiIncome />
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
