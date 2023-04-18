---
title: BaseCard
components:
  - BaseCard
description: Cards are used to group related content and present it in an elegant and efficient way. Explore the available options.
icon:
  src: /img/illustrations/components/card-icon.svg
  srcDark: /img/illustrations/components/card-icon.svg
---

::doc-component-demo
---
title: Card shapes
demo: '#examples/card/shapes.vue'
---
Cards are an essential part of any application. Cards can have different shapes using the `shape` prop.
:::doc-message{type="muted" icon="ion:shapes-outline"}
Default shape of all :doc-linker{to="BaseCard"} can be set in your `app.config.ts`.
:::
::

::doc-component-demo
---
title: Flat shadow
demo: '#examples/card/elevation.vue'
---
Cards can be displayed with a flat shadow using the `elevated` prop. 
::

::doc-component-demo
---
title: Hover shadow
demo: '#examples/card/elevation-hover.vue'
---
Cards can have a shadow on hover using the `elevated-hover` prop. 
::

:doc-component-meta{name="BaseCard"}