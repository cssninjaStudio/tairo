---
title: BaseCheckbox
components: 
  - BaseCheckbox
description: A checkbox is a form element that allows the user to select one or more options from a predefined set of data.
icon:
  src: /img/illustrations/components/checkbox-icon.svg
  srcDark: /img/illustrations/components/checkbox-icon.svg
---


::doc-component-demo
---
title: Checkbox straight
demo: '#examples/checkbox/straight.vue'
---
The checkbox component can have different shapes. Here is an example of a `straight` checkbox.
:::doc-message{type="muted" icon="ion:shapes-outline"}
Default shape of all :doc-linker{to="BaseCheckbox"} can be set in your `app.config.ts`.
:::
::


::doc-component-demo
---
title: Checkbox rounded
demo: '#examples/checkbox/rounded.vue'
---
The checkbox component can have different shapes. Here is an example of a `rounded` checkbox.
::


::doc-component-demo
---
title: Checkbox curved
demo: '#examples/checkbox/curved.vue'
---
The checkbox component can have different shapes. Here is an example of a `curved` checkbox.
::


::doc-component-demo
---
title: Checkbox circle
demo: '#examples/checkbox/circle.vue'
---
The checkbox component can have different shapes. Here is an example of a `full` checkbox.
::


::doc-component-demo
---
title: Disabled state
demo: '#examples/checkbox/disabled.vue'
---
The checkbox component can show a disabled state. Use the `disabled` prop to make a checkbox disabled.
::

::doc-component-demo
---
title: Custom behavior
demo: '#examples/checkbox/true-false.vue'
---
Use `true-value`/`false-value` to create custom behavior
::


::doc-component-demo
---
title: Multiple values
demo: '#examples/checkbox/multiple-value.vue'
---
By default, the checkbox value has only two states: `true` and `false`.
To use checkbox to select multiple options, define the `v-model` to an array.
::



::doc-component-demo
---
title: Custom colors
demo: '#examples/checkbox/colors.vue'
---
You can use any colors defined with tailwind, use `classes` props to set your own values
::


:doc-component-meta{name="BaseCheckbox"}