<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useFieldError, useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({
  title: 'New Doctor',
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
  FIRSTNAME_REQUIRED: "First name can't be empty",
  LASTNAME_REQUIRED: "Last name can't be empty",
  EMAIL_REQUIRED: "Email address can't be empty",
  OPTION_REQUIRED: 'Please select an option',
  ADDRESS_REQUIRED: 'Please enter an address',
  CITY_REQUIRED: 'Please enter a city',
  STATE_REQUIRED: 'Please enter a state',
  ZIPCODE_REQUIRED: 'Please enter a zipcode',
  STATUS_REQUIRED: 'Pick a status',
  AVATAR_TOO_BIG: `Avatar size must be less than 1MB`,
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
    avatar: z.custom<File>((v) => v instanceof File).nullable(),
    doctor: z.object({
      firstName: z.string().min(1, VALIDATION_TEXT.FIRSTNAME_REQUIRED),
      lastName: z.string().min(1, VALIDATION_TEXT.LASTNAME_REQUIRED),
      email: z.string().min(1, VALIDATION_TEXT.EMAIL_REQUIRED),
      comments: z.string().optional(),
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
  })

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = computed<FormInput>(() => ({
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
  },
}))

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

// BaseInputFileHeadless gives us a listfile input, but we need to
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
    return confirm('You have unsaved changes. Are you sure you want to leave?')
  }
})

const toaster = useToaster()

// This is where you would send the form data to the server
const onSubmit = handleSubmit(
  async (values) => {
    success.value = false

    // here you have access to the validated form values
    console.log('doctor-create-success', values)

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

      toaster.clearAll()
      toaster.show({
        title: 'Success',
        message: `Doctor has been added!`,
        color: 'success',
        icon: 'ph:check',
        closable: true,
      })
    } catch (error: any) {
      // this will set the error on the form
      if (error.message === 'Fake backend validation error') {
        // @ts-expect-error - vee validate typing bug with nested keys
        setFieldError('doctor.speciality', 'We have too many cardiologists')

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
    console.log('doctor-create-error', error)

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
  return parseInt(values.doctor?.rating)
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
  <form
    action=""
    method="POST"
    @submit.prevent="onSubmit"
    class="grid grid-cols-12 gap-6"
  >
    <div class="ltablet:col-span-8 col-span-12 lg:col-span-8">
      <BaseCard shape="rounded" class="p-4 md:p-8">
        <div class="grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-12">
          <div class="col-span-12 mb-10 text-gray-600 sm:col-span-3 sm:mb-0">
            <BaseHeading as="h2" size="lg" weight="medium">
              New Doctor
            </BaseHeading>
            <BaseText size="xs" class="text-muted-400"
              >Fill in the required fields</BaseText
            >
          </div>

          <div class="ltablet:col-span-9 col-span-12 space-y-10 lg:col-span-9">
            <TairoFormGroup
              label="General info"
              sublabel="Some general information"
            >
              <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12 md:col-span-6">
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.firstName"
                  >
                    <BaseInput
                      label="First name"
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

                <div class="col-span-12 md:col-span-6">
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.lastName"
                  >
                    <BaseInput
                      label="Last name"
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

                <div class="col-span-12 md:col-span-6">
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.email"
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

                <div class="col-span-12 md:col-span-6">
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.speciality"
                  >
                    <BaseSelect
                      label="Speciality"
                      icon="ph:first-aid-duotone"
                      :model-value="field.value"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    >
                      <option value="" hidden></option>
                      <option value="Surgery">Surgery</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Pediatry">Pediatry</option>
                      <option value="Dermatology">Dermatology</option>
                      <option value="Traumatology">Traumatology</option>
                    </BaseSelect>
                  </Field>
                </div>

                <div class="col-span-12">
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.comments"
                  >
                    <BaseTextarea
                      label="Comments"
                      placeholder="Ex: General Orthopedic Surgery, Foot & Ankle Surgery"
                      rows="3"
                      :model-value="field.value"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    />
                  </Field>
                </div>

                <div class="col-span-12 md:col-span-4">
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.status"
                  >
                    <BaseSelect
                      label="Status"
                      icon="ph:heartbeat-duotone"
                      :model-value="field.value"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    >
                      <option value="" hidden></option>
                      <option value="intern">Intern</option>
                      <option value="resident">Resident</option>
                      <option value="titular">Titular</option>
                    </BaseSelect>
                  </Field>
                </div>

                <div class="col-span-12 md:col-span-4">
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.experience"
                  >
                    <BaseSelect
                      label="Experience"
                      icon="ph:trophy-duotone"
                      :model-value="field.value"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    >
                      <option value="" hidden></option>
                      <option value="0-5">0-5</option>
                      <option value="5-10">5-10</option>
                      <option value="10-15">10-15</option>
                      <option value="15+">15+</option>
                    </BaseSelect>
                  </Field>
                </div>

                <div class="col-span-12 md:col-span-4">
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.rating"
                  >
                    <BaseSelect
                      label="Rating"
                      icon="ph:star-duotone"
                      :model-value="field.value"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    >
                      <option value="" hidden></option>
                      <option value="1">B+</option>
                      <option value="2">A</option>
                      <option value="3">A+</option>
                      <option value="4">S</option>
                      <option value="5">S+</option>
                    </BaseSelect>
                  </Field>
                </div>
              </div>
            </TairoFormGroup>

            <TairoFormGroup
              label="Personal info"
              sublabel="Some personal information"
            >
              <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12">
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.address"
                  >
                    <BaseInput
                      label="Address / Street"
                      icon="ph:map-pin-duotone"
                      placeholder="Ex: App 2 suite g3 santa monica"
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
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.city"
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
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.state"
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
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="doctor.zipcode"
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
                      >United States</BaseText
                    >
                    <div class="ms-auto">
                      <NuxtLink
                        to="#"
                        class="text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                        >Change</NuxtLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </TairoFormGroup>

            <div class="text-right md:col-span-5">
              <div
                class="-mt-4 inline-flex w-full items-center justify-end gap-2 sm:w-auto"
              >
                <BaseButton class="!h-12 w-full sm:w-40"> Cancel </BaseButton>
                <BaseButton
                  type="submit"
                  color="primary"
                  class="!h-12 w-full sm:w-40"
                >
                  Submit
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </BaseCard>
    </div>
    <div class="ltablet:col-span-4 col-span-12 lg:col-span-4">
      <BaseCard class="ptablet:p-8 p-6 lg:p-8">
        <BaseText
          size="xs"
          weight="medium"
          class="text-muted-400 mb-6 block uppercase tracking-wider"
          >Record preview</BaseText
        >
        <div class="mb-4 flex">
          <div class="grow">
            <BaseHeading as="h3" weight="medium"
              >Dr. {{ values.doctor?.firstName }}
              {{ values.doctor?.lastName }}
            </BaseHeading>
            <BaseText size="sm" class="text-muted-400"
              >{{ values.doctor?.city === '' ? 'City' : values.doctor?.city }},
              {{
                values.doctor?.state === '' ? 'State' : values.doctor?.state
              }}</BaseText
            >
          </div>
          <div class="shrink-0">
            <BaseAvatar size="lg" src="/img/avatars/20.svg" />
          </div>
        </div>
        <div>
          <BaseHeading as="h3" size="md" weight="medium">{{
            values.doctor?.speciality === null
              ? 'Main speciality'
              : values.doctor?.speciality
          }}</BaseHeading>
          <BaseText size="sm" class="text-muted-400">
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
            <BaseHeading as="h3" size="sm" weight="medium" lead="none">{{
              values.doctor?.status === null ? 'n/a' : values.doctor?.status
            }}</BaseHeading>
            <BaseText size="xs" class="text-muted-400"> Role status </BaseText>
          </div>
          <div class="xxl:px-6 flex flex-1 flex-col gap-1 px-4">
            <BaseHeading as="h3" size="sm" weight="medium" lead="none">{{
              values.doctor?.experience === null
                ? 'n/a'
                : values.doctor?.experience
            }}</BaseHeading>
            <BaseText size="xs" class="text-muted-400">
              Years of exp.
            </BaseText>
          </div>
          <div class="xxl:ps-6 flex flex-1 flex-col gap-1 ps-4">
            <BaseHeading as="h3" size="sm" weight="medium" lead="none"
              >Lvl.
              {{
                values.doctor?.rating === null ? 'n/a' : values.doctor?.rating
              }}</BaseHeading
            >
            <BaseText size="xs" class="text-muted-400">
              Global rating
            </BaseText>
          </div>
        </div>
        <div>
          <div class="flex items-end justify-between">
            <div class="w-24 text-xs uppercase leading-tight">Rating</div>
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
            ></div>
            <div
              class="dark:border-muted-800 h-3 grow border-x border-white"
              :class="
                currentRating >= 2
                  ? 'bg-success-600'
                  : 'bg-muted-200 dark:bg-muted-700'
              "
            ></div>
            <div
              class="dark:border-muted-800 h-3 grow border-x border-white"
              :class="
                currentRating >= 3
                  ? 'bg-success-600'
                  : 'bg-muted-200 dark:bg-muted-700'
              "
            ></div>
            <div
              class="dark:border-muted-800 h-3 grow border-x border-white"
              :class="
                currentRating >= 4
                  ? 'bg-success-600'
                  : 'bg-muted-200 dark:bg-muted-700'
              "
            ></div>
            <div
              class="dark:border-muted-800 h-3 grow border-x border-white"
              :class="
                currentRating === 5
                  ? 'bg-success-600'
                  : 'bg-muted-200 dark:bg-muted-700'
              "
            ></div>
          </div>
        </div>
        <div class="text-muted-400 mt-6 flex items-center gap-2">
          <Icon name="lucide:mail" class="h-4 w-4" />
          <BaseText size="xs">{{
            values.doctor?.email === '' ? 'email address' : values.doctor?.email
          }}</BaseText>
        </div>
      </BaseCard>
    </div>
  </form>
</template>
