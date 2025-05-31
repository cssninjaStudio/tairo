<script setup lang="ts">
import type { AddonInputPassword } from '#components'
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useForm } from 'vee-validate'

import { z } from 'zod'

definePageMeta({
  layout: 'empty',
  title: 'Signup',
  preview: {
    title: 'Signup 2',
    description: 'For authentication and sign up',
    categories: ['layouts', 'authentication'],
    src: '/img/screens/auth-signup-2.png',
    srcDark: '/img/screens/auth-signup-2-dark.png',
    order: 158,
  },
})

const VALIDATION_TEXT = {
  EMAIL_REQUIRED: 'A valid email is required',
  PASSWORD_LENGTH: 'Password must be at least 8 characters',
  PASSWORD_CONTAINS_EMAIL: 'Password cannot contain your email',
  PASSWORD_MATCH: 'Passwords do not match',
  TERMS_REQUIRED: 'You must agree to the terms and conditions',
}

const passwordRef = ref<InstanceType<typeof AddonInputPassword>>()

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
    email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
    password: z.string().min(8, VALIDATION_TEXT.PASSWORD_LENGTH),
    confirmPassword: z.string(),
    terms: z.boolean(),
  })
  .superRefine((data, ctx) => {
    // This is a custom validation function that will be called
    // before the form is submitted
    if (passwordRef.value?.validation?.feedback?.warning || passwordRef.value?.validation?.feedback?.suggestions?.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: passwordRef.value?.validation?.feedback?.warning || passwordRef.value.validation.feedback?.suggestions?.[0],
        path: ['password'],
      })
    }
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.PASSWORD_MATCH,
        path: ['confirmPassword'],
      })
    }
    if (!data.terms) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.TERMS_REQUIRED,
        path: ['terms'],
      })
    }
  })

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  terms: false,
} satisfies FormInput

const { values, handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues,
})

const router = useRouter()
const toaster = useNuiToasts()

// This is where you would send the form data to the server
const onSubmit = handleSubmit(async (_values) => {
  // here you have access to the validated form values
  // console.log('auth-success', values)

  try {
    // fake delay, this will make isSubmitting value to be true
    await new Promise(resolve => setTimeout(resolve, 4000))

    toaster.add({
      title: 'Success',
      description: `Account created!`,
      icon: 'ph:user-circle-fill',
      progress: true,
    })
    router.push('/layouts/onboarding-1')
  }
  catch {
    // handle error
  }
})
</script>

<template>
  <div
    class="bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4 dark:[--color-input-default-bg:var(--color-muted-950)]"
  >
    <div
      class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4"
    >
      <NuxtLink
        to="/"
        class="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
      >
        <TairoLogo class="size-10" />
      </NuxtLink>
      <div>
        <BaseThemeToggle />
      </div>
    </div>
    <div class="flex w-full items-center justify-center">
      <div class="relative mx-auto w-full max-w-2xl">
        <!-- Form -->
        <div class="me-auto ms-auto mt-4 w-full">
          <form
            method="POST"
            action=""
            class="me-auto ms-auto mt-4 w-full max-w-md"
            novalidate
            @submit.prevent="onSubmit"
          >
            <div class="text-center">
              <BaseHeading
                as="h2"
                size="3xl"
                weight="medium"
              >
                Welcome to Tairo
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400 mb-6">
                Let's start by creating you account
              </BaseParagraph>
            </div>
            <div class="px-8 py-4">
              <div class="mb-4 space-y-4">
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="email"
                >
                  <BaseField
                    v-slot="{ inputAttrs, inputRef }"
                    label="Email address"
                    :state="errorMessage ? 'error' : 'idle'"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    required
                  >
                    <BaseInput
                      :ref="inputRef"
                      v-bind="inputAttrs"
                      :model-value="field.value"
                      type="email"
                      placeholder="ex: maya@cssninja.io"
                      autocomplete="email"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    />
                  </BaseField>
                </Field>

                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="password"
                >
                  <BaseField
                    v-slot="{ inputAttrs }"
                    label="Password"
                    :state="errorMessage ? 'error' : 'idle'"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    required
                  >
                    <LazyAddonInputPassword
                      ref="passwordRef"
                      v-bind="inputAttrs"
                      :model-value="field.value"
                      :error="errorMessage"
                      :user-inputs="[values.email ?? '']"
                      placeholder="••••••••••"
                      autocomplete="new-password"
                      class="rounded-s-none ring-0!"
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
                    label="Confirm Password"
                    :state="errorMessage ? 'error' : 'idle'"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    required
                  >
                    <BaseInput
                      :ref="inputRef"
                      v-bind="inputAttrs"
                      :model-value="field.value"
                      type="password"
                      placeholder="••••••••••"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    />
                  </BaseField>
                </Field>
              </div>
              <div class="mb-6">
                <div class="mt-6 flex items-center justify-between">
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="terms"
                  >
                    <BaseCheckbox
                      :model-value="field.value"
                      :disabled="isSubmitting"
                      :error="errorMessage"
                      variant="default"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    >
                      <span>
                        <span>
                          I accept the
                        </span>
                        <a
                          href="#"
                          class="text-primary-500 hover:underline focus:underline"
                        >Terms of Service</a>
                      </span>
                    </BaseCheckbox>
                  </Field>
                </div>
              </div>
              <div class="mb-6">
                <BaseButton
                  :disabled="isSubmitting"
                  :loading="isSubmitting"
                  type="submit"
                  variant="primary"
                  class="h-12! w-full"
                >
                  Sign Up
                </BaseButton>
              </div>
              <div class="mb-6 grid gap-0 sm:grid-cols-3">
                <hr
                  class="border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"
                >
                <span
                  class="bg-muted-100 dark:bg-muted-900 text-muted-400 relative top-0.5 text-center font-sans text-sm"
                >
                  Or continue with
                </span>
                <hr
                  class="border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"
                >
              </div>
              <!-- Social signup -->
              <div class="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  class="bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 focus-visible:nui-focus relative inline-flex w-full items-center justify-center rounded-md cursor-pointer px-0 py-3 text-center text-sm font-semibold shadow-xs transition-all duration-300 hover:bg-white"
                >
                  <Icon name="fa6-brands:google" class="size-5" />
                </button>
                <button
                  type="button"
                  class="bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 focus-visible:nui-focus relative inline-flex w-full items-center justify-center rounded-md cursor-pointer px-0 py-3 text-center text-sm font-semibold shadow-xs transition-all duration-300 hover:bg-white"
                >
                  <Icon name="fa6-brands:x-twitter" class="size-5" />
                </button>
                <button
                  type="button"
                  class="bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 focus-visible:nui-focus relative inline-flex w-full items-center justify-center rounded-md cursor-pointer px-0 py-3 text-center text-sm font-semibold shadow-xs transition-all duration-300 hover:bg-white"
                >
                  <Icon name="fa6-brands:linkedin-in" class="size-5" />
                </button>
              </div>

              <!-- No account link -->
              <p
                class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"
              >
                <span>Already have an account?</span>
                <NuxtLink
                  to="/auth/login-2"
                  class="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
                >
                  Sign in
                </NuxtLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
