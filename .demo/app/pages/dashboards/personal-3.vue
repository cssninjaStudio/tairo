<script setup lang="ts">
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

// Datepicker
const date = ref(new Date())
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <div
      class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <!-- Grid item -->
      <div>
        <BaseCard
          variant="none"
          class="bg-muted-200 dark:bg-muted-950/60 flex h-full flex-col border-0 p-8"
          rounded="lg"
        >
          <div class="mb-5">
            <BaseHeading
              as="h2"
              size="3xl"
              weight="medium"
              lead="tight"
              class="text-muted-900 mb-2 dark:text-white"
            >
              <span>Hi, Kendra W.</span>
            </BaseHeading>
            <BaseParagraph size="sm">
              <span class="text-muted-600 dark:text-muted-400">
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
                <span class="text-muted-600 dark:text-muted-400 mb-2">Your Progress</span>
              </BaseParagraph>
              <BaseHeading
                as="h4"
                size="md"
                weight="medium"
                lead="tight"
                class="text-muted-900 dark:text-white"
              >
                <span>Outstanding</span>
              </BaseHeading>
            </div>
          </div>
          <div>
            <BaseButton
              variant="primary"
              rounded="lg"
              class="h-11 w-full"
            >
              <span>View Schedule</span>
            </BaseButton>
          </div>
        </BaseCard>
      </div>
      <!-- Grid item -->
      <div class="grid grid-cols-2 gap-4">
        <!-- Inner item -->
        <BaseCard rounded="lg" class="flex items-center gap-2 p-3">
          <BaseIconBox
            size="sm"
            class="bg-info-100 text-info-500 dark:bg-info-500/20 dark:text-info-400 dark:border-info-500 dark:border-2"
            rounded="full"
            variant="none"
          >
            <Icon name="solar:alarm-bold-duotone" class="size-6" />
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
        <BaseCard rounded="lg" class="flex items-center gap-2 p-3">
          <BaseIconBox
            size="sm"
            class="bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2"
            rounded="full"
            variant="none"
          >
            <Icon name="solar:home-wifi-angle-bold-duotone" class="size-6" />
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
        <BaseCard rounded="lg" class="flex items-center gap-2 p-3">
          <BaseIconBox
            size="sm"
            class="bg-lime-100 text-lime-500 dark:border-2 dark:border-lime-500 dark:bg-lime-500/20 dark:text-lime-400"
            rounded="full"
            variant="none"
          >
            <Icon name="solar:verified-check-bold-duotone" class="size-6" />
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
        <BaseCard rounded="lg" class="flex items-center gap-2 p-3">
          <BaseIconBox
            size="sm"
            class="bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400"
            rounded="full"
            variant="none"
          >
            <Icon name="solar:mask-sad-bold-duotone" class="size-6" />
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
                weight="medium"
                lead="tight"
                class="text-muted-900 dark:text-white"
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
              <BaseAvatarGroup
                :avatars="candidates"
                size="sm"
                :limit="3"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Grid item -->
      <div>
        <BaseCard class="p-4" rounded="lg">
          <LazyAddonDatepicker v-model="date" locale="en" label="Start date" />
        </BaseCard>
      </div>
      <!-- Grid item -->
      <div>
        <BaseCard class="p-6" rounded="lg">
          <!-- Title -->
          <div class="mb-8 flex items-center justify-between">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-900 dark:text-white"
            >
              <span>Trending skills</span>
            </BaseHeading>
            <BaseText
              size="sm"
            >
              <BaseLink to="#" class="not-hover:text-muted-400">
                View all
              </BaseLink>
            </BaseText>
          </div>
          <DemoTrendingSkills />
        </BaseCard>
      </div>
      <!-- Grid item -->
      <div>
        <!-- Chart -->
        <BaseCard rounded="lg" class="flex flex-col h-full p-6">
          <div class="mb-6 flex items-center justify-between">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-900 dark:text-white"
            >
              <span>Interviews</span>
            </BaseHeading>
            <BaseText
              size="sm"
            >
              <BaseLink to="#" class="not-hover:text-muted-400">
                Reports
              </BaseLink>
            </BaseText>
          </div>
          <div class="mt-auto">
            <DemoChartAreaInterviews />
          </div>
        </BaseCard>
      </div>
      <!-- Grid item -->
      <div class="flex flex-col gap-4">
        <!-- Card -->
        <BaseCard rounded="lg" class="flex items-center gap-3 p-4">
          <BaseAvatar src="/img/avatars/11.svg" size="sm" />
          <div>
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              lead="tight"
              class="text-muted-900 dark:text-white"
            >
              <span>Jonathan K.</span>
            </BaseHeading>
            <BaseParagraph size="xs">
              <span class="text-muted-600 dark:text-muted-400">8:00 am — 9:00 am</span>
            </BaseParagraph>
          </div>
          <div class="ms-auto flex items-center">
            <BaseButton
              rounded="lg"
              variant="muted"
              size="icon-md"
              class="scale-75"
            >
              <Icon name="lucide:arrow-right" class="size-5" />
            </BaseButton>
          </div>
        </BaseCard>
        <!-- Card -->
        <BaseCard rounded="lg" class="flex items-center gap-3 p-4">
          <BaseAvatar src="/img/avatars/16.svg" size="sm" />
          <div>
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              lead="tight"
              class="text-muted-900 dark:text-white"
            >
              <span>Erwin S.</span>
            </BaseHeading>
            <BaseParagraph size="xs">
              <span class="text-muted-600 dark:text-muted-400">10:30 am — 11:30 am</span>
            </BaseParagraph>
          </div>
          <div class="ms-auto flex items-center">
            <BaseButton
              rounded="lg"
              variant="muted"
              size="icon-md"
              class="scale-75"
            >
              <Icon name="lucide:arrow-right" class="size-5" />
            </BaseButton>
          </div>
        </BaseCard>
        <!-- Card -->
        <BaseCard rounded="lg" class="flex items-center gap-3 p-4">
          <BaseAvatar src="/img/avatars/5.svg" size="sm" />
          <div>
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              lead="tight"
              class="text-muted-900 dark:text-white"
            >
              <span>Jennifer M.</span>
            </BaseHeading>
            <BaseParagraph size="xs">
              <span class="text-muted-600 dark:text-muted-400">2:00 pm — 3:00 pm</span>
            </BaseParagraph>
          </div>
          <div class="ms-auto flex items-center">
            <BaseButton
              rounded="lg"
              variant="muted"
              size="icon-md"
              class="scale-75"
            >
              <Icon name="lucide:arrow-right" class="size-5" />
            </BaseButton>
          </div>
        </BaseCard>
        <!-- Card -->
        <BaseCard rounded="lg" class="flex items-center gap-3 p-4">
          <BaseAvatar src="/img/avatars/3.svg" size="sm" />
          <div>
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              lead="tight"
              class="text-muted-900 dark:text-white"
            >
              <span>Clark S.</span>
            </BaseHeading>
            <BaseParagraph size="xs">
              <span class="text-muted-600 dark:text-muted-400">4:00 pm — 5:00 pm</span>
            </BaseParagraph>
          </div>
          <div class="ms-auto flex items-center">
            <BaseButton
              rounded="lg"
              variant="muted"
              size="icon-md"
              class="scale-75"
            >
              <Icon name="lucide:arrow-right" class="size-5" />
            </BaseButton>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
