---
title: BaseButton
components:
  - BaseButton
description: Use buttons to trigger actions or to navigate to a new page. Explore the different button types and their variations.
icon:
  src: /img/illustrations/components/button-icon.svg
  srcDark: /img/illustrations/components/button-icon.svg
---

::doc-component-demo
---
title: Buttons shapes
demo: '#examples/button/shapes.vue'
---
Buttons are an essential part of any application. Buttons can have different shapes using the `shape` prop.
:::doc-message{type="muted" icon="ion:shapes-outline"}
Default shape of all :doc-linker{to="BaseButton"} can be set in your `app.config.ts`.
:::
::

::doc-component-demo
---
title: Buttons links
demo: '#examples/button/links.vue'
---
Buttons can be rendered as links. Use the `to` prop to set the link target url.
::

::doc-component-demo
---
title: Solid buttons
demo: '#examples/button/solid.vue'
---
Buttons can have solid background colors. Use the `flavor="solid"` prop and the `color` prop to make solid buttons.
::

::doc-component-demo
---
title: Smaller solid buttons
demo: '#examples/button/solid-condensed.vue'
---
Buttons can have a smaller size. Use the `condensed` prop to make smaller buttons.
::

::doc-component-demo
---
title: Pastel buttons
demo: '#examples/button/pastel.vue'
---
Buttons can have pastel background colors. Use the `flavor="pastel"` prop and the `color` prop to make pastel buttons.
::

::doc-component-demo
---
title: Smaller pastel buttons
demo: '#examples/button/pastel-condensed.vue'
---
Buttons can have a smaller size. Use the `condensed` prop to make smaller buttons.
::

::doc-component-demo
---
title: Outline buttons
demo: '#examples/button/outline.vue'
---
Buttons can have outline background colors. Use the `flavor="outline"` prop and the `color` prop to make outline buttons.
::

::doc-component-demo
---
title: Smaller outline buttons
demo: '#examples/button/outline-condensed.vue'
---
Buttons can have a smaller size. Use the `condensed` prop to make smaller buttons.
::

::doc-component-demo
---
title: Loading state
demo: '#examples/button/loading.vue'
---
Buttons can be shown in a loading state. Use the `loading` prop to show a loading indicator.
::

::doc-component-demo
---
title: With icons
demo: '#examples/button/icons.vue'
---
Buttons can have icons, both on the left and on the right. Use the `Icon` component inside the button slot to render the icon you need.
::

::doc-component-demo
---
title: Flat shadow
demo: '#examples/button/shadow-flat.vue'
---
Buttons can have a flat shadow. Use the `shadow="flat"` prop to add shadows to your buttons.
::

::doc-component-demo
---
title: Hover shadow
demo: '#examples/button/shadow-hover.vue'
---
Buttons can have a hover shadow. Use the `shadow="hover"` prop to add shadows to your buttons.
::

::doc-component-demo
---
title: Disabled state
demo: '#examples/button/disabled.vue'
---
Buttons can be shown in a disabled state. Use the `disabled` prop to disable the button.
::

::doc-component-demo
---
title: Button group
demo: '#examples/button/group.vue'
---
Buttons can be grouped together. Use them inside a flex container with an optional gap.
::

:doc-component-meta{name="BaseButton"}