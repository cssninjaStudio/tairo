<script>
/* eslint-disable tailwindcss/no-custom-classname */
</script>

<template>
  <div class="placeload animate-placeload"></div>
</template>

<style>
/* Placeload styles and animation */
.placeload {
  position: relative;
  background: rgb(0 0 0 / 7%);
  background: linear-gradient(
    to right,
    rgb(0 0 0 / 7%) 8%,
    rgb(0 0 0 / 15%) 18%,
    rgb(0 0 0 / 7%) 33%
  );
  background-size: 800px 104px;
  background-size: 1200px 104px;
}

.dark .placeload {
  position: relative;
  background: rgb(255 255 255 / 15%);
  background: linear-gradient(
    to right,
    rgb(255 255 255 / 15%) 8%,
    rgb(255 255 255 / 24%) 18%,
    rgb(255 255 255 / 15%) 33%
  );
  background-size: 800px 104px;
  background-size: 1200px 104px;
}

.animate-placeload {
  animation: placeload 1s linear infinite forwards;
}
@keyframes placeload {
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
}
</style>