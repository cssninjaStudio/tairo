<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  /**
   * An array of stats to display.
   */
  stats: {
    /**
     * The title of the stat.
     */
    title: string

    /**
     * The subtitle of the stat.
     */
    subtitle: string

    /**
     * The name of the icon to display.
     */
    icon?: string | undefined

    /**
     * The URL of the image to display.
     */
    image?: string | undefined
  }[]

  /**
   * The URL of the main image to display.
   */
  image?: string

  /**
   * The main title to display.
   */
  title?: string

  /**
   * The main subtitle to display.
   */
  subtitle?: string

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
  linkLabel?: string

  /**
   * The URL for the link.
   */
  to?: RouteLocationRaw
}>()
</script>

<template>
  <div>
    <div class="flex items-center">
      <div class="flex w-1/2 flex-col gap-1 p-2">
        <div
          v-for="(stat, index) in props.stats.slice(0, 2)"
          :key="index"
          class="relative flex w-full rounded-lg px-1 py-2"
        >
          <BaseIconBox
            v-if="stat.icon && !stat.image"
            size="xs"
            class="bg-primary-100 text-primary-500 dark:bg-primary-600 me-2 dark:text-white"
          >
            <Icon :name="stat.icon" class="h-4 w-4" />
          </BaseIconBox>
          <BaseAvatar
            v-if="stat.image && !stat.icon"
            :src="stat.image"
            size="xs"
            class="me-2"
          />
          <div>
            <BaseHeading
              as="h4"
              size="xs"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              {{ stat.title }}
            </BaseHeading>
            <BaseText size="xs" class="text-muted-400">
              {{ stat.subtitle }}
            </BaseText>
          </div>
        </div>
      </div>
      <div class="flex w-1/2 items-center justify-center">
        <div class="flex flex-col items-center gap-2 py-5 text-center">
          <BaseAvatar :src="props.image" size="lg" class="mx-auto !block" />
          <div>
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
