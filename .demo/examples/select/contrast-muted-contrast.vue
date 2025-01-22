<script setup lang="ts">
const first = ref<string>()
const second = ref<string>()
const third = ref<string>()
</script>

<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseSelect
        v-model="first"
        contrast="muted-contrast"
        size="sm"
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
    </div>

    <div class="flex-1">
      <BaseSelect
        v-model="second"
        contrast="muted-contrast"
        size="md"
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
    </div>

    <div class="flex-1">
      <BaseSelect
        v-model="third"
        contrast="muted-contrast"
        size="lg"
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
    </div>
  </div>
</template>
