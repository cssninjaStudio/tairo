<template>
  <div class="flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end">
    <div class="flex-1">
      <BaseSelect
        v-model="first"
        contrast="default-contrast"
        size="sm"
        rounded="md"
        label="Rounded: md"
      >
        <option value="">
          Select a hero
        </option>

        <option value="Superman">
          Superman
        </option>

        <option value="Batman">
          Batman
        </option>

        <option value="Iron man">
          Iron man
        </option>

        <option value="Magneto">
          Magneto
        </option>

        <option value="Cyclops">
          Cyclops
        </option>
      </BaseSelect>
    </div>

    <div class="flex-1">
      <BaseSelect
        v-model="second"
        contrast="default-contrast"
        size="md"
        rounded="md"
        label="Rounded: md"
      >
        <option value="">
          Select a hero
        </option>

        <option value="Superman">
          Superman
        </option>

        <option value="Batman">
          Batman
        </option>

        <option value="Iron man">
          Iron man
        </option>

        <option value="Magneto">
          Magneto
        </option>

        <option value="Cyclops">
          Cyclops
        </option>
      </BaseSelect>
    </div>

    <div class="flex-1">
      <BaseSelect
        v-model="third"
        contrast="default-contrast"
        size="lg"
        rounded="md"
        label="Rounded: md"
      >
        <option value="">
          Select a hero
        </option>

        <option value="Superman">
          Superman
        </option>

        <option value="Batman">
          Batman
        </option>

        <option value="Iron man">
          Iron man
        </option>

        <option value="Magneto">
          Magneto
        </option>

        <option value="Cyclops">
          Cyclops
        </option>
      </BaseSelect>
    </div>
  </div>
</template>

<script setup lang="ts">
const first = ref('')
const second = ref('')
const third = ref('')
</script>
