---
title: Sidenav
---

# Sidenav layout

:::doc-image
---
src: /img/apps/tairo-layout-sidenav.png
srcDark: /img/apps/tairo-layout-sidenav-dark.png
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
  <TairoSidenavLayout>
    <TairoSidenavSidebar>
      <TairoSidenavSidebarHeader />
      <TairoSidenavSidebarDivider />
      <TairoSidenavLinks>
        <TairoSidenavLink />
      </TairoSidenavLinks>
    </TairoSidenavSidebar>

    <TairoSidenavLayoutContent>
      <slot />
    </TairoSidenavLayoutContent>
  </TairoSidenavLayout>
</template>
```
::

## Components

### TairoSidenavLayout
:doc-component-meta{name="TairoSidenavLayout"}

### TairoSidenavSidebar
:doc-component-meta{name="TairoSidenavSidebar"}

### TairoSidenavSidebar
:doc-component-meta{name="TairoSidenavSidebar"}

### TairoSidenavSidebarHeader
:doc-component-meta{name="TairoSidenavSidebarHeader"}

### TairoSidenavSidebarDivider
:doc-component-meta{name="TairoSidenavSidebarDivider"}

### TairoSidenavLinks
:doc-component-meta{name="TairoSidenavLinks"}

### TairoSidenavLink
:doc-component-meta{name="TairoSidenavLink"}

### TairoSidenavLayoutContent
:doc-component-meta{name="TairoSidenavLayoutContent"}
