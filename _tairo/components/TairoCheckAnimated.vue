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
  } else {
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
      props.color === 'danger' && 'text-danger-500',
      props.size === 'xs' && 'h-8 w-8',
      props.size === 'sm' && 'h-10 w-10',
      props.size === 'md' && 'h-12 w-12',
      props.size === 'lg' && 'h-14 w-14',
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

<style scoped>
.nui-check-animated {
  @apply block rounded-full stroke-current overflow-hidden;
  animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
}

.nui-check-animated-circle {
  @apply stroke-current fill-none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.nui-check-animated-check {
  @apply stroke-current fill-none text-white origin-[50%_50%] scale-[0.7];
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px currentColor;
  }
}
</style>
