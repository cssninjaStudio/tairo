<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseSelect
      v-model="first"
      size="sm"
      rounded="md"
      label="Rounded: md"
      disabled
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

    <BaseSelect
      v-model="first"
      icon="fa6-solid:mask"
      size="sm"
      rounded="md"
      label="Rounded: md"
      disabled
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

    <BaseSelect
      v-model="second"
      size="md"
      rounded="md"
      label="Rounded: md"
      disabled
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

    <BaseSelect
      v-model="second"
      icon="fa6-solid:mask"
      size="md"
      rounded="md"
      label="Rounded: md"
      disabled
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

    <BaseSelect
      v-model="third"
      size="lg"
      rounded="md"
      label="Rounded: md"
      disabled
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

    <BaseSelect
      v-model="third"
      icon="fa6-solid:mask"
      size="lg"
      rounded="md"
      label="Rounded: md"
      disabled
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
</template>

<script setup lang="ts">
const first = ref('')
const second = ref('')
const third = ref('')
</script>
