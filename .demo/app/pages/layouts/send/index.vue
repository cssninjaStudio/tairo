<script setup lang="ts">
import type { PaymentSend, StepData } from '../../../types'

definePageMeta({
  preview: {
    title: 'Send - Step 1',
    description: 'For sending payments to people',
    categories: ['layouts', 'wizards', 'forms'],
    src: '/img/screens/layouts-send.png',
    srcDark: '/img/screens/layouts-send-dark.png',
    order: 18,
    new: true,
  },
})
useHead({
  title: 'Recipient',
})

const {
  data: request,
  currentStepId,
  loading,
  errors,
  getPrevStep,
  steps,
  checkPreviousSteps,
} = useMultiStepForm<PaymentSend, StepData>()

onBeforeMount(checkPreviousSteps)
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
        {{ steps[currentStepId].meta.title }}
      </BaseHeading>
      <BaseParagraph
        size="sm"
        class="text-muted-500 dark:text-muted-400 max-w-sm"
      >
        {{ steps[currentStepId].meta.subtitle }}
      </BaseParagraph>
    </div>

    <div class="relative max-w-md space-y-3">
      <BaseInput
        v-model="request.recipient.name"
        v-focus
        :error="errors.fields?.['recipient.name']"
        icon="ph:user-duotone"
        placeholder="Ex: John Doe"
        :classes="{
          input: '!p-4 !ps-12 !h-12',
          icon: '!h-12 !w-12',
        }"
      />

      <div class="flex gap-2">
        <BaseButton
          v-if="currentStepId > 0"
          :to="loading ? undefined : getPrevStep()?.to"
          :disabled="!getPrevStep()"
          size="lg"
          class="w-full"
        >
          <span>Previous</span>
        </BaseButton>
        <BaseButton
          type="submit"
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
