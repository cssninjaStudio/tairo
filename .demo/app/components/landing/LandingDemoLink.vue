<script setup lang="ts">
import type { RouteRecordName } from 'vue-router'

const props = defineProps<{
  name?: RouteRecordName
  preview?: {
    title: string
    new?: boolean
    description: string
    categories?: string[]
    src: string
    srcDark?: string
    order?: number
    params?: Record<string, string>
  }
}>()
</script>

<template>
  <NuxtLink
    :to="{ name: props.name, params: props.preview?.params }"
    class="group relative block"
  >
    <div>
      <img
        class="border-muted-200 block w-full rounded-lg border motion-safe:transition-opacity motion-safe:duration-200 motion-safe:group-hover:opacity-75"
        :class="props.preview?.srcDark ? 'dark:hidden' : ''"
        :src="props.preview?.src"
        :alt="`Tairo - ${props.preview?.title}`"
        height="271"
        width="487"
        sizes="sm:100vw md:50vw lg:974px"
        format="webp"
        loading="lazy"
        decoding="async"
      >
      <img
        v-if="props.preview?.srcDark"
        class="border-muted-800 hidden w-full rounded-lg border motion-safe:transition-opacity motion-safe:duration-200 motion-safe:group-hover:opacity-75 dark:block"
        :src="props.preview?.srcDark"
        :alt="`Tairo - ${props.preview?.title}`"
        height="271"
        width="487"
        sizes="sm:100vw md:50vw lg:974px"
        format="webp"
        loading="lazy"
        decoding="async"
      >
      <div class="absolute inset-x-0 -bottom-2 mx-auto max-w-[85%]">
        <BaseCard
          rounded="lg"
          class="flex items-center p-4"
          elevated
        >
          <div>
            <BaseHeading
              as="h3"
              size="sm"
              weight="medium"
              lead="none"
              class="text-muted-800 mx-auto dark:text-white"
            >
              {{ props.preview?.title }}
            </BaseHeading>
            <BaseText size="xs" class="text-muted-500 dark:text-muted-400">
              {{
                props.preview?.description
              }}
            </BaseText>
          </div>
          <div
            class="bg-primary-500/10 text-primary-500 me-2 ms-auto flex size-8 items-center justify-center rounded-full motion-safe:opacity-0 motion-safe:transition-opacity motion-safe:duration-300 motion-safe:group-hover:opacity-100"
          >
            <Icon
              name="lucide:arrow-right"
              class="size-4 motion-safe:-translate-x-2 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-0 motion-reduce:translate-x-0"
            />
          </div>
        </BaseCard>
      </div>
      <BaseTag
        v-if="props.preview?.new"
        rounded="full"
        variant="none"
        class="absolute end-3 top-3 bg-destructive-600 text-white"
      >
        New
      </BaseTag>
    </div>
  </NuxtLink>
</template>
