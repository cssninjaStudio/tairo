---
title: Collapse
---

# Collapse layout

:::doc-image
---
src: /img/screens/starter-collapse.png
srcDark: /img/screens/starter-collapse-dark.png
---
:::

## Overview

The collapse layout is a sidebar layout that can be collapsed or expanded. It is useful for applications that need to display a lot of information in a small space.

### Features

::doc-checklist
---
items:
  - Collapsible sidebar
  - Single or nested links
  - Scrollable middle area
  - Responsive support
---
::

## Anatomy

::code-group
```vue [<app>/app/layouts/collapse.vue]
<template>
  <TairoCollapseLayout>
    <TairoCollapseSidebar>
      <TairoCollapseSidebarHeader />
      <TairoCollapseSidebarClose />
      <TairoCollapseSidebarLinks>
        <TairoCollapseSidebarLink />

        <TairoCollapseCollapsible>
          <template #trigger>
            <TairoCollapseCollapsibleTrigger />
          </template>

          <TairoCollapseCollapsibleLink />
        </TairoCollapseCollapsible>
      </TairoCollapseSidebarLinks>
    </TairoCollapseSidebar>

    <TairoCollapseContent>
      <slot />
    </TairoCollapseContent>
  </TairoCollapseLayout>
</template>
```
::

## Components

### TairoCollapseLayout
:doc-component-meta{name="TairoCollapseLayout"}

### TairoCollapseSidebar
:doc-component-meta{name="TairoCollapseSidebar"}

### TairoCollapseSidebarHeader
:doc-component-meta{name="TairoCollapseSidebarHeader"}

### TairoCollapseSidebarClose
:doc-component-meta{name="TairoCollapseSidebarClose"}

### TairoCollapseSidebarLinks
:doc-component-meta{name="TairoCollapseSidebarLinks"}

### TairoCollapseSidebarLink
:doc-component-meta{name="TairoCollapseSidebarLink"}

### TairoCollapseCollapsible
:doc-component-meta{name="TairoCollapseCollapsible"}

### TairoCollapseCollapsibleTrigger
:doc-component-meta{name="TairoCollapseCollapsibleTrigger"}

### TairoCollapseCollapsibleLink
:doc-component-meta{name="TairoCollapseCollapsibleLink"}

### TairoCollapseContent
:doc-component-meta{name="TairoCollapseContent"}
