<script setup lang="ts">
const {
  panels,
  current,
  transitionFrom,
  open,
  close,
  resolve,
} = usePanels()

watch(
  [() => current.value?.component, () => current.value?.overlay],
  ([component, overlay]) => {
    if (component && overlay) {
      document.documentElement.style.overflow = 'hidden'
    }
    else {
      document.documentElement.style.overflow = ''
    }
  },
)
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      :enter-from-class="
        transitionFrom === 'left'
          ? '-translate-x-full rtl:translate-x-full'
          : 'translate-x-full rtl:-translate-x-full'
      "
      leave-active-class="transition-transform duration-300 ease-in"
      :leave-to-class="
        transitionFrom === 'left'
          ? '-translate-x-full rtl:translate-x-full'
          : 'translate-x-full rtl:-translate-x-full'
      "
    >
      <slot
        v-bind="{
          panels,
          current,
          transitionFrom,
          open,
          close,
        }"
      >
        <Suspense>
          <component
            :is="current.component"
            v-if="current?.component"
            v-bind="(current.props as any) || {}"
            class="xs:max-w-full fixed top-0 z-[100] h-full"
            :class="[
              current.position === 'left' ? 'start-0' : 'end-0',

              current.size === 'sm' && 'w-96',
              current.size === 'md' && 'w-[460px]',
            ]"
            @close="resolve"
          />
        </Suspense>
      </slot>
    </Transition>

    <div
      role="button"
      tabindex="0"
      class="bg-muted-800/60 fixed start-0 top-0 z-[99] size-full cursor-pointer transition-opacity duration-300"
      :class="
        current && current.overlay
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      "
      @click="close"
    />
  </Teleport>
</template>
