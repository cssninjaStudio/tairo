<script setup lang="ts">
const props = withDefaults(defineProps<{
  name?: string
  dimension?: 'height' | 'width'
  duration?: number
  easing?: string
}>(), {
  name: 'collapse',
  dimension: 'height',
  duration: 300,
  easing: 'ease-in-out',
})
const emits = defineEmits<{
  beforeAppear: [el: HTMLElement]
  appear: [el: HTMLElement, done: () => void]
  afterAppear: [el: HTMLElement]
  appearCancelled: [el: HTMLElement]
  beforeEnter: [el: HTMLElement]
  enter: [el: HTMLElement, done: () => void]
  afterEnter: [el: HTMLElement]
  enterCancelled: [el: HTMLElement]
  beforeLeave: [el: HTMLElement]
  leave: [el: HTMLElement, done: () => void]
  afterLeave: [el: HTMLElement]
  leaveCancelled: [el: HTMLElement]
}>()

const cachedStyles = ref<Record<string, string | undefined> | null>(null)

const transition = computed(() => {
  const transitions: string[] = []

  if (!cachedStyles.value) {
    return ''
  }

  Object.keys(cachedStyles.value).forEach((key) => {
    transitions.push(
      `${convertToCssProperty(key)} ${props.duration}ms ${props.easing}`,
    )
  })

  return transitions.join(', ')
})

watch(() => props.dimension, () => clearCachedDimensions())

function beforeAppear(el: HTMLElement) {
  // Emit the event to the parent
  emits('beforeAppear', el)
}

function appear(el: HTMLElement, done: () => void) {
  // Emit the event to the parent
  emits('appear', el, done)
}

function afterAppear(el: HTMLElement) {
  // Emit the event to the parent
  emits('afterAppear', el)
}

function appearCancelled(el: HTMLElement) {
  // Emit the event to the parent
  emits('appearCancelled', el)
}

function beforeEnter(el: HTMLElement) {
  // Emit the event to the parent
  emits('beforeEnter', el)
}

function enter(el: HTMLElement, done: () => void) {
  // Because width and height may be 'auto',
  // first detect and cache the dimensions
  detectAndCacheDimensions(el)

  // The order of applying styles is important:
  // - 1. Set styles for state before transition
  // - 2. Force repaint
  // - 3. Add transition style
  // - 4. Set styles for state after transition
  // If the order is not right and you open any 2nd level submenu
  // for the first time, the transition will not work.
  setClosedDimensions(el)
  hideOverflow(el)
  forceRepaint(el)
  setTransition(el)
  setOpenedDimensions(el)

  // Emit the event to the parent
  emits('enter', el, done)

  // Call done() when the transition ends
  // to trigger the @afterEnter event.
  setTimeout(done, props.duration)
}

function afterEnter(el: HTMLElement) {
  // Clean up inline styles
  unsetOverflow(el)
  unsetTransition(el)
  unsetDimensions(el)
  clearCachedDimensions()

  // Emit the event to the parent
  emits('afterEnter', el)
}

function enterCancelled(el: HTMLElement) {
  // Emit the event to the parent
  emits('enterCancelled', el)
}

function beforeLeave(el: HTMLElement) {
  // Emit the event to the parent
  emits('beforeLeave', el)
}

function leave(el: HTMLElement, done: () => void) {
  // For some reason, @leave triggered when starting
  // from open state on page load. So for safety,
  // check if the dimensions have been cached.
  detectAndCacheDimensions(el)

  // The order of applying styles is less important
  // than in the enter phase, as long as we repaint
  // before setting the closed dimensions.
  // But it is probably best to use the same
  // order as the enter phase.
  setOpenedDimensions(el)
  hideOverflow(el)
  forceRepaint(el)
  setTransition(el)
  setClosedDimensions(el)

  // Emit the event to the parent
  emits('leave', el, done)

  // Call done() when the transition ends
  // to trigger the @afterLeave event.
  // This will also cause v-show
  // to reapply 'display: none'.
  setTimeout(done, props.duration)
}

function afterLeave(el: HTMLElement) {
  // Clean up inline styles
  unsetOverflow(el)
  unsetTransition(el)
  unsetDimensions(el)
  clearCachedDimensions()

  // Emit the event to the parent
  emits('afterLeave', el)
}

function leaveCancelled(el: HTMLElement) {
  // Emit the event to the parent
  emits('leaveCancelled', el)
}

function detectAndCacheDimensions(el: HTMLElement) {
  // Cache actual dimensions
  // only once to void invalid values when
  // triggering during a transition
  if (cachedStyles.value)
    return

  const visibility = el.style.visibility
  const display = el.style.display

  // Trick to get the width and
  // height of a hidden element
  el.style.visibility = 'hidden'
  el.style.display = ''

  cachedStyles.value = detectRelevantDimensions(el)

  // Restore any original styling
  el.style.visibility = visibility
  el.style.display = display
}

function clearCachedDimensions() {
  cachedStyles.value = null
}

function detectRelevantDimensions(el: HTMLElement) {
  // These properties will be transitioned
  if (props.dimension === 'height') {
    return {
      height: `${el.offsetHeight}px`,
      paddingTop:
        el.style.paddingTop || getCssValue(el, 'padding-top'),
      paddingBottom:
        el.style.paddingBottom || getCssValue(el, 'padding-bottom'),
    }
  }

  if (props.dimension === 'width') {
    return {
      width: `${el.offsetWidth}px`,
      paddingLeft:
        el.style.paddingLeft || getCssValue(el, 'padding-left'),
      paddingRight:
        el.style.paddingRight || getCssValue(el, 'padding-right'),
    }
  }

  return {}
}

function setTransition(el: HTMLElement) {
  el.style.transition = transition.value
}

function unsetTransition(el: HTMLElement) {
  el.style.transition = ''
}

function hideOverflow(el: HTMLElement) {
  el.style.overflow = 'hidden'
}

function unsetOverflow(el: HTMLElement) {
  el.style.overflow = ''
}

function setClosedDimensions(el: HTMLElement) {
  if (!cachedStyles.value)
    return
  Object.keys(cachedStyles.value).forEach((key) => {
    el.style[key as any] = '0'
  })
}

function setOpenedDimensions(el: HTMLElement) {
  if (!cachedStyles.value)
    return
  Object.keys(cachedStyles.value).forEach((key) => {
    el.style[key as any] = cachedStyles.value![key] as string
  })
}

function unsetDimensions(el: HTMLElement) {
  if (!cachedStyles.value)
    return
  Object.keys(cachedStyles.value).forEach((key) => {
    el.style[key as any] = ''
  })
}

function forceRepaint(el: HTMLElement) {
  // Force repaint to make sure the animation is triggered correctly.
  // Thanks: https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/
  const _style = getComputedStyle(el)[props.dimension as 'height' | 'width']
}

function getCssValue(el: HTMLElement, style: string) {
  return getComputedStyle(el, null).getPropertyValue(style)
}

function convertToCssProperty(style: string) {
  // Example: convert 'paddingTop' to 'padding-top'
  // Thanks: https://gist.github.com/tan-yuki/3450323
  const upperChars = style.match(/([A-Z])/g)

  if (!upperChars) {
    return style
  }

  for (let i = 0, n = upperChars.length; i < n; i++) {
    const char = upperChars[i]
    if (!char) {
      continue
    }

    style = style.replace(
      new RegExp(char),
      `-${char.toLowerCase()}`,
    )
  }

  if (style.slice(0, 1) === '-') {
    style = style.slice(1)
  }

  return style
}
</script>

<template>
  <Transition
    :name="props.name"
    @before-appear="(el) => beforeAppear(el as HTMLElement)"
    @appear="(el, done) => appear(el as HTMLElement, done)"
    @after-appear="(el) => afterAppear(el as HTMLElement)"
    @appear-cancelled="(el) => appearCancelled(el as HTMLElement)"
    @before-enter="(el) => beforeEnter(el as HTMLElement)"
    @enter="(el, done) => enter(el as HTMLElement, done)"
    @after-enter="(el) => afterEnter(el as HTMLElement)"
    @enter-cancelled="(el) => enterCancelled(el as HTMLElement)"
    @before-leave="(el) => beforeLeave(el as HTMLElement)"
    @leave="(el, done) => leave(el as HTMLElement, done)"
    @after-leave="(el) => afterLeave(el as HTMLElement)"
    @leave-cancelled="(el) => leaveCancelled(el as HTMLElement)"
  >
    <slot />
  </Transition>
</template>
