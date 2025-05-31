<script setup lang="ts"></script>

<template>
  <BaseCard
    rounded="md"
    class="h-full p-10"
  >
    <div class="flex h-full flex-col justify-between gap-5">
      <BaseHeading
        as="h4"
        size="xs"
        weight="medium"
        lead="none"
        class="text-muted-700 dark:text-muted-100 uppercase"
      >
        Kendra's Account
      </BaseHeading>

      <h2
        class="font-heading text-muted-900 text-4xl font-medium dark:text-white"
      >
        Welcome back, Kendra! 👋
      </h2>
      <BaseParagraph class="text-muted-600 dark:text-muted-400">
        Everything seems ok and up-to-date with your account since your last
        visit. Would you like to fund it?
      </BaseParagraph>
      <BaseButton
        variant="primary"
        rounded="md"
        size="lg"
        class="w-full"
      >
        Fund my Account
      </BaseButton>
    </div>
  </BaseCard>
</template>
