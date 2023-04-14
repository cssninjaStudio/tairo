<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'straight' | 'rounded' | 'curved'
  }>(),
  {
    shape: 'rounded',
  },
)
</script>

<template>
  <NuxtLink to="#" class="group flex w-full gap-4">
    <div class="relative shrink-0">
      <img
        class="h-24 w-20 object-cover object-top"
        src="/img/illustrations/dashboards/hobbies/hobby-3.svg"
        :class="[
          props.shape === 'rounded' ? 'rounded' : '',
          props.shape === 'curved' ? 'rounded-lg' : '',
        ]"
        alt="Widget image"
      />
      <div class="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          type="button"
          class="border-primary-500 bg-primary-500 dark:group-hover:bg-muted-800 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-300 group-hover:bg-white"
        >
          <Icon
            name="ic:round-play-arrow"
            class="group-hover:text-primary-500 h-5 w-5 text-white"
          />
        </button>
      </div>
    </div>
    <div class="flex flex-col">
      <p class="text-primary-500 my-1 font-sans text-xs uppercase">
        Best Movies
      </p>
      <BaseHeading as="h3" size="sm" weight="medium" lead="tight">
        <span>The man who didn't want to talk to horses</span>
      </BaseHeading>
      <div
        class="text-muted-400 mt-auto flex items-center gap-2 font-sans text-xs"
      >
        <Icon name="lucide:eye" class="h-4 w-4" />
        <span>3,862 views</span>
      </div>
    </div>
  </NuxtLink>
</template>
