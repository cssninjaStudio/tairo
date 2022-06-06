<script setup lang="ts">
const props = defineProps<{
  active: boolean
}>()

const emit = defineEmits(['triggered', 'language', 'activity', 'closed'])
const { toggleDark } = useDarkmode()
const { y } = useWindowScrollFixed()
const isChecked = ref(false)
const isScrolled = computed(() => {
  if (y.value < 60) {
    emit('closed')
  }
  return y.value > 60
})
</script>

<template>
  <div
    class="fixed top-[0.6em] right-[1em] z-[90] transition-transform duration-300 after:block after:content-[''] after:absolute after:top-0 after:right-0 after:bg-primary-600 after:shadow-lg after:shadow-primary-500/50 after:w-12 after:h-12 after:rounded-full after:transition-transform after:duration-300"
    :class="[
      props.active
        ? 'after:scale-x-[5.5] after:scale-y-[5.5] after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)]'
        : '',
      isScrolled ? '' : '-translate-y-24',
    ]"
  >
    <button
      class="relative flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white shadow-lg shadow-primary-500/50 z-30"
      @click="emit('triggered')"
    >
      <span
        class="relative block w-3 h-3 transition-all duration-300"
        :class="props.active ? 'scale-90 top-0' : '-top-0.5'"
      >
        <span
          class="absolute block w-full h-0.5 bg-gray-50 transition-all duration-300"
          :class="props.active ? '-rotate-45 top-1' : 'top-0.5'"
        ></span>
        <span
          class="absolute top-1/2 block w-full h-0.5 bg-gray-50 transition-all duration-300"
          :class="props.active ? 'opacity-0 translate-x-4' : ''"
        ></span>
        <span
          class="absolute block w-full h-0.5 bg-gray-50 transition-all duration-300"
          :class="props.active ? 'rotate-45 bottom-1.5' : 'bottom-0'"
        ></span>
      </span>
    </button>

    <div>
      <!-- Dark mode -->
      <div
        class="flex items-center justify-center absolute top-[0.2em] right-[0.2em] z-20 transition-all duration-300"
        :class="
          props.active
            ? 'translate-x-[-6.5em] translate-y-[-0.25em]'
            : 'translate-x-0 translate-y-0'
        "
      >
        <label
          class="block w-9 h-9 overflow-hidden relative ml-auto rounded-full transition-all duration-300"
        >
          <input
            v-model="isChecked"
            type="checkbox"
            class="absolute top-0 left-0 z-[2] w-full h-full opacity-0 cursor-pointer"
            @change="() => toggleDark()"
          />
          <span
            class="block relative w-9 h-9 bg-primary-700 dark:bg-gray-800 rounded-full dark:border-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              class="block absolute top-1/2 left-1/2 w-5 h-5 text-yellow-400 transition-all duration-300 pointer-events-none"
              :class="[
                !isChecked
                  ? 'opacity-100 -translate-x-[50%] -translate-y-1/2'
                  : 'opacity-0  -translate-x-[50%] -translate-y-[150%]',
              ]"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" class="stroke-2">
                <circle cx="12" cy="12" r="5" class="fill-current" />
                <path class="fill-current" d="M12 1v2" />
                <path class="fill-current" d="M12 21v2" />
                <path class="fill-current" d="M4.22 4.22l1.42 1.42" />
                <path class="fill-current" d="M18.36 18.36l1.42 1.42" />
                <path class="fill-current" d="M1 12h2" />
                <path class="fill-current" d="M21 12h2" />
                <path class="fill-current" d="M4.22 19.78l1.42-1.42" />
                <path class="fill-current" d="M18.36 5.64l1.42-1.42" />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              class="block absolute top-1/2 left-1/2 w-5 h-5 text-yellow-400 transition-all duration-300 pointer-events-none"
              :class="[
                !isChecked
                  ? 'opacity-0 -translate-x-[45%] -translate-y-[150%]'
                  : 'opacity-100 -translate-x-[45%] -translate-y-1/2',
              ]"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" class="stroke-2">
                <path
                  class="fill-current"
                  d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z"
                />
              </g>
            </svg>
          </span>
        </label>
      </div>

      <!-- Language selection -->
      <div
        class="flex items-center justify-center absolute top-[0.2em] right-[0.2em] z-20 transition-all duration-300"
        :class="
          props.active
            ? 'translate-x-[-5.75em] translate-y-[3em]'
            : 'translate-x-0 translate-y-0'
        "
      >
        <button
          class="flex items-center justify-center w-9 h-9 rounded-full bg-primary-700 transition-all duration-300"
          @click="emit('language')"
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
          props.active
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
          props.active
            ? 'translate-x-[0em] translate-y-[6.5em]'
            : 'translate-x-0 translate-y-0'
        "
      >
        <button
          class="flex items-center justify-center w-9 h-9 rounded-full bg-primary-700 transition-all duration-300"
          @click="emit('activity')"
        >
          <i class="i-ph-circles-four-duotone w-5 h-5 text-white"></i>
        </button>
      </div>
    </div>
  </div>
</template>
