<template>
  <BaseFocusLoop class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <BaseSelect
      v-model="options.first"
      rounded="none"
      label="Rounded: none"
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
      v-model="options.second"
      rounded="sm"
      label="Rounded: sm"
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
      v-model="options.third"
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

    <BaseSelect
      v-model="options.fourth"
      rounded="lg"
      label="Rounded: lg"
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
      v-model="options.fifth"
      rounded="full"
      label="Rounded: full"
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
  </BaseFocusLoop>
</template>

<script setup lang="ts">
const options = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
  fifth: '',
})
</script>
