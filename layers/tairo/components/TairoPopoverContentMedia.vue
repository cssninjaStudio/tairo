<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  /**
   * An array of image URLs to display.
   */
  images: string[]

  /**
   * The main title to display.
   */
  title: string

  /**
   * The main subtitle to display.
   */
  subtitle?: string

  /**
   * The main text to display.
   */
  text?: string

  /**
   * The title of the footer.
   */
  footerTitle?: string

  /**
   * The text of the footer.
   */
  footerText?: string

  /**
   * The label for the link.
   */
  linkLabel: string

  /**
   * The URL for the link.
   */
  to: RouteLocationRaw
}>()
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
              <Icon name="ph:house-duotone" class="h-4 w-4" />
            </BaseIconBox>
            <div class="ms-2">
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
          class="text-muted-400 line-clamp-3 ps-2"
        >
          {{ props.text }}
        </BaseText>
      </div>
      <div class="flex w-1/2 items-center justify-center">
        <div class="w-full px-3 py-5 text-center">
          <div class="flex flex-col gap-2">
            <img
              :src="props.images[0]"
              class="bg-muted-100 h-16 rounded object-cover"
              alt="popover image"
            />
            <div class="grid grid-cols-2 gap-x-2">
              <img
                :src="props.images[1]"
                class="bg-muted-100 h-12 rounded object-cover"
                alt="popover image"
              />
              <img
                :src="props.images[2]"
                class="bg-muted-100 h-12 rounded object-cover"
                alt="popover image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <NuxtLink
      :to="props.to"
      class="bg-muted-100 dark:bg-muted-800 group flex items-center justify-between rounded-b-lg p-4"
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
        <NuxtLink
          to="#"
          class="text-primary-500 me-1 font-sans text-sm font-medium underline-offset-4 transition-colors hover:underline"
        >
          {{ props.linkLabel }}
        </NuxtLink>
      </span>
    </NuxtLink>
  </div>
</template>
