---
title: BaseButton
components:
  - BaseButton
  - BaseButtonGroup
description: Use buttons to trigger actions or to navigate to a new page. Explore the different button types and their variations.
icon:
  src: /img/illustrations/components/button-icon.svg
  srcDark: /img/illustrations/components/button-icon.svg
---

::doc-component-demo
---
title: Radius
demo: '#examples/button/shapes.vue'
---
Buttons are an essential part of any application. Buttons can have different radius factors using the `rounded` prop.
:::doc-message{color="muted-contrast" icon="ion:shapes-outline"}
Default props of all :doc-linker{to="BaseButton"} can be set in your `<app>/app.config.ts`.
:::
::

::doc-component-demo
---
title: Size
demo: '#examples/button/size.vue'
---
Buttons can have a smaller size. Use the `size` prop to change the size of a button.
::

::doc-component-demo
---
title: Links
demo: '#examples/button/links.vue'
---
Buttons can be rendered as links. Use the `to` prop to set the link target url.
::

::doc-component-demo
---
title: Badge
demo: '#examples/button/badge.vue'
---
Buttons can have a glowing badge indicator. Use the `badge` prop to add a badge to your buttons.
::

::doc-component-demo
---
title: Variant:solid
demo: '#examples/button/solid.vue'
---
Buttons can have solid background colors. Use the `variant="solid"` prop and the `color` prop to make solid buttons.
::

::doc-component-demo
---
title: Variant:pastel
demo: '#examples/button/pastel.vue'
---
Buttons can have pastel background colors. Use the `variant="pastel"` prop and the `color` prop to make pastel buttons.
::

::doc-component-demo
---
title: Variant:outline
demo: '#examples/button/outline.vue'
---
Buttons can have outline background colors. Use the `variant="outline"` prop and the `color` prop to make outline buttons.
::

::doc-component-demo
---
title: Icons
demo: '#examples/button/icons.vue'
---
Buttons can have icons, both on the left and on the right. Use the `Icon` component inside the button slot to render the icon you need.
::

::doc-component-demo
---
title: Shadow:flat
demo: '#examples/button/shadow-flat.vue'
---
Buttons can have a flat shadow. Use the `shadow="flat"` prop to add shadows to your buttons.
::

::doc-component-demo
---
title: Shadow:hover
demo: '#examples/button/shadow-hover.vue'
---
Buttons can have a hover shadow. Use the `shadow="hover"` prop to add shadows to your buttons.
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
Buttons can be grouped together. Use them inside a `BaseButtonGroup` component.
::

:doc-component-meta{name="BaseButton"}

:doc-component-meta{name="BaseButtonGroup"}