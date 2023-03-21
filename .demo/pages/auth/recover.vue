<script setup lang="ts">
definePageMeta({
  title: 'Recover Password',
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
        <div class="mr-auto ml-auto w-full mt-4">
          <form class="w-full max-w-md mr-auto ml-auto mt-4">
            <div class="text-center">
              <BaseHeading as="h2" size="3xl" weight="medium">
                Recover Password
              </BaseHeading>
              <BaseParagraph size="sm" class="mb-6 text-muted-400">
                Follow the instuctions sent to your email address
              </BaseParagraph>
            </div>
            <div class="px-8 py-4">
              <div class="space-y-4 mb-4">
                <BaseInput
                  id="email"
                  type="text"
                  label="Email address"
                  placeholder="Email address"
                  :classes="{
                    input: 'h-12',
                  }"
                />
              </div>
              <div class="mb-6">
                <div class="mt-6 flex items-center justify-between">
                  <BaseCheckbox
                    shape="rounded"
                    label="I am the owner of this account"
                    color="primary"
                  />
                </div>
              </div>
              <div class="mb-6">
                <BaseButton type="submit" color="primary" class="w-full !h-12">
                  Recover Password
                </BaseButton>
              </div>
              <!--No account link-->
              <p
                class="flex justify-between mt-4 font-sans text-sm leading-5 text-muted-400"
              >
                <span>False alert?</span>
                <NuxtLink
                  to="/auth/login-1"
                  class="font-medium text-primary-600 hover:text-primary-500 underline-offset-4 hover:underline transition ease-in-out duration-150"
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
