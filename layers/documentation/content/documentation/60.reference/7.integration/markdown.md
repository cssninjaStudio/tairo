---
title: Markdown
components: 
  - AddonMarkdownRemark
description: Convert markdown to HTML client-side using the unified remak/rehype and shiki. Use the built-in component to render markdown content.
icon:
  src: /img/illustrations/components/markdown-icon.svg
  srcDark: /img/illustrations/components/markdown-icon.svg
---


::doc-component-demo
---
title: Render Markdown
demo: '#examples/markdown/base.vue'
---
Use this component to render markdown content client-side.
It wraps rendered HTML in the :doc-linker{to="BaseProse"} component, aplpying the Tailwind CSS <code>prose</code> class from the typography plugin.

:::doc-message{type="muted" icon="ri:markdown-fill"}
This component uses [remark](https://github.com/remarkjs/remark) and [rehype](https://github.com/rehypejs/rehype) 
to parse and render the markdown content.
:::
::

:doc-component-meta{name="AddonMarkdownRemark"}
