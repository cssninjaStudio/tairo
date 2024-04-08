---
title: BaseListbox
components: 
  - BaseListbox
  - BaseListboxItem
description: Tairo ships with ready to use listbox select that render different kinds of lists, ranging from text to complex media objects.
icon:
  src: /img/illustrations/components/listbox-icon.svg
  srcDark: /img/illustrations/components/listbox-icon.svg
---

::doc-component-demo
---
title: Radius
demo: '#examples/listbox/shapes.vue'
---
The listbox is a component that renders a list of items. It can be used to render a list of text, media or complex objects. The default shape is `rounded`.
:::doc-message{color="muted-contrast" icon="ion:shapes-outline"}
Default props of all :doc-linker{to="BaseListbox"} can be set in your `<app>/app.config.ts`.
:::
::

::doc-component-demo
---
title: Size
demo: '#examples/listbox/size.vue'
---
The listbox is a component that renders a list of items. It can be used to render a list of text, media or complex objects. The default size is `md`.
::

::doc-component-demo
---
title: Contrast:default+
demo: '#examples/listbox/contrast-default.vue'
---
The listbox can be rendered in different contrast modes. The default contrast mode is `default`. Contrast can affect the color of the text and the background of the element, as well as the light or the dark mode.
::

::doc-component-demo
---
title: Contrast:muted
demo: '#examples/listbox/contrast-muted.vue'
---
The listbox can be rendered in different contrast modes. Contrast can affect the color of the text and the background of the element, as well as the light or the dark mode.
::

::doc-component-demo
---
title: Contrast:muted+
demo: '#examples/listbox/contrast-muted-contrast.vue'
---
The listbox can be rendered in different contrast modes. Contrast can affect the color of the text and the background of the element, as well as the light or the dark mode.
::

::doc-component-demo
---
title: Error
demo: '#examples/listbox/error.vue'
---
The listbox can be shown in an error state using the `error` prop. You can also set a custom error message using the same prop.
::

::doc-component-demo
---
title: Disabled
demo: '#examples/listbox/disabled.vue'
---
Listbox can be shown in a disabled state using the `disabled` prop.
::


::doc-component-demo
---
title: Loading
demo: '#examples/listbox/loading.vue'
---
Listbox can be shown in a loading state using the `loading` prop.
::


::doc-component-demo
---
title: Label:float
demo: '#examples/listbox/float-label.vue'
---
Listbox can have a material design style floating label using the `labelFloat` prop.
::

::doc-component-demo
---
title: Listbox with sublabels
demo: '#examples/listbox/sublabels.vue'
---
Listbox items can have a sublabel using the `sublabel` prop of the `properties` object.
::

::doc-component-demo
---
title: Listbox with icon
demo: '#examples/listbox/icon.vue'
---
Listbox items can have an icon using the `icon` prop of the `properties` object.
::

::doc-component-demo
---
title: Listbox with media
demo: '#examples/listbox/media.vue'
---
Listbox items can have a media using the `media` prop of the `properties` object.
::

::doc-component-demo
---
title: Multiple selection
demo: '#examples/listbox/multiple.vue'
---
Listbox can be used to select multiple items using the `multiple` prop.
::

:doc-component-meta{name="BaseListbox"}
:doc-component-meta{name="BaseListboxItem"}