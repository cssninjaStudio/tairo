<template>
  <NavigationMenuViewport
    class="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut absolute top-0 h-[var(--reka-navigation-menu-viewport-height)] origin-[top_center] w-full overflow-hidden border border-muted-200 dark:border-muted-800 rounded-xl shadow-md shadow-muted-300/20 dark:shadow-muted-800/20 bg-white dark:bg-muted-950 transition-[width,_height,_left] duration-300 sm:w-[var(--reka-navigation-menu-viewport-width)]start-[var(--reka-navigation-menu-viewport-left)]"
  />
</template>
