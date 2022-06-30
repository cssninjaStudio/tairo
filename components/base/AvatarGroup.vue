<script setup lang="ts">
import type { AvatarProps } from './Avatar.vue'

export type AvatarGroupSizes = 'xs' | 'sm' | 'md' | 'lg'

export interface VAvatarStackProps {
  limit?: number
  size?: AvatarGroupSizes
  avatars?: AvatarProps[]
}

const props = withDefaults(defineProps<VAvatarStackProps>(), {
  limit: 4,
  size: undefined,
  avatars: () => [],
})
</script>

<template>
  <div class="flex">
    <slot>
      <BaseAvatar
        v-for="(avatar, index) in avatars.slice(0, props.limit)"
        :key="index"
        :size="props.size"
        :picture="avatar.picture"
        class="border-white dark:border-slate-800"
        :class="[
          props.size === 'xs' && '-ml-2 border-2',
          props.size === 'sm' && '-ml-3 border-2',
          props.size === 'md' && '-ml-4 border-4',
          props.size === 'lg' && '-ml-5 border-4',
        ]"
      />
      <div
        v-if="avatars.length > props.limit"
        class="inline-flex justify-center items-center relative rounded-full bg-slate-200 dark:bg-slate-700 border-white dark:border-slate-800"
        :class="[
          props.size === 'xs' && 'w-8 h-8 -ml-2 border-2',
          props.size === 'sm' && 'w-10 h-10 -ml-3 border-2',
          props.size === 'md' && 'w-12 h-12 -ml-4 border-4',
          props.size === 'lg' && 'w-16 h-16 -ml-5 border-4',
        ]"
      >
        <span
          class="font-text uppercase text-slate-500 dark:text-slate-300 font-normal -ml-1"
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
