---
title: BaseProgress
components:
  - BaseProgress
  - BaseProgressCircle
description: Display the progress of a task in a linear or circular way. Use the different options to customize the look and feel of the progress bars.
icon:
  src: /img/illustrations/components/progress-icon.svg
  srcDark: /img/illustrations/components/progress-icon.svg
---

::doc-component-demo
---
title: Progress bar
demo: '#examples/progress/bar.vue'
---
Use the `progress` prop to set the progress of the progress bar. Use the `size` prop to change the size of the progress bar.
::

::doc-component-demo
---
title: Progress circle
demo: '#examples/progress/circle.vue'
---
Use the `progress` prop to set the progress of the progress circle. Use the `size` prop to change the size of the component.
::

::doc-component-demo
---
title: Bar sizes
demo: '#examples/progress/sizes.vue'
---
Progress bars can have different sizes. Use the `size` prop to change the size of the progress bar.
::

::doc-component-demo
---
title: Colors
demo: '#examples/progress/colors.vue'
---
Progress bars can have different colors. Use the `color` prop to change the size of the progress bar.
::

::doc-component-demo
---
title: Indeterminate
demo: '#examples/progress/indeterminate.vue'
---
Progress bars can be shown in an indeterminate state. Omit the `value` prop to change the progress bar to an indeterminate state.
::

:doc-component-meta{name="BaseProgress"}
:doc-component-meta{name="BaseProgressCircle"}