import type { InjectionKey } from 'vue'

interface LayoutSidebarContext {
  isMobileOpen: Ref<boolean>
  currentSubsidebarId: Ref<string | undefined>
}

const LayoutSidebarContextSymbol = Symbol('LayoutSidebarContext') as InjectionKey<LayoutSidebarContext>

export function createLayoutSidebarContext({
  defaultSubsidebarId = '',
  modelValue,
}: {
  defaultSubsidebarId?: string
  modelValue?: Ref<string | undefined>
} = {}): LayoutSidebarContext {
  const isMobileOpen = ref(false)
  const currentSubsidebarId = modelValue !== undefined ? modelValue : ref(defaultSubsidebarId)
  const context = {
    isMobileOpen,
    currentSubsidebarId,
  }
  provide(LayoutSidebarContextSymbol, context)
  return context
}

export function useLayoutSidebarContext() {
  const context = inject(LayoutSidebarContextSymbol)
  if (!context) {
    throw new Error('useLayoutSidebarContext: Should be used inside <TairoSidebarLayout> component')
  }
  return context
}
