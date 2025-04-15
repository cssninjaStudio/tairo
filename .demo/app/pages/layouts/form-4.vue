<script setup lang="ts">
import type { MapInitEvent } from '~/components/AddonMapboxLocationPicker.vue'
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({
  title: 'Create event',
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
  LOCATION_REQUIRED: 'Click on the map to select a location',
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
      position: z.object({
        lat: z.number(),
        lng: z.number(),
      }).optional(),
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
    if (!data.event.position) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.LOCATION_REQUIRED,
        path: ['event.position'],
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
    // console.log('event-create-success', values)

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
        setFieldError('event.title', 'This name is not allowed')

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
    // console.log('event-create-error', error)

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

function onMapInit({ geocoder, map, mapboxgl }: MapInitEvent) {
  // eslint-disable-next-line no-console
  console.log('onMapInit', geocoder, map, mapboxgl)
}
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <form
      action=""
      method="POST"
      class="relative sm:max-w-2xl"
      novalidate
      @submit.prevent="onSubmit"
    >
      <BaseCard rounded="md" class="relative p-4 md:p-6">
        <div>
          <div class="flex items-center gap-4">
            <div class="flex items-center justify-center size-12 bg-white dark:bg-muted-950 rounded-full shadow-lg ring-1 ring-muted-900/5 dark:ring-primary-500/20">
              <div
                class="bg-primary-500/20 text-primary-500 flex size-10 shrink-0 items-center justify-center rounded-full font-sans text-2xl"
              >
                <Icon name="solar:calendar-mark-bold-duotone" class="size-5" />
              </div>
            </div>
            <div class="">
              <BaseHeading
                as="h3"
                size="md"
                weight="medium"
                lead="tight"
                class="text-muted-900 dark:text-white"
              >
                Create an event
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-muted-600 dark:text-muted-400"
              >
                Create a new upcoming event.
              </BaseParagraph>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-12 gap-4 py-8">
              <Field
                v-slot="{ field, errorMessage, handleChange, handleBlur }"
                name="event.title"
              >
                <BaseField
                  v-slot="{ inputAttrs, inputRef }"
                  label="Event title"
                  :state="errorMessage ? 'error' : 'idle'"
                  :error="errorMessage"
                  :disabled="isSubmitting"
                  class="col-span-12"
                  required
                >
                  <TairoInput
                    :ref="inputRef"
                    v-bind="inputAttrs"
                    rounded="lg"
                    icon="solar:earth-linear"
                    placeholder="Ex: Next team building party"
                    :model-value="field.value"
                    type="text"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </BaseField>
              </Field>
              <Field
                v-slot="{ field, errorMessage, handleChange, handleBlur }"
                name="event.shortDesc"
              >
                <BaseField
                  v-slot="{ inputAttrs, inputRef }"
                  label="Short description"
                  :state="errorMessage ? 'error' : 'idle'"
                  :error="errorMessage"
                  :disabled="isSubmitting"
                  class="col-span-12"
                  required
                >
                  <TairoInput
                    :ref="inputRef"
                    v-bind="inputAttrs"
                    rounded="lg"
                    icon="solar:list-linear"
                    placeholder="Ex: We will meet to have fun together"
                    :model-value="field.value"
                    type="text"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </BaseField>
              </Field>
              <div class="relative z-20 col-span-12">
                <Field
                  v-slot="{
                    field,
                    errorMessage,
                    handleChange,
                  }"
                  name="event.dates"
                >
                  <LazyAddonDatepicker
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
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="Start date"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="relative grow"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            rounded="lg"
                            icon="solar:calendar-linear"
                            :value="inputValue.start"
                            type="text"
                            v-on="inputEvents.start"
                          />
                        </BaseField>
                        <BaseField
                          v-slot="{ inputAttrs, inputRef }"
                          label="End date"
                          :state="errorMessage ? 'error' : 'idle'"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          class="relative grow"
                          required
                        >
                          <TairoInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            rounded="lg"
                            icon="solar:calendar-linear"
                            :value="inputValue.end"
                            type="text"
                            v-on="inputEvents.end"
                          />
                        </BaseField>
                      </div>
                    </template>
                  </LazyAddonDatepicker>
                </Field>
              </div>
              <Field
                v-slot="{ field, errorMessage, handleChange, handleBlur }"
                name="event.longDesc"
              >
                <BaseField
                  v-slot="{ inputAttrs, inputRef }"
                  label="Long description"
                  :state="errorMessage ? 'error' : 'idle'"
                  :error="errorMessage"
                  :disabled="isSubmitting"
                  class="col-span-12"
                  required
                >
                  <BaseTextarea
                    :ref="inputRef"
                    v-bind="inputAttrs"
                    rounded="lg"
                    placeholder="Ex: Some additional details about the event..."
                    rows="5"
                    :model-value="field.value"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </BaseField>
              </Field>
              <Field
                v-slot="{ field, errorMessage, handleChange }"
                name="event.position"
              >
                <BaseField
                  label="Event location"
                  :state="errorMessage ? 'error' : 'idle'"
                  :error="errorMessage"
                  :disabled="isSubmitting"
                  class="col-span-12"
                  required
                >
                  <LazyAddonMapboxLocationPicker
                    hydrate-on-visible
                    class="col-span-12 aspect-16/9"
                    :class="errorMessage ? 'border border-destructive-500' : ''"
                    rounded="lg"
                    :options="{
                      center: { lat: 34.0134, lng: -6.7882 },
                      zoom: 10,
                    }"
                    :geocoder="{
                      flyTo: true,
                      placeholder: 'Search for a location...',
                    }"
                    :model-value="field.value"
                    @update:model-value="handleChange"
                    @init="onMapInit"
                  />
                </BaseField>
              </Field>
              <Field
                v-slot="{ field, errorMessage, handleChange, handleBlur }"
                name="event.participants"
              >
                <BaseField
                  v-slot="{ inputAttrs, inputRef }"
                  label="Participants"
                  :state="errorMessage ? 'error' : 'idle'"
                  :error="errorMessage"
                  :disabled="isSubmitting"
                  class="col-span-12"
                >
                  <BaseAutocomplete
                    :ref="inputRef"
                    v-bind="inputAttrs"
                    :items="people.map((name) => ({ label: name, value: name }))"
                    rounded="lg"
                    icon="solar:users-group-rounded-linear"
                    placeholder="Add participants..."
                    multiple
                    allow-create
                    :model-value="field.value"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </BaseField>
              </Field>
              <Field
                v-slot="{ field, errorMessage, handleChange, handleBlur }"
                name="event.color"
              >
                <BaseField
                  v-slot="{ inputAttrs, inputRef }"
                  label="Event color"
                  :state="errorMessage ? 'error' : 'idle'"
                  :error="errorMessage"
                  :disabled="isSubmitting"
                  class="col-span-12 sm:col-span-6"
                >
                  <div class="focus-within:nui-focus flex *:rounded-none *:not-last:border-e-0 *:last:border-s-0 rounded-lg *:first:rounded-s-lg *:last:rounded-e-lg">
                    <BaseInput
                      :ref="inputRef"
                      v-bind="inputAttrs"
                      rounded="lg"
                      type="color"
                      class="ring-0! focus-visible:ring-0! w-16! px-1! overflow-hidden"
                      :model-value="field.value"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    />
                    <BaseInput
                      class="ring-0! focus-visible:ring-0!"
                      rounded="lg"
                      placeholder="#000000"
                      :model-value="field.value"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    />
                  </div>
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
                </BaseField>
              </Field>
              <Field
                v-slot="{ field, errorMessage, handleChange, handleBlur }"
                name="event.category"
              >
                <BaseField
                  v-slot="{ inputAttrs, inputRef }"
                  label="Event category"
                  :state="errorMessage ? 'error' : 'idle'"
                  :error="errorMessage"
                  :disabled="isSubmitting"
                  class="col-span-12 sm:col-span-6"
                >
                  <TairoInput
                    :ref="inputRef"
                    v-bind="inputAttrs"
                    list="eventCategories"
                    rounded="lg"
                    icon="solar:wineglass-linear"
                    placeholder="Pick a category..."
                    :model-value="field.value"
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
                </BaseField>
              </Field>
            </div>
            <div class="flex items-center justify-end gap-3 pt-4">
              <BaseButton rounded="md" variant="ghost" class="w-full md:w-36">
                Cancel
              </BaseButton>
              <BaseButton
                type="submit"
                rounded="md"
                variant="primary"
                class="w-full md:w-36"
              >
                Create
              </BaseButton>
            </div>
          </div>
        </div>
      </BaseCard>
    </form>
  </div>
</template>
