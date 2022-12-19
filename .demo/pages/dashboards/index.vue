<script setup lang="ts">
definePageMeta({
  title: 'Personal 1',
  layout:'sidebar',
})
</script>

<template>
  <div>
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between mb-8">
      <div
        class="flex flex-col md:flex-row items-center gap-4 text-center md:text-left max-w-[425px] ltablet:max-w-full lg:max-w-full"
      >
        <BaseAvatar src="/img/avatars/2.svg" size="lg" />
        <div>
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
            <span class="text-muted-500">
              Happy to see you again on your dashboard.
            </span>
          </BaseParagraph>
        </div>
      </div>
      <div
        class="flex items-center justify-center md:justify-start gap-2 mt-4 md:mt-0"
      >
        <BaseButton>
          <span>View Reports</span>
        </BaseButton>
        <BaseButton color="primary">
          <span>Manage Store</span>
        </BaseButton>
      </div>
    </div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Quick stats -->
      <div class="col-span-12 ltablet:col-span-6 lg:col-span-6">
        <BaseCard class="p-6">
          <div class="mb-6">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Your Quick Stats</span>
            </BaseHeading>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <!-- Grid item -->
            <div
              class="flex items-center gap-2 py-10 px-5 rounded-md bg-muted-100/80 dark:bg-muted-700"
            >
              <BaseIconBox
                size="md"
                class="bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-2 dark:border-primary-500"
                shape="circle"
              >
                <Icon name="ph:nut-duotone" class="w-5 h-5" />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h2"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>2,870</span>
                </BaseHeading>
                <BaseParagraph size="sm">
                  <span class="text-muted-500 dark:text-muted-400">
                    Sales this month
                  </span>
                </BaseParagraph>
              </div>
            </div>
            <!-- Grid item -->
            <div
              class="flex items-center gap-2 py-10 px-5 rounded-md bg-muted-100/80 dark:bg-muted-700"
            >
              <BaseIconBox
                size="md"
                class="bg-amber-100 text-amber-500 dark:bg-amber-500/20 dark:text-amber-400 dark:border-2 dark:border-amber-500"
                shape="circle"
              >
                <Icon name="ph:handshake-duotone" class="w-5 h-5" />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h2"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>159</span>
                </BaseHeading>
                <BaseParagraph size="sm">
                  <span class="text-muted-500 dark:text-muted-400">
                    New users
                  </span>
                </BaseParagraph>
              </div>
            </div>
            <!-- Grid item -->
            <div
              class="flex items-center gap-2 py-10 px-5 rounded-md bg-muted-100/80 dark:bg-muted-700"
            >
              <BaseIconBox
                size="md"
                class="bg-green-100 text-green-500 dark:bg-green-500/20 dark:text-green-400 dark:border-2 dark:border-green-500"
                shape="circle"
              >
                <Icon name="ph:sketch-logo-duotone" class="w-5 h-5" />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h2"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>$429.18</span>
                </BaseHeading>
                <BaseParagraph size="sm">
                  <span class="text-muted-500 dark:text-muted-400">
                    Earned today
                  </span>
                </BaseParagraph>
              </div>
            </div>
            <!-- Grid item -->
            <div
              class="flex items-center gap-2 py-10 px-5 rounded-md bg-muted-100/80 dark:bg-muted-700"
            >
              <BaseIconBox
                size="md"
                class="bg-indigo-100 text-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-400 dark:border-2 dark:border-indigo-500"
                shape="circle"
              >
                <Icon name="ph:sketch-logo-duotone" class="w-5 h-5" />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h2"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>$6816.32</span>
                </BaseHeading>
                <BaseParagraph size="sm">
                  <span class="text-muted-500 dark:text-muted-400">
                    Total balance
                  </span>
                </BaseParagraph>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Area Chart card -->
      <div class="col-span-12 ltablet:col-span-6 lg:col-span-6">
        <BaseCard class="p-6">
          <ExampleApexchartAreaCustomer />
        </BaseCard>
      </div>
      <!-- CTA card -->
      <div class="col-span-12 ptablet:col-span-6 ltablet:col-span-4 lg:col-span-4">
        <BaseCard class="relative h-full flex items-center justify-center p-6 bg-gradient-to-br from-primary-600 to-primary-700">
          <div class="relative flex flex-col gap-3 py-10 text-center z-20">
            <BaseHeading
              as="h4"
              size="lg"
              weight="semibold"
              lead="tight"
              class="text-white"
            >
              <span>Hey Maya, you're doing great.</span>
            </BaseHeading>
            <BaseParagraph size="md">
              <span class="text-white/80">
                Start using our team and project management tools
              </span>
            </BaseParagraph>
            <NuxtLink
              class="font-sans text-white hover:underline underline-offset-4"
              to="/"
              >Learn More</NuxtLink
            >
          </div>
          <div
            class="absolute bottom-4 right-4 w-14 h-14 flex items-center justify-center z-10"
          >
            <Icon
              name="ph:crown-duotone"
              class="w-14 h-14 text-primary-900/50"
            ></Icon>
          </div>
        </BaseCard>
      </div>
      <!-- Radial Bar card -->
      <div
        class="col-span-12 ptablet:col-span-6 ltablet:col-span-4 lg:col-span-4"
      >
        <BaseCard class="relative p-6">
          <ExampleApexchartRadialBarTeam />
        </BaseCard>
      </div>
      <!-- Bar chart card -->
      <div class="col-span-12 ltablet:col-span-4 lg:col-span-4">
        <BaseCard class="relative p-6">
          <ExampleApexchartBarProfit />
        </BaseCard>
      </div>
    </div>
  </div>
</template>
