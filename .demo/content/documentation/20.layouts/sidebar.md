---
title: Sidebar
components:
  - TairoSidebarLayout
  - TairoSidebarNav
  - TairoSidebar
  - TairoSidebarLinks
  - TairoSidebarLink
  - TairoSidebarTrigger
  - TairoSidebarSubsidebar
  - TairoSidebarSubsidebarHeader
  - TairoSidebarSubsidebarLink
  - TairoSidebarSubsidebarContent
  - TairoSidebarSubsidebarCollapsible
  - TairoSidebarSubsidebarCollapsibleTrigger
  - TairoSidebarSubsidebarCollapsibleLink
  - TairoSidebarBackdrop
  - TairoSidebarContent
---

# Sidebar layout

:::doc-image
---
src: /img/screens/starter-sidebar.png
srcDark: /img/screens/starter-sidebar-dark.png
---
:::

::doc-button{to="/starters/sidebar" variant="primary"}
Preview
::

## Overview

The sidebar layout is a double sided navigation layout. It has a sidebar with a list of items that can either be links or buttons, and customizable subsidebars that can be toggled based on the active item.

### Features

::doc-checklist
---
items:
  - Solid app navigation
  - Customizable subsidebars
  - Single or nested links
  - Responsive support
---
::

## Anatomy

::code-group
```vue [<app>/app/layouts/sidebar.vue]
<template>
  <TairoSidebarLayout>
    <TairoSidebarNav>
      <TairoSidebar>
        <TairoSidebarLinks>
          <TairoSidebarTrigger />
        </TairoSidebarLinks>
      </TairoSidebar>

      <TairoSidebarSubsidebar>
        <TairoSidebarSubsidebarHeader />

        <TairoSidebarSubsidebarContent>
          <TairoSidebarSubsidebarLink />
          <TairoSidebarSubsidebarCollapsible>
            <template #trigger>
              <TairoSidebarSubsidebarCollapsibleTrigger />
            </template>

            <TairoSidebarSubsidebarCollapsibleLink />
          </TairoSidebarSubsidebarCollapsible>
        </TairoSidebarSubsidebarContent>
      </TairoSidebarSubsidebar>
    </TairoSidebarNav>

    <TairoSidebarContent>
      <slot />
    </TairoSidebarContent>
  </TairoSidebarLayout>
</template>
```
::
::code-group
```css [<app>/app/assets/main.css]
@theme {
  --tairo-sidebar-icon-width: 3.5rem;
  --tairo-sidebar-subsidebar-width: 15rem;
}
```
::

## Components

### TairoSidebar
:doc-component-meta{name="TairoSidebar"}

### TairoSidebarBackdrop
:doc-component-meta{name="TairoSidebarBackdrop"}

### TairoSidebarLayout
:doc-component-meta{name="TairoSidebarLayout"}

### TairoSidebarContent
:doc-component-meta{name="TairoSidebarContent"}

### TairoSidebarNav
:doc-component-meta{name="TairoSidebarNav"}

### TairoSidebarLinks
:doc-component-meta{name="TairoSidebarLinks"}

### TairoSidebarLink
:doc-component-meta{name="TairoSidebarLink"}

### TairoSidebarTrigger
:doc-component-meta{name="TairoSidebarTrigger"}

### TairoSidebarSubsidebar
:doc-component-meta{name="TairoSidebarSubsidebar"}

### TairoSidebarSubsidebarHeader
:doc-tag{icon="nui-icon:shurikenui-icon" label="BaseHeading" to="https://shurikenui.com/docs/components/heading"}
:doc-component-meta{name="TairoSidebarSubsidebarHeader"}

### TairoSidebarSubsidebarLink
:doc-component-meta{name="TairoSidebarSubsidebarLink"}

### TairoSidebarSubsidebarCollapsible
:doc-tag{icon="nui-icon:rekaui-icon" label="CollapsibleRoot" to="https://reka-ui.com/docs/components/collapsible"}
:doc-component-meta{name="TairoSidebarSubsidebarCollapsible"}

### TairoSidebarSubsidebarCollapsibleLink
:doc-component-meta{name="TairoSidebarSubsidebarCollapsibleLink"}

### TairoSidebarSubsidebarCollapsibleTrigger
:doc-tag{icon="nui-icon:rekaui-icon" label="CollapsibleTrigger" to="https://reka-ui.com/docs/components/collapsible"}
:doc-component-meta{name="TairoSidebarSubsidebarCollapsibleTrigger"}

### TairoSidebarSubsidebarContent
:doc-component-meta{name="TairoSidebarSubsidebarContent"}

### TairoSidebarSubsidebarHeader
:doc-component-meta{name="TairoSidebarSubsidebarHeader"}
