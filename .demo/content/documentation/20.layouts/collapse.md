---
title: Collapse
components:
  - TairoCollapseLayout
  - TairoCollapseSidebar
  - TairoCollapseSidebarHeader
  - TairoCollapseSidebarClose
  - TairoCollapseSidebarLinks
  - TairoCollapseSidebarLink
  - TairoCollapseCollapsible
  - TairoCollapseCollapsibleTrigger
  - TairoCollapseCollapsibleLink
  - TairoCollapseContent
  - TairoCollapseBackdrop
---

# Collapse layout

:::doc-image
---
src: /img/screens/starter-collapse.png
srcDark: /img/screens/starter-collapse-dark.png
---
:::

::doc-button{to="/starters/collapse" variant="primary"}
Preview
::

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

::code-group
```css [<app>/app/assets/main.css]
@theme {
  --tairo-collapse-width-open: 17rem;
  --tairo-collapse-width-collapsed: 5rem;
}
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
:doc-tag{icon="nui-icon:rekaui-icon" label="CollapsibleRoot" to="https://reka-ui.com/docs/components/collapsible"}
:doc-component-meta{name="TairoCollapseCollapsible"}

### TairoCollapseCollapsibleTrigger
:doc-tag{icon="nui-icon:rekaui-icon" label="CollapsibleTrigger" to="https://reka-ui.com/docs/components/collapsible"}
:doc-component-meta{name="TairoCollapseCollapsibleTrigger"}

### TairoCollapseCollapsibleLink
:doc-component-meta{name="TairoCollapseCollapsibleLink"}

### TairoCollapseContent
:doc-component-meta{name="TairoCollapseContent"}
