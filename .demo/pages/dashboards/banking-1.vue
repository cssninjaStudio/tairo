<script setup lang="ts">
definePageMeta({
  title: 'Banking 1',
  layout:'sidebar',
})
</script>

<template>
  <!-- Grid -->
  <div class="grid md:grid-cols-12 gap-4">
    <!--Grid column -->
    <div class="col-span-4">
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
            <BaseButtonIcon shape="full" smaller>
              <Icon
                name="ph:plus-duotone"
                class="w-4 h-4"
              />
            </BaseButtonIcon>
          </div>
          <div class="flex items-center gap-4 px-6 mb-8">
            <ObjectCreditCardSmall class="text-primary-500" />
            <div>
              <BaseParagraph size="sm" weight="medium">
                <span class="text-muted-400">
                  Card Balance
                </span>
              </BaseParagraph>
              <BaseHeading
                as="h4"
                size="2xl"
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
          </div>
          <div class="space-y-5 border-b-2 border-dashed px-6 pb-6 mb-8 border-muted-200 dark:border-muted-700">
            <div class="flex items-center justify-between">
              <BaseHeading
                as="h5"
                size="sm"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Information</span>
              </BaseHeading>
              <NuxtLink to="/" class="font-sans text-sm underline-offset-4 text-primary-500 hover:underline">Edit</NuxtLink>
            </div>
            <div class="flex items-center justify-between">
              <BaseHeading
                as="h5"
                size="sm"
                weight="semibold"
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
                weight="semibold"
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
                weight="semibold"
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
                <span class="text-muted-400">
                  Card Balance
                </span>
              </BaseParagraph>
              <BaseHeading
                as="h4"
                size="2xl"
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
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>