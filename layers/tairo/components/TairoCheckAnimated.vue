<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The color of the icon.
     */
    color?: 'primary' | 'info' | 'success' | 'warning' | 'danger'

    /**
     * The size of the icon.
     */
    size?: 'xs' | 'sm' | 'md' | 'lg'
  }>(),
  {
    color: 'success',
    size: 'md',
  },
)

const strokeWidth = computed(() => {
  if (props.size === 'xs' || props.size === 'sm') {
    return '4'
  }
  else {
    return '2'
  }
})
</script>

<template>
  <svg
    class="nui-check-animated"
    :class="[
      props.color === 'info' && 'text-info-500',
      props.color === 'success' && 'text-success-500',
      props.color === 'primary' && 'text-primary-500',
      props.color === 'warning' && 'text-warning-500',
      props.color === 'danger' && 'text-destructive-500',
      props.size === 'xs' && 'size-8',
      props.size === 'sm' && 'size-10',
      props.size === 'md' && 'size-12',
      props.size === 'lg' && 'size-14',
    ]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
    stroke-miterlimit="10"
    :stroke-width="strokeWidth"
  >
    <circle
      class="nui-check-animated-circle"
      :class="[
        props.color === 'info' && 'text-info-500',
        props.color === 'success' && 'text-success-500',
        props.color === 'primary' && 'text-primary-500',
      ]"
      cx="26"
      cy="26"
      r="25"
      fill="none"
      stroke-dasharray="166"
      stroke-dashoffset="166"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
    />
    <path
      class="nui-check-animated-check"
      fill="none"
      d="M14.1 27.2l7.1 7.2 16.7-16.8"
      stroke-width="4"
      stroke-dasharray="48"
      stroke-dashoffset="48"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
