---
title: Sidebar
---

# Sidebar layout

:::doc-image
---
src: /img/screens/starter-sidebar.png
srcDark: /img/screens/starter-sidebar-dark.png
---
:::

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
    <TairoSidebarLayoutNav>
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
    </TairoSidebarLayoutNav>

    <TairoSidebarContent>
      <slot />
    </TairoSidebarContent>
  </TairoSidebarLayout>
</template>
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

### TairoSidebarLayoutNav
:doc-component-meta{name="TairoSidebarLayoutNav"}

### TairoSidebarLinks
:doc-component-meta{name="TairoSidebarLinks"}

### TairoSidebarLink
:doc-component-meta{name="TairoSidebarLink"}

### TairoSidebarTrigger
:doc-component-meta{name="TairoSidebarTrigger"}

### TairoSidebarSubsidebar
:doc-component-meta{name="TairoSidebarSubsidebar"}

### TairoSidebarSubsidebarCollapsible
:doc-component-meta{name="TairoSidebarSubsidebarCollapsible"}

### TairoSidebarSubsidebarCollapsibleLink
:doc-component-meta{name="TairoSidebarSubsidebarCollapsibleLink"}

### TairoSidebarSubsidebarCollapsibleTrigger
:doc-component-meta{name="TairoSidebarSubsidebarCollapsibleTrigger"}

### TairoSidebarSubsidebarContent
:doc-component-meta{name="TairoSidebarSubsidebarContent"}

### TairoSidebarSubsidebarHeader
:doc-component-meta{name="TairoSidebarSubsidebarHeader"}
