---
title: BaseAvatar
components:
  - BaseAvatar
description: Use avatars to represent entities with an image, icon, or initials. Discover multiple variations and options.
icon:
  src: /img/illustrations/components/avatar-icon.svg
  srcDark: /img/illustrations/components/avatar-icon.svg
---

::doc-component-demo
---
title: Rounded:full
demo: '#examples/avatar/circle-size.vue'
---
Avatars can have different radius factors. The following example shows avatars using the `rounded` prop. Avatars can also be displayed as groups, using the :doc-linker{to="BaseAvatarGroup"} component.
:::doc-message{color="muted-contrast" icon="ion:shapes-outline"}
Default shape of all :doc-linker{to="BaseAvatar"} can be set in your `<app>/app.config.ts`.
:::
::

::doc-component-demo
---
title: Rounded:lg
demo: '#examples/avatar/curved-size.vue'
---
Avatars can have different radius factors. The following example shows avatars using the `lg` radius factor. Use the `rounded` prop to change the radius factor of the avatar.
::

::doc-component-demo
---
title: Rounded:md
demo: '#examples/avatar/smooth-size.vue'
---
Avatars can have different radius factors. The following example shows avatars using the `md` radius factor. Use the `rounded` prop to change the radius factor of the avatar.
::

::doc-component-demo
---
title: Rounded:sm
demo: '#examples/avatar/rounded-size.vue'
---
Avatars can have different radius factors. The following example shows avatars using the `sm` radius factor. Use the `rounded` prop to change the radius factor of the avatar.
::


::doc-component-demo
---
title: Rounded:none
demo: '#examples/avatar/straight-size.vue'
---
Avatars can have different radius factors. The following example shows avatars using the `none` radius factor. Use the `rounded` prop to change the radius factor of the avatar.
::

::doc-component-demo
---
title: Avatar:circle:dot
demo: '#examples/avatar/circle-dot.vue'
---
Avatars can have status indicators. Indicators positioning vary depending on the shape of the avatar. Use the `dot` prop to display a status indicator.
::

::doc-component-demo
---
title: Avatar:curved:dot
demo: '#examples/avatar/square-dot.vue'
---
Avatars can have status indicators. Indicators positioning vary depending on the shape of the avatar. Use the `dot` prop to display a status indicator.
::

::doc-component-demo
---
title: Avatar:circle:badge
demo: '#examples/avatar/circle-badge.vue'
---
Avatars can have image badges. Badges can be used to display a skill, a flag, an icon or any relevant information. Use the `src-badge` prop to display a badge.
::

::doc-component-demo
---
title: Avatar:curved:badge
demo: '#examples/avatar/square-badge.vue'
---
Avatars can have image badges. Badges can be used to display a skill, a flag, an icon or any relevant information. Use the `src-badge` prop to display a badge.
::

::doc-component-demo
---
title: Avatar:fake:circle
demo: '#examples/avatar/circle-fake.vue'
---
Sometimes, you need to display a placeholder avatar. When an image is not provided, the component defaults to the `fake` mode, using color and text instead of an image.
::

::doc-component-demo
---
title: Avatar:fake:curved
demo: '#examples/avatar/square-fake.vue'
---
Sometimes, you need to display a placeholder avatar. When an image is not provided, the component defaults to the `fake` mode, using color and text instead of an image.
::

::doc-component-demo
---
title: Fake:badge:circle
demo: '#examples/avatar/circle-fake-badge.vue'
---
Fake avatars withstand the same props as regular avatars. You can also use badges and indicators on fake avatars using the same properties.
::

::doc-component-demo
---
title: Fake:badge:curved
demo: '#examples/avatar/square-fake-badge.vue'
---
Fake avatars withstand the same props as regular avatars. You can also use badges and indicators on fake avatars using the same properties.
::

::doc-component-demo
---
title: Fake:colors:circle
demo: '#examples/avatar/circle-fake-colors.vue'
---
Fake avatars background and text color can be customized using Tailwind CSS `bg-*` and `text-*` utilities. Alternatively, you can use the Tairo `getRandomColor()` utility function to generate a random color.
::

::doc-component-demo
---
title: Fake:colors:curved
demo: '#examples/avatar/square-fake-colors.vue'
---
Fake avatars background and text color can be customized using Tailwind CSS `bg-*` and `text-*` utilities. Alternatively, you can use the tairo `getRandomColor()` utility function to generate a random color.
::

::doc-component-demo
---
title: Avatar:mask
demo: '#examples/avatar/masks.vue'
---
Avatars can be displayed using SVG masks, bringing fancier shapes to your UI. Keep in mind that the `mask` prop is only available for the `none` radius factor.
:::doc-message{color="warning" icon="ph:warning-duotone"}
Using svg masks will hide any overflow from your avatar, making it unable to properly display `badges`, `indicators` or `tooltips`.
:::
::


:doc-component-meta{name="BaseAvatar"}