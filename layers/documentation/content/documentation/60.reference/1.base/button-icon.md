---
title: BaseButtonIcon
components:
  - BaseButtonIcon
description: Use icon buttons to interact within or to navigate to a new page. Explore the different button types and their variations.
icon:
  src: /img/illustrations/components/button-action-icon.svg
  srcDark: /img/illustrations/components/button-action-icon.svg
---

::doc-component-demo
---
title: Buttons shapes
demo: '#examples/icon-button/shapes.vue'
---
Icon buttons are a quick and visual way to express an action. Icon buttons can have different shapes using the `shape` prop.
:::doc-message{type="muted" icon="ion:shapes-outline"}
Default shape of all :doc-linker{to="BaseButtonIcon"} can be set in your `app.config.ts`.
:::
::

::doc-component-demo
---
title: Small buttons
demo: '#examples/icon-button/small.vue'
---
Icon buttons can have a smaller size using the `condensed` prop.
::

::doc-component-demo
---
title: Primary color
demo: '#examples/icon-button/primary.vue'
---
Icon buttons can have different colors. The following example shows a `primary` button, using the `color` prop.
::

::doc-component-demo
---
title: Muted color
demo: '#examples/icon-button/muted.vue'
---
Icon buttons can have different colors. The following example shows a `muted` button, using the `color` prop.
::

::doc-component-demo
---
title: Loading state
demo: '#examples/icon-button/loading.vue'
---
Icon buttons can be shown in a loading state. Use the `loading` prop to show a loading indicator.
::

::doc-component-demo
---
title: Button group
demo: '#examples/icon-button/group.vue'
---
Icon buttons can be grouped into a single element using a flex container. Adjust border radiuses and borders to create a seamless group.
::

:doc-component-meta{name="BaseButtonIcon"}