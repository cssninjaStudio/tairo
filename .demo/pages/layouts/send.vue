<script setup lang="ts">
import type { PaymentSend, StepData } from '../../types'

definePageMeta({
  layout: 'empty',
})
useHead({
  titleTemplate: title => `${title} | Send money - Step ${currentStepId.value + 1}`,
})

const initialState = ref<PaymentSend>({
  recipient: {
    name: '',
    picture: '',
    address: {
      lineOne: '',
      lineTwo: '',
      city: '',
      state: '',
      postalCode: '',
      country: 'United States',
    },
  },
  amount: 0,
  account: null,
  routingNumber: '',
  prefix: '',
  method: null,
})

const toaster = useToaster()

const { handleSubmit, currentStepId, progress, complete, steps, errors, goToStep } = provideMultiStepForm({
  initialState,
  steps: [
    {
      to: '/layouts/send',
      meta: {
        name: 'Recipient',
        title: 'Who are you paying?',
        subtitle:
          'Enter the name of the person or the company your are sending money to',
      } satisfies StepData,
      validate({ data, setFieldError, resetFieldError }) {
        resetFieldError('recipient.name')
        if (!data.value.recipient?.name) setFieldError('recipient.name', 'Enter a valid name')
      },
    },
    {
      to: '/layouts/send/method',
      meta: {
        name: 'Payment method',
        title: 'How do you want to pay?',
        subtitle:
          'Select on of the available payment methods to proceed to payment',
      } satisfies StepData,
      validate({ data, setFieldError, resetFieldError }) {
        resetFieldError(['method'])
        if (!data.value?.method) {
          setFieldError('method', 'Please select a payment method')
        }
      },
    },
    {
      to: '/layouts/send/recipient',
      meta: {
        name: 'Recipient details',
        title: 'Recipient details',
        subtitle:
          'Enter the recipient routing details so money can be sent to their account',
      } satisfies StepData,
      validate({ data, setFieldError, resetFieldError }) {
        resetFieldError(['routingNumber'])
        if (!data.value.routingNumber) setFieldError('routingNumber', 'Enter a valid name')
      },
    },
    {
      to: '/layouts/send/address',
      meta: {
        name: 'Recipient address',
        title: 'Recipient address',
        subtitle:
          'Your recipient needs to have a legal address before you can send them money',
      } satisfies StepData,
      validate({ data, setFieldError, resetFieldError }) {
        resetFieldError([
          'recipient.address.lineOne',
          'recipient.address.city',
          'recipient.address.postalCode',
        ])
        if (!data.value.recipient?.address?.lineOne) setFieldError('recipient.address.lineOne', 'Enter an address')
        if (!data.value.recipient?.address?.city) setFieldError('recipient.address.city', 'Enter a city')
        if (!data.value.recipient?.address?.postalCode) setFieldError('recipient.address.postalCode', 'Enter a zip code')
      },
    },
    {
      to: '/layouts/send/amount',
      meta: {
        name: 'Amount',
        title: 'Set an amount to transfer',
        subtitle:
          'Enter an amount to transfer. This amount cannot exceed the selected account balance',
      } satisfies StepData,
      validate({ data, setFieldError, resetFieldError }) {
        resetFieldError([
          'amount',
          'account',
        ])
        if (!data.value.account) setFieldError('account', 'Select an account input')

        if (data.value.amount <= 0) setFieldError('amount', 'Enter a positive amount')
        else if (data.value.account && data.value.amount > data.value.account.balance) setFieldError('amount', 'Value should be less than balance')
      },
    },
    {
      to: '/layouts/send/review',
      meta: {
        name: 'Review',
        title: 'Review and send',
        subtitle:
          'Make sure everything in the process is correct before sending the money',
      } satisfies StepData,
    },
  ],
  onSubmit: async (state, ctx) => {
    // Simulate async request
    await new Promise(resolve => setTimeout(resolve, 4000))

    toaster.clearAll()
    toaster.show({
      title: 'Success',
      message: `Transfer request sent!`,
      color: 'success',
      icon: 'ph:check',
      closable: true,
    })
  },
  onError: (error) => {
    toaster.clearAll()
    toaster.show({
      title: 'Error',
      message: error.message,
      color: 'danger',
      icon: 'lucide:alert-triangle',
      closable: true,
    })
  },
})
</script>

<template>
  <div class="dark:bg-muted-900 bg-muted-50 min-h-screen">
    <DemoNavigationTop title="Send Money" close-to="/layouts/payments" />

    <div class="w-full pb-20 pt-32">
      <div class="mx-auto w-full max-w-6xl px-4">
        <div class="grid w-full gap-10 md:grid-cols-12">
          <!--Stepper column-->
          <div :class="complete ? 'hidden' : 'md:col-span-3 lg:col-span-4'">
            <!--Stepper-->
            <div
              class="xs:w-full xs:max-w-xs xs:mx-auto flex flex-col gap-4 md:flex-row"
            >
              <div
                class="xs:max-w-xs xs:mx-auto relative flex justify-between gap-7 md:flex-col"
              >
                <!--Progress-->
                <div
                  class="xs:top-1.5 xs:inset-x-0 bg-muted-200 dark:bg-muted-700 absolute start-2 top-2 z-0 mx-auto h-1 w-[calc(100%_-_1rem)] md:h-[calc(100%_-_1rem)] md:w-1 md:-translate-x-1/2"
                />
                <!--Vertical progress-->
                <div
                  class="bg-primary-500 absolute start-2 top-0 z-10 mx-auto hidden w-0.5 -translate-x-1/2 rounded-full transition-all duration-300 md:block"
                  :style="`height: ${progress}%;`"
                />
                <!--Horizontal progress (mobile)-->
                <div
                  class="bg-primary-500 absolute start-1.5 top-[7px] z-10 h-0.5 rounded-full transition-all duration-300 md:hidden"
                  :style="`width: calc(${progress}% - 0.5rem);`"
                />
                <!--Nodes-->
                <div
                  v-for="(step, index) in steps"
                  :key="index"
                  class="bg-muted-200 dark:bg-muted-700 relative z-20 flex size-4 items-center justify-center rounded-full"
                >
                  <span
                    class="bg-primary-500 block size-2 rounded-full transition-transform duration-300"
                    :class="currentStepId >= index ? 'scale-1' : 'scale-0'"
                  />
                </div>
              </div>
              <div
                class="relative flex justify-center gap-7 md:flex-col md:justify-between"
              >
                <a
                  v-for="(step, index) in steps"
                  :key="index"
                  class="h-4 leading-none"
                  role="button"
                  :tabindex="0"
                  :class="[currentStepId === index ? '' : 'xs:hidden', currentStepId > step.id ? 'nui-link' : 'cursor-default']"
                  @click.prevent="currentStepId > step.id ? goToStep(step) : () => {}"
                >
                  <span
                    class="font-heading block text-xs"
                    :class="
                      currentStepId === index
                        ? 'text-muted-800 dark:text-muted-100'
                        : 'text-muted-400 dark:text-muted-500'
                    "
                  >
                    {{ step.meta.name }}
                  </span>
                </a>
              </div>
            </div>
          </div>

          <!--Steps column-->
          <div
            :class="complete ? 'col-span-12' : 'md:col-span-9 lg:col-span-8'"
          >
            <form
              action=""
              method="POST"
              novalidate
              @submit.prevent="handleSubmit"
            >
              <NuxtPage />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
