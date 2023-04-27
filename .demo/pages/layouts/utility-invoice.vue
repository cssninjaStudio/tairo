<script setup lang="ts">
definePageMeta({
  title: 'Invoice',
  preview: {
    title: 'Invoice',
    description: 'For accounting and invoices',
    categories: ['layouts'],
    src: '/img/screens/layouts-utility-invoice.png',
    srcDark: '/img/screens/layouts-utility-invoice-dark.png',
    order: 90,
  },
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
  <div class="mx-auto max-w-3xl py-10">
    <div class="mb-4 flex items-center justify-between">
      <div>
        <BaseHeading as="h2" size="xl" weight="medium" lead="none">
          Order #ox-81469
        </BaseHeading>
      </div>
      <div class="flex items-center justify-end gap-3">
        <BaseButtonIcon condensed shape="full" data-tooltip="Edit invoice">
          <Icon name="ph:pencil-duotone" class="h-4 w-4" />
        </BaseButtonIcon>
        <BaseButtonIcon condensed shape="full" data-tooltip="Send by email">
          <Icon name="ph:envelope-duotone" class="h-4 w-4" />
        </BaseButtonIcon>
        <BaseButtonIcon condensed shape="full" data-tooltip="Print invoice">
          <Icon name="ph:printer-duotone" class="h-4 w-4" />
        </BaseButtonIcon>
        <BaseButtonIcon condensed shape="full" data-tooltip="Download as PDF">
          <Icon name="ph:download-duotone" class="h-4 w-4" />
        </BaseButtonIcon>
      </div>
    </div>
    <div>
      <BaseCard>
        <div class="overflow-hidden font-sans">
          <div>
            <div
              class="border-muted-200 dark:border-muted-700 flex flex-col justify-between gap-y-8 border-b p-8 sm:flex-row sm:items-center"
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
                  class="text-muted-500 dark:text-muted-400 text-sm font-light"
                >
                  <p
                    class="text-muted-700 dark:text-muted-100 text-xs font-normal"
                  >
                    Invoice Number
                  </p>
                  <p>INV-48654</p>

                  <p
                    class="text-muted-700 dark:text-muted-100 mt-2 text-xs font-normal"
                  >
                    Date of Issue
                  </p>
                  <p>03.19.2023</p>
                </div>
                <div
                  class="text-muted-500 dark:text-muted-400 text-sm font-light"
                >
                  <p
                    class="text-muted-700 dark:text-muted-100 text-xs font-normal"
                  >
                    Terms
                  </p>
                  <p>30 Days</p>

                  <p
                    class="text-muted-700 dark:text-muted-100 mt-2 text-xs font-normal"
                  >
                    Due
                  </p>
                  <p>04.19.2023</p>
                </div>
              </div>
            </div>
            <div
              class="border-muted-200 dark:border-muted-700 flex flex-col justify-between gap-y-8 border-b p-8 sm:flex-row sm:items-center"
            >
              <div class="flex items-center gap-4">
                <TairoLogo class="text-primary-500 h-12 w-12" />
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
                  class="text-muted-500 dark:text-muted-400 text-sm font-light"
                >
                  <p
                    class="text-muted-700 dark:text-muted-100 text-sm font-normal"
                  >
                    Address
                  </p>
                  <p class="text-xs">43 Church street</p>
                  <p class="text-xs">San Jose de la Herida</p>
                  <p class="text-xs">CA 91853</p>
                </div>
              </div>
            </div>
            <div class="px-6 py-8 sm:p-8">
              <div class="flex flex-col">
                <table
                  class="divide-muted-200 dark:divide-muted-700 min-w-full divide-y"
                >
                  <thead class="font-sans">
                    <tr>
                      <th
                        scope="col"
                        class="text-muted-400 py-3.5 pe-3 ps-4 text-left text-xs font-medium uppercase sm:ps-6 md:ps-0"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        class="text-muted-400 hidden px-3 py-3.5 text-right text-xs font-medium uppercase sm:table-cell"
                      >
                        Unit
                      </th>
                      <th
                        scope="col"
                        class="text-muted-400 hidden px-3 py-3.5 text-right text-xs font-medium uppercase sm:table-cell"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        class="text-muted-400 hidden px-3 py-3.5 text-right text-xs font-medium uppercase sm:table-cell"
                      >
                        Rate
                      </th>
                      <th
                        scope="col"
                        class="text-muted-400 py-3.5 pe-4 ps-3 text-right text-xs font-medium uppercase sm:pe-6 md:pe-0"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody class="font-sans">
                    <tr
                      v-for="item in data"
                      :key="item.name"
                      class="border-muted-200 dark:border-muted-700 border-b"
                    >
                      <td class="py-4 pe-3 ps-4 text-sm sm:ps-6 md:ps-0">
                        <div
                          class="text-muted-800 dark:text-muted-100 font-medium"
                        >
                          {{ item.name }}
                        </div>
                        <div class="text-muted-400 mt-0.5 text-xs">
                          {{ item.quantity }} units at ${{ item.rate }}
                        </div>
                      </td>
                      <td
                        class="text-muted-500 dark:text-muted-400 hidden px-3 py-4 text-right text-sm sm:table-cell"
                      >
                        hours
                      </td>
                      <td
                        class="hidden px-3 py-4 text-right text-sm sm:table-cell"
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
                        class="text-muted-400 hidden px-3 py-4 text-right text-sm sm:table-cell"
                      >
                        ${{ item.rate }}
                      </td>
                      <td
                        class="text-muted-800 dark:text-muted-100 py-4 pe-4 ps-3 text-right text-sm sm:pe-6 md:pe-0"
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
                        class="text-muted-400 hidden pe-3 ps-6 pt-6 text-right text-sm font-light sm:table-cell md:ps-0"
                      >
                        {{ item.label }}
                      </th>
                      <th
                        scope="row"
                        class="text-muted-500 pe-3 ps-4 pt-6 text-left text-sm font-light sm:hidden"
                      >
                        {{ item.label }}
                      </th>
                      <td
                        class="pe-4 ps-3 pt-6 text-right sm:pe-6 md:pe-0"
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
              <div class="border-muted-200 dark:border-muted-700 border-t pt-8">
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
