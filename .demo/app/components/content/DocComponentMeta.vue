<script setup lang="ts">
import { kebabCase } from 'scule'

const props = defineProps<{
  name: string
}>()
const docs = await useDocumentationMeta(() => props.name as any).catch(() => null)

/**
 * Wrap https://... links in markdown with <a href="...">...</a>
 */
function wrapExternalLinks(string: string) {
  if (!string)
    return ''
  return string?.replace(/https?:\/\/[^\s)]+/g, url => `<a class="text-primary-600 dark:text-primary-400 hover:underline" href="${url}" rel="noopener noreferrer" target="_blank">${url}</a>`)
}
</script>

<template>
  <div>
    <div v-if="!docs?.meta">
      <DevOnly>
        <BaseMessage variant="warning">
          Unable to load component <strong class="text-semibold mx-1">&lt;{{ props.name }}&gt;</strong> metadata.
        </BaseMessage>
      </DevOnly>
    </div>
    <div
      v-else-if="docs?.noOptions"
      class="mx-auto w-full"
    >
      <div class="flex items-center justify-center p-6">
        <div class="text-center">
          <BaseParagraph
            size="sm"
            class="mt-2 text-muted-500 dark:text-muted-400"
          >
            You can use &lt;{{ docs.meta?.pascalName }}&gt; without any props.
          </BaseParagraph>
        </div>
      </div>
    </div>
    <div v-else class="relative space-y-6 mb-14">
      <!-- Model display -->
      <div
        v-if="docs?.model"
        class="mx-auto w-full"
      >
        <div class="overflow-x-auto rounded-md border border-muted-300 bg-white dark:border-muted-800 dark:bg-muted-950">
          <table class="w-full">
            <thead>
              <tr>
                <th class="min-w-3xs w-3xs bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
                  Model
                </th>
                <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-muted-300 text-sm dark:border-muted-800">
                <td class="px-4 py-3 align-top">
                  <div class="flex items-center gap-1">
                    <ProseCode class="bg-primary-500/20 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 whitespace-nowrap">
                      {{ kebabCase(docs.model.name) === 'model-value' ? 'v-model' : `v-model:${kebabCase(docs.model.name)}` }}
                    </ProseCode>

                    <div v-if="docs?.model.tags?.length">
                      <BaseTooltip disable-closing-trigger>
                        <Icon
                          name="mingcute:information-line"
                          class="h-4 w-4 text-muted-500 rounded-full focus:nui-focus focus:ring-primary-500/50"
                        />

                        <template #content>
                          <div class="p-1">
                            <div
                              v-for="tag in docs.model.tags"
                              :key="tag.name"
                              class="flex gap-1"
                            >
                              <BaseParagraph
                                size="xs"
                                class="text-muted-700 dark:text-muted-200"
                              >
                                @{{ tag.name }}:
                              </BaseParagraph>
                              <BaseParagraph
                                v-if="tag.text"
                                as="span"
                                size="xs"
                                class="text-muted-700 dark:text-muted-200"
                              >
                                <span v-html="wrapExternalLinks(tag.text)" />
                              </BaseParagraph>
                            </div>
                          </div>
                        </template>
                      </BaseTooltip>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex flex-col items-start gap-1">
                    <ProseCode class="whitespace-pre">
                      {{ docs.model.type.replaceAll(' | undefined', '') }}
                    </ProseCode>

                    <BaseParagraph
                      v-if="docs?.model.description"
                      size="xs"
                      class="text-muted-700 dark:text-muted-400 max-w-xs whitespace-pre-wrap"
                    >
                      {{ docs.model.description.replaceAll('<br> ', '\n') }}
                    </BaseParagraph>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Props display -->
      <div
        v-if="docs?.props?.length"
        class="w-full"
      >
        <div class="overflow-x-auto rounded-md border border-muted-300 bg-white dark:border-muted-800 dark:bg-muted-950">
          <table class="w-full">
            <thead>
              <tr>
                <th class="min-w-3xs w-3xs bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
                  Prop
                </th>
                <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="prop in docs.props"
                :key="prop.name"
                class="border-t border-muted-300 text-sm dark:border-muted-800"
              >
                <td class="px-4 py-3 align-top">
                  <div class="flex items-center gap-1">
                    <ProseCode class="bg-primary-500/20 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 whitespace-nowrap">
                      {{ kebabCase(prop.name) }}
                    </ProseCode>
                    <div v-if="prop.tags?.length > 0">
                      <BaseTooltip disable-closing-trigger>
                        <Icon
                          name="mingcute:information-line"
                          class="h-4 w-4 text-muted-500 rounded-full focus:nui-focus focus:ring-primary-500/50"
                        />
                        <template #content>
                          <div class="p-1">
                            <div
                              v-for="tag in prop.tags"
                              :key="tag.name"
                              class="flex gap-1"
                            >
                              <BaseParagraph
                                size="xs"
                                class="text-muted-700 dark:text-muted-200"
                              >
                                @{{ tag.name }}:
                              </BaseParagraph>
                              <BaseParagraph
                                v-if="tag.text"
                                as="span"
                                size="xs"
                                class="text-muted-700 dark:text-muted-200"
                              >
                                <span v-html="wrapExternalLinks(tag.text)" />
                              </BaseParagraph>
                            </div>
                          </div>
                        </template>
                      </BaseTooltip>
                    </div>
                  </div>
                  <div class="text-xs flex items-center gap-1 mt-2">
                    <span class="text-muted-600 dark:text-muted-400">default:</span>
                    <ProseCode>
                      {{ !prop.default || prop.default === 'undefined' ? '-' : prop.default }}
                    </ProseCode>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex flex-col items-start gap-1">
                    <ProseCode class="whitespace-pre">
                      {{ prop.type.replaceAll(' | undefined', '') }}
                    </ProseCode>

                    <BaseParagraph
                      v-if="prop.description"
                      size="xs"
                      class="text-muted-700 dark:text-muted-400 max-w-xs whitespace-pre-wrap"
                    >
                      {{ prop.description.replaceAll('<br> ', '\n') }}
                    </BaseParagraph>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Events display -->
      <div
        v-if="docs?.events?.length"
        class="mx-auto w-full"
      >
        <div class="overflow-x-auto rounded-md border border-muted-300 bg-white dark:border-muted-800 dark:bg-muted-950">
          <table class="w-full">
            <thead>
              <tr>
                <th class="min-w-3xs w-3xs bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
                  Event
                </th>
                <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
                  Emitted Value Type
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="event in docs.events"
                :key="event.type"
                class="border-t border-muted-300 text-sm dark:border-muted-800"
              >
                <td class="px-4 py-3 align-top">
                  <div class="flex items-center gap-1">
                    <ProseCode class="bg-primary-500/20 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 whitespace-nowrap">
                      {{ kebabCase(event.name) }}
                    </ProseCode>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex flex-col items-start gap-1">
                    <ProseCode class="whitespace-pre">
                      {{ event.type }}
                    </ProseCode>

                    <BaseParagraph
                      v-if="event.description"
                      size="xs"
                      class="text-muted-700 dark:text-muted-400 max-w-xs whitespace-pre-wrap"
                    >
                      {{ event.description.replaceAll('<br> ', '\n') }}
                    </BaseParagraph>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Slots display -->
      <div
        v-if="docs?.slots?.length"
        class="mx-auto w-full"
      >
        <div class="overflow-x-auto rounded-md border border-muted-300 bg-white dark:border-muted-800 dark:bg-muted-950">
          <table class="w-full">
            <thead>
              <tr>
                <th class="min-w-3xs w-3xs bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
                  Slot
                </th>
                <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="slot in docs.slots"
                :key="slot.name"
                class="border-t border-muted-300 text-sm dark:border-muted-800"
              >
                <td class="px-4 py-3 align-top">
                  <div class="flex items-center gap-1">
                    <ProseCode class="bg-primary-500/20 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 whitespace-nowrap">
                      #{{ slot.name }}
                    </ProseCode>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center gap-1">
                    <ProseCode class="whitespace-pre">
                      {{ slot.type }}
                    </ProseCode>

                    <BaseParagraph
                      v-if="slot.description"
                      size="xs"
                      class="text-muted-700 dark:text-muted-400 max-w-xs whitespace-pre-wrap"
                    >
                      {{ slot.description.replaceAll('<br> ', '\n') }}
                    </BaseParagraph>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Exposed display -->
      <div
        v-if="docs?.exposed?.length > 0"
        class="mx-auto w-full"
      >
        <div class="overflow-x-auto rounded-md border border-muted-300 bg-white dark:border-muted-800 dark:bg-muted-950">
          <table class="w-full">
            <thead>
              <tr>
                <th class="min-w-3xs w-3xs bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
                  Exposed
                </th>
                <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="exposed in docs.exposed"
                :key="exposed.name"
                class="border-t border-muted-300 text-sm dark:border-muted-800"
              >
                <td class="px-4 py-3 align-top">
                  <div class="flex items-center gap-1">
                    <ProseCode class="bg-primary-500/20 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 whitespace-nowrap">
                      {{ kebabCase(exposed.name) }}
                    </ProseCode>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center gap-1">
                    <ProseCode class="whitespace-pre">
                      {{ exposed.type }}
                    </ProseCode>

                    <BaseParagraph
                      v-if="exposed.description"
                      size="xs"
                      class="text-muted-700 dark:text-muted-400 max-w-xs whitespace-pre-wrap"
                    >
                      {{ exposed.description.replaceAll('<br> ', '\n') }}
                    </BaseParagraph>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
