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
  <div>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
      <DemoChartTimeline />
      <DemoChartBubble />
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
