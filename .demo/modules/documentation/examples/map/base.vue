<template>
  <div class="w-full">
    <NuxtLink
      to="/dashboards/map-left"
      class="hover:[&>img]:!border-primary-500"
    >
      <img
        class="w-full block dark:hidden rounded-lg border border-muted-200 hover:shadow-xl hover:shadow-muted-300/30 transition-all duration-300"
        src="/img/apps/tairo-map.png"
        alt="Tairo map panel"
      />
      <img
        class="w-full hidden dark:block rounded-lg border border-muted-700 hover:shadow-xl hover:shadow-muted-800/30 transition-all duration-300"
        src="/img/apps/tairo-map-dark.png"
        alt="Tairo map panel dark"
      />
    </NuxtLink>
  </div>
</template>
