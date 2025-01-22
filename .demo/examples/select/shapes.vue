<script setup lang="ts">
const options = reactive({
  first: undefined,
  second: undefined,
  third: undefined,
  fourth: undefined,
  fifth: undefined,
})
</script>

<template>
  <BaseFocusLoop class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <BaseSelect
      v-model="options.first"
      rounded="none"
      label="Rounded: none"
    >
      <BaseSelectItem value="Superman">
        Superman
      </BaseSelectItem>

      <BaseSelectItem value="Batman">
        Batman
      </BaseSelectItem>

      <BaseSelectItem value="Iron man">
        Iron man
      </BaseSelectItem>

      <BaseSelectItem value="Magneto">
        Magneto
      </BaseSelectItem>

      <BaseSelectItem value="Cyclops">
        Cyclops
      </BaseSelectItem>
    </BaseSelect>

    <BaseSelect
      v-model="options.second"
      rounded="sm"
      label="Rounded: sm"
    >
      <BaseSelectItem value="Superman">
        Superman
      </BaseSelectItem>

      <BaseSelectItem value="Batman">
        Batman
      </BaseSelectItem>

      <BaseSelectItem value="Iron man">
        Iron man
      </BaseSelectItem>

      <BaseSelectItem value="Magneto">
        Magneto
      </BaseSelectItem>

      <BaseSelectItem value="Cyclops">
        Cyclops
      </BaseSelectItem>
    </BaseSelect>

    <BaseSelect
      v-model="options.third"
      rounded="md"
      label="Rounded: md"
    >
      <BaseSelectItem value="Superman">
        Superman
      </BaseSelectItem>

      <BaseSelectItem value="Batman">
        Batman
      </BaseSelectItem>

      <BaseSelectItem value="Iron man">
        Iron man
      </BaseSelectItem>

      <BaseSelectItem value="Magneto">
        Magneto
      </BaseSelectItem>

      <BaseSelectItem value="Cyclops">
        Cyclops
      </BaseSelectItem>
    </BaseSelect>

    <BaseSelect
      v-model="options.fourth"
      rounded="lg"
      label="Rounded: lg"
    >
      <BaseSelectItem value="Superman">
        Superman
      </BaseSelectItem>

      <BaseSelectItem value="Batman">
        Batman
      </BaseSelectItem>

      <BaseSelectItem value="Iron man">
        Iron man
      </BaseSelectItem>

      <BaseSelectItem value="Magneto">
        Magneto
      </BaseSelectItem>

      <BaseSelectItem value="Cyclops">
        Cyclops
      </BaseSelectItem>
    </BaseSelect>

    <BaseSelect
      v-model="options.fifth"
      rounded="full"
      label="Rounded: full"
    >
      <BaseSelectItem value="Superman">
        Superman
      </BaseSelectItem>

      <BaseSelectItem value="Batman">
        Batman
      </BaseSelectItem>

      <BaseSelectItem value="Iron man">
        Iron man
      </BaseSelectItem>

      <BaseSelectItem value="Magneto">
        Magneto
      </BaseSelectItem>

      <BaseSelectItem value="Cyclops">
        Cyclops
      </BaseSelectItem>
    </BaseSelect>
  </BaseFocusLoop>
</template>
