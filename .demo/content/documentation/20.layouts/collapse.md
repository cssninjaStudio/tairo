---
title: Collapse
---

# Collapse layout

:::doc-image
---
src: /img/apps/tairo-layout-collapse.png
srcDark: /img/apps/tairo-layout-collapse-dark.png
---
:::

## Overview

### Features

::doc-checklist
---
items:
  - Feature 1
  - Feature 2
  - Feature 3
---
::

## Anatomy

::code-group
```vue [<app>/app/layouts/collapse.vue]
<template>
  <TairoCollapseLayout>
    <TairoCollapseSidebarHeader />
    <TairoCollapseSidebarLinks>
      <TairoCollapseLink />
    </TairoCollapseSidebarLinks>

    <TairoCollapseLayoutContent>
      <slot />
    </TairoCollapseLayoutContent>
  </TairoCollapseLayout>
</template>
```
::

## Components

### TairoCollapseLayout
:doc-component-meta{name="TairoCollapseLayout"}

### TairoCollapseSidebarHeader
:doc-component-meta{name="TairoCollapseSidebarHeader"}

### TairoCollapseSidebarLinks
:doc-component-meta{name="TairoCollapseSidebarLinks"}

### TairoCollapseLink
:doc-component-meta{name="TairoCollapseLink"}

### TairoCollapseLayoutContent
:doc-component-meta{name="TairoCollapseLayoutContent"}
