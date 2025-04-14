---
title: Topnav
components:
  - TairoTopnavLayout
  - TairoTopnavNavbar
  - TairoTopnavHeader
  - TairoTopnavContent
---

# Topnav layout

:::doc-image
---
src: /img/screens/starter-topnav.png
srcDark: /img/screens/starter-topnav-dark.png
---
:::

::doc-button{to="/starters/topnav" variant="primary"}
Preview
::

::doc-button{to="/starters/topnav-slim" class="ms-2"}
Preview (slim)
::

## Overview

The topnav layout provides a top navigation bar with a header and content area. It is useful for applications that need to display full width content. You can either use button style navigation links wuth dropdowns or a simple list of tabbed links.

### Features

::doc-checklist
---
items:
  - Full width navigation
  - Customizable header
  - Includes customizable dropdowns
  - Responsive support
---
::

:::doc-image
---
src: /img/screens/starter-topnav-slim.png
srcDark: /img/screens/starter-topnav-slim-dark.png
---
:::

## Anatomy

::code-group
```vue [<app>/app/layouts/topnav.vue]
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
::code-group
```css [<app>/app/assets/main.css]
@theme {
  --tairo-topnav-content-width: 100%;
}
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
