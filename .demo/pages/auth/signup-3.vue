<script setup lang="ts">
definePageMeta({
  title: 'Signup',
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
        to="/"
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
        <!--Avatars-->
        <img
          class="hidden ltablet:block lg:block absolute top-[30%] left-0 object-cover w-12 h-12 rounded-full duration-[cubic-bezier(0.86,0,0.07,1)]"
          src="/img/avatars/1.svg"
          alt="Avatar"
          width="48"
          height="48"
        />
        <img
          class="hidden ltablet:block lg:block absolute top-[40%] -left-[25%] object-cover w-16 h-16 rounded-full"
          src="/img/avatars/9.svg"
          alt="Avatar"
          width="64"
          height="64"
        />
        <img
          class="hidden ltablet:block lg:block absolute top-[52%] -left-[5%] object-cover w-16 h-16 rounded-full"
          src="/img/avatars/4.svg"
          alt="Avatar"
          width="64"
          height="64"
        />
        <img
          class="hidden ltablet:block lg:block absolute top-[65%] -left-[35%] object-cover w-24 h-24 rounded-full"
          src="/img/avatars/8.svg"
          alt="Avatar"
          width="96"
          height="96"
        />
        <img
          class="hidden ltablet:block lg:block absolute top-[20%] -left-[35%] object-cover w-10 h-10 rounded-full"
          src="/img/avatars/12.svg"
          alt="Avatar"
          width="40"
          height="40"
        />
        <img
          class="hidden ltablet:block lg:block absolute top-[40%] -left-[55%] object-cover w-20 h-20 rounded-full"
          src="/img/avatars/20.svg"
          alt="Avatar"
          width="80"
          height="80"
        />

        <img
          class="hidden ltablet:block lg:block absolute top-[30%] right-0 object-cover w-12 h-12 rounded-full"
          src="/img/avatars/16.svg"
          alt="Avatar"
          width="48"
          height="48"
        />
        <img
          class="hidden ltablet:block lg:block absolute top-[40%] -right-[25%] object-cover w-16 h-16 rounded-full"
          src="/img/avatars/10.svg"
          alt="Avatar"
          width="64"
          height="64"
        />
        <img
          class="hidden ltablet:block lg:block absolute top-[52%] -right-[5%] object-cover w-16 h-16 rounded-full"
          src="/img/avatars/19.svg"
          alt="Avatar"
          width="64"
          height="64"
        />
        <img
          class="hidden ltablet:block lg:block absolute top-[65%] -right-[35%] object-cover w-24 h-24 rounded-full"
          src="/img/avatars/24.svg"
          alt="Avatar"
          width="96"
          height="96"
        />
        <img
          class="hidden ltablet:block lg:block absolute top-[20%] -right-[35%] object-cover w-10 h-10 rounded-full"
          src="/img/avatars/3.svg"
          alt="Avatar"
          width="40"
          height="40"
        />
        <img
          class="hidden ltablet:block lg:block absolute top-[40%] -right-[55%] object-cover w-20 h-20 rounded-full"
          src="/img/avatars/5.svg"
          alt="Avatar"
          width="80"
          height="80"
        />

        <!--Form-->
        <div class="mr-auto ml-auto w-full mt-4">
          <form class="w-full max-w-md mr-auto ml-auto mt-4">
            <div class="text-center">
              <BaseHeading as="h2" size="3xl" weight="medium">
                Welcome to Tairo
              </BaseHeading>
              <BaseParagraph size="sm" class="mb-6 text-muted-400">
                Let's start by creating you account
              </BaseParagraph>
            </div>
            <BaseCard class="px-8 py-8">
              <div class="space-y-4 mb-4">
                <BaseInput
                  id="email"
                  type="text"
                  label="Email address"
                  placeholder="Email address"
                  icon="lucide:mail"
                  :classes="{
                    input: 'h-12 !pl-12',
                    icon: 'h-12 w-12',
                  }"
                />

                <BaseInput
                  id="email"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  icon="lucide:lock"
                  :classes="{
                    input: 'h-12 !pl-12',
                    icon: 'h-12 w-12',
                  }"
                />
              </div>
              <div class="mb-6">
                <div class="mt-6 flex items-center justify-between">
                  <BaseCheckbox
                    shape="rounded"
                    label="I accept the Terms of Service"
                    color="primary"
                  />
                </div>
              </div>
              <div class="mb-6">
                <BaseButton type="submit" color="primary" class="w-full !h-12">
                  Sign Up
                </BaseButton>
              </div>
              <div class="grid sm:grid-cols-3 gap-0 mb-6">
                <hr
                  class="mt-3 hidden sm:block border-t border-muted-200 dark:border-muted-700"
                />
                <span
                  class="relative top-0.5 font-sans text-center bg-white dark:bg-muted-800 text-sm text-muted-400"
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
                  class="relative inline-flex justify-center items-center shadow-sm font-semibold text-sm py-3 px-0 bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 rounded text-center w-full transition-all duration-300"
                >
                  <Icon name="fa6-brands:google" class="w-5 h-5" />
                </button>
                <button
                  type="button"
                  class="relative inline-flex justify-center items-center shadow-sm font-semibold text-sm py-3 px-0 bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 rounded text-center w-full transition-all duration-300"
                >
                  <Icon name="fa6-brands:twitter" class="w-5 h-5" />
                </button>
                <button
                  type="button"
                  class="relative inline-flex justify-center items-center shadow-sm font-semibold text-sm py-3 px-0 bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 rounded text-center w-full transition-all duration-300"
                >
                  <Icon name="fa6-brands:linkedin-in" class="w-5 h-5" />
                </button>
              </div>

              <!--No account link-->
              <p
                class="flex justify-between mt-4 font-sans text-sm leading-5 text-muted-400"
              >
                <span>Already have an account?</span>
                <NuxtLink
                  to="/auth/login-3"
                  class="font-medium text-primary-600 hover:text-primary-500 underline-offset-4 hover:underline transition ease-in-out duration-150"
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
