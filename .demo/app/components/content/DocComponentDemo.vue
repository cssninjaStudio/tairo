<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tag?: string
    title?: string
    demo?: string
    code?: boolean
    dark?: boolean
    condensed?: boolean
  }>(),
  {
    tag: undefined,
    title: undefined,
    demo: undefined,
    code: true,
    dark: true,
    condensed: false,
  },
)

const slots = useSlots()
const hasDemoContent = computed(() =>
  Boolean('demo' in slots),
)

const forceDark = ref(false)
</script>

<template>
  <div class="group mb-10">
    <div
      v-if="props.title || props.tag || (hasDemoContent && props.dark)"
      class="mb-4 flex items-center"
    >
      <BaseHeading
        v-if="props.title"
        as="h3"
        size="xl"
        weight="medium"
        class="text-muted-800 dark:text-white"
      >
        {{ props.title }}
      </BaseHeading>

      <div
        v-if="props.tag"
        class="bg-muted-200 text-muted-600 dark:bg-muted-800 dark:text-muted-500 ms-3 hidden flex-none rounded-md px-2 py-1.5 text-xs font-semibold tracking-wide lg:block"
      >
        {{ props.tag }}
      </div>
    </div>

    <div v-if="'grid' in $slots" class="mb-4 grid gap-4 md:grid-cols-2">
      <slot name="grid" />
    </div>

    <div v-if="hasDemoContent" :class="[forceDark ? 'dark' : '']">
      <div
        class="border-muted-200 dark:border-muted-800 dark:bg-muted-900 relative w-full rounded-md border bg-white p-6 transition-all duration-300"
      >
        <slot name="demo" />
      </div>
    </div>

    <div class="relative">
      <ClientOnly>
        <div
          v-if="hasDemoContent && props.dark"
          class="absolute right-0 top-1.5 flex items-center gap-2"
        >
          <BaseSwitchThin v-model="forceDark">
            <span class="text-muted-500 dark:text-muted-400 text-[0.8rem]">dark preview</span>
          </BaseSwitchThin>
        </div>
      </ClientOnly>

      <details v-if="'source' in $slots && props.code" class="group mt-2">
        <summary
          class="focus-visible:nui-focus hover:bg-muted-100 dark:hover:bg-muted-700/70 text-muted-500 dark:text-muted-400 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-md px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100 group-open:mb-1.5"
        >
          <span class="inline group-open:hidden">Show code</span>
          <span class="hidden group-open:inline">Hide code</span>
          <Icon
            name="lucide:chevron-down"
            class="text-muted-400 size-4 transition-transform duration-200 group-open:rotate-180"
          />
        </summary>
        <slot name="source" />
      </details>
    </div>
  </div>
</template>
