<script setup lang="ts">
export type AvatarGroupSizes = 'xs' | 'sm' | 'md' | 'lg'

export interface AvatarGroupItem {
  src?: string
  srcDark?: string
  text?: string
  tooltip?: string
}

export interface AvatarGroupProps {
  limit?: number
  size?: AvatarGroupSizes
  avatars?: (string | AvatarGroupItem)[]
}

const props = withDefaults(defineProps<AvatarGroupProps>(), {
  limit: 4,
  size: 'sm',
  avatars: () => [],
})
</script>

<template>
  <div class="flex">
    <slot>
      <BaseAvatar
        v-for="(avatar, index) in avatars.slice(0, props.limit)"
        :key="typeof avatar === 'string' ? avatar : avatar.src"
        v-bind="typeof avatar === 'string' ? { src: avatar } : avatar"
        :size="props.size"
        tabindex="0"
        class="border-white transition-all duration-100 ease-in dark:border-muted-800"
        :class="[
          props.size === 'xs' &&
            'border-2 hover:-ml-2 hover:mr-2 focus:-ml-2 focus:mr-2',
          index !== 0 &&
            props.size === 'xs' &&
            '-ml-2 hover:-ml-4 hover:mr-2 focus:-ml-4 focus:mr-2',
          props.size === 'sm' && 'border-4 hover:-ml-2 hover:mr-2 focus:mr-2',
          index !== 0 &&
            props.size === 'sm' &&
            '-ml-3 hover:-ml-5 hover:mr-2 focus:-ml-5 focus:mr-2',
          props.size === 'md' && 'border-4 hover:-ml-3 hover:mr-3 focus:mr-3',
          index !== 0 &&
            props.size === 'md' &&
            '-ml-4 hover:-ml-7 hover:mr-3 focus:mr-3',
          props.size === 'lg' && 'border-4 hover:-ml-4 hover:mr-4 focus:mr-4',
          index !== 0 &&
            props.size === 'lg' &&
            '-ml-5 hover:-ml-9 hover:mr-4 focus:-ml-9 focus:mr-4',
        ]"
      />
      <div
        v-if="avatars.length > props.limit"
        class="relative inline-flex items-center justify-center rounded-full border-white bg-muted-200 dark:border-muted-800 dark:bg-muted-700"
        :class="[
          props.size === 'xs' && 'w-8 h-8 -ml-2 border-2',
          props.size === 'sm' && 'w-10 h-10 -ml-3 border-2',
          props.size === 'md' && 'w-12 h-12 -ml-4 border-4',
          props.size === 'lg' && 'w-16 h-16 -ml-5 border-4',
        ]"
      >
        <span
          class="-ml-1 font-sans font-normal uppercase text-muted-500 dark:text-muted-300"
          :class="[
            props.size === 'xs' && 'text-sm',
            props.size === 'sm' && 'text-sm',
            props.size === 'md' && 'text-lg',
            props.size === 'lg' && 'text-xl',
          ]"
        >
          +{{ avatars.length - props.limit }}
        </span>
      </div>
    </slot>
  </div>
</template>
