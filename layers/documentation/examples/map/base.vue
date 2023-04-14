<template>
  <div class="w-full">
    <NuxtLink to="/dashboards/map-left" class="hover:[&>img]:!border-primary-500">
      <img
        class="border-muted-200 hover:shadow-muted-300/30 block w-full rounded-lg border transition-all duration-300 hover:shadow-xl dark:hidden"
        src="/img/apps/tairo-map.png"
        alt="Tairo map panel"
      />

      <img
        class="border-muted-700 hover:shadow-muted-800/30 hidden w-full rounded-lg border transition-all duration-300 hover:shadow-xl dark:block"
        src="/img/apps/tairo-map-dark.png"
        alt="Tairo map panel dark"
      />
    </NuxtLink>
  </div>
</template>
