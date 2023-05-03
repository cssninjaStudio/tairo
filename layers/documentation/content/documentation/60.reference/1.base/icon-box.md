---
title: BaseIconBox
components:
  - BaseIconBox
description: Display a box with an icon and a title. Use this to raise attention to a specific feature.
icon:
  src: /img/illustrations/components/iconbox-icon.svg
  srcDark: /img/illustrations/components/iconbox-icon.svg
---

::doc-component-demo
---
title: Rounded box
demo: '#examples/iconbox/rounded-sizes.vue'
---
Icon boxes can have different sizes and shapes. Use the `rounded` shape prop value to change the shape of the box. You can also use the `size` prop to change the size of the box.
::

::doc-component-demo
---
title: Curved box
demo: '#examples/iconbox/curved-sizes.vue'
---
Icon boxes can have different sizes and shapes. Use the `curved` shape prop value to change the shape of the box. You can also use the `size` prop to change the size of the box.
::

::doc-component-demo
---
title: Circle box
demo: '#examples/iconbox/circle-sizes.vue'
---
Icon boxes can have different sizes and shapes. Use the `circle` shape prop value to change the shape of the box. You can also use the `size` prop to change the size of the box.
::

::doc-component-demo
---
title: Solid colors
demo: '#examples/iconbox/solid-base.vue'
---
Icon boxes can have different colors. Use the `flavor` and the `color` props to change the color and style of the box.
::

::doc-component-demo
---
title: Custom solid colors
demo: '#examples/iconbox/solid.vue'
---
Icon boxes can have different colors. Use Tailwind CSS utility classes to create your own solid colors.
::

::doc-component-demo
---
title: Pastel colors
demo: '#examples/iconbox/pastel-base.vue'
---
Icon boxes can have different colors. Use the `flavor` and the `color` props to change the color and style of the box.
::

::doc-component-demo
---
title: Custom pastel colors
demo: '#examples/iconbox/pastel.vue'
---
Icon boxes can have different colors. Use Tailwind CSS utility classes to create your own pastel colors.
::

::doc-component-demo
---
title: Outline colors
demo: '#examples/iconbox/outline-base.vue'
---
Icon boxes can have different colors. Use the `flavor` and the `color` props to change the color and style of the box.
::

::doc-component-demo
---
title: Custom outline colors
demo: '#examples/iconbox/outline.vue'
---
Icon boxes can have different colors. Use Tailwind CSS utility classes to create your own outline colors.
::

::doc-component-demo
---
title: Svg masks
demo: '#examples/iconbox/masks.vue'
---
Icon boxes can be displayed using SVG masks, bringing fancier shapes to your UI. Keep in mind that the `mask` prop is only available for the `straight` shape.
:::doc-message{type="warning" icon="ph:warning-duotone"}
Using svg masks will hide any overflow from your Icon box, making it unable to properly display `tooltips` or other attached content.
:::
::

::doc-component-demo
---
title: Box shadows
demo: '#examples/iconbox/elevation.vue'
---
Icon boxes can be have different color shadows. Use Tailwind CSS utility classes to create your own shadow colors.
::

:doc-component-meta{name="BaseIconBox"}