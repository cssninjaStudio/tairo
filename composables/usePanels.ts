import type { TairoPanelConfig } from '../nuxt.schema'

export interface LayoutPanel {
  name: string
  component: string
  position: 'right' | 'left'
}

/**
 * Composable to manage panels
 *
 * You can define panels in your app.config.ts
 *
 * ```ts
 * export default defineAppConfig({
 *   tairo: {
 *     panels: [
 *       {
 *         // Unique name of the panel, used to open it
 *         name: 'panel-name',
 *         // The component name of the panel
 *         // It should be registered in the app as a global component
 *         component: 'PanelComponent',
 *         // The position of the panel
 *         position: 'left',
 *       },
 *     ],
 *   },
 * })
 * ```
 *
 * @example
 * ```vue
 * <script setup lang="ts">
 * const { open } = usePanels()
 * </script>
 *
 * <template>
 *   <button @click="open('panel-name')">Open panel</button>
 * </template>
 * ```
 */
export const usePanels = () => {
  const app = useAppConfig()

  const panels = computed(
    () =>
      (app.tairo?.panels as TairoPanelConfig[]).map((panel) => ({
        name: panel.name,
        position: panel.position ?? 'left',
        component: panel.component,
      })) ?? [],
  )

  const currentName = useState('panels-current-name', () => '')

  // we need to know from which side the panel is coming from
  // and preserve it in the state so we can animate it when it's closing
  const transitionFrom = useState('panels-transition-from', () => 'left')

  const current = computed(() => {
    if (!currentName.value) {
      return undefined
    }

    return panels.value.find((panel) => panel.name === currentName.value)
  })

  function open(name: string) {
    const panel = panels.value.find(({ name: panelName }) => panelName === name)
    if (panel) {
      transitionFrom.value = panel.position
      currentName.value = panel.name
    }
  }
  function close() {
    currentName.value = ''
  }

  return {
    panels,
    current,
    transitionFrom,
    open,
    close,
  }
}
