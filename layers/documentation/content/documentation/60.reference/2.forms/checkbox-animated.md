---
title: BaseCheckboxAnimated
components: 
  - BaseCheckboxAnimated
description: Use animated checkboxes to display fancy svg circle and check animations, which are ideal to engage your audience.
icon:
  src: /img/illustrations/components/checkbox-icon.svg
  srcDark: /img/illustrations/components/checkbox-icon.svg
---


::doc-component-demo
---
title: Color
demo: '#examples/checkbox-animated/base.vue'
---
A nice and friendly checkbox. Notice the usage of :doc-linker{to="BaseFocusLoop"} to loop focus through all the checkboxes. Use the `color` prop to change the color of the checkbox.
::


::doc-component-demo
---
title: Value:boolean
demo: '#examples/checkbox-animated/boolean.vue'
---
Here is an example using a `boolean` value
::


::doc-component-demo
---
title: Value:custom
demo: '#examples/checkbox-animated/custom.vue'
---
Use `true-value`/`false-value` to create a custom behavior
::


::doc-component-demo
---
title: Value:static
demo: '#examples/checkbox-animated/true-false.vue'
---
You can create a static checkbox by omitting the `v-model` (or `model-value`)
::


:doc-component-meta{name="BaseCheckboxAnimated"}