<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { DatePicker } from 'v-calendar'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'
import 'v-calendar/dist/style.css'

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
  FIRSTNAME_REQUIRED: 'First name can\'t be empty',
  LASTNAME_REQUIRED: 'Last name can\'t be empty',
  EMAIL_REQUIRED: 'Email address can\'t be empty',
  OPTION_REQUIRED: 'Please select an option',
  ADDRESS_REQUIRED: 'Please enter an address',
  DESCRIPTION_REQUIRED: 'Please write at least 40 characters',
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
    calendar: z.string().optional(),
    description: z.string().min(40, VALIDATION_TEXT.DESCRIPTION_REQUIRED),
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
const initialValues = {
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
    calendar: undefined,
    description: '',
    colorCode: '',
    notifications: {
      general: false,
      team: false,
      reminders: false,
      modifications: false,
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
const fieldsWithErrors = computed(() => Object.keys(errors.value).length)

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
    // console.log('meeting-create-success', values)

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
        setFieldError('meeting.title', 'This name is not allowed')

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
    // console.log('meeting-create-error', error)

    // you can use it to scroll to the first error
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  },
)

const calendars = [
  {
    id: '1',
    name: 'My Calendar',
    text: 'Your personal calendar',
    icon: 'ph:user-duotone',
  },
  {
    id: '2',
    name: 'Team Calendar',
    text: 'Your team calendar',
    icon: 'ph:users-duotone',
  },
  {
    id: '3',
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
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <form
      action=""
      method="POST"
      class="mx-auto w-full max-w-3xl"
      novalidate
      @submit.prevent="onSubmit"
    >
      <BaseCard rounded="md">
        <div
          class="border-muted-200 dark:border-muted-800/80 flex items-center justify-between gap-4 border-b px-10 py-5"
        >
          <div>
            <BaseHeading
              as="h3"
              size="md"
              weight="medium"
              class="text-muted-900 dark:text-white"
            >
              New Meeting
            </BaseHeading>
            <BaseParagraph
              size="xs"
              class="text-muted-600 dark:text-muted-400"
            >
              Schedule a new meeting
            </BaseParagraph>
          </div>
          <div class="ms-auto flex items-center gap-2">
            <BaseButton @click.prevent="$router.back()">
              <Icon name="lucide:arrow-left" class="size-3" />
              <span>Cancel</span>
            </BaseButton>
            <BaseButton type="submit" variant="primary">
              <Icon name="lucide:check" class="size-3" />
              <span>Save</span>
            </BaseButton>
          </div>
        </div>
        <div class="px-10 py-5">
          <div class="grid grid-cols-12 gap-4">
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="meeting.title"
            >
              <BaseField
                v-slot="{ inputAttrs, inputRef }"
                label="What is this meeting about?"
                :state="errorMessage ? 'error' : 'idle'"
                :error="errorMessage"
                :disabled="isSubmitting"
                class="col-span-12"
                required
              >
                <TairoInput
                  :ref="inputRef"
                  v-bind="inputAttrs"
                  placeholder="Ex: Project review with the design team"
                  icon="lucide:slack"
                  :model-value="field.value"
                  type="text"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
            <div class="relative z-10 col-span-12 sm:col-span-6">
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
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Start date"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            icon="solar:calendar-linear"
                            :value="inputValue.start"
                            :model-value="field.value"
                            type="text"
                            v-on="inputEvents.start"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </BaseField>
                      </Field>
                    </div>
                    <div class="relative grow">
                      <Field
                        v-slot="{ field, errorMessage, handleChange, handleBlur }"
                        name="meeting.endDate"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="End date"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            icon="solar:calendar-linear"
                            :value="inputValue.end"
                            :model-value="field.value"
                            type="text"
                            v-on="inputEvents.end"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </BaseField>
                      </Field>
                    </div>
                  </div>
                </template>
              </DatePicker>
            </div>
            <div class="relative z-10 col-span-12 sm:col-span-6">
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
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Start time"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            icon="solar:watch-square-minimalistic-linear"
                            :value="inputValue.start"
                            :model-value="field.value"
                            type="text"
                            v-on="inputEvents.start"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </BaseField>
                      </Field>
                    </div>
                    <div class="relative grow">
                      <Field
                        v-slot="{ field, errorMessage, handleChange, handleBlur }"
                        name="meeting.endTime"
                      >
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="End time"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            icon="solar:watch-square-minimalistic-linear"
                            :value="inputValue.end"
                            :model-value="field.value"
                            type="text"
                            v-on="inputEvents.end"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                          />
                        </BaseField>
                      </Field>
                    </div>
                  </div>
                </template>
              </DatePicker>
            </div>
            <div class="relative z-0 col-span-12">
              <div class="my-4">
                <Field
                  v-slot="{ field, errorMessage, handleChange }"
                  name="meeting.frequency"
                >
                  <BaseField
                    label="Meeting frequency"
                    :state="errorMessage ? 'error' : 'idle'"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                  >
                    <BaseRadioGroup
                      :model-value="field.value"
                      :disabled="isSubmitting"
                      class="flex items-center gap-6 pt-2"
                      @update:model-value="handleChange"
                    >
                      <BaseRadio
                        label="All day"
                        value="day"
                        variant="default"
                      />
                      <BaseRadio
                        label="Repeat every week"
                        value="week"
                        variant="default"
                      />
                    </BaseRadioGroup>
                  </BaseField>
                </Field>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-muted-50 dark:bg-muted-950/70 border-muted-200 dark:border-muted-800/80 border-t p-10"
        >
          <div class="flex items-center justify-between">
            <div>
              <BaseHeading
                as="h3"
                size="md"
                weight="medium"
                class="text-muted-900 dark:text-white"
              >
                Meeting details
              </BaseHeading>
              <BaseText
                size="xs"
                class="text-muted-600 dark:text-muted-400"
              >
                Add some meeting details
              </BaseText>
            </div>
            <div>
              <BaseButton>
                <Icon name="lucide:plus" class="size-3" />
                <span>Add people</span>
              </BaseButton>
            </div>
          </div>
          <div class="mt-10 grid grid-cols-12 gap-4">
            <div class="col-span-12 grid grid-cols-12">
              <div class="col-span-12 flex flex-col justify-center sm:col-span-3">
                <label class="nui-label text-[0.825rem]">Participants</label>
              </div>
              <div class="col-span-12 sm:col-span-9">
                <div class="flex items-center gap-3">
                  <BaseTooltip
                    v-for="participant in [
                      { name: 'Anna B.', avatar: '/img/avatars/24.svg' },
                      { name: 'Kendra W.', avatar: '/img/avatars/10.svg' },
                      { name: 'John H.', avatar: '/img/avatars/8.svg' },
                      { name: 'Melany L.', avatar: '/img/avatars/25.svg' },
                    ]"
                    :key="participant.name"
                    :content="participant.name"
                  >
                    <BaseAvatar :src="participant.avatar" />
                  </BaseTooltip>
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
                  <BaseField
                    v-slot="{ inputAttrs, inputRef }"
                    :state="errorMessage ? 'error' : 'idle'"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                  >
                    <TairoInput
                      :ref="inputRef"
                      v-bind="inputAttrs"
                      type="text"
                      placeholder="Ex: meeting room A"
                      icon="solar:map-point-linear"
                      :model-value="field.value"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    />
                  </BaseField>
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
                  <BaseField
                    v-slot="{ inputAttrs, inputRef }"
                    :state="errorMessage ? 'error' : 'idle'"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                  >
                    <TairoInput
                      :ref="inputRef"
                      v-bind="inputAttrs"
                      type="text"
                      placeholder="https://zoom.us/m/123456789"
                      icon="solar:videocamera-linear"
                      :model-value="field.value"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    />
                  </BaseField>
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
                  <BaseField
                    v-slot="{ inputAttrs, inputRef }"
                    :state="errorMessage ? 'error' : 'idle'"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                  >
                    <BaseSelect
                      :ref="inputRef"
                      v-bind="inputAttrs"
                      :model-value="field.value"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    >
                      <TairoSelectItem
                        v-for="item in calendars"
                        :key="item.id"
                        :value="item.id"
                        :text-value="item.name"
                        :icon="item.icon"
                        :name="item.name"
                        :text="item.text"
                      />
                    </BaseSelect>
                  </BaseField>
                </Field>
              </div>
            </div>
            <div class="col-span-12 grid grid-cols-12">
              <div
                class="col-span-12 flex flex-col justify-start pt-2 sm:col-span-3"
              >
                <label class="nui-label text-[0.825rem]">
                  Description<span class="select-none text-destructive-base dark:text-destructive-light">
                    <Icon name="lucide:asterisk" class="size-3 inline-block align-text-top" />
                  </span>
                </label>
              </div>
              <div class="col-span-12 sm:col-span-9">
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="meeting.description"
                >
                  <BaseField
                    v-slot="{ inputAttrs, inputRef }"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                  >
                    <BaseTextarea
                      :ref="inputRef"
                      v-bind="inputAttrs"
                      placeholder="Write some additional details about the meeting..."
                      :aria-invalid="errorMessage ? 'true' : undefined"
                      :model-value="field.value"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    />
                  </BaseField>
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
                <TairoInputFileHeadless
                  v-slot="{ open, remove, preview, drop, files }"
                  v-model="uploadedFiles"
                  multiple
                >
                  <!-- Controls -->
                  <div class="mb-4 flex items-center gap-2">
                    <button
                      type="button"
                      class="focus-visible:nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-800/80 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                      tooltip="Select files"
                      @click="open"
                    >
                      <Icon
                        name="lucide:plus"
                        class="absolute start-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2"
                      />
                      <span class="sr-only">Select files</span>
                    </button>
                    <button
                      type="button"
                      class="focus-visible:nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-800/80 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                      tooltip="Start Upload"
                    >
                      <Icon name="lucide:arrow-up" class="size-4" />
                      <span class="sr-only">Start Upload</span>
                    </button>
                  </div>
                  <div
                    role="button"
                    tabindex="-1"
                    class=""
                    @dragenter.stop.prevent
                    @dragover.stop.prevent
                    @drop="drop"
                  >
                    <div
                      v-if="!files?.length"
                      class="focus-visible:nui-focus border-muted-300 dark:border-muted-800/80 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-600 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300"
                      tabindex="0"
                      role="button"
                      @click="open"
                      @keydown.enter.prevent="open"
                    >
                      <div class="p-5 text-center">
                        <Icon
                          name="solar:cloud-upload-linear"
                          class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mx-auto mb-2 size-10 transition-colors duration-300"
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
                          class="border-muted-200 dark:border-muted-800/80 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3"
                        >
                          <div class="flex items-center gap-2">
                            <div class="shrink-0">
                              <img
                                v-if="file.type.startsWith('image')"
                                class="size-14 rounded-xl object-cover object-center"
                                :src="preview(file).value"
                                alt="Image preview"
                              >
                              <img
                                v-else
                                class="size-14 rounded-xl object-cover object-center"
                                src="/img/avatars/placeholder-file.png"
                                alt="Image preview"
                              >
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
                            class="ms-auto w-32 px-4 transition-opacity duration-300 opacity-100"
                          >
                            <BaseProgress
                              :model-value="0"
                              size="xs"
                              variant="primary"
                            />
                          </div>
                          <div class="flex gap-2">
                            <button
                              class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-800/80 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                              disabled
                              type="button"
                              tooltip="Cancel"
                            >
                              <Icon name="lucide:slash" class="size-4" />
                              <span class="sr-only">Cancel</span>
                            </button>
                            <button
                              class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-800/80 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                              type="button"
                              tooltip="Upload"
                            >
                              <Icon name="lucide:arrow-up" class="size-4" />
                              <span class="sr-only">Upload</span>
                            </button>
                            <button
                              class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-800/80 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                              type="button"
                              tooltip="Remove"
                              @click.prevent="remove(file)"
                            >
                              <Icon name="lucide:x" class="size-4" />
                              <span class="sr-only">Remove</span>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </TairoInputFileHeadless>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-muted-50 dark:bg-muted-800/70 border-muted-200 dark:border-muted-800/80 border-t p-10"
        >
          <div class="grid grid-cols-12 gap-8 pb-6">
            <div class="col-span-12 grid grid-cols-12">
              <div class="col-span-12 flex flex-col justify-center sm:col-span-3">
                <label class="nui-label text-[0.825rem]">Color code</label>
              </div>
              <div class="col-span-12 sm:col-span-9">
                <Field
                  v-slot="{ field, handleChange }"
                  name="meeting.colorCode"
                >
                  <RadioGroupRoot
                    :disabled="isSubmitting"
                    :model-value="field.value"
                    class="flex items-center gap-3"
                    @update:model-value="handleChange"
                  >
                    <RadioGroupItem value="color_code_1" class="border-primary-500 data-[state=checked]:bg-primary-500 size-4 rounded-full border-2 transition-colors duration-300" />
                    <RadioGroupItem value="color_code_2" class="border-info-500 data-[state=checked]:bg-info-500 size-4 rounded-full border-2 transition-colors duration-300" />
                    <RadioGroupItem value="color_code_3" class="border-success-500 data-[state=checked]:bg-success-500 size-4 rounded-full border-2 transition-colors duration-300" />
                    <RadioGroupItem value="color_code_4" class="border-destructive-500 data-[state=checked]:bg-destructive-500 size-4 rounded-full border-2 transition-colors duration-300" />
                    <RadioGroupItem value="color_code_5" class="size-4 rounded-full border-2 border-lime-500 transition-colors duration-300 data-[state=checked]:bg-lime-500" />
                    <RadioGroupItem value="color_code_6" class="size-4 rounded-full border-2 border-pink-500 transition-colors duration-300 data-[state=checked]:bg-pink-500" />
                  </RadioGroupRoot>
                </Field>
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
                      variant="default"
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
                      variant="default"
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
                      variant="default"
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
                      variant="default"
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
      <TairoFormSave rounded="md" />
    </form>
  </div>
</template>
