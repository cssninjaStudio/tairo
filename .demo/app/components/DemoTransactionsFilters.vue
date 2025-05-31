<script setup lang="ts">
const months = [
  {
    id: 'january',
    label: 'Jan',
  },
  {
    id: 'february',
    label: 'Feb',
  },
  {
    id: 'march',
    label: 'Mar',
  },
  {
    id: 'april',
    label: 'Apr',
  },
  {
    id: 'may',
    label: 'May',
  },
  {
    id: 'june',
    label: 'Jun',
  },
  {
    id: 'july',
    label: 'Jul',
  },
  {
    id: 'august',
    label: 'Aug',
  },
  {
    id: 'september',
    label: 'Sep',
  },
  {
    id: 'october',
    label: 'Oct',
  },
  {
    id: 'november',
    label: 'Nov',
  },
  {
    id: 'december',
    label: 'Dec',
  },
]

const defaultKeywords = [
  'Wallmart',
  'Credit Card',
  'Harry\'s LLC',
  'Expenses',
  'Income',
  'Groceries',
  'Toys',
  'Restaurant',
]

const activeFilterTab = ref('filter-1')
const timeCategory = ref('all')
const timeCategoryFrom = ref('')
const timeCategoryTo = ref('')
const keywords = ref('')
const selectedKeyWords = ref<string[]>([])
const status = ref<string[]>([])
const accounts = ref<string[]>([])
const paymentMethods = ref<string[]>([])
</script>

<template>
  <div class="group relative hidden md:block">
    <DropdownMenuRoot>
      <DropdownMenuTrigger as-child>
        <BaseButton
          rounded="md"
          size="sm"
        >
          <Icon name="solar:filter-linear" class="size-4" />
          <span>Add Filter</span>
        </BaseButton>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent
          align="start"
          side="bottom"
          :side-offset="5"
          class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 shadow-muted-400/20 dark:shadow-muted-800/20 grid w-[660px] grid-cols-12 overflow-hidden rounded-lg border bg-white shadow-xl origin-top-left starting:scale-95 starting:opacity-0 transition-all duration-100"
        >
          <div class="bg-muted-50 dark:bg-muted-900 col-span-4 space-y-2 p-6">
            <!-- Menu item -->
            <button
              type="button"
              data-tab="tab-1"
              class="tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300"
              :class="
                activeFilterTab === 'filter-1'
                  ? 'text-primary-500 border-primary-500 bg-primary-500/10'
                  : 'text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800'
              "
              @click="activeFilterTab = 'filter-1'"
            >
              <Icon name="solar:calendar-linear" class="size-5" />
              <span>Creation date</span>
              <Icon name="lucide:chevron-right" class="ms-auto size-4" />
            </button>
            <!-- Menu item -->
            <button
              type="button"
              data-tab="tab-2"
              class="tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300"
              :class="
                activeFilterTab === 'filter-2'
                  ? 'text-primary-500 border-primary-500 bg-primary-500/10'
                  : 'text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800'
              "
              @click="activeFilterTab = 'filter-2'"
            >
              <Icon name="solar:minimalistic-magnifer-linear" class="size-5" />
              <span>Keywords</span>
              <Icon name="lucide:chevron-right" class="ms-auto size-4" />
            </button>
            <!-- Menu item -->
            <button
              type="button"
              data-tab="tab-3"
              class="tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300"
              :class="
                activeFilterTab === 'filter-3'
                  ? 'text-primary-500 border-primary-500 bg-primary-500/10'
                  : 'text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800'
              "
              @click="activeFilterTab = 'filter-3'"
            >
              <Icon name="solar:sticker-smile-square-linear" class="size-5" />
              <span>Status</span>
              <Icon name="lucide:chevron-right" class="ms-auto size-4" />
            </button>
            <!-- Menu item -->
            <button
              type="button"
              data-tab="tab-4"
              class="tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300"
              :class="
                activeFilterTab === 'filter-4'
                  ? 'text-primary-500 border-primary-500 bg-primary-500/10'
                  : 'text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800'
              "
              @click="activeFilterTab = 'filter-4'"
            >
              <Icon name="solar:widget-2-linear" class="size-5" />
              <span>Accounts</span>
              <Icon name="lucide:chevron-right" class="ms-auto size-4" />
            </button>
            <!-- Menu item -->
            <button
              type="button"
              data-tab="tab-5"
              class="tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300"
              :class="
                activeFilterTab === 'filter-5'
                  ? 'text-primary-500 border-primary-500 bg-primary-500/10'
                  : 'text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800'
              "
              @click="activeFilterTab = 'filter-5'"
            >
              <Icon name="solar:card-linear" class="size-5" />
              <span>Payment</span>
              <Icon name="lucide:chevron-right" class="ms-auto size-4" />
            </button>
          </div>

          <!-- Filters -->
          <div class="col-span-8 min-h-[350px] p-6">
            <!-- Filter 1 -->
            <div v-if="activeFilterTab === 'filter-1'">
              <div class="flex flex-col">
                <div class="px-3">
                  <div class="relative">
                    <BaseSelect
                      v-model="timeCategory"
                      label="Show transactions made within"
                      class="border-muted-300 text-muted-600 focus:border-muted-300 dark:bg-muted-900 dark:text-muted-200 dark:border-muted-800 dark:focus:border-muted-800 tw-accessibility h-10 w-full appearance-none rounded-sm border bg-white px-3 py-2 font-sans text-sm leading-5 transition-all duration-300 placeholder:text-gray-300 focus:shadow-lg dark:placeholder:text-gray-600"
                    >
                      <BaseSelectItem value="all">
                        All time
                      </BaseSelectItem>
                      <BaseSelectItem value="30_days">
                        Last 30 days
                      </BaseSelectItem>
                      <BaseSelectItem value="this_month">
                        This month
                      </BaseSelectItem>
                      <BaseSelectItem value="last_month">
                        Last month
                      </BaseSelectItem>
                      <BaseSelectItem value="this_year">
                        This year
                      </BaseSelectItem>
                      <BaseSelectItem value="last_year">
                        Last year
                      </BaseSelectItem>
                    </BaseSelect>
                  </div>
                  <hr
                    class="border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t"
                  >
                  <BaseText
                    size="xs"
                    class="text-muted-400 mb-4"
                  >
                    Or choose a date range
                  </BaseText>
                  <div class="grid grid-cols-2 gap-8">
                    <!-- Calendar group -->
                    <div>
                      <!-- Calendar -->
                      <div class="flex flex-col">
                        <div
                          class="mb-2 flex items-center justify-between px-3"
                        >
                          <button
                            type="button"
                            class="text-muted-400 flex w-6 cursor-pointer items-center justify-center"
                          >
                            <Icon name="lucide:arrow-left" class="size-4" />
                          </button>
                          <span
                            class="font-heading text-muted-700 dark:text-muted-100 text-sm"
                          >
                            2023
                          </span>
                          <button
                            type="button"
                            class="text-muted-400 flex w-6 cursor-pointer items-center justify-center"
                          >
                            <Icon name="lucide:arrow-right" class="size-4" />
                          </button>
                        </div>
                        <RadioGroupRoot v-model="timeCategoryFrom" class="grid grid-cols-3 gap-1">
                          <RadioGroupItem
                            v-for="month in months"
                            :key="month.id"
                            :value="month.id"
                            class="flex items-center justify-center"
                          >
                            <RadioGroupIndicator
                              force-mount
                              class="text-muted-500 dark:text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 data-[state=checked]:text-primary-500 data-[state=checked]:bg-primary-500/10 hover:bg-muted-100 dark:hover:bg-muted-800 flex size-8 items-center justify-center rounded-full font-sans text-xs transition-colors duration-200 cursor-pointer"
                            >
                              {{ month.label }}
                            </RadioGroupIndicator>
                          </RadioGroupItem>
                        </RadioGroupRoot>
                      </div>
                    </div>
                    <!-- Calendar group -->
                    <div>
                      <!-- Calendar -->
                      <div class="flex flex-col">
                        <div
                          class="mb-2 flex items-center justify-between px-3"
                        >
                          <button
                            type="button"
                            class="text-muted-400 flex w-6 cursor-pointer items-center justify-center"
                          >
                            <Icon name="lucide:arrow-left" class="size-4" />
                          </button>
                          <span
                            class="font-heading text-muted-700 dark:text-muted-100 text-sm"
                          >
                            2023
                          </span>
                          <button
                            type="button"
                            class="text-muted-400 flex w-6 cursor-pointer items-center justify-center"
                          >
                            <Icon name="lucide:arrow-right" class="size-4" />
                          </button>
                        </div>
                        <RadioGroupRoot v-model="timeCategoryTo" class="grid grid-cols-3 gap-1">
                          <RadioGroupItem
                            v-for="month in months"
                            :key="month.id"
                            :value="month.id"
                            class="flex items-center justify-center"
                          >
                            <RadioGroupIndicator
                              force-mount
                              class="text-muted-500 dark:text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 data-[state=checked]:text-primary-500 data-[state=checked]:bg-primary-500/10 hover:bg-muted-100 dark:hover:bg-muted-800 flex size-8 items-center justify-center rounded-full font-sans text-xs transition-colors duration-200 cursor-pointer"
                            >
                              {{ month.label }}
                            </RadioGroupIndicator>
                          </RadioGroupItem>
                        </RadioGroupRoot>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Filter 2 -->
            <div v-else-if="activeFilterTab === 'filter-2'">
              <div class="flex flex-col">
                <div class="px-3">
                  <BaseField label="Search for specific keywords">
                    <TairoInput
                      v-model="keywords"
                      placeholder="Your keywords..."
                      rounded="md"
                      icon="lucide:search"
                      class="outline-none ring-0! border-s-0"
                    />
                  </BaseField>
                  <hr
                    class="border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t"
                  >

                  <!-- Grid -->
                  <CheckboxGroupRoot v-model="selectedKeyWords" class="flex flex-wrap items-center gap-2">
                    <CheckboxRoot
                      v-for="keyword in defaultKeywords"
                      :key="keyword"
                      :value="keyword"
                      class="flex items-center justify-center"
                    >
                      <CheckboxIndicator
                        force-mount
                        class="group"
                      >
                        <button
                          type="button"
                          class="text-muted-500 dark:text-muted-200 dark:bg-muted-900 border-muted-200 dark:border-muted-800 group-data-[state=checked]:bg-primary-500/10 group-data-[state=checked]:border-primary-500 group-data-[state=checked]:text-primary-500 inline-flex items-center justify-center rounded-full border-2 bg-white px-4 py-1.5 font-sans text-xs transition-colors duration-300"
                        >
                          {{ keyword }}
                        </button>
                      </CheckboxIndicator>
                    </CheckboxRoot>
                  </CheckboxGroupRoot>
                </div>
              </div>
            </div>
            <!-- Filter 3 -->
            <div v-else-if="activeFilterTab === 'filter-3'">
              <div class="flex flex-col">
                <div class="px-3">
                  <div class="relative flex items-center justify-between">
                    <p class="text-muted-400 font-sans text-sm">
                      Select status to filter
                    </p>
                    <button
                      type="button"
                      class="text-medium text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                      @click="
                        status = [
                          'Processing',
                          'In Progress',
                          'Complete',
                          'Cancelled',
                        ]
                      "
                    >
                      Select All
                    </button>
                  </div>
                  <hr
                    class="border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t"
                  >

                  <BaseCheckboxGroup v-model="status" class="flex flex-col gap-4">
                    <!-- Status -->
                    <BaseCheckbox
                      label="Processing"
                      value="Processing"
                    />
                    <BaseCheckbox
                      label="In Progress"
                      value="In Progress"
                    />
                    <BaseCheckbox
                      label="Complete"
                      value="Complete"
                    />
                    <BaseCheckbox
                      label="Cancelled"
                      value="Cancelled"
                    />
                  </BaseCheckboxGroup>
                </div>
              </div>
            </div>
            <!-- Filter 4 -->
            <div v-else-if="activeFilterTab === 'filter-4'">
              <div class="flex flex-col">
                <div class="px-3">
                  <div class="relative flex items-center justify-between">
                    <p class="text-muted-400 font-sans text-sm">
                      Select accounts to filter
                    </p>
                    <button
                      type="button"
                      class="text-medium text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                      @click="accounts = ['45656494', '83464209']"
                    >
                      Select All
                    </button>
                  </div>
                  <hr
                    class="border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t"
                  >

                  <BaseCheckboxGroup v-model="accounts" class="flex flex-col gap-4">
                    <!-- Account -->
                    <BaseCheckbox
                      label="Account **** 4565 6494"
                      value="45656494"
                    />
                    <BaseCheckbox
                      label="Account **** 8346 4209"
                      value="83464209"
                    />
                  </BaseCheckboxGroup>
                </div>
              </div>
            </div>
            <!-- Filter 5 -->
            <div v-else-if="activeFilterTab === 'filter-5'">
              <div class="flex flex-col">
                <div class="px-3">
                  <div class="relative flex items-center justify-between">
                    <p class="text-muted-400 font-sans text-sm">
                      Filter payment methods
                    </p>
                    <button
                      type="button"
                      class="text-medium text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                      @click="
                        paymentMethods = ['credit-card', 'transfer', 'cheque']
                      "
                    >
                      Select All
                    </button>
                  </div>
                  <hr
                    class="border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t"
                  >

                  <BaseCheckboxGroup v-model="paymentMethods" class="flex flex-col gap-4">
                    <!-- Payment method -->
                    <BaseCheckbox
                      label="Credit Card"
                      value="credit-card"
                    />
                    <BaseCheckbox
                      label="Transfer"
                      value="transfer"
                    />
                    <BaseCheckbox
                      label="Cheque"
                      value="cheque"
                    />
                  </BaseCheckboxGroup>
                </div>
              </div>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  </div>
</template>
