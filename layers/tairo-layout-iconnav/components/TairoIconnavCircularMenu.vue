<script setup lang="ts">
const { y } = useNinjaWindowScroll()
const app = useAppConfig()

const isOpened = ref(false)
const isScrolled = computed(() => {
  if (y.value < 60) {
    isOpened.value = false
  }
  return y.value > 60
})

const toolOffsets = [
  'translate-x-[-6.5em] rtl:translate-x-[6.5em] translate-y-[-0.25em]',
  'translate-x-[-5.75em] rtl:translate-x-[5.75em] translate-y-[3em]',
  'translate-x-[-3.15em] rtl:translate-x-[3.15em] translate-y-[5.5em]',
  'translate-x-[0em] translate-y-[6.5em]',
] as const

const tools = computed(() => {
  return app.tairo.iconnav?.circularMenu?.tools?.slice(0, 4) || []
})
</script>

<template>
  <div
    class="after:bg-primary-600 after:shadow-primary-500/50 dark:after:shadow-muted-800/10 fixed bottom-[0.6em] end-[1em] z-[90] rotate-90 transition-transform duration-300 after:absolute after:end-0 after:top-0 after:block after:size-12 after:rounded-full after:shadow-lg after:transition-transform after:duration-300 after:content-['']"
    :class="[
      isOpened
        ? 'after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)] after:scale-[5.5]'
        : '',
      isScrolled ? '' : 'translate-y-24',
    ]"
  >
    <button
      type="button"
      class="bg-primary-500 shadow-primary-500/50 dark:shadow-muted-800/10 relative z-30 flex size-12 -rotate-90 items-center justify-center rounded-full text-white shadow-lg"
      @click="isOpened = !isOpened"
    >
      <span
        class="relative block size-3 transition-all duration-300"
        :class="isOpened ? 'scale-90 top-0' : '-top-0.5'"
      >
        <span
          class="bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"
          :class="isOpened ? '-rotate-45 top-1' : 'top-0.5'"
        />
        <span
          class="bg-muted-50 absolute top-1/2 block h-0.5 w-full transition-all duration-300"
          :class="isOpened ? 'opacity-0 translate-x-4' : ''"
        />
        <span
          class="bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"
          :class="isOpened ? 'rotate-45 bottom-1.5' : 'bottom-0'"
        />
      </span>
    </button>

    <div>
      <template v-for="(tool, idx) in tools">
        <div
          v-if="tool.component"
          :key="tool.component"
          class="absolute end-[0.2em] top-[0.2em] z-20 flex -rotate-90 items-center justify-center transition-all duration-300"
          :class="isOpened ? toolOffsets[idx] : 'translate-x-0 translate-y-0'"
        >
          <component
            :is="resolveComponentOrNative(tool.component)"
            v-bind="tool.props"
          />
        </div>
      </template>
    </div>
  </div>
</template>
