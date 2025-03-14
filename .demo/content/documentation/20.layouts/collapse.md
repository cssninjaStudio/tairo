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
