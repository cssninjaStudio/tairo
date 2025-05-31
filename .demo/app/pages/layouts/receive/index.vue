<script setup lang="ts">
import type { PaymentReceive, StepData } from '~/types'

definePageMeta({
  preview: {
    title: 'Receive - Step 1',
    description: 'For receiving payments',
    categories: ['layouts', 'wizards', 'forms'],
    src: '/img/screens/layouts-receive.png',
    srcDark: '/img/screens/layouts-receive-dark.png',
    order: 15,
    new: true,
  },
})
useHead({
  title: 'Payment method',
})

const {
  data: request,
  currentStepId,
  loading,
  getPrevStep,
  errors,
  steps,
  checkPreviousSteps,
} = useMultiStepForm<PaymentReceive, StepData>()

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
      <RadioGroupRoot v-model="request.method" class="w-full space-y-4">
        <!-- Radio groups -->
        <RadioGroupItem
          value="bank_transfer"
          class="focus-visible:nui-focus rounded-lg relative group w-full"
        >
          <div
            class="bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 absolute start-[1.35rem] top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full"
          >
            <RadioGroupIndicator
              class="size-3 starting:scale-0 transition-discrete rounded-full bg-primary-500 transition-all duration-300"
            />
          </div>
          <div
            class="dark:bg-muted-950 border-muted-200 dark:border-muted-800 group-data-[state=checked]:shadow-muted-400/10 dark:group-data-[state=checked]:shadow-muted-800/10 group-focus-visible:tw-accessibility-static flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 group-data-[state=checked]:shadow-xl"
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
        </RadioGroupItem>
        <RadioGroupItem
          value="payment_link"
          class="focus-visible:nui-focus rounded-lg relative group w-full"
        >
          <div
            class="bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 absolute start-[1.35rem] top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full"
          >
            <RadioGroupIndicator
              class="size-3 starting:scale-0 transition-discrete rounded-full bg-primary-500 transition-all duration-300"
            />
          </div>
          <div
            class="dark:bg-muted-950 border-muted-200 dark:border-muted-800 group-data-[state=checked]:shadow-muted-400/10 dark:group-data-[state=checked]:shadow-muted-800/10 group-focus-visible:tw-accessibility-static flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 group-data-[state=checked]:shadow-xl"
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
        </RadioGroupItem>
        <RadioGroupItem
          value="wire"
          class="focus-visible:nui-focus rounded-lg relative group w-full"
        >
          <div
            class="bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 absolute start-[1.35rem] top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full"
          >
            <RadioGroupIndicator
              class="size-3 starting:scale-0 transition-discrete rounded-full bg-primary-500 transition-all duration-300"
            />
          </div>
          <div
            class="dark:bg-muted-950 border-muted-200 dark:border-muted-800 group-data-[state=checked]:shadow-muted-400/10 dark:group-data-[state=checked]:shadow-muted-800/10 group-focus-visible:tw-accessibility-static flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 group-data-[state=checked]:shadow-xl"
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
        </RadioGroupItem>
        <div v-if="errors.fields.method" class="font-sans text-xs font-medium leading-none text-destructive-base dark:text-destructive-light">
          {{ errors.fields.method }}
        </div>
      </RadioGroupRoot>

      <div class="mt-4 flex gap-4">
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
