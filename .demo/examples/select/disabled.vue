<script setup lang="ts">
const first = ref<string>()
const second = ref<string>()
const third = ref<string>()
</script>

<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseSelect
      v-model="first"
      size="sm"
      rounded="md"
      label="Rounded: md"
      disabled
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
      v-model="first"
      icon="fa6-solid:mask"
      size="sm"
      rounded="md"
      label="Rounded: md"
      disabled
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
      v-model="second"
      size="md"
      rounded="md"
      label="Rounded: md"
      disabled
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
      v-model="second"
      icon="fa6-solid:mask"
      size="md"
      rounded="md"
      label="Rounded: md"
      disabled
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
      v-model="third"
      size="lg"
      rounded="md"
      label="Rounded: md"
      disabled
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
      v-model="third"
      icon="fa6-solid:mask"
      size="lg"
      rounded="md"
      label="Rounded: md"
      disabled
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
  </div>
</template>
