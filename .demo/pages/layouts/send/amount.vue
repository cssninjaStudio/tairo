<script setup lang="ts">
import type { PaymentSend, StepData } from '../../../types'

definePageMeta({
  preview: {
    title: 'Send - Step 5',
    description: 'For sending payments to people',
    categories: ['layouts', 'wizards', 'forms'],
    src: '/img/screens/layouts-send-amount.png',
    srcDark: '/img/screens/layouts-send-amount-dark.png',
    order: 22,
    new: true,
  },
})
useHead({
  title: 'Amount',
})

const {
  data: request,
  currentStepId,
  loading,
  getPrevStep,
  errors,
  steps,
  resetFieldError,
  checkPreviousSteps,
} = useMultiStepForm<PaymentSend, StepData>()

onBeforeMount(checkPreviousSteps)

const accounts = ref([
  {
    id: 1,
    type: 'checking',
    label: '**** 4897',
    number: '1487 3256 54122 4897',
    balance: 9543.12,
  },
  {
    id: 2,
    type: 'checking',
    label: '**** 4869',
    number: '3524 65456 3245 4869',
    balance: 1211.67,
  },
  {
    id: 3,
    type: 'savings',
    label: '**** 6279',
    number: '3524 65456 3245 6279',
    balance: 4653.97,
  },
])

function setAccount(account: any) {
  request.value.account = account
  resetFieldError('account')
}
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
      <!--Amount input-->
      <div class="relative">
        <BaseInput
          v-model="request.amount"
          v-focus
          type="number"
          :error="errors.fields?.amount"
          rounded="none"
          icon="lucide:dollar-sign"
          placeholder="0.00"
          :max="request.account ? request.account.balance : undefined"
          :classes="{
            input:
              '!ps-14 !py-2 !h-14 !text-4xl !leading-5 !border-t-0 !border-l-0  !border-r-0 !border-b-2 focus:!border-primary-500 dark:!bg-muted-900 dark:focus:!border-primary-500',
            icon: '!h-14 !w-14',
          }"
        />
      </div>

      <!--Transfer account-->
      <div class="py-10">
        <h4
          class="font-heading text-muted-600 dark:text-muted-400 mb-4 text-sm"
        >
          Transfer from:
        </h4>

        <BaseDropdown rounded="lg" :classes="{ menuWrapper: 'w-full [&>div]:right-0', menu: '!w-full' }">
          <template #button="{ open }">
            <BaseButton
              size="xl"
              rounded="lg"
              class="!h-auto w-full !p-4"
              :class="[errors.fields.account ? '!border-danger-500' : '']"
            >
              <span class="flex w-full items-center gap-3 text-start">
                <TairoLogo v-if="request.account" class="text-primary-500 size-8" />
                <Icon
                  v-else
                  name="lucide:wallet"
                  class="text-muted-500 mx-1 my-2 size-6"
                />
                <div v-if="request.account">
                  <BaseText
                    size="sm"
                    class="text-muted-800 dark:text-muted-200 block capitalize"
                  >
                    {{ request.account.type }} {{ request.account.label }}
                  </BaseText>
                  <BaseText
                    size="xs"
                    class="text-muted-500 dark:text-muted-400 block"
                  >
                    ${{ request.account.balance.toFixed(2) }}
                  </BaseText>
                </div>
                <span v-else>
                  Select an account
                </span>
                <Icon
                  name="lucide:chevron-down"
                  class="text-muted-400 ms-auto size-4 transition-transform duration-300"
                  :class="open && 'rotate-180'"
                />
              </span>
            </BaseButton>
          </template>
          <BaseDropdownItem
            v-for="account in accounts.filter((account) => account.id !== request.account?.id)"
            :key="account.id"
            :title="`${account.type} ${account.label}`"
            :text="`$${account.balance.toFixed(2)}`"
            @click="setAccount(account)"
          >
            <template #start>
              <TairoLogo
                class="text-muted-300 dark:text-muted-700 group-hover:text-primary-500 size-8"
              />
            </template>
          </BaseDropdownItem>
        </BaseDropdown>

        <BaseInputHelpText v-if="errors.fields.account" color="danger">
          {{ errors.fields.account }}
        </BaseInputHelpText>
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
        >
          <span>Continue</span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
