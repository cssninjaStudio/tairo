import type { Component } from 'vue'
import {
  LazyPanelActivity,
  LazyPanelLanguage,
  LazyPanelSearch,
} from '#components'

export interface LayoutPanel {
  name: string
  component: Component
  position: 'right' | 'left'
}

export const usePanels = () => {
  const panels = [
    {
      name: 'language',
      position: 'right',
      component: LazyPanelLanguage,
    },
    {
      name: 'activity',
      position: 'right',
      component: LazyPanelActivity,
    },
    {
      name: 'search',
      position: 'left',
      component: LazyPanelSearch,
    },
  ] as const

  type LayoutPanelNames = typeof panels[number]['name']

  const activePanelName = useState('panels-active', () => '')
  const panelTransitionFrom = useState('panels-transition-from', () => 'left')

  const activePanel = computed(() => {
    if (!activePanelName.value) {
      return undefined
    }

    return panels.find((panel) => panel.name === activePanelName.value)
  })

  function openPanel(name: LayoutPanelNames) {
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
