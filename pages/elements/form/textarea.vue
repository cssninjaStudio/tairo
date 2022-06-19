<script setup lang="ts">
// import { toc } from '@@/documentation/elements/textarea/toc'
// import { } from '@@/documentation/elements/textarea'

definePageMeta({
  title: 'Textarea',
})

const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'i-lucide-home',
    hideIcon: false,
    to: '/',
  },
  {
    label: 'Elements',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/elements',
  },
  {
    label: 'Textarea',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/form/textarea',
  },
]

const textareaStraight = ref('')
const textareaRounded = ref('')
const textareaCurved = ref('')
const textareaFull = ref('')
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

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
          <DocComponent label="Default textarea straight">
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
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Textarea rounded -->
        <DocSection id="textarea-rounded" title="Textarea rounded" tag="1.0.0">
          <DocComponent label="Default textarea rounded">
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
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Textarea curved -->
        <DocSection id="textarea-curved" title="Textarea curved" tag="1.0.0">
          <DocComponent label="Default textarea curved">
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
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Textarea focus -->
        <DocSection id="textarea-rounded" title="Textarea focus" tag="1.0.0">
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
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Textarea validation -->
        <DocSection id="textarea-invalid" title="Textarea invalid" tag="1.0.0">
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
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Textarea loading -->
        <DocSection id="textarea-loading" title="Textarea loading" tag="1.0.0">
          <DocComponent label="Primary loading variation">
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
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Textarea disabled -->
        <DocSection
          id="textarea-disabled"
          title="Textarea disabled"
          tag="1.0.0"
        >
          <DocComponent label="Primary disabled variation">
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
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Textarea addon -->
        <DocSection id="textarea-addon" title="Textarea addon" tag="1.0.0">
          <DocComponent label="Default textarea addon">
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
                        <BaseAvatar
                          picture="/img/avatars/2.svg"
                          size="sm"
                          class="mr-1"
                        />
                        <BaseHeading
                          tag="h4"
                          size="sm"
                          weight="semibold"
                          class="text-slate-800 dark:text-white"
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
            <template #code></template>
          </DocComponent>
        </DocSection>
      </template>

      <!-- Toc -->
      <template #toc></template>
    </DocLayout>
  </div>
</template>
