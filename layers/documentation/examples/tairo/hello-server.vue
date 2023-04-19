<template>
  <div class="max-w-lg">
    <BaseCard class="p-6">
      <BaseInput label="Your name" v-model="input" />

      <BaseParagraph class="mt-4 line-clamp-1 max-w-sm"> {{ data }} </BaseParagraph>
    </BaseCard>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const input = ref('')
    const query = computed(() => ({ from: input.value }))

    const { data } = useFetch('/api/hello', {
      query,
    })
    return {
      data,
      input,
    }
  },
}
</script>
