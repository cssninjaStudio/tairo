---
title: BaseButtonAction
components:
  - BaseButtonAction
description: Use actions to interact within or to navigate to a new page. Explore the different button types and their variations.
icon:
  src: /img/illustrations/components/button-icon.svg
  srcDark: /img/illustrations/components/button-icon.svg
---

::doc-component-demo
---
title: Buttons shapes
demo: '#examples/action/shapes.vue'
---
Buttons are an essential part of any application. Actions can have different shapes using the `shape` prop.
:::doc-message{type="muted" icon="ion:shapes-outline"}
Default shape of all :doc-linker{to="BaseButtonAction"} can be set in your `app.config.ts`.
:::
::

::doc-component-demo
---
title: Primary color
demo: '#examples/action/primary.vue'
---
Actions can have different colors. The following example shows a `primary` button.
::

::doc-component-demo
---
title: Muted color
demo: '#examples/action/muted.vue'
---
Actions can have different colors. The following example shows a `muted` button.
::

::doc-component-demo
---
title: Loading state
demo: '#examples/action/loading.vue'
---
Actions can be shown in a loading state. Use the `loading` prop to show a loading indicator.
::

::doc-component-demo
---
title: Actions group
demo: '#examples/action/group.vue'
---
Actions can be grouped into a single element using a flex container. Adjust border radiuses and borders to create a seamless group.
::

:doc-component-meta{name="BaseButtonAction"}