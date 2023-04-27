<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({
  layout: 'empty',
  title: 'Signup',
  preview: {
    title: 'Signup 3',
    description: 'For authentication and sign up',
    categories: ['layouts', 'authentication'],
    src: '/img/screens/auth-signup-3.png',
    srcDark: '/img/screens/auth-signup-3-dark.png',
    order: 102,
  },
})

const VALIDATION_TEXT = {
  EMAIL_REQUIRED: 'A valid email is required',
  PASSWORD_LENGTH: 'Password must be at least 8 characters',
  PASSWORD_CONTAINS_EMAIL: 'Password cannot contain your email',
  PASSWORD_MATCH: 'Passwords do not match',
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
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

const validationSchema = toTypedSchema(zodSchema)
const initialValues = computed<FormInput>(() => ({
  email: '',
  password: '',
  confirmPassword: '',
}))

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues,
})

const router = useRouter()
const toaster = useToaster()

// This is where you would send the form data to the server
const onSubmit = handleSubmit(async (values) => {
  // here you have access to the validated form values
  console.log('auth-success', values)

  try {
    // fake delay, this will make isSubmitting value to be true
    await new Promise((resolve) => setTimeout(resolve, 4000))

    toaster.clearAll()
    toaster.show({
      title: 'Success',
      message: `Account created!`,
      color: 'success',
      icon: 'ph:user-circle-fill',
      closable: true,
    })
  } catch (error: any) {
    // handle error

    return
  }

  router.push('/layouts/onboarding-1')
})
</script>

<template>
  <div
    class="bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4"
  >
    <div
      class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4"
    >
      <NuxtLink
        to="/"
        class="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
      >
        <TairoLogo class="h-10 w-10" />
      </NuxtLink>
      <div>
        <BaseThemeToggle />
      </div>
    </div>
    <div class="flex w-full items-center justify-center">
      <div class="relative mx-auto w-full max-w-2xl">
        <!--Avatars-->
        <img
          class="ltablet:block absolute start-0 top-[30%] hidden h-12 w-12 rounded-full object-cover duration-[cubic-bezier(0.86,0,0.07,1)] lg:block"
          src="/img/avatars/1.svg"
          alt="Avatar"
          width="48"
          height="48"
        />
        <img
          class="ltablet:block absolute -start-[25%] top-[40%] hidden h-16 w-16 rounded-full object-cover lg:block"
          src="/img/avatars/9.svg"
          alt="Avatar"
          width="64"
          height="64"
        />
        <img
          class="ltablet:block absolute -start-[5%] top-[52%] hidden h-16 w-16 rounded-full object-cover lg:block"
          src="/img/avatars/4.svg"
          alt="Avatar"
          width="64"
          height="64"
        />
        <img
          class="ltablet:block absolute -start-[35%] top-[65%] hidden h-24 w-24 rounded-full object-cover lg:block"
          src="/img/avatars/8.svg"
          alt="Avatar"
          width="96"
          height="96"
        />
        <img
          class="ltablet:block absolute -start-[35%] top-[20%] hidden h-10 w-10 rounded-full object-cover lg:block"
          src="/img/avatars/12.svg"
          alt="Avatar"
          width="40"
          height="40"
        />
        <img
          class="ltablet:block absolute -start-[55%] top-[40%] hidden h-20 w-20 rounded-full object-cover lg:block"
          src="/img/avatars/20.svg"
          alt="Avatar"
          width="80"
          height="80"
        />

        <img
          class="ltablet:block absolute end-0 top-[30%] hidden h-12 w-12 rounded-full object-cover lg:block"
          src="/img/avatars/16.svg"
          alt="Avatar"
          width="48"
          height="48"
        />
        <img
          class="ltablet:block absolute -end-[25%] top-[40%] hidden h-16 w-16 rounded-full object-cover lg:block"
          src="/img/avatars/10.svg"
          alt="Avatar"
          width="64"
          height="64"
        />
        <img
          class="ltablet:block absolute -end-[5%] top-[52%] hidden h-16 w-16 rounded-full object-cover lg:block"
          src="/img/avatars/19.svg"
          alt="Avatar"
          width="64"
          height="64"
        />
        <img
          class="ltablet:block absolute -end-[35%] top-[65%] hidden h-24 w-24 rounded-full object-cover lg:block"
          src="/img/avatars/24.svg"
          alt="Avatar"
          width="96"
          height="96"
        />
        <img
          class="ltablet:block absolute -end-[35%] top-[20%] hidden h-10 w-10 rounded-full object-cover lg:block"
          src="/img/avatars/3.svg"
          alt="Avatar"
          width="40"
          height="40"
        />
        <img
          class="ltablet:block absolute -end-[55%] top-[40%] hidden h-20 w-20 rounded-full object-cover lg:block"
          src="/img/avatars/5.svg"
          alt="Avatar"
          width="80"
          height="80"
        />

        <!--Form-->
        <div class="me-auto ms-auto mt-4 w-full">
          <form
            method="POST"
            action=""
            @submit.prevent="onSubmit"
            class="me-auto ms-auto mt-4 w-full max-w-md"
            novalidate
          >
            <div class="text-center">
              <BaseHeading as="h2" size="3xl" weight="medium">
                Welcome to Tairo
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400 mb-6">
                Let's start by creating you account
              </BaseParagraph>
            </div>
            <BaseCard class="p-8">
              <div class="mb-4 space-y-4">
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="email"
                >
                  <BaseInput
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    type="email"
                    label="Email address"
                    placeholder="ex: maya@cssninja.io"
                    icon="lucide:mail"
                    :classes="{
                      input: 'h-12 !ps-12',
                      icon: 'h-12 w-12',
                    }"
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
                    label="Password"
                    placeholder="••••••••••"
                    icon="lucide:lock"
                    :classes="{
                      input: 'h-12 !ps-12',
                      icon: 'h-12 w-12',
                    }"
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
                    label="Confirm Password"
                    placeholder="••••••••••"
                    icon="lucide:lock"
                    :classes="{
                      input: 'h-12 !ps-12',
                      icon: 'h-12 w-12',
                    }"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
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
                      shape="rounded"
                      color="primary"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    >
                      <span>
                        <span>I accept the</span>
                        <a
                          href="#"
                          class="text-primary-500 hover:underline focus:underline"
                        >
                          Terms of Service
                        </a>
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
                  color="primary"
                  class="!h-12 w-full"
                >
                  Sign Up
                </BaseButton>
              </div>
              <div class="mb-6 grid gap-0 sm:grid-cols-3">
                <hr
                  class="border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"
                />
                <span
                  class="dark:bg-muted-800 text-muted-400 relative top-0.5 bg-white text-center font-sans text-sm"
                >
                  Or continue with
                </span>
                <hr
                  class="border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"
                />
              </div>
              <!--Social signup-->
              <div class="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  class="bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300"
                >
                  <Icon name="fa6-brands:google" class="h-5 w-5" />
                </button>
                <button
                  type="button"
                  class="bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300"
                >
                  <Icon name="fa6-brands:twitter" class="h-5 w-5" />
                </button>
                <button
                  type="button"
                  class="bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300"
                >
                  <Icon name="fa6-brands:linkedin-in" class="h-5 w-5" />
                </button>
              </div>

              <!--No account link-->
              <p
                class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"
              >
                <span>Already have an account?</span>
                <NuxtLink
                  to="/auth/login-3"
                  class="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
                >
                  Sign in
                </NuxtLink>
              </p>
            </BaseCard>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
