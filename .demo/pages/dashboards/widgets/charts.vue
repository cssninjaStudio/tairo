<script setup lang="ts">
definePageMeta({
  title: 'Apex Charts',
  layout: 'sidebar',
})
</script>

<template>
  <div>
    <div class="grid grid-cols-2 gap-6">
      <!-- Chart -->
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
              <span>Line Chart</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoLine />
        </BaseCard>
      </div>
      <!-- Chart -->
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
              <span>Line Chart</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoMultiLine />
        </BaseCard>
      </div>
      <!-- Chart -->
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
              <span>Stepline Chart</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoStepline />
        </BaseCard>
      </div>
      <!-- Chart -->
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
              <span>Area Chart</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoArea />
        </BaseCard>
      </div>
      <!-- Chart -->
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
              <span>Multiple Area</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoAreaMultiple />
        </BaseCard>
      </div>
      <!-- Chart -->
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
              <span>Multiple Areas</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoAreasMultiple />
        </BaseCard>
      </div>
      <!-- Chart -->
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
              <span>Bar Chart</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoBar />
        </BaseCard>
      </div>
      <!-- Chart -->
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
              <span>Multiple Bars</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoBarMultiple />
        </BaseCard>
      </div>
      <!-- Chart -->
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
              <span>Stacked Bars</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoBarStacked />
        </BaseCard>
      </div>
      <!-- Chart -->
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
              <span>Range Column</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoBarRange />
        </BaseCard>
      </div>
      <!-- Chart -->
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
              <span>Horizontal Bar</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoBarHorizontal />
        </BaseCard>
      </div>
      <!-- Chart -->
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
              <span>Horizontal Multiple</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoBarHorizontalMultiple />
        </BaseCard>
      </div>
      <!-- Chart -->
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
              <span>Timeline Chart</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoTimeline />
        </BaseCard>
      </div>
      <!-- Chart -->
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
              <span>Bubble Chart</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoBubble />
        </BaseCard>
      </div>
      <!-- Chart -->
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
              <span>Scatter Chart</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoScatter />
        </BaseCard>
      </div>
      <!-- Chart -->
      <div class="relative">
        <BaseCard class="p-6">
          <ExampleApexchartDemoPie />
        </BaseCard>
      </div>
      <!-- Chart -->
      <div class="relative">
        <BaseCard class="p-6">
          <ExampleApexchartDemoDonut />
        </BaseCard>
      </div>
      <!-- Chart -->
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
              <span>Radial Bar</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoRadialBar />
        </BaseCard>
      </div>
      <!-- Chart -->
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
          <ExampleApexchartDemoRadialMultiple />
        </BaseCard>
      </div>
      <!-- Chart -->
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
              <span>Radial Gauge</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoRadialGauge />
        </BaseCard>
      </div>
      <!-- Chart -->
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
              <span>Gauge Chart</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoGauge />
        </BaseCard>
      </div>
      <!-- Chart -->
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
              <span>Radar Chart</span>
            </BaseHeading>
          </div>
          <ExampleApexchartDemoRadar />
        </BaseCard>
      </div>
    </div>
  </div>
</template>
