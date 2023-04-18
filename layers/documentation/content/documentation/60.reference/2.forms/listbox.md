---
title: BaseListbox
components: 
  - BaseListbox
description: Tairo ships with ready to use listbox select that render different kinds of lists, ranging from text to complex media objects.
icon:
  src: /img/illustrations/components/listbox-icon.svg
  srcDark: /img/illustrations/components/listbox-icon.svg
---

::doc-component-demo
---
title: Listbox shape
demo: '#examples/listbox/shapes.vue'
---
The listbox is a component that renders a list of items. It can be used to render a list of text, media or complex objects. The default shape is `rounded`.
:::doc-message{type="muted" icon="ion:shapes-outline"}
Default shape of all :doc-linker{to="BaseListbox"} can be set in your `app.config.ts`.
:::
::

::doc-component-demo
---
title: Floating labels
demo: '#examples/listbox/float-label.vue'
---
Listboxes can have a material design style floating label using the `labelFloat` prop.
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
title: Listbox with media
demo: '#examples/listbox/media.vue'
---
Listbox items can have a media using the `media` prop of the `properties` object.
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
title: Disabled state
demo: '#examples/listbox/disabled.vue'
---
Listboxes can be shown in a disabled state using the `disabled` prop.
::



::doc-component-demo
---
title: Loading state
demo: '#examples/listbox/loading.vue'
---
Listboxes can be shown in a loading state using the `loading` prop.
::



::doc-component-demo
---
title: Multiple selection
demo: '#examples/listbox/multiple.vue'
---
Listboxes can be used to select multiple items using the `multiple` prop.
::



:doc-component-meta{name="BaseListbox"}