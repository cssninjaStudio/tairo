---
title: BaseDropdown
components:
  - BaseDropdown
  - BaseDropdownItem
  - BaseDropdownDivider
description: Dropdown are used to display multiple options after a user interaction. Customize how they look and feel using the available props.
icon:
  src: /img/illustrations/components/dropdown-icon.svg
  srcDark: /img/illustrations/components/dropdown-icon.svg
---

::doc-component-demo
---
title: Size
demo: '#examples/dropdown/button-left.vue'
---
Dropdown have button shapes and are left aligned by default. Dropdown menu can also have different widths using the `size` prop.
::

::doc-component-demo
---
title: Contrast
demo: '#examples/dropdown/contrast.vue'
---
Dropdown menus can have a darker color in dark mode. Use the `color` prop to change the contrast of the dropdown menu when in dark mode.
::

::doc-component-demo
---
title: Button:color
demo: '#examples/dropdown/button-color.vue'
---
Dropdown buttons can have different colors. Use the `button-color` prop to change the dropdown button color.
::

::doc-component-demo
---
title: Button:end
demo: '#examples/dropdown/button-right.vue'
---
Dropdown can also be right aligned. Use the `orientation` prop to change the alignment of the dropdown.
::

::doc-component-demo
---
title: Context:start
demo: '#examples/dropdown/context-left.vue'
---
Dropdown can be used as context menus. Use the `variant` prop with the `context` value to change the dropdown to a context menu.
::

::doc-component-demo
---
title: Context:end
demo: '#examples/dropdown/context-right.vue'
---
Dropdown can be used as context menus. You can also align it to the `end` using the `orientation` prop.
::

::doc-component-demo
---
title: Text:start
demo: '#examples/dropdown/text-left.vue'
---
Dropdown can also be used as text menus. Use the `variant` prop with the `text` value to change the dropdown to a text menu.
::

::doc-component-demo
---
title: Text:end
demo: '#examples/dropdown/text-right.vue'
---
Dropdown can also be used as text menus. Use the `variant` prop with the `text` value to change the dropdown to a text menu.
::

::doc-component-demo
---
title: Slot:icon
demo: '#examples/dropdown/icon-slot.vue'
---
Dropdown items can have an icon. Use the `start` slot to add an icon to the dropdown item.
::

::doc-component-demo
---
title: Slot:avatar
demo: '#examples/dropdown/avatar-slot.vue'
---
Dropdown items can have an avatar. Use the `start` slot to add an icon to the dropdown item.
::

::doc-component-demo
---
title: Slot:header
demo: '#examples/dropdown/header.vue'
---
Dropdown menus can have a header. Use the `headerLabel` prop to add a header text to the dropdown menu.
::

::doc-component-demo
---
title: Checkbox item
demo: '#examples/dropdown/checkbox-item.vue'
---
Dropdown items can be enhanced into a checkbox wrapping them with a using a `BaseCheckboxHeadless` component as well the `start` item slot prop to add an inner `BaseCheckbox`.
::

::doc-component-demo
---
title: Radio item
demo: '#examples/dropdown/radio-item.vue'
---
Dropdown items can be enhanced into a radio button wrapping them with a using a `BaseRadioHeadless` component as well the `start` item slot prop to add an inner `BaseRadio`.
::

::doc-component-demo
---
title: Switch item
demo: '#examples/dropdown/switch-item.vue'
---
Dropdown items can be enhanced into a switch wrapping them with a using a `BaseCheckboxHeadless` component as well the `start` item slot prop to add an inner `BaseSwitchThin`.
::

::doc-component-demo
---
title: Switch ball item
demo: '#examples/dropdown/switch-ball-item.vue'
---
Dropdown items can be enhanced into a switch wrapping them with a using a `BaseCheckboxHeadless` component as well the `start` item slot prop to add an inner `BaseSwitchBall`.
::

::doc-component-demo
---
title: Search item
demo: '#examples/dropdown/search-item.vue'
---
Dropdown menus and items can be heavily customized, using wrapping elements, scrolling areas, as well as search and actions.
::

:doc-component-meta{name="BaseDropdown"}
:doc-component-meta{name="BaseDropdownItem"}
:doc-component-meta{name="BaseDropdownDivider"}