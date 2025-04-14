<script setup lang="ts">
import type { Project, ProjectStepData } from '../types'

const {
  totalSteps,
  currentStepId,
  loading,
  complete,
  getPrevStep,
} = useMultiStepForm<Project, ProjectStepData>()
</script>

<template>
  <div>
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="translate-y-20 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition-all duration-100 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-20 opacity-0"
    >
      <div
        v-if="currentStepId > 0 && !complete"
        class="fixed inset-x-0 bottom-6 z-20 mx-auto w-full max-w-[304px]"
      >
        <BaseCard
          class="shadow-muted-300/30 dark:shadow-muted-800/30 flex items-center justify-between gap-2 rounded-2xl p-4 shadow-xl"
        >
          <BaseButton
            :to="loading ? undefined : getPrevStep()?.to"
            :disabled="!getPrevStep()"
            rounded="lg"
            class="w-full"
          >
            <span>Previous</span>
          </BaseButton>
          <BaseButton
            v-if="currentStepId < totalSteps - 1"
            type="submit"
            rounded="lg"
            variant="primary"
            class="w-full"
          >
            <span>Continue</span>
          </BaseButton>
          <BaseButton
            v-else
            type="submit"
            rounded="lg"
            variant="primary"
            class="w-full"
            :loading="loading"
            :disabled="loading"
          >
            <span>Finish</span>
          </BaseButton>
        </BaseCard>
      </div>
    </Transition>
  </div>
</template>
