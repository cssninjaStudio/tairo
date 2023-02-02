<script setup lang="ts">
import icons from '~/documentation/message/icons.md?raw'
import shapes from '~/documentation/message/shapes.md?raw'
import types from '~/documentation/message/types.md?raw'

definePageMeta({
  title: 'Messages',
  documentation: {
    category: 'Interaction',
    components: ['BaseMessage'],
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
        <!-- Message types -->
        <DocSection title="Message types" tag="1.0.0">
          <DocComponent label="Default message types">
            <template #demo>
              <BaseFocusLoop class="max-w-xs space-y-4">
                <BaseMessage>A successful message.</BaseMessage>
                <BaseMessage type="info">An information message.</BaseMessage>
                <BaseMessage type="warning">A warning message.</BaseMessage>
                <BaseMessage type="danger">A destructive message.</BaseMessage>
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown :source="types" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Message icons -->
        <DocSection title="Message icons" tag="1.0.0">
          <DocComponent label="Message icons example">
            <template #demo>
              <BaseFocusLoop class="max-w-xs space-y-4">
                <BaseMessage icon>A successful message.</BaseMessage>
                <BaseMessage type="info" icon>
                  An information message.
                </BaseMessage>
                <BaseMessage type="warning" icon>
                  A warning message.
                </BaseMessage>
                <BaseMessage type="danger" icon>
                  A destructive message.
                </BaseMessage>
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown :source="icons" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Message shapes -->
        <DocSection title="Message shapes" tag="1.0.0">
          <DocComponent label="Default message shapes">
            <template #demo>
              <BaseFocusLoop class="max-w-xs space-y-4">
                <BaseMessage shape="straight" icon>
                  A successful message.
                </BaseMessage>
                <BaseMessage type="info" shape="rounded" icon>
                  An information message.
                </BaseMessage>
                <BaseMessage
                  type="warning"
                  message="A warning message."
                  shape="curved"
                  icon
                />
                <BaseMessage type="danger" shape="full" icon>
                  A destructive message.
                </BaseMessage>
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown :source="shapes" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Message properties -->
        <DocComponentMeta name="BaseMessage" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
