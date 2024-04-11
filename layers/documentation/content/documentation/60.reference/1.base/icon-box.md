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
title: Rounded:full
demo: '#examples/iconbox/full-sizes.vue'
---
Icon boxes can have different sizes and radius factors. Use the `rounded` prop to change the radius of the box. You can also use the `size` prop to change the size of the box.
::

::doc-component-demo
---
title: Rounded:lg
demo: '#examples/iconbox/lg-sizes.vue'
---
Icon boxes can have different sizes and radius factors. Use the `rounded` prop to change the radius of the box. You can also use the `size` prop to change the size of the box.
::

::doc-component-demo
---
title: Rounded:md
demo: '#examples/iconbox/md-sizes.vue'
---
Icon boxes can have different sizes and radius factors. Use the `rounded` prop to change the radius of the box. You can also use the `size` prop to change the size of the box.
::

::doc-component-demo
---
title: Rounded:sm
demo: '#examples/iconbox/sm-sizes.vue'
---
Icon boxes can have different sizes and radius factors. Use the `rounded` prop to change the radius of the box. You can also use the `size` prop to change the size of the box.
::

::doc-component-demo
---
title: Rounded:none
demo: '#examples/iconbox/none-sizes.vue'
---
Icon boxes can have different sizes and radius factors. Use the `rounded` prop to change the radius of the box. You can also use the `size` prop to change the size of the box.
::

::doc-component-demo
---
title: Variant:solid
demo: '#examples/iconbox/solid-base.vue'
---
Icon boxes can have different colors. Use the `variant` and the `color` props to change the color and style of the box.
::

::doc-component-demo
---
title: Variant:custom
demo: '#examples/iconbox/solid.vue'
---
Icon boxes can have different colors. Use the `none` color combined with Tailwind CSS utility classes to create your own solid colors.
::

::doc-component-demo
---
title: Variant:pastel
demo: '#examples/iconbox/pastel-base.vue'
---
Icon boxes can have different colors. Use the `variant` and the `color` props to change the color and style of the box.
::

::doc-component-demo
---
title: Variant:custom
demo: '#examples/iconbox/pastel.vue'
---
Icon boxes can have different colors. Use the `none` color combined with Tailwind CSS utility classes to create your own pastel colors.
::

::doc-component-demo
---
title: Variant:outline
demo: '#examples/iconbox/outline-base.vue'
---
Icon boxes can have different colors. Use the `variant` and the `color` props to change the color and style of the box.
::

::doc-component-demo
---
title: Variant:custom
demo: '#examples/iconbox/outline.vue'
---
Icon boxes can have different colors. Use the `none` color combined with Tailwind CSS utility classes to create your own outline colors.
::

::doc-component-demo
---
title: Masks
demo: '#examples/iconbox/masks.vue'
---
Icon boxes can be displayed using SVG masks, bringing fancier shapes to your UI. Keep in mind that the `mask` prop is only available for the `none` radius.
:::doc-message{color="warning" icon="ph:warning-duotone"}
Using svg masks will hide any overflow from your Icon box, making it unable to properly display `tooltips` or other attached content.
:::
::

::doc-component-demo
---
title: Shadows
demo: '#examples/iconbox/elevation.vue'
---
Icon boxes can have custom color shadows. Use the `none` color combined with Tailwind CSS utility classes to create your own shadow colors.
::

:doc-component-meta{name="BaseIconBox"}