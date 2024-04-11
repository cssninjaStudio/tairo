<script setup lang="ts">
import type { PaymentReceive, StepData } from '../../../types'

definePageMeta({
  preview: {
    title: 'Receive - Step 3',
    description: 'For receiving payments',
    categories: ['layouts', 'wizards', 'forms'],
    src: '/img/screens/layouts-receive-review.png',
    srcDark: '/img/screens/layouts-receive-review-dark.png',
    order: 17,
    new: true,
  },
})
useHead({
  title: 'Review',
})

const {
  data: request,
  currentStepId,
  loading,
  complete,
  getPrevStep,
  steps,
  checkPreviousSteps,
} = useMultiStepForm<PaymentReceive, StepData>()

onBeforeMount(checkPreviousSteps)

</script>

<template>
  <div class="w-full">
    <!--Review section-->
    <div v-if="!complete">
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

      <div class="w-full max-w-md space-y-6">
        <!--Numbers-->
        <div class="flex items-end justify-between pb-4">
          <!--Amount-->
          <div class="flex-1">
            <BaseParagraph size="xs" class="text-muted-400 mb-1">
              Transfer amount
            </BaseParagraph>
            <BaseHeading
              as="h3"
              size="3xl"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              ${{ request.amount.toFixed(2) }}
            </BaseHeading>
          </div>
          <!--Payment method-->
          <div class="flex-1 text-end">
            <BaseParagraph size="xs" class="text-muted-400 mb-1">
              Payment method
            </BaseParagraph>
            <BaseHeading
              as="h3"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100 flex h-10 items-center justify-end"
            >
              {{ request.method }}
            </BaseHeading>
          </div>
        </div>

        <!--Transfer from-->
        <div v-if="request.method === 'bank_transfer'">
          <BaseParagraph size="xs" class="text-muted-400 mb-1">
            Transfer to
          </BaseParagraph>
          <BaseCard rounded="md" class="p-4">
            <div class="flex w-full items-center gap-3 text-start">
              <Icon
                name="clarity:bank-outline-badged"
                class="text-muted-500 dark:text-muted-400 size-8"
              />
              <div>
                <BaseText
                  size="sm"
                  class="text-muted-800 dark:text-muted-200 block"
                >
                  External bank account
                </BaseText>
                <BaseText
                  size="xs"
                  class="text-muted-500 dark:text-muted-400 block"
                >
                  $25,267.42
                </BaseText>
              </div>
            </div>
          </BaseCard>
        </div>

        <!--Send to-->
        <div v-else-if="request.method === 'payment_link'">
          <BaseParagraph size="xs" class="text-muted-400 mb-1">
            Send to
          </BaseParagraph>

          <div class="relative">
            <BaseInput
              v-model="request.email"
              icon="lucide:mail"
              placeholder="Ex: johndoe@gmail.com"
              :classes="{
                input: '!ps-12 !py-2 !h-12',
                icon: '!h-12 !w-12',
              }"
              readonly
            />
          </div>
        </div>

        <!--Account-->
        <div>
          <BaseParagraph size="xs" class="text-muted-400 mb-1">
            Transfer from
          </BaseParagraph>
          <div
            class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 w-full rounded-xl border bg-white p-4"
          >
            <div class="flex w-full items-center gap-3 text-start">
              <TairoLogo class="text-primary-500 size-8" />
              <div>
                <BaseText
                  size="sm"
                  class="text-muted-800 dark:text-muted-200 block capitalize"
                >
                  {{ request.account?.type }} {{ request.account?.label }}
                </BaseText>
                <BaseText
                  size="xs"
                  class="text-muted-500 dark:text-muted-400 block"
                >
                  ${{ request.account?.balance.toFixed(2) }}
                </BaseText>
              </div>
              <div class="ms-auto pe-4">
                <BaseText
                  size="xs"
                  class="text-muted-800 dark:text-muted-200 block"
                >
                  Payment Method
                </BaseText>
                <BaseText
                  v-if="request.method"
                  size="xs"
                  class="text-muted-500 dark:text-muted-400 block"
                >
                  {{ request.method }}
                </BaseText>
              </div>
            </div>
          </div>
        </div>

        <!--Buttons-->
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
            :loading="loading"
            :disabled="loading"
          >
            <span>Send Request</span>
          </BaseButton>
        </div>
      </div>
    </div>

    <!--Success section-->
    <div v-else>
      <div class="mx-auto w-full max-w-md py-6 text-center">
        <div class="text-primary-500 mx-auto mb-4 size-14">
          <TairoCheckAnimated color="primary" size="lg" />
        </div>
        <BaseHeading
          as="h2"
          weight="medium"
          size="2xl"
          lead="tight"
          class="text-muted-800 mb-2 dark:text-white"
        >
          Payment request sent!
        </BaseHeading>
        <BaseParagraph class="text-muted-500 dark:text-muted-400 mb-5">
          Amazing! You've properly filled in your payment request. We'll let you
          know as soon as the funds are on their way.
        </BaseParagraph>
        <div class="flex justify-center">
          <BaseButton
            to="/dashboards"
            color="primary"
            rounded="md"
            class="w-48"
          >
            Back to Dahboard
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
