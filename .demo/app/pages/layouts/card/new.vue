<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({
  title: 'New card',
  layout: 'empty',
  preview: {
    title: 'Card wizard',
    description: 'For new card creation',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-card-new.png',
    srcDark: '/img/screens/layouts-card-new-dark.png',
    order: 14,
    new: true,
  },
})

const complete = ref(false)
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

// This is the object that will contain the validation messages
const VALIDATION_TEXT = {
  DAILY_SPEND_REQUIRED: 'Define a daily spend limit',
  DAILY_WITHDRAW_REQUIRED: 'Define a daily withdrawal limit',
  DAILY_LIMIT: 'You must allow at least $50 to spend daily',
  ACCOUNT_SELECTION: 'You must select an account',
  OWNER_SELECTION: 'You must select an owner',
  BRAND_SELECTION: 'You must select a card brand',
  TYPE_SELECTION: 'You must select a card type',
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
    owner: z.string().min(1, VALIDATION_TEXT.OWNER_SELECTION).nullable(),
    account: z
      .object({
        id: z.number(),
        number: z.string(),
        type: z.string(),
        label: z.string(),
        balance: z.number(),
      })
      .nullable(),
    brand: z.string().min(1, VALIDATION_TEXT.BRAND_SELECTION).nullable(),
    type: z.string().min(1, VALIDATION_TEXT.TYPE_SELECTION).nullable(),
    dailySpend: z.number(),
    dailyWithdraw: z.number(),
  })
  .superRefine((data, ctx) => {
    // This is a custom validation function that will be called
    // before the form is submitted
    if (data.account === null) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.ACCOUNT_SELECTION,
        path: ['account'],
      })
    }
    if (data.dailySpend === null || data.dailySpend <= 50) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.DAILY_LIMIT,
        path: ['dailySpend'],
      })
    }
    if (data.dailyWithdraw === null || data.dailyWithdraw <= 50) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.DAILY_LIMIT,
        path: ['dailyWithdraw'],
      })
    }
  })

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = {
  owner: null,
  account: null,
  brand: null,
  type: null,
  dailySpend: 0,
  dailyWithdraw: 0,
} satisfies FormInput

const {
  handleSubmit,
  isSubmitting,
  setFieldError,
  meta,
  values,
  errors,
  resetForm,
  setFieldValue,
  setErrors,
} = useForm({
  validationSchema,
  initialValues,
})

const success = ref(false)
const fieldsWithErrors = computed(() => Object.keys(errors.value).length)

// Ask the user for confirmation before leaving the page if the form has unsaved changes
onBeforeRouteLeave(() => {
  if (meta.value.dirty && !success.value) {
    // eslint-disable-next-line no-alert
    return confirm('You have unsaved changes. Are you sure you want to leave?')
  }
})

const toaster = useNuiToasts()

// This is where you would send the form data to the server
const onSubmit = handleSubmit(
  async (values) => {
    success.value = false

    // here you have access to the validated form values
    // console.log('card-create-success', values)

    try {
      // fake delay, this will make isSubmitting value to be true
      await new Promise((resolve, reject) => {
        if (values.dailySpend && values.dailySpend > 5000) {
          // simulate a backend error
          setTimeout(
            () => reject(new Error('Fake backend validation error')),
            2000,
          )
        }
        setTimeout(resolve, 4000)
      })

      toaster.add({
        title: 'Success',
        description: `Card has been created!`,
        icon: 'ph:check',
        progress: true,
      })
    }
    catch (error: any) {
      // this will set the error on the form
      if (error.message === 'Fake backend validation error') {
        setFieldError('dailySpend', 'The maximum allowed limit is $5000')

        document.documentElement.scrollTo({
          top: 0,
          behavior: 'smooth',
        })

        toaster.add({
          title: 'Oops!',
          description: 'Please review the errors in the form',
          icon: 'lucide:alert-triangle',
          progress: true,
        })
      }
      return
    }

    // resetForm()

    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    success.value = true
  },
  (_error) => {
    // this callback is optional and called only if the form has errors
    success.value = false

    // here you have access to the error
    // console.log('card-create-error', error)

    // you can use it to scroll to the first error
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  },
)
</script>

<template>
  <div class="dark:bg-muted-900 bg-muted-50 min-h-screen">
    <DemoNavigationTop title="New Card" close-to="/layouts/cards" />

    <div class="w-full pb-20 pt-32">
      <div class="mx-auto w-full max-w-6xl px-4">
        <div v-if="!success">
          <form
            action=""
            method="POST"
            class="grid w-full gap-8 md:grid-cols-12 lg:gap-16"
            @submit.prevent="onSubmit"
          >
            <!-- Content column -->
            <div class="md:col-span-7 lg:col-span-7">
              <div class="w-full max-w-md">
                <div class="pb border-muted-200 dark:border-muted-800 border-b">
                  <BaseHeading
                    size="xl"
                    weight="medium"
                    class="text-muted-900 mb-8 dark:text-white"
                  >
                    New Credit Card
                  </BaseHeading>
                </div>

                <div v-if="fieldsWithErrors" class="mt-8">
                  <BaseMessage
                    @close="() => setErrors({})"
                  >
                    This form has {{ fieldsWithErrors }} errors, please review
                    them before submitting
                  </BaseMessage>
                </div>

                <div
                  class="space-y-8"
                >
                  <!-- Field -->
                  <BaseField
                    label="Associated account"
                    :error="errors.account"
                    class="pt-8"
                  >
                    <!-- Dropdown -->
                    <BaseDropdown rounded="lg">
                      <template #button>
                        <BaseButton
                          size="xl"
                          rounded="lg"
                          class="h-auto! w-full p-4!"
                          :class="[errors.account ? 'border-destructive-500!' : '']"
                        >
                          <span class="flex w-full items-center gap-3 text-start">
                            <TairoLogo v-if="values?.account" class="text-primary-500 size-8" />
                            <TairoLogo v-else class="text-muted-300 dark:text-muted-800 size-8" />
                            <div v-if="values?.account">
                              <BaseText
                                size="sm"
                                class="text-muted-800 dark:text-muted-200 block capitalize"
                              >
                                {{ values.account.type }} {{ values.account.label }}
                              </BaseText>
                              <BaseText
                                size="xs"
                                class="text-muted-500 dark:text-muted-400 block"
                              >
                                ${{ values.account.balance?.toFixed(2) }}
                              </BaseText>
                            </div>
                            <span v-else>
                              Select an account
                            </span>
                            <Icon
                              name="lucide:chevron-down"
                              class="text-muted-400 ms-auto size-4 transition-transform duration-300 in-data-[state=open]:rotate-180"
                            />
                          </span>
                        </BaseButton>
                      </template>
                      <BaseDropdownItem
                        v-for="account in accounts.filter((account) => account.id !== values?.account?.id)"
                        :key="account.id"
                        :title="`${account.type} ${account.label}`"
                        :text="`$${account.balance.toFixed(2)}`"
                        class="w-full"
                        @click="setFieldValue('account', account)"
                      >
                        <template #start>
                          <TairoLogo
                            class="text-muted-300 dark:text-muted-700 group-hover:text-primary-500 size-8"
                          />
                        </template>
                      </BaseDropdownItem>
                    </BaseDropdown>
                  </BaseField>
                  <Field
                    v-slot="{
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur,
                    }"
                    name="owner"
                  >
                    <BaseField
                      v-slot="{ inputAttrs, inputRef }"
                      label="Who is this card for?"
                      :error="errorMessage"
                      :state="errorMessage ? 'error' : 'idle'"
                      :disabled="isSubmitting"
                    >
                      <BaseSelect
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        :model-value="field.value"
                        placeholder="Select Someone"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      >
                        <BaseSelectItem value="Maya Rosselini">
                          Maya Rosselini
                        </BaseSelectItem>
                        <BaseSelectItem value="Kaleb Wilson">
                          Kaleb Wilson
                        </BaseSelectItem>
                        <BaseSelectItem value="Amber Wilson">
                          Amber Wilson
                        </BaseSelectItem>
                        <BaseSelectItem value="Jennifer Wilson">
                          Jennifer Wilson
                        </BaseSelectItem>
                        <BaseSelectItem value="John Baxter">
                          John Baxter
                        </BaseSelectItem>
                      </BaseSelect>
                    </BaseField>
                  </Field>
                  <Field
                    v-slot="{
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur,
                    }"
                    name="brand"
                  >
                    <BaseField
                      v-slot="{ inputAttrs, inputRef }"
                      label="What kind of card do you need?"
                      :error="errorMessage"
                      :state="errorMessage ? 'error' : 'idle'"
                      :disabled="isSubmitting"
                    >
                      <BaseSelect
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        :model-value="field.value"
                        placeholder="Select a card brand"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      >
                        <BaseSelectItem value="visa">
                          Visa
                        </BaseSelectItem>
                        <BaseSelectItem value="mastercard">
                          Mastercard
                        </BaseSelectItem>
                      </BaseSelect>
                    </BaseField>
                  </Field>
                  <Field
                    v-slot="{
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur,
                    }"
                    name="type"
                  >
                    <BaseField
                      v-slot="{ inputAttrs, inputRef }"
                      label="What type of card is it?"
                      :error="errorMessage"
                      :state="errorMessage ? 'error' : 'idle'"
                      :disabled="isSubmitting"
                    >
                      <BaseSelect
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        :model-value="field.value"
                        placeholder="Select a card type"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      >
                        <BaseSelectItem value="physical">
                          Physical
                        </BaseSelectItem>
                        <BaseSelectItem value="virtual">
                          Virtual
                        </BaseSelectItem>
                      </BaseSelect>
                    </BaseField>
                  </Field>
                  <!-- Field -->
                  <Field
                    v-slot="{
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur,
                    }"
                    name="dailySpend"
                  >
                    <BaseField
                      v-slot="{ inputAttrs, inputRef }"
                      label="What's the daily spend limit?"
                      :error="errorMessage"
                      :state="errorMessage ? 'error' : 'idle'"
                      :disabled="isSubmitting"
                    >
                      <BaseInputNumber
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        :model-value="field.value"
                        placeholder="0.00"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                    </BaseField>
                  </Field>
                  <Field
                    v-slot="{
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur,
                    }"
                    name="dailyWithdraw"
                  >
                    <BaseField
                      v-slot="{ inputAttrs, inputRef }"
                      label="What's the daily withdrawal limit?"
                      :error="errorMessage"
                      :state="errorMessage ? 'error' : 'idle'"
                      :disabled="isSubmitting"
                    >
                      <BaseInputNumber
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        :model-value="field.value"
                        placeholder="0.00"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                    </BaseField>
                  </Field>
                  <!-- Buttons -->
                  <div class="flex flex-col-reverse gap-4 py-8 sm:flex-row">
                    <div
                      class="inline-flex h-12 w-full items-center justify-center"
                    >
                      <BaseParagraph
                        size="sm"
                        class="text-muted-600 dark:text-muted-400"
                      >
                        The card will be activated within 1-2 business days.
                      </BaseParagraph>
                    </div>
                    <BaseButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      rounded="md"
                      class="w-full"
                      :loading="isSubmitting"
                    >
                      Issue New Card
                    </BaseButton>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card column -->
            <div class="relative md:col-span-5 lg:col-span-5">
              <!-- Tabs -->
              <div class="sticky top-20">
                <DemoCreditCardReal
                  status="active"
                  :name="values?.owner"
                  :number="values?.account?.number"
                  :brand="values?.brand"
                  contrast="high"
                />
              </div>
            </div>
          </form>
        </div>

        <!-- Success section -->
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
              Credit card created!
            </BaseHeading>
            <BaseParagraph class="text-muted-500 dark:text-muted-400 mb-5">
              Amazing! You've properly created your new card. We'll let you know
              as soon as it has been sent to you.
            </BaseParagraph>
            <div class="flex justify-center">
              <BaseButton
                to="/layouts/cards"
                variant="primary"
                rounded="md"
                class="w-48"
              >
                Back to Cards
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
