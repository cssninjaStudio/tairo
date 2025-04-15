<script setup lang="ts">
import { hydrateOnVisible } from 'vue'
import 'v-calendar/dist/style.css'
import '~/assets/vcalendar.css'

definePageMeta({
  title: 'UI Widgets',
  preview: {
    title: 'UI Widgets',
    description: 'For page compositions',
    categories: ['dashboards', 'widgets'],
    src: '/img/screens/dashboards-widgets-ui.png',
    srcDark: '/img/screens/dashboards-widgets-ui-dark.png',
    order: 27,
  },
})

const Calendar = defineAsyncComponent({
  loader: () => import('v-calendar').then(mod => mod.Calendar),
  hydrate: hydrateOnVisible(),
})
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <div class="grid gap-4 sm:grid-cols-4">
      <!-- Column -->
      <div class="relative flex flex-col gap-4">
        <!-- Widget -->
        <BaseCard rounded="lg" class="flex flex-col p-4 md:p-6">
          <div class="mb-6 flex items-center justify-between">
            <BaseHeading
              as="h3"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
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
        <BaseCard rounded="lg" class="p-4 md:p-6">
          <DemoFollowersCompact />
        </BaseCard>
        <!-- Widget -->
        <BaseCard rounded="lg" class="p-4 md:p-6">
          <div class="flex w-full items-center justify-between">
            <DemoSearchCompact rounded="lg" />
          </div>
        </BaseCard>
        <!-- Widget -->
        <BaseCard rounded="lg" class="p-3">
          <DemoVideoCompact rounded="lg" />
        </BaseCard>
        <!-- Widget -->
        <BaseCard rounded="lg" class="p-4 md:p-6">
          <DemoTagListCompact rounded="full" />
        </BaseCard>
      </div>
      <!-- Column -->
      <div class="relative flex flex-col gap-4">
        <!-- Widget -->
        <BaseCard rounded="lg" class="p-4 md:p-6">
          <DemoIconLinks rounded="lg" />
        </BaseCard>
        <!-- Widget -->
        <BaseCard rounded="lg" class="p-4 md:p-6">
          <DemoDaysSquare rounded="lg" />
        </BaseCard>
        <!-- Widget -->
        <BaseCard rounded="lg" class="p-2">
          <Calendar
            :attributes="[
              {
                key: 'today',
                highlight: true,
                order: 0,
                dates: [new Date()],
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
        <!-- Widget -->
        <BaseCard rounded="lg" class="p-4 md:p-6">
          <DemoMenuIconList rounded="lg" />
        </BaseCard>
      </div>
      <!-- Column -->
      <div class="relative flex flex-col gap-4">
        <!-- Widget -->
        <BaseCard rounded="lg" class="p-4 md:p-6">
          <DemoIconText
            title="Payment"
            icon="solar:bell-linear"
            text="You have an upcoming payment for your recurring subscription fee due on Sept 20, 2020. Check your billing details."
            indicator
          />
        </BaseCard>
        <!-- Widget -->
        <BaseCard rounded="lg" class="p-3">
          <DemoPicture
            src="/img/illustrations/widgets/mountain-picture.svg"
            alt="Picture widget image description"
            rounded="lg"
            :height="286"
            :width="212"
            loading
          />
        </BaseCard>
        <!-- Widget -->
        <BaseCard rounded="lg" class="p-4 md:p-6">
          <DemoInboxMessage
            picture="/img/avatars/10.svg"
            name="Kendra W."
            title="Design Project"
            text="Where are we in terms of design? We need to review the new screens."
            time="28 minutes"
            rounded="lg"
          />
        </BaseCard>
      </div>
      <!-- Column -->
      <div class="relative flex flex-col gap-4">
        <!-- Widget -->
        <BaseCard rounded="lg" class="p-4 md:p-6">
          <div class="mb-6 flex items-center justify-between">
            <BaseHeading
              as="h3"
              size="sm"
              weight="medium"
              lead="tight"
              class="text-muted-900 dark:text-white"
            >
              <span>Popular topics</span>
            </BaseHeading>
          </div>
          <DemoTagListCompact rounded="lg" />
        </BaseCard>
        <!-- Widget -->
        <BaseCard class="p-4 md:p-6" rounded="lg">
          <DemoNotificationsCompact />
        </BaseCard>
        <!-- Widget -->
        <DemoActionText
          title="Upgrade to Pro"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid censes in Latino fore? Nam ante Aristippus, et ille melius."
          label="Upgrade Now"
          to="#"
          rounded="lg"
        />
        <!-- Widget -->
        <BaseCard rounded="lg" class="p-4 md:p-6">
          <DemoIconText
            title="Messages"
            icon="lucide:message-square"
            text="You currently have more than 10 unread messages in your inbox. It could be a good time to check them out."
            indicator
          />
        </BaseCard>
      </div>
    </div>
  </div>
</template>
