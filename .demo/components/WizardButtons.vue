<script setup lang="ts">
const {
  totalSteps,
  currentStep,
  loading,
  complete,
  nextStep,
  prevStep,
  completeWizard,
} = useWizardContext()
</script>

<template>
  <div class="fixed bottom-6 inset-x-0 w-full max-w-[304px] mx-auto z-40">
    <BaseCard
      class="p-4 flex items-center justify-between gap-2 rounded-2xl shadow-xl shadow-muted-300/30 dark:shadow-muted-800/30 transition-all duration-300"
      :class="[
        currentStep > 1
          ? 'translate-y-0 opacity-100'
          : 'translate-y-20 opacity-0 pointer-events-none',
        complete
          ? 'translate-y-20 opacity-0 pointer-events-none'
          : 'translate-y-0 opacity-100',
      ]"
    >
      <BaseButton
        :to="currentStep < 2 ? '/wizard' : `/wizard/step-${currentStep - 1}`"
        shape="curved"
        class="w-full"
        @click.native="prevStep"
      >
        <span>Previous</span>
      </BaseButton>
      <BaseButton
        v-if="currentStep < totalSteps"
        :to="`/wizard/step-${currentStep <= 7 ? currentStep + 1 : 7}`"
        shape="curved"
        color="primary"
        class="w-full"
        @click.native="nextStep"
      >
        <span>Continue</span>
      </BaseButton>
      <BaseButton
        v-else
        shape="curved"
        color="primary"
        class="w-full"
        :loading="loading"
        @click="completeWizard"
      >
        <span>Finish</span>
      </BaseButton>
    </BaseCard>
  </div>
</template>
