<template>
  <NavigationMenuIndicator
    class="absolute  w-[--reka-navigation-menu-indicator-size] translate-x-[--reka-navigation-menu-indicator-position]  data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform] duration-300"
  >
    <div
      class="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white"
    />
  </NavigationMenuIndicator>
</template>
