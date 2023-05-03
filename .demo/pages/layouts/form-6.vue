<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { DatePicker } from 'v-calendar'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({
  title: 'Meeting',
  preview: {
    title: 'Form layout 6',
    description: 'For forms and input fields',
    categories: ['layouts', 'forms'],
    src: '/img/screens/layouts-form-6.png',
    srcDark: '/img/screens/layouts-form-6-dark.png',
    order: 52,
  },
})

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
const zodSchema = z.object({
  meeting: z.object({
    title: z.string().min(5, VALIDATION_TEXT.FIRSTNAME_REQUIRED),
    startDate: z.date().nullable(),
    endDate: z.date().nullable(),
    startTime: z.date().nullable(),
    endTime: z.date().nullable(),
    frequency: z.string(),
    participants: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        avatar: z.string().optional(),
      }),
    ),
    location: z.string(),
    url: z.string().optional(),
    calendar: z.string(),
    description: z.string().min(40, VALIDATION_TEXT.FIRSTNAME_REQUIRED),
    colorCode: z.string(),
    notifications: z.object({
      general: z.boolean(),
      team: z.boolean(),
      reminders: z.boolean(),
      modifications: z.boolean(),
    }),
  }),
})

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = computed<FormInput>(() => ({
  meeting: {
    title: '',
    startDate: null,
    endDate: null,
    startTime: null,
    endTime: null,
    frequency: 'day',
    participants: [],
    location: '',
    url: '',
    calendar: '',
    description: '',
    colorCode: '',
    notifications: {
      general: false,
      team: false,
      reminders: false,
      modifications: false,
    },
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
    console.log('meeting-create-success', values)

    try {
      // fake delay, this will make isSubmitting value to be true
      await new Promise((resolve, reject) => {
        if (values.meeting.title === 'Demo meeting') {
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
        setFieldError('meeting.title', 'This name is not allowed')

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
    console.log('meeting-create-error', error)

    // you can use it to scroll to the first error
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  },
)

const calendars = [
  {
    id: 1,
    name: 'My Calendar',
    text: 'Your personal calendar',
    icon: 'ph:user-duotone',
  },
  {
    id: 2,
    name: 'Team Calendar',
    text: 'Your team calendar',
    icon: 'ph:users-duotone',
  },
  {
    id: 3,
    name: 'Company calendar',
    text: 'Your company calendar',
    icon: 'ph:buildings-duotone',
  },
]

const dates = ref({
  start: new Date(),
  end: new Date(),
})

const masks = ref({
  input: 'YYYY-MM-DD',
})

const frequency = ref('day')
const selectedCalendar = ref({
  id: 1,
  name: 'My Calendar',
  text: 'Your personal calendar',
  icon: 'ph:user-duotone',
})

const uploadedFiles = ref<FileList | null>(null)
const colorCode = ref('color_code_1')
</script>

<template>
  <form
    action=""
    method="POST"
    @submit.prevent="onSubmit"
    class="mx-auto w-full max-w-3xl"
  >
    <BaseCard>
      <div
        class="border-muted-200 dark:border-muted-700 flex items-center justify-between gap-4 border-b px-10 py-5"
      >
        <div>
          <BaseHeading as="h3" size="md" weight="medium">
            New Meeting
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400"
            >Schedule a new meeting</BaseText
          >
        </div>
        <div class="ms-auto flex items-center gap-2">
          <BaseButtonAction @click.prevent="$router.back()">
            <Icon name="lucide:arrow-left" class="h-3 w-3" />
            <span>Cancel</span>
          </BaseButtonAction>
          <BaseButtonAction type="submit" color="primary">
            <Icon name="lucide:check" class="h-3 w-3" />
            <span>Save</span>
          </BaseButtonAction>
        </div>
      </div>
      <div class="px-10 py-5">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="meeting.title"
            >
              <BaseInput
                label="What is this meeting about?"
                placeholder="Ex: Project review with the design team"
                icon="lucide:slack"
                :model-value="field.value"
                :error="errorMessage"
                :disabled="isSubmitting"
                type="text"
                @update:model-value="handleChange"
                @blur="handleBlur"
              />
            </Field>
          </div>
          <div class="col-span-12 sm:col-span-6">
            <DatePicker
              v-model.range="dates"
              :masks="masks"
              :min-date="new Date()"
              mode="date"
              hide-time-header
              trim-weeks
            >
              <template #default="{ inputValue, inputEvents }">
                <div class="flex w-full flex-col gap-4 sm:flex-row">
                  <div class="relative grow">
                    <Field
                      v-slot="{ field, errorMessage, handleChange, handleBlur }"
                      name="meeting.startDate"
                    >
                      <BaseInput
                        label="Start date"
                        icon="ph:calendar-blank-duotone"
                        :value="inputValue.start"
                        v-on="inputEvents.start"
                        :model-value="field.value"
                        :error="errorMessage"
                        :disabled="isSubmitting"
                        type="text"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                    </Field>
                  </div>
                  <div class="relative grow">
                    <Field
                      v-slot="{ field, errorMessage, handleChange, handleBlur }"
                      name="meeting.endDate"
                    >
                      <BaseInput
                        label="End date"
                        icon="ph:calendar-blank-duotone"
                        :value="inputValue.end"
                        v-on="inputEvents.end"
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
              </template>
            </DatePicker>
          </div>
          <div class="col-span-12 sm:col-span-6">
            <DatePicker
              v-model.range="dates"
              :masks="masks"
              :min-date="new Date()"
              mode="time"
              hide-time-header
              trim-weeks
            >
              <template #default="{ inputValue, inputEvents }">
                <div class="flex w-full flex-col gap-4 sm:flex-row">
                  <div class="relative grow">
                    <Field
                      v-slot="{ field, errorMessage, handleChange, handleBlur }"
                      name="meeting.startTime"
                    >
                      <BaseInput
                        label="Start time"
                        icon="ph:calendar-blank-duotone"
                        :value="inputValue.start"
                        v-on="inputEvents.start"
                        :model-value="field.value"
                        :error="errorMessage"
                        :disabled="isSubmitting"
                        type="text"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                      />
                    </Field>
                  </div>
                  <div class="relative grow">
                    <Field
                      v-slot="{ field, errorMessage, handleChange, handleBlur }"
                      name="meeting.endTime"
                    >
                      <BaseInput
                        label="End time"
                        icon="ph:calendar-blank-duotone"
                        :value="inputValue.end"
                        v-on="inputEvents.end"
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
              </template>
            </DatePicker>
          </div>
          <div class="col-span-12">
            <div class="my-4">
              <label class="nui-label pb-4 text-[0.825rem]"
                >Meeting frequency</label
              >
              <div class="flex items-center gap-6">
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="meeting.frequency"
                >
                  <BaseRadio
                    id="frequency-1"
                    name="unique_frequency"
                    label="All day"
                    value="day"
                    color="primary"
                    :classes="{
                      label: 'relative top-0.5 text-xs',
                    }"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>

                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="meeting.frequency"
                >
                  <BaseRadio
                    id="frequency-2"
                    name="weekly_frequency"
                    label="Repeat every week"
                    value="week"
                    color="primary"
                    :classes="{
                      label: 'relative top-0.5 text-xs',
                    }"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-muted-50 dark:bg-muted-800/70 border-muted-200 dark:border-muted-700 border-t p-10"
      >
        <div class="flex items-center justify-between">
          <div>
            <BaseHeading as="h3" size="md" weight="medium">
              Meeting details
            </BaseHeading>
            <BaseText size="xs" class="text-muted-400"
              >Add some meeting details</BaseText
            >
          </div>
          <div>
            <BaseButtonAction>
              <Icon name="lucide:plus" class="h-3 w-3" />
              <span>Add people</span>
            </BaseButtonAction>
          </div>
        </div>
        <div class="mt-10 grid grid-cols-12 gap-4">
          <div class="col-span-12 grid grid-cols-12">
            <div class="col-span-12 flex flex-col justify-center sm:col-span-3">
              <label class="nui-label text-[0.825rem]">Participants</label>
            </div>
            <div class="col-span-12 sm:col-span-9">
              <div class="flex items-center gap-3">
                <BaseAvatar src="/img/avatars/24.svg" data-tooltip="Anna B." />
                <BaseAvatar
                  src="/img/avatars/10.svg"
                  data-tooltip="Kendra W."
                />
                <BaseAvatar src="/img/avatars/8.svg" data-tooltip="John H." />
                <BaseAvatar
                  src="/img/avatars/25.svg"
                  data-tooltip="Melany L."
                />
                <div class="ms-auto">
                  <button
                    type="button"
                    class="text-primary-500 font-sans text-sm underline underline-offset-4"
                  >
                    Manage
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12 grid grid-cols-12">
            <div class="col-span-12 flex flex-col justify-center sm:col-span-3">
              <label class="nui-label text-[0.825rem]">Meeting location</label>
            </div>
            <div class="col-span-12 sm:col-span-9">
              <Field
                v-slot="{ field, errorMessage, handleChange, handleBlur }"
                name="meeting.location"
              >
                <BaseInput
                  type="text"
                  placeholder="Ex: meeting room A"
                  icon="lucide:map-pin"
                  :model-value="field.value"
                  :error="errorMessage"
                  :disabled="isSubmitting"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </Field>
            </div>
          </div>
          <div class="col-span-12 grid grid-cols-12">
            <div class="col-span-12 flex flex-col justify-center sm:col-span-3">
              <label class="nui-label text-[0.825rem]">Meeting URL</label>
            </div>
            <div class="col-span-12 sm:col-span-9">
              <Field
                v-slot="{ field, errorMessage, handleChange, handleBlur }"
                name="meeting.url"
              >
                <BaseInput
                  type="text"
                  placeholder="https://zoom.us/m/123456789"
                  icon="lucide:video"
                  :model-value="field.value"
                  :error="errorMessage"
                  :disabled="isSubmitting"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </Field>
            </div>
          </div>
          <div class="col-span-12 grid grid-cols-12">
            <div class="col-span-12 flex flex-col justify-center sm:col-span-3">
              <label class="nui-label text-[0.825rem]">Calendar</label>
            </div>
            <div class="col-span-12 sm:col-span-9">
              <Field
                v-slot="{ field, errorMessage, handleChange, handleBlur }"
                name="meeting.calendar"
              >
                <BaseListbox
                  :items="calendars"
                  :properties="{
                    value: 'id',
                    label: 'name',
                    sublabel: 'text',
                    icon: 'icon',
                  }"
                  :model-value="field.value"
                  :error="errorMessage"
                  :disabled="isSubmitting"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </Field>
            </div>
          </div>
          <div class="col-span-12 grid grid-cols-12">
            <div
              class="col-span-12 flex flex-col justify-start pt-2 sm:col-span-3"
            >
              <label class="nui-label text-[0.825rem]">Description</label>
            </div>
            <div class="col-span-12 sm:col-span-9">
              <Field
                v-slot="{ field, errorMessage, handleChange, handleBlur }"
                name="meeting.description"
              >
                <BaseTextarea
                  placeholder="Write some additional details about the meeting..."
                  :model-value="field.value"
                  :error="errorMessage"
                  :disabled="isSubmitting"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </Field>
            </div>
          </div>
          <div class="col-span-12 grid grid-cols-12">
            <div
              class="col-span-12 flex flex-col justify-start pt-4 sm:col-span-3"
            >
              <label class="nui-label text-[0.825rem]">Attachments</label>
            </div>
            <div class="col-span-12 sm:col-span-9">
              <BaseInputFileHeadless
                multiple
                v-model="uploadedFiles"
                v-slot="{ open, remove, preview, drop, files }"
              >
                <!-- Controls -->
                <div class="mb-4 flex items-center gap-2">
                  <button
                    type="button"
                    class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                    tooltip="Select files"
                    @click="open"
                  >
                    <Icon
                      name="lucide:plus"
                      class="absolute start-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2"
                    />
                    <span class="sr-only">Select files</span>
                  </button>
                  <button
                    type="button"
                    class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                    tooltip="Start Upload"
                  >
                    <Icon name="lucide:arrow-up" class="h-4 w-4" />

                    <span class="sr-only">Start Upload</span>
                  </button>
                </div>

                <div
                  class=""
                  @dragenter.stop.prevent
                  @dragover.stop.prevent
                  @drop="drop"
                >
                  <div
                    v-if="!files?.length"
                    class="nui-focus border-muted-300 dark:border-muted-700 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-600 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300"
                    tabindex="0"
                    role="button"
                    @click="open"
                    @keydown.enter.prevent="open"
                  >
                    <div class="p-5 text-center">
                      <Icon
                        name="mdi-light:cloud-upload"
                        class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 h-10 w-10 transition-colors duration-300"
                      />
                      <h4 class="text-muted-400 font-sans text-sm">
                        Drop files to upload
                      </h4>
                      <div>
                        <span
                          class="text-muted-400 font-sans text-[0.7rem] font-semibold uppercase"
                        >
                          Or
                        </span>
                      </div>
                      <label
                        for="file"
                        class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-sm underline underline-offset-4 transition-colors duration-300"
                      >
                        Select files
                      </label>
                    </div>
                  </div>
                  <ul v-else class="mt-6 space-y-2">
                    <li v-for="file in files" :key="file.name">
                      <div
                        class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3"
                      >
                        <div class="flex items-center gap-2">
                          <div class="shrink-0">
                            <img
                              class="h-14 w-14 rounded-xl object-cover object-center"
                              v-if="file.type.startsWith('image')"
                              :src="preview(file).value"
                              alt="Image preview"
                            />
                            <img
                              v-else
                              class="h-14 w-14 rounded-xl object-cover object-center"
                              src="/img/avatars/placeholder-file.png"
                              alt="Image preview"
                            />
                          </div>
                          <div class="font-sans">
                            <span
                              class="text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm"
                            >
                              {{ file.name }}
                            </span>
                            <span class="text-muted-400 block text-xs">
                              {{ formatFileSize(file.size) }}
                            </span>
                          </div>
                        </div>

                        <div
                          class="ms-auto w-32 px-4 transition-opacity duration-300"
                          :class="'opacity-100'"
                        >
                          <BaseProgress
                            :value="0"
                            size="xs"
                            :color="'success'"
                          />
                        </div>
                        <div class="flex gap-2">
                          <button
                            class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                            disabled
                            type="button"
                            tooltip="Cancel"
                          >
                            <Icon name="lucide:slash" class="h-4 w-4" />
                            <span class="sr-only">Cancel</span>
                          </button>

                          <button
                            class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                            type="button"
                            tooltip="Upload"
                          >
                            <Icon name="lucide:arrow-up" class="h-4 w-4" />
                            <span class="sr-only">Upload</span>
                          </button>
                          <button
                            class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                            type="button"
                            tooltip="Remove"
                            @click.prevent="remove(file)"
                          >
                            <Icon name="lucide:x" class="h-4 w-4" />
                            <span class="sr-only">Remove</span>
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </BaseInputFileHeadless>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-muted-50 dark:bg-muted-800/70 border-muted-200 dark:border-muted-700 border-t p-10"
      >
        <div class="grid grid-cols-12 gap-8 pb-6">
          <div class="col-span-12 grid grid-cols-12">
            <div class="col-span-12 flex flex-col justify-center sm:col-span-3">
              <label class="nui-label text-[0.825rem]">Color code</label>
            </div>
            <div class="col-span-12 sm:col-span-9">
              <div class="flex items-center gap-3">
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="meeting.colorCode"
                >
                  <BaseRadioHeadless
                    name="color_code"
                    value="color_code_1"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  >
                    <div
                      class="border-primary-500 peer-checked:bg-primary-500 h-4 w-4 rounded-full border-2 transition-colors duration-300"
                    ></div>
                  </BaseRadioHeadless>
                </Field>

                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="meeting.colorCode"
                >
                  <BaseRadioHeadless
                    name="color_code"
                    value="color_code_2"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  >
                    <div
                      class="border-info-500 peer-checked:bg-info-500 h-4 w-4 rounded-full border-2 transition-colors duration-300"
                    ></div>
                  </BaseRadioHeadless>
                </Field>

                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="meeting.colorCode"
                >
                  <BaseRadioHeadless
                    name="color_code"
                    value="color_code_3"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  >
                    <div
                      class="border-success-500 peer-checked:bg-success-500 h-4 w-4 rounded-full border-2 transition-colors duration-300"
                    ></div>
                  </BaseRadioHeadless>
                </Field>

                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="meeting.colorCode"
                >
                  <BaseRadioHeadless
                    name="color_code"
                    value="color_code_4"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  >
                    <div
                      class="border-danger-500 peer-checked:bg-danger-500 h-4 w-4 rounded-full border-2 transition-colors duration-300"
                    ></div>
                  </BaseRadioHeadless>
                </Field>

                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="meeting.colorCode"
                >
                  <BaseRadioHeadless
                    name="color_code"
                    value="color_code_5"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  >
                    <div
                      class="h-4 w-4 rounded-full border-2 border-lime-500 transition-colors duration-300 peer-checked:bg-lime-500"
                    ></div>
                  </BaseRadioHeadless>
                </Field>

                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="meeting.colorCode"
                >
                  <BaseRadioHeadless
                    name="color_code"
                    value="color_code_6"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  >
                    <div
                      class="h-4 w-4 rounded-full border-2 border-pink-500 transition-colors duration-300 peer-checked:bg-pink-500"
                    ></div>
                  </BaseRadioHeadless>
                </Field>
              </div>
            </div>
          </div>
          <div class="col-span-12 grid grid-cols-12">
            <div
              class="col-span-12 flex flex-col justify-start pt-1 sm:col-span-3"
            >
              <label class="nui-label text-[0.825rem]">Notifications</label>
            </div>
            <div class="col-span-12 sm:col-span-9">
              <div class="flex flex-col gap-6">
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="meeting.notifications.general"
                >
                  <BaseCheckbox
                    color="primary"
                    label="General notifications"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="meeting.notifications.team"
                >
                  <BaseCheckbox
                    color="primary"
                    label="Team notifications"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="meeting.notifications.reminders"
                >
                  <BaseCheckbox
                    color="primary"
                    label="Auto reminders"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="meeting.notifications.modifications"
                >
                  <BaseCheckbox
                    color="primary"
                    label="Modifications"
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
    <TairoFormSave />
  </form>
</template>
