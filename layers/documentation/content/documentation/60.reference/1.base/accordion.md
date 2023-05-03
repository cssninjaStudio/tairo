---
title: BaseAccordion
components:
  - BaseAccordion
description: Display content in a collapsible and expandable format.
icon:
  src: /img/illustrations/components/accordion-icon.svg
  srcDark: /img/illustrations/components/accordion-icon.svg
---

::doc-component-demo
---
title: Default accordion
demo: '#examples/accordion/inclusive.vue'
---

By default, all :doc-linker{to="BaseAccordion"} items can be open at the same time.
::

::doc-component-demo
---
title: Exclusive type
demo: '#examples/accordion/exclusive.vue'
---

You can set the `exclusive` property to `true` to force only one item to be open at a time.
::

::doc-component-demo
---
title: Shapes
demo: '#examples/accordion/shapes.vue'
---

You can change the shape of the accordion with the `shape` property.

:::doc-message{type="muted" icon="ion:shapes-outline"}
Default shape of all :doc-linker{to="BaseAccordion"} can be set in your `app.config.ts`.
:::
::

::doc-component-demo
---
title: Chevron icon
demo: '#examples/accordion/chevron.vue'
---

:doc-linker{to="BaseAccordion"} accept an `action` property that you can use to change the icon of the accordion. By default, it uses the `dot` icon, but you can use `chevron` or `plus` as well.

Here is an example of an accordion with `action="chevron"`.
::

::doc-component-demo
---
title: Plus icon
demo: '#examples/accordion/plus.vue'
---

Here is an example of an accordion with `action="plus"`.
::

:doc-component-meta{name="BaseAccordion"}
