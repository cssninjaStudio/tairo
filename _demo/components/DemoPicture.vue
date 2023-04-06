<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'straight' | 'rounded' | 'curved'
    src?: string
    srcDark?: string
    alt?: string
    width: number
    height: number
    loading?: boolean
  }>(),
  {
    shape: 'rounded',
    src: undefined,
    srcDark: undefined,
    alt: undefined,
  },
)
</script>

<template>
  <div class="relative">
    <img
      :src="$props.src"
      class="w-full object-cover"
      :alt="$props.alt"
      :width="props.width"
      :height="props.height"
      :class="[
        props.srcDark && 'block dark:hidden',
        props.shape === 'rounded' ? 'rounded-md' : '',
        props.shape === 'curved' ? 'rounded-xl' : '',
      ]"
    />
    <img
      v-if="props.srcDark"
      :src="$props.srcDark"
      class="hidden w-full object-cover dark:block"
      :alt="$props.alt"
      :width="props.width"
      :height="props.height"
      :class="[
        props.shape === 'rounded' ? 'rounded-md' : '',
        props.shape === 'curved' ? 'rounded-xl' : '',
      ]"
    />
    <div
      v-if="props.loading"
      class="dark absolute inset-x-0 bottom-8 flex items-center justify-center px-6"
    >
      <BaseProgress size="xs" inderterminate />
    </div>
  </div>
</template>
