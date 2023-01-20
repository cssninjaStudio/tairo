<script setup lang="ts">
definePageMeta({
  title: 'Interviews',
  layout: 'sidebar',
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
</script>

<template>
  <div class="grid grid-cols-3 gap-6">
    <!--Grid item-->
    <div>
      <BaseCard
        class="h-full flex flex-col p-8 border-0 bg-muted-200"
        shape="curved"
      >
        <div class="mb-5">
          <BaseHeading
            as="h2"
            size="3xl"
            weight="light"
            lead="tight"
            class="text-muted-800 dark:text-white mb-2"
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
        <div class="flex items-center gap-2 mt-auto mb-4">
          <div class="text-4xl">
            <span>🎉</span>
          </div>
          <div>
            <BaseParagraph size="xs">
              <span class="text-muted-400 mb-2"> Your Progress </span>
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
          <BaseButton color="primary" shape="curved" class="w-full h-11">
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
          class="bg-info-100 text-info-500 dark:bg-info-500/20 dark:text-info-400 dark:border-2 dark:border-info-500"
          shape="circle"
        >
          <Icon name="ph:timer-duotone" class="w-5 h-5" />
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
            <span class="text-muted-500 dark:text-muted-400"> Minutes </span>
          </BaseParagraph>
        </div>
      </BaseCard>
      <!-- Inner item -->
      <BaseCard shape="curved" class="flex items-center gap-2 p-3">
        <BaseIconBox
          size="sm"
          class="bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-2 dark:border-primary-500"
          shape="circle"
        >
          <Icon name="ph:broadcast-duotone" class="w-5 h-5" />
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
            <span class="text-muted-500 dark:text-muted-400"> Interviews </span>
          </BaseParagraph>
        </div>
      </BaseCard>
      <!-- Inner item -->
      <BaseCard shape="curved" class="flex items-center gap-2 p-3">
        <BaseIconBox
          size="sm"
          class="bg-lime-100 text-lime-500 dark:bg-lime-500/20 dark:text-lime-400 dark:border-2 dark:border-lime-500"
          shape="circle"
        >
          <Icon name="ph:user-plus-duotone" class="w-5 h-5" />
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
            <span class="text-muted-500 dark:text-muted-400"> Approved </span>
          </BaseParagraph>
        </div>
      </BaseCard>
      <!-- Inner item -->
      <BaseCard shape="curved" class="flex items-center gap-2 p-3">
        <BaseIconBox
          size="sm"
          class="bg-amber-100 text-amber-500 dark:bg-amber-500/20 dark:text-amber-400 dark:border-2 dark:border-amber-500"
          shape="circle"
        >
          <Icon name="ph:door-duotone" class="w-5 h-5" />
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
            <span class="text-muted-500 dark:text-muted-400"> Rejected </span>
          </BaseParagraph>
        </div>
      </BaseCard>
      <!-- Inner item -->
      <div class="col-span-2">
        <div class="h-full flex items-end justify-between mt-auto pb-4">
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
      <BaseCard shape="curved" class="p-6">
        <WidgetDatepicker expanded />
      </BaseCard>
    </div>
    <!--Grid item-->
    <div>
      <BaseCard class="p-6" shape="curved">
        <!-- Title -->
        <div class="flex items-center justify-between mb-8">
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Trending skills</span>
          </BaseHeading>
          <RouterLink
            to="/"
            class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
            >View All</RouterLink
          >
        </div>
        <WidgetTrendingSkills />
      </BaseCard>
    </div>
    <!-- Grid item -->
    <div>
      <!-- Chart -->
      <BaseCard shape="curved" class="p-6">
        <div class="flex items-center justify-between mb-6">
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Interviews</span>
          </BaseHeading>
          <RouterLink
            to="/"
            class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
            >Reports</RouterLink
          >
        </div>
        <ExampleApexchartAreaInterviews />
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
            <span class="text-muted-400"> 8:00 am — 9:00 am </span>
          </BaseParagraph>
        </div>
        <div class="flex items-center ml-auto">
          <BaseButtonIcon shape="curved" muted class="scale-75">
            <Icon name="lucide:arrow-right" class="w-5 h-5" />
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
            <span class="text-muted-400"> 10:30 am — 11:30 am </span>
          </BaseParagraph>
        </div>
        <div class="flex items-center ml-auto">
          <BaseButtonIcon shape="curved" muted class="scale-75">
            <Icon name="lucide:arrow-right" class="w-5 h-5" />
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
            <span class="text-muted-400"> 2:00 pm — 3:00 pm </span>
          </BaseParagraph>
        </div>
        <div class="flex items-center ml-auto">
          <BaseButtonIcon shape="curved" muted class="scale-75">
            <Icon name="lucide:arrow-right" class="w-5 h-5" />
          </BaseButtonIcon>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
