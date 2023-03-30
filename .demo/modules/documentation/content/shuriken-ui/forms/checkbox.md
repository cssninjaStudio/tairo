---
title: Checkbox
category: Base Forms
components: 
  - BaseCheckbox
description: A checkbox is a form element that allows the user to select one or more options from a predefined set of data.
icon:
  src: /img/illustrations/components/checkbox-icon.svg
  srcDark: /img/illustrations/components/checkboxes-icon.svg
---


::doc-component-demo
---
title: Checkbox straight
demo: '#examples/checkbox/straight.vue'
---

:::doc-message{type="muted" icon="ph:magic-wand"}
Default shape of all :doc-linker{to="BaseCheckbox"} can be set in your `app.config.ts`.
:::
::


::doc-component-demo
---
title: Checkbox rounded
demo: '#examples/checkbox/rounded.vue'
---
::


::doc-component-demo
---
title: Checkbox curved
demo: '#examples/checkbox/curved.vue'
---
::


::doc-component-demo
---
title: Checkbox circle
demo: '#examples/checkbox/circle.vue'
---
::


::doc-component-demo
---
title: Disabled state
demo: '#examples/checkbox/disabled.vue'
---
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