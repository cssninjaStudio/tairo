---
title: Topnav
---

# Topnav layout

:::doc-image
---
src: /img/apps/tairo-layout-topnav.png
srcDark: /img/apps/tairo-layout-topnav-dark.png
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
  <TairoTopnavLayout>
    <TairoTopnavNavbar>
      <TairoTopnavHeader>
        <TairoTopnavWorkspace />
      </TairoTopnavHeader>
      <TairoTopnavMenu>
        <TairoTopnavMenuList>
          <TairoTopnavMenuItem>
            <TairoTopnavMenuTrigger />
            <TairoTopnavMenuContent>
              <TairoTopnavMenuListItems>
                ...
              </TairoTopnavMenuListItems>
            </TairoTopnavMenuContent>
          </TairoTopnavMenuItem>
        </TairoTopnavMenuList>
      </TairoTopnavMenu>
    </TairoTopnavNavbar>

    <TairoTopnavLayoutContent>
      <slot />
    </TairoTopnavLayoutContent>
  </TairoTopnavLayout>
</template>
```
::

## Components

### TairoTopnavLayout
:doc-component-meta{name="TairoTopnavLayout"}

### TairoTopnavLayout
:doc-component-meta{name="TairoTopnavLayout"}

