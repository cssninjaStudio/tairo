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
title: Default
demo: '#examples/accordion/inclusive.vue'
---

By default, all :doc-linker{to="BaseAccordion"} items can be open at the same time.
::

::doc-component-demo
---
title: Exclusive
demo: '#examples/accordion/exclusive.vue'
---

You can set the `exclusive` property to `true` to force only one item to be open at a time.
::

::doc-component-demo
---
title: Radius
demo: '#examples/accordion/shapes.vue'
---

You can change the shape of the accordion with the `rounded` property.

:::doc-message{color="muted-contrast" icon="ion:shapes-outline"}
Default props of all :doc-linker{to="BaseAccordion"} can be set in your `<app>/app.config.ts`.
:::
::

::doc-component-demo
---
title: Icon:chevron
demo: '#examples/accordion/chevron.vue'
---

:doc-linker{to="BaseAccordion"} accepts an `action` property that you can use to change the icon of the accordion. By default, it uses the `dot` icon, but you can use `chevron` or `plus` as well.

Here is an example of an accordion with `action="chevron"`.
::

::doc-component-demo
---
title: Icon:plus
demo: '#examples/accordion/plus.vue'
---

:doc-linker{to="BaseAccordion"} accepts an `action` property that you can use to change the icon of the accordion. By default, it uses the `dot` icon, but you can use `chevron` or `plus` as well.

Here is an example of an accordion with `action="plus"`.
::

:doc-component-meta{name="BaseAccordion"}
