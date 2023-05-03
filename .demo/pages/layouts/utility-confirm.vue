<script setup lang="ts">
definePageMeta({
  title: 'Confirm',
  preview: {
    title: 'Confirm Account',
    description: 'For account confirmation',
    categories: ['layouts'],
    src: '/img/screens/layouts-utility-confirm.png',
    srcDark: '/img/screens/layouts-utility-confirm-dark.png',
    order: 87,
  },
})
</script>

<template>
  <div class="flex items-center justify-center pb-12">
    <BasePlaceholderPage
      title="Confirm your account"
      subtitle="Hi Maya, we're glad to have you on board! Please confirm your account to continue using our app."
    >
      <template #image>
        <img
          class="block dark:hidden"
          src="/img/illustrations/placeholders/flat/placeholder-launch.svg"
          alt="placeholder-image"
        />
        <img
          class="hidden dark:block"
          src="/img/illustrations/placeholders/flat/placeholder-launch-dark.svg"
          alt="placeholder-image"
        />
      </template>

      <div class="mx-auto mt-4 flex w-full max-w-[280px] justify-between gap-2">
        <BaseButton shape="curved" class="h-11 w-full"> Cancel </BaseButton>
        <BaseButton color="primary" shape="curved" class="h-11 w-full">
          Confirm
        </BaseButton>
      </div>
    </BasePlaceholderPage>
  </div>
</template>
