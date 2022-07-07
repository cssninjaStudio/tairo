<script setup lang="ts">
export type AvatarSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
export type AvatarShape = 'circle' | 'square'
export type AvatarDotColor =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'pink'
  | 'yellow'

export interface AvatarProps {
  src?: string
  srcDark?: string
  badgeSrc?: string
  text?: string
  size?: AvatarSize
  shape?: AvatarShape
  dot?: boolean | AvatarDotColor
}

const props = withDefaults(defineProps<AvatarProps>(), {
  src: undefined,
  srcDark: undefined,
  text: '?',
  badgeSrc: undefined,
  size: 'sm',
  shape: 'circle',
  dot: false,
})
</script>

<template>
  <div
    class="relative inline-flex justify-center items-center outline-none"
    :class="[
      props.size === 'xs' && `w-8 h-8`,
      props.size === 'sm' && `w-10 h-10`,
      props.size === 'md' && `w-12 h-12`,
      props.size === 'lg' && `w-16 h-16`,
      props.size === 'xl' && `w-20 h-20`,
      props.size === '2xl' && `w-24 h-24`,
      props.size === '3xl' && `w-28 h-28`,
      props.size === '4xl' && `w-32 h-32`,
      props.shape === 'circle' && 'rounded-full',
      props.shape === 'square' && props.size === 'xs' && 'rounded-lg',
      props.shape === 'square' && props.size === 'sm' && 'rounded-xl',
      props.shape === 'square' && props.size === 'md' && 'rounded-2xl',
      props.shape === 'square' && props.size === 'lg' && 'rounded-2xl',
      props.shape === 'square' && props.size === 'xl' && 'rounded-3xl',
      props.shape === 'square' && props.size === '2xl' && 'rounded-3xl',
      props.shape === 'square' && props.size === '3xl' && 'rounded-3xl',
      props.shape === 'square' && props.size === '4xl' && 'rounded-3xl',
    ]"
  >
    <div
      class="w-full overflow-hidden text-center"
      :class="[
        props.shape === 'circle' && 'rounded-full',
        props.shape === 'square' && props.size === 'xs' && 'rounded-lg',
        props.shape === 'square' && props.size === 'sm' && 'rounded-xl',
        props.shape === 'square' && props.size === 'md' && 'rounded-2xl',
        props.shape === 'square' && props.size === 'lg' && 'rounded-2xl',
        props.shape === 'square' && props.size === 'xl' && 'rounded-3xl',
        props.shape === 'square' && props.size === '2xl' && 'rounded-3xl',
        props.shape === 'square' && props.size === '3xl' && 'rounded-3xl',
        props.shape === 'square' && props.size === '4xl' && 'rounded-3xl',
      ]"
    >
      <slot>
        <img
          v-if="props.src"
          :src="props.src"
          class="object-cover max-w-full dark:border-transparent shadow-sm"
          :class="[props.srcDark ? 'dark:hidden' : '']"
        />

        <img
          v-if="props.src && props.srcDark"
          :src="props.srcDark"
          class="object-cover max-w-full dark:border-transparent shadow-sm hidden dark:block"
        />

        <span
          v-if="!props.src"
          class="font-heading uppercase font-medium text-center"
          :class="[
            props.size === 'xs' && `text-sm`,
            props.size === 'sm' && `text-sm`,
            props.size === 'md' && `text-sm`,
            props.size === 'lg' && `text-base`,
            props.size === 'xl' && `text-lg`,
            props.size === '2xl' && `text-xl`,
            props.size === '3xl' && `text-2xl`,
            props.size === '4xl' && `text-3xl`,
          ]"
        >
          {{ props.text }}
        </span>
      </slot>
    </div>

    <div
      v-if="'badge' in $slots || props.badgeSrc"
      class="block absolute bg-muted-100 dark:bg-muted-800 rounded-full border-2 border-white dark:border-muted-800 overflow-hidden"
      :class="[
        props.size === 'xs' && `w-4 h-4`,
        props.size === 'sm' && `w-5 h-5`,
        props.size === 'md' && `w-5 h-5`,
        props.size === 'lg' && `w-6 h-6`,
        props.size === 'xl' && `w-8 h-8`,
        props.size === '2xl' && `w-10 h-10`,
        props.size === '3xl' && `w-10 h-10`,
        props.size === '4xl' && `w-12 h-12`,
        props.shape === 'circle' && `right-0 bottom-0`,
        props.shape === 'square' && props.size === 'xs' && `-bottom-1 -right-1`,
        props.shape === 'square' && props.size === 'sm' && `-bottom-1 -right-1`,
        props.shape === 'square' && props.size === 'md' && `-bottom-1 -right-1`,
        props.shape === 'square' && props.size === 'lg' && `-bottom-1 -right-1`,
        props.shape === 'square' && props.size === 'xl' && `-bottom-1 -right-1`,
        props.shape === 'square' &&
          props.size === '2xl' &&
          `-bottom-1.5 -right-1.5`,
        props.shape === 'square' &&
          props.size === '3xl' &&
          `-bottom-1.5 -right-1.5`,
        props.shape === 'square' &&
          props.size === '4xl' &&
          `-bottom-2 -right-2`,
      ]"
    >
      <slot name="badge">
        <img v-if="props.badgeSrc" :src="props.badgeSrc" alt="" />
      </slot>
    </div>

    <span
      v-if="props.dot"
      class="block absolute border border-white rounded-full dark:border-muted-800"
      :class="[
        props.size === 'xs' && `w-2 h-2`,
        props.size === 'sm' && `w-2 h-2`,
        props.size === 'md' && `w-3 h-3`,
        props.size === 'lg' && `w-3 h-3`,
        props.size === 'xl' && `w-4 h-4`,
        props.size === '2xl' && `w-4 h-4`,
        props.size === '3xl' && `w-4 h-4`,
        props.size === '4xl' && `w-4 h-4`,
        props.shape === 'circle' && props.size === 'xs' && `top-0 right-0`,
        props.shape === 'circle' && props.size === 'sm' && `top-0.5 right-0.5`,
        props.shape === 'circle' && props.size === 'md' && `top-0.5 right-0.5`,
        props.shape === 'circle' && props.size === 'lg' && `top-1 right-1`,
        props.shape === 'circle' && props.size === 'xl' && `top-1 right-1`,
        props.shape === 'circle' && props.size === '2xl' && `top-1.5 right-1.5`,
        props.shape === 'circle' && props.size === '3xl' && `top-2 right-2`,
        props.shape === 'circle' && props.size === '4xl' && `top-2.5 right-2.5`,
        props.shape === 'square' &&
          props.size === 'xs' &&
          `-top-0.5 -right-0.5`,
        props.shape === 'square' && props.size === 'sm' && `top-0 right-0`,
        props.shape === 'square' && props.size === 'md' && `top-0 right-0`,
        props.shape === 'square' &&
          props.size === 'lg' &&
          `-top-0.5 -right-0.5 `,
        props.shape === 'square' && props.size === 'xl' && `-top-0 -right-0`,
        props.shape === 'square' && props.size === '2xl' && `-top-0 -right-0`,
        props.shape === 'square' && props.size === '3xl' && `-top-0 -right-0`,
        props.shape === 'square' && props.size === '4xl' && `-top-0 -right-0`,
        (props.dot || props.dot === 'success') && `bg-success-500`,
        props.dot === 'primary' && `bg-primary-500`,
        props.dot === 'info' && `bg-info-500`,
        props.dot === 'warning' && `bg-warning-500`,
        props.dot === 'danger' && `bg-danger-500`,
        props.dot === 'pink' && `bg-pink-500`,
        props.dot === 'yellow' && `bg-yellow-500`,
      ]"
    ></span>
  </div>
</template>
