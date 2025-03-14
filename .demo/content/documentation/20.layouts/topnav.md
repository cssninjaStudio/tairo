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
        <TairoTopnavContent />
      </TairoTopnavHeader>
    </TairoTopnavNavbar>

    <TairoTopnavContent>
      <slot />
    </TairoTopnavContent>
  </TairoTopnavLayout>
</template>
```
::

## Components

### TairoTopnavLayout
:doc-component-meta{name="TairoTopnavLayout"}

### TairoTopnavNavbar
:doc-component-meta{name="TairoTopnavNavbar"}

### TairoTopnavHeader
:doc-component-meta{name="TairoTopnavHeader"}

### TairoTopnavContent
:doc-component-meta{name="TairoTopnavContent"}
