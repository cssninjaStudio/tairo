<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useFieldError, useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({
  title: 'Edit Profile',
  preview: {
    title: 'Edit profile 1',
    description: 'For editing a user profile',
    categories: ['layouts', 'profile', 'forms'],
    src: '/img/screens/layouts-subpages-profile-edit-1.png',
    srcDark: '/img/screens/layouts-subpages-profile-edit-1-dark.png',
    order: 76,
  },
  pageTransition: {
    enterActiveClass: 'transition-all duration-500 ease-out',
    enterFromClass: 'translate-y-20 opacity-0',
    enterToClass: 'translate-y-0 opacity-100',
    leaveActiveClass: 'transition-all duration-200 ease-in',
    leaveFromClass: 'translate-y-0 opacity-100',
    leaveToClass: 'translate-y-20 opacity-0',
  },
})

// This is the object that will contain the validation messages
const ONE_MB = 1000000
const VALIDATION_TEXT = {
  FIRST_REQUIRED: 'Your first name can\'t be empty',
  LASTNAME_REQUIRED: 'Your last name can\'t be empty',
  OPTION_REQUIRED: 'Please select an option',
  AVATAR_TOO_BIG: `Avatar size must be less than 1MB`,
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
    avatar: z.custom<File>(v => v instanceof File).nullable(),
    profile: z.object({
      firstName: z.string().min(1, VALIDATION_TEXT.FIRST_REQUIRED),
      lastName: z.string().min(1, VALIDATION_TEXT.LASTNAME_REQUIRED),
      role: z.string().optional(),
      location: z.string(),
      bio: z.string(),
    }),
    info: z.object({
      experience: z
        .union([
          z.literal('0-2 years'),
          z.literal('2-5 years'),
          z.literal('5-10 years'),
          z.literal('10+ years'),
        ])
        .nullable(),
      firstJob: z.string().nullable(),
      flexible: z.string().nullable(),
      remote: z.string().nullable(),
    }),
    social: z.object({
      facebook: z.string(),
      twitter: z.string(),
      dribbble: z.string(),
      instagram: z.string(),
      github: z.string(),
      gitlab: z.string(),
    }),
  })
  .superRefine((data, ctx) => {
    // This is a custom validation function that will be called
    // before the form is submitted
    if (!data.info.experience) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.OPTION_REQUIRED,
        path: ['info.experience'],
      })
    }
    if (!data.info.firstJob) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.OPTION_REQUIRED,
        path: ['info.firstJob'],
      })
    }
    if (!data.info.flexible) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.OPTION_REQUIRED,
        path: ['info.flexible'],
      })
    }
    if (!data.info.remote) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.OPTION_REQUIRED,
        path: ['info.remote'],
      })
    }
    if (data.avatar && data.avatar.size > ONE_MB) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.AVATAR_TOO_BIG,
        path: ['avatar'],
      })
    }
  })

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const { data, pending, error, refresh } = await useFetch('/api/profile')

const validationSchema = toTypedSchema(zodSchema)
const initialValues = {
  avatar: null,
  profile: {
    firstName: data.value?.personalInfo?.firstName || '',
    lastName: data.value?.personalInfo?.lastName || '',
    role: data.value?.personalInfo?.role || '',
    location: '',
    bio: '',
  },
  info: {
    experience: null,
    firstJob: null,
    flexible: null,
    remote: null,
  },
  social: {
    facebook: '',
    twitter: '',
    dribbble: '',
    instagram: '',
    github: '',
    gitlab: '',
  },
} satisfies FormInput

// This is the list of options for the select inputs
const experience = ['0-2 years', '2-5 years', '5-10 years', '10+ years']
const answers = [
  {
    label: 'Yes',
    value: 'yes',
  },
  {
    label: 'No',
    value: 'no',
  },
]

// This is the computed value that will be used to display the current avatar
const currentAvatar = computed(() => data.value?.personalInfo?.picture)

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
    // console.log('profile-edit-success', values)

    try {
      // fake delay, this will make isSubmitting value to be true
      await new Promise((resolve, reject) => {
        if (values.profile.firstName === 'Maya') {
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
        description: `Your profile has been updated!`,
        icon: 'ph:check',
        progress: true,
      })
    }
    catch (error: any) {
      // this will set the error on the form
      if (error.message === 'Fake backend validation error') {
        setFieldError('profile.firstName', 'This first name is not allowed')

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

    // we can refresh the data from the server
    // this will update the initial values and the current avatar
    await refresh()

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
    // console.log('profile-edit-error', error)

    // you can use it to scroll to the first error
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  },
)
</script>

<template>
  <form
    method="POST"
    action=""
    class="w-full pb-16 max-w-3xl dark:[--color-input-default-bg:var(--color-muted-950)]"
    novalidate
    @submit.prevent="onSubmit"
  >
    <div class="flex items-center justify-end border-b border-muted-300 dark:border-muted-800 pb-4 mb-6">
      <div class="flex items-center gap-2">
        <BaseButton class="w-24" to="/layouts/profile">
          Cancel
        </BaseButton>
        <BaseButton
          type="submit"
          variant="primary"
          class="w-24"
          :disabled="isSubmitting"
          :loading="isSubmitting"
        >
          Save
        </BaseButton>
      </div>
    </div>
    <div>
      <div class="space-y-12">
        <BaseMessage v-if="success" @close="success = false">
          Your profile has been updated!
        </BaseMessage>
        <BaseMessage
          v-if="fieldsWithErrors"
          type="danger"
          @close="() => setErrors({})"
        >
          This form has {{ fieldsWithErrors }} errors, please check them
          before submitting
        </BaseMessage>

        <TairoFormGroup
          label="Profile picture"
          sublabel="This is how others will recognize you"
        >
          <div
            class="relative flex flex-col gap-4"
          >
            <TairoFullscreenDropfile
              icon="ph:image-duotone"
              :filter-file-dropped="(file) => file.type.startsWith('image')"
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
              <div class="relative size-16">
                <img
                  v-if="files?.length && files.item(0)"
                  :src="preview(files.item(0)!).value"
                  alt="Upload preview"
                  class="bg-muted-200 dark:bg-muted-700/60 size-16 rounded-full object-cover object-center"
                >
                <img
                  v-else
                  :src="currentAvatar"
                  alt="Upload preview"
                  class="bg-muted-200 dark:bg-muted-700/60 size-16 rounded-full object-cover object-center"
                >
                <div
                  v-if="files?.length && files.item(0)"
                  class="absolute -bottom-0.5 -end-0.5 z-20"
                >
                  <BaseTooltip content="Remove image">
                    <BaseButton
                      size="icon-sm"
                      rounded="full"
                      @click="remove(files.item(0)!)"
                    >
                      <Icon name="lucide:x" class="size-4" />
                    </BaseButton>
                  </BaseTooltip>
                </div>
                <div v-else class="absolute -bottom-0.5 -end-0.5 z-20">
                  <BaseTooltip content="Upload image">
                    <BaseButton
                      size="icon-sm"
                      rounded="full"
                      @click="open"
                    >
                      <Icon name="lucide:plus" class="size-4" />
                    </BaseButton>
                  </BaseTooltip>
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
        </TairoFormGroup>

        <TairoFormGroup
          label="Profile Info"
          sublabel="Others diserve to know you more"
        >
          <div class="grid grid-cols-12 gap-4">
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="profile.firstName"
            >
              <BaseField
                v-slot="{ inputAttrs, inputRef }"
                :error="errorMessage"
                :disabled="isSubmitting"
                class="col-span-12 sm:col-span-6"
                required
              >
                <TairoInput
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  :model-value="field.value"
                  :aria-invalid="errorMessage ? 'true' : undefined"
                  icon="solar:user-rounded-linear"
                  placeholder="First name"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="profile.lastName"
            >
              <BaseField
                v-slot="{ inputAttrs, inputRef }"
                :error="errorMessage"
                :disabled="isSubmitting"
                class="col-span-12 sm:col-span-6"
                required
              >
                <TairoInput
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  :model-value="field.value"
                  :aria-invalid="errorMessage ? 'true' : undefined"
                  icon="solar:user-rounded-linear"
                  placeholder="Last name"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="profile.role"
            >
              <BaseField
                v-slot="{ inputAttrs, inputRef }"
                :error="errorMessage"
                :disabled="isSubmitting"
                class="col-span-12"
                required
              >
                <TairoInput
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  :model-value="field.value"
                  :aria-invalid="errorMessage ? 'true' : undefined"
                  icon="solar:suitcase-lines-linear"
                  placeholder="Job title"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="profile.location"
            >
              <BaseField
                v-slot="{ inputAttrs, inputRef }"
                :error="errorMessage"
                :disabled="isSubmitting"
                class="col-span-12"
              >
                <TairoInput
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  :model-value="field.value"
                  :aria-invalid="errorMessage ? 'true' : undefined"
                  icon="solar:map-point-linear"
                  placeholder="Location"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="profile.bio"
            >
              <BaseField
                v-slot="{ inputAttrs, inputRef }"
                :error="errorMessage"
                :disabled="isSubmitting"
                class="col-span-12"
              >
                <BaseTextarea
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  :model-value="field.value"
                  :aria-invalid="errorMessage ? 'true' : undefined"
                  rows="4"
                  placeholder="About you / Short bio..."
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
          </div>
        </TairoFormGroup>

        <TairoFormGroup
          label="Professional Info"
          sublabel="This can help you to win some opportunities"
        >
          <div class="grid grid-cols-12 gap-4">
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="info.experience"
            >
              <BaseField
                v-slot="{ inputAttrs, inputRef }"
                :error="errorMessage"
                :disabled="isSubmitting"
                class="col-span-12 sm:col-span-6"
                required
              >
                <BaseSelect
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  :model-value="field.value"
                  :aria-invalid="errorMessage ? 'true' : undefined"
                  placeholder="Experience"
                  rounded="sm"
                  :items="experience.map((value) => ({
                    value,
                    textValue: value,
                  }))"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="info.firstJob"
            >
              <BaseField
                v-slot="{ inputAttrs, inputRef }"
                :error="errorMessage"
                :disabled="isSubmitting"
                class="col-span-12 sm:col-span-6"
                required
              >
                <BaseSelect
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  :model-value="field.value"
                  :aria-invalid="errorMessage ? 'true' : undefined"
                  placeholder="Is this your first job?"
                  rounded="sm"
                  :items="answers.map((item) => ({
                    value: item.value,
                    textValue: item.label,
                  }))"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="info.flexible"
            >
              <BaseField
                v-slot="{ inputAttrs, inputRef }"
                :error="errorMessage"
                :disabled="isSubmitting"
                class="col-span-12 sm:col-span-6"
                required
              >
                <BaseSelect
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  :model-value="field.value"
                  :aria-invalid="errorMessage ? 'true' : undefined"
                  placeholder="Are you flexible?"
                  rounded="sm"
                  :items="answers.map((item) => ({
                    value: item.value,
                    textValue: item.label,
                  }))"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="info.remote"
            >
              <BaseField
                v-slot="{ inputAttrs, inputRef }"
                :error="errorMessage"
                :disabled="isSubmitting"
                class="col-span-12 sm:col-span-6"
                required
              >
                <BaseSelect
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  :model-value="field.value"
                  :aria-invalid="errorMessage ? 'true' : undefined"
                  placeholder="Do you work remotely?"
                  rounded="sm"
                  :items="answers.map((item) => ({
                    value: item.value,
                    textValue: item.label,
                  }))"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
          </div>
        </TairoFormGroup>

        <TairoFormGroup
          label="Social Profiles"
          sublabel="This can help others finding you on social media"
        >
          <div class="grid grid-cols-12 gap-4">
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="social.facebook"
            >
              <BaseField
                v-slot="{ inputAttrs, inputRef }"
                :error="errorMessage"
                :disabled="isSubmitting"
                class="col-span-12 sm:col-span-6"
              >
                <TairoInput
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  :model-value="field.value"
                  :aria-invalid="errorMessage ? 'true' : undefined"
                  icon="fa6-brands:facebook-f"
                  placeholder="Facebook URL"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="social.twitter"
            >
              <BaseField
                v-slot="{ inputAttrs, inputRef }"
                :error="errorMessage"
                :disabled="isSubmitting"
                class="col-span-12 sm:col-span-6"
              >
                <TairoInput
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  :model-value="field.value"
                  :aria-invalid="errorMessage ? 'true' : undefined"
                  icon="fa6-brands:x-twitter"
                  placeholder="Twitter URL"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="social.dribbble"
            >
              <BaseField
                v-slot="{ inputAttrs, inputRef }"
                :error="errorMessage"
                :disabled="isSubmitting"
                class="col-span-12 sm:col-span-6"
              >
                <TairoInput
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  :model-value="field.value"
                  :aria-invalid="errorMessage ? 'true' : undefined"
                  icon="fa6-brands:dribbble"
                  placeholder="Dribbble URL"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="social.instagram"
            >
              <BaseField
                v-slot="{ inputAttrs, inputRef }"
                :error="errorMessage"
                :disabled="isSubmitting"
                class="col-span-12 sm:col-span-6"
              >
                <TairoInput
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  :model-value="field.value"
                  :aria-invalid="errorMessage ? 'true' : undefined"
                  icon="fa6-brands:instagram"
                  placeholder="Instagram URL"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="social.github"
            >
              <BaseField
                v-slot="{ inputAttrs, inputRef }"
                :error="errorMessage"
                :disabled="isSubmitting"
                class="col-span-12 sm:col-span-6"
              >
                <TairoInput
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  :model-value="field.value"
                  :aria-invalid="errorMessage ? 'true' : undefined"
                  type="text"
                  icon="fa6-brands:github"
                  placeholder="Github URL"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="social.gitlab"
            >
              <BaseField
                v-slot="{ inputAttrs, inputRef }"
                :error="errorMessage"
                :disabled="isSubmitting"
                class="col-span-12 sm:col-span-6"
              >
                <TairoInput
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  :model-value="field.value"
                  :aria-invalid="errorMessage ? 'true' : undefined"
                  icon="fa6-brands:gitlab"
                  placeholder="Gitlab URL"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
          </div>
        </TairoFormGroup>
      </div>
    </div>
    <TairoFormSave
      rounded="md"
      :disabled="isSubmitting"
      :loading="isSubmitting"
      @reset="resetForm"
    />
  </form>
</template>
