<script setup lang="ts">
function raiseError() {
  throw new Error('Test error!')
}
raiseError()
</script>

<template>
  <div>
    <h1>Test error</h1>
  </div>
</template>
