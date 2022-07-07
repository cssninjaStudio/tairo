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
    class="group ninja-focus inline-flex items-center rounded-full outline-transparent"
    :class="[
      !props.icon && !props.image && 'pl-4',
      props.small ? 'h-8' : 'h-10',
      props.light
        ? 'bg-white dark:bg-muted-700 border border-muted-300 dark:border-muted-600'
        : 'bg-muted-200 dark:bg-muted-700',
    ]"
  >
    <div
      v-if="props.icon && !props.image"
      class="mr-2 -ml-0.5 flex items-center justify-center rounded-full border border-muted-200 bg-white"
      :class="props.small ? 'h-8 w-8' : 'h-10 w-10'"
    >
      <BaseIcon
        :name="props.icon"
        :class="[props.small ? 'h-4 w-4' : 'h-5 w-5']"
      />
    </div>
    <div
      v-else-if="props.image && !props.icon"
      class="mr-2 -ml-0.5 flex items-center justify-center rounded-full"
      :class="props.small ? 'h-8 w-8' : 'h-10 w-10'"
    >
      <img
        :src="props.image"
        class="rounded-full object-cover"
        :class="props.small ? 'h-8 w-8' : 'h-10 w-10'"
        alt="snack image"
      />
    </div>
    <span class="font-sans text-sm text-muted-600 dark:text-muted-300">
      <slot>{{ props.label }}</slot>
    </span>
    <button
      type="button"
      class="ml-2 cursor-pointer rounded-full p-1 outline-none"
      :class="[
        props.small ? 'mr-1' : 'mr-2',
        props.light
          ? 'hover:bg-muted-100 active:bg-muted-200 focus-visible:bg-muted-100 !dark:active:bg-muted-500/50 dark:focus-visible:bg-muted-600 dark:hover:bg-muted-600 '
          : 'hover:bg-muted-300 active:bg-muted-400/50 focus-visible:bg-muted-300 !dark:active:bg-muted-500/50 dark:focus-visible:bg-muted-600 dark:hover:bg-muted-600 ',
      ]"
      @click="emit('delete')"
    >
      <IconClose class="h-4 w-4 text-muted-600 dark:text-muted-300" />
    </button>
  </div>
</template>
