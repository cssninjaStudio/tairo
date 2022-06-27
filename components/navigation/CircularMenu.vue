<script setup lang="ts">
const { openPanel } = usePanels()
const { y } = useWindowScrollFixed()

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
    class="fixed top-[0.6em] right-[1em] z-[90] transition-transform duration-300 after:block after:content-[''] after:absolute after:top-0 after:right-0 after:bg-primary-600 after:shadow-lg after:shadow-primary-500/50 dark:after:shadow-gray-800/10 after:w-12 after:h-12 after:rounded-full after:transition-transform after:duration-300"
    :class="[
      isOpened
        ? 'after:scale-x-[5.5] after:scale-y-[5.5] after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)]'
        : '',
      isScrolled ? '' : '-translate-y-24',
    ]"
  >
    <button
      class="relative flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white shadow-lg shadow-primary-500/50 dark:shadow-gray-800/10 z-30"
      @click="isOpened = !isOpened"
    >
      <span
        class="relative block w-3 h-3 transition-all duration-300"
        :class="isOpened ? 'scale-90 top-0' : '-top-0.5'"
      >
        <span
          class="absolute block w-full h-0.5 bg-gray-50 transition-all duration-300"
          :class="isOpened ? '-rotate-45 top-1' : 'top-0.5'"
        ></span>
        <span
          class="absolute top-1/2 block w-full h-0.5 bg-gray-50 transition-all duration-300"
          :class="isOpened ? 'opacity-0 translate-x-4' : ''"
        ></span>
        <span
          class="absolute block w-full h-0.5 bg-gray-50 transition-all duration-300"
          :class="isOpened ? 'rotate-45 bottom-1.5' : 'bottom-0'"
        ></span>
      </span>
    </button>

    <div>
      <!-- Dark mode -->
      <div
        class="flex items-center justify-center absolute top-[0.2em] right-[0.2em] z-20 transition-all duration-300"
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
        class="flex items-center justify-center absolute top-[0.2em] right-[0.2em] z-20 transition-all duration-300"
        :class="
          isOpened
            ? 'translate-x-[-5.75em] translate-y-[3em]'
            : 'translate-x-0 translate-y-0'
        "
      >
        <button
          class="flex items-center justify-center w-9 h-9 rounded-full bg-primary-700 transition-all duration-300"
          @click="openPanel('language')"
        >
          <img
            class="h-7 w-7 rounded-full"
            src="/img/icons/flags/united-states-of-america.svg"
            alt="flag icon"
          />
        </button>
      </div>

      <!-- Notifications -->
      <div
        class="flex items-center justify-center absolute top-[0.2em] right-[0.2em] z-20 transition-all duration-300"
        :class="
          isOpened
            ? 'translate-x-[-3.15em] translate-y-[5.5em]'
            : 'translate-x-0 translate-y-0'
        "
      >
        <NuxtLink
          to="/"
          class="w-9 h-9 rounded-full inline-flex items-center justify-center transition-all duration-300"
        >
          <span
            class="flex items-center justify-center w-9 h-9 rounded-full bg-primary-700"
          >
            <i class="i-ph-bell-duotone w-5 h-5 text-white"></i>
          </span>
        </NuxtLink>
      </div>

      <!-- Activity -->
      <div
        class="flex items-center justify-center absolute top-[0.2em] right-[0.2em] z-20 transition-all duration-300"
        :class="
          isOpened
            ? 'translate-x-[0em] translate-y-[6.5em]'
            : 'translate-x-0 translate-y-0'
        "
      >
        <button
          class="flex items-center justify-center w-9 h-9 rounded-full bg-primary-700 transition-all duration-300"
          @click="openPanel('activity')"
        >
          <i class="i-ph-circles-four-duotone w-5 h-5 text-white"></i>
        </button>
      </div>
    </div>
  </div>
</template>
