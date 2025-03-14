---
title: Sidebar
---

# Sidebar layout

:::doc-image
---
src: /img/apps/tairo-subsidebar.png
srcDark: /img/apps/tairo-subsidebar-dark.png
---
:::

## Overview

The sidebar layout is a double sided navigation layout. It has a sidebar with a list of menu links and a subsidebar with a list of submenu links.

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

## Examples

### Example 1
### Example 2
### Example 3
### Example 4
### Example 5
### Example 6
### Example 7
### Example 8
### Example 9
### Example 10
### Example 11
