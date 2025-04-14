<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useFieldError, useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({
  title: 'New Contact',
  preview: {
    title: 'New Contact',
    description: 'For contact creation',
    categories: ['layouts', 'forms'],
    src: '/img/screens/layouts-contacts-create.png',
    srcDark: '/img/screens/layouts-contacts-create-dark.png',
    order: 47,
    new: true,
  },
})

// This is the object that will contain the validation messages
const ONE_MB = 1000000
const VALIDATION_TEXT = {
  FIRST_NAME_REQUIRED: 'First name can\'t be empty',
  LAST_NAME_REQUIRED: 'Last name can\'t be empty',
  COMPANY_NAME_REQUIRED: 'Company name can\'t be empty',
  TITLE_REQUIRED: 'Title can\'t be empty',
  EMAIL_REQUIRED: 'Email address can\'t be empty',
  PHONE_REQUIRED: 'Phone number can\'t be empty',
  STATUS_REQUIRED: 'Pick a status',
  ADDRESS_REQUIRED: 'Please enter an address',
  CITY_REQUIRED: 'Please enter a city',
  STATE_REQUIRED: 'Please enter a state',
  ZIPCODE_REQUIRED: 'Please enter a zipcode',
  ACCOUNT_NUMBER_REQUIRED: 'Account number can\'t be empty',
  IBAN_REQUIRED: 'IBAN can\'t be empty',
  ROUTING_NUMBER_REQUIRED: 'Routing number can\'t be empty',
  TAXID_REQUIRED: 'Tax ID can\'t be empty',
  AVATAR_TOO_BIG: `Avatar size must be less than 1MB`,
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
    avatar: z.custom<File>(v => v instanceof File).nullable(),
    contact: z.object({
      firstName: z
        .string()
        .min(1, VALIDATION_TEXT.FIRST_NAME_REQUIRED)
        .optional(),
      lastName: z
        .string()
        .min(1, VALIDATION_TEXT.LAST_NAME_REQUIRED)
        .optional(),
      companyName: z
        .string()
        .min(1, VALIDATION_TEXT.COMPANY_NAME_REQUIRED)
        .optional(),
      title: z.string().min(1, VALIDATION_TEXT.TITLE_REQUIRED),
      email: z.string().min(1, VALIDATION_TEXT.EMAIL_REQUIRED),
      phone: z.string().min(1, VALIDATION_TEXT.PHONE_REQUIRED),
      status: z.union([z.literal('active'), z.literal('inactive')]).nullable(),
      type: z.union([z.literal('person'), z.literal('company')]).nullable(),
      gender: z
        .union([z.literal('male'), z.literal('female'), z.literal('other')])
        .optional(),
      address: z.string().min(1, VALIDATION_TEXT.ADDRESS_REQUIRED),
      city: z.string().min(1, VALIDATION_TEXT.CITY_REQUIRED),
      state: z.string().min(1, VALIDATION_TEXT.STATE_REQUIRED),
      zipcode: z.string().min(5, VALIDATION_TEXT.ZIPCODE_REQUIRED),
      country: z.string(),
      accountNumber: z
        .number()
        .min(16, VALIDATION_TEXT.ACCOUNT_NUMBER_REQUIRED)
        .nullable(),
      routingNumber: z
        .number()
        .min(5, VALIDATION_TEXT.ROUTING_NUMBER_REQUIRED)
        .nullable(),
      iban: z.string().min(5, VALIDATION_TEXT.IBAN_REQUIRED).nullable(),
      taxId: z.string().min(5, VALIDATION_TEXT.TAXID_REQUIRED).nullable(),
      paymentMethod: z
        .union([z.literal('paypal'), z.literal('stripe'), z.literal('custom')])
        .nullable(),
    }),
  })
  .superRefine((data, ctx) => {
    // This is a custom validation function that will be called
    // before the form is submitted
    if (data.avatar && data.avatar.size > ONE_MB) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.AVATAR_TOO_BIG,
        path: ['avatar'],
      })
    }
    if (data.contact.firstName === '' && data.contact.type === 'person') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.FIRST_NAME_REQUIRED,
        path: ['contact.firstName'],
      })
    }
    if (data.contact.lastName === '' && data.contact.type === 'person') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.LAST_NAME_REQUIRED,
        path: ['contact.lastName'],
      })
    }
    if (data.contact.companyName === '' && data.contact.type === 'company') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.COMPANY_NAME_REQUIRED,
        path: ['contact.companyName'],
      })
    }
    if (!data.contact.status) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.STATUS_REQUIRED,
        path: ['contact.status'],
      })
    }
  })

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = {
  avatar: null,
  contact: {
    firstName: '',
    lastName: '',
    companyName: '',
    title: '',
    email: '',
    phone: '',
    type: 'person',
    gender: 'male',
    status: 'active',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    country: 'United States',
    accountNumber: null,
    routingNumber: null,
    iban: null,
    taxId: null,
    paymentMethod: null,
  },
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

// This is the computed value that will be used to display the current avatar
const currentAvatar = computed(
  () => `/img/avatars/default-${values.contact?.gender ? values.contact?.gender : 'male'}.jpg`,
)

const success = ref(false)
const fieldsWithErrors = computed(() => Object.keys(errors.value).length)

// TairoInputFileHeadless gives us a listfile input, but we need to
// extract the file from the list and set it to the form
const inputFile = ref<FileList | null>(null)
const fileError = useFieldError('avatar')
watch(inputFile, (value) => {
  const file = value?.item(0) || null
  setFieldValue('avatar', file)
})

// Ask the user for confirmation before leaving the page if the form has unsaved changes
onBeforeRouteLeave(() => {
  if (meta.value.dirty) {
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
    // console.log('contact-create-success', values)

    try {
      // fake delay, this will make isSubmitting value to be true
      await new Promise((resolve, reject) => {
        if (values.contact.title === 'Clown') {
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
        description: `Contact has been created!`,
        icon: 'ph:check',
        progress: true,
      })
    }
    catch (error: any) {
      // this will set the error on the form
      if (error.message === 'Fake backend validation error') {
        setFieldError('contact.title', 'This title is not allowed')

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

    resetForm()

    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    success.value = true
    setTimeout(() => {
      success.value = false
    }, 3000)
  },
  (_error) => {
    // this callback is optional and called only if the form has errors
    success.value = false

    // here you have access to the error
    // console.log('contact-create-error', error)

    // you can use it to scroll to the first error
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  },
)
</script>

<template>
  <div class="w-full px-4 md:px-6 lg:px-8 pb-20 dark:[--color-input-default-bg:var(--color-muted-950)]">
    <div>
      <form
        method="POST"
        action=""
        novalidate
        @submit.prevent="onSubmit"
      >
        <div class="space-y-8">
          <div class="mx-auto flex w-full max-w-2xl flex-col">
            <div>
              <div>
                <div
                  class="relative mb-5 flex flex-col items-center justify-center gap-4"
                >
                  <TairoFullscreenDropfile
                    icon="solar:gallery-linear"
                    :filter-file-dropped="
                      (file) => file.type.startsWith('image')
                    "
                    @drop="
                      (value) => {
                        inputFile = value
                      }
                    "
                  />
                  <TairoInputFileHeadless
                    v-slot="{ open, remove, preview, files }"
                    v-model="inputFile"
                    accept="image/*"
                  >
                    <div class="relative size-28">
                      <img
                        v-if="files?.length && files.item(0)"
                        :src="preview(files.item(0)!).value"
                        alt="Upload preview"
                        class="bg-muted-200 dark:bg-muted-700/60 size-28 rounded-full object-cover object-center"
                      >
                      <img
                        v-else
                        :src="values.contact?.type === 'person' ? currentAvatar : '/img/avatars/company.svg'"
                        alt="Upload preview"
                        class="bg-muted-200 dark:bg-muted-700/60 size-28 rounded-full object-cover object-center dark:invert"
                      >
                      <div
                        v-if="files?.length && files.item(0)"
                        class="absolute bottom-1 end-1 z-20"
                      >
                        <BaseButton
                          size="icon-sm"
                          rounded="full"
                          data-tooltip="Remove image"
                          class="scale-90"
                          @click="remove(files.item(0)!)"
                        >
                          <Icon name="lucide:x" class="size-4" />
                        </BaseButton>
                      </div>
                      <div v-else class="absolute bottom-1 end-1 z-20">
                        <div class="relative" data-tooltip="Upload image">
                          <BaseButton
                            size="icon-sm"
                            rounded="full"
                            @click="open"
                          >
                            <Icon name="lucide:plus" class="size-4" />
                          </BaseButton>
                        </div>
                      </div>
                    </div>
                  </TairoInputFileHeadless>
                  <div
                    v-if="fileError"
                    class="text-destructive-600 inline-block font-sans text-[.8rem]"
                  >
                    {{ fileError }}
                  </div>
                </div>
                <!-- Form fields -->
                <div class="space-y-16">
                  <!-- Personal info -->
                  <TairoFormGroup
                    label="Personal info"
                    sublabel="Basic info about your contact"
                  >
                    <div class="grid grid-cols-12 gap-4">
                      <div
                        v-if="values.contact?.type === 'person'"
                        class="col-span-12 lg:col-span-6"
                      >
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.firstName"
                        >
                          <BaseField
                            v-slot="{ inputAttrs, inputRef }"
                            label="First Name"
                            :state="errorMessage ? 'error' : 'idle'"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            required
                          >
                            <TairoInput
                              :ref="inputRef"
                              v-bind="inputAttrs"
                              icon="solar:user-rounded-linear"
                              placeholder="Ex: John"
                              :model-value="field.value"
                              type="text"
                              @update:model-value="handleChange"
                              @blur="handleBlur"
                            />
                          </BaseField>
                        </Field>
                      </div>
                      <div
                        v-if="values.contact?.type === 'person'"
                        class="col-span-12 lg:col-span-6"
                      >
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.lastName"
                        >
                          <BaseField
                            v-slot="{ inputAttrs, inputRef }"
                            label="Last Name"
                            :state="errorMessage ? 'error' : 'idle'"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            required
                          >
                            <TairoInput
                              :ref="inputRef"
                              v-bind="inputAttrs"
                              icon="solar:user-rounded-linear"
                              placeholder="Ex: Doe"
                              :model-value="field.value"
                              type="text"
                              @update:model-value="handleChange"
                              @blur="handleBlur"
                            />
                          </BaseField>
                        </Field>
                      </div>
                      <div
                        v-if="values.contact?.type === 'company'"
                        class="col-span-12"
                      >
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.companyName"
                        >
                          <BaseField
                            v-slot="{ inputAttrs, inputRef }"
                            label="Company Name"
                            :state="errorMessage ? 'error' : 'idle'"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            required
                          >
                            <TairoInput
                              :ref="inputRef"
                              v-bind="inputAttrs"
                              icon="solar:buildings-linear"
                              placeholder="Ex: Acme Inc."
                              :model-value="field.value"
                              type="text"
                              @update:model-value="handleChange"
                              @blur="handleBlur"
                            />
                          </BaseField>
                        </Field>
                      </div>
                      <div class="col-span-12 lg:col-span-6">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.title"
                        >
                          <BaseField
                            v-slot="{ inputAttrs, inputRef }"
                            label="Title / Category"
                            :state="errorMessage ? 'error' : 'idle'"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            required
                          >
                            <TairoInput
                              :ref="inputRef"
                              v-bind="inputAttrs"
                              icon="solar:suitcase-lines-linear"
                              placeholder="Ex: Freelance / Software company"
                              :model-value="field.value"
                              type="text"
                              @update:model-value="handleChange"
                              @blur="handleBlur"
                            />
                          </BaseField>
                        </Field>
                      </div>
                      <div class="col-span-12 lg:col-span-6">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.email"
                        >
                          <BaseField
                            v-slot="{ inputAttrs, inputRef }"
                            label="Contact Email"
                            :state="errorMessage ? 'error' : 'idle'"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            required
                          >
                            <TairoInput
                              :ref="inputRef"
                              v-bind="inputAttrs"
                              icon="solar:letter-linear"
                              placeholder="Ex: hello@acme.co"
                              :model-value="field.value"
                              type="email"
                              @update:model-value="handleChange"
                              @blur="handleBlur"
                            />
                          </BaseField>
                        </Field>
                      </div>
                      <div class="col-span-12 lg:col-span-6">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.phone"
                        >
                          <BaseField
                            v-slot="{ inputAttrs, inputRef }"
                            label="Phone Number"
                            :state="errorMessage ? 'error' : 'idle'"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            required
                          >
                            <TairoInput
                              :ref="inputRef"
                              v-bind="inputAttrs"
                              icon="solar:phone-rounded-linear"
                              placeholder="Ex: +1 555 123 4567"
                              :model-value="field.value"
                              type="tel"
                              @update:model-value="handleChange"
                              @blur="handleBlur"
                            />
                          </BaseField>
                        </Field>
                      </div>
                      <div class="col-span-12 lg:col-span-6">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.status"
                        >
                          <BaseField
                            v-slot="{ inputAttrs, inputRef }"
                            label="Status"
                            :state="errorMessage ? 'error' : 'idle'"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            required
                          >
                            <BaseSelect
                              :ref="inputRef"
                              v-bind="inputAttrs"
                              rounded="md"
                              :model-value="field.value"
                              @update:model-value="handleChange"
                              @blur="handleBlur"
                            >
                              <BaseSelectItem value="active">
                                Active
                              </BaseSelectItem>
                              <BaseSelectItem value="inactive">
                                Inactive
                              </BaseSelectItem>
                            </BaseSelect>
                          </BaseField>
                        </Field>
                      </div>
                      <div class="col-span-12">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                          }"
                          name="contact.type"
                        >
                          <BaseField
                            label="Contact type"
                            :state="errorMessage ? 'error' : 'idle'"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                          >
                            <BaseRadioGroup
                              class="grid gap-4 sm:grid-cols-2 *:py-6"
                              :model-value="field.value"
                              @update:model-value="handleChange"
                            >
                              <TairoRadioCard
                                value="person"
                                icon="solar:user-rounded-linear"
                                label="Person"
                                subtitle="Personal contact"
                              />
                              <TairoRadioCard
                                value="company"
                                icon="solar:buildings-2-linear"
                                label="Company"
                                subtitle="Enterprise contact"
                              />
                            </BaseRadioGroup>
                          </BaseField>
                        </Field>
                      </div>
                      <div
                        v-show="values.contact?.type === 'person'"
                        class="col-span-12"
                      >
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                          }"
                          name="contact.gender"
                        >
                          <BaseField
                            label="Gender"
                            :state="errorMessage ? 'error' : 'idle'"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                          >
                            <BaseRadioGroup
                              class="grid gap-4 sm:grid-cols-3"
                              :model-value="field.value"
                              @update:model-value="handleChange"
                            >
                              <TairoRadioCard
                                value="male"
                                icon="ph:gender-male-duotone"
                                label="Male"
                              />
                              <TairoRadioCard
                                value="female"
                                icon="ph:gender-female-duotone"
                                label="Female"
                              />
                              <TairoRadioCard
                                value="other"
                                icon="ph:gender-neuter-duotone"
                                label="Other"
                              />
                            </BaseRadioGroup>
                          </BaseField>
                        </Field>
                      </div>
                    </div>
                  </TairoFormGroup>

                  <!-- Address info -->
                  <TairoFormGroup
                    label="Address info"
                    sublabel="Add the address of your contact"
                  >
                    <div class="grid grid-cols-12 gap-4">
                      <Field
                        v-slot="{
                          field,
                          errorMessage,
                          handleChange,
                          handleBlur,
                        }"
                        name="contact.address"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Address / Street"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            icon="solar:map-point-linear"
                            placeholder="Ex: App 12 suite G4 Santa Barbara"
                            :model-value="field.value"
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
                        name="contact.city"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="City"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12 sm:col-span-4"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            icon="solar:buildings-linear"
                            placeholder="Ex: Los Angeles"
                            :model-value="field.value"
                            type="text"
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
                        name="contact.state"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="State / Province"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12 sm:col-span-4"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            icon="solar:earth-linear"
                            placeholder="Ex: CA"
                            :model-value="field.value"
                            type="text"
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
                        name="contact.zipcode"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Zip Code"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12 sm:col-span-4"
                          required
                        >
                          <BaseInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            icon="solar:box-linear"
                            placeholder="Ex: 912656"
                            :model-value="field.value"
                            type="text"
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
                        name="contact.country"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Country"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12"
                          required
                        >
                          <BaseSelect
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            rounded="md"
                            :model-value="field.value"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          >
                            <BaseSelectItem
                              v-for="value in ['United States', 'Canada', 'France', 'Germany', 'Spain', 'China', 'Japan']"
                              :key="value"
                              :value
                            >
                              {{ value }}
                            </BaseSelectItem>
                          </BaseSelect>
                        </BaseField>
                      </Field>
                    </div>
                  </TairoFormGroup>

                  <!-- Address info -->
                  <TairoFormGroup
                    label="Financial info"
                    sublabel="Add your contact's financial details"
                  >
                    <div class="grid grid-cols-12 gap-4">
                      <Field
                        v-slot="{
                          field,
                          errorMessage,
                          handleChange,
                          handleBlur,
                        }"
                        name="contact.accountNumber"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Account Number"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12 lg:col-span-6"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            icon="solar:card-linear"
                            placeholder="Ex: 4134 1213 3298 4273"
                            :model-value="field.value"
                            type="number"
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
                        name="contact.iban"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="IBAN"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12 lg:col-span-6"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            icon="solar:sort-horizontal-linear"
                            placeholder="Ex: USX35B"
                            :model-value="field.value"
                            type="text"
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
                        name="contact.routingNumber"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Routing Number"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12 lg:col-span-6"
                          required
                        >
                          <BaseInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            icon="solar:compass-square-linear"
                            placeholder="Ex: 2873213"
                            :model-value="field.value"
                            type="number"
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
                        name="contact.taxId"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Tax ID"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12 lg:col-span-6"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            icon="solar:document-linear"
                            placeholder="Ex: TX-DHDZ526"
                            :model-value="field.value"
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
                        name="contact.paymentMethod"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Payment Method"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12"
                          required
                        >
                          <BaseSelect
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            rounded="md"
                            :model-value="field.value"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          >
                            <BaseSelectItem value="stripe">
                              Stripe
                            </BaseSelectItem>
                            <BaseSelectItem value="paypal">
                              Paypal
                            </BaseSelectItem>
                            <BaseSelectItem value="custom">
                              Custom
                            </BaseSelectItem>
                          </BaseSelect>
                        </BaseField>
                      </Field>
                    </div>
                  </TairoFormGroup>

                  <div
                    class="mt-5 flex flex-col-reverse text-end md:block md:space-x-3"
                  >
                    <BaseButton
                      to="/layouts/payments/recipients"
                      type="button"
                      variant="muted"
                      class="w-full sm:w-44"
                      rounded="md"
                    >
                      Cancel
                    </BaseButton>
                    <BaseButton
                      type="submit"
                      variant="primary"
                      class="w-full sm:w-44"
                      rounded="md"
                      :loading="isSubmitting"
                    >
                      Save Contact
                    </BaseButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
