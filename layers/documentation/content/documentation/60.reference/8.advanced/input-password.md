---
title: AddonInputPassword
components: 
  - AddonInputPassword
description: Secure password input field with password visibility toggle.
icon:
  src: /img/illustrations/components/markdown-icon.svg
  srcDark: /img/illustrations/components/markdown-icon.svg
---


::doc-component-demo
---
title: Password Input
demo: '#examples/input-password/base.vue'
---
Ready to use password input component with validation and formatting.
The component extend the :doc-linker{to="BaseInput"} component, so you can use all the props and events of the base component.

:::doc-message{color="muted-contrast" icon="ri:markdown-fill"}
This component uses [zxcvbn-ts](https://github.com/zxcvbn-ts/zxcvbn) to detect and validate the password input strength.
:::
::


::doc-component-demo
---
title: Change the locale
demo: '#examples/input-password/locale.vue'
---
Changing the locale allows to change the language of the password strength feedback and the dictionaries used to validate the password.

You can install and load dictionaries from the [zxcvbn-ts](https://github.com/zxcvbn-ts/zxcvbn/tree/master/packages/languages) package or create your own dictionary.
::

::doc-component-demo
---
title: Validation
demo: '#examples/input-password/validation.vue'
---

::
::doc-component-demo
---
title: Disabled State
demo: '#examples/input-password/disabled.vue'
---

::

::doc-component-demo
---
title: Reacting to other inputs
demo: '#examples/input-password/user-input.vue'
---
::

:doc-component-meta{name="AddonInputPassword"}
