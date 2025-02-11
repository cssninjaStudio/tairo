import type { InjectionKey } from 'vue'

interface LayoutTopnavContext {
  isMobileOpen: Ref<boolean>
  currentTrigger: Ref<string>
}

const LayoutTopnavContextSymbol = Symbol('LayoutTopnavContext') as InjectionKey<LayoutTopnavContext>

export function createLayoutTopnavContext(): LayoutTopnavContext {
  const isMobileOpen = ref(false)
  const currentTrigger = ref('')
  const context = {
    isMobileOpen,
    currentTrigger,
  }
  provide(LayoutTopnavContextSymbol, context)
  return context
}

export function useLayoutTopnavContext() {
  const context = inject(LayoutTopnavContextSymbol)
  if (!context) {
    throw new Error('You need to create the context first using the createLayoutTopnavContext() function')
  }
  return context
}
