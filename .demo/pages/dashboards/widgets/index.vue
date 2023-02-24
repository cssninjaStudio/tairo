<script setup lang="ts">
definePageMeta({
  title: 'UI Widgets',
  layout: 'sidebar',
})

const gaugePersonal = reactive(useGaugePersonal())

function useGaugePersonal() {
  const { primary } = useTailwindColors()
  const type = 'radialBar'
  const height = 220

  const options = {
    title: {
      text: undefined,
    },
    chart: {
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#e7e7e7',
          strokeWidth: '97%',
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: false,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2,
          },
        },
        hollow: {
          margin: 0,
          size: '35%',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '22px',
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ['Average Results'],
  }

  const series = ref([76])

  return {
    type,
    height,
    options,
    series,
  }
}
</script>

<template>
  <div class="grid sm:grid-cols-4 ptablet:grid-cols-2 gap-4">
    <!-- Column -->
    <div class="relative flex flex-col gap-4">
      <!-- Widget -->
      <BaseCard shape="curved" class="flex flex-col p-6">
        <div class="flex items-center justify-between mb-6">
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
          <TairoApexcharts v-bind="gaugePersonal" class="-mt-14" />
        </div>
        <div class="text-center mt-auto">
          <BaseParagraph size="sm">
            <span class="text-muted-400">
              Your score has been calculated based on the latest metrics
            </span>
          </BaseParagraph>
        </div>
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <WidgetFollowersCompact />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <div class="w-full flex items-center justify-between">
          <WidgetSearchCompact shape="curved" />
        </div>
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-3">
        <WidgetVideoCompact shape="curved" />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <WidgetTagListCompact shape="curved" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative flex flex-col gap-4">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-4">
        <WidgetIconLinks shape="curved" />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-4">
        <WidgetDaysSquare shape="curved" />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <WidgetDatepicker expanded />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-4">
        <WidgetMenuIconList shape="curved" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative flex flex-col gap-4">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <WidgetIconText
          title="Payment"
          icon="lucide:bell"
          text="You have an upcoming payment for your recurring subscription fee due on Sept 20, 2020. Check your billing details."
          indicator
        />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-3">
        <WidgetPicture
          src="/img/illustrations/widgets/mountain-picture.svg"
          alt="Picture widget image description"
          shape="curved"
          :height="286"
          :width="212"
          loading
        />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <WidgetInboxMessage
          picture="/img/avatars/10.svg"
          name="Kendra W."
          title="Design Project"
          text="Where are we in terms of design? We need to review the new screens."
          time="28 minutes"
          shape="curved"
        />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative flex flex-col gap-4">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <div class="flex items-center justify-between mb-6">
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Popular topics</span>
          </BaseHeading>
        </div>
        <WidgetTagListCompact shape="curved" />
      </BaseCard>
      <!-- Widget -->
      <BaseCard class="p-6" shape="curved">
        <WidgetNotificationsCompact />
      </BaseCard>
      <!-- Widget -->
      <WidgetActionText
        title="Upgrade to Pro"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid censes in Latino fore? Nam ante Aristippus, et ille melius."
        label="Upgrade Now"
        to="#/"
        shape="curved"
      />
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <WidgetIconText
          title="Messages"
          icon="lucide:message-square"
          text="You currently have more than 10 unread messages in your inbox. It could be a good time to check them out."
          indicator
        />
      </BaseCard>
    </div>
  </div>
</template>
