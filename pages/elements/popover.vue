<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/elements/popover/toc'
import {
  dualLeft,
  dualRight,
  helpLeft,
  helpRight,
  mediaLeft,
  mediaRight,
} from '@@/documentation/elements/popover'
import {
  dualProperties,
  helpProperties,
  mediaProperties,
  properties,
} from '@@/documentation/elements/popover/properties'

definePageMeta({
  title: 'Popover',
})
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Popover -->
        <DocSection id="popover-help-left" title="Help left" tag="1.0.0">
          <DocComponent label="Click the elements below">
            <template #demo>
              <div class="flex items-end flex-wrap gap-6">
                <BasePopover size="sm">
                  <span class="flex items-center text-slate-500">
                    <BaseIcon name="lucide:help-circle" class="w-4 h-4 mr-1" />
                    <span class="font-text text-sm">Help text</span>
                  </span>

                  <template #content>
                    <BasePopoverContentHelp
                      title="Cookies"
                      subtitle="Managing cookies"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit solor
                      moranitur lobis em."
                      icon="i-lucide-cookie"
                    />
                  </template>
                </BasePopover>

                <BasePopover size="sm">
                  <span class="flex items-center text-slate-500">
                    <BaseIcon name="lucide:help-circle" class="w-4 h-4 mr-1" />
                    <span class="font-text text-sm">Help text</span>
                  </span>

                  <template #content>
                    <BasePopoverContentHelp
                      title="Dashboard"
                      subtitle="Adding new widgets"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit solor
                      moranitur lobis em."
                      icon="i-lucide-layout-dashboard"
                      icon-color="success"
                    />
                  </template>
                </BasePopover>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="helpLeft" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Popover -->
        <DocSection id="popover-help-right" title="Help right" tag="1.0.0">
          <DocComponent label="Click the elements below">
            <template #demo>
              <div class="flex items-end justify-end gap-6">
                <BasePopover size="sm" orientation="end">
                  <span class="flex items-center text-slate-500">
                    <BaseIcon name="lucide:help-circle" class="w-4 h-4 mr-1" />
                    <span class="font-text text-sm">Help text</span>
                  </span>

                  <template #content>
                    <BasePopoverContentHelp
                      title="New design"
                      subtitle="Adding new designs"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit solor
                      moranitur lobis em."
                      icon="i-lucide-gem"
                      icon-color="info"
                    />
                  </template>
                </BasePopover>

                <BasePopover size="sm" orientation="end">
                  <span class="flex items-center text-slate-500">
                    <BaseIcon name="lucide:help-circle" class="w-4 h-4 mr-1" />
                    <span class="font-text text-sm">Help text</span>
                  </span>

                  <template #content>
                    <BasePopoverContentHelp
                      title="Error"
                      subtitle="Handling errors"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit solor
                      moranitur lobis em."
                      icon="i-lucide-x-octagon"
                      icon-color="danger"
                    />
                  </template>
                </BasePopover>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="helpRight" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Popover -->
        <DocSection id="popover-dual-left" title="Dual left" tag="1.0.0">
          <DocComponent label="Click the elements below">
            <template #demo>
              <div class="flex items-end gap-6">
                <BasePopover orientation="start">
                  <div class="flex items-center">
                    <BaseAvatar picture="/img/avatars/3.svg" size="sm" />
                    <span
                      class="font-main text-sm font-semibold text-slate-800 dark:text-white ml-3"
                    >
                      Mike Miller
                    </span>
                  </div>

                  <template #content>
                    <BasePopoverContentDual
                      :stats="[
                        {
                          title: 'Javascript',
                          subtitle: '65 projects',
                          image:
                            'https://vuero.cssninja.io/images/icons/stacks/js.svg',
                        },
                        {
                          title: 'Projects',
                          subtitle: '154 projects',
                          icon: 'i-ph-briefcase-duotone',
                        },
                      ]"
                      image="/img/avatars/3.svg"
                      title="Mike Miller"
                      subtitle="Software Engineer"
                      footer-title="$75/hour"
                      footer-text="Based on the latest 5 jobs"
                      link-label="Hire Now"
                      link="/"
                    />
                  </template>
                </BasePopover>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="dualLeft" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Popover -->
        <DocSection id="popover-dual-right" title="Dual right" tag="1.0.0">
          <DocComponent label="Click the elements below">
            <template #demo>
              <div class="flex items-end justify-end gap-6">
                <BasePopover orientation="end">
                  <div class="flex items-center">
                    <BaseAvatar picture="/img/avatars/2.svg" size="sm" />
                    <span
                      class="font-main text-sm font-semibold text-slate-800 dark:text-white ml-3"
                    >
                      Maya Rosselini
                    </span>
                  </div>

                  <template #content>
                    <BasePopoverContentDual
                      :stats="[
                        {
                          title: 'Angular',
                          subtitle: '16 projects',
                          image:
                            'https://vuero.cssninja.io/images/icons/stacks/angular.svg',
                        },
                        {
                          title: 'Projects',
                          subtitle: '56 projects',
                          icon: 'i-ph-briefcase-duotone',
                        },
                      ]"
                      image="/img/avatars/2.svg"
                      title="Maya Rosselini"
                      subtitle="Software Engineer"
                      footer-title="$55/hour"
                      footer-text="Based on the latest 5 jobs"
                      link-label="Hire Now"
                      link="/"
                    />
                  </template>
                </BasePopover>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="dualRight" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Popover -->
        <DocSection id="popover-media-left" title="Media left" tag="1.0.0">
          <DocComponent label="Click the elements below">
            <template #demo>
              <div class="flex items-end gap-6">
                <BasePopover orientation="start">
                  <div class="flex items-center">
                    <span
                      class="font-main text-sm font-semibold text-slate-800 dark:text-white border border-slate-300 dark:border-slate-600 rounded-full py-1.5 px-3"
                    >
                      Beautiful house
                    </span>
                  </div>

                  <template #content>
                    <BasePopoverContentMedia
                      :images="[
                        'https://img.freepik.com/vector-gratis/mobiliario-sofa-ventana-mesa-plantas-interior-sala-estar_357257-356.jpg?w=300',
                        'https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?w=150',
                        'https://img.freepik.com/free-vector/home-interior-background-style_52683-44164.jpg?w=150',
                      ]"
                      title="House"
                      subtitle="5 rooms"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Istam voluptatem perpetuam quis potest praestare sapienti."
                      footer-title="$150/night"
                      footer-text="14 Columbia Av., Block C"
                      link-label="Rent Now"
                      link="/"
                    />
                  </template>
                </BasePopover>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="mediaLeft" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Popover -->
        <DocSection id="popover-media-right" title="Media right" tag="1.0.0">
          <DocComponent label="Click the elements below">
            <template #demo>
              <div class="flex items-end justify-end gap-6">
                <BasePopover orientation="end">
                  <div class="flex items-center">
                    <span
                      class="font-main text-sm font-semibold text-slate-800 dark:text-white border border-slate-300 dark:border-slate-600 rounded-full py-1.5 px-3"
                    >
                      Beautiful house
                    </span>
                  </div>

                  <template #content>
                    <BasePopoverContentMedia
                      :images="[
                        'https://img.freepik.com/vector-gratis/mobiliario-sofa-ventana-mesa-plantas-interior-sala-estar_357257-356.jpg?w=300',
                        'https://img.freepik.com/free-vector/home-interior-background-concept_52683-44165.jpg?w=150',
                        'https://img.freepik.com/free-vector/home-interior-background-style_52683-44164.jpg?w=150',
                      ]"
                      title="House"
                      subtitle="5 rooms"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Istam voluptatem perpetuam quis potest praestare sapienti."
                      footer-title="$150/night"
                      footer-text="14 Columbia Av., Block C"
                      link-label="Rent Now"
                      link="/"
                    />
                  </template>
                </BasePopover>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="mediaRight" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Popover properties -->
        <DocProps
          id="popover-props"
          component="Popover"
          :properties="properties.props"
          :slots="properties.slots"
        />

        <!-- Help properties -->
        <DocProps
          id="popover-content-help-props"
          component="Help content"
          :properties="helpProperties.props"
          :slots="helpProperties.slots"
        />

        <!-- Dual properties -->
        <DocProps
          id="popover-content-dual-props"
          component="Dual content"
          :properties="dualProperties.props"
          :slots="dualProperties.slots"
        />

        <!-- Media properties -->
        <DocProps
          id="popover-content-media-props"
          component="Media content"
          :properties="mediaProperties.props"
          :slots="mediaProperties.slots"
        />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
