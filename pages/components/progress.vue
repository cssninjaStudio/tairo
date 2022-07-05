<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/progress/toc'
import {
  bar,
  circle,
  colors,
  indeterminate,
  sizes,
} from '@@/documentation/components/progress'
import {
  barProperties,
  circleProperties,
} from '@@/documentation/components/progress/properties'
import {
  progress,
  progressCircle,
} from '@@/documentation/components/progress/data'

definePageMeta({
  title: 'Progress',
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
        <!-- Progress bar -->
        <DocSection id="progress-bar" title="Progress bar" tag="1.0.0">
          <DocComponent label="Default progress bar">
            <template #demo>
              <div class="space-y-4 max-w-xs">
                <BaseProgress
                  title="Default progress bar"
                  size="sm"
                  :value="progress"
                  color="primary"
                />
                <div class="flex justify-between gap-2">
                  <BaseButtonAction
                    :class="
                      progress === 25 && '!border-primary-500 !text-primary-500'
                    "
                    @click="progress = 25"
                  >
                    25%
                  </BaseButtonAction>
                  <BaseButtonAction
                    :class="
                      progress === 50 && '!border-primary-500 !text-primary-500'
                    "
                    @click="progress = 50"
                  >
                    50%
                  </BaseButtonAction>
                  <BaseButtonAction
                    :class="
                      progress === 75 && '!border-primary-500 !text-primary-500'
                    "
                    @click="progress = 75"
                  >
                    75%
                  </BaseButtonAction>
                  <BaseButtonAction
                    :class="
                      progress === 100 &&
                      '!border-primary-500 !text-primary-500'
                    "
                    @click="progress = 100"
                  >
                    100%
                  </BaseButtonAction>
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
                    title="Primary circle progress bar"
                    :size="45"
                    :value="progressCircle"
                    class="text-primary-500"
                  />
                  <BaseProgressCircle
                    title="Yellow circle progress bar"
                    :size="55"
                    :value="progressCircle"
                    class="text-yellow-500"
                  />
                  <BaseProgressCircle
                    title="Pink circle progress bar"
                    :size="75"
                    :value="progressCircle"
                    class="text-pink-500"
                  />
                  <BaseProgressCircle
                    title="Indigo circle progress bar"
                    :size="85"
                    :value="progressCircle"
                    class="text-indigo-400"
                  />
                </div>

                <div class="flex justify-between gap-2">
                  <BaseButtonAction
                    :class="
                      progressCircle === 25 &&
                      '!border-primary-500 !text-primary-500'
                    "
                    @click="progressCircle = 25"
                  >
                    25%
                  </BaseButtonAction>
                  <BaseButtonAction
                    :class="
                      progressCircle === 50 &&
                      '!border-primary-500 !text-primary-500'
                    "
                    @click="progressCircle = 50"
                  >
                    50%
                  </BaseButtonAction>
                  <BaseButtonAction
                    :class="
                      progressCircle === 75 &&
                      '!border-primary-500 !text-primary-500'
                    "
                    @click="progressCircle = 75"
                  >
                    75%
                  </BaseButtonAction>
                  <BaseButtonAction
                    :class="
                      progressCircle === 100 &&
                      '!border-primary-500 !text-primary-500'
                    "
                    @click="progressCircle = 100"
                  >
                    100%
                  </BaseButtonAction>
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
                <BaseProgress
                  title="xs progress bar"
                  size="xs"
                  :value="78"
                  color="primary"
                />
                <BaseProgress
                  title="sm progress bar"
                  size="sm"
                  :value="78"
                  color="primary"
                />
                <BaseProgress
                  title="md progress bar"
                  size="md"
                  :value="78"
                  color="primary"
                />
                <BaseProgress
                  title="lg progress bar"
                  size="lg"
                  :value="78"
                  color="primary"
                />
                <BaseProgress
                  title="xl progress bar"
                  size="xl"
                  :value="78"
                  color="primary"
                />
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
                <BaseProgress
                  title="primary progress bar"
                  size="sm"
                  :value="78"
                  color="primary"
                />
                <BaseProgress
                  title="success progress bar"
                  size="sm"
                  :value="78"
                  color="success"
                />
                <BaseProgress
                  title="info progress bar"
                  size="sm"
                  :value="78"
                  color="info"
                />
                <BaseProgress
                  title="warning progress bar"
                  size="sm"
                  :value="78"
                  color="warning"
                />
                <BaseProgress
                  title="danger progress bar"
                  size="sm"
                  :value="78"
                  color="danger"
                />
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
                  title="indeterminate primary progress bar"
                  size="sm"
                  color="primary"
                />
                <BaseProgress
                  title="indeterminate success progress bar"
                  size="sm"
                  color="success"
                />
                <BaseProgress
                  title="indeterminate info progress bar"
                  size="sm"
                  color="info"
                />
                <BaseProgress
                  title="indeterminate warning progress bar"
                  size="sm"
                  color="warning"
                />
                <BaseProgress
                  title="indeterminate danger progress bar"
                  size="sm"
                  color="danger"
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
