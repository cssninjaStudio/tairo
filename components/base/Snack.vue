<script setup lang="ts">
export interface SnackProps {
  label: string
  icon?: string
  image?: string
  small?: boolean
  light?: boolean
}

const props = withDefaults(defineProps<SnackProps>(), {
  icon: undefined,
  image: undefined,
})

const emit = defineEmits(['delete'])
</script>

<template>
  <div
    class="inline-flex items-center rounded-full group focus-within:ring-0 outline-transparent focus-within:outline-dashed focus-within:outline-offset-2"
    :class="[
      !props.icon && !props.image && 'pl-4',
      props.small ? 'h-8' : 'h-10',
      props.light
        ? 'bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 focus-within:outline-slate-100 dark:focus-within:outline-slate-700/50'
        : 'bg-slate-200 dark:bg-slate-700 focus-within:outline-slate-200/50 dark:focus-within:outline-slate-700',
    ]"
  >
    <div
      v-if="props.icon && !props.image"
      class="flex items-center justify-center rounded-full bg-white border border-slate-200 mr-2 -ml-0.5"
      :class="props.small ? 'h-8 w-8' : 'h-10 w-10'"
    >
      <BaseIcon
        :name="props.icon"
        :class="[props.small ? 'h-4 w-4' : 'h-5 w-5']"
      />
    </div>
    <div
      v-else-if="props.image && !props.icon"
      class="flex items-center justify-center rounded-full mr-2 -ml-0.5"
      :class="props.small ? 'h-8 w-8' : 'h-10 w-10'"
    >
      <img
        :src="props.image"
        class="rounded-full object-cover"
        :class="props.small ? 'h-8 w-8' : 'h-10 w-10'"
        alt="snack image"
      />
    </div>
    <span class="font-text text-sm text-slate-600 dark:text-slate-300">
      <slot>{{ props.label }}</slot>
    </span>
    <button
      type="button"
      class="ml-2 p-1 cursor-pointer rounded-full outline-none"
      :class="[
        props.small ? 'mr-1' : 'mr-2',
        props.light
          ? 'hover:bg-slate-100 !active:bg-slate-200 focus:bg-slate-100 !dark:active:bg-slate-500/50 dark:focus:bg-slate-600 dark:hover:bg-slate-600 '
          : 'hover:bg-slate-300 !active:bg-slate-400/50 focus:bg-slate-300 !dark:active:bg-slate-500/50 dark:focus:bg-slate-600 dark:hover:bg-slate-600 ',
      ]"
      @click="emit('delete')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="w-4 h-4 text-slate-600 dark:text-slate-300"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M18 6L6 18M6 6l12 12"
        ></path>
      </svg>
    </button>
  </div>
</template>
