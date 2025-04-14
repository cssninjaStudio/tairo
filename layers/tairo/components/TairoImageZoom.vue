<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  src?: string
  srcDark?: string
  zoomSrc?: string
  zoomSrcDark?: string
}>()

const initialSize = ref<{
  top: number
  left: number
  width: number
  height: number
}>({
  top: 0,
  left: 0,
  width: 0,
  height: 0,
})

const modalRef = useTemplateRef<HTMLElement>('modalRef')
const buttonRef = useTemplateRef<HTMLElement>('buttonRef')
const isZoomed = ref(false)
const isUnzooming = ref(false)

let y = 0

function wheelListener(event: WheelEvent) {
  if (event.ctrlKey)
    return
  event.stopPropagation()

  y += event.deltaY
  if (modalRef.value) {
    modalRef.value.style.transform = `translateY(${-y}px)`
  }

  unzoom()
}

function resizeListener() {
  if (!isZoomed.value)
    return
  if (!buttonRef.value)
    return

  const { top, left, width, height } = buttonRef.value.getBoundingClientRect()
  initialSize.value = { top, left, width, height }
}

function keydownListener(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    event.stopPropagation()
    unzoom()
  }
}

let touchstartScreenY = 0
function touchstartListener(event: TouchEvent) {
  if (!event.changedTouches[0]) {
    return
  }
  event.stopPropagation()
  touchstartScreenY = event.changedTouches[0]?.screenY
}

function touchmoveListener(event: TouchEvent) {
  if (!event.changedTouches[0]) {
    return
  }
  event.stopPropagation()

  y = touchstartScreenY - event.changedTouches[0]?.screenY

  if (modalRef.value) {
    modalRef.value.style.transform = `translateY(${-y}px)`
  }

  unzoom()
}

function zoom() {
  if (isZoomed.value)
    return

  isZoomed.value = true
  isUnzooming.value = false

  attachZoomEvents()
}
function unzoom() {
  if (!isZoomed.value)
    return

  isZoomed.value = false
  isUnzooming.value = true

  if (modalRef.value) {
    modalRef.value.style.top = `${initialSize.value.top}px`
    modalRef.value.style.left = `${initialSize.value.left}px`
    modalRef.value.style.width = `${initialSize.value.width}px`
    modalRef.value.style.height = `${initialSize.value.height}px`

    modalRef.value.addEventListener('transitionend', detachZoomEvents, { once: true })
  }
}
function attachZoomEvents() {
  window.addEventListener('wheel', wheelListener, { passive: true })
  window.addEventListener('resize', resizeListener, { passive: true })
  window.addEventListener('touchstart', touchstartListener, { passive: true })
  window.addEventListener('touchmove', touchmoveListener, { passive: true })
  window.addEventListener('touchend', touchmoveListener, { passive: true })

  document.addEventListener('keydown', keydownListener)
}
function detachZoomEvents() {
  y = 0

  isZoomed.value = false
  isUnzooming.value = false

  window.removeEventListener('wheel', wheelListener)
  window.removeEventListener('resize', resizeListener)
  window.removeEventListener('touchstart', touchstartListener)
  window.removeEventListener('touchmove', touchmoveListener)
  window.removeEventListener('touchend', touchmoveListener)

  document.removeEventListener('keydown', keydownListener)

  modalRef.value?.removeEventListener('transitionend', detachZoomEvents)
}

function handleClick() {
  if (!buttonRef.value) {
    return
  }

  if (isZoomed.value) {
    return
  }

  // Get the initial screen position of the image
  const { top, left, width, height } = buttonRef.value.getBoundingClientRect()
  initialSize.value = { top, left, width, height }

  zoom()
}
function onBeforeEnter(el: HTMLElement) {
  el.style.top = `${initialSize.value.top}px`
  el.style.left = `${initialSize.value.left}px`
  el.style.width = `${initialSize.value.width}px`
  el.style.height = `${initialSize.value.height}px`
  el.style.willChange = 'top, left, width, height'
}
function onEnter(el: HTMLElement, done: () => void) {
  // Add a task to the event loop to allow the browser to apply the styles
  setTimeout(() => {
    el.style.top = '3rem'
    el.style.left = '3rem'
    el.style.width = 'calc(100vw - 6rem)'
    el.style.height = 'calc(100vh - 6rem)'
    done()
  }, 0)
}

onBeforeUnmount(() => {
  detachZoomEvents()
})
</script>

<template>
  <div class="relative">
    <a
      ref="buttonRef"
      role="button"
      class="block cursor-zoom-in"
      tabindex="0"
      :class="[isZoomed ? 'outline-none' : 'focus-visible:nui-focus']"
      @click="() => handleClick()"
      @keydown.enter="() => handleClick()"
    >
      <img
        class="block w-full transition-all duration-300 dark:hidden"
        :src="props.src"
        v-bind="$attrs"
      >

      <img
        class="hidden w-full transition-all duration-300 dark:block"
        :src="props.srcDark || props.src"
        v-bind="$attrs"
      >
    </a>

    <Teleport to="body">
      <Transition
        enter-active-class="transition-all duration-300 ease-in-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-300 ease-in-out"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isZoomed"
          role="button"
          tabindex="0"
          class="dark:bg-muted-900 fixed inset-0 z-[9999] bg-white"
          @click="unzoom"
        />
      </Transition>
      <Transition
        @before-enter="(el) => onBeforeEnter(el as HTMLElement)"
        @enter="(el, done) => onEnter(el as HTMLElement, done)"
        @leave-cancelled="detachZoomEvents"
        @enter-cancelled="detachZoomEvents"
      >
        <a
          v-if="isZoomed || isUnzooming"
          ref="modalRef"
          role="button"
          tabindex="0"
          class="fixed z-[99999] flex cursor-zoom-out select-none items-center justify-center transition-[height,width,top,left] duration-300"
          @click="unzoom"
          @keydown.enter="() => unzoom()"
        >
          <FocusScope trapped class="flex size-full items-center justify-center">
            <img
              class="focus-visible:nui-focus block max-h-full max-w-full object-contain dark:hidden"
              :src="props.zoomSrc || props.src"
              v-bind="$attrs"
              tabindex="0"
            >

            <img
              class="focus-visible:nui-focus hidden max-h-full max-w-full object-contain dark:block"
              :src="props.zoomSrcDark || props.srcDark || props.zoomSrc || props.src"
              v-bind="$attrs"
              tabindex="0"
            >
          </FocusScope>
        </a>
      </Transition>
    </Teleport>
  </div>
</template>
