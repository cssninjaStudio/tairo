<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    closeLabel?: string
    closeTo?: string
  }>(),
  {
    closeLabel: 'Back',
    closeTo: '/',
  },
)
</script>

<template>
  <div class="absolute start-0 top-0 w-full">
    <div class="mx-auto w-full max-w-6xl px-4">
      <div class="flex w-full items-center justify-between py-5">
        <div class="flex flex-1 items-center">
          <NuxtLink to="/dashboards" class="flex items-center gap-2">
            <TairoLogoText
              class="text-primary-500 hidden h-7 lg:block dark:text-white"
            />
          </NuxtLink>
        </div>
        <div class="grow">
          <div class="flex w-full items-center justify-center">
            <BaseParagraph weight="medium" class="text-muted-700 dark:text-muted-200">
              {{ props.title }}
            </BaseParagraph>
          </div>
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-end">
            <NuxtLink :to="props.closeTo" class="group text-center">
              <Icon
                name="lucide:x"
                class="text-muted-800 dark:text-muted-500 dark:group-hover:text-muted-200 size-8 transition-colors duration-300"
              />
              <BaseText
                size="xs"
                class="text-muted-400 dark:text-muted-400 dark:group-hover:text-muted-200 block transition-colors duration-300"
              >
                {{ props.closeLabel }}
              </BaseText>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
