import type { TairoToaster } from '#components'
import type {
  DefaultProps,
  NinjaToasterBaseProps,
} from '@cssninja/nuxt-toaster'

// This type infer the props of TairoToaster component
type TairoToasterProps = Omit<
  InstanceType<typeof TairoToaster>['$props'],
  keyof DefaultProps
>

export function useToaster() {
  const $nt = useNinjaToaster()

  /**
   * Display a TairoToaster component
   */
  function show(props: TairoToasterProps, options?: NinjaToasterBaseProps) {
    return $nt.showComponent('TairoToaster', {
      props,
      options,
    })
  }

  return {
    show,
    clear: $nt.clear,
    clearAll: $nt.clearAll,
  }
}
