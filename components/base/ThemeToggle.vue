<script setup lang="ts">
export interface ThemeToggleProps {
  inverted?: boolean
}

const props = withDefaults(defineProps<ThemeToggleProps>(), {
  inverted: false,
})

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(value) {
    if (value) {
      colorMode.preference = 'dark'
    } else {
      colorMode.preference = 'light'
    }
  },
})
</script>

<template>
  <label
    class="block w-9 h-9 overflow-hidden relative rounded-full ring-1 ring-transparent hover:ring-offset-4 hover:ring-primary-500 transition-all duration-300"
    :class="
      props.inverted
        ? 'ring-offset-primary-700 dark:ring-offset-primary-700'
        : 'dark:ring-offset-slate-900'
    "
  >
    <input
      v-model="isDark"
      type="checkbox"
      class="absolute top-0 left-0 z-[2] w-full h-full opacity-0 cursor-pointer"
    />
    <span
      class="block relative w-9 h-9 rounded-full"
      :class="
        props.inverted
          ? 'bg-primary-700 '
          : 'bg-white dark:bg-slate-800  border border-slate-300 dark:border-slate-700'
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        class="block absolute top-1/2 left-1/2 w-5 h-5 text-yellow-400 transition-all duration-300 pointer-events-none"
        :class="[
          !isDark
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
          !isDark
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
</template>
