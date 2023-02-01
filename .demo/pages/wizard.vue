<script setup lang="ts">
const {
  steps,
  totalSteps,
  currentStep,
  progress,
  project,
  nextStep,
  prevStep,
} = createWizardContext()

useHead({
  titleTemplate: (title) => `${title} | Wizard - Step ${currentStep.value}`,
})
</script>

<template>
  <div class="bg-muted-100 dark:bg-muted-900 min-h-screen w-full">
    <WizardNavigation />
    <div class="pt-24">
      <NuxtPage />
    </div>
    <WizardButtons />
  </div>
</template>
