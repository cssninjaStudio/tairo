<script setup lang="ts"></script>

<template>
  <BaseCard
    rounded="md"
    class="h-full p-10"
  >
    <div class="flex h-full flex-col justify-between gap-5">
      <BaseHeading
        as="h4"
        size="sm"
        weight="medium"
        lead="none"
        class="text-muted-400 uppercase"
      >
        Maya's Account
      </BaseHeading>

      <h2
        class="font-heading ptablet:text-2xl text-muted-800 text-4xl font-medium dark:text-white"
      >
        Welcome back, Maya! 👋
      </h2>
      <BaseParagraph class="text-muted-500">
        Everything seems ok and up-to-date with your account since your last
        visit. Would you like to fund it?
      </BaseParagraph>
      <BaseButton
        color="primary"
        rounded="md"
        size="lg"
        class="w-full"
        shadow="hover"
      >
        Fund my Account
      </BaseButton>
    </div>
  </BaseCard>
</template>
