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
      <TairoSidenavSidebarLinks>
        <TairoSidenavSidebarLink />
      </TairoSidenavSidebarLinks>
    </TairoSidenavSidebar>

    <TairoSidenavContent>
      <slot />
    </TairoSidenavContent>
  </TairoSidenavLayout>
</template>
```
::

## Components

### TairoSidenavLayout
:doc-component-meta{name="TairoSidenavLayout"}

### TairoSidenavCollapsible
:doc-component-meta{name="TairoSidenavCollapsible"}

### TairoSidenavCollapsibleLink
:doc-component-meta{name="TairoSidenavCollapsibleLink"}

### TairoSidenavCollapsibleTrigger
:doc-component-meta{name="TairoSidenavCollapsibleTrigger"}

### TairoSidenavSidebar
:doc-component-meta{name="TairoSidenavSidebar"}

### TairoSidenavSidebarHeader
:doc-component-meta{name="TairoSidenavSidebarHeader"}

### TairoSidenavSidebarDivider
:doc-component-meta{name="TairoSidenavSidebarDivider"}

### TairoSidenavSidebarLinks
:doc-component-meta{name="TairoSidenavSidebarLinks"}

### TairoSidenavSidebarLink
:doc-component-meta{name="TairoSidenavSidebarLink"}

### TairoSidenavContent
:doc-component-meta{name="TairoSidenavContent"}
