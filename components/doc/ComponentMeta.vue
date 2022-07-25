<script lang="ts">
import 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prism-theme-vars/base.css'
import '~/assets/css/modules/prism.css'
</script>

<script setup lang="ts">
import Prism from 'vue-prism-component'

export interface DocProperties {
  meta: {
    name: string
    global: boolean
    props: {
      name: string
      type: string
      typeResolved: string
      isOptional: boolean
      documentationComment: string
      defaultValue?: string
    }[]
    events: {
      parametersType: string
      documentationComment: string
      parameters: {
        name: string
        type: string
        isOptional: boolean
      }[]
    }[]
    slots: {
      name: string
      propsType: string
      documentationComment: string
    }[]
  }
}

const props = defineProps<DocProperties>()
</script>

<template>
  <DocSection :title="`<${props.meta.name}>`">
    <div
      class="rounded-md border border-muted-200 bg-white transition-shadow duration-300 hover:shadow-lg dark:border-muted-700 dark:bg-muted-800"
    >
      <!-- Props display -->
      <div v-if="props.meta.props.length > 0" class="mx-auto w-full">
        <header class="px-5 py-4 dark:border-muted-800">
          <BaseHeading
            as="h3"
            size="md"
            weight="normal"
            :anchor="{ prefix: '', suffix: '#' }"
            class="text-muted-800 dark:text-muted-200"
          >
            {{ props.meta.name }}Props
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
                    <div class="text-left font-semibold">Default</div>
                  </th>
                  <th class="w-1/3 whitespace-nowrap p-2">
                    <div class="text-left font-semibold">Values</div>
                  </th>
                  <th class="whitespace-nowrap p-2">
                    <div class="text-left font-semibold">Description</div>
                  </th>
                </tr>
              </thead>
              <tbody
                class="divide-y divide-muted-100 text-sm dark:divide-muted-800"
              >
                <tr v-for="prop in props.meta.props" :key="prop.name">
                  <td class="whitespace-nowrap p-2">
                    <div class="flex items-center">
                      <div
                        class="font-medium text-muted-800 dark:text-muted-100"
                      >
                        {{ prop.name
                        }}<sup
                          v-if="!prop.isOptional"
                          class="ml-1 text-rose-500"
                          >Required</sup
                        >
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap p-2">
                    <div class="text-left text-success-500">
                      {{ prop.type }}
                    </div>
                  </td>
                  <td class="whitespace-nowrap p-2">
                    <div class="text-left font-medium text-muted-400">
                      {{ prop.defaultValue ?? 'unknown' }}
                    </div>
                  </td>
                  <td class="p-2">
                    {{ prop.typeResolved ?? 'unknown' }}
                    <!-- <span
                    v-for="(value, index) in prop.typeArray"
                    :key="index"
                    class="text-left font-medium text-primary-500"
                  >
                    <span v-if="index === 0">{{ value }}</span>
                    <span v-else>
                      <span class="text-muted-400">,</span>
                      {{ value }}
                    </span>
                  </span> -->
                  </td>
                  <td class="whitespace-nowrap p-2">
                    <div class="text-left font-medium text-muted-400">
                      {{ prop.documentationComment }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Events display -->
      <div v-if="props.meta.events.length > 0" class="mx-auto mt-10 w-full">
        <header class="px-5 py-4 dark:border-muted-800">
          <BaseHeading
            as="h3"
            size="md"
            weight="normal"
            :anchor="{ prefix: '', suffix: '#' }"
            class="text-muted-800 dark:text-muted-200"
          >
            {{ props.meta.name }}Events
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
                    <div class="text-left font-semibold">Event</div>
                  </th>
                  <th class="w-1/3 whitespace-nowrap p-2">
                    <div class="text-left font-semibold">Emitted Value</div>
                  </th>
                  <th class="whitespace-nowrap p-2">
                    <div class="text-left font-semibold">Description</div>
                  </th>
                </tr>
              </thead>
              <tbody
                class="divide-y divide-muted-100 text-sm dark:divide-muted-800"
              >
                <tr
                  v-for="event in props.meta.events"
                  :key="event.parametersType"
                >
                  <td class="whitespace-nowrap p-2">
                    <div class="flex items-center">
                      <div
                        class="font-medium text-muted-800 dark:text-muted-100"
                      >
                        @{{ event.parametersType }}
                      </div>
                    </div>
                  </td>
                  <td class="p-2">
                    <span
                      v-for="param in event.parameters"
                      :key="param.name"
                      class="text-left font-medium text-primary-500"
                    >
                      <span
                        >{{ param.name }}: {{ param.type }}
                        {{ param.isOptional ? 'Optional' : 'Required' }}</span
                      >
                    </span>
                  </td>
                  <td class="whitespace-nowrap p-2">
                    <div class="text-left text-success-500">
                      {{ event.documentationComment }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Slots display -->
      <div v-if="props.meta.slots.length > 0" class="mx-auto mt-10 w-full">
        <header class="px-5 py-4 dark:border-muted-800">
          <BaseHeading
            as="h3"
            size="md"
            weight="normal"
            :anchor="{ prefix: '', suffix: '#' }"
            class="text-muted-800 dark:text-muted-200"
          >
            {{ props.meta.name }}Slots
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
                    <div class="text-left font-semibold">v-slot Properties</div>
                  </th>
                  <th class="whitespace-nowrap p-2">
                    <div class="text-left font-semibold">Description</div>
                  </th>
                </tr>
              </thead>
              <tbody
                class="divide-y divide-muted-100 text-sm dark:divide-muted-800"
              >
                <tr v-for="slot in props.meta.slots" :key="slot.name">
                  <td class="whitespace-nowrap p-2">
                    <div class="flex items-center">
                      <div
                        class="font-medium text-muted-800 dark:text-muted-100"
                      >
                        #{{ slot.name }}
                      </div>
                    </div>
                  </td>
                  <td class="p-2">
                    <!-- <span
                    v-for="(value, v) in slot.properties"
                    :key="v"
                    class="text-left font-medium text-primary-500"
                  >
                    <span v-if="v === 0">{{ value }}</span>
                    <span v-else>
                      <span class="text-muted-400">,</span>
                      {{ value }}
                    </span>
                  </span> -->
                    <span>
                      <Prism language="typescript">{{ slot.propsType }}</Prism>
                    </span>
                  </td>
                  <td class="whitespace-nowrap p-2">
                    <div class="text-left text-muted-400">
                      {{ slot.documentationComment }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </DocSection>
</template>

<style scoped>
:deep(pre[class*='language-']) {
  --prism-background: transparent;
  --prism-block-padding-x: 0;
  --prism-block-padding-y: 0.3rem;
}
</style>
