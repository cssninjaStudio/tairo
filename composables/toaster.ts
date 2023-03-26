import type { TairoToaster } from '#components'
import type {
  DefaultProps,
  NinjaToasterBaseProps,
} from '@cssninja/nuxt-toaster'

type TairoToasterProps = Omit<
  InstanceType<typeof TairoToaster>['$props'],
  keyof DefaultProps
>

export function useToaster() {
  const $nt = useNinjaToaster()

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
