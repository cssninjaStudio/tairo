<script setup lang="ts"></script>

<template>
  <BaseCard
    rounded="md"
  >
    <div class="flex flex-col gap-4 px-8 pt-8 text-center">
      <BaseHeading
        as="h4"
        size="sm"
        weight="medium"
        lead="none"
        class="text-muted-400 uppercase"
      >
        Account Balance
      </BaseHeading>
      <p>
        <span
          class="text-muted-800 font-sans text-4xl font-medium before:text-xl before:content-['$'] dark:text-white"
        >
          9,543.12
        </span>
      </p>
      <div class="flex items-center justify-center gap-x-2">
        <Icon
          name="lucide:arrow-up"
          class="iconify text-success-500 size-4"
        />
        <span class="text-muted-400 font-sans text-sm">
          $149.32 Today, Sep 25
        </span>
      </div>
    </div>
    <DemoChartAreaBalance />
  </BaseCard>
</template>
