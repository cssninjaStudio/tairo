<script setup lang="ts">
/* const chartOptions = {
  chart: {
    id: 'vuechart-example',
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
};
const series = [
  {
    name: 'series-1',
    data: [30, 40, 35, 50, 49, 60, 70, 91],
  },
]; */
</script>

<template>
  <div>
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div class="flex items-center gap-2">
        <BaseAvatar src="/img/avatars/2.svg" size="lg" />
        <div>
          <BaseHeading
          as="h2"
          size="xl"
          weight="semibold"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>Welcome back, Maya</span>
        </BaseHeading>
        <BaseParagraph size="base">
          <span class="text-muted-500">
            We're very happy to see you again on your personal dashboard.
          </span>
        </BaseParagraph>
        </div>
      </div>
      <div class="flex items-center gap-2">
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
      <div class="col-span-6">
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
          <div class="grid grid-cols-2 gap-4">
            <!-- Grid item -->
            <div class="flex items-center gap-2 py-8 px-5 rounded-md bg-muted-100/80 dark:bg-muted-700">
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
            <div class="flex items-center gap-2 py-8 px-5 rounded-md bg-muted-100/80 dark:bg-muted-700">
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
            <div class="flex items-center gap-2 py-8 px-5 rounded-md bg-muted-100/80 dark:bg-muted-700">
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
            <div class="flex items-center gap-2 py-8 px-5 rounded-md bg-muted-100/80 dark:bg-muted-700">
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
      <!-- Chart -->
      <div class="col-span-6">
        <BaseCard class="p-6">
          <div class="mb-6">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>Customers</span>
            </BaseHeading>
          </div>
          <ClientOnly>
            <!--apexchart
              width="500"
              type="bar"
              :options="chartOptions"
              :series="series"
            ></apexchart-->
          </ClientOnly>
        </BaseCard>
      </div>
    </div>
  </div>
</template>