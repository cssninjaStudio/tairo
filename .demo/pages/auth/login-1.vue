<script setup lang="ts">
definePageMeta({
  title: 'Login',
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-muted-800 flex">
    <div
      class="hidden lg:flex items-center justify-center lg:w-3/5 relative w-0 flex-1 bg-muted-100 dark:bg-muted-900"
    >
      <div class="w-full max-w-4xl mx-auto">
        <!--Media image-->
      </div>
    </div>
    <div
      class="relative flex-1 flex flex-col justify-center py-12 px-6 lg:flex-none lg:w-2/5"
    >
      <div class="relative mx-auto w-full max-w-sm bg-white dark:bg-muted-800">
        <!--Nav-->
        <div
          class="absolute -top-16 right-0 w-full flex items-center justify-between"
        >
          <NuxtLink
            to="/dashboards"
            class="flex items-center gap-2 font-sans font-medium text-muted-400 hover:text-primary-500 transition-colors duration-300"
          >
            <Icon name="gg:arrow-long-left" class="w-5 h-5" />
            <span>Back to Home</span>
          </NuxtLink>
          <!--Theme button-->
          <BaseThemeToggle />
        </div>
        <div>
          <BaseHeading
            as="h2"
            size="3xl"
            lead="relaxed"
            weight="medium"
            class="mt-6"
          >
            Welcome back.
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-400 mb-6">
            Login with social media or your credentials
          </BaseParagraph>
          <!-- 	Social Sign Up Buttons	 -->
          <div class="flex flex-wrap justify-between gap-4">
            <!--Google button-->
            <button
              class="inline-flex items-center justify-center gap-2 grow bg-white dark:bg-muted-700 text-muted-800 dark:text-white border border-muted-300 dark:border-muted-600 relative px-6 py-4 rounded-xl nui-focus"
            >
              <Icon name="logos:google-icon" class="w-5 h-5" />
              <div>Login with Google</div>
            </button>
            <!--Twitter button-->
            <button
              class="w-[calc(50%_-_0.5rem)] md:w-auto py-4 px-5 rounded-xl bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 transition-colors duration-300 text-center cursor-pointer nui-focus"
            >
              <Icon name="fa6-brands:twitter" class="w-4 h-4 mx-auto" />
            </button>
            <!--Linkedin button-->
            <button
              class="w-[calc(50%_-_0.5rem)] md:w-auto py-4 px-5 rounded-xl bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 transition-colors duration-300 text-center cursor-pointer nui-focus"
            >
              <Icon name="fa6-brands:linkedin-in" class="w-4 h-4 mx-auto" />
            </button>
          </div>
          <!-- 'or' divider		 -->
          <div class="flex items-center flex-100 mt-8">
            <hr
              class="border-t-2 border-muted-200 dark:border-muted-700 flex-auto"
            />
            <span class="font-sans px-4 text-muted-400 font-light"> OR </span>
            <hr
              class="border-t-2 border-muted-200 dark:border-muted-700 flex-auto"
            />
          </div>
        </div>

        <!--Form section-->
        <div class="mt-6">
          <div class="mt-5">
            <!--Form-->
            <form action="#" method="POST">
              <div class="space-y-4">
                <BaseInput
                  id="email"
                  type="text"
                  label="Email address"
                  placeholder="Email address"
                  shape="curved"
                  :classes="{
                    input: 'h-12',
                  }"
                />

                <BaseInput
                  id="email"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  shape="curved"
                  :classes="{
                    input: 'h-12',
                  }"
                />
              </div>

              <!--Remember-->
              <div class="mt-6 flex items-center justify-between">
                <BaseCheckbox
                  shape="curved"
                  label="Remember me"
                  color="primary"
                />

                <div class="text-xs leading-5">
                  <NuxtLink
                    to="/auth/recover"
                    class="font-sans font-medium text-primary-600 hover:text-primary-500 underline-offset-4 hover:underline transition ease-in-out duration-150"
                  >
                    Forgot your password?
                  </NuxtLink>
                </div>
              </div>

              <!--Submit-->
              <div class="mt-6">
                <div class="block w-full rounded-md shadow-sm">
                  <BaseButton
                    type="submit"
                    color="primary"
                    shape="curved"
                    class="w-full !h-11"
                  >
                    Sign in
                  </BaseButton>
                </div>
              </div>
            </form>

            <!--No account link-->
            <p
              class="flex justify-between mt-4 font-sans text-xs leading-5 text-muted-400"
            >
              <span>Don't have an account?</span>
              <NuxtLink
                to="/auth/signup-2"
                class="font-medium text-primary-600 hover:text-primary-500 underline-offset-4 hover:underline transition ease-in-out duration-150"
              >
                start your 14-day free trial
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
