<script setup lang="ts">
import type { PaymentSend, StepData } from '../../../types'

definePageMeta({
  preview: {
    title: 'Send - Step 4',
    description: 'For sending payments to people',
    categories: ['layouts', 'wizards', 'forms'],
    src: '/img/screens/layouts-send-address.png',
    srcDark: '/img/screens/layouts-send-address-dark.png',
    order: 21,
    new: true,
  },
})
useHead({
  title: 'Address',
})

const {
  data: request,
  currentStepId,
  loading,
  getNextStep,
  handleSubmit,
  getPrevStep,
  errors,
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

    <div class="w-full max-w-md">
      <form class="mb-4">
        <!--Grid-->
        <div class="grid gap-4 md:grid-cols-2">
          <div class="relative col-span-2">
            <BaseInput
              v-model="request.recipient.address.lineOne"
              v-focus
              :error="errors.fields?.['recipient.address.lineOne']"
              label="Address line 1"
              placeholder="Ex: 29, Santa Monica Railroad"
              autocomplete="address-line1"
            />
          </div>
          <div class="relative col-span-2">
            <BaseInput
              v-model="request.recipient.address.lineTwo"
              :error="errors.fields?.['recipient.address.lineTwo']"
              label="Address line 2"
              placeholder="Ex: Block D4, Suite G23"
              autocomplete="address-line2"
            />
          </div>
          <div class="relative">
            <BaseInput
              v-model="request.recipient.address.city"
              :error="errors.fields?.['recipient.address.city']"
              label="City"
              placeholder="Ex: Los Angeles"
              autocomplete="address-level2"
            />
          </div>
          <div class="relative">
            <BaseInput
              v-model="request.recipient.address.postalCode"
              :error="errors.fields?.['recipient.address.postalCode']"
              label="Postal code"
              placeholder="Ex: 923728"
              autocomplete="postal-code"
            />
          </div>
          <div class="relative">
            <BaseInput
              v-model="request.recipient.address.state"
              :error="errors.fields?.['recipient.address.state']"
              label="State"
              placeholder="Ex: California"
              autocomplete="address-level1"
            />
          </div>
          <div class="relative">
            <BaseSelect
              v-model="request.recipient.address.country"
              :error="errors.fields?.['recipient.address.country']"
              label="Country"
              autocomplete="country"
            >
              <option value="United States">
                United States
              </option>
              <option value="Canada">
                Canada
              </option>
              <option value="France">
                France
              </option>
              <option value="China">
                China
              </option>
              <option value="Germany">
                Germany
              </option>
            </BaseSelect>
          </div>
        </div>
      </form>

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
