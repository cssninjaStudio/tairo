import type { InjectionKey } from 'vue'

interface LayoutSidenavContext {
  isCollapsed: Ref<boolean>
  isMobileOpen: Ref<boolean>
  toggleMobileNav: () => void
}

const LayoutSidenavContextSymbol = Symbol('LayoutSidenavContext') as InjectionKey<LayoutSidenavContext>

export function createLayoutSidenavContext(): LayoutSidenavContext {
  const isCollapsed = ref(false)
  const isMobileOpen = ref(false)
  const context = {
    isCollapsed,
    isMobileOpen,
    toggleMobileNav() {
      isMobileOpen.value = !isMobileOpen.value
    },
  }
  provide(LayoutSidenavContextSymbol, context)
  return context
}

export function useLayoutSidenavContext() {
  const context = inject(LayoutSidenavContextSymbol)
  if (!context) {
    throw new Error('useLayoutSidenavContext: Should be used inside <TairoSidenavLayout> component')
  }
  return context
}
