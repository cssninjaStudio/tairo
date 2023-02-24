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
  <NuxtLink to="#/" class="group w-full flex gap-4">
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
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          type="button"
          class="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary-500 bg-primary-500 group-hover:bg-white dark:group-hover:bg-muted-800 transition-colors duration-300"
        >
          <Icon
            name="ic:round-play-arrow"
            class="w-5 h-5 text-white group-hover:text-primary-500"
          />
        </button>
      </div>
    </div>
    <div class="flex flex-col">
      <p class="font-sans text-xs uppercase my-1 text-primary-500">
        Best Movies
      </p>
      <BaseHeading as="h3" size="sm" weight="medium" lead="tight">
        <span>The man who didn't want to talk to horses</span>
      </BaseHeading>
      <div
        class="mt-auto flex items-center gap-2 font-sans text-xs text-muted-400"
      >
        <Icon name="lucide:eye" class="w-4 h-4" />
        <span>3,862 views</span>
      </div>
    </div>
  </NuxtLink>
</template>
