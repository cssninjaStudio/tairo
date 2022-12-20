<template>
  <div>
    <div class="flex items-center justify-between mb-4">
      <BaseHeading
        as="h3"
        size="sm"
        weight="semibold"
        lead="tight"
        class="text-muted-800 dark:text-white"
      >
        <span>Notifications</span>
      </BaseHeading>
    </div>
    <div>
      <ul class="space-y-3">
        <li>
          <NuxtLink to="/" class="group flex items-center justify-between">
            <BaseParagraph size="sm">
              <span class="text-muted-500 dark:text-muted-400 group-hover:text-primary-500 transition-colors duration-300">
                Personal
              </span>
            </BaseParagraph>
            <div class="w-7 h-7 flex items-center justify-center rounded-full text-xs bg-muted-200 dark:bg-muted-700 text-muted-500 dark:text-muted-200">
              <span>12</span>
            </div>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" class="group flex items-center justify-between">
            <BaseParagraph size="sm">
              <span class="text-muted-500 dark:text-muted-400 group-hover:text-primary-500 transition-colors duration-300">
                Business
              </span>
            </BaseParagraph>
            <div class="w-7 h-7 flex items-center justify-center rounded-full text-xs bg-muted-200 dark:bg-muted-700 text-muted-500 dark:text-muted-200">
              <span>31</span>
            </div>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" class="group flex items-center justify-between">
            <BaseParagraph size="sm">
              <span class="text-muted-500 dark:text-muted-400 group-hover:text-primary-500 transition-colors duration-300">
                Family
              </span>
            </BaseParagraph>
            <div class="w-7 h-7 flex items-center justify-center rounded-full text-xs bg-muted-200 dark:bg-muted-700 text-muted-500 dark:text-muted-200">
              <span>4</span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>