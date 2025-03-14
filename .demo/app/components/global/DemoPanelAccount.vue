<script setup lang="ts">
import { defineApexchartsProps } from '~/components/AddonApexcharts.vue'

const props = withDefaults(
  defineProps<{
    account?: any
  }>(),
  {
    account: undefined,
  },
)

const { close } = usePanels()
onKeyStroke('Escape', close)

const demoAreaBalance = reactive(useDemoAreaBalance())

function useDemoAreaBalance() {
  const series = shallowRef(props.account.history)

  return defineApexchartsProps({
    type: 'area',
    height: 250,
    series,
    options: {
      chart: {
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [2, 2, 2],
        curve: 'smooth',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          gradientToColors: ['var(--color-chart-gradient)'],
          shadeIntensity: 0,
          opacityFrom: 0.6,
          opacityTo: 0.75,
        },
      },
      colors: ['var(--color-chart-base)'],
      legend: {
        show: false,
        position: 'top',
      },
      grid: {
        show: false,
        padding: {
          left: -10,
          right: 0,
          bottom: 10,
        },
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2022-09-19T00:00:00.000Z',
          '2022-09-20T01:30:00.000Z',
          '2022-09-21T02:30:00.000Z',
          '2022-09-22T03:30:00.000Z',
          '2022-09-23T04:30:00.000Z',
          '2022-09-24T05:30:00.000Z',
          '2022-09-25T06:30:00.000Z',
        ],
      },
      yaxis: {
        labels: {
          show: false,
          offsetX: -15,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
        y: {
          formatter: value => formatPrice(value),
        },
      },
    },
  })
}
</script>

<template>
  <FocusScope class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 border-l bg-white" trapped loop>
    <div
      class="border-muted-200 dark:border-muted-700 flex h-20 w-full items-center justify-between border-b px-6"
    >
      <BaseHeading
        as="h3"
        size="xs"
        weight="semibold"
        class="text-muted-500 dark:text-muted-100 uppercase"
      >
        Account Details
      </BaseHeading>

      <!-- Close button -->
      <button
        type="button"
        class="nui-mask nui-mask-blob hover:bg-muted-100 focus:bg-muted-100 dark:hover:bg-muted-700 dark:focus:bg-muted-700 text-muted-700 dark:text-muted-400 flex size-10 cursor-pointer items-center justify-center outline-transparent transition-colors duration-300"
        @click="close"
      >
        <Icon name="lucide:arrow-right" class="size-4" />
      </button>
    </div>
    <div
      class="nui-slimscroll relative h-[calc(100dvh_-_5rem)] w-full overflow-y-auto overflow-x-hidden p-6"
    >
      <!-- Info -->
      <div class="flex items-center justify-between">
        <div>
          <BaseHeading
            as="h4"
            size="lg"
            weight="medium"
            class="text-muted-900 dark:text-muted-100 capitalize"
          >
            {{ props.account.type }} {{ props.account.number }}
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
            {{ account.owner.name }}
          </BaseParagraph>
        </div>
        <!-- Balance -->
        <div class="py-6 pe-4 text-end">
          <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400 mb-1">
            Account balance
          </BaseParagraph>
          <BaseParagraph
            size="2xl"
            weight="medium"
            class="text-muted-900 dark:text-muted-100 mb-1"
          >
            ${{ account.balance.toFixed(2) }}
          </BaseParagraph>
        </div>
      </div>
      <!-- Content -->
      <div class="space-y-4 py-6 pe-4">
        <!-- Item -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="bg-muted-500 size-2 rounded-full" />
            <BaseParagraph size="sm" class="text-muted-700 dark:text-muted-400">
              Routing number
            </BaseParagraph>
            <BaseTooltip content="The wire routing number">
              <Icon name="lucide:help-circle" class="text-muted-400 size-3" />
            </BaseTooltip>
          </div>
          <BaseText
            size="sm"
            weight="medium"
            class="text-muted-800 dark:text-muted-100"
          >
            {{ account.details.routingNumber }}
          </BaseText>
        </div>
        <!-- Item -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="bg-muted-500 size-2 rounded-full" />
            <BaseParagraph size="sm" class="text-muted-700 dark:text-muted-400">
              Account number
            </BaseParagraph>
            <BaseTooltip content="Your full account number">
              <Icon name="lucide:help-circle" class="text-muted-400 size-3" />
            </BaseTooltip>
          </div>
          <BaseText
            size="sm"
            weight="medium"
            class="text-muted-800 dark:text-muted-100"
          >
            {{ account.details.accountNumber }}
          </BaseText>
        </div>
        <!-- Item -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="bg-muted-300 size-2 rounded-full" />
            <BaseParagraph size="sm" class="text-muted-700 dark:text-muted-400">
              IBAN
            </BaseParagraph>
            <BaseTooltip content="The international identifier">
              <Icon name="lucide:help-circle" class="text-muted-400 size-3" />
            </BaseTooltip>
          </div>
          <BaseText
            size="sm"
            weight="medium"
            class="text-muted-800 dark:text-muted-100"
          >
            {{ account.details.iban }}
          </BaseText>
        </div>
        <!-- Item -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="bg-muted-200 size-2 rounded-full" />
            <BaseParagraph size="sm" class="text-muted-700 dark:text-muted-400">
              Bank code
            </BaseParagraph>
          </div>
          <BaseText
            size="sm"
            weight="medium"
            class="text-muted-800 dark:text-muted-100"
          >
            {{ account.details.bankCode }}
          </BaseText>
        </div>
      </div>

      <div class="-mt-6 p-4">
        <AddonApexcharts v-bind="demoAreaBalance" />
      </div>
    </div>
  </FocusScope>
</template>
