import type { Component, ConcreteComponent } from 'vue'
import type { TairoPanelConfig } from '../nuxt.schema'

export interface LayoutPanel {
  name: string
  component: Component | ConcreteComponent | string
  position: 'right' | 'left'
}

export const usePanels = () => {
  const app = useAppConfig()

  const panels =
    (app.tairo?.panels as TairoPanelConfig[]).map((panel) => {
      const item: LayoutPanel = {
        name: panel.name,
        position: panel.position ?? 'left',
        component: resolveComponent(panel.component),
      }
      return item
    }) ?? []

  const activePanelName = useState('panels-active', () => '')
  const panelTransitionFrom = useState('panels-transition-from', () => 'left')

  const activePanel = computed(() => {
    if (!activePanelName.value) {
      return undefined
    }

    return panels.find((panel) => panel.name === activePanelName.value)
  })

  function openPanel(name: string) {
    const panel = panels.find(({ name: panelName }) => panelName === name)
    if (panel) {
      panelTransitionFrom.value = panel.position
      activePanelName.value = panel.name
    }
  }
  function closePanel() {
    activePanelName.value = ''
  }

  return {
    panels: markRaw(panels), // markRaw is used to prevent Vue to set reactive if used in template
    activePanel,
    panelTransitionFrom,
    openPanel,
    closePanel,
  }
}
