---
title: BaseSelect
components: 
  - BaseSelect
description: Use the Tairo select form element when you wan to display a mobile friendly selection box. Explore the available customization options.
icon:
  src: /img/illustrations/components/select-icon.svg
  srcDark: /img/illustrations/components/select-icon.svg
---


::doc-component-demo
---
title: Select shapes
demo: '#examples/select/shapes.vue'
---
The select component can have different shapes. Here is an example of a `rounded` select.
:::doc-message{type="muted" icon="ion:shapes-outline"}
Default shape of all :doc-linker{to="BaseSelect"} can be set in your `app.config.ts`.
:::
::


::doc-component-demo
---
title: Icons
demo: '#examples/select/icon.vue'
---
Selects can have a configurable icon on the left side using the `icon` prop. Make sure to pick meaningful icons for your use case.
::


::doc-component-demo
---
title: Float labels
demo: '#examples/select/float-label.vue'
---
Selects can have a material design style floating label using the `labelFloat` prop.
::

::doc-component-demo
---
title: Condensed
demo: '#examples/select/condensed.vue'
---
Selects can be displayed in a smaller and more compact way using the `condensed` prop.
::

::doc-component-demo
---
title: Option group
demo: '#examples/select/group.vue'
---
Selects can have option groups using the `optgroup` element to wrap your `options`.
::

::doc-component-demo
---
title: Loading state
demo: '#examples/select/loading.vue'
---
Selects can be shown in a loading state using the `loading` prop.
::



::doc-component-demo
---
title: Error state
demo: '#examples/select/invalid.vue'
---
Selects can be shown in an error state using the `error` prop. Use the same prop to display an error message.
::


:doc-component-meta{name="BaseSelect"}