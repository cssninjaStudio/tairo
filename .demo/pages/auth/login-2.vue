<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({
  layout: 'empty',
  title: 'Login',
  preview: {
    title: 'Login 3',
    description: 'For authentication and sign in',
    categories: ['layouts', 'authentication'],
    src: '/img/screens/auth-login-3.png',
    srcDark: '/img/screens/auth-login-3-dark.png',
    order: 98,
  },
})

const VALIDATION_TEXT = {
  EMAIL_REQUIRED: 'A valid email is required',
  PASSWORD_REQUIRED: 'A password is required',
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z.object({
  email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
  password: z.string().min(1, VALIDATION_TEXT.PASSWORD_REQUIRED),
  trustDevice: z.boolean(),
})

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = computed<FormInput>(() => ({
  email: '',
  password: '',
  trustDevice: false,
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

const router = useRouter()
const toaster = useToaster()

// This is where you would send the form data to the server
const onSubmit = handleSubmit(async (values) => {
  // here you have access to the validated form values
  console.log('auth-success', values)

  try {
    // fake delay, this will make isSubmitting value to be true
    await new Promise((resolve, reject) => {
      if (values.password !== 'password') {
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
      message: `Welcome back!`,
      color: 'success',
      icon: 'ph:user-circle-fill',
      closable: true,
    })
  } catch (error: any) {
    // this will set the error on the form
    if (error.message === 'Fake backend validation error') {
      setFieldError('password', 'Invalid credentials (use "password")')
    }
    return
  }

  router.push('/dashboards')
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
        to="/dashboards"
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
                Welcome back!
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400 mb-6">
                Login with social media or your credentials
              </BaseParagraph>
            </div>
            <div class="px-8 py-4">
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
                    placeholder="Email address"
                    :classes="{
                      input: 'h-12',
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
                    placeholder="Password"
                    :classes="{
                      input: 'h-12',
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
                    name="trustDevice"
                  >
                    <BaseCheckbox
                      :model-value="field.value"
                      :disabled="isSubmitting"
                      shape="rounded"
                      label="Trust this device for 60 days"
                      color="primary"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    />
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
                  Sign In
                </BaseButton>
              </div>
              <div class="mb-6 grid gap-0 sm:grid-cols-3">
                <hr
                  class="border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"
                />
                <span
                  class="bg-muted-100 dark:bg-muted-900 text-muted-400 relative top-0.5 text-center font-sans text-sm"
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
                  class="bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300 hover:bg-white"
                >
                  <Icon name="fa6-brands:google" class="h-5 w-5" />
                </button>
                <button
                  type="button"
                  class="bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300 hover:bg-white"
                >
                  <Icon name="fa6-brands:twitter" class="h-5 w-5" />
                </button>
                <button
                  type="button"
                  class="bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300 hover:bg-white"
                >
                  <Icon name="fa6-brands:linkedin-in" class="h-5 w-5" />
                </button>
              </div>

              <!--No account link-->
              <p
                class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"
              >
                <span>Don't have an account?</span>
                <NuxtLink
                  to="/auth/signup-2"
                  class="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
                >
                  Sign Up
                </NuxtLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
