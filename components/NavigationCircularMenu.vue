<script setup lang="ts">
const { open } = usePanels()
const { y } = useNinjaWindowScroll()

const isOpened = ref(false)
const isScrolled = computed(() => {
  if (y.value < 60) {
    isOpened.value = false
  }
  return y.value > 60
})
</script>

<template>
  <div
    class="fixed top-[0.6em] right-[1em] z-[90] transition-transform duration-300 after:absolute after:top-0 after:right-0 after:block after:h-12 after:w-12 after:rounded-full after:bg-primary-600 after:shadow-lg after:shadow-primary-500/50 after:transition-transform after:duration-300 after:content-[''] dark:after:shadow-muted-800/10"
    :class="[
      isOpened
        ? 'after:scale-x-[5.5] after:scale-y-[5.5] after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)]'
        : '',
      isScrolled ? '' : '-translate-y-24',
    ]"
  >
    <button
      type="button"
      class="relative z-30 flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg shadow-primary-500/50 dark:shadow-muted-800/10"
      @click="isOpened = !isOpened"
    >
      <span
        class="relative block h-3 w-3 transition-all duration-300"
        :class="isOpened ? 'scale-90 top-0' : '-top-0.5'"
      >
        <span
          class="absolute block h-0.5 w-full bg-muted-50 transition-all duration-300"
          :class="isOpened ? '-rotate-45 top-1' : 'top-0.5'"
        ></span>
        <span
          class="absolute top-1/2 block h-0.5 w-full bg-muted-50 transition-all duration-300"
          :class="isOpened ? 'opacity-0 translate-x-4' : ''"
        ></span>
        <span
          class="absolute block h-0.5 w-full bg-muted-50 transition-all duration-300"
          :class="isOpened ? 'rotate-45 bottom-1.5' : 'bottom-0'"
        ></span>
      </span>
    </button>

    <div>
      <!-- Dark mode -->
      <div
        class="absolute top-[0.2em] right-[0.2em] z-20 flex items-center justify-center transition-all duration-300"
        :class="
          isOpened
            ? 'translate-x-[-6.5em] translate-y-[-0.25em]'
            : 'translate-x-0 translate-y-0'
        "
      >
        <BaseThemeToggle class="ml-auto" inverted />
      </div>

      <!-- Language selection -->
      <div
        class="absolute top-[0.2em] right-[0.2em] z-20 flex items-center justify-center transition-all duration-300"
        :class="
          isOpened
            ? 'translate-x-[-5.75em] translate-y-[3em]'
            : 'translate-x-0 translate-y-0'
        "
      >
        <button
          type="button"
          class="flex h-9 w-9 items-center justify-center rounded-full bg-primary-700 transition-all duration-300"
          @click="open('language')"
        >
          <NuxtImg
            class="h-7 w-7 rounded-full"
            src="/img/icons/flags/united-states-of-america.svg"
            alt="flag icon"
          />
        </button>
      </div>

      <!-- Notifications -->
      <div
        class="absolute top-[0.2em] right-[0.2em] z-20 flex items-center justify-center transition-all duration-300"
        :class="
          isOpened
            ? 'translate-x-[-3.15em] translate-y-[5.5em]'
            : 'translate-x-0 translate-y-0'
        "
      >
        <NuxtLink
          to="/"
          class="inline-flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300"
        >
          <span
            class="flex h-9 w-9 items-center justify-center rounded-full bg-primary-700"
          >
            <Icon name="ph:bell-duotone" class="h-5 w-5 text-white" />
          </span>
        </NuxtLink>
      </div>

      <!-- Activity -->
      <div
        class="absolute top-[0.2em] right-[0.2em] z-20 flex items-center justify-center transition-all duration-300"
        :class="
          isOpened
            ? 'translate-x-[0em] translate-y-[6.5em]'
            : 'translate-x-0 translate-y-0'
        "
      >
        <button
          type="button"
          class="flex h-9 w-9 items-center justify-center rounded-full bg-primary-700 transition-all duration-300"
          @click="open('activity')"
        >
          <Icon name="ph:circles-four-duotone" class="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  </div>
</template>
