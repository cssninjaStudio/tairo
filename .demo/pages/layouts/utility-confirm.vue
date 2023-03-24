<script setup lang="ts">
definePageMeta({
  title: 'Confirm',
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

      <div class="w-full max-w-[280px] mx-auto flex justify-between gap-2 mt-4">
        <BaseButton shape="curved" class="h-11 w-full"> Cancel </BaseButton>
        <BaseButton color="primary" shape="curved" class="h-11 w-full">
          Confirm
        </BaseButton>
      </div>
    </BasePlaceholderPage>
  </div>
</template>
