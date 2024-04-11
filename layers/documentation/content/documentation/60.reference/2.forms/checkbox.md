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
title: Rounded:none
demo: '#examples/checkbox/straight.vue'
---
The checkbox component can have different radius factors. Here is an example of a `rounded:none` checkbox.
:::doc-message{color="muted-contrast" icon="ion:shapes-outline"}
Default props of all :doc-linker{to="BaseCheckbox"} can be set in your `<app>/app.config.ts`.
:::
::


::doc-component-demo
---
title: Rounded:sm
demo: '#examples/checkbox/rounded.vue'
---
The checkbox component can have different radius factors. Here is an example of a `rounded:sm` checkbox.
::


::doc-component-demo
---
title: Rounded:md
demo: '#examples/checkbox/smooth.vue'
---
The checkbox component can have different radius factors. Here is an example of a `rounded:md` checkbox.
::


::doc-component-demo
---
title: Rounded:lg
demo: '#examples/checkbox/curved.vue'
---
The checkbox component can have different radius factors. Here is an example of a `curved` checkbox.
::


::doc-component-demo
---
title: Rounded:full
demo: '#examples/checkbox/circle.vue'
---
The checkbox component can have different radius factors. Here is an example of a `full` checkbox.
::


::doc-component-demo
---
title: Disabled
demo: '#examples/checkbox/disabled.vue'
---
The checkbox component can show a disabled state. Use the `disabled` prop to make a checkbox disabled.
::

::doc-component-demo
---
title: Value:custom
demo: '#examples/checkbox/true-false.vue'
---
Use `true-value`/`false-value` to create custom behavior
::


::doc-component-demo
---
title: Value:multiple
demo: '#examples/checkbox/multiple-value.vue'
---
By default, the checkbox value has only two states: `true` and `false`.
To use checkbox to select multiple options, define the `v-model` to an array.
::


:doc-component-meta{name="BaseCheckbox"}