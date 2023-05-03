---
title: BaseInput
components: 
  - BaseInput
description: An input is a form element that allows the user to enter text or numeric data from the keyboard. Explore the available options.
icon:
  src: /img/illustrations/components/input-icon.svg
  srcDark: /img/illustrations/components/input-icon.svg
---

::doc-component-demo
---
title: Input shape
demo: '#examples/input/shapes.vue'
---
Inputs can be customized to show different shapes. The default shape is `rounded`. You can change the shape of all inputs by setting the `shape` property.
:::doc-message{type="muted" icon="ion:shapes-outline"}
Default shape of all :doc-linker{to="BaseInput"} can be set in your `app.config.ts`.
:::
::

::doc-component-demo
---
title: Input icon
demo: '#examples/input/icon.vue'
---
Inputs can have a configurable icon on the left side using the `icon` prop. Make sure to pick meaningful icons for your use case.
::

::doc-component-demo
---
title: Floating labels
demo: '#examples/input/float-label.vue'
---
Inputs can have a material design style floating label using the `labelFloat` prop.
::


::doc-component-demo
---
title: Condensed inputs
demo: '#examples/input/condensed.vue'
---
Inputs can be displayed in a smaller and more compact way using the `condensed` prop.
::

::doc-component-demo
---
title: Colored focus
demo: '#examples/input/focus.vue'
---
Inputs can have a primary colored focus using the `colorFocus` prop.
::

::doc-component-demo
---
title: Loading state
demo: '#examples/input/loading.vue'
---
Inputs can be shown in a loading state using the `loading` prop.
::


::doc-component-demo
---
title: Disabled state
demo: '#examples/input/disabled.vue'
---
Inputs can be shown in a disabled using the `disabled` prop.
::

::doc-component-demo
---
title: Error state
demo: '#examples/input/invalid.vue'
---
Inputs can be shown in an error state using the `error` prop. You can also set a custom error message using the same prop.
::

:doc-component-meta{name="BaseInput"}