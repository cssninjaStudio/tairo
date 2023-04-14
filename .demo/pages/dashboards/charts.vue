<script setup lang="ts">
definePageMeta({
  title: 'Apex Charts',
})
</script>

<template>
  <div>
    <div class="grid grid-cols-2 gap-6">
      <DemoChartLine />
      <DemoChartLineMulti />
      <DemoChartLineStep />
      <DemoChartArea />
      <DemoChartAreaMulti />
      <!-- <DemoChartAreaMultiAlt /> -->
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
