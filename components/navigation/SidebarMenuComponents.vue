<script setup lang="ts"></script>

<template>
  <ul class="py-2.5">
    <!-- Menu item -->
    <li class="min-h-[36px] mb-1">
      <NuxtLink
        to="/"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Components Hub</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="min-h-[36px] mb-1">
      <NuxtLink
        to="/"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Content</span>
      </NuxtLink>
    </li>
    <!-- Menu item -->
    <li class="min-h-[36px] mb-1">
      <NuxtLink
        to="/"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Table</span>
      </NuxtLink>
    </li>
    <!-- Menu separator -->
    <li class="min-h-[36px] mt-4 mb-1">
      <span class="font-sub text-xs uppercase text-slate-500">Display</span>
    </li>
    <!-- Menu item -->
    <li class="min-h-[36px] mb-1">
      <NuxtLink
        to="/components/avatar"
        class="flex items-center text-slate-400 hover:text-primary-500 transition-colors duration-300"
      >
        <span class="font-text text-sm">Avatar</span>
      </NuxtLink>
    </li>
  </ul>
</template>
