<script setup lang="ts">
import { DatePicker } from 'v-calendar'

import 'v-calendar/dist/style.css'
import '~/assets/css/vcalendar.css'

import type { Customer, Project, ProjectStepData } from '../../types'

definePageMeta({
  title: 'Wizard — Step 3',
  preview: {
    title: 'Wizard — Step 3',
    description: 'For onboarding and step forms',
    categories: ['dashboards', 'wizard', 'forms'],
    src: '/img/screens/wizard-3.png',
    srcDark: '/img/screens/wizard-3-dark.png',
    order: 32,
  },
})

const { data: project } = useMultiStepForm<Project, ProjectStepData>()

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

function selectCustomer(customerData: Customer) {
  project.value.customer = customerData
  itemSelected.value = true
  search.value = ''
}

function dismissCustomer() {
  if (project.value.customer) {
    project.value.customer.name = undefined
    project.value.customer.logo = undefined
    project.value.customer.location = undefined
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
    <DemoWizardStepTitle />
    <div class="mx-auto flex w-full max-w-sm flex-col gap-3 px-4">
      <!-- Customer -->
      <BaseCard shape="curved" class="relative z-10 p-6">
        <div class="mb-4 text-center">
          <h3
            class="text-muted-400 font-sans text-[0.65rem] font-semibold uppercase"
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
              placeholder="ex: Figma, Github, ..."
              :classes="{
                input: 'h-12 text-base !ps-12',
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
                  class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"
                >
                  {{ project.customer?.name }}
                </h3>
                <p class="text-muted-500 dark:text-muted-400 font-sans text-xs">
                  {{ project.customer?.location }}
                </p>
              </div>
              <div class="me-3 ms-auto">
                <BaseButtonIcon small shape="full" @click="dismissCustomer">
                  <Icon name="lucide:x" class="h-4 w-4" />
                </BaseButtonIcon>
              </div>
            </div>

            <div
              class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-900/30 absolute start-0 top-14 w-full rounded-xl border bg-white p-4 shadow-xl transition-all duration-300"
              :class="
                search.length > 0
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 pointer-events-none translate-y-1'
              "
            >
              <!-- Results -->
              <div
                v-if="filteredCustomers.length > 0"
                class="slimscroll max-h-[248px] space-y-2 overflow-y-auto"
              >
                <!-- Result -->
                <div
                  v-for="customer in filteredCustomers"
                  :key="customer.name"
                  role="button"
                  class="hover:bg-muted-100 flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2"
                >
                  <BaseAvatar size="sm" :src="customer.logo" />
                  <div class="flex flex-col">
                    <h3
                      class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"
                    >
                      {{ customer.name }}
                    </h3>
                    <p
                      class="text-muted-500 dark:text-muted-400 font-sans text-xs"
                    >
                      {{ customer.location }}
                    </p>
                  </div>
                  <div class="ms-auto">
                    <BaseButtonIcon
                      small
                      shape="full"
                      @click="selectCustomer(customer)"
                    >
                      <Icon name="lucide:plus" class="h-4 w-4" />
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
        <div class="mb-4 text-center">
          <h3
            class="text-muted-400 font-sans text-[0.65rem] font-semibold uppercase"
          >
            Time Frame
          </h3>
        </div>
        <div
          class="divide-muted-200 dark:divide-muted-700 flex w-full justify-between divide-x"
        >
          <div class="relative pe-4">
            <DatePicker
              v-model="project.startDate"
              :masks="masks"
              :minute-increment="15"
              :min-date="new Date()"
              trim-weeks
            >
              <template #default="{ inputValue, inputEvents }">
                <div class="relative">
                  <input
                    class="text-muted-600 dark:text-muted-100 placeholder:text-muted-300 dark:placeholder:text-muted-600 focus-visible:outline-muted-300/70 peer inline-flex h-10 w-full items-center rounded-lg bg-transparent ps-10 font-sans text-sm leading-tight focus-visible:outline-dashed focus-visible:outline-offset-4"
                    :value="inputValue"
                    placeholder="Start date"
                    v-on="inputEvents"
                  />
                  <div
                    class="text-muted-400 peer-focus-visible:text-primary-500 absolute start-0 top-0 flex h-10 w-10 items-center justify-center transition-colors duration-300"
                  >
                    <Icon name="lucide:map-pin" class="h-5 w-5" />
                  </div>
                </div>
              </template>
            </DatePicker>
          </div>
          <div class="relative ps-4">
            <DatePicker
              id="endDate"
              v-model="project.endDate"
              :masks="masks"
              :minute-increment="15"
              :min-date="project.startDate"
              trim-weeks
            >
              <template #default="{ inputValue, inputEvents }">
                <div class="relative">
                  <input
                    class="text-muted-600 dark:text-muted-100 placeholder:text-muted-300 dark:placeholder:text-muted-600 focus-visible:outline-muted-300/70 peer inline-flex h-10 w-full items-center rounded-lg bg-transparent ps-10 font-sans text-sm leading-tight focus-visible:outline-dashed focus-visible:outline-offset-4"
                    :value="inputValue"
                    placeholder="End date"
                    v-on="inputEvents"
                  />
                  <div
                    class="text-muted-400 peer-focus-visible:text-primary-500 absolute start-0 top-0 flex h-10 w-10 items-center justify-center transition-colors duration-300"
                  >
                    <Icon name="lucide:flag" class="h-5 w-5" />
                  </div>
                </div>
              </template>
            </DatePicker>
          </div>
        </div>
      </BaseCard>
      <!-- Budget -->
      <BaseCard shape="curved" class="p-6">
        <div class="mb-4 text-center">
          <h3
            class="text-muted-400 font-sans text-[0.65rem] font-semibold uppercase"
          >
            Initial budget
          </h3>
        </div>
        <div class="flex w-full justify-center gap-3">
          <BaseRadioHeadless v-model="budget" name="budget" value="< 5K">
            <BaseButtonAction
              shape="curved"
              class="peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"
            >
              <span>&lt; 5K</span>
            </BaseButtonAction>
          </BaseRadioHeadless>
          <BaseRadioHeadless v-model="budget" name="budget" value="< 30K">
            <BaseButtonAction
              shape="curved"
              class="peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"
            >
              <span>&lt; 30K</span>
            </BaseButtonAction>
          </BaseRadioHeadless>
          <BaseRadioHeadless v-model="budget" name="budget" value="< 100K">
            <BaseButtonAction
              shape="curved"
              class="peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"
            >
              <span>&lt; 100K</span>
            </BaseButtonAction>
          </BaseRadioHeadless>
          <BaseRadioHeadless v-model="budget" name="budget" value="100K+">
            <BaseButtonAction
              shape="curved"
              class="peer-checked:!bg-primary-500 peer-checked:!border-primary-500 peer-checked:shadow-primary-500/20 peer-checked:!text-white peer-checked:shadow-xl"
            >
              <span>100K+</span>
            </BaseButtonAction>
          </BaseRadioHeadless>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
