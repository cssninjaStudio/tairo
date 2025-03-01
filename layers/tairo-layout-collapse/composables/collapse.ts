import type { InjectionKey } from 'vue'

interface LayoutCollapseContext {
  isCollapsed: Ref<boolean>
  isMobileOpen: Ref<boolean>
}

const LayoutCollapseContextSymbol = Symbol('LayoutCollapseContext') as InjectionKey<LayoutCollapseContext>

export function createLayoutCollapseContext(): LayoutCollapseContext {
  const isCollapsed = ref(false)
  const isMobileOpen = ref(false)
  const context = {
    isCollapsed,
    isMobileOpen,
  }
  provide(LayoutCollapseContextSymbol, context)
  return context
}


export function useLayoutCollapseContext() {
  const context = inject(LayoutCollapseContextSymbol)
  if (!context) {
    throw new Error('You need to create the context first using the createLayoutCollapseContext() function')
  }
  return context
}
