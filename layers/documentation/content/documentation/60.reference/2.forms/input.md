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
title: Radius
demo: '#examples/input/shapes.vue'
---
Inputs can be customized to show different shapes. The default shape is `rounded`. You can change the shape of all inputs by setting the `shape` property.
:::doc-message{color="muted-contrast" icon="ion:shapes-outline"}
Default shape of all :doc-linker{to="BaseInput"} can be set in your `<app>/app.config.ts`.
:::
::


::doc-component-demo
---
title: Size
demo: '#examples/input/size.vue'
---
Inputs can have different sizes. The default size is `md`. You can change the size of an input by setting the `size` property.
::


::doc-component-demo
---
title: Contrast:default+
demo: '#examples/input/contrast-default.vue'
---
Inputs can have different contrasts. The default contrast is `default`. You can change the contrast of an input by setting the `contrast` property.
::


::doc-component-demo
---
title: Contrast:muted
demo: '#examples/input/contrast-muted.vue'
---
Inputs can have different contrasts. You can change the contrast of an input by setting the `contrast` property.
::


::doc-component-demo
---
title: Contrast:muted+
demo: '#examples/input/contrast-muted-contrast.vue'
---
Inputs can have different contrasts. You can change the contrast of an input by setting the `contrast` property.
::


::doc-component-demo
---
title: Icon
demo: '#examples/input/icon.vue'
---
Inputs can have a configurable icon on the left side using the `icon` prop. Make sure to pick meaningful icons for your use case.
::


::doc-component-demo
---
title: Addon
demo: '#examples/input/addon.vue'
---
Inputs can have a configurable icon on the left side using the `icon` prop. Make sure to pick meaningful icons for your use case.
::

::doc-component-demo
---
title: Focus
demo: '#examples/input/focus.vue'
---
Inputs can have a primary colored focus using the `colorFocus` prop.
::

::doc-component-demo
---
title: Error
demo: '#examples/input/invalid.vue'
---
Inputs can be shown in an error state using the `error` prop. You can also set a custom error message using the same prop.
::

::doc-component-demo
---
title: Error:icon
demo: '#examples/input/invalid-icon.vue'
---
Inputs can be shown in an error state using the `error` prop. You can also set a custom error message using the same prop.
::

::doc-component-demo
---
title: Slot:action
demo: '#examples/input/action.vue'
---
Inputs can be shown in an error state using the `error` prop. You can also set a custom error message using the same prop.
::

::doc-component-demo
---
title: Label:float
demo: '#examples/input/float-label.vue'
---
Inputs can have a material design style floating label using the `labelFloat` prop.
::

::doc-component-demo
---
title: Loading
demo: '#examples/input/loading.vue'
---
Inputs can be shown in a loading state using the `loading` prop.
::


::doc-component-demo
---
title: Disabled
demo: '#examples/input/disabled.vue'
---
Inputs can be shown in a disabled using the `disabled` prop.
::

::doc-component-demo
---
title: Group
demo: '#examples/input/group.vue'
---
Inputs and selects can be grouped with buttons using the `BaseButtonGroup` component.
::

:doc-component-meta{name="BaseInput"}