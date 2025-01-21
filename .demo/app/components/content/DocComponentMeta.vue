<script setup lang="ts">
import { kebabCase } from 'scule'

const props = defineProps<{
  name: string
}>()
const docs = await useDocumentationMeta(() => props.name as any)

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
  <div class="py-6">
    <div class="relative space-y-10">
      <div
        v-if="docs.noOptions"
        class="mx-auto w-full"
      >
        <div class="flex items-center justify-center p-6">
          <div class="mt-10 text-center">
            <BaseHeading
              weight="medium"
              size="lg"
              class="text-muted-700 dark:text-muted-200"
            >
              No options available
            </BaseHeading>
            <BaseParagraph
              size="sm"
              class="mt-2 text-muted-500 dark:text-muted-400"
            >
              This component doesn't have any props.
            </BaseParagraph>
          </div>
        </div>
      </div>

      <!-- Model display -->
      <div
        v-if="docs.model"
        class="mx-auto w-full"
      >
        <div class="overflow-x-auto rounded-md border border-muted-300 bg-white dark:border-muted-800 dark:bg-muted-950">
          <table class="w-full">
            <thead>
              <tr>
                <th class="w-48 bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
                  Model
                </th>
                <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-muted-300 text-sm dark:border-muted-800">
                <td class="px-4 py-3">
                  <div class="flex items-center gap-1">
                    <code class="rounded-sm bg-primary-500/20 px-1 text-[0.8rem] font-medium text-primary-600 dark:text-primary-400">{{ kebabCase(docs.model.name) }}</code>
                    <div v-if="docs.model.description">
                      <BaseDropdown
                        color="default-contrast"
                        orientation="start"
                        size="lg"
                        fixed
                      >
                        <template #button>
                          <button type="button">
                            <Icon
                              name="mingcute:information-line"
                              class="h-4 w-4 text-muted-500"
                            />
                          </button>
                        </template>
                        <div class="p-1">
                          <BaseParagraph
                            size="xs"
                            class="text-muted-700 dark:text-muted-200"
                          >
                            {{ docs.model.description }}
                          </BaseParagraph>
                          <BaseParagraph
                            size="xs"
                            class="mb-2 text-muted-500 dark:text-muted-400 max-w-[200px]"
                          >
                            Additional info and tags like the default configuration value.
                          </BaseParagraph>
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
                      </BaseDropdown>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center gap-1 font-mono text-muted-700 dark:text-muted-400">
                    <ComponentMetaCode>
                      {{ docs.model.type }}
                    </ComponentMetaCode>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Props display -->
      <div
        v-if="docs.props?.length > 0"
        class="w-full"
      >
        <div class="overflow-x-auto rounded-md border border-muted-300 bg-white dark:border-muted-800 dark:bg-muted-950">
          <table class="w-full">
            <thead>
              <tr>
                <th class="w-48 bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
                  Prop
                </th>
                <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
                  Type
                </th>
                <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
                  Default
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="prop in docs.props"
                :key="prop.name"
                class="border-t border-muted-300 text-sm dark:border-muted-800"
              >
                <td class="px-4 py-3">
                  <div class="flex items-center gap-1">
                    <code class="rounded-sm bg-primary-500/20 px-1 text-[0.8rem] font-medium text-primary-600 dark:text-primary-400">{{ kebabCase(prop.name) }}</code>
                    <div v-if="prop.description">
                      <BaseDropdown
                        color="default-contrast"
                        orientation="start"
                        size="md"
                      >
                        <template #button>
                          <button type="button">
                            <Icon
                              name="mingcute:information-line"
                              class="h-4 w-4 text-muted-500"
                            />
                          </button>
                        </template>
                        <div class="p-1">
                          <BaseParagraph
                            size="xs"
                            class="text-muted-700 dark:text-muted-200 max-w-xs"
                          >
                            {{ prop.description }}
                          </BaseParagraph>
                        </div>
                      </BaseDropdown>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 font-mono text-muted-700 dark:text-muted-400">
                  <div class="flex items-center gap-1">
                    <ComponentMetaCode>
                      {{ prop.type }}
                    </ComponentMetaCode>
                  </div>
                </td>
                <td class="px-4 py-3 font-mono text-muted-700 dark:text-muted-400">
                  <div class="flex items-center gap-1 text-primary-600 dark:text-primary-400">
                    <ComponentMetaCode>
                      {{ !prop.default || prop.default === 'undefined' ? 'undefined' : prop.default }}
                    </ComponentMetaCode>
                    <div v-if="prop.tags?.length > 0">
                      <BaseDropdown
                        color="default-contrast"
                        orientation="end"
                        size="md"
                      >
                        <template #button>
                          <button type="button">
                            <Icon
                              name="mingcute:information-line"
                              class="h-4 w-4 text-muted-500"
                            />
                          </button>
                        </template>
                        <div class="p-1">
                          <BaseParagraph
                            size="xs"
                            class="mb-2 text-muted-500 dark:text-muted-400 max-w-[200px]"
                          >
                            Additional info and tags like the default configuration value.
                          </BaseParagraph>
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
                      </BaseDropdown>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Events display -->
      <div
        v-if="docs.events?.length > 0"
        class="mx-auto mt-10 w-full"
      >
        <div class="overflow-x-auto rounded-md border border-muted-300 bg-white dark:border-muted-800 dark:bg-muted-950">
          <table class="w-full">
            <thead>
              <tr>
                <th class="w-48 bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
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
                <td class="px-4 py-3">
                  <div class="flex items-center gap-1">
                    <code class="rounded-sm bg-primary-500/20 px-1 text-[0.8rem] font-medium text-primary-600 dark:text-primary-400">{{ kebabCase(event.name) }}</code>
                    <div v-if="event.description">
                      <BaseDropdown
                        color="default-contrast"
                        orientation="start"
                        size="md"
                      >
                        <template #button>
                          <button type="button">
                            <Icon
                              name="mingcute:information-line"
                              class="h-4 w-4 text-muted-500"
                            />
                          </button>
                        </template>
                        <div class="p-1">
                          <BaseParagraph
                            size="xs"
                            class="text-muted-700 dark:text-muted-200"
                          >
                            {{ event.description }}
                          </BaseParagraph>
                        </div>
                      </BaseDropdown>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center gap-1">
                    <ComponentMetaCode>
                      {{ event.type }}
                    </ComponentMetaCode>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Slots display -->
      <div
        v-if="docs.slots?.length > 0"
        class="mx-auto mt-10 w-full"
      >
        <div class="overflow-x-auto rounded-md border border-muted-300 bg-white dark:border-muted-800 dark:bg-muted-950">
          <table class="w-full">
            <thead>
              <tr>
                <th class="w-48 bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
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
                <td class="px-4 py-3">
                  <div class="flex items-center gap-1">
                    <code class="rounded-sm bg-primary-500/20 px-1 text-[0.8rem] font-medium text-primary-600 dark:text-primary-400">#{{ slot.name }}</code>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center gap-1">
                    <ComponentMetaCode>
                      {{ slot.type }}
                    </ComponentMetaCode>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Exposed display -->
        <div
          v-if="docs.exposed?.length > 0"
          class="mx-auto mt-10 w-full"
        >
          <div class="overflow-x-auto rounded-md border border-muted-300 bg-white dark:border-muted-800 dark:bg-muted-950">
            <table class="w-full">
              <thead>
                <tr>
                  <th class="w-48 bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
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
                  <td class="px-4 py-3">
                    <div class="flex items-center gap-1">
                      <code class="rounded-sm bg-primary-500/20 px-1 text-[0.8rem] font-medium text-primary-600 dark:text-primary-400">{{ kebabCase(exposed.name) }}</code>
                      <div v-if="exposed.description">
                        <BaseDropdown
                          color="default-contrast"
                          orientation="start"
                          size="md"
                        >
                          <template #button>
                            <button type="button">
                              <Icon
                                name="mingcute:information-line"
                                class="h-4 w-4 text-muted-500"
                              />
                            </button>
                          </template>
                          <div class="p-1">
                            <BaseParagraph
                              size="xs"
                              class="text-muted-700 dark:text-muted-200"
                            >
                              {{ exposed.description }}
                            </BaseParagraph>
                          </div>
                        </BaseDropdown>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3">
                    <div class="flex items-center gap-1">
                      <ComponentMetaCode>
                        {{ exposed.type }}
                      </ComponentMetaCode>
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

<!-- <style scoped>
.inline-sample:deep(.shiki) {
  @apply my-0;
}
</style> -->
