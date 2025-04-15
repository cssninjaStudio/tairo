<script setup lang="ts">
definePageMeta({
  title: 'My Projects',
  preview: {
    title: 'Personal dashboard v2',
    description: 'For personal usage and reports',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-personal-2.png',
    srcDark: '/img/screens/dashboards-personal-2-dark.png',
    order: 2,
  },
})
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-4">
      <!-- Grid column -->
      <div class="col-span-12">
        <!-- Header -->
        <BaseCard rounded="md" class="p-4 md:p-6">
          <div class="flex flex-col items-center md:flex-row">
            <div
              class="lg:landscape:flex-row lg:landscape:items-center flex flex-col items-center gap-4 text-center md:items-start md:text-start xl:landscape::flex-row xl:landscape::items-center"
            >
              <BaseAvatar
                src="/img/avatars/10.svg"
                size="xl"
                badge-src="/img/icons/flags/united-states-of-america.svg"
              />
              <div class="text-center md:text-start">
                <BaseHeading
                  as="h2"
                  size="xl"
                  weight="medium"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
                >
                  <span>Welcome back, Kendra</span>
                </BaseHeading>
                <BaseParagraph>
                  <span class="text-muted-600 dark:text-muted-400">It's nice to see you again</span>
                </BaseParagraph>
              </div>
            </div>

            <div
              class="w-full md:w-auto lg:landscape:flex-row lg:landscape:items-center md:ms-auto flex flex-col gap-6 text-center md:text-start xl:landscape:flex-row xl:landscape:items-center"
            >
              <div class="flex-1">
                <BaseHeading
                  as="h3"
                  size="3xl"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-900 dark:text-white"
                >
                  <span>
                    31
                    <small class="text-base font-medium">Tasks</small>
                  </span>
                </BaseHeading>
                <BaseParagraph>
                  <span class="text-muted-600 dark:text-muted-400 text-sm">
                    Are currently pending
                  </span>
                </BaseParagraph>
              </div>
              <BaseCard
                variant="none"
                rounded="md"
                class="from-primary-900 to-primary-800 shadow-primary-500/20 relative flex flex-1 items-center justify-center bg-gradient-to-br p-8 md:p-5 shadow-xl"
              >
                <div class="relative z-20 flex flex-col gap-3">
                  <BaseParagraph size="sm">
                    <span class="text-primary-50">
                      Start using our team and project management tools
                    </span>
                  </BaseParagraph>
                  <NuxtLink
                    class="font-sans text-sm text-white underline-offset-4 hover:underline"
                    to="#"
                  >
                    Learn More
                  </NuxtLink>
                </div>
                <div
                  class="absolute bottom-0 end-2 z-10 flex size-14 items-center justify-center"
                >
                  <Icon
                    name="ph:crown-duotone"
                    class="text-primary-400/50 size-10"
                  />
                </div>
              </BaseCard>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Grid column -->
      <div class="lg:landscape:col-span-8 col-span-12 xl:landscape:col-span-8">
        <!-- Inner grid -->
        <div class="flex flex-col gap-4">
          <!-- Project list widget -->
          <BaseCard rounded="md" class="p-4 md:p-6">
            <div class="mb-8 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-900 dark:text-white"
              >
                <span>Current projects</span>
              </BaseHeading>
              <BaseText
                size="sm"
              >
                <BaseLink to="#" class="not-hover:text-muted-400">
                  View all
                </BaseLink>
              </BaseText>
            </div>
            <div class="pb-2">
              <DemoProjectListCompact />
            </div>
          </BaseCard>
          <!-- Chart -->
          <BaseCard rounded="md" class="p-4 md:p-6">
            <div class="mb-6 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-900 dark:text-white"
              >
                <span>Task completion</span>
              </BaseHeading>
            </div>
            <DemoChartAreaTaskCompletion />
          </BaseCard>
          <!-- Chart -->
          <BaseCard rounded="md" class="p-4 md:p-6">
            <div class="mb-6 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Team Efficiency</span>
              </BaseHeading>
            </div>
            <DemoChartBarTeamEfficiency />
          </BaseCard>
        </div>
      </div>
      <!-- Grid column -->
      <div class="lg:landscape:col-span-4 col-span-12 xl:landscape:col-span-4">
        <!-- Inner grid -->
        <div class="grid gap-4 lg:flex lg:flex-col">
          <!-- Widget -->
          <DemoActionText
            title="Upgrade to Pro"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid censes in Latino fore? Nam ante Aristippus, et ille melius."
            label="Upgrade Now"
            to="#"
            rounded="md"
          />
          <!-- Widget -->
          <BaseCard class="p-4 md:p-6">
            <!-- Title -->
            <div class="mb-8 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-900 dark:text-white"
              >
                <span>My Team</span>
              </BaseHeading>
              <BaseText
                size="sm"
              >
                <BaseLink to="#" class="not-hover:text-muted-400">
                  View all
                </BaseLink>
              </BaseText>
            </div>
            <DemoTeamListCompact actions />
          </BaseCard>
          <!-- Widget -->
          <BaseCard class="p-6">
            <!-- Title -->
            <div class="mb-8 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-900 dark:text-white"
              >
                <span>Todo today</span>
              </BaseHeading>
              <BaseText
                size="sm"
              >
                <BaseLink to="#" class="not-hover:text-muted-400">
                  View all
                </BaseLink>
              </BaseText>
            </div>
            <DemoTodoListCompact />
          </BaseCard>
          <!-- CTA card -->
          <BaseCard
            variant="none"
            rounded="md"
            class="from-primary-900 to-primary-800 relative flex h-full items-center justify-center bg-gradient-to-br p-6"
          >
            <div class="relative z-20 flex flex-col gap-3 py-10 text-center">
              <BaseHeading
                as="h4"
                size="lg"
                weight="semibold"
                lead="tight"
                class="text-white"
              >
                <span>You're doing great!</span>
              </BaseHeading>
              <BaseParagraph size="md" class="mx-auto max-w-[280px]">
                <span class="text-white/80">
                  Start using our team and project management tools
                </span>
              </BaseParagraph>
              <NuxtLink
                class="font-sans text-sm text-white underline-offset-4 hover:underline"
                to="#"
              >
                Learn More
              </NuxtLink>
            </div>
            <div
              class="absolute bottom-4 end-4 z-10 flex size-14 items-center justify-center"
            >
              <Icon
                name="ph:crown-duotone"
                class="text-primary-600/50 size-14"
              />
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
