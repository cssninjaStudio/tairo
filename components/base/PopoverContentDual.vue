<script setup lang="ts">
export interface StatItem {
  title: string
  subtitle: string
  icon?: string | undefined
  image?: string | undefined
}

export interface PopoverContentDualProps {
  stats: StatItem[]
  image: string
  title: string
  subtitle: string
  footerTitle: string
  footerText: string
  linkLabel: string
  link: string
}

const props = defineProps<PopoverContentDualProps>()
</script>

<template>
  <div>
    <div class="flex items-center">
      <div class="flex w-1/2 flex-col gap-1 p-2">
        <div
          v-for="(stat, index) in props.stats.slice(0, 2)"
          :key="index"
          class="relative flex w-full rounded-lg p-1"
        >
          <BaseIconBox
            v-if="stat.icon && !stat.image"
            size="xs"
            class="mr-2 bg-primary-100 text-primary-500 dark:bg-primary-600 dark:text-white"
          >
            <BaseIcon :name="stat.icon" class="h-4 w-4" />
          </BaseIconBox>
          <BaseAvatar
            v-if="stat.image && !stat.icon"
            :src="stat.image"
            size="xs"
            class="mr-2"
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
