<script setup lang="ts">
import type { AddonInputPhone } from '#components'
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useFieldError, useForm } from 'vee-validate'

import { z } from 'zod'

definePageMeta({
  title: 'Create doctor',
  preview: {
    title: 'Form layout 2',
    description: 'For forms and input fields',
    categories: ['layouts', 'forms'],
    src: '/img/screens/layouts-form-2.png',
    srcDark: '/img/screens/layouts-form-2-dark.png',
    order: 48,
  },
})

// This is the object that will contain the validation messages
const ONE_MB = 1000000
const VALIDATION_TEXT = {
  FIRSTNAME_REQUIRED: 'First name can\'t be empty',
  LASTNAME_REQUIRED: 'Last name can\'t be empty',
  EMAIL_REQUIRED: 'Email address can\'t be empty',
  OPTION_REQUIRED: 'Please select an option',
  ADDRESS_REQUIRED: 'Please enter an address',
  CITY_REQUIRED: 'Please enter a city',
  STATE_REQUIRED: 'Please enter a state',
  ZIPCODE_REQUIRED: 'Please enter a zipcode',
  STATUS_REQUIRED: 'Pick a status',
  AVATAR_TOO_BIG: `Avatar size must be less than 1MB`,
}

const inputPhoneRef = ref<InstanceType<typeof AddonInputPhone>>()

function phoneErrorMessage(code?: string) {
  switch (code) {
    case 'INVALID_COUNTRY':
      return 'Please select a country'
    case 'NO_POSSIBLE_COUNTRIES':
      return 'No possible countries for this phone number'
    case 'PHONE_NUMBER_NOT_POSSIBLE':
      return 'This phone number is not valid for the selected country'
    case 'NOT_A_NUMBER':
    case 'TOO_SHORT':
    case 'TOO_LONG':
    default:
      return 'Please enter a valid phone number'
  }
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
    avatar: z.custom<File>(v => v instanceof File).nullable(),
    doctor: z.object({
      firstName: z.string().min(1, VALIDATION_TEXT.FIRSTNAME_REQUIRED),
      lastName: z.string().min(1, VALIDATION_TEXT.LASTNAME_REQUIRED),
      email: z.string().min(1, VALIDATION_TEXT.EMAIL_REQUIRED),
      comments: z.string().optional(),
      phone: z.string().optional(),
      status: z
        .union([
          z.literal('intern'),
          z.literal('resident'),
          z.literal('titular'),
        ])
        .nullable(),
      speciality: z
        .union([
          z.literal('Surgery'),
          z.literal('Cardiology'),
          z.literal('Pediatry'),
          z.literal('Dermataulogy'),
          z.literal('Traumatology'),
        ])
        .nullable(),
      experience: z
        .union([
          z.literal('0-5'),
          z.literal('5-10'),
          z.literal('10-15'),
          z.literal('15+'),
        ])
        .nullable(),
      rating: z
        .union([
          z.literal('1'),
          z.literal('2'),
          z.literal('3'),
          z.literal('4'),
          z.literal('5'),
        ])
        .nullable(),
      address: z.string().min(1, VALIDATION_TEXT.ADDRESS_REQUIRED),
      city: z.string().min(1, VALIDATION_TEXT.CITY_REQUIRED),
      state: z.string().min(1, VALIDATION_TEXT.STATE_REQUIRED),
      zipcode: z.string().min(5, VALIDATION_TEXT.ZIPCODE_REQUIRED),
      country: z.string(),
      position: z.object({
        lat: z.number(),
        lng: z.number(),
      }).optional(),
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
    if (!data.doctor.status) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.OPTION_REQUIRED,
        path: ['doctor.status'],
      })
    }
    if (!data.doctor.speciality) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.OPTION_REQUIRED,
        path: ['doctor.speciality'],
      })
    }
    if (!data.doctor.experience) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.OPTION_REQUIRED,
        path: ['doctor.experience'],
      })
    }
    if (!data.doctor.rating) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.OPTION_REQUIRED,
        path: ['doctor.rating'],
      })
    }

    if (!inputPhoneRef.value?.validation?.valid) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: phoneErrorMessage(inputPhoneRef.value?.validation?.error) || VALIDATION_TEXT.OPTION_REQUIRED,
        path: ['doctor.phone'],
      })
    }
  })

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = {
  avatar: null,
  doctor: {
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
    status: null,
    speciality: null,
    experience: null,
    rating: null,
    address: '',
    city: '',
    state: '',
    zipcode: '',
    country: 'United States',
    position: {
      lat: 34.009263094955244,
      lng: -118.42852935091915,
    },
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

const success = ref(false)
const interactiveMap = ref(false)
const fieldsWithErrors = computed(() => Object.keys(errors.value).length)

// TairoInputFileHeadless gives us a listfile input, but we need to
// extract the file from the list and set it to the form
const inputFile = ref<FileList | null>()
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
    // console.log('doctor-create-success', values)

    try {
      // fake delay, this will make isSubmitting value to be true
      await new Promise((resolve, reject) => {
        if (values.doctor.speciality === 'Cardiology') {
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
        description: `Doctor has been added!`,
        icon: 'ph:check',
        progress: true,
      })
    }
    catch (error: any) {
      // this will set the error on the form
      if (error.message === 'Fake backend validation error') {
        setFieldError('doctor.speciality', 'We have too many cardiologists')

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
    // console.log('doctor-create-error', error)

    // you can use it to scroll to the first error
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  },
)

const currentRating = computed(() => {
  if (values.doctor?.rating === undefined || values.doctor?.rating === null)
    return 0
  return Number.parseInt(values.doctor?.rating, 10)
})

const currentRatingText = computed(() => {
  switch (currentRating.value) {
    case 1:
      return 'Standard'
    case 2:
      return 'Good'
    case 3:
      return 'Advanced'
    case 4:
      return 'Expert'
    case 5:
      return 'Top 3%'
    default:
      return 'n/a'
  }
})
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <form
      action=""
      method="POST"
      class="grid grid-cols-12 gap-4"
      novalidate
      @submit.prevent="onSubmit"
    >
      <div class="col-span-12 lg:col-span-8">
        <BaseCard rounded="sm" class="p-4 md:p-8">
          <div class="grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-12">
            <div class="col-span-12 mb-10 text-gray-600 sm:col-span-3 sm:mb-0">
              <BaseHeading
                as="h2"
                size="lg"
                weight="medium"
                class="text-muted-900 dark:text-white"
              >
                New Doctor
              </BaseHeading>
              <BaseText
                size="xs"
                class="text-muted-600 dark:text-muted-400"
              >
                Fill in the required fields
              </BaseText>
            </div>
            <div class="col-span-12 space-y-10 lg:col-span-9">
              <TairoFormGroup
                label="General info"
                sublabel="Some general information"
              >
                <div class="grid grid-cols-12 gap-4">
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.firstName"
                  >
                    <BaseField
                      v-slot="{ inputAttrs, inputRef }"
                      label="First name"
                      :state="errorMessage ? 'error' : 'idle'"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      class="col-span-12 md:col-span-6"
                      required
                    >
                      <TairoInput
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        icon="solar:user-linear"
                        placeholder="Ex: John"
                        :model-value="field.value"
                        type="text"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                    </BaseField>
                  </Field>
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.lastName"
                  >
                    <BaseField
                      v-slot="{ inputAttrs, inputRef }"
                      label="Last name"
                      :state="errorMessage ? 'error' : 'idle'"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      class="col-span-12 md:col-span-6"
                    >
                      <TairoInput
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        icon="solar:user-linear"
                        placeholder="Ex: Doe"
                        :model-value="field.value"
                        type="text"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                    </BaseField>
                  </Field>
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.email"
                  >
                    <BaseField
                      v-slot="{ inputAttrs, inputRef }"
                      label="Email Address"
                      :state="errorMessage ? 'error' : 'idle'"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      class="col-span-12 md:col-span-6"
                    >
                      <TairoInput
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        icon="solar:letter-linear"
                        placeholder="Ex: johndoe@gmail.com"
                        :model-value="field.value"
                        type="email"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                    </BaseField>
                  </Field>
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.speciality"
                  >
                    <BaseField
                      v-slot="{ inputAttrs, inputRef }"
                      label="Speciality"
                      :state="errorMessage ? 'error' : 'idle'"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      class="col-span-12 md:col-span-6"
                    >
                      <TairoSelect
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        icon="solar:dropper-3-linear"
                        :model-value="field.value"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      >
                        <BaseSelectItem value="Surgery">
                          Surgery
                        </BaseSelectItem>
                        <BaseSelectItem value="Cardiology">
                          Cardiology
                        </BaseSelectItem>
                        <BaseSelectItem value="Pediatry">
                          Pediatry
                        </BaseSelectItem>
                        <BaseSelectItem value="Dermatology">
                          Dermatology
                        </BaseSelectItem>
                        <BaseSelectItem value="Traumatology">
                          Traumatology
                        </BaseSelectItem>
                      </TairoSelect>
                    </BaseField>
                  </Field>
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.phone"
                  >
                    <BaseField
                      v-slot="{ inputAttrs }"
                      label="Emergency Phone"
                      :state="errorMessage ? 'error' : 'idle'"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      class="col-span-12"
                      required
                    >
                      <LazyAddonInputPhone
                        v-bind="inputAttrs"
                        ref="inputPhoneRef"
                        placeholder="Ex: +1 555 555 5555"
                        icon="solar:phone-rounded-linear"
                        :model-value="field.value"
                        :error="errorMessage"
                        :disabled="isSubmitting"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                    </BaseField>
                  </Field>
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.comments"
                  >
                    <BaseField
                      v-slot="{ inputAttrs, inputRef }"
                      label="Comments"
                      :state="errorMessage ? 'error' : 'idle'"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      class="col-span-12"
                    >
                      <BaseTextarea
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        placeholder="Ex: General Orthopedic Surgery, Foot & Ankle Surgery"
                        rows="3"
                        :model-value="field.value"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                    </BaseField>
                  </Field>
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.status"
                  >
                    <BaseField
                      v-slot="{ inputAttrs, inputRef }"
                      label="Status"
                      :state="errorMessage ? 'error' : 'idle'"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      class="col-span-12 md:col-span-4"
                    >
                      <TairoSelect
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        icon="solar:heart-pulse-2-linear"
                        :model-value="field.value"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      >
                        <BaseSelectItem value="intern">
                          Intern
                        </BaseSelectItem>
                        <BaseSelectItem value="resident">
                          Resident
                        </BaseSelectItem>
                        <BaseSelectItem value="titular">
                          Titular
                        </BaseSelectItem>
                      </TairoSelect>
                    </BaseField>
                  </Field>
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.experience"
                  >
                    <BaseField
                      v-slot="{ inputAttrs, inputRef }"
                      label="Experience"
                      :state="errorMessage ? 'error' : 'idle'"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      class="col-span-12 md:col-span-4"
                    >
                      <TairoSelect
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        icon="solar:glasses-linear"
                        :model-value="field.value"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      >
                        <BaseSelectItem
                          v-for="value in ['0-5', '5-10', '10-15', '15+']"
                          :key="value"
                          :value
                        >
                          {{ value }}
                        </BaseSelectItem>
                      </TairoSelect>
                    </BaseField>
                  </Field>
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.rating"
                  >
                    <BaseField
                      v-slot="{ inputAttrs, inputRef }"
                      label="Rating"
                      :state="errorMessage ? 'error' : 'idle'"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      class="col-span-12 md:col-span-4"
                    >
                      <TairoSelect
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        icon="solar:star-linear"
                        :model-value="field.value"
                        :error="errorMessage"
                        :disabled="isSubmitting"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      >
                        <BaseSelectItem value="1">
                          B+
                        </BaseSelectItem>
                        <BaseSelectItem value="2">
                          A
                        </BaseSelectItem>
                        <BaseSelectItem value="3">
                          A+
                        </BaseSelectItem>
                        <BaseSelectItem value="4">
                          S
                        </BaseSelectItem>
                        <BaseSelectItem value="5">
                          S+
                        </BaseSelectItem>
                      </TairoSelect>
                    </BaseField>
                  </Field>
                </div>
              </TairoFormGroup>
              <TairoFormGroup
                label="Personal info"
                sublabel="Some personal information"
              >
                <div class="grid grid-cols-12 gap-4">
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.address"
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
                        placeholder="Ex: App 2 suite g3 santa monica"
                        :model-value="field.value"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                    </BaseField>
                  </Field>
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.city"
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
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.state"
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
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.zipcode"
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
                      <TairoInput
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        icon="solar:delivery-linear"
                        placeholder="Ex: 912656"
                        :model-value="field.value"
                        type="text"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                    </BaseField>
                  </Field>
                  <div class="col-span-12">
                    <div
                      class="bg-muted-100 dark:bg-muted-700/70 flex items-center gap-2 rounded-lg p-4"
                    >
                      <BaseAvatar
                        size="xs"
                        src="/img/icons/flags/united-states-of-america.svg"
                      />
                      <BaseText
                        size="sm"
                        class="text-muted-500 dark:text-muted-400"
                      >
                        United States
                      </BaseText>
                      <div class="ms-auto">
                        <NuxtLink
                          class="cursor-pointer text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                          @click="interactiveMap = !interactiveMap"
                        >
                          {{ interactiveMap ? 'Save' : 'Change' }}
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                  <Field
                    v-slot="{ field, handleChange }"
                    name="doctor.position"
                  >
                    <LazyAddonMapboxLocationPicker
                      hydrate-on-visible
                      class="col-span-12 aspect-16/9"
                      rounded="lg"
                      :model-value="field.value"
                      :geocoder="interactiveMap"
                      :geolocation="interactiveMap"
                      :options="{
                        interactive: interactiveMap,
                      }"
                      :marker="{
                        draggable: interactiveMap,
                      }"
                      @update:model-value="handleChange"
                    />
                  </Field>
                </div>
              </TairoFormGroup>
              <div class="text-end md:col-span-5">
                <div
                  class="-mt-4 inline-flex w-full items-center justify-end gap-2 sm:w-auto"
                >
                  <BaseButton rounded="md" variant="ghost" class="w-full sm:w-32" type="reset" @click="resetForm">
                    Cancel
                  </BaseButton>
                  <BaseButton
                    type="submit"
                    rounded="md"
                    variant="primary"
                    class="w-full sm:w-32"
                  >
                    Submit
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <BaseCard class="p-6 lg:p-8">
          <BaseText
            size="xs"
            weight="medium"
            class="text-muted-600 dark:text-muted-400 mb-6 block uppercase tracking-wider"
          >
            Record preview
          </BaseText>
          <div class="mb-4 flex">
            <div class="grow">
              <BaseHeading
                as="h3"
                weight="medium"
                class="text-muted-900 dark:text-white"
              >
                Dr. {{ values.doctor?.firstName }}
                {{ values.doctor?.lastName }}
              </BaseHeading>
              <BaseText
                size="sm"
                class="text-muted-600 dark:text-muted-400"
              >
                {{ values.doctor?.city === '' ? 'City' : values.doctor?.city }},
                {{
                  values.doctor?.state === '' ? 'State' : values.doctor?.state
                }}
              </BaseText>
            </div>
            <div class="shrink-0">
              <BaseAvatar size="md" src="/img/avatars/20.svg" />
            </div>
          </div>
          <div>
            <BaseHeading
              as="h3"
              size="md"
              weight="medium"
              class="text-muted-900 dark:text-white"
            >
              {{
                values.doctor?.speciality === null
                  ? 'Main speciality'
                  : values.doctor?.speciality
              }}
            </BaseHeading>
            <BaseText size="sm" class="text-muted-600 dark:text-muted-400">
              {{
                values.doctor?.comments === ''
                  ? 'Observations will be shown here'
                  : values.doctor?.comments
              }}
            </BaseText>
          </div>
          <div
            class="divide-muted-200 dark:divide-muted-700 flex w-full items-center divide-x py-6"
          >
            <div class="xxl:pe-6 flex flex-1 flex-col gap-1 pe-4">
              <BaseHeading
                as="h3"
                size="sm"
                weight="medium"
                lead="none"
                class="text-muted-900 dark:text-white"
              >
                {{
                  values.doctor?.status === null ? 'n/a' : values.doctor?.status
                }}
              </BaseHeading>
              <BaseText size="xs" class="text-muted-600 dark:text-muted-400">
                Role status
              </BaseText>
            </div>
            <div class="xxl:px-6 flex flex-1 flex-col gap-1 px-4">
              <BaseHeading
                as="h3"
                size="sm"
                weight="medium"
                lead="none"
                class="text-muted-900 dark:text-white"
              >
                {{
                  values.doctor?.experience === null
                    ? 'n/a'
                    : values.doctor?.experience
                }}
              </BaseHeading>
              <BaseText size="xs" class="text-muted-600 dark:text-muted-400">
                Years of exp.
              </BaseText>
            </div>
            <div class="xxl:ps-6 flex flex-1 flex-col gap-1 ps-4">
              <BaseHeading
                as="h3"
                size="sm"
                weight="medium"
                lead="none"
                class="text-muted-900 dark:text-white"
              >
                Lvl.
                {{
                  values.doctor?.rating === null ? 'n/a' : values.doctor?.rating
                }}
              </BaseHeading>
              <BaseText size="xs" class="text-muted-600 dark:text-muted-400">
                Global rating
              </BaseText>
            </div>
          </div>
          <div>
            <div class="flex items-end justify-between">
              <div class="w-24 text-xs uppercase leading-tight">
                Rating
              </div>
              <div class="text-success-600 font-sans text-xs font-semibold">
                {{ currentRatingText }}
              </div>
            </div>
            <div class="mt-1 flex">
              <div
                class="dark:border-muted-800 h-3 grow border-x border-white"
                :class="
                  currentRating > 0
                    ? 'bg-success-600'
                    : 'bg-muted-200 dark:bg-muted-700'
                "
              />
              <div
                class="dark:border-muted-800 h-3 grow border-x border-white"
                :class="
                  currentRating >= 2
                    ? 'bg-success-600'
                    : 'bg-muted-200 dark:bg-muted-700'
                "
              />
              <div
                class="dark:border-muted-800 h-3 grow border-x border-white"
                :class="
                  currentRating >= 3
                    ? 'bg-success-600'
                    : 'bg-muted-200 dark:bg-muted-700'
                "
              />
              <div
                class="dark:border-muted-800 h-3 grow border-x border-white"
                :class="
                  currentRating >= 4
                    ? 'bg-success-600'
                    : 'bg-muted-200 dark:bg-muted-700'
                "
              />
              <div
                class="dark:border-muted-800 h-3 grow border-x border-white"
                :class="
                  currentRating === 5
                    ? 'bg-success-600'
                    : 'bg-muted-200 dark:bg-muted-700'
                "
              />
            </div>
          </div>
          <div class="text-muted-400 mt-6 flex items-center gap-2">
            <Icon name="solar:letter-linear" class="size-4" />
            <BaseLink
              v-if="values.doctor?.email"
              class="block"
              :href="`mailto:${values.doctor?.email}`"
            >
              <BaseText size="xs">
                {{ values.doctor?.email }}
              </BaseText>
            </BaseLink>
            <BaseText
              v-else
              size="xs"
              class="text-muted-600 dark:text-muted-400 opacity-80"
            >
              Fill up your email
            </BaseText>
          </div>
          <div class="text-muted-400 mt-6 flex items-center gap-2">
            <Icon name="solar:phone-rounded-linear" class="size-4" />
            <BaseLink
              v-if="values.doctor?.phone"
              class="block"
              :href="`tel:${values.doctor?.phone}`"
            >
              <BaseText size="xs">
                {{ values.doctor?.phone }}
              </BaseText>
            </BaseLink>
            <BaseText
              v-else
              size="xs"
              class="text-muted-600 dark:text-muted-400 opacity-80"
            >
              Fill up your emergency phone
            </BaseText>
          </div>
        </BaseCard>
      </div>
    </form>
  </div>
</template>
