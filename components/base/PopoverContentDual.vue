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
      <div class="w-1/2 flex flex-col gap-1 p-2">
        <div
          v-for="(stat, index) in props.stats.slice(0, 2)"
          :key="index"
          class="relative flex w-full rounded-lg p-1"
        >
          <BaseIconBox
            v-if="stat.icon && !stat.image"
            size="xs"
            class="bg-primary-100 text-primary-500 dark:bg-primary-600 dark:text-white mr-2"
          >
            <BaseIcon :name="stat.icon" class="w-4 h-4" />
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
      <div class="w-1/2 flex items-center justify-center">
        <div class="flex flex-col items-center gap-2 text-center py-5">
          <BaseAvatar :src="props.image" size="lg" class="!block mx-auto" />
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
      class="group flex items-center justify-between bg-muted-100 dark:bg-muted-800 p-4 rounded-b-lg"
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
          class="text-sm font-alt font-semibold mr-1 text-primary-500 transition-colors"
        >
          {{ props.linkLabel }}
        </span>
      </span>
    </NuxtLink>
  </div>
</template>
