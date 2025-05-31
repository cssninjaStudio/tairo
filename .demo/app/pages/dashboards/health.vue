<script setup lang="ts">
import 'v-calendar/dist/style.css'

definePageMeta({
  title: 'Health',
  preview: {
    title: 'Health dashboard',
    description: 'For health and fitness',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-health.png',
    srcDark: '/img/screens/dashboards-health-dark.png',
    order: 17,
  },
})

// Datepicker
const date = ref(new Date())
</script>

<template>
  <div class="relative px-4 md:px-6 lg:px-8 pb-20">
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Header -->
      <div class="col-span-12">
        <div
          class="bg-primary-800 flex flex-col items-center rounded-2xl p-4 sm:flex-row"
        >
          <div class="relative h-[168px] w-[280px] shrink-0">
            <img
              class="pointer-events-none absolute -start-6 -top-20 sm:-start-10"
              src="/img/illustrations/dashboards/health/doctor.svg"
              alt="Doctor illustration"
            >
          </div>
          <div class="mt-6 grow sm:mt-0">
            <div class="text-center sm:text-start">
              <BaseHeading tag="h1" class="text-white opacity-90">
                <span>Today's Summary</span>
              </BaseHeading>
              <BaseParagraph size="sm" class="text-white opacity-70">
                <span>
                  Monitor your activity and keep improving your weak points.
                </span>
              </BaseParagraph>
              <div
                class="mt-6 flex flex-wrap gap-y-6 pb-4 text-center sm:mt-4 sm:gap-x-8 sm:pb-0 sm:text-start"
              >
                <div class="min-w-[33.3%] sm:min-w-0">
                  <BaseHeading
                    tag="h4"
                    weight="medium"
                    size="sm"
                    class="text-white opacity-90"
                  >
                    <span>900 kcal</span>
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-white opacity-70">
                    <span>Burnt today</span>
                  </BaseParagraph>
                </div>
                <div class="min-w-[33.3%] sm:min-w-0">
                  <BaseHeading
                    tag="h4"
                    weight="medium"
                    size="sm"
                    class="text-white opacity-90"
                  >
                    <span>2300 kcal</span>
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-white opacity-70">
                    <span>Eaten today</span>
                  </BaseParagraph>
                </div>
                <div class="min-w-[33.3%] sm:min-w-0">
                  <BaseHeading
                    tag="h4"
                    weight="medium"
                    size="sm"
                    class="text-white opacity-90"
                  >
                    <span>2%</span>
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-white opacity-70">
                    <span>Fat burnt</span>
                  </BaseParagraph>
                </div>
                <div class="min-w-[33.3%] sm:min-w-0">
                  <BaseHeading
                    tag="h4"
                    weight="medium"
                    size="sm"
                    class="text-white opacity-90"
                  >
                    <span>11,424</span>
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-white opacity-70">
                    <span>Steps walked</span>
                  </BaseParagraph>
                </div>
                <div class="min-w-[33.3%] sm:min-w-0">
                  <BaseHeading
                    tag="h4"
                    weight="medium"
                    size="sm"
                    class="text-white opacity-90"
                  >
                    <span>8.4km</span>
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-white opacity-70">
                    <span>Distance today</span>
                  </BaseParagraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Icon box -->
      <div class="col-span-6 sm:col-span-3">
        <div class="flex flex-col">
          <div class="mb-3 flex items-center gap-2">
            <BaseIconBox
              size="md"
              class="bg-primary-500/10"
              variant="none"
              rounded="none"
              mask="blob"
            >
              <Icon name="solar:waterdrop-bold-duotone" class="text-primary-500 size-5" />
            </BaseIconBox>
            <div class="flex items-center gap-1 font-sans">
              <BaseText weight="semibold" class="text-muted-800 dark:text-muted-100">
                114/90
              </BaseText>
              <BaseText size="sm" class="text-muted-600 dark:text-muted-400">
                Min/Max
              </BaseText>
            </div>
          </div>
          <div>
            <BaseHeading
              tag="h3"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              <span>Blood quality</span>
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400 max-w-[260px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis
              videtur.
            </BaseParagraph>
          </div>
        </div>
      </div>
      <!-- Icon box -->
      <div class="col-span-6 sm:col-span-3">
        <div class="flex flex-col">
          <div class="mb-3 flex items-center gap-2">
            <BaseIconBox
              size="md"
              class="bg-primary-500/10"
              variant="none"
              rounded="none"
              mask="blob"
            >
              <Icon name="solar:heart-pulse-2-bold-duotone" class="text-primary-500 size-5" />
            </BaseIconBox>
            <div class="flex items-center gap-1 font-sans">
              <BaseText weight="semibold" class="text-muted-800 dark:text-muted-100">
                112
              </BaseText>
              <BaseText size="sm" class="text-muted-600 dark:text-muted-400">
                Bpm
              </BaseText>
            </div>
          </div>
          <div>
            <BaseHeading
              tag="h3"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              <span>Heart rate</span>
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400 max-w-[260px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis
              videtur.
            </BaseParagraph>
          </div>
        </div>
      </div>
      <!-- Icon box -->
      <div class="col-span-6 sm:col-span-3">
        <div class="flex flex-col">
          <div class="mb-3 flex items-center gap-2">
            <BaseIconBox
              size="md"
              class="bg-primary-500/10"
              variant="none"
              rounded="none"
              mask="blob"
            >
              <Icon name="solar:hearts-bold-duotone" class="text-primary-500 size-5" />
            </BaseIconBox>
            <div class="flex items-center gap-1 font-sans">
              <BaseText weight="semibold" class="text-muted-800 dark:text-muted-100">
                12/14
              </BaseText>
              <BaseText size="sm" class="text-muted-600 dark:text-muted-400">
                Units
              </BaseText>
            </div>
          </div>
          <div>
            <BaseHeading
              tag="h3"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              <span>Blood pressure</span>
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400 max-w-[260px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis
              videtur.
            </BaseParagraph>
          </div>
        </div>
      </div>
      <!-- Icon box -->
      <div class="col-span-6 sm:col-span-3">
        <div class="flex flex-col">
          <div class="mb-3 flex items-center gap-2">
            <BaseIconBox
              size="md"
              class="bg-primary-500/10"
              variant="none"
              rounded="none"
              mask="blob"
            >
              <Icon name="solar:dumbbell-large-bold-duotone" class="text-primary-500 size-5" />
            </BaseIconBox>
            <div class="flex items-center gap-1 font-sans">
              <BaseText weight="semibold" class="text-muted-800 dark:text-muted-100">
                60.4
              </BaseText>
              <BaseText size="sm" class="text-muted-600 dark:text-muted-400">
                Lbs
              </BaseText>
            </div>
          </div>
          <div>
            <BaseHeading
              tag="h3"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              <span>Weight</span>
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400 max-w-[260px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis
              videtur.
            </BaseParagraph>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div class="col-span-12">
        <!-- Inner grid -->
        <div class="grid grid-cols-12 gap-4">
          <!-- Inner column -->
          <div class="xl:col-span-8 col-span-12 2xl:col-span-9">
            <!-- Chart subgrid -->
            <div class="grid grid-cols-12 gap-4">
              <!-- Chart -->
              <div class="col-span-12 sm:col-span-6">
                <BaseCard rounded="lg" class="p-4 md:p-6">
                  <div class="mb-2 flex items-center gap-2">
                    <BaseHeading
                      as="h3"
                      size="md"
                      weight="medium"
                      lead="tight"
                      class="text-muted-900 dark:text-white"
                    >
                      <span>Overall Condition</span>
                    </BaseHeading>
                    <BaseTooltip
                      content="Based on last 7 days"
                    >
                      <Icon name="solar:question-circle-linear" class="size-4 text-muted-400" />
                    </BaseTooltip>
                  </div>
                  <div>
                    <BaseParagraph
                      size="xs"
                      class="text-muted-600 dark:text-muted-400 max-w-[240px]"
                    >
                      <span>
                        Your overall condition is very good. Make it even
                        better.
                      </span>
                      <NuxtLink
                        to="#"
                        class="text-primary-500 underline-offset-4 hover:underline"
                      >
                        Read how
                      </NuxtLink>
                    </BaseParagraph>
                  </div>
                  <DemoChartAreaCondition class="relative -start-5" />
                </BaseCard>
              </div>
              <!-- Chart -->
              <div class="col-span-12 sm:col-span-6">
                <BaseCard rounded="lg" class="p-4 md:p-6">
                  <div class="mb-2 flex items-center gap-2">
                    <BaseHeading
                      as="h3"
                      size="md"
                      weight="medium"
                      lead="tight"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>Energy Level</span>
                    </BaseHeading>
                    <BaseTooltip
                      content="Based on last 7 days"
                    >
                      <Icon name="solar:question-circle-linear" class="size-4 text-muted-400" />
                    </BaseTooltip>
                  </div>
                  <div>
                    <BaseParagraph
                      size="xs"
                      class="text-muted-600 dark:text-muted-400 max-w-[240px]"
                    >
                      <span>
                        Your energy seems a bit unstable. You can improve it.
                      </span>
                      <NuxtLink
                        to="#"
                        class="text-primary-500 underline-offset-4 hover:underline"
                      >
                        Read how
                      </NuxtLink>
                    </BaseParagraph>
                  </div>
                  <DemoChartScatterEnergy />
                </BaseCard>
              </div>
              <!-- Chart -->
              <div class="col-span-12 sm:col-span-6">
                <BaseCard rounded="lg" class="p-4 md:p-6">
                  <div class="mb-2 flex items-center gap-2">
                    <BaseHeading
                      as="h3"
                      size="md"
                      weight="medium"
                      lead="tight"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>Oxygenation</span>
                    </BaseHeading>
                    <BaseTooltip
                      content="Based on last 7 days"
                    >
                      <Icon name="solar:question-circle-linear" class="size-4 text-muted-400" />
                    </BaseTooltip>
                  </div>
                  <div>
                    <BaseParagraph
                      size="xs"
                      class="text-muted-600 dark:text-muted-400 max-w-[240px]"
                    >
                      <span>
                        Your oxygen seems a bit unstable. You can improve it.
                      </span>
                      <NuxtLink
                        to="#"
                        class="text-primary-500 underline-offset-4 hover:underline"
                      >
                        Read how
                      </NuxtLink>
                    </BaseParagraph>
                  </div>
                  <DemoChartBarOxygen class="relative -start-5" />
                </BaseCard>
              </div>
              <!-- Chart -->
              <div class="col-span-12 sm:col-span-6">
                <BaseCard rounded="lg" class="p-4 md:p-6">
                  <div class="mb-2 flex items-center gap-2">
                    <BaseHeading
                      as="h3"
                      size="md"
                      weight="medium"
                      lead="tight"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>Overall Progress</span>
                    </BaseHeading>
                    <BaseTooltip
                      content="Based on last 7 days"
                    >
                      <Icon name="solar:question-circle-linear" class="size-4 text-muted-400" />
                    </BaseTooltip>
                  </div>
                  <div>
                    <BaseParagraph
                      size="xs"
                      class="text-muted-600 dark:text-muted-400 max-w-[240px]"
                    >
                      <span>
                        Your overall progress is very good. Make it even better.
                      </span>
                      <NuxtLink
                        to="#"
                        class="text-primary-500 underline-offset-4 hover:underline"
                      >
                        Read how
                      </NuxtLink>
                    </BaseParagraph>
                  </div>
                  <DemoChartAreaProgress class="relative -start-5" />
                </BaseCard>
              </div>
            </div>
          </div>
          <!-- Inner column -->
          <div class="xl:col-span-4 col-span-12 2xl:col-span-3">
            <div class="flex flex-col gap-4">
              <!-- Widget -->
              <BaseCard class="p-4 md:p-6" rounded="lg">
                <div class="flex w-full items-center justify-between">
                  <DemoSearchCompact rounded="lg" />
                </div>
              </BaseCard>
              <!-- Widget -->
              <BaseCard rounded="lg" class="p-2">
                <LazyAddonDatepicker v-model="date" locale="en" label="Start date" />
              </BaseCard>
              <!-- Widget -->
              <BaseCard rounded="lg" class="flex h-full flex-col p-4 md:p-6">
                <div class="mb-6 flex items-center justify-between">
                  <BaseHeading
                    as="h3"
                    size="md"
                    weight="medium"
                    lead="tight"
                    class="text-muted-900 dark:text-white"
                  >
                    <span>Personal Score</span>
                  </BaseHeading>
                </div>
                <div class="py-16">
                  <DemoChartRadialGaugeAlt class="-mt-14" />
                </div>
                <div class="mt-auto text-center">
                  <BaseParagraph size="sm">
                    <span class="text-muted-600 dark:text-muted-400">
                      Your score has been calculated based on the latest metrics
                    </span>
                  </BaseParagraph>
                </div>
              </BaseCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
