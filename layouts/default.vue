<script setup lang="ts">
const { isDark } = useDarkmode()
</script>

<template>
  <Head>
    <Title>Tairo</Title>
    <Meta name="description" content="title" />
    <Link rel="icon" type="image/x-icon" href="/img/favicon.png" />
  </Head>
  <div :class="isDark ? 'dark' : ''">
    <slot></slot>
  </div>
</template>
