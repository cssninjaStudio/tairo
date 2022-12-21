<script setup lang="ts">
import addon from '~/documentation/form/textarea/addon.md?raw'
import curved from '~/documentation/form/textarea/curved.md?raw'
import disabled from '~/documentation/form/textarea/disabled.md?raw'
import invalid from '~/documentation/form/textarea/invalid.md?raw'
import loading from '~/documentation/form/textarea/loading.md?raw'
import rounded from '~/documentation/form/textarea/rounded.md?raw'
import focus from '~/documentation/form/textarea/focus.md?raw'
import straight from '~/documentation/form/textarea/straight.md?raw'

const textareaStraight = ref('')
const textareaRounded = ref('')
const textareaCurved = ref('')
const textareaFull = ref('')

definePageMeta({
  title: 'Textarea',
  documentation: {
    category: 'Forms',
    components: ['BaseTextarea'],
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
                  <BaseTextarea
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
              <DocMarkdown :source="straight" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea rounded -->
        <DocSection title="Textarea rounded" tag="1.0.0">
          <DocComponent label="Rounded textarea example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseTextarea
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
              <DocMarkdown :source="rounded" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea curved -->
        <DocSection title="Textarea curved" tag="1.0.0">
          <DocComponent label="Curved textarea example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseTextarea
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
              <DocMarkdown :source="curved" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea focus -->
        <DocSection title="Textarea focus" tag="1.0.0">
          <DocComponent label="Primary focus variation">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseTextarea
                    label="Message"
                    shape="rounded"
                    placeholder="Write a message..."
                    color-focus
                  />
                </div>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="focus" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea validation -->
        <DocSection title="Textarea invalid" tag="1.0.0">
          <DocComponent label="Invalid validation variation">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseTextarea
                    label="Message"
                    shape="rounded"
                    placeholder="Write a message..."
                    invalid
                  />
                </div>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="invalid" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea loading -->
        <DocSection title="Textarea loading" tag="1.0.0">
          <DocComponent label="Loading state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseTextarea
                    label="Description"
                    shape="rounded"
                    placeholder="Write a message..."
                    loading
                  />
                </div>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="loading" class="prose max-w-full" />
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
                  <BaseTextarea
                    label="Description"
                    shape="rounded"
                    placeholder="Write a message..."
                    disabled
                  />
                </div>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="disabled" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea addon -->
        <DocSection title="Textarea addon" tag="1.0.0">
          <DocComponent label="Textarea with custom addon">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseTextarea
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
                  </BaseTextarea>
                </div>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="addon" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Textarea properties -->
        <DocComponentMeta name="BaseTextarea" />
      </template>

      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
