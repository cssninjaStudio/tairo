<script setup lang="ts">
import { DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'

import type { Customer, Project, ProjectStepData } from '../../types'

const { project } = useMultiStepForm<Project, ProjectStepData>()

useHead({
  title: 'Project details',
})

const customers: Customer[] = [
  {
    logo: '/img/logos/brands/airbnb.svg',
    name: 'Airbnb',
    location: 'Los Angeles, CA',
  },
  {
    logo: '/img/logos/brands/facebook.svg',
    name: 'Facebook',
    location: 'Los Angeles, CA',
  },
  {
    logo: '/img/logos/brands/dribbble.svg',
    name: 'Dribbble',
    location: 'Los Angeles, CA',
  },
  {
    logo: '/img/logos/brands/figma.svg',
    name: 'Figma',
    location: 'Los Angeles, CA',
  },
  {
    logo: '/img/logos/brands/google.svg',
    name: 'Google',
    location: 'Los Angeles, CA',
  },
  {
    logo: '/img/logos/brands/github.svg',
    name: 'Github',
    location: 'Los Angeles, CA',
  },
  {
    logo: '/img/logos/brands/gitlab.svg',
    name: 'Gitlab',
    location: 'Los Angeles, CA',
  },
  {
    logo: '/img/logos/brands/hubspot.svg',
    name: 'Hubspot',
    location: 'Los Angeles, CA',
  },
  {
    logo: '/img/logos/brands/slack.svg',
    name: 'Slack',
    location: 'Los Angeles, CA',
  },
  {
    logo: '/img/logos/brands/udemy.svg',
    name: 'Udemy',
    location: 'Los Angeles, CA',
  },
]

const search = ref('')
const itemSelected = ref(false)

const filteredCustomers = computed<Customer[]>(() => {
  if (!search.value) {
    return []
  }

  return customers
    .filter((item) => {
      return (
        item.name?.match(new RegExp(search.value, 'i')) ||
        item.location?.match(new RegExp(search.value, 'i'))
      )
    })
    .splice(0, 4)
})

const selectCustomer = (customerData: Customer) => {
  project.customer = customerData
  itemSelected.value = true
  search.value = ''
}

const dismissCustomer = () => {
  if (project.customer) {
    project.customer.name = undefined
    project.customer.logo = undefined
    project.customer.location = undefined
  }

  itemSelected.value = false
  search.value = ''
}

const masks = ref({
  input: 'YYYY-MM-DD',
})

const budget = ref('< 5K')
</script>

<template>
  <div>
    <WizardStepTitle />
    <div class="flex flex-col gap-3 w-full max-w-sm mx-auto px-4">
      <!-- Customer -->
      <BaseCard shape="curved" class="relative p-6 z-10">
        <div class="text-center mb-4">
          <h3
            class="font-sans text-[0.65rem] font-semibold uppercase text-muted-400"
          >
            Customer
          </h3>
        </div>
        <div>
          <div class="relative">
            <BaseInput
              v-if="!itemSelected"
              v-model="search"
              icon="lucide:search"
              shape="curved"
              placeholder="Search for a customer"
              :classes="{
                input: 'h-12 text-base !pl-12',
                icon: 'h-12 w-12',
              }"
            />
            <div v-else class="flex items-center gap-3">
              <BaseAvatar
                size="sm"
                :src="project.customer?.logo"
                class="bg-muted-100 dark:bg-muted-700/60"
              />
              <div class="flex flex-col">
                <h3
                  class="font-sans text-sm font-semibold text-muted-800 dark:text-muted-100"
                >
                  {{ project.customer?.name }}
                </h3>
                <p class="font-sans text-xs text-muted-500 dark:text-muted-400">
                  {{ project.customer?.location }}
                </p>
              </div>
              <div class="ml-auto mr-3">
                <BaseButtonIcon small shape="full" @click="dismissCustomer">
                  <Icon name="lucide:x" class="w-4 h-4" />
                </BaseButtonIcon>
              </div>
            </div>

            <div
              class="absolute top-14 left-0 w-full p-4 rounded-xl border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/30 transition-all duration-300"
              :class="
                search.length > 0
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 pointer-events-none translate-y-1'
              "
            >
              <!-- Results -->
              <div
                v-if="filteredCustomers.length > 0"
                class="space-y-2 max-h-[248px] overflow-y-auto slimscroll"
              >
                <!-- Result -->
                <div
                  v-for="customer in filteredCustomers"
                  :key="customer.name"
                  role="button"
                  class="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer hover:bg-muted-100"
                >
                  <BaseAvatar size="sm" :src="customer.logo" />
                  <div class="flex flex-col">
                    <h3
                      class="font-sans text-sm font-semibold text-muted-800 dark:text-muted-100"
                    >
                      {{ customer.name }}
                    </h3>
                    <p
                      class="font-sans text-xs text-muted-500 dark:text-muted-400"
                    >
                      {{ customer.location }}
                    </p>
                  </div>
                  <div class="ml-auto">
                    <BaseButtonIcon
                      small
                      shape="full"
                      @click="selectCustomer(customer)"
                    >
                      <Icon name="lucide:plus" class="w-4 h-4" />
                    </BaseButtonIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseCard>
      <!-- Time frame -->
      <BaseCard shape="curved" class="p-6">
        <div class="text-center mb-4">
          <h3
            class="font-sans text-[0.65rem] font-semibold uppercase text-muted-400"
          >
            Time Frame
          </h3>
        </div>
        <div
          class="w-full flex justify-between divide-x divide-muted-200 dark:divide-muted-700"
        >
          <div class="relative pr-4">
            <ClientOnly>
              <DatePicker v-model="project.startDate" :masks="masks" trim-weeks>
                <template
                  #default="{
                    inputValue,
                    inputEvents,
                    showPopover,
                    hidePopover,
                  }"
                >
                  <div class="relative">
                    <input
                      class="peer font-sans text-sm bg-transparent h-10 inline-flex items-center leading-tight w-full pl-10 rounded-lg text-muted-600 dark:text-muted-100 placeholder:text-muted-300 dark:placeholder:text-muted-600 focus-visible:outline-dashed focus-visible:outline-offset-4 focus-visible:outline-muted-300/70"
                      :value="inputValue"
                      placeholder="Start date"
                      @focus="showPopover"
                    />
                    <div
                      class="absolute top-0 left-0 h-10 w-10 flex items-center justify-center text-muted-400 peer-focus-visible:text-primary-500 transition-colors duration-300"
                    >
                      <Icon name="lucide:map-pin" class="w-5 h-5" />
                    </div>
                  </div>
                </template>
              </DatePicker>
            </ClientOnly>
          </div>
          <div class="relative pl-4">
            <ClientOnly>
              <DatePicker v-model="project.endDate" :masks="masks" trim-weeks>
                <template
                  #default="{
                    inputValue,
                    inputEvents,
                    showPopover,
                    hidePopover,
                  }"
                >
                  <div class="relative">
                    <input
                      class="peer font-sans text-sm bg-transparent h-10 inline-flex items-center leading-tight w-full pl-10 rounded-lg text-muted-600 dark:text-muted-100 placeholder:text-muted-300 dark:placeholder:text-muted-600 focus-visible:outline-dashed focus-visible:outline-offset-4 focus-visible:outline-muted-300/70"
                      :value="inputValue"
                      placeholder="End date"
                      @focus="showPopover"
                    />
                    <div
                      class="absolute top-0 left-0 h-10 w-10 flex items-center justify-center text-muted-400 peer-focus-visible:text-primary-500 transition-colors duration-300"
                    >
                      <Icon name="lucide:flag" class="w-5 h-5" />
                    </div>
                  </div>
                </template>
              </DatePicker>
            </ClientOnly>
          </div>
        </div>
      </BaseCard>
      <!-- Budget -->
      <BaseCard shape="curved" class="p-6">
        <div class="text-center mb-4">
          <h3
            class="font-sans text-[0.65rem] font-semibold uppercase text-muted-400"
          >
            Initial budget
          </h3>
        </div>
        <div class="w-full flex justify-center gap-3">
          <BaseRadioCustom v-model="budget" name="budget" value="< 5K">
            <BaseButtonAction
              shape="curved"
              class="peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:!text-white peer-checked:shadow-xl peer-checked:shadow-primary-500/20"
            >
              <span>&lt; 5K</span>
            </BaseButtonAction>
          </BaseRadioCustom>
          <BaseRadioCustom v-model="budget" name="budget" value="< 30K">
            <BaseButtonAction
              shape="curved"
              class="peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:!text-white peer-checked:shadow-xl peer-checked:shadow-primary-500/20"
            >
              <span>&lt; 30K</span>
            </BaseButtonAction>
          </BaseRadioCustom>
          <BaseRadioCustom v-model="budget" name="budget" value="< 100K">
            <BaseButtonAction
              shape="curved"
              class="peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:!text-white peer-checked:shadow-xl peer-checked:shadow-primary-500/20"
            >
              <span>&lt; 100K</span>
            </BaseButtonAction>
          </BaseRadioCustom>
          <BaseRadioCustom v-model="budget" name="budget" value="100K+">
            <BaseButtonAction
              shape="curved"
              class="peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:!text-white peer-checked:shadow-xl peer-checked:shadow-primary-500/20"
            >
              <span>100K+</span>
            </BaseButtonAction>
          </BaseRadioCustom>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
