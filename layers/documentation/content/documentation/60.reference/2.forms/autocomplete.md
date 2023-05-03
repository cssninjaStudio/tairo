---
title: BaseAutocomplete
components:
  - BaseAutocomplete
  - BaseAutocompleteItem
description: Tairo ships with ready to use autocompletes that render different kinds of lists, ranging from text to complex media objects.
icon:
  src: /img/illustrations/components/autocomplete-icon.svg
  srcDark: /img/illustrations/components/autocomplete-icon.svg
---


::doc-component-demo
---
title: Autocomplete shapes
demo: '#examples/autocomplete/shapes.vue'
---
Autocompletes can have different shapes. The default shape is `rounded` but you can also use `straight`, `curved` or `full` shapes.
:::doc-message{type="muted" icon="ion:shapes-outline"}
Default shape of all :doc-linker{to="BaseAutocomplete"} can be set in your `app.config.ts`.
:::
::


::doc-component-demo
---
title: With icon
demo: '#examples/autocomplete/icon.vue'
---
Autocompletes can have a configurable icon on the left side using the `icon` prop. Make sure to pick meaningful icons for your use case.
::

::doc-component-demo
---
title: Clearable
demo: '#examples/autocomplete/clearable.vue'
---
Clearable autocompletes have a clear icon that appears on the right side using the `clearable` prop. The clear icon is also configurable using the `clearIcon` prop.
::



::doc-component-demo
---
title: Floating label
demo: '#examples/autocomplete/label-float.vue'
---
Autocompletes can have a material design style floating label using the `labelFloat` prop.
::


::doc-component-demo
---
title: Condensed
demo: '#examples/autocomplete/condensed.vue'
---
Autocompletes can be displayed in a smaller and more compact way using the `condensed` prop.
::


::doc-component-demo
---
title: Disabled state
demo: '#examples/autocomplete/disabled.vue'
---
Autocompletes can be disabled using the `disabled` prop.
::

::doc-component-demo
---
title: Loading state
demo: '#examples/autocomplete/loading.vue'
---
Autocompletes can be showed in a loading state using the `loading` prop.
::


::doc-component-demo
---
title: Multiple
demo: '#examples/autocomplete/multiple.vue'
---
Autocompletes can be configured to allow multiple value and item selection using the `multiple` prop.
::


:doc-component-meta{name="BaseAutocomplete"}




::doc-component-demo
---
title: Icon results
demo: '#examples/autocomplete/icon-result.vue'
---
Autocompletes can render results with icons using the :doc-linker{to="BaseAutocompleteItem"} component. The component accepts an `icon` prop that is displayed in the results list.
::


::doc-component-demo
---
title: Media results
demo: '#examples/autocomplete/media-result.vue'
---
Autocompletes can render results with images using the :doc-linker{to="BaseAutocompleteItem"} component. The component accepts a `media` prop that is displayed in the results list.
::




:doc-component-meta{name="BaseAutocompleteItem"}