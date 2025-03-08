<script setup lang="ts">
definePageMeta({
  title: 'Apex Charts',
  preview: {
    title: 'Chart examples',
    description: 'For data visualization',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-charts.png',
    srcDark: '/img/screens/dashboards-charts-dark.png',
    order: 26,
  },
})
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3">
      <DemoChartLine />
      <DemoChartLineMulti />
      <DemoChartLineStep />
      <DemoChartArea />
      <DemoChartAreaMulti />
      <DemoChartBar />
      <DemoChartBarMulti />
      <DemoChartBarStacked />
      <DemoChartBarRange />
      <DemoChartBarHorizontal />
      <DemoChartBarHorizontalMulti />
      <DemoChartBubble />
      <DemoChartTimeline class="2xl:col-span-2" />
      <DemoChartScatter />
      <DemoChartPie />
      <DemoChartDonut />
      <DemoChartRadial />
      <DemoChartRadialMulti />
      <DemoChartRadialGauge />
      <DemoChartRadialGaugeAlt />
    </div>
  </div>
</template>
