<script setup lang="ts">
import type { PaymentSend, StepData } from '../../../types'

definePageMeta({
  title: 'Send - Step 3',
  layout: 'empty',
  preview: {
    title: 'Send - Step 3',
    description: 'For sending payments to people',
    categories: ['layouts', 'wizards', 'forms'],
    src: '/img/screens/layouts-send-recipient.png',
    srcDark: '/img/screens/layouts-send-recipient-dark.png',
    order: 20,
  },
})

const {
  data: request,
  currentStep,
  loading,
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

    <div class="w-full max-w-md">
      <div class="mb-4">
        <!--Grid-->
        <div class="grid gap-4 md:grid-cols-2">
          <div class="group relative col-span-2">
            <BaseInput
              v-model="request.recipient.name"
              label="Recipient Name"
              icon="ph:user-duotone"
              placeholder="Ex: John Doe"
              readonly
              :classes="{
                input: 'bg-muted-100 dark:!bg-muted-900',
              }"
            />
          </div>
          <div class="relative">
            <BaseInput
              v-model="request.routingNumber"
              label="Routing Number"
              placeholder="Ex: 183402022"
            />
          </div>
          <div class="relative">
            <BaseInput
              v-model="request.prefix"
              label="Prefix (optional)"
              placeholder="Ex: XCQ23"
            />
          </div>
        </div>
      </div>

      <div class="flex gap-4">
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
