<script lang="ts">
import type { PropType } from 'vue'
import type { KeyFilter } from '@vueuse/core'

export default defineComponent({
  props: {
    as: {
      type: String,
      default: 'div',
    },
    nextKeys: {
      type: [Array, String] as PropType<KeyFilter>,
      default: () => ['ArrowRight'],
    },
    prevKeys: {
      type: [Array, String] as PropType<KeyFilter>,
      default: () => ['ArrowLeft'],
    },
    prevent: {
      type: Boolean,
    },
  },
  setup(props, { slots }) {
    const wrapper = ref<HTMLElement>()
    const focusableItems = new Map<number, HTMLElement>()
    let focusActiveIndex: number | null = null
    let focusLoopLength = 0

    function checkFocusables() {
      if (!process.server && wrapper.value) {
        const treeWalker = document.createTreeWalker(
          wrapper.value,
          NodeFilter.SHOW_ELEMENT,
          {
            acceptNode(node: HTMLElement) {
              // @ts-expect-error disabled may not be defined
              if (node.disabled) {
                return NodeFilter.FILTER_SKIP
              }
              return node.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP
            },
          }
        )

        let index = 0
        focusableItems.clear()

        while (treeWalker.nextNode()) {
          const node = treeWalker.currentNode as HTMLElement
          const currentIndex = index
          focusableItems.set(index, node as HTMLElement)

          // @todo: handle remove listeners
          node.addEventListener('focus', () => {
            focusActiveIndex = currentIndex
          })
          node.addEventListener('focusout', () => {
            focusActiveIndex = null
          })

          focusLoopLength = index
          index += 1
        }
      }
    }

    onUpdated(checkFocusables)
    onMounted(checkFocusables)

    onKeyStroke(props.nextKeys as KeyFilter, (event) => {
      if (focusActiveIndex !== null) {
        if (props.prevent) {
          event.preventDefault()
        }

        if (focusActiveIndex + 1 <= focusLoopLength) {
          focusableItems.get(focusActiveIndex + 1)?.focus()
        } else {
          focusableItems.get(0)?.focus()
        }
      }
    })

    onKeyStroke(props.prevKeys as KeyFilter, (event) => {
      if (focusActiveIndex !== null) {
        if (props.prevent) {
          event.preventDefault()
        }

        if (focusActiveIndex > 0) {
          focusableItems.get(focusActiveIndex - 1)?.focus()
        } else {
          focusableItems.get(focusLoopLength)?.focus()
        }
      }
    })

    return () => h(props.as, { ref: wrapper }, slots?.default?.())
  },
})
</script>