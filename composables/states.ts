export const useSidebarOpened = () =>
  useState<boolean>('sidebar.opened', () => false)
export const useLanguagePanelOpened = () =>
  useState<boolean>('panel.language', () => false)
export const useActivityPanelOpened = () =>
  useState<boolean>('panel.activity', () => false)
export const useSearchPanelOpened = () =>
  useState<boolean>('panel.search', () => false)
export const useCircularMenuOpened = () =>
  useState<boolean>('circular.menu', () => false)
