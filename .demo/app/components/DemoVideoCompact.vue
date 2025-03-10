<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    rounded?: 'none' | 'md' | 'lg'
  }>(),
  {
    rounded: 'md',
  },
)
</script>

<template>
  <div class="group flex w-full gap-4">
    <div class="relative shrink-0">
      <div
        class="h-24 w-20 overflow-hidden" :class="[
          props.rounded === 'md' ? 'rounded-md' : '',
          props.rounded === 'lg' ? 'rounded-lg' : '',
        ]"
      >
        <TairoImageZoom
          src="/img/illustrations/dashboards/hobbies/hobby-3.svg"
          alt="Widget image"
          class="object-cover object-top" :class="[
            props.rounded === 'md' ? 'rounded-md' : '',
            props.rounded === 'lg' ? 'rounded-lg' : '',
          ]"
        />
      </div>
      <div class="pointer-events-none absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span
          class="border-primary-500 bg-primary-500 dark:group-hover:bg-muted-800 flex size-10 items-center justify-center rounded-full border-2 transition-colors duration-300 group-hover:bg-white"
        >
          <Icon
            name="ic:round-play-arrow"
            class="group-hover:text-primary-500 size-5 text-white"
          />
        </span>
      </div>
    </div>
    <div class="flex flex-col">
      <span class="text-primary-500 my-1 font-sans text-xs uppercase">
        Best Movies
      </span>
      <BaseHeading
        as="h3"
        size="sm"
        weight="medium"
        lead="tight"
      >
        <span>The man who didn't want to talk to horses</span>
      </BaseHeading>
      <div
        class="text-muted-400 mt-auto flex items-center gap-2 font-sans text-xs"
      >
        <Icon name="lucide:eye" class="size-4" />
        <span>3,862 views</span>
      </div>
    </div>
  </div>
</template>
