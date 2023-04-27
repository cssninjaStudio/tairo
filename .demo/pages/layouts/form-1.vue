<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useFieldError, useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({
  title: 'Form layout 1',
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
  NAME_REQUIRED: "Company name can't be empty",
  EMAIL_REQUIRED: "Email address can't be empty",
  OPTION_REQUIRED: 'Please select an option',
  MANAGER_REQUIRED: 'Please select a manager',
  STATUS_REQUIRED: 'Pick a status',
  AVATAR_TOO_BIG: `Avatar size must be less than 1MB`,
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
    avatar: z.custom<File>((v) => v instanceof File).nullable(),
    company: z.object({
      name: z.string().min(1, VALIDATION_TEXT.NAME_REQUIRED),
      email: z.string().min(1, VALIDATION_TEXT.EMAIL_REQUIRED),
      website: z.string().optional(),
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
const initialValues = computed<FormInput>(() => ({
  avatar: null,
  company: {
    name: '',
    email: '',
    website: '',
    type: '',
    income: null,
    employees: null,
    manager: null,
    status: null,
    notes: '',
    privateRecord: false,
  },
}))

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
    console.log('company-create-success', values)

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

      toaster.clearAll()
      toaster.show({
        title: 'Success',
        message: `Record has been created!`,
        color: 'success',
        icon: 'ph:check',
        closable: true,
      })
    } catch (error: any) {
      // this will set the error on the form
      if (error.message === 'Fake backend validation error') {
        // @ts-expect-error - vee validate typing bug with nested keys
        setFieldError('company.name', 'This name is not allowed')

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
    console.log('company-create-error', error)

    // you can use it to scroll to the first error
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  },
)
</script>

<template>
  <div>
    <div class="mb-4 flex flex-col justify-between md:flex-row md:items-center">
      <div
        class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-left lg:max-w-full"
      >
        <div>
          <BaseHeading
            as="h2"
            size="xl"
            weight="light"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>New company</span>
          </BaseHeading>
          <BaseParagraph size="sm">
            <span class="text-muted-500"> Create a new company record </span>
          </BaseParagraph>
        </div>
      </div>
      <div
        class="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start"
      >
        <BaseButtonAction @click.prevent="$router.back()">
          <Icon name="lucide:arrow-left" class="h-3 w-3" />
          <span>Cancel</span>
        </BaseButtonAction>
      </div>
    </div>
    <BaseCard>
      <form
        method="POST"
        action=""
        class="divide-muted-200 dark:divide-muted-700 grid divide-x sm:grid-cols-2"
        @submit.prevent="onSubmit"
      >
        <div
          shape="curved"
          class="bg-muted-50 dark:bg-muted-800/60 space-y-8 p-10"
        >
          <div class="mx-auto flex w-full max-w-[410px] flex-col">
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
                    accept="image/*"
                    v-model="inputFile"
                    v-slot="{ open, remove, preview, files }"
                  >
                    <div class="relative h-20 w-20">
                      <img
                        v-if="files?.length && files.item(0)"
                        :src="preview(files.item(0)!).value"
                        alt="Upload preview"
                        class="bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"
                      />
                      <img
                        v-else
                        :src="currentAvatar"
                        alt="Upload preview"
                        class="bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center dark:invert"
                      />
                      <div
                        v-if="files?.length && files.item(0)"
                        class="absolute bottom-0 end-0 z-20"
                      >
                        <BaseButtonIcon
                          condensed
                          shape="full"
                          @click="remove(files.item(0)!)"
                          data-tooltip="Remove image"
                          class="scale-90"
                        >
                          <Icon name="lucide:x" class="h-4 w-4" />
                        </BaseButtonIcon>
                      </div>
                      <div v-else class="absolute bottom-0 end-0 z-20">
                        <div class="relative" data-tooltip="Upload image">
                          <BaseButtonIcon condensed shape="full" @click="open">
                            <Icon name="lucide:plus" class="h-4 w-4" />
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
                <div class="grid grid-cols-12 gap-4">
                  <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
                    <Field
                      v-slot="{ field, errorMessage, handleChange, handleBlur }"
                      name="company.name"
                    >
                      <BaseInput
                        label="Company Name"
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
                      v-slot="{ field, errorMessage, handleChange, handleBlur }"
                      name="company.email"
                    >
                      <BaseInput
                        label="Company Email"
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
                  <div class="col-span-12">
                    <Field
                      v-slot="{ field, errorMessage, handleChange, handleBlur }"
                      name="company.website"
                    >
                      <BaseInput
                        icon="lucide:globe"
                        label="Company website"
                        placeholder="Ex: https://acme.co"
                        :model-value="field.value"
                        :error="errorMessage"
                        :disabled="isSubmitting"
                        type="text"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                    </Field>
                  </div>
                </div>
                <div class="mb-6 mt-4">
                  <label class="nui-label pb-2 text-[0.825rem]"
                    >Company type</label
                  >
                  <div
                    class="ptablet:grid-cols-2 ltablet:grid-cols-3 grid gap-4 lg:grid-cols-3"
                  >
                    <Field
                      v-slot="{ field, errorMessage, handleChange, handleBlur }"
                      name="company.type"
                    >
                      <BaseRadioHeadless
                        value="team_member_1"
                        :model-value="field.value"
                        :error="errorMessage"
                        :disabled="isSubmitting"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      >
                        <BaseCard
                          shape="rounded"
                          class="text-muted-400 peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 relative border-2 px-2 py-4 grayscale peer-checked:grayscale-0"
                        >
                          <div
                            class="flex w-full flex-col items-center gap-2 text-center"
                          >
                            <Icon
                              name="ph:house-simple-duotone"
                              class="child mx-auto h-5 w-5"
                            />

                            <div>
                              <BaseHeading
                                as="h4"
                                size="sm"
                                weight="medium"
                                lead="none"
                              >
                                Solo
                              </BaseHeading>

                              <BaseText size="xs" class="text-muted-400"
                                >Small company</BaseText
                              >
                            </div>

                            <div
                              class="child text-muted-300 absolute right-2 top-2 ms-auto"
                            >
                              <div
                                class="h-2 w-2 rounded-full bg-current"
                              ></div>
                            </div>
                          </div>
                        </BaseCard>
                      </BaseRadioHeadless>
                    </Field>

                    <Field
                      v-slot="{ field, errorMessage, handleChange, handleBlur }"
                      name="company.type"
                    >
                      <BaseRadioHeadless
                        value="team_member_2"
                        :model-value="field.value"
                        :error="errorMessage"
                        :disabled="isSubmitting"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      >
                        <BaseCard
                          shape="rounded"
                          class="text-muted-400 peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 relative border-2 px-2 py-4 grayscale peer-checked:grayscale-0"
                        >
                          <div
                            class="flex w-full flex-col items-center gap-2 text-center"
                          >
                            <Icon
                              name="ph:storefront-duotone"
                              class="child mx-auto h-5 w-5"
                            />

                            <div>
                              <BaseHeading
                                as="h4"
                                size="sm"
                                weight="medium"
                                lead="none"
                              >
                                LLC
                              </BaseHeading>

                              <BaseText size="xs" class="text-muted-400"
                                >Medium company</BaseText
                              >
                            </div>

                            <div
                              class="child text-muted-300 absolute right-2 top-2 ms-auto"
                            >
                              <div
                                class="h-2 w-2 rounded-full bg-current"
                              ></div>
                            </div>
                          </div>
                        </BaseCard>
                      </BaseRadioHeadless>
                    </Field>

                    <Field
                      v-slot="{ field, errorMessage, handleChange, handleBlur }"
                      name="company.type"
                    >
                      <BaseRadioHeadless
                        value="team_member_3"
                        :model-value="field.value"
                        :error="errorMessage"
                        :disabled="isSubmitting"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      >
                        <BaseCard
                          shape="rounded"
                          class="text-muted-400 peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 relative border-2 px-2 py-4 grayscale peer-checked:grayscale-0"
                        >
                          <div
                            class="flex w-full flex-col items-center gap-2 text-center"
                          >
                            <Icon
                              name="ph:buildings-duotone"
                              class="child mx-auto h-5 w-5"
                            />

                            <div>
                              <BaseHeading
                                as="h4"
                                size="sm"
                                weight="medium"
                                lead="none"
                              >
                                Corp
                              </BaseHeading>

                              <BaseText size="xs" class="text-muted-400"
                                >Bigger company</BaseText
                              >
                            </div>

                            <div
                              class="child text-muted-300 absolute right-2 top-2 ms-auto"
                            >
                              <div
                                class="h-2 w-2 rounded-full bg-current"
                              ></div>
                            </div>
                          </div>
                        </BaseCard>
                      </BaseRadioHeadless>
                    </Field>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div shape="curved" class="w-full space-y-8 p-10">
          <div class="mx-auto w-full max-w-[410px]">
            <div class="grid grid-cols-12 gap-4">
              <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="company.income"
                >
                  <BaseSelect
                    shape="rounded"
                    label="Income"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  >
                    <option value="" hidden></option>
                    <option value="0 - 250K">0 - 250K</option>
                    <option value="250K - 500K">250K - 500K</option>
                    <option value="500K - 1M">500K - 1M</option>
                    <option value="1M - 5M">1M - 5M</option>
                    <option value="10M+">10M+</option>
                  </BaseSelect>
                </Field>
              </div>
              <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="company.employees"
                >
                  <BaseSelect
                    shape="rounded"
                    label="Employees"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  >
                    <option value="" hidden></option>
                    <option value="1-10 employees">1-10 employees</option>
                    <option value="10-50 employees">10-50 employees</option>
                    <option value="50-100 employees">50-100 employees</option>
                    <option value="100+ employees">100+ employees</option>
                  </BaseSelect>
                </Field>
              </div>
              <div class="ltablet:col-span-8 col-span-12 lg:col-span-8">
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="company.manager"
                >
                  <BaseListbox
                    label="Manager"
                    :items="people"
                    :properties="{
                      value: 'id',
                      label: 'name',
                      sublabel: 'text',
                      media: 'media',
                    }"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>
              </div>
              <div class="ltablet:col-span-4 col-span-12 lg:col-span-4">
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="company.status"
                >
                  <BaseSelect
                    shape="rounded"
                    label="Status"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  >
                    <option value="" hidden></option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </BaseSelect>
                </Field>
              </div>

              <div class="col-span-12">
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="company.notes"
                >
                  <BaseTextarea
                    label="Company notes"
                    placeholder="Write some notes..."
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
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="company.privateRecord"
                >
                  <BaseCheckbox
                    label="This record is private"
                    shape="rounded"
                    color="primary"
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
              class="mt-5 flex flex-col-reverse text-right md:block md:space-x-3"
            >
              <BaseButton
                type="submit"
                color="primary"
                class="!h-12 w-full sm:w-40"
              >
                Create Company
              </BaseButton>
            </div>
          </div>
        </div>
      </form>
    </BaseCard>
  </div>
</template>
