<script setup lang="ts">
definePageMeta({
  title: 'Billing',
  preview: {
    title: 'Preferences - Billing',
    description: 'For account management',
    categories: ['layouts', 'settings'],
    src: '/img/screens/layouts-preferences-billing.png',
    srcDark: '/img/screens/layouts-preferences-billing-dark.png',
    order: 88,
    new: true,
  },
})

const selectedCard = ref(0)

const cards = [
  {
    number: '4331',
    type: 'Visa',
    expiry: '09/2024',
  },
  {
    number: '5442',
    type: 'Visa',
    expiry: '09/2025',
  },
]

const transactions = [
  {
    name: 'Standard Plan - Feb 2024',
    date: 'February 07 , 2024',
    amount: 59.00,
    status: 'Complete',
  },
  {
    name: 'Standard Plan - Jan 2024',
    date: 'January 09, 2024',
    amount: 59.00,
    status: 'Canceled',
  },
  {
    name: 'Basic Plan - Dec 2023',
    date: 'December 15, 2023',
    amount: 29.00,
    status: 'Complete',
  },
  {
    name: 'Basic Plan - Nov 2023',
    date: 'November 14, 2023',
    amount: 29.00,
    status: 'Pending',
  },
  {
    name: 'Basic Plan - Oct 2023',
    date: 'October 15, 2023',
    amount: 29.00,
    status: 'Complete',
  },
]
</script>

<template>
  <div class="mt-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="space-y-1">
        <BaseParagraph weight="semibold" class="text-muted-900 dark:text-white">
          Subscription Plan: <span class="text-primary-500">Standard</span>
        </BaseParagraph>
        <BaseParagraph
          size="sm"
          weight="medium"
          class="text-muted-500 dark:text-muted-400"
        >
          Monthly Plan
        </BaseParagraph>
      </div>

      <div class="mt-4 sm:mt-0">
        <BaseButton rounded="md" size="sm">
          Cancel Subscription
        </BaseButton>
      </div>
    </div>

    <hr class="border-muted-300 dark:border-muted-800 mt-6">

    <div class="mt-4 sm:flex sm:items-center sm:justify-between">
      <BaseParagraph
        size="sm"
        weight="medium"
        class="text-muted-900 dark:text-muted-100"
      >
        Your next payment is <BaseText size="sm" weight="semibold">
          $59.00 USD
        </BaseText>, to be charged on <BaseText size="sm" weight="semibold">
          April 08, 2025
        </BaseText>
      </BaseParagraph>

      <BaseParagraph
        size="sm"
        weight="medium"
        class="text-muted-500 dark:text-muted-400 mt-2 sm:mt-0"
      >
        Your payment will be automatically renewed each month
      </BaseParagraph>
    </div>

    <BaseCard rounded="lg" class="mt-8">
      <div class="px-4 py-5 sm:p-6">
        <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-5 lg:gap-x-24">
          <div class="lg:col-span-2">
            <BaseParagraph weight="semibold" class="text-muted-900 dark:text-white">
              Credit cards
            </BaseParagraph>
            <BaseParagraph
              size="sm"
              weight="medium"
              class="text-muted-500 dark:text-muted-400"
            >
              These are your currently saved credit cards
            </BaseParagraph>
          </div>

          <div class="lg:col-span-3">
            <div class="space-y-5">
              <div
                v-for="(card, index) in cards"
                :key="card.number"
                role="button"
                class=" relative overflow-hidden rounded-xl border"
                :class="selectedCard === index ? 'border-primary-500 bg-primary-500/10' : 'bg-white dark:bg-muted-950 border-muted-200 dark:border-muted-700'"
                tabindex="0"
                @click="selectedCard = index"
              >
                <div v-if="selectedCard === index" class="absolute end-4 top-4">
                  <div class="bg-primary-500 flex size-5 items-center justify-center rounded-full">
                    <Icon name="lucide:check" class="size-3 text-white" />
                  </div>
                </div>

                <div class="relative px-4 py-5">
                  <div class="flex items-start gap-4">
                    <div class="dark:bg-muted-950 border-muted-300 dark:border-muted-700 flex h-7 items-center justify-center rounded-full border bg-white px-3">
                      <Icon name="logos:visa" class="size-8" />
                    </div>

                    <div class="space-y-1">
                      <BaseParagraph
                        size="sm"
                        weight="semibold"
                        class="text-muted-900 dark:text-muted-100"
                      >
                        {{ card.type }} ending in {{ card.number }}
                      </BaseParagraph>
                      <BaseParagraph
                        size="xs"
                        weight="medium"
                        class="text-muted-500 dark:text-muted-400"
                      >
                        Expiry {{ card.expiry }}
                      </BaseParagraph>

                      <div class="mt-4! flex items-center gap-6">
                        <BaseParagraph
                          size="sm"
                          weight="medium"
                          class="text-muted-500 dark:text-muted-400"
                        >
                          {{ selectedCard === index ? 'Primary' : 'Saved' }} Card
                        </BaseParagraph>

                        <BaseButton size="sm" rounded="md">
                          Remove
                        </BaseButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <button type="button" class="text-muted-600 dark:text-muted-400 hover:text-primary-500 dark:hover:text-primary-500 inline-flex items-center justify-center gap-3 rounded-md text-sm font-medium leading-5 underline-offset-4 transition-all duration-200 hover:underline">
                <Icon name="lucide:plus" class="size-4" />
                <span>Add New Payment Method</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>

    <div class="mt-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <BaseParagraph weight="semibold" class="text-muted-900 dark:text-white">
          Latest Transactions
        </BaseParagraph>

        <div class="mt-4 sm:mt-0">
          <div class="flex items-center justify-start gap-x-5 sm:justify-end">
            <BaseButton size="sm" rounded="md">
              <Icon name="lucide:file-text" class="size-4" />
              <span>Export to CSV</span>
            </BaseButton>
          </div>
        </div>
      </div>

      <BaseCard rounded="lg" class="mt-6">
        <table class="lg:divide-muted-200 lg:dark:divide-muted-700 min-w-full lg:divide-y">
          <thead class="hidden lg:table-header-group">
            <tr>
              <td width="50%" class="text-muted-400 whitespace-normal px-6 py-4 text-sm font-medium">
                Invoice
              </td>

              <td class="text-muted-400 whitespace-normal px-6 py-4 text-sm font-medium">
                Date
              </td>

              <td class="text-muted-400 whitespace-normal px-6 py-4 text-sm font-medium">
                Amount
              </td>

              <td class="text-muted-400 whitespace-normal px-6 py-4 text-sm font-medium">
                Status
              </td>
            </tr>
          </thead>

          <tbody class="divide-muted-200 dark:divide-muted-700 divide-y">
            <tr v-for="transaction in transactions" :key="transaction.name">
              <td width="50%" class="text-muted-900 whitespace-nowrap px-6 py-4 text-sm font-bold">
                <BaseText
                  size="sm"
                  weight="semibold"
                  class="text-muted-900 dark:text-muted-100"
                >
                  {{ transaction.name }}
                </BaseText>
                <div class="mt-1 lg:hidden">
                  <BaseText size="sm" class="text-muted-500 dark:text-muted-400">
                    {{ transaction.date }}
                  </BaseText>
                </div>
              </td>

              <td class="text-muted-900 hidden whitespace-nowrap px-6 py-4 text-sm font-medium lg:table-cell">
                <BaseText size="sm" class="text-muted-500 dark:text-muted-400">
                  {{ transaction.date }}
                </BaseText>
              </td>

              <td class="text-muted-900 whitespace-nowrap px-6 py-4 text-end font-bold lg:text-start">
                <BaseText
                  size="sm"
                  weight="semibold"
                  class="text-muted-900 dark:text-muted-100"
                >
                  ${{ transaction.amount.toFixed(2) }}
                </BaseText>
                <div class="mt-1 flex items-center justify-end gap-1.5 font-medium lg:hidden">
                  <div
                    class="size-2 rounded-full"
                    :class="[
                      transaction.status === 'Complete' && 'bg-success-500',
                      transaction.status === 'Pending' && 'bg-warning-500',
                      transaction.status === 'Canceled' && 'bg-destructive-500',
                    ]"
                  />
                  <BaseText size="sm" class="text-muted-500 dark:text-muted-400">
                    {{ transaction.status }}
                  </BaseText>
                </div>
              </td>

              <td class="text-muted-900 hidden whitespace-nowrap px-6 py-4 text-sm font-medium lg:table-cell">
                <div class="inline-flex items-center gap-1.5">
                  <div
                    class="size-2 rounded-full"
                    :class="[
                      transaction.status === 'Complete' && 'bg-success-500',
                      transaction.status === 'Pending' && 'bg-warning-500',
                      transaction.status === 'Canceled' && 'bg-destructive-500',
                    ]"
                  />
                  <BaseText size="sm" class="text-muted-500 dark:text-muted-400">
                    {{ transaction.status }}
                  </BaseText>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </BaseCard>
    </div>
  </div>
</template>
