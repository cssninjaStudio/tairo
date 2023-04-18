---
title: BaseTreeSelect
components: 
  - BaseTreeSelect
  - BaseTreeSelectItem
description: Display data tree in collapsible items. Can be used to select node in tree.
icon:
  src: /img/illustrations/components/textarea-icon.svg
  srcDark: /img/illustrations/components/textarea-icon.svg
---


::doc-component-demo
---
title: Basic usage
demo: '#examples/treeselect/base.vue'
---
The TreeSelect component is used to render a data treeview. It provides a simple way to select a node in a tree.
::


::doc-component-demo
---
title: Model usage
demo: '#examples/treeselect/model.vue'
---
The TreeSelect items can be made selectable. Use the `v-model` directive to enable item selection.
::


::doc-component-demo
---
title: Async data
demo: '#examples/treeselect/async.vue'
---
The TreeSelect can be used to display data from an async source. Take a look at the code example for more details about usage.
::

::doc-component-demo
---
title: Change default icons
demo: '#examples/treeselect/icons.vue'
---
TreeSelect icons can be changed. Use the `icon` prop to change the icons of the TreeSelect items. Check out this example of a folder tree.
::


::doc-component-demo
---
title: Exposed methods
demo: '#examples/treeselect/exposed.vue'
---
The TreeSelect component exposes some methods that can be used to interact with the component. Check out this example to see how to use them.
::


:doc-component-meta{name="BaseTreeSelect"}


::doc-component-demo
---
title: Custom item with icon
demo: '#examples/treeselect/item-icon.vue'
---
TreeSelect items can be customized to show a specific icon. Take a look at this example to see how to use them.
::

::doc-component-demo
---
title: Custom item with media
demo: '#examples/treeselect/item-media.vue'
---
TreeSelect items can be customized to show images. Take a look at this example to see how to use them.
::


:doc-component-meta{name="BaseTreeSelectItem"}