---
title: BaseAutocomplete
components:
  - BaseAutocomplete
  - BaseAutocompleteItem
description: Tairo ships with ready to use autocomplete that render different kinds of lists, ranging from text to complex media objects.
icon:
  src: /img/illustrations/components/autocomplete-icon.svg
  srcDark: /img/illustrations/components/autocomplete-icon.svg
---


::doc-component-demo
---
title: Radius
demo: '#examples/autocomplete/shapes.vue'
---
Autocomplete can have different radius factors. The default radius is `sm` but you can also use `md`, `lg` or `full`.
:::doc-message{color="muted-contrast" icon="ion:shapes-outline"}
Default props of all :doc-linker{to="BaseAutocomplete"} can be set in your `<app>/app.config.ts`.
:::
::


::doc-component-demo
---
title: Size
demo: '#examples/autocomplete/size.vue'
---
Autocomplete can have different sizes. Use the `size` prop to change the size of the autocomplete.
::


::doc-component-demo
---
title: Contrast:default+
demo: '#examples/autocomplete/contrast-default.vue'
---
Autocomplete can have different contrasts. Use the `contrast` prop to change the contrast of the autocomplete.
::


::doc-component-demo
---
title: Contrast:muted
demo: '#examples/autocomplete/contrast-muted.vue'
---
Autocomplete can have different contrasts. Use the `contrast` prop to change the contrast of the autocomplete.
::


::doc-component-demo
---
title: Contrast:muted+
demo: '#examples/autocomplete/contrast-muted-contrast.vue'
---
Autocomplete can have different contrasts. Use the `contrast` prop to change the contrast of the autocomplete.
::


::doc-component-demo
---
title: Error
demo: '#examples/autocomplete/error.vue'
---
Autocomplete can have an error state using the `error` prop. Use the `error` prop to display an error message.
::


::doc-component-demo
---
title: Icon
demo: '#examples/autocomplete/icon.vue'
---
Autocomplete can have a configurable icon on the left side using the `icon` prop. Make sure to pick meaningful icons for your use case.
::


::doc-component-demo
---
title: Clearable
demo: '#examples/autocomplete/clearable.vue'
---
Clearable autocomplete have a clear icon that appears on the right side using the `clearable` prop. The clear icon is also configurable using the `clearIcon` prop.
::



::doc-component-demo
---
title: Allow create
demo: '#examples/autocomplete/allow-create.vue'
---
You can allow the user to create new items by setting the `allow-create` prop to `true`. When the user types a new value and presses `Enter`, a new item is created.
::

::doc-component-demo
---
title: Multiple
demo: '#examples/autocomplete/multiple.vue'
---
Autocomplete can be configured to allow multiple values and item selection using the `multiple` prop.
::


::doc-component-demo
---
title: Country:single
demo: '#examples/autocomplete/country.vue'
---
Autocomplete can be used as a country selector using the `items` prop. The `items` prop accepts an array of objects with a `text` and `value` property.
::


::doc-component-demo
---
title: Country:multiple
demo: '#examples/autocomplete/country-multiple.vue'
---
Autocomplete can be used as a country selector using the `items` prop. The `items` prop accepts an array of objects with a `text` and `value` property.
::


::doc-component-demo
---
title: Label:float
demo: '#examples/autocomplete/label-float.vue'
---
Autocomplete can have a material design style floating label using the `labelFloat` prop.
::


::doc-component-demo
---
title: Loading
demo: '#examples/autocomplete/loading.vue'
---
Autocomplete can be showed in a loading state using the `loading` prop.
::


::doc-component-demo
---
title: Disabled
demo: '#examples/autocomplete/disabled.vue'
---
Autocomplete can be disabled using the `disabled` prop.
::


:doc-component-meta{name="BaseAutocomplete"}


::doc-component-demo
---
title: Results:icon
demo: '#examples/autocomplete/icon-result.vue'
---
Autocomplete can render results with icons using the :doc-linker{to="BaseAutocompleteItem"} component. The component accepts an `icon` prop that is displayed in the results list.
::


::doc-component-demo
---
title: Results:media
demo: '#examples/autocomplete/media-result.vue'
---
Autocomplete can render results with images using the :doc-linker{to="BaseAutocompleteItem"} component. The component accepts a `media` prop that is displayed in the results list.
::




:doc-component-meta{name="BaseAutocompleteItem"}