---
title: Phone Input
navigation:
  title: libphonenumber (tel input)
components:
  - AddonInputPhone
description: International phone number input field with country code dropdown.
icon:
  src: /img/illustrations/components/markdown-icon.svg
  srcDark: /img/illustrations/components/markdown-icon.svg
---

# Phone Input

:::doc-info{title="Optional dependencies" icon="solar:shield-warning-bold-duotone"}
This component uses the [libphonenumber-js](https://www.npmjs.com/package/libphonenumber-js) and the [country-codes-list](https://www.npmjs.com/package/country-codes-list)
packages to detect and validate the phone input value.
:::

Ready to use phone input component with country code dropdown, with validation and formatting.

## Example

<!-- demo: #examples/input-phone/base -->

### Country Input

The component provides a country dropdown to select the country code, you can use the `country` prop to set the default country, otherwise it will be detected from the user's input.
You can use the `v-model:country` notation to get the selected/detected country code.

<!-- demo: #examples/input-phone/country -->

### International and National Formats

By default, the input value will be formatted in the international format, you can change this behavior with the `format` prop to change it to `national`.

<!-- demo: #examples/input-phone/format -->

### Validation

The component provides a `@validation` event to indicate if the input value is valid or not

<!-- demo: #examples/input-phone/validation -->

### Disabled State

<!-- demo: #examples/input-phone/disabled -->

### Input Size

<!-- demo: #examples/input-phone/size -->

### Input Shapes

<!-- demo: #examples/input-phone/shape -->

## Components

### AddonInputPhone

:doc-component-meta{name="AddonInputPhone"}
