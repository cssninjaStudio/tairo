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

const activeFilterTab = ref('filter-1')
const cardTypes = ref<string[]>([])
const cardholders = ref<string[]>([])
const status = ref<string[]>([])
const spentStart = ref<number>()
const spentEnd = ref<number>()
const timeCategory = ref('all')
const timeCategoryFrom = ref('')
const timeCategoryTo = ref('')
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
              <Icon name="solar:card-linear" class="size-5" />
              <span>Card type</span>
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
              <Icon name="solar:user-rounded-linear" class="size-5" />
              <span>Cardholder</span>
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
              <Icon name="solar:wad-of-money-linear" class="size-5" />
              <span>Spendings</span>
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
              <Icon name="solar:calendar-linear" class="size-5" />
              <span>Creation date</span>
              <Icon name="lucide:chevron-right" class="ms-auto size-4" />
            </button>
          </div>

          <!-- Filters -->
          <div class="col-span-8 min-h-[350px] p-6">
            <!-- Filter 1 -->
            <div v-if="activeFilterTab === 'filter-1'">
              <div class="flex flex-col">
                <div class="px-3">
                  <div class="relative flex items-center justify-between">
                    <p class="text-muted-400 font-sans text-sm">
                      Filter card types
                    </p>
                    <button
                      type="button"
                      class="text-medium text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                      @click="
                        cardTypes = ['Physical', 'Physical debit', 'Virtual']
                      "
                    >
                      Select All
                    </button>
                  </div>
                  <hr
                    class="border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t"
                  >
                  <BaseCheckboxGroup v-model="cardTypes" class="flex flex-col gap-4">
                    <!-- types -->
                    <BaseCheckbox
                      label="Physical"
                      value="Physical"
                    />
                    <BaseCheckbox
                      label="Physical debit"
                      value="Physical debit"
                    />
                    <BaseCheckbox
                      label="Virtual"
                      value="Virtual"
                    />
                  </BaseCheckboxGroup>
                </div>
              </div>
            </div>
            <!-- Filter 2 -->
            <div v-else-if="activeFilterTab === 'filter-2'">
              <div class="flex flex-col">
                <div class="px-3">
                  <div class="relative flex items-center justify-between">
                    <p class="text-muted-400 font-sans text-sm">
                      Filter cardholders
                    </p>
                    <button
                      type="button"
                      class="text-medium text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                      @click="
                        cardholders = [
                          'Kendra Wilson (You)',
                          'Kaleb Wilson',
                          'Amber Wilson',
                          'Jennifer Wilson',
                          'John Baxter',
                        ]
                      "
                    >
                      Select All
                    </button>
                  </div>
                  <hr
                    class="border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t"
                  >

                  <BaseCheckboxGroup v-model="cardholders" class="flex flex-col gap-4">
                    <!-- Cardholders -->
                    <BaseCheckbox
                      label="Kendra Wilson (You)"
                      value="Kendra Wilson (You)"
                    />
                    <BaseCheckbox
                      label="Kaleb Wilson"
                      value="Kaleb Wilson"
                    />
                    <BaseCheckbox
                      label="Amber Wilson"
                      value="Amber Wilson"
                    />
                    <BaseCheckbox
                      label="Jennifer Wilson"
                      value="Jennifer Wilson"
                    />
                    <BaseCheckbox
                      label="John Baxter"
                      value="John Baxter"
                    />
                  </BaseCheckboxGroup>
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
                      @click="status = ['active', 'disabled', 'locked']"
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
                      label="Active"
                      value="active"
                    />
                    <BaseCheckbox
                      label="Disabled"
                      value="disabled"
                    />
                    <BaseCheckbox
                      label="Locked"
                      value="locked"
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
                      Spent this month
                    </p>
                  </div>
                  <hr
                    class="border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t"
                  >

                  <div class="space-y-4">
                    <!-- Account -->
                    <BaseField v-slot="{ inputAttrs, inputRef }" label="At least">
                      <BaseInputNumber
                        :ref="inputRef"
                        v-model="spentStart"
                        v-bind="inputAttrs"
                        placeholder=""
                        :min="0"
                      />
                    </BaseField>
                    <BaseField v-slot="{ inputAttrs, inputRef }" label="No more than...">
                      <BaseInputNumber
                        :ref="inputRef"
                        v-model="spentEnd"
                        v-bind="inputAttrs"
                        placeholder=""
                        :min="0"
                      />
                    </BaseField>
                  </div>
                </div>
              </div>
            </div>
            <!-- Filter 5 -->
            <div v-else-if="activeFilterTab === 'filter-5'">
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
          </div>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  </div>
</template>
