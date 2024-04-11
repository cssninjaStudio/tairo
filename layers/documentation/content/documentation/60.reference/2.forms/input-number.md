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
title: Radius
demo: '#examples/input-number/shapes.vue'
---
Inputs can be customized to show different radius factors. The default shape is `rounded:sm`. You can change the shape of all inputs by setting the `rounded` property.
:::doc-message{color="muted-contrast" icon="ion:shapes-outline"}
Default props of all :doc-linker{to="BaseInputNumber"} can be set in your `<app>/app.config.ts`.
:::
::

::doc-component-demo
---
title: Size
demo: '#examples/input-number/size.vue'
---
Inputs can have different sizes. The default size is `md`. You can change the size of all inputs by setting the `size` property.
::

::doc-component-demo
---
title: Contrast:default+
demo: '#examples/input-number/contrast-default.vue'
---
Inputs can have different contrasts. The default contrast is `default`. You can change the contrast of an input number by setting the `contrast` property.
::

::doc-component-demo
---
title: Contrast:muted
demo: '#examples/input-number/contrast-muted.vue'
---
Inputs can have different contrasts.  You can change the contrast of an input number by setting the `contrast` property.
::

::doc-component-demo
---
title: Contrast:muted+
demo: '#examples/input-number/contrast-muted.vue'
---
Inputs can have different contrasts.  You can change the contrast of an input number by setting the `contrast` property.
::


::doc-component-demo
---
title: Icon
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
title: Disabled
demo: '#examples/input-number/disabled.vue'
---
Inputs can be shown in a disabled using the `disabled` prop.
::


::doc-component-demo
---
title: Loading
demo: '#examples/input-number/loading.vue'
---
Inputs can be shown in a loading using the `loading` prop.
::


:doc-component-meta{name="BaseInputNumber"}