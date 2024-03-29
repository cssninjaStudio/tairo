<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

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
const cardTypes = ref([''])
const cardholders = ref([''])
const status = ref([''])
const accounts = ref([''])
const spentStart = ref<number>()
const spentEnd = ref<number>()
const timeCategory = ref('all')
const timeCategoryFrom = ref('')
const timeCategoryTo = ref('')
</script>

<template>
  <div class="group relative hidden md:block">
    <Menu
      as="div"
      class=""
    >
      <MenuButton as="template">
        <BaseButton
          rounded="md"
          color="default"
          size="sm"
        >
          <Icon name="lucide:filter" class="size-4" />
          <span>Add Filter</span>
        </BaseButton>
      </MenuButton>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 shadow-muted-400/20 dark:shadow-muted-800/20 absolute start-0 top-11 grid w-[660px] grid-cols-12 overflow-hidden rounded-lg border bg-white shadow-xl"
        >
          <div class="bg-muted-50 dark:bg-muted-900 col-span-4 space-y-2 p-6">
            <!--Menu item-->
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
              <Icon name="lucide:credit-card" class="size-4" />
              <span>Card type</span>
              <Icon name="lucide:chevron-right" class="ms-auto size-4" />
            </button>
            <!--Menu item-->
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
              <Icon name="lucide:user" class="size-4" />
              <span>Cardholder</span>
              <Icon name="lucide:chevron-right" class="ms-auto size-4" />
            </button>
            <!--Menu item-->
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
              <Icon name="lucide:loader" class="size-4" />
              <span>Status</span>
              <Icon name="lucide:chevron-right" class="ms-auto size-4" />
            </button>
            <!--Menu item-->
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
              <Icon name="lucide:banknote" class="size-4" />
              <span>Spendings</span>
              <Icon name="lucide:chevron-right" class="ms-auto size-4" />
            </button>
            <!--Menu item-->
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
              <Icon name="lucide:calendar" class="size-4" />
              <span>Creation date</span>
              <Icon name="lucide:chevron-right" class="ms-auto size-4" />
            </button>
          </div>

          <!--Filters-->
          <div class="col-span-8 min-h-[350px] p-6">
            <!--Filter 1-->
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
                        status = ['Physical', 'Physical debit', 'Virtual']
                      "
                    >
                      Select All
                    </button>
                  </div>
                  <hr
                    class="border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t"
                  >
                  <div class="space-y-4">
                    <!--types-->
                    <div>
                      <BaseCheckbox
                        v-model="cardTypes"
                        color="primary"
                        label="Physical"
                        value="Physical"
                      />
                    </div>
                    <div>
                      <BaseCheckbox
                        v-model="cardTypes"
                        color="primary"
                        label="Physical debit"
                        value="Physical debit"
                      />
                    </div>
                    <div>
                      <BaseCheckbox
                        v-model="cardTypes"
                        color="primary"
                        label="Virtual"
                        value="Virtual"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Filter 2-->
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
                        status = [
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

                  <div class="space-y-4">
                    <!--Cardholders-->
                    <div>
                      <BaseCheckbox
                        v-model="cardholders"
                        color="primary"
                        label="Kendra Wilson (You)"
                        value="Kendra Wilson (You)"
                      />
                    </div>
                    <div>
                      <BaseCheckbox
                        v-model="cardholders"
                        color="primary"
                        label="Kaleb Wilson"
                        value="Kaleb Wilson"
                      />
                    </div>
                    <div>
                      <BaseCheckbox
                        v-model="cardholders"
                        color="primary"
                        label="Amber Wilson"
                        value="Amber Wilson"
                      />
                    </div>
                    <div>
                      <BaseCheckbox
                        v-model="cardholders"
                        color="primary"
                        label="Jennifer Wilson"
                        value="Jennifer Wilson"
                      />
                    </div>
                    <div>
                      <BaseCheckbox
                        v-model="cardholders"
                        color="primary"
                        label="John Baxter"
                        value="John Baxter"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Filter 3-->
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

                  <div class="space-y-4">
                    <!--Status-->
                    <div>
                      <BaseCheckbox
                        v-model="status"
                        color="primary"
                        label="Active"
                        value="active"
                      />
                    </div>
                    <div>
                      <BaseCheckbox
                        v-model="status"
                        color="primary"
                        label="Disabled"
                        value="disabled"
                      />
                    </div>
                    <div>
                      <BaseCheckbox
                        v-model="status"
                        color="primary"
                        label="Locked"
                        value="locked"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Filter 4-->
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
                    <!--Account-->
                    <div>
                      <BaseInput
                        v-model="spentStart"
                        type="number"
                        icon="lucide:chevron-right"
                        label="At least"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <BaseInput
                        v-model="spentEnd"
                        type="number"
                        icon="lucide:chevron-left"
                        label="No more than..."
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Filter 5-->
            <div v-else-if="activeFilterTab === 'filter-5'">
              <div class="flex flex-col">
                <div class="px-3">
                  <div class="relative">
                    <BaseSelect
                      v-model="timeCategory"
                      label="Show transactions made within"
                      class="border-muted-300 text-muted-600 focus:border-muted-300 dark:bg-muted-900 dark:text-muted-200 dark:border-muted-800 dark:focus:border-muted-800 tw-accessibility h-10 w-full appearance-none rounded border bg-white px-3 py-2 font-sans text-sm leading-5 transition-all duration-300 placeholder:text-gray-300 focus:shadow-lg dark:placeholder:text-gray-600"
                    >
                      <option value="all">
                        All time
                      </option>
                      <option value="30_days">
                        Last 30 days
                      </option>
                      <option value="this_month">
                        This month
                      </option>
                      <option value="last_month">
                        Last month
                      </option>
                      <option value="this_year">
                        This year
                      </option>
                      <option value="last_year">
                        Last year
                      </option>
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
                    <!--Calendar group-->
                    <div>
                      <!--Calendar-->
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
                        <div class="grid grid-cols-3 gap-1">
                          <div
                            v-for="month in months"
                            :key="month.id"
                            class="flex items-center justify-center"
                          >
                            <BaseRadioHeadless
                              v-model="timeCategoryFrom"
                              name="radio_date_from"
                              :value="month.id"
                            >
                              <button
                                type="button"
                                class="text-muted-500 dark:text-muted-400 group-hover/nui-radio-headless:text-muted-600 dark:group-hover/nui-radio-headless:text-muted-200 peer-checked:text-primary-500 peer-checked:bg-primary-500/10 group-hover/nui-radio-headless:bg-muted-100 dark:group-hover/nui-radio-headless:bg-muted-800 flex size-8 items-center justify-center rounded-full font-sans text-xs transition-colors duration-200"
                              >
                                {{ month.label }}
                              </button>
                            </BaseRadioHeadless>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--Calendar group-->
                    <div>
                      <!--Calendar-->
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
                        <div class="grid grid-cols-3 gap-1">
                          <div
                            v-for="month in months"
                            :key="month.id"
                            class="flex items-center justify-center"
                          >
                            <BaseRadioHeadless
                              v-model="timeCategoryTo"
                              name="radio_date_to"
                              :value="month.id"
                            >
                              <button
                                type="button"
                                class="text-muted-500 dark:text-muted-400 group-hover/nui-radio-headless:text-muted-600 dark:group-hover/nui-radio-headless:text-muted-200 peer-checked:text-primary-500 peer-checked:bg-primary-500/10 group-hover/nui-radio-headless:bg-muted-100 dark:group-hover/nui-radio-headless:bg-muted-800 flex size-8 items-center justify-center rounded-full font-sans text-xs transition-colors duration-200"
                              >
                                {{ month.label }}
                              </button>
                            </BaseRadioHeadless>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  </div>
</template>
