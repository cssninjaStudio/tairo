<script setup lang="ts">
import type { Project, ProjectStepData } from '../types'
const { steps, currentStep } = useMultiStepForm<Project, ProjectStepData>()

const currentStepData = computed(() => {
  return steps.value.find((step) => step.id === currentStep.value)
})
</script>

<template>
  <div class="mb-10 text-center">
    <BaseHeading tag="h1" size="2xl" class="text-muted-800 dark:text-white">
      <span>{{ currentStepData?.meta?.title }}</span>
    </BaseHeading>
    <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
      <span>{{ currentStepData?.meta?.subtitle }}</span>
    </BaseParagraph>
  </div>
</template>
