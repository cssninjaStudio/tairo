<script setup lang="ts">
import { kebabCase } from 'scule'
import type { ComponentMeta } from 'vue-component-meta'
import { Component } from '@nuxt/schema'
// @ts-ignore
import type { NuxtComponentMetaNames } from '#nuxt-component-meta/types'
export type Componendivata = Component & { meta: ComponentMeta }

export interface DocProperties {
  name: NuxtComponentMetaNames
}
const props = defineProps<DocProperties>()
const componentMeta = await useComponentMeta(props.name)

function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1)
}

function getPropertySnippet(prop: ComponentMeta['props'][0]) {
  return [
    '```vue',
    `\u003Cscript setup lang="ts"\u003E`,
    prop.type.length > 40
      ? `type ${capitalize(prop.name)}Data = ${prop.type
          .replace(/{ /g, '{\n ')
          // .replace(/}/g, '\n}')
          .replace(/; ([a-z])/g, ';\n $1')
          .replace(/; /g, ';\n')}\nconst ${prop.name} = ref\u003C${capitalize(
          prop.name,
        )}Data\u003E(${prop.default})`
      : `const ${prop.name} = ref\u003C${prop.type}\u003E(${prop.default})`,
    `\u003C/script\u003E`,
    ``,
    `\u003Ctemplate\u003E`,
    `  \u003C${props.name}`,
    `    :${kebabCase(prop.name)}="${prop.name}"`,
    `  /\u003E`,
    `\u003C/template\u003E`,
    '```',
  ].join('\n')
}
function getSlotSnippet(slot: ComponentMeta['slots'][0]) {
  return [
    '```vue',
    `\u003Ctemplate\u003E`,
    `  \u003C${props.name}\u003E`,
    `    \u003Ctemplate #${slot.name}="values: ${slot.type}"\u003E`,
    `      \u003C!-- Slot content --\u003E`,
    `    \u003C/template\u003E`,
    `  \u003C/${props.name}\u003E`,
    `\u003C/template\u003E`,
    '```',
  ].join('\n')
}
function getEventsSnippet(event: ComponentMeta['events'][0]) {
  const handlerName = capitalize(event.name).replace(/:([a-z])/g, (v) =>
    v.replace(':', '').toUpperCase(),
  )
  const handlerProps = event.type.startsWith('[')
    ? event.type.slice(1, -1)
    : event.type
  return [
    '```vue',
    `\u003Cscript setup lang="ts"\u003E`,
    `const on${handlerName} = (${handlerProps}) =\u003E {`,
    `  // ...`,
    `}`,
    `\u003C/script\u003E`,
    ``,
    `\u003Ctemplate\u003E`,
    `  \u003C${props.name}`,
    `    @${event.name}="on${handlerName}"`,
    `  /\u003E`,
    `\u003C/template\u003E`,
    '```',
  ].join('\n')
}
</script>

<template>
  <div>
    <DocSection
      v-if="componentMeta?.pascalName"
      :title="`<${componentMeta?.pascalName}>`"
    >
      <div
        class="rounded-md border border-muted-200 bg-white divansition-shadow duration-300 hover:shadow-lg dark:border-muted-700 dark:bg-muted-800"
      >
        <!-- Props display -->
        <div v-if="componentMeta.meta.props.length > 0" class="mx-auto w-full">
          <header class="px-5 py-4 dark:border-muted-800">
            <BaseHeading
              as="h3"
              size="md"
              weight="normal"
              :anchor="{ prefix: '', suffix: '#' }"
              class="text-muted-800 dark:text-muted-200"
            >
              <TocAnchor
                :level="3"
                prefix=""
                suffix="¶"
                :id="`${componentMeta.kebabName}-properties`"
                >Properties</TocAnchor
              >
            </BaseHeading>
          </header>
          <div class="p-3">
            <div class="overflow-x-auto">
              <div class="w-full div-auto font-alt">
                <div
                  class="hidden md:block bg-muted-50 text-xs font-semibold uppercase text-muted-400 dark:bg-muted-800"
                >
                  <div class="flex">
                    <div class="whitespace-nowrap p-2 w-4/12">
                      <div class="text-left font-semibold">Name</div>
                    </div>
                    <div class="whitespace-nowrap p-2 w-8/12">
                      <div class="text-left font-semibold">Example</div>
                    </div>
                  </div>
                </div>
                <div
                  class="divide-y divide-muted-100 text-sm dark:divide-muted-700"
                >
                  <div
                    class="flex flex-col md:flex-row py-4"
                    v-for="prop in componentMeta.meta.props"
                    :key="prop.name"
                  >
                    <div class="p-2 md:w-4/12">
                      <div class="flex">
                        <div
                          class="font-medium text-muted-800 dark:text-muted-100"
                        >
                          <span
                            class="font-medium text-muted-800 dark:text-muted-100 font-mono"
                            >{{ prop.name }}</span
                          >
                          <sup
                            v-if="prop.required"
                            class="ml-1 text-rose-500 font-mono"
                            >Required</sup
                          >
                        </div>
                      </div>
                      <div
                        class="max-w-[200px] text-left italic text-muted-400"
                      >
                        {{ prop.description }}
                      </div>
                      <div v-if="prop.tags.length > 0" class="mt-3">
                        <div
                          v-for="tag in prop.tags"
                          :key="tag.name"
                          class="text-xs text-muted-400"
                        >
                          <span class="font-semibold">@{{ tag.name }}</span>
                          <span v-if="tag.text" class="block whitespace-pre">{{
                            tag.text
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-2 md:w-8/12">
                      <DocMarkdown
                        no-lines
                        no-highlight
                        class="prose max-w-none text-sm"
                        :source="getPropertySnippet(prop)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Events display -->
        <div
          v-if="componentMeta.meta.events.length > 0"
          class="mx-auto mt-10 w-full"
        >
          <header class="px-5 py-4 dark:border-muted-800">
            <BaseHeading
              as="h3"
              size="md"
              weight="normal"
              :anchor="{ prefix: '', suffix: '#' }"
              class="text-muted-800 dark:text-muted-200"
            >
              <TocAnchor
                :level="3"
                prefix=""
                suffix="¶"
                :id="`${componentMeta.kebabName}-events`"
                >Events</TocAnchor
              >
            </BaseHeading>
          </header>
          <div class="p-3">
            <div class="overflow-x-auto">
              <div class="w-full div-auto font-alt">
                <div
                  class="hidden md:block bg-muted-50 text-xs font-semibold uppercase text-muted-400 dark:bg-muted-800"
                >
                  <div class="flex">
                    <div class="p-2 w-4/12">
                      <div class="text-left font-semibold">Name</div>
                    </div>
                    <div class="p-2 w-8/12">
                      <div class="text-left font-semibold">Example</div>
                    </div>
                  </div>
                </div>
                <div
                  class="divide-y divide-muted-100 text-sm dark:divide-muted-800"
                >
                  <div
                    class="flex flex-col md:flex-row py-4"
                    v-for="event in componentMeta.meta.events"
                    :key="event.type"
                  >
                    <div class="p-2 md:w-4/12">
                      <div class="flex items-center">
                        <div
                          class="font-medium text-muted-800 dark:text-muted-100 font-mono"
                        >
                          @{{ event.name }}
                        </div>
                      </div>
                    </div>
                    <div class="p-2 md:w-8/12">
                      <DocMarkdown
                        no-lines
                        no-highlight
                        class="prose max-w-none text-sm"
                        :source="getEventsSnippet(event)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slots display -->
        <div
          v-if="componentMeta.meta.slots.length > 0"
          class="mx-auto mt-10 w-full"
        >
          <header class="px-5 py-4 dark:border-muted-800">
            <BaseHeading
              as="h3"
              size="md"
              weight="normal"
              :anchor="{ prefix: '', suffix: '#' }"
              class="text-muted-800 dark:text-muted-200"
            >
              <TocAnchor
                :level="3"
                prefix=""
                suffix="¶"
                :id="`${componentMeta.kebabName}-slots`"
                >Slots</TocAnchor
              >
            </BaseHeading>
          </header>
          <div class="p-3">
            <div class="overflow-x-auto">
              <div class="w-full div-auto font-alt">
                <div
                  class="hidden md:block bg-muted-50 text-xs font-semibold uppercase text-muted-400 dark:bg-muted-800"
                >
                  <div class="flex">
                    <div class="p-2 w-4/12">
                      <div class="text-left font-semibold">Name</div>
                    </div>
                    <div class="p-2 w-8/12">
                      <div class="text-left font-semibold">Example</div>
                    </div>
                  </div>
                </div>
                <div
                  class="divide-y divide-muted-100 text-sm dark:divide-muted-800"
                >
                  <div
                    class="flex flex-col md:flex-row py-4"
                    v-for="slot in componentMeta.meta.slots"
                    :key="slot.name"
                  >
                    <div class="p-2 md:w-4/12">
                      <div class="flex items-center">
                        <div
                          class="font-medium text-muted-800 dark:text-muted-100 font-mono"
                        >
                          #{{ slot.name }}
                        </div>
                      </div>
                    </div>
                    <div class="p-2 md:w-8/12">
                      <DocMarkdown
                        no-lines
                        no-highlight
                        class="prose max-w-none text-sm"
                        :source="getSlotSnippet(slot)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocSection>
  </div>
</template>
