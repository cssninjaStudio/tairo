<script setup lang="ts">
definePageMeta({
  title: 'Signup',
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
      <form class="w-full max-w-xs mx-auto">
        <BaseHeading as="h2" size="3xl" weight="medium">
          Welcome to Tairo
        </BaseHeading>
        <BaseParagraph size="sm" class="mb-6 text-muted-400">
          Let's start by creating you account
        </BaseParagraph>

        <div class="space-y-3 mb-4">
          <BaseInput
            type="text"
            shape="curved"
            placeholder="Full Name"
            icon="ph:user-duotone"
          />
          <BaseInput
            type="text"
            shape="curved"
            placeholder="Username"
            icon="ph:fingerprint-duotone"
          />
          <BaseInput
            type="text"
            shape="curved"
            placeholder="Email Address"
            icon="ph:at-duotone"
          />
          <BaseInput
            type="password"
            shape="curved"
            placeholder="Password"
            icon="ph:lock-duotone"
          />
        </div>
        <BaseButton
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
          © 2023 Tairo. All rights reserved.
        </BaseText>
      </div>
    </div>
  </div>
</template>
