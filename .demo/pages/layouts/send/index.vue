<script setup lang="ts">
import type { PaymentSend, StepData } from '../../../types'

definePageMeta({
  title: 'Send - Step 1',
  layout: 'empty',
  preview: {
    title: 'Send - Step 1',
    description: 'For sending payments to people',
    categories: ['layouts', 'wizards', 'forms'],
    src: '/img/screens/wizards-send-1.png',
    srcDark: '/img/screens/wizards-send-1-dark.png',
    order: 18,
  },
})

const {
  data: request,
  totalSteps,
  currentStep,
  loading,
  complete,
  getNextStep,
  getPrevStep,
  steps,
} = useStepperForm<PaymentSend, StepData>()
useHead({
  title: 'Recipient',
})
</script>

<template>
  <div class="w-full">
    <div class="mb-8 space-y-2">
      <BaseHeading
        as="h2"
        size="2xl"
        weight="medium"
        class="md:!3xl text-muted-800 dark:text-white"
      >
        {{ steps[currentStep].meta.title }}
      </BaseHeading>
      <BaseParagraph
        size="sm"
        class="text-muted-500 dark:text-muted-400 max-w-sm"
      >
        {{ steps[currentStep].meta.subtitle }}
      </BaseParagraph>
    </div>

    <div class="relative max-w-md space-y-3">
      <BaseInput
        v-model="request.recipient.name"
        icon="ph:user-duotone"
        placeholder="Ex: John Doe"
        :classes="{
          input: '!p-4 !ps-12 !h-12',
          icon: '!h-12 !w-12',
        }"
      />

      <div class="flex gap-2">
        <BaseButton
          v-if="currentStep > 0"
          :to="loading ? undefined : getPrevStep()?.to"
          :disabled="!getPrevStep()"
          size="lg"
          class="w-full"
        >
          <span>Previous</span>
        </BaseButton>
        <BaseButton
          :to="getNextStep()?.to"
          :disabled="!getNextStep()"
          color="primary"
          size="lg"
          class="w-full"
        >
          <span>Continue</span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
