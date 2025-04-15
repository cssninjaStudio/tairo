<script setup lang="ts">
definePageMeta({
  title: 'Dashboard',
  preview: {
    title: 'Balance dashboard',
    description: 'For bank account overview',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-balance.png',
    srcDark: '/img/screens/dashboards-balance-dark.png',
    order: 5,
    new: true,
  },
})

const showFeatures = ref(true)

// Datepicker
const date = ref(new Date())
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 lg:col-span-9">
        <Transition
          leave-active-class="transition origin-top duration-75 ease-in"
          leave-from-class="transform scale-y-100 opacity-100"
          leave-to-class="transform scale-y-0 opacity-0"
        >
          <div v-if="showFeatures" class="w-full pb-4">
            <!-- Features widget -->
            <DemoWidgetFeatures>
              <template #actions>
                <BaseButton
                  size="icon-sm"
                  variant="muted"
                  data-nui-tooltip="Hide this"
                  @click="showFeatures = false"
                >
                  <Icon name="lucide:x" class="size-4" />
                </BaseButton>
              </template>
            </DemoWidgetFeatures>
          </div>
        </Transition>
        <div class="grid grid-cols-12 gap-4">
          <!-- Grid item -->
          <div class="col-span-12 md:col-span-5">
            <!-- Welcome widget -->
            <DemoWidgetWelcome />
          </div>
          <div class="col-span-12 md:col-span-7">
            <!-- Account balance widget -->
            <DemoWidgetAccountBalance />
          </div>
          <div class="col-span-12 md:col-span-6">
            <!-- Money out widget -->
            <DemoWidgetMoneyOut />
          </div>
          <div class="col-span-12 md:col-span-6">
            <!-- Money in widget -->
            <DemoWidgetMoneyIn />
          </div>
          <div class="col-span-12 md:col-span-12">
            <!-- Transactions widget -->
            <DemoWidgetTransactionSummary />
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-3">
        <!-- Column -->
        <div class="relative flex flex-col gap-4">
          <!-- Widget -->
          <DemoActionText
            title="Upgrade to Pro"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid censes in Latino fore? Nam ante Aristippus, et ille melius."
            label="Upgrade Now"
            to="#"
            rounded="md"
          />
          <!-- Widget -->
          <BaseCard rounded="md" class="flex flex-col p-6">
            <div class="mb-6 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="sm"
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
          <!-- Widget -->
          <BaseCard rounded="md" class="p-2">
            <LazyAddonDatepicker v-model="date" locale="en" label="Start date" />
          </BaseCard>
          <!-- Widget -->
          <BaseCard class="p-4 md:p-6" rounded="md">
            <DemoNotificationsCompact />
          </BaseCard>
          <!-- Widget -->
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
