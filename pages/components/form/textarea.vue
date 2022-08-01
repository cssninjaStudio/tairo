<script setup lang="ts">
import {
  addon,
  curved,
  disabled,
  focus,
  invalid,
  loading,
  rounded,
  straight,
} from '@@/documentation/components/form/textarea'
import {
  textareaCurved,
  textareaFull,
  textareaRounded,
  textareaStraight,
} from '@@/documentation/components/form/textarea/data'

import { metaBaseFormTextarea } from '#nuxt-component-meta'

definePageMeta({
  title: 'Textarea',
  documentation: {
    category: 'Forms',
    components: ['BaseFormTextarea'],
  },
})
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Textarea straight -->
        <DocSection
          id="textarea-straight"
          title="Textarea straight"
          tag="1.0.0"
        >
          <DocComponent label="Straight textarea example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormTextarea
                    v-model="textareaStraight"
                    label="Message"
                    shape="straight"
                    placeholder="Write a message..."
                  />
                </div>
                <!-- State box -->
                <DocState :state="textareaStraight" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="straight" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea rounded -->
        <DocSection title="Textarea rounded" tag="1.0.0">
          <DocComponent label="Rounded textarea example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormTextarea
                    v-model="textareaRounded"
                    label="Message"
                    shape="rounded"
                    placeholder="Write a message..."
                  />
                </div>
                <!-- State box -->
                <DocState :state="textareaRounded" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="rounded" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea curved -->
        <DocSection title="Textarea curved" tag="1.0.0">
          <DocComponent label="Curved textarea example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormTextarea
                    v-model="textareaCurved"
                    label="Message"
                    shape="curved"
                    placeholder="Write a message..."
                  />
                </div>
                <!-- State box -->
                <DocState :state="textareaCurved" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="curved" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea focus -->
        <DocSection title="Textarea focus" tag="1.0.0">
          <DocComponent label="Primary focus variation">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormTextarea
                    label="Message"
                    shape="rounded"
                    placeholder="Write a message..."
                    color-focus
                  />
                </div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="focus" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea validation -->
        <DocSection title="Textarea invalid" tag="1.0.0">
          <DocComponent label="Invalid validation variation">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormTextarea
                    label="Message"
                    shape="rounded"
                    placeholder="Write a message..."
                    invalid
                  />
                </div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="invalid" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea loading -->
        <DocSection title="Textarea loading" tag="1.0.0">
          <DocComponent label="Loading state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormTextarea
                    label="Description"
                    shape="rounded"
                    placeholder="Write a message..."
                    loading
                  />
                </div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="loading" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea disabled -->
        <DocSection
          id="textarea-disabled"
          title="Textarea disabled"
          tag="1.0.0"
        >
          <DocComponent label="Disabled state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormTextarea
                    label="Description"
                    shape="rounded"
                    placeholder="Write a message..."
                    disabled
                  />
                </div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="disabled" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea addon -->
        <DocSection title="Textarea addon" tag="1.0.0">
          <DocComponent label="Textarea with custom addon">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormTextarea
                    v-model="textareaRounded"
                    label="Message"
                    shape="curved"
                    placeholder="Write a message..."
                    :rows="6"
                    addon
                  >
                    <template #addon>
                      <div class="flex items-center gap-2">
                        <BaseAvatar src="/img/avatars/2.svg" class="mr-1" />
                        <BaseHeading
                          as="h4"
                          size="sm"
                          weight="semibold"
                          class="text-muted-800 dark:text-white"
                        >
                          Maya
                        </BaseHeading>
                      </div>
                      <div class="flex items-center gap-2">
                        <BaseButton flavor="pastel" color="primary">
                          Post Comment
                        </BaseButton>
                      </div>
                    </template>
                  </BaseFormTextarea>
                </div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="addon" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea properties -->
        <DocComponentMeta :meta="metaBaseFormTextarea" />
      </template>

      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
