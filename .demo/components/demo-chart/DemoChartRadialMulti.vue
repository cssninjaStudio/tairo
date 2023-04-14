<script setup lang="ts">
const demoRadialMulti = reactive(useDemoRadialMulti())

function useDemoRadialMulti() {
  const { primary, info, success, danger } = useTailwindColors()
  const height = 295
  const type = 'radialBar'

  const options = {
    title: {
      text: '',
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value, success.value, info.value, danger.value],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
            offsetY: 5,
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (/* value: string */) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249
            },
          },
        },
      },
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  }

  const series = ref([44, 55, 67, 83])

  return {
    type,
    height,
    options,
    series,
  }
}
</script>

<template>
  <div class="relative">
    <BaseCard class="p-6">
      <!-- Title -->
      <div class="mb-6">
        <BaseHeading
          as="h3"
          size="md"
          weight="semibold"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>Radial Multiple</span>
        </BaseHeading>
      </div>
      <AddonApexcharts v-bind="demoRadialMulti" />
    </BaseCard>
  </div>
</template>
