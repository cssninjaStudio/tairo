<script setup lang="ts">
import { useDocumentationMeta } from '../../composables/meta-doc'

const props = defineProps<{
  name: string
}>()
const docs = reactive(await useDocumentationMeta(props.name as any))

/**
 * Wrap https://... links in markdown with <a href="...">...</a>
 */
function wrapExternalLinks(string: string) {
  return string.replace(
    /https?:\/\/[^\s)]+/g,
    (url) =>
      `<a class="text-primary-600 dark:text-primary-400 hover:underline" href="${url}" rel="noopener noreferrer" target="_blank">${url}</a>`,
  )
}
</script>

<template>
  <div>
    <DocLayoutSection
      v-if="docs.meta?.pascalName"
      :title="`<${docs.meta?.pascalName}>`"
    >
      <div
        class="rounded-md border border-muted-200 bg-white divansition-shadow duration-300 hover:shadow-lg dark:border-muted-700 dark:bg-muted-800"
      >
        <div v-if="docs.noOptions" class="mx-auto w-full">
          <div class="px-6 pt-6 pb-2">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              :anchor="{ prefix: '', suffix: '#' }"
              class="text-muted-800 dark:text-muted-200"
            >
              <TairoTocAnchor
                :level="3"
                prefix=""
                suffix="¶"
                :id="`${docs.meta.kebabName}-usage`"
              >
                Basic usage
              </TairoTocAnchor>
            </BaseHeading>
          </div>

          <div class="p-6">
            <div class="w-full font-alt">
              <div
                class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 pb-6 border-b border-muted-100 text-sm dark:border-muted-700"
              >
                <div class="col-span-1 lg:col-span-4">
                  <div class="flex">
                    <div
                      class="font-medium text-muted-600 dark:text-muted-300 text-xs font-mono"
                    >
                      <span>This component has no props</span>
                    </div>
                  </div>
                </div>
                <div class="col-span-1 lg:col-span-8">
                  <AddonMarkdownRemark
                    :lines="false"
                    class="max-w-none"
                    :source="docs.renderNoOptions()"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Model display -->
        <div v-if="docs.model" class="mx-auto w-full">
          <div class="px-6 pt-6 pb-2">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              :anchor="{ prefix: '', suffix: '#' }"
              class="text-muted-800 dark:text-muted-200"
            >
              <TairoTocAnchor
                :level="3"
                prefix=""
                suffix="¶"
                :id="`${docs.meta.kebabName}-model`"
              >
                Model
              </TairoTocAnchor>
            </BaseHeading>
          </div>

          <div class="hidden lg:block">
            <div class="w-full div-auto font-alt">
              <div
                class="bg-muted-50 text-xs font-semibold uppercase text-muted-400 dark:bg-muted-700 px-4"
              >
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 px-2 py-4">
                  <div class="col-span-1 lg:col-span-4">
                    <div class="text-left font-semibold">Name</div>
                  </div>
                  <div class="col-span-1 lg:col-span-8">
                    <div class="text-left font-semibold">Example</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6">
            <div class="w-full div-auto font-alt">
              <div
                class="divide-y space-y-12 divide-muted-100 text-sm dark:divide-muted-700"
              >
                <div
                  class="grid grid-cols-1 lg:grid-cols-12 gap-6"
                  :key="docs.model.name"
                >
                  <div class="col-span-1 lg:col-span-4">
                    <BaseTag
                      v-if="docs.model.required"
                      color="danger"
                      condensed
                      flavor="pastel"
                      class="ml-6 mb-2 font-mono float-right"
                    >
                      Required
                    </BaseTag>
                    <div class="flex">
                      <div
                        class="font-medium text-muted-800 dark:text-muted-100"
                      >
                        <span
                          class="font-medium text-muted-800 dark:text-muted-100 font-mono"
                        >
                          <code>v-model</code>
                        </span>
                      </div>
                    </div>

                    <div
                      class="text-left italic text-muted-400 break-words whitespace-pre-wrap"
                    >
                      {{ docs.model.description }}
                    </div>
                    <div
                      v-if="docs.model.tags.length > 0"
                      class="mt-3 break-words space-y-2"
                    >
                      <div
                        v-for="tag in docs.model.tags"
                        :key="tag.name"
                        class="text-xs text-muted-400"
                      >
                        <p class="font-semibold">@{{ tag.name }}</p>
                        <p
                          v-if="tag.text"
                          class="block"
                          v-html="wrapExternalLinks(tag.text)"
                        ></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-1 lg:col-span-8">
                    <AddonMarkdownRemark
                      :lines="false"
                      class="max-w-none"
                      :source="docs.renderModel(docs.model)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Props display -->
        <div v-if="docs.props.length > 0" class="mx-auto w-full">
          <div class="px-6 pt-6 pb-2">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              :anchor="{ prefix: '', suffix: '#' }"
              class="text-muted-800 dark:text-muted-200"
            >
              <TairoTocAnchor
                :level="3"
                prefix=""
                suffix="¶"
                :id="`${docs.meta.kebabName}-properties`"
              >
                Properties
              </TairoTocAnchor>
            </BaseHeading>
          </div>

          <div class="hidden lg:block">
            <div class="w-full div-auto font-alt">
              <div
                class="bg-muted-50 text-xs font-semibold uppercase text-muted-400 dark:bg-muted-700 px-4"
              >
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 px-2 py-4">
                  <div class="col-span-1 lg:col-span-4">
                    <div class="text-left font-semibold">Name</div>
                  </div>
                  <div class="col-span-1 lg:col-span-8">
                    <div class="text-left font-semibold">Example</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6">
            <div class="w-full font-alt">
              <div
                class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 pb-6 border-b border-muted-100 text-sm dark:border-muted-700"
                v-for="prop in docs.props"
                :key="prop.name"
              >
                <div class="col-span-1 lg:col-span-4">
                  <BaseTag
                    v-if="prop.required"
                    color="danger"
                    condensed
                    flavor="pastel"
                    class="ml-6 mb-2 font-mono float-right"
                  >
                    Required
                  </BaseTag>
                  <div class="flex">
                    <div class="font-medium text-muted-800 dark:text-muted-100">
                      <span
                        class="font-medium text-muted-800 dark:text-muted-100 font-mono"
                      >
                        <code>{{ prop.name }}</code>
                      </span>
                    </div>
                  </div>

                  <div
                    class="text-left italic text-muted-400 break-words whitespace-pre-wrap"
                  >
                    {{ prop.description }}
                  </div>
                  <div
                    v-if="prop.tags.length > 0"
                    class="mt-3 break-words space-y-2"
                  >
                    <div
                      v-for="tag in prop.tags"
                      :key="tag.name"
                      class="text-xs text-muted-400"
                    >
                      <p class="font-semibold">@{{ tag.name }}</p>
                      <p
                        v-if="tag.text"
                        class="block"
                        v-html="wrapExternalLinks(tag.text)"
                      ></p>
                    </div>
                  </div>
                </div>
                <div class="col-span-1 lg:col-span-8">
                  <AddonMarkdownRemark
                    :lines="false"
                    class="max-w-none"
                    :source="docs.renderProperty(prop)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Events display -->
        <div v-if="docs.events.length > 0" class="mx-auto mt-10 w-full">
          <div class="px-6 pt-6 pb-2">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              :anchor="{ prefix: '', suffix: '#' }"
              class="text-muted-800 dark:text-muted-200"
            >
              <TairoTocAnchor
                :level="3"
                prefix=""
                suffix="¶"
                :id="`${docs.meta.kebabName}-events`"
              >
                Events
              </TairoTocAnchor>
            </BaseHeading>
          </div>

          <div class="hidden lg:block">
            <div class="w-full div-auto font-alt">
              <div
                class="bg-muted-50 text-xs font-semibold uppercase text-muted-400 dark:bg-muted-700 px-4"
              >
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 px-2 py-4">
                  <div class="col-span-1 lg:col-span-4">
                    <div class="text-left font-semibold">Name</div>
                  </div>
                  <div class="col-span-1 lg:col-span-8">
                    <div class="text-left font-semibold">Example</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6">
            <div class="w-full div-auto font-alt">
              <div
                class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 pb-6 border-b border-muted-100 text-sm dark:border-muted-700"
                v-for="event in docs.events"
                :key="event.type"
              >
                <div class="col-span-1 lg:col-span-4">
                  <div class="flex items-center">
                    <div
                      class="font-medium text-muted-800 dark:text-muted-100 font-mono"
                    >
                      <code>@{{ event.name }}</code>
                    </div>
                  </div>
                </div>
                <div class="col-span-1 lg:col-span-8">
                  <AddonMarkdownRemark
                    :lines="false"
                    class="max-w-none"
                    :source="docs.renderEvents(event)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Slots display -->
        <div v-if="docs.slots.length > 0" class="mx-auto mt-10 w-full">
          <div class="px-6 pt-6 pb-2">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              :anchor="{ prefix: '', suffix: '#' }"
              class="text-muted-800 dark:text-muted-200"
            >
              <TairoTocAnchor
                :level="3"
                prefix=""
                suffix="¶"
                :id="`${docs.meta.kebabName}-slots`"
              >
                Slots
              </TairoTocAnchor>
            </BaseHeading>
          </div>

          <div class="hidden lg:block">
            <div class="w-full div-auto font-alt">
              <div
                class="bg-muted-50 text-xs font-semibold uppercase text-muted-400 dark:bg-muted-700 px-4"
              >
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 px-2 py-4">
                  <div class="col-span-1 lg:col-span-4">
                    <div class="text-left font-semibold">Name</div>
                  </div>
                  <div class="col-span-1 lg:col-span-8">
                    <div class="text-left font-semibold">Example</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6">
            <div class="w-full div-auto font-alt">
              <div
                class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 pb-6 border-b border-muted-100 text-sm dark:border-muted-700"
                v-for="slot in docs.slots"
                :key="slot.name"
              >
                <div class="col-span-1 lg:col-span-4">
                  <div class="flex items-center">
                    <div
                      class="font-medium text-muted-800 dark:text-muted-100 font-mono"
                    >
                      <code>#{{ slot.name }}</code>
                    </div>
                  </div>
                </div>
                <div class="col-span-1 lg:col-span-8">
                  <AddonMarkdownRemark
                    :lines="false"
                    class="max-w-none"
                    :source="docs.renderSlot(slot)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Exposed display -->
        <div v-if="docs.exposed.length > 0" class="mx-auto mt-10 w-full">
          <div class="px-6 pt-6 pb-2">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              :anchor="{ prefix: '', suffix: '#' }"
              class="text-muted-800 dark:text-muted-200"
            >
              <TairoTocAnchor
                :level="3"
                prefix=""
                suffix="¶"
                :id="`${docs.meta.kebabName}-exposed`"
              >
                Exposed
              </TairoTocAnchor>
            </BaseHeading>
          </div>

          <div class="hidden lg:block">
            <div class="w-full div-auto font-alt">
              <div
                class="bg-muted-50 text-xs font-semibold uppercase text-muted-400 dark:bg-muted-700 px-4"
              >
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 px-2 py-4">
                  <div class="col-span-1 lg:col-span-4">
                    <div class="text-left font-semibold">Name</div>
                  </div>
                  <div class="col-span-1 lg:col-span-8">
                    <div class="text-left font-semibold">Example</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6">
            <div class="w-full div-auto font-alt">
              <div
                class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 pb-6 border-b border-muted-100 text-sm dark:border-muted-700"
                v-for="exposed in docs.exposed"
                :key="exposed.name"
              >
                <div class="col-span-1 lg:col-span-4">
                  <div class="flex items-center">
                    <div
                      class="font-medium text-muted-800 dark:text-muted-100 font-mono"
                    >
                      <code>{{ exposed.name }}</code>
                    </div>
                  </div>
                  <div
                    class="text-left italic text-muted-400 break-words whitespace-pre-wrap"
                  >
                    {{ exposed.description }}
                  </div>
                </div>
                <div class="col-span-1 lg:col-span-8">
                  <AddonMarkdownRemark
                    :lines="false"
                    class="max-w-none"
                    :source="docs.renderExposed(exposed)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocLayoutSection>
  </div>
</template>
