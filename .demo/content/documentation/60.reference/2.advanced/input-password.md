---
title: AddonInputPassword
components:
  - AddonInputPassword
description: Secure password input field with password visibility toggle.
icon:
  src: /img/illustrations/components/markdown-icon.svg
  srcDark: /img/illustrations/components/markdown-icon.svg
---

## Password Input

Ready to use password input component with validation and formatting.
The component extend the :doc-linker{to="BaseInput"} component, so you can use all the props and events of the base component.

:::doc-info{title="Optional dependency" icon="solar:shield-warning-bold-duotone"}
This component uses the [zxcvbn-ts](https://github.com/zxcvbn-ts/zxcvbn) package to detect and validate the password input strength.
:::

<!-- demo: #examples/input-password/base -->

## Change the locale

Changing the locale allows to change the language of the password strength feedback and the dictionaries used to validate the password.

You can install and load dictionaries from the [zxcvbn-ts](https://github.com/zxcvbn-ts/zxcvbn/tree/master/packages/languages) package or create your own dictionary.

<!-- demo: #examples/input-password/locale -->

## Validation

<!-- demo: #examples/input-password/validation -->
## Disabled State

<!-- demo: #examples/input-password/disabled -->

## Reacting to other inputs

<!-- demo: #examples/input-password/user-input -->

:doc-component-meta{name="AddonInputPassword"}
