<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useFieldError, useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({
  title: 'Edit User',
  preview: {
    title: 'Edit User',
    description: 'For editing user info',
    categories: ['layouts', 'forms'],
    src: '/img/screens/layouts-user-edit.png',
    srcDark: '/img/screens/layouts-user-edit-dark.png',
    order: 31,
    new: true,
  },
})

const masks = ref({
  input: 'YYYY-MM-DD',
})

// This is the object that will contain the validation messages
const ONE_MB = 1000000
const VALIDATION_TEXT = {
  FIRST_NAME_REQUIRED: 'First name can\'t be empty',
  LAST_NAME_REQUIRED: 'Last name can\'t be empty',
  PREFERRED_NAME_REQUIRED:
    'Preferred name should be at least 3 characters long',
  BIRTHDAY_REQUIRED: 'Birthday can\'t be empty',
  BIRTHMONTH_REQUIRED: 'Birth month can\'t be empty',
  BIRTHYEAR_REQUIRED: 'Birth year can\'t be empty',
  EMAIL_REQUIRED: 'Email address can\'t be empty',
  PHONE_REQUIRED: 'Phone number can\'t be empty',
  STATUS_REQUIRED: 'Pick a status',
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
      firstName: z.string().min(1, VALIDATION_TEXT.FIRST_NAME_REQUIRED),
      lastName: z.string().min(1, VALIDATION_TEXT.LAST_NAME_REQUIRED),
      preferredName: z.string().optional(),
      email: z.string().min(1, VALIDATION_TEXT.EMAIL_REQUIRED),
      phone: z.string().min(1, VALIDATION_TEXT.PHONE_REQUIRED),
      birthday: z.object({
        year: z.number().nullable(),
        month: z.string().nullable(),
        day: z.string().nullable(),
      }),
      status: z
        .union([
          z.literal('single'),
          z.literal('married'),
          z.literal('divorced'),
          z.literal('widower'),
        ])
        .nullable(),
      gender: z
        .union([z.literal('male'), z.literal('female'), z.literal('other')])
        .optional(),
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
    if (data.profile.firstName === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.FIRST_NAME_REQUIRED,
        path: ['profile.firstName'],
      })
    }
    if (data.profile.lastName === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.LAST_NAME_REQUIRED,
        path: ['profile.lastName'],
      })
    }
    if (
      data.profile.preferredName
      && data.profile.preferredName !== ''
      && data.profile.preferredName.length < 3
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.PREFERRED_NAME_REQUIRED,
        path: ['profile.preferredName'],
      })
    }
    if (data.profile.birthday.day === null) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.BIRTHDAY_REQUIRED,
        path: ['profile.birthday.day'],
      })
    }
    if (data.profile.birthday.month === null) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.BIRTHMONTH_REQUIRED,
        path: ['profile.birthday.month'],
      })
    }
    if (data.profile.birthday.year === null) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.BIRTHYEAR_REQUIRED,
        path: ['profile.birthday.year'],
      })
    }
    if (!data.profile.status) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.STATUS_REQUIRED,
        path: ['profile.status'],
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
    firstName: '',
    lastName: '',
    preferredName: '',
    email: '',
    phone: '',
    birthday: {
      year: null,
      month: null,
      day: null,
    },
    gender: 'male',
    status: 'single',
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
const currentAvatar = computed(
  () => `/img/avatars/default-${values.profile?.gender}.jpg`,
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
    console.log('profile-edit-success', values)

    try {
      // fake delay, this will make isSubmitting value to be true
      await new Promise((resolve, reject) => {
        if (values.profile.firstName === 'Edgar') {
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
        message: `Changes have been saved!`,
        color: 'success',
        icon: 'ph:check',
        closable: true,
      })
    }
    catch (error: any) {
      // this will set the error on the form
      if (error.message === 'Fake backend validation error') {
        setFieldError('profile.firstName', 'This name is not allowed')

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
    console.log('profile-edit-error', error)

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
                    sublabel="Basic info about you"
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
                          name="profile.firstName"
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
                      <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="profile.lastName"
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
                      <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="profile.preferredName"
                        >
                          <BaseInput
                            label="Preferred Name"
                            icon="ph:mask-happy-duotone"
                            placeholder="Ex: John Doe"
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
                          name="profile.email"
                        >
                          <BaseInput
                            label="Email Address"
                            icon="ph:envelope-duotone"
                            placeholder="Ex: johndoe@gmail.com"
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
                          name="profile.phone"
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
                          name="profile.status"
                        >
                          <BaseSelect
                            rounded="md"
                            label="Family Status"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          >
                            <option value="" hidden />
                            <option value="single">
                              Single
                            </option>
                            <option value="married">
                              Married
                            </option>
                            <option value="divorced">
                              Divorced
                            </option>
                            <option value="widower">
                              Widow/Widower
                            </option>
                          </BaseSelect>
                        </Field>
                      </div>
                      <div class="ltablet:col-span-4 col-span-12 lg:col-span-4">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="profile.birthday.day"
                        >
                          <BaseSelect
                            rounded="md"
                            label="Birthday"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          >
                            <option value="" hidden />
                            <option
                              v-for="index in 31"
                              :key="index"
                              :value="index"
                            >
                              {{ index }}
                            </option>
                          </BaseSelect>
                        </Field>
                      </div>
                      <div class="ltablet:col-span-4 col-span-12 lg:col-span-4">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="profile.birthday.month"
                        >
                          <BaseSelect
                            rounded="md"
                            label="Birth Month"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          >
                            <option value="" hidden />
                            <option value="january">
                              January
                            </option>
                            <option value="february">
                              February
                            </option>
                            <option value="march">
                              March
                            </option>
                            <option value="april">
                              April
                            </option>
                            <option value="may">
                              May
                            </option>
                            <option value="june">
                              June
                            </option>
                            <option value="july">
                              July
                            </option>
                            <option value="august">
                              August
                            </option>
                            <option value="september">
                              September
                            </option>
                            <option value="october">
                              October
                            </option>
                            <option value="november">
                              November
                            </option>
                            <option value="december">
                              December
                            </option>
                          </BaseSelect>
                        </Field>
                      </div>
                      <div class="ltablet:col-span-4 col-span-12 lg:col-span-4">
                        <Field
                          v-slot="{
                            field,
                            errorMessage,
                            handleChange,
                            handleBlur,
                          }"
                          name="profile.birthday.year"
                        >
                          <BaseInput
                            label="Birth Year"
                            placeholder="Ex: 1992"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            type="number"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </Field>
                      </div>
                      <div class="col-span-12">
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
                              name="profile.gender"
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
                                  color="none"
                                  class="text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-6"
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
                              name="profile.gender"
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
                              name="profile.gender"
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
                    label="Mailing address"
                    sublabel="The address we will use to mail you"
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
                          name="profile.mailingAddress.address"
                        >
                          <BaseInput
                            label="Address"
                            icon="ph:map-pin-duotone"
                            placeholder="Ex: 48, Santa Barbara Railroad"
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
                          name="profile.mailingAddress.suite"
                        >
                          <BaseInput
                            label="Street / Suite"
                            icon="ph:map-pin-duotone"
                            placeholder="Ex: App 12 suite G4"
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
                          name="profile.mailingAddress.city"
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
                          name="profile.mailingAddress.state"
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
                          name="profile.mailingAddress.zipcode"
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
                          name="profile.mailingAddress.country"
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
                    label="Legal address"
                    sublabel="Your legal address for billing purposes"
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
                          name="profile.legalAddress.address"
                        >
                          <BaseInput
                            label="Address"
                            icon="ph:map-pin-duotone"
                            placeholder="Ex: 48, Santa Barbara Railroad"
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
                          name="profile.legalAddress.suite"
                        >
                          <BaseInput
                            label="Street / Suite"
                            icon="ph:map-pin-duotone"
                            placeholder="Ex: App 12 suite G4"
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
                          name="profile.legalAddress.city"
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
                          name="profile.legalAddress.state"
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
                          name="profile.legalAddress.zipcode"
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
                          name="profile.legalAddress.country"
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

                  <div
                    class="mt-5 flex flex-col-reverse gap-y-4 text-end md:block md:space-x-3"
                  >
                    <BaseButton
                      to="/layouts/profile"
                      type="button"
                      color="muted"
                      class="w-full sm:w-40"
                      rounded="md"
                      size="lg"
                    >
                      Cancel
                    </BaseButton>
                    <BaseButton
                      type="submit"
                      color="primary"
                      class="w-full sm:w-40"
                      rounded="md"
                      size="lg"
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
