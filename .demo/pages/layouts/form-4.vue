<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { DatePicker } from 'v-calendar'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'

import 'v-calendar/dist/style.css'
import '~/assets/css/vcalendar.css'

definePageMeta({
  title: 'New Event',
  preview: {
    title: 'Form layout 4',
    description: 'For forms and input fields',
    categories: ['layouts', 'forms'],
    src: '/img/screens/layouts-form-4.png',
    srcDark: '/img/screens/layouts-form-4-dark.png',
    order: 50,
  },
})

const VALIDATION_TEXT = {
  TITLE_REQUIRED: 'Event title is required',
  SHORTDESC_REQUIRED: 'Short description can\'t be empty',
  LONGDESC_REQUIRED: 'Long description can\'t be empty',
  OPTION_REQUIRED: 'Please select an option',
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
    event: z.object({
      title: z.string().min(5, VALIDATION_TEXT.TITLE_REQUIRED),
      shortDesc: z.string().min(10, VALIDATION_TEXT.SHORTDESC_REQUIRED),
      longDesc: z.string().min(40, VALIDATION_TEXT.LONGDESC_REQUIRED),
      participants: z.array(z.string()).optional(),
      color: z.string(),
      category: z.string(),
      dates: z.object({
        start: z.date().nullable(),
        end: z.date().nullable(),
      }),
    }),
  })
  .superRefine((data, ctx) => {
    // This is a custom validation function that will be called
    // before the form is submitted
    if (!data.event.participants) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.OPTION_REQUIRED,
        path: ['event.participants'],
      })
    }
  })

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = {
  event: {
    title: '',
    shortDesc: '',
    longDesc: '',
    dates: {
      start: new Date(),
      end: new Date(),
    },
    participants: [],
    color: '',
    category: '',
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
    return confirm('You have unsaved changes. Are you sure you want to leave?')
  }
})

const toaster = useToaster()

// This is where you would send the form data to the server
const onSubmit = handleSubmit(
  async (values) => {
    success.value = false

    // here you have access to the validated form values
    console.log('event-create-success', values)

    try {
      // fake delay, this will make isSubmitting value to be true
      await new Promise((resolve, reject) => {
        if (values.event.title === 'Demo event') {
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
    }
    catch (error: any) {
      // this will set the error on the form
      if (error.message === 'Fake backend validation error') {
        setFieldError('event.title', 'This name is not allowed')

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
    console.log('event-create-error', error)

    // you can use it to scroll to the first error
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  },
)

// const dates = ref({
//   start: new Date(),
//   end: new Date(),
// })

const masks = ref({
  input: 'YYYY-MM-DD',
})

const people = ref([
  'John Brown',
  'Anita Smith',
  'Belen Rodriguez',
  'Sammy Lee',
  'Hermann Schmidt',
  'Chloe Varley',
])
</script>

<template>
  <form
    action=""
    method="POST"
    class="relative py-3 sm:mx-auto sm:max-w-xl"
    @submit.prevent="onSubmit"
  >
    <BaseCard rounded="lg" class="relative px-4 py-10 sm:p-10 md:mx-0">
      <div class="mx-auto max-w-md">
        <div class="flex items-center gap-4">
          <div
            class="bg-primary-500/20 text-primary-500 flex size-14 shrink-0 items-center justify-center rounded-full font-sans text-2xl"
          >
            <Icon name="ph:calendar-blank-duotone" class="size-5" />
          </div>
          <div class="block text-xl font-semibold text-gray-700">
            <BaseHeading
              as="h3"
              size="lg"
              weight="medium"
            >
              Create an Event
            </BaseHeading>
            <BaseText
              size="sm"
              class="text-muted-400"
            >
              Create a new upcoming event.
            </BaseText>
          </div>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="grid grid-cols-12 gap-4 py-8">
            <div class="col-span-12">
              <Field
                v-slot="{ field, errorMessage, handleChange, handleBlur }"
                name="event.title"
              >
                <BaseInput
                  label="Event title"
                  rounded="lg"
                  icon="ph:ticket-duotone"
                  placeholder="Ex: Next team building party"
                  :classes="{
                    input: '!h-11 !ps-11',
                    icon: '!h-11 !w-11',
                  }"
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
                v-slot="{ field, errorMessage, handleChange, handleBlur }"
                name="event.shortDesc"
              >
                <BaseInput
                  label="Short description"
                  rounded="lg"
                  icon="ph:circles-four-duotone"
                  placeholder="Ex: We will meet to have fun together"
                  :classes="{
                    input: '!h-11 !ps-11',
                    icon: '!h-11 !w-11',
                  }"
                  :model-value="field.value"
                  :error="errorMessage"
                  :disabled="isSubmitting"
                  type="text"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </Field>
            </div>
            <div class="relative z-20 col-span-12">
              <Field
                v-slot="{
                  field,
                  errorMessage,
                  handleChange,
                }"
                name="event.dates"
              >
                <DatePicker
                  :model-value="field.value"
                  :model-modifiers="{ range: true }"
                  :masks="masks"
                  :min-date="new Date()"
                  mode="dateTime"
                  hide-time-header
                  trim-weeks
                  @update:model-value="handleChange"
                >
                  <template #default="{ inputValue, inputEvents }">
                    <div class="flex w-full flex-col gap-4 sm:flex-row">
                      <div class="relative grow">
                        <BaseInput
                          rounded="lg"
                          label="Start date"
                          icon="ph:calendar-blank-duotone"
                          :value="inputValue.start"
                          :classes="{
                            input: '!h-11 !ps-11',
                            icon: '!h-11 !w-11',
                          }"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          type="text"
                          v-on="inputEvents.start"
                        />
                      </div>
                      <div class="relative grow">
                        <BaseInput
                          rounded="lg"
                          label="End date"
                          icon="ph:calendar-blank-duotone"
                          :value="inputValue.end"
                          :classes="{
                            input: '!h-11 !ps-11',
                            icon: '!h-11 !w-11',
                          }"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          type="text"
                          v-on="inputEvents.end"
                        />
                      </div>
                    </div>
                  </template>
                </DatePicker>
              </Field>
            </div>
            <div class="col-span-12">
              <Field
                v-slot="{ field, errorMessage, handleChange, handleBlur }"
                name="event.longDesc"
              >
                <BaseTextarea
                  label="Long description"
                  rounded="lg"
                  placeholder="Ex: Some additional details about the event..."
                  rows="5"
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
                name="event.participants"
              >
                <BaseAutocomplete
                  :items="people"
                  rounded="lg"
                  icon="ph:users-duotone"
                  placeholder="Add participants..."
                  label="Participants"
                  multiple
                  allow-create
                  :model-value="field.value"
                  :error="errorMessage"
                  :disabled="isSubmitting"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </Field>
            </div>
            <div class="col-span-12 sm:col-span-6">
              <Field
                v-slot="{ field, errorMessage, handleChange, handleBlur }"
                name="event.color"
              >
                <BaseInput
                  type="color"
                  list="eventColors"
                  label="Event color"
                  rounded="lg"
                  icon="ph:drop-half-duotone"
                  placeholder="Pick an event color..."
                  :classes="{
                    input: '!h-11 !ps-11 appearance-none',
                    icon: '!h-11 !w-11',
                  }"
                  :model-value="field.value"
                  :error="errorMessage"
                  :disabled="isSubmitting"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
                <datalist id="eventColors">
                  <option value="#84cc16" />
                  <option value="#22c55e" />
                  <option value="#0ea5e9" />
                  <option value="#6366f1" />
                  <option value="#8b5cf6" />
                  <option value="#d946ef" />
                  <option value="#f43f5e" />
                  <option value="#facc15" />
                  <option value="#fb923c" />
                  <option value="#9ca3af" />
                </datalist>
              </Field>
            </div>
            <div class="col-span-12 sm:col-span-6">
              <Field
                v-slot="{ field, errorMessage, handleChange, handleBlur }"
                name="event.category"
              >
                <BaseInput
                  list="eventCategories"
                  label="Event category"
                  rounded="lg"
                  icon="ph:ticket-duotone"
                  placeholder="Pick a category..."
                  :classes="{
                    input: '!h-11 !ps-11',
                    icon: '!h-11 !w-11',
                  }"
                  :model-value="field.value"
                  :error="errorMessage"
                  :disabled="isSubmitting"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
                <datalist id="eventCategories">
                  <option value="Chrome" />
                  <option value="Firefox" />
                  <option value="Opera" />
                  <option value="Safari" />
                  <option value="Microsoft Edge" />
                </datalist>
              </Field>
            </div>
          </div>
          <div class="flex items-center gap-4 pt-4">
            <BaseButton rounded="lg" class="!h-12 w-full">
              Cancel
            </BaseButton>
            <BaseButton
              type="submit"
              rounded="lg"
              color="primary"
              class="!h-12 w-full"
            >
              Create
            </BaseButton>
          </div>
        </div>
      </div>
    </BaseCard>
  </form>
</template>
