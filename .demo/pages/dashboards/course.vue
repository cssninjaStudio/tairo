<script setup lang="ts">
definePageMeta({
  title: 'E-Learning',
  layout: 'sidebar',
})
</script>

<template>
  <div>
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between mb-8">
      <div
        class="flex flex-col md:flex-row items-center gap-4 text-center md:text-left max-w-[425px] ltablet:max-w-full lg:max-w-full"
      >
        <BaseAvatar src="/img/avatars/2.svg" size="lg" />
        <div>
          <BaseHeading
            as="h2"
            size="2xl"
            weight="light"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Week 6 classes</span>
          </BaseHeading>
          <BaseParagraph>
            <span class="text-muted-500"> Classes from January 6 to 10 </span>
          </BaseParagraph>
        </div>
      </div>
      <div
        class="flex items-center justify-center md:justify-start gap-2 mt-4 md:mt-0"
      >
        <BaseButton>
          <span>Settings</span>
        </BaseButton>
        <BaseButton color="primary">
          <span>Schedule</span>
        </BaseButton>
      </div>
    </div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Column -->
      <div class="col-span-12 ltablet:col-span-8 lg:col-span-8"></div>
      <!-- Column -->
      <div class="col-span-12 ltablet:col-span-4 lg:col-span-4"></div>
    </div>
  </div>
</template>
