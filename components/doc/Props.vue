<script setup lang="ts">
export interface PropItem {
  name: string
  type: string
  required: string
  default: string
  values: string[]
}

export interface slotItem {
  name: string
  properties: string[]
  description: string
}

export interface DocProperties {
  component: string
  properties: PropItem[]
  slots?: slotItem[]
}

const props = withDefaults(defineProps<DocProperties>(), {
  slots: () => [],
})
</script>

<template>
  <div>
    <div class="mb-10 border-b border-muted-200 pb-10 dark:border-muted-800">
      <!-- Props display -->
      <div
        v-if="props.properties.length > 0"
        class="mx-auto w-full rounded-md border border-muted-200 bg-white transition-shadow duration-300 hover:shadow-lg dark:border-muted-700 dark:bg-muted-800"
      >
        <header
          class="border-b border-muted-100 px-5 py-4 dark:border-muted-800"
        >
          <BaseHeading
            as="h3"
            :anchor="{ prefix: '', suffix: '#' }"
            class="text-muted-800 dark:text-muted-200"
          >
            {{ props.component }} Props
          </BaseHeading>
        </header>
        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="w-full table-auto font-alt">
              <thead
                class="bg-muted-50 text-xs font-semibold uppercase text-muted-400 dark:bg-muted-800"
              >
                <tr>
                  <th class="whitespace-nowrap p-2">
                    <div class="text-left font-semibold">Name</div>
                  </th>
                  <th class="whitespace-nowrap p-2">
                    <div class="text-left font-semibold">Type</div>
                  </th>
                  <th class="whitespace-nowrap p-2">
                    <div class="text-left font-semibold">Required</div>
                  </th>
                  <th class="whitespace-nowrap p-2">
                    <div class="text-left font-semibold">Default</div>
                  </th>
                  <th class="w-1/3 whitespace-nowrap p-2">
                    <div class="text-left font-semibold">Values</div>
                  </th>
                </tr>
              </thead>
              <tbody
                class="divide-y divide-muted-100 text-sm dark:divide-muted-800"
              >
                <tr v-for="(prop, index) in props.properties" :key="index">
                  <td class="whitespace-nowrap p-2">
                    <div class="flex items-center">
                      <div
                        class="font-medium text-muted-800 dark:text-muted-100"
                      >
                        {{ prop.name }}
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap p-2">
                    <div class="text-left text-success-500">
                      {{ prop.type }}
                    </div>
                  </td>
                  <td class="whitespace-nowrap p-2">
                    <div class="text-left text-muted-400">
                      {{ prop.required }}
                    </div>
                  </td>
                  <td class="whitespace-nowrap p-2">
                    <div class="text-left font-medium text-muted-400">
                      {{ prop.default }}
                    </div>
                  </td>
                  <td class="p-2">
                    <span
                      v-for="(value, v) in prop.values"
                      :key="v"
                      class="text-left font-medium text-primary-500"
                    >
                      <span v-if="v === 0">{{ value }}</span>
                      <span v-else>
                        <span class="text-muted-400">,</span>
                        {{ value }}
                      </span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Slots display -->
      <div
        v-if="props.slots.length > 0"
        class="mx-auto mt-10 w-full rounded-md border border-muted-200 bg-white transition-shadow duration-300 hover:shadow-lg dark:border-muted-700 dark:bg-muted-800"
      >
        <header
          class="border-b border-muted-100 px-5 py-4 dark:border-muted-800"
        >
          <BaseHeading
            as="h3"
            :anchor="{ prefix: '', suffix: '#' }"
            class="text-muted-800 dark:text-muted-200"
          >
            {{ props.component }} Slots
          </BaseHeading>
        </header>
        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="w-full table-auto font-alt">
              <thead
                class="bg-muted-50 text-xs font-semibold uppercase text-muted-400 dark:bg-muted-800"
              >
                <tr>
                  <th class="whitespace-nowrap p-2">
                    <div class="text-left font-semibold">Slot</div>
                  </th>
                  <th class="whitespace-nowrap p-2">
                    <div class="text-left font-semibold">Properties</div>
                  </th>
                  <th class="whitespace-nowrap p-2">
                    <div class="text-left font-semibold">Description</div>
                  </th>
                </tr>
              </thead>
              <tbody
                class="divide-y divide-muted-100 text-sm dark:divide-muted-800"
              >
                <tr v-for="(slot, index) in props.slots" :key="index">
                  <td class="whitespace-nowrap p-2">
                    <div class="flex items-center">
                      <div
                        class="font-medium text-muted-800 dark:text-muted-100"
                      >
                        {{ slot.name }}
                      </div>
                    </div>
                  </td>
                  <td class="p-2">
                    <span
                      v-for="(value, v) in slot.properties"
                      :key="v"
                      class="text-left font-medium text-primary-500"
                    >
                      <span v-if="v === 0">{{ value }}</span>
                      <span v-else>
                        <span class="text-muted-400">,</span>
                        {{ value }}
                      </span>
                    </span>
                  </td>
                  <td class="whitespace-nowrap p-2">
                    <div class="text-left text-muted-400">
                      {{ slot.description }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
