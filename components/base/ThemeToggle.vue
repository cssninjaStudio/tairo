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
        : 'dark:ring-offset-muted-900'
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
          : 'bg-white dark:bg-muted-800  border border-muted-300 dark:border-muted-700'
      "
    >
      <IconSun
        class="block absolute top-1/2 left-1/2 w-5 h-5 text-yellow-400 transition-all duration-300 pointer-events-none"
        :class="[
          !isDark
            ? 'opacity-100 -tranmuted-x-[50%] -tranmuted-y-1/2'
            : 'opacity-0  -tranmuted-x-[50%] -tranmuted-y-[150%]',
        ]"
      />

      <IconMoon
        class="block absolute top-1/2 left-1/2 w-5 h-5 text-yellow-400 transition-all duration-300 pointer-events-none"
        :class="[
          !isDark
            ? 'opacity-0 -tranmuted-x-[45%] -tranmuted-y-[150%]'
            : 'opacity-100 -tranmuted-x-[45%] -tranmuted-y-1/2',
        ]"
      />
    </span>
  </label>
</template>
