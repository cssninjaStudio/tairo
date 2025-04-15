<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useFieldError, useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({
  title: 'Create company',
  preview: {
    title: 'Form layout 1',
    description: 'For forms and input fields',
    categories: ['layouts', 'forms'],
    src: '/img/screens/layouts-form-1.png',
    srcDark: '/img/screens/layouts-form-1-dark.png',
    order: 47,
  },
})

const people = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
    media: '/img/avatars/19.svg',
  },
  {
    id: 2,
    name: 'Aaron Splatter',
    text: 'Project Manager',
    media: '/img/avatars/16.svg',
  },
  {
    id: 3,
    name: 'Mike Miller',
    text: 'UI/UX Designer',
    media: '/img/avatars/3.svg',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    text: 'Mobile Developer',
    media: '/img/avatars/22.svg',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
    media: '/img/avatars/2.svg',
  },
]

// This is the object that will contain the validation messages
const ONE_MB = 1000000
const VALIDATION_TEXT = {
  NAME_REQUIRED: 'Company name can\'t be empty',
  EMAIL_REQUIRED: 'Email address can\'t be empty',
  OPTION_REQUIRED: 'Please select an option',
  MANAGER_REQUIRED: 'Please select a manager',
  STATUS_REQUIRED: 'Pick a status',
  COMPANY_TYPE_REQUIRED: 'Please select a company type',
  AVATAR_TOO_BIG: `Avatar size must be less than 1MB`,
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
    avatar: z.custom<File>(v => v instanceof File).nullable(),
    company: z.object({
      name: z.string().min(1, VALIDATION_TEXT.NAME_REQUIRED),
      email: z.string().min(1, VALIDATION_TEXT.EMAIL_REQUIRED),
      type: z.string().min(1, VALIDATION_TEXT.COMPANY_TYPE_REQUIRED),
      website: z.string().optional(),
      phone: z.string().optional(),
      status: z.union([z.literal('active'), z.literal('inactive')]).nullable(),
      employees: z
        .union([
          z.literal('1-10 employees'),
          z.literal('10-50 employees'),
          z.literal('50-100 employees'),
          z.literal('100+ employees'),
        ])
        .nullable(),
      manager: z
        .object({
          id: z.number(),
          name: z.string(),
          text: z.string(),
          media: z.string(),
        })
        .nullable(),
      income: z
        .union([
          z.literal('0 - 250K'),
          z.literal('250K - 500K'),
          z.literal('500K - 1M'),
          z.literal('1M - 5M'),
          z.literal('10M+'),
        ])
        .nullable(),
      notes: z.string().optional(),
      privateRecord: z.boolean(),
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
    if (!data.company.income) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.OPTION_REQUIRED,
        path: ['company.income'],
      })
    }
    if (!data.company.employees) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.OPTION_REQUIRED,
        path: ['company.employees'],
      })
    }
    if (!data.company.status) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.STATUS_REQUIRED,
        path: ['company.status'],
      })
    }
    if (!data.company.manager) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.MANAGER_REQUIRED,
        path: ['company.manager'],
      })
    }
  })

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = {
  avatar: null,
  company: {
    name: '',
    email: '',
    website: '',
    type: '',
    phone: '',
    income: null,
    employees: null,
    manager: null,
    status: null,
    notes: '',
    privateRecord: false,
  },
} satisfies FormInput

// This is the computed value that will be used to display the current avatar
const currentAvatar = computed(() => '/img/avatars/company.svg')

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
    // console.log('company-create-success', values)

    try {
      // fake delay, this will make isSubmitting value to be true
      await new Promise((resolve, reject) => {
        if (values.company.name === 'Airbnb') {
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
        description: `Record has been created!`,
        icon: 'ph:check',
        progress: true,
      })
    }
    catch (error: any) {
      // this will set the error on the form
      if (error.message === 'Fake backend validation error') {
        setFieldError('company.name', 'This name is not allowed')

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
    // console.log('company-create-error', error)

    // you can use it to scroll to the first error
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  },
)
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20 dark:[--color-input-default-bg:var(--color-muted-950)]">
    <form
      method="POST"
      action=""
      class="flex flex-col"
      novalidate
      @submit.prevent="onSubmit"
    >
      <div class="mt-12">
        <div class="flex w-full max-w-5xl flex-col space-y-16">
          <!-- Dual column -->
          <div class="grid grid-cols-12 gap-8">
            <!-- Label column -->
            <div class="col-span-12 md:col-span-4">
              <div class="max-w-xs pe-4 space-y-2">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  class="text-muted-900 dark:text-white"
                >
                  <span>Company avatar</span>
                </BaseHeading>
                <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
                  Upload a company logo or avatar. This image will be displayed in the company profile.
                </BaseParagraph>
              </div>
            </div>
            <!-- Input column -->
            <div class="col-span-12 md:col-span-8">
              <div
                class="relative mb-5 flex flex-col gap-4"
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
                  <div class="relative size-20">
                    <img
                      v-if="files?.length && files.item(0)"
                      :src="preview(files.item(0)!).value"
                      alt="Upload preview"
                      class="bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"
                    >
                    <img
                      v-else
                      :src="currentAvatar"
                      alt="Upload preview"
                      class="bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center dark:invert"
                    >
                    <div
                      v-if="files?.length && files.item(0)"
                      class="absolute bottom-0 end-0 z-20"
                    >
                      <BaseTooltip content="Remove image">
                        <BaseButton
                          size="icon-sm"
                          rounded="full"
                          class="scale-90"
                          @click="remove(files.item(0)!)"
                        >
                          <Icon name="lucide:x" class="size-4" />
                        </BaseButton>
                      </BaseTooltip>
                    </div>
                    <div v-else class="absolute bottom-0 end-0 z-20">
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
            </div>
          </div>
          <!-- Dual column -->
          <div class="grid grid-cols-12 gap-8">
            <!-- Label column -->
            <div class="col-span-12 md:col-span-4">
              <div class="max-w-xs pe-4 space-y-2">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  class="text-muted-900 dark:text-white"
                >
                  <span>Contact info</span>
                </BaseHeading>
                <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
                  Fill in basic information about the company. This information will be displayed in the company profile.
                </BaseParagraph>
              </div>
            </div>
            <!-- Input column -->
            <div class="col-span-12 md:col-span-8">
              <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12 lg:col-span-6">
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="company.name"
                  >
                    <BaseField
                      v-slot="{ inputAttrs, inputRef }"
                      label="Company Name"
                      :state="errorMessage ? 'error' : 'idle'"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      required
                    >
                      <BaseInput
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        :model-value="field.value"
                        placeholder="Ex: Acme Inc."
                        type="text"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                    </BaseField>
                  </Field>
                </div>
                <div class="col-span-12 lg:col-span-6">
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="company.email"
                  >
                    <BaseField
                      v-slot="{ inputAttrs, inputRef }"
                      label="Company Email"
                      :state="errorMessage ? 'error' : 'idle'"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      required
                    >
                      <BaseInput
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        :model-value="field.value"
                        placeholder="Ex: hello@acme.co"
                        type="email"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                    </BaseField>
                  </Field>
                </div>
                <div class="col-span-12">
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="company.website"
                  >
                    <BaseField
                      v-slot="{ inputAttrs, inputRef }"
                      label="Company website"
                      :state="errorMessage ? 'error' : 'idle'"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                    >
                      <TairoInput
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        :model-value="field.value"
                        placeholder="Ex: https://acme.co"
                        icon="lucide:globe"
                        type="text"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                    </BaseField>
                  </Field>
                </div>
                <div class="col-span-12">
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="company.phone"
                  >
                    <BaseField
                      v-slot="{ inputAttrs, inputRef }"
                      label="Company Phone"
                      :state="errorMessage ? 'error' : 'idle'"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                    >
                      <LazyAddonInputPhone
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        label="Company Phone"
                        placeholder="Ex: +1 555 555 5555"
                        :model-value="field.value"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                    </BaseField>
                  </Field>
                </div>
              </div>
            </div>
          </div>
          <!-- Dual column -->
          <div class="grid grid-cols-12 gap-8">
            <!-- Label column -->
            <div class="col-span-12 md:col-span-4">
              <div class="max-w-xs pe-4 space-y-2">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  class="text-muted-900 dark:text-white"
                >
                  <span>Business info</span>
                </BaseHeading>
                <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
                  Fill in business information about the company. This information will be displayed in the company profile.
                </BaseParagraph>
              </div>
            </div>
            <!-- Input column -->
            <div class="col-span-12 md:col-span-8">
              <div class="mb-6">
                <Field
                  v-slot="{ field, errorMessage, handleChange }"
                  name="company.type"
                >
                  <BaseField
                    label="Company type"
                    :state="errorMessage ? 'error' : 'idle'"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    required
                  >
                    <BaseRadioGroup
                      :model-value="field.value"
                      class="grid gap-4 lg:grid-cols-3"
                      @update:model-value="handleChange"
                    >
                      <TairoRadioCard
                        value="team_member_1"
                        icon="solar:home-2-linear"
                        label="Solo"
                        subtitle="Small company"
                        variant="muted"
                      />
                      <TairoRadioCard
                        value="team_member_2"
                        icon="solar:shop-linear"
                        label="LLC"
                        subtitle="Medium company"
                        variant="muted"
                      />
                      <TairoRadioCard
                        value="team_member_3"
                        icon="solar:buildings-linear"
                        label="Corp"
                        subtitle="Bigger company"
                        variant="muted"
                      />
                    </BaseRadioGroup>
                  </BaseField>
                </Field>
              </div>
              <div class="grid grid-cols-12 gap-4">
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="company.income"
                >
                  <BaseField
                    v-slot="{ inputAttrs, inputRef }"
                    label="Income"
                    :state="errorMessage ? 'error' : 'idle'"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    class="col-span-12 lg:col-span-6"
                    required
                  >
                    <BaseSelect
                      :ref="inputRef"
                      v-bind="inputAttrs"
                      rounded="sm"
                      :model-value="field.value"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    >
                      <BaseSelectItem
                        v-for="value in ['0 - 250K', '250K - 500K', '500K - 1M', '1M - 5M', '10M+']"
                        :key="value"
                        :value
                      >
                        {{ value }}
                      </BaseSelectItem>
                    </BaseSelect>
                  </BaseField>
                </Field>
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="company.employees"
                >
                  <BaseField
                    v-slot="{ inputAttrs, inputRef }"
                    label="Employees"
                    :state="errorMessage ? 'error' : 'idle'"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    class="col-span-12 lg:col-span-6"
                    required
                  >
                    <BaseSelect
                      :ref="inputRef"
                      v-bind="inputAttrs"
                      rounded="sm"
                      :model-value="field.value"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    >
                      <BaseSelectItem
                        v-for="value in ['1-10 employees', '10-50 employees', '50-100 employees', '100+ employees']"
                        :key="value"
                        :value
                      >
                        {{ value }}
                      </BaseSelectItem>
                    </BaseSelect>
                  </BaseField>
                </Field>
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="company.manager"
                >
                  <BaseField
                    v-slot="{ inputAttrs, inputRef }"
                    label="Manager"
                    :state="errorMessage ? 'error' : 'idle'"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    class="col-span-12 lg:col-span-8"
                    required
                  >
                    <BaseSelect
                      :ref="inputRef"
                      v-bind="inputAttrs"
                      :model-value="field.value"
                      placeholder="Select a manager"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    >
                      <template v-if="field.value" #value="{ modelValue }">
                        {{ modelValue?.name }}
                      </template>

                      <TairoSelectItem
                        v-for="item in people"
                        :key="item.id"
                        :value="item"
                        :media="item.media"
                        :name="item.name"
                        :text="item.text"
                      />
                    </BaseSelect>
                  </BaseField>
                </Field>
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="company.status"
                >
                  <BaseField
                    v-slot="{ inputAttrs, inputRef }"
                    label="Status"
                    :state="errorMessage ? 'error' : 'idle'"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    class="col-span-12 lg:col-span-4"
                    required
                  >
                    <BaseSelect
                      :ref="inputRef"
                      v-bind="inputAttrs"
                      rounded="sm"
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

                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="company.notes"
                >
                  <BaseField
                    v-slot="{ inputAttrs, inputRef }"
                    label="Company notes"
                    :state="errorMessage ? 'error' : 'idle'"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    class="col-span-12"
                  >
                    <BaseTextarea
                      :ref="inputRef"
                      v-bind="inputAttrs"
                      placeholder="Write some notes..."
                      :model-value="field.value"
                      rows="4"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    />
                  </BaseField>
                </Field>
                <div class="col-span-12">
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="company.privateRecord"
                  >
                    <BaseCheckbox
                      label="This record is private"
                      :model-value="field.value"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    />
                  </Field>
                </div>
              </div>
              <div
                class="mt-5 flex flex-col md:flex-row md:justify-end gap-3"
              >
                <BaseButton
                  type="submit"
                  variant="ghost"
                  rounded="md"
                  class="w-full sm:w-32"
                >
                  Cancel
                </BaseButton>
                <BaseButton
                  type="submit"
                  variant="primary"
                  rounded="md"
                  class="w-full sm:w-32"
                >
                  Create
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
