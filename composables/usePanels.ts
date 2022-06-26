import type { Component } from 'vue'
// import {
//   LazyPanelActivity,
//   LazyPanelLanguage,
//   LazyPanelSearch,
// } from '~~/.nuxt/components'

import PanelActivity from '~~/components/panel/Activity.vue'
import PanelLanguage from '~~/components/panel/Language.vue'
import PanelSearch from '~~/components/panel/Search.vue'

export interface LayoutPanel {
  name: string
  component: Component
  position: 'right' | 'left'
}

const panels = [
  {
    name: 'language',
    position: 'right',
    component: PanelLanguage,
  },
  {
    name: 'activity',
    position: 'right',
    component: PanelActivity,
  },
  {
    name: 'search',
    position: 'left',
    component: PanelSearch,
  },
] as const

type LayoutPanelNames = typeof panels[number]['name']

export const usePanels = createSharedComposable(() => {
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
