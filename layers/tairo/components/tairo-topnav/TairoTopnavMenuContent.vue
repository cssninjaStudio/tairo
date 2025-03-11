<template>
  <NavigationMenuContent
    class="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 start-0 w-full sm:w-auto"
  >
    <slot />
  </NavigationMenuContent>
</template>
