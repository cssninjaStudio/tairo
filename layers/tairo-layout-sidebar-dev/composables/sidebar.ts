import type { InjectionKey } from 'vue'

interface LayoutSidebarContext {
  isOpen: Ref<boolean>
  currentMenu: Ref<string>
  currentMenuName: Ref<string>
}

const LayoutSidebarContextSymbol = Symbol('LayoutSidebarContext') as InjectionKey<LayoutSidebarContext>

export function createLayoutSidebarContext(): LayoutSidebarContext {
  const isOpen = ref(false)
  const currentMenu = ref('dashboards')
  const currentMenuName = ref('Dashboards')
  const context = {
    isOpen,
    currentMenu,
    currentMenuName,
  }
  provide(LayoutSidebarContextSymbol, context)
  return context
}

export function useLayoutSidebarContext() {
  const context = inject(LayoutSidebarContextSymbol)
  if (!context) {
    throw new Error('You need to create the context first using the useLayoutSidebarContext() function')
  }
  return context
}
