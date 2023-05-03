---
title: BaseTextarea
components: 
  - BaseTextarea
description: A textarea is a form element that allows the user to enter long text data from the keyboard. Explore the available customization options.
icon:
  src: /img/illustrations/components/textarea-icon.svg
  srcDark: /img/illustrations/components/textarea-icon.svg
---


::doc-component-demo
---
title: Textarea shapes
demo: '#examples/textarea/shapes.vue'
---
Textareas can have different shapes. Use the `shape` prop to change the shape of the textarea component.
:::doc-message{type="muted" icon="ion:shapes-outline"}
Default shape of all :doc-linker{to="BaseTextarea"} can be set in your `app.config.ts`.
:::
::

::doc-component-demo
---
title: Floating label
demo: '#examples/textarea/label-float.vue'
---
Textareas can have floating labels. Use the `label-float` prop to enable the floating label.
::

::doc-component-demo
---
title: Textarea condensed
demo: '#examples/textarea/condensed.vue'
---
Textareas can be shown smaller. Use the `condensed` prop to enable the condensed mode.
::

::doc-component-demo
---
title: Textarea focus
demo: '#examples/textarea/focus.vue'
---
Textareas can have a primary colored focus. Use the `color-focus` prop to enable the colored focus.
::


::doc-component-demo
---
title: Loading state
demo: '#examples/textarea/loading.vue'
---
Textareas can be shown in a loading state. Use the `loading` prop to enable the loading state.
::

::doc-component-demo
---
title: Disabled state
demo: '#examples/textarea/disabled.vue'
---
Textareas can be shown disabled. Use the `disabled` prop to disable the textarea.
::

::doc-component-demo
---
title: Error state
demo: '#examples/textarea/invalid.vue'
---
Textareas can be shown in an error state. Use the `error` prop to show the error and the error message.
::


::doc-component-demo
---
title: Custom addons
demo: '#examples/textarea/addon.vue'
---
Textareas can have custom addons. Use the `addon` slot to add your own custom addons.
::


:doc-component-meta{name="BaseTextarea"}