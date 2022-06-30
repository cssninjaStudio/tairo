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
  <div id="component-props">
    <div class="pb-10 mb-10 border-b border-slate-200 dark:border-slate-800">
      <!-- Props display -->
      <div
        v-if="props.properties.length > 0"
        class="w-full mx-auto bg-white dark:bg-slate-800 rounded-md hover:shadow-lg border border-slate-200 dark:border-slate-700 transition-shadow duration-300"
      >
        <header
          class="px-5 py-4 border-b border-slate-100 dark:border-slate-800"
        >
          <h2
            class="font-main font-semibold text-slate-800 dark:text-slate-200"
          >
            {{ props.component }} Props
          </h2>
        </header>
        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="table-auto w-full font-sub">
              <thead
                class="text-xs font-semibold uppercase text-slate-400 bg-slate-50 dark:bg-slate-800"
              >
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Name</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Type</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Required</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Default</div>
                  </th>
                  <th class="p-2 whitespace-nowrap w-1/3">
                    <div class="font-semibold text-left">Values</div>
                  </th>
                </tr>
              </thead>
              <tbody
                class="text-sm divide-y divide-slate-100 dark:divide-slate-800"
              >
                <tr v-for="(prop, index) in props.properties" :key="index">
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div
                        class="font-medium text-slate-800 dark:text-slate-100"
                      >
                        {{ prop.name }}
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left text-teal-500">{{ prop.type }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left text-slate-400">
                      {{ prop.required }}
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-slate-400">
                      {{ prop.default }}
                    </div>
                  </td>
                  <td class="p-2">
                    <span
                      v-for="(value, v) in prop.values"
                      :key="v"
                      class="text-left text-primary-500 font-medium"
                    >
                      <span v-if="v === 0">{{ value }}</span>
                      <span v-else>
                        <span class="text-slate-400">,</span>
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
        class="w-full mx-auto mt-10 bg-white dark:bg-slate-800 rounded-md hover:shadow-lg border border-slate-200 dark:border-slate-700 transition-shadow duration-300"
      >
        <header
          class="px-5 py-4 border-b border-slate-100 dark:border-slate-800"
        >
          <h2
            class="font-main font-semibold text-slate-800 dark:text-slate-200"
          >
            {{ props.component }} Slots
          </h2>
        </header>
        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="table-auto w-full font-sub">
              <thead
                class="text-xs font-semibold uppercase text-slate-400 bg-slate-50 dark:bg-slate-800"
              >
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Slot</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Properties</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Description</div>
                  </th>
                </tr>
              </thead>
              <tbody
                class="text-sm divide-y divide-slate-100 dark:divide-slate-800"
              >
                <tr v-for="(slot, index) in props.slots" :key="index">
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div
                        class="font-medium text-slate-800 dark:text-slate-100"
                      >
                        {{ slot.name }}
                      </div>
                    </div>
                  </td>
                  <td class="p-2">
                    <span
                      v-for="(value, v) in slot.properties"
                      :key="v"
                      class="text-left text-primary-500 font-medium"
                    >
                      <span v-if="v === 0">{{ value }}</span>
                      <span v-else>
                        <span class="text-slate-400">,</span>
                        {{ value }}
                      </span>
                    </span>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left text-slate-400">
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
