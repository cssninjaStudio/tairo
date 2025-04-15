<script setup lang="ts">
import type { PaymentSend, StepData } from '~/types'

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
      <form class="mb-4">
        <!-- Grid -->
        <div class="grid gap-4 md:grid-cols-2">
          <BaseField
            v-slot="{ inputAttrs, inputRef }"
            label="Address line 1"
            :state="errors.fields?.['recipient.address.lineOne'] ? 'error' : 'idle'"
            :error="errors.fields?.['recipient.address.lineOne']"
            class="col-span-2"
            required
          >
            <BaseInput
              :ref="inputRef"
              v-bind="inputAttrs"
              v-model="request.recipient.address.lineOne"
              v-focus
              placeholder="Ex: 29, Santa Monica Railroad"
              autocomplete="address-line1"
            />
          </BaseField>
          <BaseField
            v-slot="{ inputAttrs, inputRef }"
            label="Address line 2"
            :state="errors.fields?.['recipient.address.lineTwo'] ? 'error' : 'idle'"
            :error="errors.fields?.['recipient.address.lineTwo']"
            class="col-span-2"
          >
            <BaseInput
              :ref="inputRef"
              v-bind="inputAttrs"
              v-model="request.recipient.address.lineTwo"
              placeholder="Ex: Block D4, Suite G23"
              autocomplete="address-line2"
            />
          </BaseField>
          <BaseField
            v-slot="{ inputAttrs, inputRef }"
            label="City"
            :state="errors.fields?.['recipient.address.city'] ? 'error' : 'idle'"
            :error="errors.fields?.['recipient.address.city']"
            required
          >
            <BaseInput
              :ref="inputRef"
              v-bind="inputAttrs"
              v-model="request.recipient.address.city"
              label="City"
              placeholder="Ex: Los Angeles"
              autocomplete="address-level2"
            />
          </BaseField>
          <BaseField
            v-slot="{ inputAttrs, inputRef }"
            label="Postal code"
            :state="errors.fields?.['recipient.address.postalCode'] ? 'error' : 'idle'"
            :error="errors.fields?.['recipient.address.postalCode']"
            required
          >
            <BaseInput
              :ref="inputRef"
              v-bind="inputAttrs"
              v-model="request.recipient.address.postalCode"
              placeholder="Ex: 923728"
              autocomplete="postal-code"
            />
          </BaseField>
          <BaseField
            v-slot="{ inputAttrs, inputRef }"
            label="State"
            :state="errors.fields?.['recipient.address.state'] ? 'error' : 'idle'"
            :error="errors.fields?.['recipient.address.state']"
          >
            <BaseInput
              :ref="inputRef"
              v-bind="inputAttrs"
              v-model="request.recipient.address.state"
              label="State"
              placeholder="Ex: California"
              autocomplete="address-level1"
            />
          </BaseField>
          <BaseField
            v-slot="{ inputAttrs, inputRef }"
            label="Country"
            :state="errors.fields?.['recipient.address.country'] ? 'error' : 'idle'"
            :error="errors.fields?.['recipient.address.country']"
          >
            <BaseSelect
              :ref="inputRef"
              v-bind="inputAttrs"
              v-model="request.recipient.address.country"
              :error="errors.fields?.['recipient.address.country']"
              autocomplete="country"
            >
              <BaseSelectItem value="United States">
                United States
              </BaseSelectItem>
              <BaseSelectItem value="Canada">
                Canada
              </BaseSelectItem>
              <BaseSelectItem value="France">
                France
              </BaseSelectItem>
              <BaseSelectItem value="China">
                China
              </BaseSelectItem>
              <BaseSelectItem value="Germany">
                Germany
              </BaseSelectItem>
            </BaseSelect>
          </BaseField>
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
