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
  <div class="flex flex-col md:flex-row w-full h-screen items-center">
    <div
      class="bg-muted-100 dark:bg-muted-900 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen"
    ></div>

    <div
      class="bg-white dark:bg-muted-800 w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
    >
      <div
        class="w-full max-w-xs mx-auto h-full flex flex-col items-center justify-between py-8"
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
        <div class="w-full">
          <BaseHeading as="h2" size="3xl" weight="medium">
            Welcome back!
          </BaseHeading>
          <BaseParagraph size="sm" class="mb-6 text-muted-400">
            Enter your account credentials to sign in
          </BaseParagraph>

          <form
            method="POST"
            action=""
            @submit.prevent="onSubmit"
            class="mt-6"
            novalidate
          >
            <div class="space-y-4">
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
                  icon="ph:user-duotone"
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
                  icon="ph:lock-duotone"
                  @update:model-value="handleChange"
                  @blur="handleBlur"
                />
              </Field>
            </div>

            <!--Remember-->
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

              <div class="text-sm leading-5">
                <NuxtLink
                  to="/auth/recover"
                  class="font-sans font-medium text-xs text-primary-600 hover:text-primary-500 underline-offset-4 hover:underline transition ease-in-out duration-150"
                >
                  Forgot your password?
                </NuxtLink>
              </div>
            </div>

            <!--Submit-->
            <div class="mt-6">
              <div class="block w-full rounded-md shadow-sm">
                <BaseButton
                  :disabled="isSubmitting"
                  :loading="isSubmitting"
                  type="submit"
                  color="primary"
                  class="w-full !h-11"
                >
                  Sign in
                </BaseButton>
              </div>
            </div>
          </form>

          <hr
            class="my-6 border-t border-muted-200 dark:border-muted-700 w-full"
          />

          <BaseButton class="w-full !h-11">
            <Icon name="logos:google-icon" class="w-4 h-4 mr-1" />
            <span>Sign In with Google</span>
          </BaseButton>

          <!--No account link-->
          <p
            class="flex justify-between mt-4 font-sans text-xs leading-5 text-muted-400"
          >
            <span>Don't have an account?</span>
            <NuxtLink
              to="/auth/signup-1"
              class="font-medium text-primary-600 hover:text-primary-500 underline-offset-4 hover:underline transition ease-in-out duration-150"
            >
              Create Account
            </NuxtLink>
          </p>
        </div>
        <div class="text-center">
          <BaseText size="sm" class="text-muted-400">
            © {{ new Date().getFullYear() }} Tairo. All rights reserved.
          </BaseText>
        </div>
      </div>
    </div>
  </div>
</template>
