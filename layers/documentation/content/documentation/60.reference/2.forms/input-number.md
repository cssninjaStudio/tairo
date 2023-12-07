---
title: BaseInputNumber
components: 
  - BaseInputNumber
description: An input dedicated to numeric data. Explore the available options.
icon:
  src: /img/illustrations/components/input-icon.svg
  srcDark: /img/illustrations/components/input-icon.svg
---

::doc-component-demo
---
title: Input number shape
demo: '#examples/input-number/shapes.vue'
---
Inputs can be customized to show different shapes. The default shape is `rounded`. You can change the shape of all inputs by setting the `shape` property.
:::doc-message{type="muted" icon="ion:shapes-outline"}
Default shape of all :doc-linker{to="BaseInputNumber"} can be set in your `.app/app.config.ts`.
:::
::

::doc-component-demo
---
title: Input number icon
demo: '#examples/input-number/icon.vue'
---
Inputs can have a configurable icon on the left side using the `icon` prop. Make sure to pick meaningful icons for your use case.

You can also change icons for increment and decrement buttons using the `icon-decrement` and `icon-increment` props.
::



::doc-component-demo
---
title: Step, min and max
demo: '#examples/input-number/steps.vue'
---
You can change the step used by the increment and decrement buttons using the `step` prop, which defaults to `1`.

Defining a `min` and `max` value will prevent the increment and decrement buttons from going beyond these values but will not prevent the user from typing a value outside of the range.
::


::doc-component-demo
---
title: Disabled state
demo: '#examples/input-number/disabled.vue'
---
Inputs can be shown in a disabled using the `disabled` prop.
::


:doc-component-meta{name="BaseInputNumber"}