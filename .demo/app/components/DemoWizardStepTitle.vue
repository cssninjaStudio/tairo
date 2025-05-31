<script setup lang="ts">
import type { Project, ProjectStepData } from '../types'

const { currentStep } = useMultiStepForm<Project, ProjectStepData>()
</script>

<template>
  <div class="mb-10 text-center">
    <BaseHeading
      tag="h1"
      size="2xl"
      weight="medium"
      class="text-muted-900 dark:text-white"
    >
      <span>{{ currentStep?.meta?.title }}</span>
    </BaseHeading>
    <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
      <span>{{ currentStep?.meta?.subtitle }}</span>
    </BaseParagraph>
  </div>
</template>
