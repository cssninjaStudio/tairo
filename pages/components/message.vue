<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/message/toc'
import { icons, shapes, types } from '@@/documentation/components/message'
import { properties } from '@@/documentation/components/message/properties'

definePageMeta({
  title: 'Messages',
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
        <DocSection id="message-types" title="Message types" tag="1.0.0">
          <DocComponent label="Default message types">
            <template #demo>
              <FocusLoop class="space-y-4 max-w-xs">
                <BaseMessage>A successful message.</BaseMessage>
                <BaseMessage type="info">An information message.</BaseMessage>
                <BaseMessage type="warning">A warning message.</BaseMessage>
                <BaseMessage type="danger">A destructive message.</BaseMessage>
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="types" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Message icons -->
        <DocSection id="message-icons" title="Message icons" tag="1.0.0">
          <DocComponent label="Message icons example">
            <template #demo>
              <FocusLoop class="space-y-4 max-w-xs">
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
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="icons" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Message shapes -->
        <DocSection id="message-shapes" title="Message shapes" tag="1.0.0">
          <DocComponent label="Default message shapes">
            <template #demo>
              <FocusLoop class="space-y-4 max-w-xs">
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
              </FocusLoop>
            </template>
            <template #code>
              <DocCode language="html" :code="shapes" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Message properties -->
        <DocProps
          id="message-props"
          component="Message"
          :properties="properties.props"
          :slots="properties.slots"
        />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
