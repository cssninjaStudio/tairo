<script setup lang="ts">
import type { Project, ProjectStepData } from '../types'
const { steps, currentStep } = useMultiStepForm<Project, ProjectStepData>()

const currentStepData = computed(() => {
  const stepData = steps.value.find((step) => step.id === currentStep.value)
  return stepData
})
</script>

<template>
  <div class="text-center mb-10">
    <BaseHeading tag="h1" size="2xl" class="text-muted-800 dark:text-white">
      <span>{{ currentStepData?.data?.title }}</span>
    </BaseHeading>
    <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
      <span>{{ currentStepData?.data?.subtitle }}</span>
    </BaseParagraph>
  </div>
</template>
