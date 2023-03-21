<script setup lang="ts">
definePageMeta({
  title: 'Login',
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

          <form class="mt-6" action="#" method="POST">
            <div class="space-y-4">
              <BaseInput
                id="email"
                type="text"
                label="Email address"
                placeholder="Email address"
                icon="ph:user-duotone"
              />

              <BaseInput
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                icon="ph:lock-duotone"
              />
            </div>

            <!--Remember-->
            <div class="mt-6 flex items-center justify-between">
              <BaseCheckbox
                shape="rounded"
                label="Remember me"
                color="primary"
              />

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
                <BaseButton type="submit" color="primary" class="w-full !h-11">
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
            © 2023 Tairo. All rights reserved.
          </BaseText>
        </div>
      </div>
    </div>
  </div>
</template>
