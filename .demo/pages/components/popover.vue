<script setup lang="ts">
import dualLeft from '~/documentation/popover/dual-left.md?raw'
import dualRight from '~/documentation/popover/dual-right.md?raw'
import helpLeft from '~/documentation/popover/help-left.md?raw'
import helpRight from '~/documentation/popover/help-right.md?raw'
import mediaLeft from '~/documentation/popover/media-left.md?raw'
import mediaRight from '~/documentation/popover/media-right.md?raw'

definePageMeta({
  title: 'Popover',
  documentation: {
    category: 'Interaction',
    components: [
      'BasePopover',
      'BasePopoverContentHelp',
      'BasePopoverContentDual',
      'BasePopoverContentMedia',
    ],
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
        <!-- Popover -->
        <DocSection title="Help left" tag="1.0.0">
          <DocComponent label="Click the elements below">
            <template #demo>
              <div class="flex flex-wrap items-end gap-6">
                <BasePopover size="sm">
                  <span class="flex items-center text-muted-500">
                    <Icon name="lucide:help-circle" class="mr-1 h-4 w-4" />
                    <span class="font-sans text-sm">Help text</span>
                  </span>

                  <template #content>
                    <BasePopoverContentHelp
                      title="Cookies"
                      subtitle="Managing cookies"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit solor
                      moranitur lobis em."
                      icon="lucide:cookie"
                    />
                  </template>
                </BasePopover>

                <BasePopover size="sm">
                  <span class="flex items-center text-muted-500">
                    <Icon name="lucide:help-circle" class="mr-1 h-4 w-4" />
                    <span class="font-sans text-sm">Help text</span>
                  </span>

                  <template #content>
                    <BasePopoverContentHelp
                      title="Dashboard"
                      subtitle="Adding new widgets"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit solor
                      moranitur lobis em."
                      icon="lucide:layout-dashboard"
                      icon-color="success"
                    />
                  </template>
                </BasePopover>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="helpLeft" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Popover -->
        <DocSection title="Help right" tag="1.0.0">
          <DocComponent label="Click the elements below">
            <template #demo>
              <div class="flex items-end justify-end gap-6">
                <BasePopover size="sm" orientation="end">
                  <span class="flex items-center text-muted-500">
                    <Icon name="lucide:help-circle" class="mr-1 h-4 w-4" />
                    <span class="font-sans text-sm">Help text</span>
                  </span>

                  <template #content>
                    <BasePopoverContentHelp
                      title="New design"
                      subtitle="Adding new designs"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit solor
                      moranitur lobis em."
                      icon="lucide:gem"
                      icon-color="info"
                    />
                  </template>
                </BasePopover>

                <BasePopover size="sm" orientation="end">
                  <span class="flex items-center text-muted-500">
                    <Icon name="lucide:help-circle" class="mr-1 h-4 w-4" />
                    <span class="font-sans text-sm">Help text</span>
                  </span>

                  <template #content>
                    <BasePopoverContentHelp
                      title="Error"
                      subtitle="Handling errors"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit solor
                      moranitur lobis em."
                      icon="lucide:x-octagon"
                      icon-color="danger"
                    />
                  </template>
                </BasePopover>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="helpRight" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Popover -->
        <DocSection title="Dual left" tag="1.0.0">
          <DocComponent label="Click the elements below">
            <template #demo>
              <div class="flex items-end gap-6">
                <BasePopover orientation="start">
                  <div class="flex items-center">
                    <BaseAvatar src="/img/avatars/3.svg" />
                    <span
                      class="ml-3 font-heading text-sm font-semibold text-muted-800 dark:text-white"
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
                          icon: 'ph:briefcase-duotone',
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
              <DocMarkdown :source="dualLeft" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Popover -->
        <DocSection title="Dual right" tag="1.0.0">
          <DocComponent label="Click the elements below">
            <template #demo>
              <div class="flex items-end justify-end gap-6">
                <BasePopover orientation="end">
                  <div class="flex items-center">
                    <BaseAvatar src="/img/avatars/2.svg" />
                    <span
                      class="ml-3 font-heading text-sm font-semibold text-muted-800 dark:text-white"
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
                          icon: 'ph:briefcase-duotone',
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
              <DocMarkdown :source="dualRight" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Popover -->
        <DocSection title="Media left" tag="1.0.0">
          <DocComponent label="Click the elements below">
            <template #demo>
              <div class="flex items-end gap-6">
                <BasePopover orientation="start">
                  <div class="flex items-center">
                    <span
                      class="rounded-full border border-muted-300 py-1.5 px-3 font-heading text-sm font-semibold text-muted-800 dark:border-muted-600 dark:text-white"
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
              <DocMarkdown :source="mediaLeft" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Popover -->
        <DocSection title="Media right" tag="1.0.0">
          <DocComponent label="Click the elements below">
            <template #demo>
              <div class="flex items-end justify-end gap-6">
                <BasePopover orientation="end">
                  <div class="flex items-center">
                    <span
                      class="rounded-full border border-muted-300 py-1.5 px-3 font-heading text-sm font-semibold text-muted-800 dark:border-muted-600 dark:text-white"
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
              <DocMarkdown :source="mediaRight" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Popover properties -->
        <DocComponentMeta name="BasePopover" />

        <!-- Help properties -->
        <DocComponentMeta name="BasePopoverContentHelp" />

        <!-- Dual properties -->
        <DocComponentMeta name="BasePopoverContentDual" />

        <!-- Media properties -->
        <DocComponentMeta name="BasePopoverContentMedia" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
