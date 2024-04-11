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
  () => `/img/avatars/default-${values.contact?.gender}.jpg`,
)

const success = ref(false)
const fieldsWithErrors = computed(() => Object.keys(errors.value).length)

// BaseInputFileHeadless gives us a listfile input, but we need to
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
    return confirm('You have unsaved changes. Are you sure you want to leave?')
  }
})

const toaster = useToaster()

// This is where you would send the form data to the server
const onSubmit = handleSubmit(
  async (values) => {
    success.value = false

    // here you have access to the validated form values
    console.log('contact-create-success', values)

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

      toaster.clearAll()
      toaster.show({
        title: 'Success',
        message: `Contact has been created!`,
        color: 'success',
        icon: 'ph:check',
        closable: true,
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

        toaster.clearAll()
        toaster.show({
          title: 'Oops!',
          message: 'Please review the errors in the form',
          color: 'danger',
          icon: 'lucide:alert-triangle',
          closable: true,
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
  (error) => {
    // this callback is optional and called only if the form has errors
    success.value = false

    // here you have access to the error
    console.log('contact-create-error', error)

    // you can use it to scroll to the first error
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  },
)
</script>

<template>
  <div class="w-full">
    <div>
      <form
        method="POST"
        action=""
        class=""
        @submit.prevent="onSubmit"
      >
        <div class="space-y-8">
          <div class="mx-auto flex w-full max-w-2xl flex-col">
            <div>
              <div>
                <div
                  class="relative mb-5 flex flex-col items-center justify-center gap-4"
                >
                  <BaseFullscreenDropfile
                    icon="ph:image-duotone"
                    :filter-file-dropped="
                      (file) => file.type.startsWith('image')
                    "
                    @drop="
                      (value) => {
                        inputFile = value
                      }
                    "
                  />
                  <BaseInputFileHeadless
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
                        :src="currentAvatar"
                        alt="Upload preview"
                        class="bg-muted-200 dark:bg-muted-700/60 size-28 rounded-full object-cover object-center dark:invert"
                      >
                      <div
                        v-if="files?.length && files.item(0)"
                        class="absolute bottom-1 end-1 z-20"
                      >
                        <BaseButtonIcon
                          size="sm"
                          rounded="full"
                          data-tooltip="Remove image"
                          class="scale-90"
                          @click="remove(files.item(0)!)"
                        >
                          <Icon name="lucide:x" class="size-4" />
                        </BaseButtonIcon>
                      </div>
                      <div v-else class="absolute bottom-1 end-1 z-20">
                        <div class="relative" data-tooltip="Upload image">
                          <BaseButtonIcon
                            size="sm"
                            rounded="full"
                            @click="open"
                          >
                            <Icon name="lucide:plus" class="size-4" />
                          </BaseButtonIcon>
                        </div>
                      </div>
                    </div>
                  </BaseInputFileHeadless>
                  <div
                    v-if="fileError"
                    class="text-danger-600 inline-block font-sans text-[.8rem]"
                  >
                    {{ fileError }}
                  </div>
                </div>
                <!--Form fields-->
                <div class="space-y-12">
                  <!--Personal info-->
                  <TairoFormGroup
                    label="Personal info"
                    sublabel="Basic info about your contact"
                  >
                    <div class="grid grid-cols-12 gap-4">
                      <div
                        v-if="values.contact?.type === 'person'"
                        class="ltablet:col-span-6 col-span-12 lg:col-span-6"
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
                          <BaseInput
                            label="First Name"
                            icon="ph:user-duotone"
                            placeholder="Ex: John"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            type="text"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </Field>
                      </div>
                      <div
                        v-if="values.contact?.type === 'person'"
                        class="ltablet:col-span-6 col-span-12 lg:col-span-6"
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
                          <BaseInput
                            label="Last Name"
                            icon="ph:user-duotone"
                            placeholder="Ex: Doe"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            type="text"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
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
                          <BaseInput
                            label="Company Name"
                            icon="ph:buildings-duotone"
                            placeholder="Ex: Acme Inc."
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            type="text"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </Field>
                      </div>
                      <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.title"
                        >
                          <BaseInput
                            label="Title / Category"
                            icon="ph:suitcase-duotone"
                            placeholder="Ex: Freelance / Software company"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            type="text"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </Field>
                      </div>
                      <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.email"
                        >
                          <BaseInput
                            label="Contact Email"
                            icon="ph:envelope-duotone"
                            placeholder="Ex: hello@acme.co"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            type="email"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </Field>
                      </div>
                      <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.phone"
                        >
                          <BaseInput
                            icon="lucide:phone"
                            label="Phone Number"
                            placeholder="Ex: +1 555 123 4567"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            type="text"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </Field>
                      </div>
                      <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.status"
                        >
                          <BaseSelect
                            rounded="md"
                            label="Status"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          >
                            <option value="" hidden />
                            <option value="active">
                              Active
                            </option>
                            <option value="inactive">
                              Inactive
                            </option>
                          </BaseSelect>
                        </Field>
                      </div>
                      <div class="col-span-12">
                        <div class="">
                          <label class="nui-label pb-2 text-[0.825rem]">Contact type</label>
                          <div class="grid gap-4 sm:grid-cols-2">
                            <Field
                              v-slot="{
                                field,
                                errorMessage,
                                handleChange,
                                handleBlur,
                              }"
                              name="contact.type"
                            >
                              <BaseRadioHeadless
                                value="person"
                                :model-value="field.value"
                                :error="errorMessage"
                                :disabled="isSubmitting"
                                @update:model-value="handleChange"
                                @blur="handleBlur"
                              >
                                <BaseCard
                                  rounded="md"
                                  class="text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-6"
                                  color="none"
                                >
                                  <div
                                    class="flex w-full flex-col items-center gap-2 text-center"
                                  >
                                    <Icon
                                      name="ph:user-duotone"
                                      class="child mx-auto size-6"
                                    />

                                    <div>
                                      <BaseHeading
                                        as="h4"
                                        size="sm"
                                        weight="medium"
                                        lead="none"
                                      >
                                        Person
                                      </BaseHeading>

                                      <BaseText
                                        size="xs"
                                        class="text-muted-400"
                                      >
                                        Personal contact
                                      </BaseText>
                                    </div>

                                    <div
                                      class="child text-muted-300 absolute end-2 top-2 ms-auto"
                                    >
                                      <div
                                        class="size-2 rounded-full bg-current"
                                      />
                                    </div>
                                  </div>
                                </BaseCard>
                              </BaseRadioHeadless>
                            </Field>

                            <Field
                              v-slot="{
                                field,
                                errorMessage,
                                handleChange,
                                handleBlur,
                              }"
                              name="contact.type"
                            >
                              <BaseRadioHeadless
                                value="company"
                                :model-value="field.value"
                                :error="errorMessage"
                                :disabled="isSubmitting"
                                @update:model-value="handleChange"
                                @blur="handleBlur"
                              >
                                <BaseCard
                                  rounded="md"
                                  class="text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-6"
                                  color="none"
                                >
                                  <div
                                    class="flex w-full flex-col items-center gap-2 text-center"
                                  >
                                    <Icon
                                      name="ph:buildings-duotone"
                                      class="child mx-auto size-6"
                                    />

                                    <div>
                                      <BaseHeading
                                        as="h4"
                                        size="sm"
                                        weight="medium"
                                        lead="none"
                                      >
                                        Company
                                      </BaseHeading>

                                      <BaseText
                                        size="xs"
                                        class="text-muted-400"
                                      >
                                        Enterprise contact
                                      </BaseText>
                                    </div>

                                    <div
                                      class="child text-muted-300 absolute end-2 top-2 ms-auto"
                                    >
                                      <div
                                        class="size-2 rounded-full bg-current"
                                      />
                                    </div>
                                  </div>
                                </BaseCard>
                              </BaseRadioHeadless>
                            </Field>
                          </div>
                        </div>
                      </div>
                      <div
                        v-if="values.contact?.type === 'person'"
                        class="col-span-12"
                      >
                        <div class="">
                          <label class="nui-label pb-2 text-[0.825rem]">Gender</label>
                          <div class="grid gap-4 sm:grid-cols-3">
                            <Field
                              v-slot="{
                                field,
                                errorMessage,
                                handleChange,
                                handleBlur,
                              }"
                              name="contact.gender"
                            >
                              <BaseRadioHeadless
                                value="male"
                                :model-value="field.value"
                                :error="errorMessage"
                                :disabled="isSubmitting"
                                @update:model-value="handleChange"
                                @blur="handleBlur"
                              >
                                <BaseCard
                                  rounded="md"
                                  class="text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-6"
                                  color="none"
                                >
                                  <div
                                    class="flex w-full flex-col items-center gap-2 text-center"
                                  >
                                    <Icon
                                      name="ph:gender-male-duotone"
                                      class="child mx-auto size-6"
                                    />

                                    <div>
                                      <BaseHeading
                                        as="h4"
                                        size="sm"
                                        weight="medium"
                                        lead="none"
                                      >
                                        Male
                                      </BaseHeading>
                                    </div>

                                    <div
                                      class="child text-muted-300 absolute end-2 top-2 ms-auto"
                                    >
                                      <div
                                        class="size-2 rounded-full bg-current"
                                      />
                                    </div>
                                  </div>
                                </BaseCard>
                              </BaseRadioHeadless>
                            </Field>

                            <Field
                              v-slot="{
                                field,
                                errorMessage,
                                handleChange,
                                handleBlur,
                              }"
                              name="contact.gender"
                            >
                              <BaseRadioHeadless
                                value="female"
                                :model-value="field.value"
                                :error="errorMessage"
                                :disabled="isSubmitting"
                                @update:model-value="handleChange"
                                @blur="handleBlur"
                              >
                                <BaseCard
                                  rounded="md"
                                  class="text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-6"
                                  color="none"
                                >
                                  <div
                                    class="flex w-full flex-col items-center gap-2 text-center"
                                  >
                                    <Icon
                                      name="ph:gender-female-duotone"
                                      class="child mx-auto size-6"
                                    />

                                    <div>
                                      <BaseHeading
                                        as="h4"
                                        size="sm"
                                        weight="medium"
                                        lead="none"
                                      >
                                        Female
                                      </BaseHeading>
                                    </div>

                                    <div
                                      class="child text-muted-300 absolute end-2 top-2 ms-auto"
                                    >
                                      <div
                                        class="size-2 rounded-full bg-current"
                                      />
                                    </div>
                                  </div>
                                </BaseCard>
                              </BaseRadioHeadless>
                            </Field>

                            <Field
                              v-slot="{
                                field,
                                errorMessage,
                                handleChange,
                                handleBlur,
                              }"
                              name="contact.gender"
                            >
                              <BaseRadioHeadless
                                value="other"
                                :model-value="field.value"
                                :error="errorMessage"
                                :disabled="isSubmitting"
                                @update:model-value="handleChange"
                                @blur="handleBlur"
                              >
                                <BaseCard
                                  rounded="md"
                                  class="text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-6"
                                  color="none"
                                >
                                  <div
                                    class="flex w-full flex-col items-center gap-2 text-center"
                                  >
                                    <Icon
                                      name="ph:gender-neuter-duotone"
                                      class="child mx-auto size-6"
                                    />

                                    <div>
                                      <BaseHeading
                                        as="h4"
                                        size="sm"
                                        weight="medium"
                                        lead="none"
                                      >
                                        Other
                                      </BaseHeading>
                                    </div>

                                    <div
                                      class="child text-muted-300 absolute end-2 top-2 ms-auto"
                                    >
                                      <div
                                        class="size-2 rounded-full bg-current"
                                      />
                                    </div>
                                  </div>
                                </BaseCard>
                              </BaseRadioHeadless>
                            </Field>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TairoFormGroup>

                  <!--Address info-->
                  <TairoFormGroup
                    label="Address info"
                    sublabel="Add the address of your contact"
                  >
                    <div class="grid grid-cols-12 gap-4">
                      <div class="col-span-12">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.address"
                        >
                          <BaseInput
                            label="Address / Street"
                            icon="ph:map-pin-duotone"
                            placeholder="Ex: App 12 suite G4 Santa Barbara"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </Field>
                      </div>
                      <div class="col-span-12 sm:col-span-4">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.city"
                        >
                          <BaseInput
                            label="City"
                            icon="ph:buildings-duotone"
                            placeholder="Ex: Los Angeles"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            type="text"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </Field>
                      </div>
                      <div class="col-span-12 sm:col-span-4">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.state"
                        >
                          <BaseInput
                            label="State/Province"
                            icon="ph:globe-duotone"
                            placeholder="Ex: CA"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            type="text"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </Field>
                      </div>
                      <div class="col-span-12 sm:col-span-4">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.zipcode"
                        >
                          <BaseInput
                            type="text"
                            label="Zip Code"
                            icon="ph:paper-plane-tilt-duotone"
                            placeholder="Ex: 912656"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </Field>
                      </div>
                      <div class="col-span-12">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.country"
                        >
                          <BaseSelect
                            rounded="md"
                            label="Country"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          >
                            <option value="" hidden />
                            <option value="United States">
                              United States
                            </option>
                            <option value="Canada">
                              Canada
                            </option>
                            <option value="France">
                              France
                            </option>
                            <option value="Germany">
                              Germany
                            </option>
                            <option value="Spain">
                              Spain
                            </option>
                            <option value="China">
                              China
                            </option>
                            <option value="Japan">
                              Japan
                            </option>
                          </BaseSelect>
                        </Field>
                      </div>
                    </div>
                  </TairoFormGroup>

                  <!--Address info-->
                  <TairoFormGroup
                    label="Financial info"
                    sublabel="Add your contact's financial details"
                  >
                    <div class="grid grid-cols-12 gap-4">
                      <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.accountNumber"
                        >
                          <BaseInput
                            label="Account Number"
                            icon="ph:bank-duotone"
                            placeholder="Ex: 4134 1213 3298 4273"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            type="number"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </Field>
                      </div>
                      <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.iban"
                        >
                          <BaseInput
                            label="IBAN"
                            icon="ph:arrows-left-right-duotone"
                            placeholder="Ex: USX35B"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            type="text"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </Field>
                      </div>
                      <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.routingNumber"
                        >
                          <BaseInput
                            label="Routing Number"
                            icon="ph:compass-duotone"
                            placeholder="Ex: 2873213"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            type="number"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </Field>
                      </div>
                      <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.taxId"
                        >
                          <BaseInput
                            label="Tax ID"
                            icon="ph:note-duotone"
                            placeholder="Ex: TX-DHDZ526"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            type="text"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </Field>
                      </div>
                      <div class="col-span-12">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="contact.paymentMethod"
                        >
                          <BaseSelect
                            rounded="md"
                            label="Payment Method"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          >
                            <option value="" hidden />
                            <option value="stripe">
                              Stripe
                            </option>
                            <option value="paypal">
                              Paypal
                            </option>
                            <option value="custom">
                              Custom
                            </option>
                          </BaseSelect>
                        </Field>
                      </div>
                    </div>
                  </TairoFormGroup>

                  <div
                    class="mt-5 flex flex-col-reverse text-end md:block md:space-x-3"
                  >
                    <BaseButton
                      to="/layouts/payments/recipients"
                      type="button"
                      color="muted"
                      class="w-full sm:w-44"
                      size="lg"
                      rounded="md"
                    >
                      Cancel
                    </BaseButton>
                    <BaseButton
                      type="submit"
                      color="primary"
                      class="w-full sm:w-44"
                      size="lg"
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
