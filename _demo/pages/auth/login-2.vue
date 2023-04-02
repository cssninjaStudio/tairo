<script setup lang="ts">
import { toFormValidator } from '@vee-validate/zod'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({
  layout: 'empty',
  title: 'Login',
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

const validationSchema = toFormValidator(zodSchema)
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
    class="relative w-full min-h-screen px-4 bg-muted-100 dark:bg-muted-900 overflow-hidden"
  >
    <div
      class="h-16 w-full max-w-6xl mx-auto px-4 flex items-center justify-between"
    >
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
    <div class="w-full flex items-center justify-center">
      <div class="relative w-full max-w-2xl mx-auto">
        <!--Form-->
        <div class="me-auto ms-auto w-full mt-4">
          <form
            method="POST"
            action=""
            @submit.prevent="onSubmit"
            class="w-full max-w-md me-auto ms-auto mt-4"
            novalidate
          >
            <div class="text-center">
              <BaseHeading as="h2" size="3xl" weight="medium">
                Welcome back!
              </BaseHeading>
              <BaseParagraph size="sm" class="mb-6 text-muted-400">
                Login with social media or your credentials
              </BaseParagraph>
            </div>
            <div class="px-8 py-4">
              <div class="space-y-4 mb-4">
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
                  class="w-full !h-12"
                >
                  Sign In
                </BaseButton>
              </div>
              <div class="grid sm:grid-cols-3 gap-0 mb-6">
                <hr
                  class="mt-3 hidden sm:block border-t border-muted-200 dark:border-muted-700"
                />
                <span
                  class="relative top-0.5 font-sans text-center bg-muted-100 dark:bg-muted-900 text-sm text-muted-400"
                >
                  Or continue with
                </span>
                <hr
                  class="mt-3 hidden sm:block border-t border-muted-200 dark:border-muted-700"
                />
              </div>
              <!--Social signup-->
              <div class="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  class="relative inline-flex justify-center items-center shadow-sm font-semibold text-sm py-3 px-0 bg-muted-200 dark:bg-muted-700 hover:bg-white dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 rounded text-center w-full transition-all duration-300 nui-focus"
                >
                  <Icon name="fa6-brands:google" class="w-5 h-5" />
                </button>
                <button
                  type="button"
                  class="relative inline-flex justify-center items-center shadow-sm font-semibold text-sm py-3 px-0 bg-muted-200 dark:bg-muted-700 hover:bg-white dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 rounded text-center w-full transition-all duration-300 nui-focus"
                >
                  <Icon name="fa6-brands:twitter" class="w-5 h-5" />
                </button>
                <button
                  type="button"
                  class="relative inline-flex justify-center items-center shadow-sm font-semibold text-sm py-3 px-0 bg-muted-200 dark:bg-muted-700 hover:bg-white dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 rounded text-center w-full transition-all duration-300 nui-focus"
                >
                  <Icon name="fa6-brands:linkedin-in" class="w-5 h-5" />
                </button>
              </div>

              <!--No account link-->
              <p
                class="flex justify-between mt-4 font-sans text-sm leading-5 text-muted-400"
              >
                <span>Don't have an account?</span>
                <NuxtLink
                  to="/auth/signup-2"
                  class="font-medium text-primary-600 hover:text-primary-500 underline-offset-4 hover:underline transition ease-in-out duration-150"
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
