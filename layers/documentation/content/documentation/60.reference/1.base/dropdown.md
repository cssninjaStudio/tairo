---
title: BaseDropdown
components:
  - BaseDropdown
  - BaseDropdownItem
  - BaseDropdownDivide
description: Dropdowns are used to display multiple options after a user interaction. Customize how they look and feel using the available props.
icon:
  src: /img/illustrations/components/dropdown-icon.svg
  srcDark: /img/illustrations/components/dropdown-icon.svg
---

::doc-component-demo
---
title: Dropdown left
demo: '#examples/dropdown/button-left.vue'
---
Dropdowns have button shapes and are left aligned by default. Here is an example of a default dropdown button.
::

::doc-component-demo
---
title: Dropdown right
demo: '#examples/dropdown/button-right.vue'
---
Dropdowns can also be right aligned. Use the `orientation` prop to change the alignment of the dropdown.
::

::doc-component-demo
---
title: Compact menu
demo: '#examples/dropdown/compact.vue'
---
Dropdowns menus can have a smaller width. Use the `compact` prop to change the width of the dropdown menu.
::

::doc-component-demo
---
title: Context left
demo: '#examples/dropdown/context-left.vue'
---
Dropdowns can be used as context menus. Use the `flavor` prop with the `context` value to change the dropdown to a context menu.
::

::doc-component-demo
---
title: Context right
demo: '#examples/dropdown/context-right.vue'
---
Dropdowns can be used as context menus. You can also align it to the right using the `orientation` prop.
::

::doc-component-demo
---
title: Text left
demo: '#examples/dropdown/text-left.vue'
---
Dropdowns can also be used as text menus. Use the `flavor` prop with the `text` value to change the dropdown to a text menu.
::

::doc-component-demo
---
title: Text right
demo: '#examples/dropdown/text-right.vue'
---
Dropdowns can also be used as text menus. Use the `flavor` prop with the `text` value to change the dropdown to a text menu.
::

::doc-component-demo
---
title: Icon slot
demo: '#examples/dropdown/icon-slot.vue'
---
Dropdowns items can have an icon. Use the `start` slot to add an icon to the dropdown item.
::

::doc-component-demo
---
title: Avatar slot
demo: '#examples/dropdown/avatar-slot.vue'
---
Dropdowns items can have an avatar. Use the `start` slot to add an icon to the dropdown item.
::

::doc-component-demo
---
title: Menu header
demo: '#examples/dropdown/header.vue'
---
Dropdowns menus can have a header. Use the `headerLabel` prop to add a header text to the dropdown menu.
::

:doc-component-meta{name="BaseDropdown"}
:doc-component-meta{name="BaseDropdownItem"}
:doc-component-meta{name="BaseDropdownDivide"}