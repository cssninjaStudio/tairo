<script setup lang="ts">
import type { PaymentReceive, StepData } from '../../../types'

definePageMeta({
  title: 'Receive - Step 1',
  layout: 'empty',
  preview: {
    title: 'Receive - Step 1',
    description: 'For receiving payments',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-receive.png',
    srcDark: '/img/screens/layouts-receive-dark.png',
    order: 15,
  },
})

const {
  data: request,
  currentStep,
  loading,
  getNextStep,
  getPrevStep,
  steps,
} = useStepperForm<PaymentReceive, StepData>()
useHead({
  title: 'Payment method',
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
      <div class="w-full space-y-4">
        <!--Radio groups-->
        <BaseRadioHeadless
          v-model="request.method"
          value="Bank transfer"
          name="payment_method"
        >
          <div
            class="peer-checked:child:scale-1 peer-not-checked:child:scale-0 bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 peer-checked:text-primary-500 absolute start-6 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full"
          >
            <div
              class="size-3 rounded-full bg-current transition-colors duration-300"
            />
          </div>
          <div
            class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 peer-checked:shadow-muted-400/10 dark:peer-checked:shadow-muted-800/10 group-focus-visible:tw-accessibility-static group flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 peer-checked:shadow-xl"
          >
            <div
              class="border-muted-200 flex size-5 items-center justify-center rounded-full border"
            />
            <div class="ms-6 flex flex-col">
              <BaseText
                weight="medium"
                class="text-muted-800 dark:text-muted-100"
              >
                Bank transfer
              </BaseText>
            </div>
            <div class="ms-auto flex w-32 flex-col">
              <BaseText
                weight="medium"
                class="text-muted-800 dark:text-muted-100"
              >
                Free
              </BaseText>
              <BaseText size="xs" class="text-muted-400">
                3 business days
              </BaseText>
            </div>
          </div>
        </BaseRadioHeadless>
        <BaseRadioHeadless
          v-model="request.method"
          value="Payment link"
          name="payment_method"
        >
          <div
            class="peer-checked:child:scale-1 peer-not-checked:child:scale-0 bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 peer-checked:text-primary-500 absolute start-6 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full"
          >
            <div
              class="size-3 rounded-full bg-current transition-colors duration-300"
            />
          </div>
          <div
            class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 peer-checked:shadow-muted-400/10 dark:peer-checked:shadow-muted-800/10 group-focus-visible:tw-accessibility-static group flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 peer-checked:shadow-xl"
          >
            <div
              class="border-muted-200 flex size-5 items-center justify-center rounded-full border"
            />
            <div class="ms-6 flex flex-col">
              <BaseText
                weight="medium"
                class="text-muted-800 dark:text-muted-100"
              >
                Payment link
              </BaseText>
            </div>
            <div class="ms-auto flex w-32 flex-col">
              <BaseText
                weight="medium"
                class="text-muted-800 dark:text-muted-100"
              >
                Free
              </BaseText>
              <BaseText size="xs" class="text-muted-400">
                1 business day
              </BaseText>
            </div>
          </div>
        </BaseRadioHeadless>
        <BaseRadioHeadless
          v-model="request.method"
          value="Wire"
          name="payment_method"
        >
          <div
            class="peer-checked:child:scale-1 peer-not-checked:child:scale-0 bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 peer-checked:text-primary-500 absolute start-6 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full"
          >
            <div
              class="size-3 rounded-full bg-current transition-colors duration-300"
            />
          </div>
          <div
            class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 peer-checked:shadow-muted-400/10 dark:peer-checked:shadow-muted-800/10 group-focus-visible:tw-accessibility-static group flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 peer-checked:shadow-xl"
          >
            <div
              class="border-muted-200 flex size-5 items-center justify-center rounded-full border"
            />
            <div class="ms-6 flex flex-col">
              <BaseText
                weight="medium"
                class="text-muted-800 dark:text-muted-100"
              >
                Wire
              </BaseText>
            </div>
            <div class="ms-auto flex w-32 flex-col">
              <BaseText
                weight="medium"
                class="text-muted-800 dark:text-muted-100"
              >
                Free
              </BaseText>
              <BaseText size="xs" class="text-muted-400">
                1 business day
              </BaseText>
            </div>
          </div>
        </BaseRadioHeadless>
      </div>

      <div class="mt-4 flex gap-4">
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
