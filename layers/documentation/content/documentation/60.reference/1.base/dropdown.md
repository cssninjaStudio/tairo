---
title: BaseDropdown
components:
  - BaseDropdown
  - BaseDropdownItem
  - BaseDropdownDivider
description: Dropdowns are used to display multiple options after a user interaction. Customize how they look and feel using the available props.
icon:
  src: /img/illustrations/components/dropdown-icon.svg
  srcDark: /img/illustrations/components/dropdown-icon.svg
---

::doc-component-demo
---
title: Size
demo: '#examples/dropdown/button-left.vue'
---
Dropdowns have button shapes and are left aligned by default. Dropdown menu can also have different widths using the `size` prop.
::

::doc-component-demo
---
title: Contrast
demo: '#examples/dropdown/contrast.vue'
---
Dropdowns menus can have a darker color in dark mode. Use the `color` prop to change the contrast of the dropdown menu when in dark mode.
::

::doc-component-demo
---
title: Button:color
demo: '#examples/dropdown/button-color.vue'
---
Dropdowns buttons can have different colors. Use the `button-color` prop to change the dropdown button color.
::

::doc-component-demo
---
title: Button:end
demo: '#examples/dropdown/button-right.vue'
---
Dropdowns can also be right aligned. Use the `orientation` prop to change the alignment of the dropdown.
::

::doc-component-demo
---
title: Context:start
demo: '#examples/dropdown/context-left.vue'
---
Dropdowns can be used as context menus. Use the `variant` prop with the `context` value to change the dropdown to a context menu.
::

::doc-component-demo
---
title: Context:end
demo: '#examples/dropdown/context-right.vue'
---
Dropdowns can be used as context menus. You can also align it to the `end` using the `orientation` prop.
::

::doc-component-demo
---
title: Text:start
demo: '#examples/dropdown/text-left.vue'
---
Dropdowns can also be used as text menus. Use the `variant` prop with the `text` value to change the dropdown to a text menu.
::

::doc-component-demo
---
title: Text:end
demo: '#examples/dropdown/text-right.vue'
---
Dropdowns can also be used as text menus. Use the `variant` prop with the `text` value to change the dropdown to a text menu.
::

::doc-component-demo
---
title: Slot:icon
demo: '#examples/dropdown/icon-slot.vue'
---
Dropdowns items can have an icon. Use the `start` slot to add an icon to the dropdown item.
::

::doc-component-demo
---
title: Slot:avatar
demo: '#examples/dropdown/avatar-slot.vue'
---
Dropdowns items can have an avatar. Use the `start` slot to add an icon to the dropdown item.
::

::doc-component-demo
---
title: Slot:header
demo: '#examples/dropdown/header.vue'
---
Dropdowns menus can have a header. Use the `headerLabel` prop to add a header text to the dropdown menu.
::

:doc-component-meta{name="BaseDropdown"}
:doc-component-meta{name="BaseDropdownItem"}
:doc-component-meta{name="BaseDropdownDivider"}