<script setup lang="ts">
import type { PaymentReceive, StepData } from '../../../types'

definePageMeta({
  preview: {
    title: 'Receive - Step 2',
    description: 'For receiving payments',
    categories: ['layouts', 'wizards', 'forms'],
    src: '/img/screens/layouts-receive-transfer.png',
    srcDark: '/img/screens/layouts-receive-transfer-dark.png',
    order: 16,
    new: true,
  },
})
useHead({
  title: 'Transfer details',
})

const {
  data: request,
  currentStepId,
  loading,
  getNextStep,
  getPrevStep,
  resetFieldError,
  errors,
  steps,
  checkPreviousSteps,
} = useMultiStepForm<PaymentReceive, StepData>()

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

const expandedRegular = ref(false)
const expandedInternational = ref(false)

function setAccount(account: any) {
  request.value.account = account
  resetFieldError('account')
}
</script>

<template>
  <div class="w-full">
    <!--Transfer-->
    <div v-if="request.method === 'bank_transfer'" class="w-full">
      <div class="mb-8 space-y-2">
        <BaseHeading
          as="h2"
          size="2xl"
          weight="medium"
          class="md:!3xl text-muted-800 dark:text-white"
        >
          Bank transfer
        </BaseHeading>
        <BaseParagraph
          size="sm"
          class="text-muted-500 dark:text-muted-400 max-w-sm"
        >
          Enter an amount to transfer. This amount is what will be deducted from
          the sender's account.
        </BaseParagraph>
      </div>

      <div class="w-full max-w-md">
        <!--Amount input-->
        <div class="relative">
          <BaseInput
            v-model="request.amount"
            v-focus
            :error="errors.fields.amount"
            type="number"
            rounded="none"
            icon="lucide:dollar-sign"
            placeholder="0.00"
            :classes="{
              input:
                '!ps-14 !py-2 !h-14 !text-4xl !leading-5 !border-t-0 !border-l-0  !border-r-0 !border-b-2 focus:!border-primary-500 dark:!bg-muted-900 dark:focus:!border-primary-500',
              icon: '!h-14 !w-14',
            }"
          />
        </div>

        <!--Transfer from-->
        <div class="pt-6">
          <BaseHeading
            as="h4"
            size="sm"
            weight="medium"
            class="text-muted-600 dark:text-muted-400 mb-4"
          >
            Transfer from:
          </BaseHeading>

          <!--Placeholder-->
          <div class="bg-muted-100 dark:bg-muted-800 p-4 text-center">
            <div class="mx-auto w-full max-w-lg">
              <BaseHeading
                as="h3"
                size="md"
                weight="medium"
                class="text-muted-800 dark:text-white"
              >
                External account
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400 mb-2"
              >
                Link external bank accounts to transfer funds.
              </BaseParagraph>

              <div class="flex items-center justify-center">
                <BaseButton
                  color="primary"
                  rounded="md"
                  class="w-32"
                >
                  Link Account
                </BaseButton>
              </div>
            </div>
          </div>
        </div>

        <!--Transfer account-->
        <div class="pb-4 pt-6">
          <BaseHeading
            as="h4"
            size="sm"
            weight="medium"
            class="text-muted-600 dark:text-muted-400 mb-4"
          >
            Transfer to:
          </BaseHeading>

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
                      {{ request.account?.type }} {{ request.account?.label }}
                    </BaseText>
                    <BaseText
                      size="xs"
                      class="text-muted-500 dark:text-muted-400 block"
                    >
                      ${{ request.account?.balance.toFixed(2) }}
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
      </div>
    </div>

    <!--Link-->
    <div v-else-if="request.method === 'payment_link'" class="w-full">
      <div class="mb-8 space-y-2">
        <BaseHeading
          as="h2"
          size="2xl"
          weight="medium"
          class="md:!3xl text-muted-800 dark:text-white"
        >
          Payment link
        </BaseHeading>
        <BaseParagraph
          size="sm"
          class="text-muted-500 dark:text-muted-400 max-w-sm"
        >
          Enter an amount to transfer. This amount is what will be deducted from
          the sender's account.
        </BaseParagraph>
      </div>

      <div class="w-full max-w-md">
        <!--Amount input-->
        <div class="relative">
          <BaseInput
            v-model="request.amount"
            v-focus
            :error="errors.fields.amount"
            type="number"
            rounded="none"
            icon="lucide:dollar-sign"
            placeholder="0.00"
            :classes="{
              input:
                '!ps-14 !py-2 !h-14 !text-4xl !leading-5 !border-t-0 !border-l-0  !border-r-0 !border-b-2 focus:!border-primary-500 dark:!bg-muted-900 dark:focus:!border-primary-500',
              icon: '!h-14 !w-14',
            }"
          />
        </div>

        <!--Send to-->
        <div class="pt-6">
          <BaseHeading
            as="h4"
            size="sm"
            weight="medium"
            class="text-muted-600 dark:text-muted-400 mb-4"
          >
            Send to:
          </BaseHeading>

          <div class="relative">
            <BaseInput
              v-model="request.email"
              :error="errors.fields.email"
              icon="lucide:mail"
              placeholder="Ex: johndoe@gmail.com"
              :classes="{
                input: '!ps-12 !py-2 !h-12',
                icon: '!h-12 !w-12',
              }"
            />
          </div>
        </div>

        <!--Transfer account-->
        <div class="pb-4 pt-6">
          <BaseHeading
            as="h4"
            size="sm"
            weight="medium"
            class="text-muted-600 dark:text-muted-400 mb-4"
          >
            Transfer to:
          </BaseHeading>

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
                      {{ request.account?.type }} {{ request.account?.label }}
                    </BaseText>
                    <BaseText
                      size="xs"
                      class="text-muted-500 dark:text-muted-400 block"
                    >
                      ${{ request.account?.balance.toFixed(2) }}
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
      </div>
    </div>

    <!--Wire-->
    <div v-else-if="request.method === 'wire'" class="w-full pb-10">
      <div class="w-full max-w-md">
        <!--Header-->
        <div class="mb-4">
          <div class="space-y-2">
            <BaseHeading
              as="h2"
              size="2xl"
              weight="medium"
              class="md:!3xl text-muted-800 dark:text-white"
            >
              Wire details
            </BaseHeading>
            <BaseParagraph
              size="sm"
              class="text-muted-500 dark:text-muted-400 max-w-sm"
            >
              Enter an amount to transfer. This amount is what will be deducted
              from the sender's account.
            </BaseParagraph>
            <a
              class="text-primary-500 hover:text-primary-600 inline-flex cursor-pointer items-center gap-2 transition-colors duration-300"
            >
              <Icon name="lucide:download" class="size-4" />
              <BaseText size="xs" weight="semibold">Download as PDF</BaseText>
            </a>
          </div>
        </div>
        <!--Account-->

        <BaseDropdown rounded="lg" :classes="{ menuWrapper: 'w-full [&>div]:right-0', menu: '!w-full' }">
          <template #button="{ open }">
            <BaseButton
              v-focus
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

        <!--Transfer details-->
        <div class="py-6">
          <!--Regular collapse-->
          <div class="flex w-full flex-col">
            <!--Trigger-->
            <button
              type="button"
              class="border-muted-200 dark:border-muted-900 hover:bg-muted-100 dark:hover:bg-muted-800 flex w-full cursor-pointer items-center justify-between border-y p-4 transition-colors duration-300"
              @click="expandedRegular = !expandedRegular"
            >
              <BaseText
                size="xs"
                weight="medium"
                class="text-muted-500 dark:text-muted-400 uppercase"
              >
                Regular transfer
              </BaseText>
              <Icon
                name="lucide:chevron-down"
                class="text-muted-400 size-5 transition-transform duration-300"
                :class="expandedRegular ? 'rotate-180' : ''"
              />
            </button>
            <!--Content-->
            <AddonCollapseTransition>
              <div v-if="expandedRegular" class="w-full p-4">
                <div class="space-y-6">
                  <!--Fieldset-->
                  <div>
                    <BaseHeading
                      as="h5"
                      size="sm"
                      weight="semibold"
                      class="text-muted-800 mb-4 dark:text-white"
                    >
                      Beneficiary
                    </BaseHeading>
                    <!--List-->
                    <ul class="font-heading w-full space-y-3 text-sm">
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="text-muted-500 dark:text-muted-400 block"
                          >
                            Beneficiary Name
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="text-muted-800 dark:text-muted-200 block"
                          >
                            Kendra Wilson
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="text-muted-500 dark:text-muted-400 block"
                          >
                            Account number
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="text-muted-800 dark:text-muted-200 block"
                          >
                            {{ request.account?.number }}
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="text-muted-500 dark:text-muted-400 block"
                          >
                            Account type
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="text-muted-800 dark:text-muted-200 block"
                          >
                            {{ request.account?.type }}
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="text-muted-500 dark:text-muted-400"
                          >
                            Address
                          </BaseText>
                          <div
                            class="text-muted-800 dark:text-muted-200 text-end"
                          >
                            <BaseParagraph size="sm">
                              124, Downing street
                            </BaseParagraph>
                            <BaseParagraph size="sm">
                              New York, NY
                            </BaseParagraph>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <!--Fieldset-->
                  <div>
                    <BaseHeading
                      as="h5"
                      size="sm"
                      weight="semibold"
                      class="text-muted-800 mb-4 dark:text-white"
                    >
                      Bank details
                    </BaseHeading>
                    <!--List-->
                    <ul class="font-heading w-full space-y-3 text-sm">
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="text-muted-500 dark:text-muted-400 block"
                          >
                            ABA Routing Number
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="text-muted-800 dark:text-muted-200 block"
                          >
                            9156511
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="text-muted-500 dark:text-muted-400 block"
                          >
                            Bank Name
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="text-muted-800 dark:text-muted-200 block"
                          >
                            Tairo Inc
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="text-muted-500 dark:text-muted-400"
                          >
                            Bank Address
                          </BaseText>
                          <div
                            class="text-muted-800 dark:text-muted-200 text-end"
                          >
                            <BaseParagraph size="sm">
                              47 Victorian Av, Suite G3
                            </BaseParagraph>
                            <BaseParagraph size="sm">
                              New York, NY
                            </BaseParagraph>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AddonCollapseTransition>
          </div>
          <!--International collapse-->
          <div class="flex w-full flex-col">
            <!--Trigger-->
            <button
              type="button"
              class="border-muted-200 dark:border-muted-900 hover:bg-muted-100 dark:hover:bg-muted-800 flex w-full cursor-pointer items-center justify-between border-y p-4 transition-colors duration-300"
              @click="expandedInternational = !expandedInternational"
            >
              <BaseText
                size="xs"
                weight="medium"
                class="text-muted-500 dark:text-muted-400 uppercase"
              >
                International transfer
              </BaseText>
              <Icon
                name="lucide:chevron-down"
                class="text-muted-400 size-5 transition-transform duration-300"
                :class="expandedInternational ? 'rotate-180' : ''"
              />
            </button>
            <!--Content-->
            <AddonCollapseTransition>
              <div v-if="expandedInternational" class="w-full p-4">
                <div class="space-y-6">
                  <!--Fieldset-->
                  <div>
                    <BaseHeading
                      as="h5"
                      size="sm"
                      weight="semibold"
                      class="text-muted-800 mb-4 dark:text-white"
                    >
                      Beneficiary
                    </BaseHeading>
                    <!--List-->
                    <ul class="font-heading w-full space-y-3 text-sm">
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="text-muted-500 dark:text-muted-400 block"
                          >
                            Beneficiary Name
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="text-muted-800 dark:text-muted-200 block"
                          >
                            Kendra Wilson
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="text-muted-500 dark:text-muted-400 block"
                          >
                            Account number
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="text-muted-800 dark:text-muted-200 block"
                          >
                            {{ request.account?.number }}
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="text-muted-500 dark:text-muted-400 block"
                          >
                            Account type
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="text-muted-800 dark:text-muted-200 block"
                          >
                            {{ request.account?.type }}
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="text-muted-500 dark:text-muted-400"
                          >
                            Address
                          </BaseText>
                          <div
                            class="text-muted-800 dark:text-muted-200 text-end"
                          >
                            <BaseParagraph size="sm">
                              47 Victorian Av, Suite G3
                            </BaseParagraph>
                            <BaseParagraph size="sm">
                              New York, NY
                            </BaseParagraph>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <!--Fieldset-->
                  <div>
                    <BaseHeading
                      as="h5"
                      size="sm"
                      weight="semibold"
                      class="text-muted-800 mb-4 dark:text-white"
                    >
                      Bank details
                    </BaseHeading>
                    <!--List-->
                    <ul class="font-heading w-full space-y-3 text-sm">
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="text-muted-500 dark:text-muted-400 block"
                          >
                            IBAN Number
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="text-muted-800 dark:text-muted-200 block"
                          >
                            US1565
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="text-muted-500 dark:text-muted-400 block"
                          >
                            Bank Name
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="text-muted-800 dark:text-muted-200 block"
                          >
                            Tairo Inc
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="text-muted-500 dark:text-muted-400"
                          >
                            Bank Address
                          </BaseText>
                          <div
                            class="text-muted-800 dark:text-muted-200 text-end"
                          >
                            <BaseParagraph size="sm">
                              124, Downing street
                            </BaseParagraph>
                            <BaseParagraph size="sm">
                              New York, NY
                            </BaseParagraph>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AddonCollapseTransition>
          </div>
        </div>
      </div>
    </div>

    <!--Buttons-->
    <div class="flex w-full max-w-md gap-4">
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
        v-if="request.method !== 'wire'"
        type="submit"
        color="primary"
        size="lg"
        class="w-full"
      >
        <span>Continue</span>
      </BaseButton>
    </div>
  </div>
</template>
