<template>
  <div>
    <div class="mb-4 flex items-center justify-between">
      <BaseHeading
        as="h3"
        size="sm"
        weight="medium"
        lead="tight"
        class="text-muted-900 dark:text-white"
      >
        <span>Notifications</span>
      </BaseHeading>
    </div>
    <div>
      <ul class="space-y-3">
        <li>
          <NuxtLink to="#" class="group flex items-center justify-between">
            <BaseParagraph size="sm">
              <span
                class="text-muted-500 dark:text-muted-400 group-hover:text-primary-500 transition-colors duration-300"
              >
                Personal
              </span>
            </BaseParagraph>
            <div
              class="bg-muted-200 dark:bg-muted-700 text-muted-500 dark:text-muted-200 flex size-7 items-center justify-center rounded-full text-xs"
            >
              <span>12</span>
            </div>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="group flex items-center justify-between">
            <BaseParagraph size="sm">
              <span
                class="text-muted-500 dark:text-muted-400 group-hover:text-primary-500 transition-colors duration-300"
              >
                Business
              </span>
            </BaseParagraph>
            <div
              class="bg-muted-200 dark:bg-muted-700 text-muted-500 dark:text-muted-200 flex size-7 items-center justify-center rounded-full text-xs"
            >
              <span>31</span>
            </div>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="group flex items-center justify-between">
            <BaseParagraph size="sm">
              <span
                class="text-muted-500 dark:text-muted-400 group-hover:text-primary-500 transition-colors duration-300"
              >
                Family
              </span>
            </BaseParagraph>
            <div
              class="bg-muted-200 dark:bg-muted-700 text-muted-500 dark:text-muted-200 flex size-7 items-center justify-center rounded-full text-xs"
            >
              <span>4</span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
