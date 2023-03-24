<script setup lang="ts">
import { useForm, Field } from 'vee-validate'
import { toFormValidator } from '@vee-validate/zod'
import { z } from 'zod'

definePageMeta({
  layout: 'empty',
  title: 'Signup',
})

const VALIDATION_TEXT = {
  EMAIL_REQUIRED: 'A valid email is required',
  USERNAME_LENGTH: 'Username must be at least 3 characters',
  PASSWORD_LENGTH: 'Password must be at least 8 characters',
  PASSWORD_CONTAINS_EMAIL: 'Password cannot contain your email',
  PASSWORD_MATCH: 'Passwords do not match',
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
    username: z.string().min(3, VALIDATION_TEXT.USERNAME_LENGTH),
    email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
    password: z.string().min(8, VALIDATION_TEXT.PASSWORD_LENGTH),
    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    // This is a custom validation function that will be called
    // before the form is submitted
    if (data.password.includes(data.email)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.PASSWORD_CONTAINS_EMAIL,
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
  })

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toFormValidator(zodSchema)
const initialValues = computed<FormInput>(() => ({
  username: 'maya',
  email: '',
  password: '',
  confirmPassword: '',
}))

const { handleSubmit, isSubmitting, setFieldError } = useForm({
  validationSchema,
  initialValues,
})

const router = useRouter()

// This is where you would send the form data to the server
const onSubmit = handleSubmit(async (values) => {
  // here you have access to the validated form values
  console.log('auth-success', values)

  try {
    // fake delay, this will make isSubmitting value to be true
    await new Promise((resolve, reject) => {
      if (values.username === 'maya') {
        // simulate a backend error
        setTimeout(
          () => reject(new Error('Fake backend validation error')),
          2000,
        )
      }
      setTimeout(resolve, 4000)
    })
  } catch (error: any) {
    // this will set the error on the form
    if (error.message === 'Fake backend validation error') {
      setFieldError('username', 'This username is already taken')
    }
    return
  }

  router.push('/dashboards')
})
</script>

<template>
  <div class="h-screen md:flex">
    <div
      class="group relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-primary-900 to-primary-500 i justify-around items-center hidden"
    >
      <div class="max-w-xs mx-auto text-center">
        <BaseHeading as="h2" size="3xl" weight="medium" class="text-white">
          Have an Account?
        </BaseHeading>
        <BaseParagraph size="sm" class="mb-3 text-muted-200">
          No need to waste time on this page, let's take you back to your
          account
        </BaseParagraph>
        <BaseButton to="/auth/login-1" shape="curved" class="w-full"
          >Login to Account</BaseButton
        >
      </div>
      <div
        class="absolute -top-6 -left-6 h-14 w-0 group-hover:w-72 origin-top-left rotate-45 bg-muted-200/20 rounded-full transition-all duration-300 delay-[25ms]"
      ></div>
      <div
        class="absolute -top-12 left-20 h-14 w-0 group-hover:w-48 origin-top-left rotate-45 bg-muted-200/20 rounded-full transition-all duration-300 delay-75"
      ></div>
      <div
        class="absolute top-24 -left-7 h-14 w-0 group-hover:w-40 origin-top-left rotate-45 bg-muted-200/20 rounded-full transition-all duration-300 delay-150"
      ></div>

      <div
        class="absolute -bottom-6 -right-6 h-14 w-0 group-hover:w-72 origin-bottom-right rotate-45 bg-muted-200/20 rounded-full transition-all duration-300 delay-150"
      ></div>
      <div
        class="absolute -bottom-12 right-20 h-14 w-0 group-hover:w-48 origin-bottom-right rotate-45 bg-muted-200/20 rounded-full transition-all duration-300 delay-75"
      ></div>
      <div
        class="absolute bottom-24 -right-7 h-14 w-0 group-hover:w-40 origin-bottom-right rotate-45 bg-muted-200/20 rounded-full transition-all duration-300 delay-[25ms]"
      ></div>
    </div>
    <div
      class="flex flex-col items-center justify-between md:w-1/2 py-10 bg-white dark:bg-muted-900"
    >
      <div class="w-full max-w-xs mx-auto flex items-center justify-between">
        <NuxtLink
          to="/dashboards"
          class="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
        >
          <TairoLogo class="w-10 h-10" />
        </NuxtLink>
        <div>
          <BaseThemeToggle />
        </div>
      </div>
      <form
        method="POST"
        action=""
        @submit.prevent="onSubmit"
        class="w-full max-w-xs mx-auto"
        novalidate
      >
        <BaseHeading as="h2" size="3xl" weight="medium">
          Welcome to Tairo
        </BaseHeading>
        <BaseParagraph size="sm" class="mb-6 text-muted-400">
          Let's start by creating you account
        </BaseParagraph>

        <div class="space-y-3 mb-4">
          <Field
            v-slot="{ field, errorMessage, handleChange, handleBlur }"
            name="username"
          >
            <BaseInput
              :model-value="field.value"
              :error="errorMessage"
              :disabled="isSubmitting"
              type="text"
              shape="curved"
              placeholder="Username"
              icon="ph:fingerprint-duotone"
              @update:model-value="handleChange"
              @blur="handleBlur"
            />
          </Field>
          <Field
            v-slot="{ field, errorMessage, handleChange, handleBlur }"
            name="email"
          >
            <BaseInput
              :model-value="field.value"
              :error="errorMessage"
              :disabled="isSubmitting"
              type="email"
              shape="curved"
              placeholder="Email Address"
              icon="ph:at-duotone"
              @update:model-value="handleChange"
              @blur="handleBlur"
            />
          </Field>
          <Field
            v-slot="{ field, errorMessage, handleChange, handleBlur }"
            name="password"
          >
            <BaseInput
              :model-value="field.value"
              :error="errorMessage"
              :disabled="isSubmitting"
              type="password"
              shape="curved"
              placeholder="Password"
              icon="ph:lock-duotone"
              @update:model-value="handleChange"
              @blur="handleBlur"
            />
          </Field>
          <Field
            v-slot="{ field, errorMessage, handleChange, handleBlur }"
            name="confirmPassword"
          >
            <BaseInput
              :model-value="field.value"
              :error="errorMessage"
              :disabled="isSubmitting"
              type="password"
              shape="curved"
              placeholder="Confirm password"
              icon="ph:check"
              @update:model-value="handleChange"
              @blur="handleBlur"
            />
          </Field>
        </div>
        <BaseButton
          :disabled="isSubmitting"
          :loading="isSubmitting"
          type="submit"
          shape="curved"
          color="primary"
          class="w-full !h-11"
        >
          Create Account
        </BaseButton>
        <!--No account link-->
        <p
          class="flex justify-between mt-4 font-sans text-sm leading-5 text-muted-400"
        >
          <span>Have an account?</span>
          <NuxtLink
            to="/auth/login-1"
            class="font-medium underline-offset-4 hover:underline text-primary-600 hover:text-primary-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Login here
          </NuxtLink>
        </p>
      </form>
      <div class="text-center">
        <BaseText size="sm" class="text-muted-400">
          © {{ new Date().getFullYear() }} Tairo. All rights reserved.
        </BaseText>
      </div>
    </div>
  </div>
</template>
