<script setup lang="ts">
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})

type TProps = {
  image?: string
}
const props = defineProps<TProps>()
const image = computed(() => props.image ?? data.value.cover)
</script>
<template>
  <div class="h-80 w-full overflow-hidden rounded-md mt-8">
    <img :src="image" alt="" class="object-cover !mt-0 ">
  </div>
</template>

<style scoped></style>
