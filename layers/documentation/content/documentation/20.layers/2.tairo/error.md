---
title: TairoError
description: Tairo provides a simple way to show errors to the user. It uses the `TairoError` component to show the error.
components:
  - TairoError
icon:
  src: /img/illustrations/components/button-close-icon.svg
  srcDark: /img/illustrations/components/button-close-icon.svg
---

::doc-component-demo
---
title: Tairo error
demo: '#examples/tairo/error.vue'
---
Tairo has built-in `TairoError` component to display helpfull error page during developpement process. It print an easy to read stacktrace and allows you to quickly retry without reloading the entire page. When building your app, everything get treeshaken and a beautiful message is display instead to your users.

This component is meant to be used in special [`error.vue`](https://nuxt.com/docs/getting-started/error-handling#rendering-an-error-page) nuxt page. 
::