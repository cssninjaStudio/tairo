<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useFieldError, useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({
  title: 'Edit Company',
  preview: {
    title: 'Edit Company',
    description: 'For editing company info',
    categories: ['layouts', 'forms'],
    src: '/img/screens/layouts-company-edit.png',
    srcDark: '/img/screens/layouts-company-edit-dark.png',
    order: 33,
    new: true,
  },
})

const masks = ref({
  input: 'YYYY-MM-DD',
})

// This is the object that will contain the validation messages
const ONE_MB = 1000000
const VALIDATION_TEXT = {
  COMPANY_NAME_REQUIRED: 'Company name can\'t be empty',
  LEGAL_NAME_REQUIRED: 'Legal name can\'t be empty',
  PREFERRED_NAME_REQUIRED:
    'Preferred name should be at least 3 characters long',
  EMAIL_REQUIRED: 'Email address can\'t be empty',
  PHONE_REQUIRED: 'Phone number can\'t be empty',
  TWITTER_REQUIRED: 'Twitter handle can\'t be empty',
  ADDRESS_REQUIRED: 'Please enter an address',
  CITY_REQUIRED: 'Please enter a city',
  STATE_REQUIRED: 'Please enter a state',
  ZIPCODE_REQUIRED: 'Please enter a zipcode',
  AVATAR_TOO_BIG: `Avatar size must be less than 1MB`,
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
    avatar: z.custom<File>(v => v instanceof File).nullable(),
    profile: z.object({
      companyName: z.string().min(1, VALIDATION_TEXT.COMPANY_NAME_REQUIRED),
      dba: z.string().min(1, VALIDATION_TEXT.LEGAL_NAME_REQUIRED),
      commonName: z.string().optional(),
      email: z.string().min(1, VALIDATION_TEXT.EMAIL_REQUIRED),
      phone: z.string().min(1, VALIDATION_TEXT.PHONE_REQUIRED),
      twitterHandle: z.string().min(3, VALIDATION_TEXT.TWITTER_REQUIRED),
      mailingAddress: z.object({
        address: z.string().min(1, VALIDATION_TEXT.ADDRESS_REQUIRED),
        suite: z.string().min(1, VALIDATION_TEXT.ADDRESS_REQUIRED).optional(),
        city: z.string().min(1, VALIDATION_TEXT.CITY_REQUIRED),
        state: z.string().min(1, VALIDATION_TEXT.STATE_REQUIRED),
        zipcode: z.string().min(5, VALIDATION_TEXT.ZIPCODE_REQUIRED),
        country: z.string(),
      }),
      legalAddress: z.object({
        address: z.string().min(1, VALIDATION_TEXT.ADDRESS_REQUIRED),
        suite: z.string().min(1, VALIDATION_TEXT.ADDRESS_REQUIRED).optional(),
        city: z.string().min(1, VALIDATION_TEXT.CITY_REQUIRED),
        state: z.string().min(1, VALIDATION_TEXT.STATE_REQUIRED),
        zipcode: z.string().min(5, VALIDATION_TEXT.ZIPCODE_REQUIRED),
        country: z.string(),
      }),
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
    if (data.profile.companyName === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.COMPANY_NAME_REQUIRED,
        path: ['profile.companyName'],
      })
    }
    if (data.profile.dba === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.LEGAL_NAME_REQUIRED,
        path: ['profile.dba'],
      })
    }
    if (
      data.profile.commonName
      && data.profile.commonName !== ''
      && data.profile.commonName.length < 3
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.PREFERRED_NAME_REQUIRED,
        path: ['profile.commonName'],
      })
    }
  })

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = {
  avatar: null,
  profile: {
    companyName: '',
    dba: '',
    commonName: '',
    email: '',
    phone: '',
    twitterHandle: '',
    mailingAddress: {
      address: '',
      suite: '',
      city: '',
      state: '',
      zipcode: '',
      country: 'United States',
    },
    legalAddress: {
      address: '',
      suite: '',
      city: '',
      state: '',
      zipcode: '',
      country: 'United States',
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

// This is the computed value that will be used to display the current avatar
const currentAvatar = computed(() => `/img/avatars/company.svg`)

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
    // console.log('company-edit-success', values)

    try {
      // fake delay, this will make isSubmitting value to be true
      await new Promise((resolve, reject) => {
        if (values.profile.companyName === 'Acme') {
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
        description: `Changes have been saved!`,
        icon: 'ph:check',
        progress: true,
      })
    }
    catch (error: any) {
      // this will set the error on the form
      if (error.message === 'Fake backend validation error') {
        setFieldError('profile.companyName', 'This name is not allowed')

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
    // console.log('company-edit-error', error)

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
        class=""
        novalidate
        @submit.prevent="onSubmit"
      >
        <div class="space-y-16">
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
                        :src="currentAvatar"
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
                <div class="space-y-12">
                  <!-- Company info -->
                  <TairoFormGroup
                    label="Company info"
                    sublabel="Basic info about the company"
                  >
                    <div class="grid grid-cols-12 gap-4">
                      <Field
                        v-slot="{
                          field,
                          errorMessage,
                          handleChange,
                          handleBlur,
                        }"
                        name="profile.companyName"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Legal Name"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12 lg:col-span-6"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            :model-value="field.value"
                            icon="solar:buildings-linear"
                            placeholder="Ex: Acme Inc."
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
                        name="profile.dba"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Doing business qs (DBA)"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12 lg:col-span-6"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            :model-value="field.value"
                            icon="solar:buildings-linear"
                            placeholder="Ex: Acme Systems"
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
                        name="profile.commonName"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Common Name"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12 lg:col-span-6"
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            :model-value="field.value"
                            icon="solar:buildings-linear"
                            placeholder="Ex: Acme Systems"
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
                        name="profile.email"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Email Address"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12 lg:col-span-6"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            :model-value="field.value"
                            icon="solar:letter-linear"
                            placeholder="Ex: contact@acme.com"
                            type="email"
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
                        name="profile.phone"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Phone Number"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12 lg:col-span-6"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            :model-value="field.value"
                            icon="solar:phone-rounded-linear"
                            placeholder="Ex: +1 555 123 4567"
                            type="tel"
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
                        name="profile.twitterHandle"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Twitter Handle"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12 lg:col-span-6"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            :model-value="field.value"
                            icon="fa6-brands:x-twitter"
                            placeholder="Ex: @acmeinc"
                            type="text"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </BaseField>
                      </Field>
                    </div>
                  </TairoFormGroup>

                  <!-- Address info -->
                  <TairoFormGroup
                    label="Mailing address"
                    sublabel="The address of the company"
                  >
                    <div class="grid grid-cols-12 gap-4">
                      <Field
                        v-slot="{
                          field,
                          errorMessage,
                          handleChange,
                          handleBlur,
                        }"
                        name="profile.mailingAddress.address"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Address"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            :model-value="field.value"
                            icon="solar:map-point-linear"
                            placeholder="Ex: 48, Santa Barbara Railroad"
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
                        name="profile.mailingAddress.suite"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Street / Suite"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            :model-value="field.value"
                            icon="solar:map-point-linear"
                            placeholder="Ex: App 12 suite G4"
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
                        name="profile.mailingAddress.city"
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
                            :model-value="field.value"
                            icon="solar:earth-linear"
                            placeholder="Ex: Los Angeles"
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
                        name="profile.mailingAddress.state"
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
                            :model-value="field.value"
                            icon="solar:earth-linear"
                            placeholder="Ex: CA"
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
                        name="profile.mailingAddress.zipcode"
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
                            :model-value="field.value"
                            icon="solar:box-linear"
                            placeholder="Ex: 912656"
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
                        name="profile.mailingAddress.country"
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
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          >
                            <BaseSelectItem value="United States">
                              United States
                            </BaseSelectItem>
                            <BaseSelectItem value="Canada">
                              Canada
                            </BaseSelectItem>
                            <BaseSelectItem value="France">
                              France
                            </BaseSelectItem>
                            <BaseSelectItem value="Germany">
                              Germany
                            </BaseSelectItem>
                            <BaseSelectItem value="Spain">
                              Spain
                            </BaseSelectItem>
                            <BaseSelectItem value="China">
                              China
                            </BaseSelectItem>
                            <BaseSelectItem value="Japan">
                              Japan
                            </BaseSelectItem>
                          </BaseSelect>
                        </BaseField>
                      </Field>
                    </div>
                  </TairoFormGroup>

                  <!-- Address info -->
                  <TairoFormGroup
                    label="Legal address"
                    sublabel="The legal address of the company"
                  >
                    <div class="grid grid-cols-12 gap-4">
                      <Field
                        v-slot="{
                          field,
                          errorMessage,
                          handleChange,
                          handleBlur,
                        }"
                        name="profile.legalAddress.address"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Address"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            :model-value="field.value"
                            icon="solar:map-point-linear"
                            placeholder="Ex: 48, Santa Barbara Railroad"
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
                        name="profile.legalAddress.suite"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Street / Suite"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="col-span-12"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            :model-value="field.value"
                            icon="solar:map-point-linear"
                            placeholder="Ex: App 12 suite G4"
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
                        name="profile.legalAddress.city"
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
                            :model-value="field.value"
                            icon="solar:earth-linear"
                            placeholder="Ex: Los Angeles"
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
                        name="profile.legalAddress.state"
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
                            :model-value="field.value"
                            icon="solar:earth-linear"
                            placeholder="Ex: CA"
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
                        name="profile.legalAddress.zipcode"
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
                            :model-value="field.value"
                            icon="solar:box-linear"
                            placeholder="Ex: 912656"
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
                        name="profile.legalAddress.country"
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
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          >
                            <BaseSelectItem value="United States">
                              United States
                            </BaseSelectItem>
                            <BaseSelectItem value="Canada">
                              Canada
                            </BaseSelectItem>
                            <BaseSelectItem value="France">
                              France
                            </BaseSelectItem>
                            <BaseSelectItem value="Germany">
                              Germany
                            </BaseSelectItem>
                            <BaseSelectItem value="Spain">
                              Spain
                            </BaseSelectItem>
                            <BaseSelectItem value="China">
                              China
                            </BaseSelectItem>
                            <BaseSelectItem value="Japan">
                              Japan
                            </BaseSelectItem>
                          </BaseSelect>
                        </BaseField>
                      </Field>
                    </div>
                  </TairoFormGroup>

                  <div
                    class="mt-5 flex flex-col-reverse gap-y-4 text-end md:block md:space-x-3"
                  >
                    <BaseButton
                      to="/layouts/company"
                      type="button"
                      variant="ghost"
                      class="w-full sm:w-36"
                      rounded="md"
                    >
                      Cancel
                    </BaseButton>
                    <BaseButton
                      type="submit"
                      variant="primary"
                      class="w-full sm:w-36"
                      rounded="md"
                      :loading="isSubmitting"
                    >
                      Save Changes
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
