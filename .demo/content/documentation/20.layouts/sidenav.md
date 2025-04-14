---
title: Sidenav
components:
  - TairoSidenavLayout
  - TairoSidenavCollapsible
  - TairoSidenavCollapsibleLink
  - TairoSidenavCollapsibleTrigger
  - TairoSidenavSidebar
  - TairoSidenavSidebarHeader
  - TairoSidenavSidebarDivider
  - TairoSidenavSidebarLinks
  - TairoSidenavBackdrop
  - TairoSidenavSidebarLink
  - TairoSidenavContent
---

# Sidenav layout

:::doc-image
---
src: /img/screens/starter-sidenav.png
srcDark: /img/screens/starter-sidenav-dark.png
---
:::

::doc-button{to="/starters/sidenav" variant="primary"}
Preview
::

## Overview

The sidenav layout is a single sided navigation layout. It has a sidebar with a list of items that can either be links or buttons, that can be arranged in a collapsible manner.

### Features

::doc-checklist
---
items:
  - Medium sized navigation
  - Collapsible links
  - Responsive support
---
::

## Anatomy

::code-group
```vue [<app>/app/layouts/sidenav.vue]
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
::code-group
```css [<app>/app/assets/main.css]
@theme {
  --tairo-sidenav-sidebar-width: 16.25rem;
}
```
::

## Components

### TairoSidenavLayout
:doc-component-meta{name="TairoSidenavLayout"}

### TairoSidenavCollapsible
:doc-tag{icon="nui-icon:rekaui-icon" label="CollapsibleRoot" to="https://reka-ui.com/docs/components/collapsible"}
:doc-component-meta{name="TairoSidenavCollapsible"}

### TairoSidenavCollapsibleLink
:doc-component-meta{name="TairoSidenavCollapsibleLink"}

### TairoSidenavCollapsibleTrigger
:doc-tag{icon="nui-icon:rekaui-icon" label="CollapsibleTrigger" to="https://reka-ui.com/docs/components/collapsible"}
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
