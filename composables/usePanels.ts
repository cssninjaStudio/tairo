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

export const usePanels = createSharedComposable(() => {
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

  const activePanel = shallowRef<LayoutPanel | null>(null)
  const panelTransitionFrom = ref('left')

  function openPanel(name: LayoutPanelNames) {
    const panel = panels.find(({ name: panelName }) => panelName === name)
    if (panel) {
      panelTransitionFrom.value = panel.position
      activePanel.value = panel
    }
  }
  function closePanel() {
    activePanel.value = null
  }

  return {
    panels: markRaw(panels), // markRaw is used to prevent Vue to set reactive if used in template
    activePanel,
    panelTransitionFrom,
    openPanel,
    closePanel,
  }
})
