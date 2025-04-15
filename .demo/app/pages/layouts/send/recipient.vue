<script setup lang="ts">
import type { PaymentSend, StepData } from '~/types'

definePageMeta({
  preview: {
    title: 'Send - Step 3',
    description: 'For sending payments to people',
    categories: ['layouts', 'wizards', 'forms'],
    src: '/img/screens/layouts-send-recipient.png',
    srcDark: '/img/screens/layouts-send-recipient-dark.png',
    order: 20,
    new: true,
  },
})
useHead({
  title: 'Details',
})

const {
  data: request,
  currentStepId,
  loading,
  getPrevStep,
  errors,
  steps,
  checkPreviousSteps,
} = useMultiStepForm<PaymentSend, StepData>()

onBeforeMount(checkPreviousSteps)
</script>

<template>
  <div class="w-full dark:[--color-input-default-bg:var(--color-muted-950)]">
    <div class="mb-8 space-y-2">
      <BaseHeading
        as="h2"
        size="2xl"
        weight="medium"
        class="md:3xl! text-muted-900 dark:text-white"
      >
        {{ steps[currentStepId]?.meta.title }}
      </BaseHeading>
      <BaseParagraph
        size="sm"
        class="text-muted-500 dark:text-muted-400 max-w-sm"
      >
        {{ steps[currentStepId]?.meta.subtitle }}
      </BaseParagraph>
    </div>

    <div class="w-full max-w-md">
      <div class="mb-4">
        <!-- Grid -->
        <div class="grid gap-4 md:grid-cols-2">
          <BaseField
            label="Recipient Name"
            :error="errors.fields?.['recipient.name']"
            class="col-span-2"
          >
            <TairoInput
              :model-value="request.recipient.name"
              icon="solar:user-rounded-linear"
              placeholder="Ex: John Doe"
              readonly
            />
          </BaseField>
          <BaseField
            label="Routing Number"
            :error="errors.fields.routingNumber"
            required
          >
            <BaseInput
              v-model="request.routingNumber"
              v-focus
              placeholder="Ex: 183402022"
            />
          </BaseField>
          <BaseField
            label="Prefix"
            :error="errors.fields.prefix"
          >
            <BaseInput
              v-model="request.prefix"
              placeholder="Ex: XCQ23"
            />
          </BaseField>
        </div>
      </div>

      <div class="flex gap-4">
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
          variant="primary"
          size="lg"
          class="w-full"
        >
          <span>Continue</span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
