import type { InjectionKey } from 'vue'

interface LayoutCollapseContext {
  isCollapsed: Ref<boolean>
  isMobileOpen: Ref<boolean>
  toggleMobileNav: () => void
}

const LayoutCollapseContextSymbol = Symbol('LayoutCollapseContext') as InjectionKey<LayoutCollapseContext>

export function createLayoutCollapseContext(): LayoutCollapseContext {
  const { xl } = useTailwindBreakpoints()
  const isCollapsed = ref(false)
  const isMobileOpen = ref(false)

  watch(xl, (value) => {
    if (value) {
      isMobileOpen.value = false
    }
  })

  const context = {
    isCollapsed,
    isMobileOpen,
    toggleMobileNav() {
      isCollapsed.value = false
      isMobileOpen.value = !isMobileOpen.value
    },
  }
  provide(LayoutCollapseContextSymbol, context)
  return context
}

export function useLayoutCollapseContext() {
  const context = inject(LayoutCollapseContextSymbol)
  if (!context) {
    throw new Error('useLayoutCollapseContext: Should be used inside <TairoCollapseLayout> component')
  }
  return context
}
