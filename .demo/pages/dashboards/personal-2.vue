<script setup lang="ts">
definePageMeta({
  title: 'Personal 2',
  layout: 'sidebar',
})
</script>

<template>
  <div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!--Grid column-->
      <div class="col-span-12">
        <!-- Header -->
        <BaseCard class="p-5">
          <div class="flex flex-col md:flex-row items-center">
            <div
              class="flex flex-col items-center md:items-start ltablet:flex-row ltablet:items-center lg:flex-row lg:items-center gap-4 text-center md:text-left"
            >
              <BaseAvatar
                src="/img/avatars/2.svg"
                size="xl"
                badgeSrc="/img/icons/flags/united-states-of-america.svg"
              />
              <div class="text-center md:text-left">
                <BaseHeading
                  as="h2"
                  size="xl"
                  weight="light"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>Welcome back, Maya</span>
                </BaseHeading>
                <BaseParagraph>
                  <span class="text-muted-400">
                    It's nice to see you again
                  </span>
                </BaseParagraph>
              </div>
            </div>

            <div
              class="flex flex-col ltablet:flex-row ltablet:items-center lg:flex-row lg:items-center gap-6 ml-auto text-center md:text-left"
            >
              <div class="flex-1">
                <BaseHeading
                  as="h3"
                  size="3xl"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span
                    >31 <small class="text-base font-medium">Tasks</small></span
                  >
                </BaseHeading>
                <BaseParagraph>
                  <span class="text-sm text-muted-400">
                    Are currently pending
                  </span>
                </BaseParagraph>
              </div>
              <BaseCard
                class="relative flex-1 flex items-center justify-center p-5 bg-gradient-to-br from-primary-600 to-primary-700 shadow-xl shadow-primary-500/20"
              >
                <div class="relative flex flex-col gap-3 z-20">
                  <BaseParagraph size="sm">
                    <span class="text-white/80">
                      Start using our team and project management tools
                    </span>
                  </BaseParagraph>
                  <NuxtLink
                    class="font-sans text-white text-sm hover:underline underline-offset-4"
                    to="/"
                    >Learn More</NuxtLink
                  >
                </div>
                <div
                  class="absolute bottom-0 right-2 w-14 h-14 flex items-center justify-center z-10"
                >
                  <Icon
                    name="ph:crown-duotone"
                    class="w-10 h-10 text-primary-900/50"
                  ></Icon>
                </div>
              </BaseCard>
            </div>
          </div>
        </BaseCard>
      </div>
      <!--Grid column-->
      <div class="col-span-12 ltablet:col-span-8 lg:col-span-8">
        <!-- Inner grid -->
        <div class="flex flex-col gap-6">
          <!-- Project list widget -->
          <BaseCard class="p-6">
            <div class="flex items-center justify-between mb-8">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Current Projects</span>
              </BaseHeading>
              <RouterLink
                to="/"
                class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
                >View All</RouterLink
              >
            </div>
            <WidgetProjectListCompact />
          </BaseCard>
          <!-- Chart -->
          <BaseCard class="p-6">
            <div class="flex items-center justify-between mb-6">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Completion</span>
              </BaseHeading>
              <RouterLink
                to="/"
                class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
                >Reports</RouterLink
              >
            </div>
            <ExampleApexchartAreaTaskCompletion />
          </BaseCard>
          <!-- Chart -->
          <BaseCard class="p-6">
            <div class="flex items-center justify-between mb-6">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Team Efficiency</span>
              </BaseHeading>
              <RouterLink
                to="/"
                class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
                >Reports</RouterLink
              >
            </div>
            <ExampleApexchartBarTeamEfficiency />
          </BaseCard>
        </div>
      </div>
      <!--Grid column-->
      <div class="col-span-12 ltablet:col-span-4 lg:col-span-4">
        <!-- Inner grid -->
        <div class="grid ptablet:grid-cols-2 lg:flex lg:flex-col gap-6">
          <!-- Widget -->
          <BaseCard class="p-6">
            <!-- Title -->
            <div class="flex items-center justify-between mb-8">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>My Team</span>
              </BaseHeading>
              <RouterLink
                to="/"
                class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
                >View All</RouterLink
              >
            </div>
            <WidgetTeamListCompact />
          </BaseCard>
          <!-- Widget -->
          <BaseCard class="p-6">
            <!-- Title -->
            <div class="flex items-center justify-between mb-8">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Todo Today</span>
              </BaseHeading>
              <RouterLink
                to="/"
                class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
                >View All</RouterLink
              >
            </div>
            <WidgetTodoListCompact />
          </BaseCard>
          <!-- Widget -->
          <BaseCard class="p-6">
            <WidgetPlaceholderCompact>
              <template #image>
                <NuxtImg
                  src="/img/illustrations/placeholders/flat/chart-guy.svg"
                  class="w-full block dark:hidden"
                  width="225"
                  height="150"
                  alt="Placeholder illustration"
                />
                <NuxtImg
                  src="/img/illustrations/placeholders/flat/chart-guy-dark.svg"
                  class="w-full hidden dark:block"
                  width="225"
                  height="150"
                  alt="Placeholder illustration"
                />
              </template>
              <BaseHeading
                as="h4"
                size="lg"
                weight="light"
                lead="tight"
                class="mb-1 text-muted-800 dark:text-white"
              >
                <span>Pro Freatures</span>
              </BaseHeading>
              <BaseParagraph size="sm">
                <span class="text-muted-400">
                  Unlock more features and business tools by subscribing to a
                  premium plan
                </span>
              </BaseParagraph>
              <template #action>
                <BaseButton color="primary" shape="rounded" class="w-full">
                  <span>Upgrade to Pro</span>
                </BaseButton>
              </template>
            </WidgetPlaceholderCompact>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
