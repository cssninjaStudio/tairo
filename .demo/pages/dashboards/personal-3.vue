<script setup lang="ts">
import { Calendar } from 'v-calendar'

import 'v-calendar/dist/style.css'
import '~/assets/css/vcalendar.css'

definePageMeta({
  title: 'Interviews',
  preview: {
    title: 'Personal dashboard v3',
    description: 'For personal usage and reports',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-personal-3.png',
    srcDark: '/img/screens/dashboards-personal-3-dark.png',
    order: 3,
  },
})

const areaInterviews = reactive(useAreaInterviews())

function useAreaInterviews() {
  const { primary, info, success } = useTailwindColors()
  const type = 'area'
  const height = 220

  const options = {
    chart: {
      height: 220,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value, info.value, success.value],
    title: {
      text: undefined,
      align: 'left',
    },
    legend: {
      position: 'top',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2020-09-19T00:00:00.000Z',
        '2020-09-20T01:30:00.000Z',
        '2020-09-21T02:30:00.000Z',
        '2020-09-22T03:30:00.000Z',
        '2020-09-23T04:30:00.000Z',
        '2020-09-24T05:30:00.000Z',
        '2020-09-25T06:30:00.000Z',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  }

  const series = ref([
    {
      name: 'Interviews',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ])

  return {
    type,
    height,
    options,
    series,
  }
}

const candidates = [
  {
    id: 0,
    tooltip: 'Adam Wrangler',
    src: '/img/avatars/15.svg',
    text: 'EC',
    role: 'UI/UX designer',
  },
  {
    id: 1,
    tooltip: 'Jennifer Miller',
    src: '/img/avatars/5.svg',
    text: 'JM',
    role: 'Frontend developer',
  },
  {
    id: 2,
    tooltip: 'Tara Svenson',
    src: '/img/avatars/4.svg',
    text: 'TS',
    role: 'Software architect',
  },
  {
    id: 3,
    tooltip: 'Naomi Liversky',
    src: undefined,
    text: 'NL',
    role: 'UI/UX designer',
  },
]
</script>

<template>
  <div class="grid grid-cols-3 gap-6">
    <!--Grid item-->
    <div>
      <BaseCard
        class="bg-muted-200 flex h-full flex-col border-0 p-8"
        shape="curved"
      >
        <div class="mb-5">
          <BaseHeading
            as="h2"
            size="3xl"
            weight="light"
            lead="tight"
            class="text-muted-800 mb-2 dark:text-white"
          >
            <span>Hi, Maya R.</span>
          </BaseHeading>
          <BaseParagraph size="sm">
            <span class="text-muted-400">
              You have 6 interviews to conduct during this week. Your current
              progress is great. Check your schedule and don't miss any
              activity.
            </span>
          </BaseParagraph>
        </div>
        <div class="mb-4 mt-auto flex items-center gap-2">
          <div class="text-4xl">
            <span>🎉</span>
          </div>
          <div>
            <BaseParagraph size="xs">
              <span class="text-muted-400 mb-2">Your Progress</span>
            </BaseParagraph>
            <BaseHeading
              as="h4"
              size="md"
              weight="light"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Outstanding</span>
            </BaseHeading>
          </div>
        </div>
        <div>
          <BaseButton color="primary" shape="curved" class="h-11 w-full">
            <span>View Schedule</span>
          </BaseButton>
        </div>
      </BaseCard>
    </div>
    <!--Grid item-->
    <div class="grid grid-cols-2 gap-4">
      <!-- Inner item -->
      <BaseCard shape="curved" class="flex items-center gap-2 p-3">
        <BaseIconBox
          size="sm"
          class="bg-info-100 text-info-500 dark:bg-info-500/20 dark:text-info-400 dark:border-info-500 dark:border-2"
          shape="full"
        >
          <Icon name="ph:timer-duotone" class="h-5 w-5" />
        </BaseIconBox>
        <div>
          <BaseHeading
            as="h2"
            size="sm"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>62K</span>
          </BaseHeading>
          <BaseParagraph size="xs">
            <span class="text-muted-500 dark:text-muted-400">Minutes</span>
          </BaseParagraph>
        </div>
      </BaseCard>
      <!-- Inner item -->
      <BaseCard shape="curved" class="flex items-center gap-2 p-3">
        <BaseIconBox
          size="sm"
          class="bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2"
          shape="full"
        >
          <Icon name="ph:broadcast-duotone" class="h-5 w-5" />
        </BaseIconBox>
        <div>
          <BaseHeading
            as="h2"
            size="sm"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>263</span>
          </BaseHeading>
          <BaseParagraph size="xs">
            <span class="text-muted-500 dark:text-muted-400">Interviews</span>
          </BaseParagraph>
        </div>
      </BaseCard>
      <!-- Inner item -->
      <BaseCard shape="curved" class="flex items-center gap-2 p-3">
        <BaseIconBox
          size="sm"
          class="bg-lime-100 text-lime-500 dark:border-2 dark:border-lime-500 dark:bg-lime-500/20 dark:text-lime-400"
          shape="full"
        >
          <Icon name="ph:user-plus-duotone" class="h-5 w-5" />
        </BaseIconBox>
        <div>
          <BaseHeading
            as="h2"
            size="sm"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>49</span>
          </BaseHeading>
          <BaseParagraph size="xs">
            <span class="text-muted-500 dark:text-muted-400">Approved</span>
          </BaseParagraph>
        </div>
      </BaseCard>
      <!-- Inner item -->
      <BaseCard shape="curved" class="flex items-center gap-2 p-3">
        <BaseIconBox
          size="sm"
          class="bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400"
          shape="full"
        >
          <Icon name="ph:door-duotone" class="h-5 w-5" />
        </BaseIconBox>
        <div>
          <BaseHeading
            as="h2"
            size="sm"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>214</span>
          </BaseHeading>
          <BaseParagraph size="xs">
            <span class="text-muted-500 dark:text-muted-400">Rejected</span>
          </BaseParagraph>
        </div>
      </BaseCard>
      <!-- Inner item -->
      <div class="col-span-2">
        <div class="mt-auto flex h-full items-end justify-between pb-4">
          <div>
            <BaseHeading
              as="h2"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Total Interviews</span>
            </BaseHeading>
            <BaseParagraph size="xs">
              <span class="text-muted-500 dark:text-muted-400">
                23 interviews this month
              </span>
            </BaseParagraph>
          </div>
          <div>
            <BaseAvatarGroup :avatars="candidates" size="sm" :limit="2" />
          </div>
        </div>
      </div>
    </div>
    <!--Grid item-->
    <div>
      <BaseCard class="p-4" shape="curved">
        <Calendar
          :attributes="[
            {
              key: 'today',
              dot: true,
              dates: new Date(),
            },
          ]"
          title-position="left"
          expanded
          borderless
          transparent
          trim-weeks
          class="max-w-full rounded-xl"
        />
      </BaseCard>
    </div>
    <!--Grid item-->
    <div>
      <BaseCard class="p-6" shape="curved">
        <!-- Title -->
        <div class="mb-8 flex items-center justify-between">
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Trending skills</span>
          </BaseHeading>
          <NuxtLink
            to="#"
            class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
          >
            View All
          </NuxtLink>
        </div>
        <DemoTrendingSkills />
      </BaseCard>
    </div>
    <!-- Grid item -->
    <div>
      <!-- Chart -->
      <BaseCard shape="curved" class="p-6">
        <div class="mb-6 flex items-center justify-between">
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Interviews</span>
          </BaseHeading>
          <NuxtLink
            to="#"
            class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
          >
            Reports
          </NuxtLink>
        </div>
        <AddonApexcharts v-bind="areaInterviews" />
      </BaseCard>
    </div>
    <!-- Grid item -->
    <div class="flex flex-col gap-4">
      <!-- Card -->
      <BaseCard shape="curved" class="flex items-center gap-3 p-4">
        <BaseAvatar src="/img/avatars/11.svg" size="md" />
        <div>
          <BaseHeading
            as="h4"
            size="sm"
            weight="light"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Jonathan K.</span>
          </BaseHeading>
          <BaseParagraph size="xs">
            <span class="text-muted-400">8:00 am — 9:00 am</span>
          </BaseParagraph>
        </div>
        <div class="ms-auto flex items-center">
          <BaseButtonIcon shape="curved" muted class="scale-75">
            <Icon name="lucide:arrow-right" class="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </BaseCard>
      <!-- Card -->
      <BaseCard shape="curved" class="flex items-center gap-3 p-4">
        <BaseAvatar src="/img/avatars/16.svg" size="md" />
        <div>
          <BaseHeading
            as="h4"
            size="sm"
            weight="light"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Erwin S.</span>
          </BaseHeading>
          <BaseParagraph size="xs">
            <span class="text-muted-400">10:30 am — 11:30 am</span>
          </BaseParagraph>
        </div>
        <div class="ms-auto flex items-center">
          <BaseButtonIcon shape="curved" muted class="scale-75">
            <Icon name="lucide:arrow-right" class="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </BaseCard>
      <!-- Card -->
      <BaseCard shape="curved" class="flex items-center gap-3 p-4">
        <BaseAvatar src="/img/avatars/5.svg" size="md" />
        <div>
          <BaseHeading
            as="h4"
            size="sm"
            weight="light"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Jennifer M.</span>
          </BaseHeading>
          <BaseParagraph size="xs">
            <span class="text-muted-400">2:00 pm — 3:00 pm</span>
          </BaseParagraph>
        </div>
        <div class="ms-auto flex items-center">
          <BaseButtonIcon shape="curved" muted class="scale-75">
            <Icon name="lucide:arrow-right" class="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
