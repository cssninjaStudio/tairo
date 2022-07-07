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
    class="relative block h-9 w-9 overflow-hidden rounded-full ring-1 ring-transparent transition-all duration-300 hover:ring-primary-500 hover:ring-offset-4"
    :class="
      props.inverted
        ? 'ring-offset-primary-700 dark:ring-offset-primary-700'
        : 'dark:ring-offset-muted-900'
    "
  >
    <input
      v-model="isDark"
      type="checkbox"
      class="absolute top-0 left-0 z-[2] h-full w-full cursor-pointer opacity-0"
    />
    <span
      class="relative block h-9 w-9 rounded-full"
      :class="
        props.inverted
          ? 'bg-primary-700 '
          : 'bg-white dark:bg-muted-800  border border-muted-300 dark:border-muted-700'
      "
    >
      <IconSun
        class="pointer-events-none absolute top-1/2 left-1/2 block h-5 w-5 text-yellow-400 transition-all duration-300"
        :class="[
          !isDark
            ? 'opacity-100 -translate-x-[50%] -translate-y-1/2'
            : 'opacity-0  -translate-x-[50%] -translate-y-[150%]',
        ]"
      />

      <IconMoon
        class="pointer-events-none absolute top-1/2 left-1/2 block h-5 w-5 text-yellow-400 transition-all duration-300"
        :class="[
          !isDark
            ? 'opacity-0 -translate-x-[45%] -translate-y-[150%]'
            : 'opacity-100 -translate-x-[45%] -translate-y-1/2',
        ]"
      />
    </span>
  </label>
</template>
