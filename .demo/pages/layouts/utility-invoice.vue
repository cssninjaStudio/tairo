<script setup lang="ts">
definePageMeta({
  title: 'Invoice',
})

const data = ref([
  {
    name: 'Website Redesign',
    unit: 'hrs',
    quantity: 54,
    rate: 24,
  },
  {
    name: 'Logo Design',
    unit: 'hrs',
    quantity: 12,
    rate: 24,
  },
  {
    name: 'Custom Illustrations',
    unit: 'hrs',
    quantity: 7,
    rate: 32,
  },
])

const vatRate = 0.1
const totalData = computed(() => {
  const subtotal = data.value.reduce((acc, item) => {
    return acc + item.quantity * item.rate
  }, 0)
  const vatValue = subtotal * vatRate
  const total = subtotal + vatValue

  return [
    {
      label: 'Subtotal',
      value: subtotal,
    },
    {
      label: 'Taxes',
      value: vatValue,
    },
    {
      label: 'Total',
      value: total,
    },
  ]
})
</script>

<template>
  <div class="max-w-3xl mx-auto py-10">
    <div class="flex items-center justify-between mb-4">
      <div>
        <BaseHeading as="h2" size="xl" weight="medium" lead="none">
          Order #ox-81469
        </BaseHeading>
      </div>
      <div class="flex items-center justify-end gap-3">
        <BaseButtonIcon condensed shape="full" tooltip="Edit invoice">
          <Icon name="ph:pencil-duotone" class="w-4 h-4" />
        </BaseButtonIcon>
        <BaseButtonIcon condensed shape="full" tooltip="Send by email">
          <Icon name="ph:envelope-duotone" class="w-4 h-4" />
        </BaseButtonIcon>
        <BaseButtonIcon condensed shape="full" tooltip="Print invoice">
          <Icon name="ph:printer-duotone" class="w-4 h-4" />
        </BaseButtonIcon>
        <BaseButtonIcon condensed shape="full" tooltip="Download as PDF">
          <Icon name="ph:download-duotone" class="w-4 h-4" />
        </BaseButtonIcon>
      </div>
    </div>
    <div>
      <BaseCard>
        <div class="font-sans overflow-hidden">
          <div>
            <div
              class="flex flex-col gap-y-8 sm:flex-row sm:items-center justify-between p-8 border-b border-muted-200 dark:border-muted-700"
            >
              <div class="flex items-center gap-3">
                <BaseAvatar
                  src="/img/avatars/24.svg"
                  badge-src="/img/stacks/reactjs.svg"
                  size="lg"
                />
                <div class="">
                  <BaseHeading as="h3" size="md" weight="medium" lead="none">
                    Betty Lopez
                  </BaseHeading>
                  <BaseParagraph size="sm" class="text-muted-400">
                    bettylopez@tairo.io
                  </BaseParagraph>
                </div>
              </div>
              <div class="flex gap-12">
                <div
                  class="text-sm font-light text-muted-500 dark:text-muted-400"
                >
                  <p
                    class="text-xs font-normal text-muted-700 dark:text-muted-100"
                  >
                    Invoice Number
                  </p>
                  <p>INV-48654</p>

                  <p
                    class="mt-2 text-xs font-normal text-muted-700 dark:text-muted-100"
                  >
                    Date of Issue
                  </p>
                  <p>03.19.2023</p>
                </div>
                <div
                  class="text-sm font-light text-muted-500 dark:text-muted-400"
                >
                  <p
                    class="text-xs font-normal text-muted-700 dark:text-muted-100"
                  >
                    Terms
                  </p>
                  <p>30 Days</p>

                  <p
                    class="mt-2 text-xs font-normal text-muted-700 dark:text-muted-100"
                  >
                    Due
                  </p>
                  <p>04.19.2023</p>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col gap-y-8 sm:flex-row sm:items-center justify-between p-8 border-b border-muted-200 dark:border-muted-700"
            >
              <div class="flex items-center gap-4">
                <TairoLogo class="w-12 h-12 text-primary-500" />
                <div class="">
                  <BaseHeading as="h3" size="md" weight="medium" lead="none">
                    Tairo
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    Software company
                  </BaseParagraph>
                </div>
              </div>
              <div class="flex gap-12">
                <div
                  class="text-sm font-light text-muted-500 dark:text-muted-400"
                >
                  <p
                    class="text-sm font-normal text-muted-700 dark:text-muted-100"
                  >
                    Address
                  </p>
                  <p class="text-xs">43 Church street</p>
                  <p class="text-xs">San Jose de la Herida</p>
                  <p class="text-xs">CA 91853</p>
                </div>
              </div>
            </div>
            <div class="py-8 px-6 sm:p-8">
              <div class="flex flex-col">
                <table
                  class="min-w-full divide-y divide-muted-200 dark:divide-muted-700"
                >
                  <thead class="font-sans">
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 pl-4 pr-3 text-left text-xs font-medium uppercase text-muted-400 sm:pl-6 md:pl-0"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        class="hidden py-3.5 px-3 text-right text-xs font-medium uppercase text-muted-400 sm:table-cell"
                      >
                        Unit
                      </th>
                      <th
                        scope="col"
                        class="hidden py-3.5 px-3 text-right text-xs font-medium uppercase text-muted-400 sm:table-cell"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        class="hidden py-3.5 px-3 text-right text-xs font-medium uppercase text-muted-400 sm:table-cell"
                      >
                        Rate
                      </th>
                      <th
                        scope="col"
                        class="py-3.5 pl-3 pr-4 text-right text-xs font-medium uppercase text-muted-400 sm:pr-6 md:pr-0"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody class="font-sans">
                    <tr
                      v-for="item in data"
                      :key="item.name"
                      class="border-b border-muted-200 dark:border-muted-700"
                    >
                      <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                        <div
                          class="font-medium text-muted-800 dark:text-muted-100"
                        >
                          {{ item.name }}
                        </div>
                        <div class="mt-0.5 text-xs text-muted-400">
                          {{ item.quantity }} units at ${{ item.rate }}
                        </div>
                      </td>
                      <td
                        class="hidden px-3 py-4 text-sm text-right text-muted-500 dark:text-muted-400 sm:table-cell"
                      >
                        hours
                      </td>
                      <td
                        class="hidden px-3 py-4 text-sm text-right sm:table-cell"
                      >
                        <div class="flex justify-end">
                          <BaseInput
                            v-model.number="item.quantity"
                            type="number"
                            :classes="{
                              wrapper: 'w-16',
                            }"
                          />
                        </div>
                      </td>
                      <td
                        class="hidden px-3 py-4 text-sm text-right text-muted-400 sm:table-cell"
                      >
                        ${{ item.rate }}
                      </td>
                      <td
                        class="py-4 pl-3 pr-4 text-sm text-right text-muted-800 dark:text-muted-100 sm:pr-6 md:pr-0"
                      >
                        ${{ (item.rate * item.quantity).toFixed(2) }}
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr v-for="item in totalData" :key="item.label">
                      <th
                        scope="row"
                        colspan="4"
                        class="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-muted-400 sm:table-cell md:pl-0"
                      >
                        {{ item.label }}
                      </th>
                      <th
                        scope="row"
                        class="pt-6 pl-4 pr-3 text-sm font-light text-left text-muted-500 sm:hidden"
                      >
                        {{ item.label }}
                      </th>
                      <td
                        class="pt-6 pl-3 pr-4 text-right sm:pr-6 md:pr-0"
                        :class="
                          item.label === 'Total'
                            ? 'font-semibold text-lg text-muted-800 dark:text-muted-100'
                            : 'text-sm text-muted-500 dark:text-muted-200/70'
                        "
                      >
                        ${{ item.value.toFixed(2) }}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <div class="mt-8 p-8">
              <div class="border-t pt-8 border-muted-200 dark:border-muted-700">
                <div class="text-muted-400">
                  <BaseParagraph size="xs">
                    Payment terms are 14 days. Please be aware that according to
                    the Late Payment of company Debts Acts, freelancers are
                    entitled to claim a 00.00 late fee upon non-payment of debts
                    after this time, at which point a new invoice will be
                    submitted with the addition of this fee. If payment of the
                    revised invoice is not received within a further 14 days,
                    additional interest will be charged to the overdue account
                    and a statutory rate of 8% plus Bank base of 0.5%, totalling
                    8.5%. Parties cannot contract out of the Act’s provisions.
                  </BaseParagraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
