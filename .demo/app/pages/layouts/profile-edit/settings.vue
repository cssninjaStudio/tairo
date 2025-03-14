<script setup lang="ts">
import type { InputMask } from 'imask'
import { toTypedSchema } from '@vee-validate/zod'
import IMask from 'imask'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'

const VALIDATION_TEXT = {
  OLD_PASSWORD_REQUIRED: 'Your current password is required',
  NEW_PASSWORD_LENGTH: 'Password must be at least 8 characters',
  NEW_PASSWORD_MATCH: 'Passwords do not match',
}

definePageMeta({
  title: 'Settings',
  preview: {
    title: 'Edit profile 4',
    description: 'For editing a user profile',
    categories: ['layouts', 'profile', 'forms'],
    src: '/img/screens/layouts-subpages-profile-edit-4.png',
    srcDark: '/img/screens/layouts-subpages-profile-edit-4-dark.png',
    order: 79,
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

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
    currentPassword: z.string().min(1, VALIDATION_TEXT.OLD_PASSWORD_REQUIRED),
    newPassword: z.string(),
    confirmPassword: z.string(),
    twoFactor: z.object({
      enabled: z.boolean(),
      phoneNumber: z.string().optional(),
    }),
    notifications: z.object({
      enabled: z.boolean(),
      flushLowPriority: z.boolean(),
      marketing: z.boolean(),
      partners: z.boolean(),
    }),
  })
  .superRefine((data, ctx) => {
    // This is a custom validation function that will be called
    // before the form is submitted

    if (data.newPassword) {
      if (data.newPassword.length < 8) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.NEW_PASSWORD_LENGTH,
          path: ['newPassword'],
        })
      }
      if (data.newPassword !== data.confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.NEW_PASSWORD_MATCH,
          path: ['confirmPassword'],
        })
      }
    }

    if (data.twoFactor.enabled && !data.twoFactor.phoneNumber) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'A phone number is required',
        path: ['twoFactor.phoneNumber'],
      })
    }
  })

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = {
  currentPassword: 'password',
  newPassword: '',
  confirmPassword: '',
  twoFactor: {
    enabled: false,
    phoneNumber: '',
  },
  notifications: {
    enabled: true,
    flushLowPriority: true,
    marketing: false,
    partners: false,
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

// Here we register the phone number input with IMask
const phoneInput = useTemplateRef<any>('phoneInput')
const mask = shallowRef<InputMask<{ mask: string }> | undefined>(undefined)
watchEffect(() => {
  if (phoneInput.value?.$el) {
    mask.value = IMask(phoneInput.value?.$el, {
      mask: '(000) 000-0000',
    })
  }

  return () => {
    mask.value?.destroy()
    mask.value = undefined
  }
})

// Reset notifications when the user disables them
watch(
  () => values.notifications?.enabled,
  (value) => {
    if (!value) {
      setFieldValue('notifications.flushLowPriority', false)
      setFieldValue('notifications.marketing', false)
      setFieldValue('notifications.partners', false)
    }
  },
)

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
    // console.log('profile-settings-success', values)

    try {
      // fake delay, this will make isSubmitting value to be true
      await new Promise((resolve, reject) => {
        if (values.currentPassword === 'password') {
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
        setFieldError('currentPassword', 'Your current password is incorrect')

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
    // console.log('profile-settings-error', error)

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
          Your settings has been saved!
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
          label="Change Password"
          sublabel="For an improved account security"
        >
          <input id="username" type="email" name="username" autocomplete="username" value="maya@cssninja.io" class="sr-only" readonly>
          <div class="grid grid-cols-12 gap-4">
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="currentPassword"
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
                  type="password"
                  icon="solar:lock-keyhole-linear"
                  placeholder="Old password"
                  autocomplete="current-password"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="newPassword"
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
                  type="password"
                  icon="solar:lock-keyhole-linear"
                  placeholder="New password"
                  autocomplete="new-password"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="confirmPassword"
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
                  type="password"
                  autocomplete="new-password"
                  icon="solar:lock-keyhole-linear"
                  placeholder="Repeat new password"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
          </div>
        </TairoFormGroup>
        <TairoFormGroup
          label="2 Factor Auth"
          sublabel="Two factor authentication"
        >
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12">
              <Field
                v-slot="{ field, handleChange, handleBlur }"
                name="twoFactor.enabled"
              >
                <BaseSwitchThin
                  :model-value="field.value"
                  :disabled="isSubmitting"
                  label="Enabled"
                  sublabel="Toggle 2 factor authentication"
                  variant="primary"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </Field>
            </div>
            <Field
              v-slot="{ field, errorMessage, handleChange, handleBlur }"
              name="twoFactor.phoneNumber"
            >
              <BaseField
                v-show="values.twoFactor?.enabled"
                v-slot="{ inputAttrs }"
                :error="errorMessage"
                :disabled="isSubmitting"
                class="col-span-12"
                required
              >
                <TairoInput
                  ref="phoneInput"
                  v-bind="inputAttrs"
                  :model-value="field.value"
                  :aria-invalid="errorMessage ? 'true' : undefined"
                  type="tel"
                  icon="ph:phone-duotone"
                  placeholder="(000) 000-0000"
                  autocomplete="tel"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </BaseField>
            </Field>
          </div>
        </TairoFormGroup>
        <TairoFormGroup
          label="Notifications"
          sublabel="Configure how you receive notifications"
        >
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12">
              <Field
                v-slot="{ field, handleChange, handleBlur }"
                name="notifications.enabled"
              >
                <BaseSwitchBall
                  :model-value="field.value"
                  :disabled="isSubmitting"
                  label="Enabled"
                  sublabel="Receive emails notifications from the app"
                  variant="primary"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </Field>
            </div>
            <div v-show="values.notifications?.enabled" class="col-span-12">
              <Field
                v-slot="{ field, handleChange, handleBlur }"
                name="notifications.flushLowPriority"
              >
                <BaseSwitchBall
                  :model-value="field.value"
                  :disabled="isSubmitting"
                  label="Flush"
                  sublabel="Discard low priority notifications"
                  variant="primary"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </Field>
            </div>
            <div v-show="values.notifications?.enabled" class="col-span-12">
              <Field
                v-slot="{ field, handleChange, handleBlur }"
                name="notifications.marketing"
              >
                <BaseSwitchBall
                  :model-value="field.value"
                  :disabled="isSubmitting"
                  label="Marketing"
                  sublabel="Enable marketing emails"
                  variant="primary"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </Field>
            </div>
            <div v-show="values.notifications?.enabled" class="col-span-12">
              <Field
                v-slot="{ field, handleChange, handleBlur }"
                name="notifications.partners"
              >
                <BaseSwitchBall
                  :model-value="field.value"
                  :disabled="isSubmitting"
                  label="Partners"
                  sublabel="Enable partner emails"
                  variant="primary"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </Field>
            </div>
          </div>
        </TairoFormGroup>
      </div>
    </div>
    <TairoFormSave
      :disabled="isSubmitting"
      :loading="isSubmitting"
      @reset="resetForm"
    />
  </form>
</template>
