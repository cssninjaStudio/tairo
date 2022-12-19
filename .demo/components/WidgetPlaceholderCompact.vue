<script setup lang="ts">

</script>

<template>
  <BaseCard class="p-6">
    <!-- Content -->
    <NuxtImg src="/img/illustrations/placeholders/flat/chart-guy.svg" class="w-full block dark:hidden" width="225" height="150" alt="Placeholder illustration" />
    <NuxtImg src="/img/illustrations/placeholders/flat/chart-guy-dark.svg" class="w-full hidden dark:block" width="225" height="150" alt="Placeholder illustration" />
    <div class="text-center mt-4">
      <BaseHeading
        as="h4"
        size="lg"
        weight="light"
        lead="tight"
        class="mb-1 text-muted-800 dark:text-white"
      >
        <span>Pro Freatures</span>
      </BaseHeading>
      <BaseParagraph size="sm">
        <span class="text-muted-400">
          Unlock more features and business tools by subscribing to a premium plan
        </span>
      </BaseParagraph>
      <div class="mt-4">
        <BaseButton color="primary" shape="rounded" class="w-full">
          <span>Upgrade to Pro</span>
        </BaseButton>
      </div>
    </div>
  </BaseCard>
</template>