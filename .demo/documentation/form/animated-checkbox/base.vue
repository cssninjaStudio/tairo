<script setup lang="ts">
const options = ref([
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
  'Option 6',
  'Option 7',
  'Option 8',
  'Option 9',
  'Option 10',
  'Option 11',
  'Option 12',
  'Option 13',
  'Option 14',
  'Option 15',
  'Option 16',
  'Option 17',
  'Option 18',
  'Option 19',
])
</script>

<template>
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 1"
    class="text-primary-500"
  />
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 2"
    class="text-lime-500"
  />
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 3"
    class="text-green-500"
  />
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 4"
    class="text-emerald-500"
  />
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 5"
    class="text-teal-500"
  />
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 6"
    class="text-cyan-500"
  />
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 7"
    class="text-sky-500"
  />
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 8"
    class="text-blue-500"
  />
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 9"
    class="text-indigo-500"
  />
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 10"
    class="text-purple-500"
  />
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 11"
    class="text-fuchsia-500"
  />
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 12"
    class="text-pink-500"
  />
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 13"
    class="text-rose-500"
  />
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 14"
    class="text-red-500"
  />
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 15"
    class="text-orange-500"
  />
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 16"
    class="text-amber-500"
  />
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 17"
    class="text-yellow-500"
  />
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 18"
    class="text-muted-800 dark:text-muted-200"
  />
  <BaseAnimatedCheckbox
    v-model="options"
    value="Option 19"
    class="text-gray-400 dark:text-gray-500"
  />
</template>
