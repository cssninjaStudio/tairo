import type { ComponentEmit, ComponentProps } from 'vue-component-type-helpers'

type EventArgs<In, Event> = In extends (event: Event, ...args: infer Args) => void ? Args : void
type ComponentCloseReturn<T> = ComponentEmit<T> extends null ? void : EventArgs<ComponentEmit<T>, 'close'>

interface PanelOptions {
  position?: 'left' | 'right' | 'top' | 'bottom'
  size?: 'sm' | 'md'
  overlay?: boolean
}

interface Panel<T extends object = any> extends PanelOptions {
  component: T
  props?: ComponentProps<T>
  promise: Promise<ComponentCloseReturn<T>>
  resolve: (value: ComponentCloseReturn<T>) => void
  reject: (reason?: any) => void
}

export function usePanels() {
  const panels = useState<Panel[]>('tairo-panels-stack', () => [])
  const transitionFrom = useState('tairo-panels-transition-from', () => 'right')

  const current = computed(() => panels.value[panels.value.length - 1])

  function close() {
    if (current.value) {
      current.value?.resolve([] as any)
      panels.value.pop()
    }
  }
  function resolve(...args: any[]) {
    if (current.value) {
      current.value?.resolve((args ?? []) as any)
      panels.value.pop()
    }
  }

  async function open<T extends object = any>(
    component: T,
    props?: ComponentProps<T>,
    options?: PanelOptions,
  ): Promise<ComponentCloseReturn<T>> {
    const { promise, resolve, reject } = Promise.withResolvers<ComponentCloseReturn<T>>()

    const position = options?.position || 'right'
    if (position !== transitionFrom.value) {
      transitionFrom.value = position
    }

    panels.value.push(<Panel<T>>{
      component: markRaw(component as any),
      props,
      position,
      size: options?.size || 'sm',
      overlay: options?.overlay ?? true,
      promise,
      resolve,
      reject,
    })

    return promise
  }

  return {
    panels,
    current,
    transitionFrom,
    open,
    close,
    resolve,
  }
}
