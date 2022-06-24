<script setup lang="ts">
import { toc } from '@@/documentation/elements/progress/toc'
import {
  bar,
  circle,
  colors,
  indeterminate,
  sizes,
} from '@@/documentation/elements/progress'
import {
  barProperties,
  circleProperties,
} from '@@/documentation/elements/progress/properties'

definePageMeta({
  title: 'Progress',
})

const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'i-lucide-home',
    to: '/',
  },
  {
    label: 'Elements',
    hideLabel: false,
    to: '/elements',
  },
  {
    label: 'Progress',
    hideLabel: false,
    to: '/elements/progress',
  },
]

const progress = ref(25)
const progressCircle = ref(25)
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Progress bar -->
        <DocSection id="progress-bar" title="Progress bar" tag="1.0.0">
          <DocComponent label="Default progress bar">
            <template #demo>
              <div class="space-y-4 max-w-xs">
                <BaseProgress size="sm" :value="progress" color="primary" />
                <div class="flex justify-between gap-2">
                  <BaseAction
                    :class="
                      progress === 25 && '!border-primary-500 !text-primary-500'
                    "
                    @click="progress = 25"
                  >
                    25%
                  </BaseAction>
                  <BaseAction
                    :class="
                      progress === 50 && '!border-primary-500 !text-primary-500'
                    "
                    @click="progress = 50"
                  >
                    50%
                  </BaseAction>
                  <BaseAction
                    :class="
                      progress === 75 && '!border-primary-500 !text-primary-500'
                    "
                    @click="progress = 75"
                  >
                    75%
                  </BaseAction>
                  <BaseAction
                    :class="
                      progress === 100 &&
                      '!border-primary-500 !text-primary-500'
                    "
                    @click="progress = 100"
                  >
                    100%
                  </BaseAction>
                </div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="bar" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Progress circle -->
        <DocSection id="progress-circle" title="Progress circle" tag="1.0.0">
          <DocComponent label="Default progress circle">
            <template #demo>
              <div class="space-y-4 max-w-xs">
                <div class="flex items-end gap-2">
                  <BaseProgressCircle
                    :size="45"
                    :value="progressCircle"
                    class="text-primary-500"
                  />
                  <BaseProgressCircle
                    :size="55"
                    :value="progressCircle"
                    class="text-yellow-500"
                  />
                  <BaseProgressCircle
                    :size="75"
                    :value="progressCircle"
                    class="text-pink-500"
                  />
                  <BaseProgressCircle
                    :size="85"
                    :value="progressCircle"
                    class="text-indigo-400"
                  />
                </div>

                <div class="flex justify-between gap-2">
                  <BaseAction
                    :class="
                      progressCircle === 25 &&
                      '!border-primary-500 !text-primary-500'
                    "
                    @click="progressCircle = 25"
                  >
                    25%
                  </BaseAction>
                  <BaseAction
                    :class="
                      progressCircle === 50 &&
                      '!border-primary-500 !text-primary-500'
                    "
                    @click="progressCircle = 50"
                  >
                    50%
                  </BaseAction>
                  <BaseAction
                    :class="
                      progressCircle === 75 &&
                      '!border-primary-500 !text-primary-500'
                    "
                    @click="progressCircle = 75"
                  >
                    75%
                  </BaseAction>
                  <BaseAction
                    :class="
                      progressCircle === 100 &&
                      '!border-primary-500 !text-primary-500'
                    "
                    @click="progressCircle = 100"
                  >
                    100%
                  </BaseAction>
                </div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="circle" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Progress sizes -->
        <DocSection id="progress-sizes" title="Progress sizes" tag="1.0.0">
          <DocComponent label="Default progress sizes">
            <template #demo>
              <div class="space-y-4 max-w-xs">
                <BaseProgress size="xs" :value="78" color="primary" />
                <BaseProgress size="sm" :value="78" color="primary" />
                <BaseProgress size="md" :value="78" color="primary" />
                <BaseProgress size="lg" :value="78" color="primary" />
                <BaseProgress size="xl" :value="78" color="primary" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="sizes" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Progress colors -->
        <DocSection id="progress-colors" title="Progress colors" tag="1.0.0">
          <DocComponent label="Default progress colors">
            <template #demo>
              <div class="space-y-4 max-w-xs">
                <BaseProgress size="sm" :value="78" color="primary" />
                <BaseProgress size="sm" :value="78" color="success" />
                <BaseProgress size="sm" :value="78" color="info" />
                <BaseProgress size="sm" :value="78" color="warning" />
                <BaseProgress size="sm" :value="78" color="danger" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="colors" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Progress indeterminate -->
        <DocSection
          id="progress-indeterminate"
          title="Indeterminate"
          tag="1.0.0"
        >
          <DocComponent label="indeterminate progress animation">
            <template #demo>
              <div class="space-y-4 max-w-xs">
                <BaseProgress
                  size="sm"
                  :value="78"
                  color="primary"
                  indeterminate
                />
                <BaseProgress
                  size="sm"
                  :value="78"
                  color="success"
                  indeterminate
                />
                <BaseProgress
                  size="sm"
                  :value="78"
                  color="info"
                  indeterminate
                />
                <BaseProgress
                  size="sm"
                  :value="78"
                  color="warning"
                  indeterminate
                />
                <BaseProgress
                  size="sm"
                  :value="78"
                  color="danger"
                  indeterminate
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="indeterminate" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Progress bar properties -->
        <DocProps
          id="progress-bar-props"
          component="Progress bar"
          :properties="barProperties.props"
          :slots="barProperties.slots"
        />

        <!-- Progress circle properties -->
        <DocProps
          id="progress-circle-props"
          component="Progress circle"
          :properties="circleProperties.props"
          :slots="circleProperties.slots"
        />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
