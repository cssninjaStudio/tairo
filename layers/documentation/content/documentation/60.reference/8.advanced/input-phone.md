---
title: AddonInputPhone
components: 
  - AddonInputPhone
description: International phone number input field with country code dropdown.
icon:
  src: /img/illustrations/components/markdown-icon.svg
  srcDark: /img/illustrations/components/markdown-icon.svg
---


::doc-component-demo
---
title: Phone Input
demo: '#examples/input-phone/base.vue'
---
Ready to use phone input component with country code dropdown, with validation and formatting.
The component extend the :doc-linker{to="BaseInput"} component, so you can use all the props and events of the base component.

:::doc-message{color="muted-contrast" icon="ri:markdown-fill"}
This component uses [libphonenumber-js](https://www.npmjs.com/package/libphonenumber-js) and [country-codes-list](https://www.npmjs.com/package/country-codes-list) 
to detect and validate the phone input value.
:::
::



::doc-component-demo
---
title: Country Input
demo: '#examples/input-phone/country.vue'
---
The component provides a country dropdown to select the country code, you can use the `country` prop to set the default country, otherwise it will be detected from the user's input.
You can use the `v-model:country` notation to get the selected/detected country code.
::

::doc-component-demo
---
title: International and National Formats
demo: '#examples/input-phone/format.vue'
---
By default, the input value will be formatted in the international format, you can change this behavior with the `format` prop to change it to `national`.
::

::doc-component-demo
---
title: Validation
demo: '#examples/input-phone/validation.vue'
---
The component provides a `@validation` event to indicate if the input value is valid or not
::

::doc-component-demo
---
title: Disabled State
demo: '#examples/input-phone/disabled.vue'
---
::


::doc-component-demo
---
title: Input Size
demo: '#examples/input-phone/size.vue'
---
::

::doc-component-demo
---
title: Input Shapes
demo: '#examples/input-phone/shape.vue'
---
::


:doc-component-meta{name="AddonInputPhone"}
