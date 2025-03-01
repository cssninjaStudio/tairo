import type { InjectionKey } from 'vue'

interface LayoutSidenavContext {
  isCollapsed: Ref<boolean>
  isMobileOpen: Ref<boolean>
}

const LayoutSidenavContextSymbol = Symbol('LayoutSidenavContext') as InjectionKey<LayoutSidenavContext>

export function createLayoutSidenavContext(): LayoutSidenavContext {
  const isCollapsed = ref(false)
  const isMobileOpen = ref(false)
  const context = {
    isCollapsed,
    isMobileOpen,
  }
  provide(LayoutSidenavContextSymbol, context)
  return context
}


export function useLayoutSidenavContext() {
  const context = inject(LayoutSidenavContextSymbol)
  if (!context) {
    throw new Error('You need to create the context first using the createLayoutSidenavContext() function')
  }
  return context
}
