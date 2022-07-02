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
      <div class="w-1/2 flex flex-col gap-1 p-2">
        <div class="relative">
          <div class="flex w-full rounded-lg p-2">
            <BaseIconBox
              size="xs"
              class="bg-indigo-100 text-indigo-500 dark:bg-indigo-600 dark:text-white"
            >
              <BaseIcon name="ph:house-duotone" class="w-4 h-4" />
            </BaseIconBox>
            <div class="ml-2">
              <BaseHeading
                as="h4"
                size="xs"
                weight="semibold"
                lead="tight"
                class="text-slate-800 dark:text-white"
              >
                {{ props.title }}
              </BaseHeading>
              <BaseText size="xs" class="text-slate-400">
                {{ props.subtitle }}
              </BaseText>
            </div>
          </div>
        </div>
        <BaseText
          size="xs"
          lead="tight"
          class="text-slate-400 pl-2 line-clamp-3"
        >
          {{ props.text }}
        </BaseText>
      </div>
      <div class="w-1/2 flex items-center justify-center">
        <div class="w-full text-center py-5 px-3">
          <div class="flex flex-col gap-2">
            <img
              :src="props.images[0]"
              class="h-16 bg-slate-100 object-cover rounded"
              alt="popover image"
            />
            <div class="grid grid-cols-2 gap-x-2">
              <img
                :src="props.images[1]"
                class="h-12 bg-slate-100 object-cover rounded"
                alt="popover image"
              />
              <img
                :src="props.images[2]"
                class="h-12 bg-slate-100 object-cover rounded"
                alt="popover image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <NuxtLink
      :to="props.link"
      class="group flex items-center justify-between bg-slate-100 dark:bg-slate-800 p-4 rounded-b-lg"
    >
      <div
        class="flow-root rounded-md transition duration-150 ease-in-out focus:outline-none"
      >
        <BaseHeading
          as="h4"
          size="xs"
          weight="semibold"
          class="text-slate-800 dark:text-white"
          lead="tight"
        >
          {{ props.footerTitle }}
        </BaseHeading>
        <BaseText size="xs" class="text-slate-400">
          {{ props.footerText }}
        </BaseText>
      </div>
      <span class="flex items-center">
        <span
          class="text-sm font-sub font-semibold mr-1 text-primary-500 transition-colors"
        >
          {{ props.linkLabel }}
        </span>
      </span>
    </NuxtLink>
  </div>
</template>
