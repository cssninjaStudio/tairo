<script setup lang="ts">
// import { toc } from '@@/documentation/elements/message/toc'
// import { } from '@@/documentation/elements/message'

definePageMeta({
  title: 'Messages',
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
    label: 'Message',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/message',
  },
]
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Message types -->
        <DocSection id="message-types" title="Message types" tag="1.0.0">
          <DocComponent label="Default message types">
            <template #demo>
              <div class="space-y-4 max-w-xs">
                <BaseMessage type="success" message="A successful message." />
                <BaseMessage type="info" message="An information message." />
                <BaseMessage type="warning" message="A warning message." />
                <BaseMessage type="danger" message="A destructive message." />
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Message icons -->
        <DocSection id="message-icons" title="Message icons" tag="1.0.0">
          <DocComponent label="?essage icons example">
            <template #demo>
              <div class="space-y-4 max-w-xs">
                <BaseMessage
                  type="success"
                  message="A successful message."
                  icon
                />
                <BaseMessage
                  type="info"
                  message="An information message."
                  icon
                />
                <BaseMessage type="warning" message="A warning message." icon />
                <BaseMessage
                  type="danger"
                  message="A destructive message."
                  icon
                />
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Message shapes -->
        <DocSection id="message-shapes" title="Message shapes" tag="1.0.0">
          <DocComponent label="Default message shapes">
            <template #demo>
              <div class="space-y-4 max-w-xs">
                <BaseMessage
                  type="success"
                  message="A successful message."
                  shape="straight"
                  icon
                />
                <BaseMessage
                  type="info"
                  message="An information message."
                  shape="rounded"
                  icon
                />
                <BaseMessage
                  type="warning"
                  message="A warning message."
                  shape="curved"
                  icon
                />
                <BaseMessage
                  type="danger"
                  message="A destructive message."
                  shape="full"
                  icon
                />
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
