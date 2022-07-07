<script setup lang="ts">
export interface PopoverContentMediaProps {
  images: string[]
  title: string
  subtitle: string
  text: string
  footerTitle: string
  footerText: string
  linkLabel: string
  link: string
}

const props = defineProps<PopoverContentMediaProps>()
</script>

<template>
  <div>
    <div class="flex items-center">
      <div class="flex w-1/2 flex-col gap-1 p-2">
        <div class="relative">
          <div class="flex w-full rounded-lg p-2">
            <BaseIconBox
              size="xs"
              class="bg-indigo-100 text-indigo-500 dark:bg-indigo-600 dark:text-white"
            >
              <BaseIcon name="ph:house-duotone" class="h-4 w-4" />
            </BaseIconBox>
            <div class="ml-2">
              <BaseHeading
                as="h4"
                size="xs"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                {{ props.title }}
              </BaseHeading>
              <BaseText size="xs" class="text-muted-400">
                {{ props.subtitle }}
              </BaseText>
            </div>
          </div>
        </div>
        <BaseText
          size="xs"
          lead="tight"
          class="pl-2 text-muted-400 line-clamp-3"
        >
          {{ props.text }}
        </BaseText>
      </div>
      <div class="flex w-1/2 items-center justify-center">
        <div class="w-full py-5 px-3 text-center">
          <div class="flex flex-col gap-2">
            <img
              :src="props.images[0]"
              class="h-16 rounded bg-muted-100 object-cover"
              alt="popover image"
            />
            <div class="grid grid-cols-2 gap-x-2">
              <img
                :src="props.images[1]"
                class="h-12 rounded bg-muted-100 object-cover"
                alt="popover image"
              />
              <img
                :src="props.images[2]"
                class="h-12 rounded bg-muted-100 object-cover"
                alt="popover image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <NuxtLink
      :to="props.link"
      class="group flex items-center justify-between rounded-b-lg bg-muted-100 p-4 dark:bg-muted-800"
    >
      <div
        class="flow-root rounded-md transition duration-150 ease-in-out focus:outline-none"
      >
        <BaseHeading
          as="h4"
          size="xs"
          weight="semibold"
          class="text-muted-800 dark:text-white"
          lead="tight"
        >
          {{ props.footerTitle }}
        </BaseHeading>
        <BaseText size="xs" class="text-muted-400">
          {{ props.footerText }}
        </BaseText>
      </div>
      <span class="flex items-center">
        <span
          class="mr-1 font-alt text-sm font-semibold text-primary-500 transition-colors"
        >
          {{ props.linkLabel }}
        </span>
      </span>
    </NuxtLink>
  </div>
</template>
