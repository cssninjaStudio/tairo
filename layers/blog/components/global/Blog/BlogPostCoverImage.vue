<script setup lang="ts">
const props = defineProps<TProps>()
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})

type TProps = {
  image?: string
}
const image = computed(() => props.image ?? data.value.cover)
</script>
<template>
  <div class="mt-8 h-80 w-full overflow-hidden rounded-md">
    <img :src="image" alt="" class="!mt-0 object-cover" />
  </div>
</template>
