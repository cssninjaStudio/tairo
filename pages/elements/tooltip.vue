<script setup lang="ts">
import { toc } from '@@/documentation/elements/tooltip/toc'
import { avatar, positions } from '@@/documentation/elements/tooltip'
import { properties } from '@@/documentation/elements/tooltip/properties'

definePageMeta({
  title: 'Tooltips',
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
    label: 'Tooltip',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/tooltip',
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
        <!-- Tooltip -->
        <DocSection id="tooltip-flow" title="Tooltip flow" tag="1.0.0">
          <DocComponent label="Default tooltip positions">
            <template #demo>
              <div class="flex items-end flex-wrap gap-2">
                <BaseIconButton shape="curved" tooltip="Time for a nap!">
                  <i class="i-ph-timer-duotone w-5 h-5 text-sky-500"></i>
                </BaseIconButton>
                <BaseIconButton
                  shape="curved"
                  flow="left"
                  tooltip="Unlock this now!"
                >
                  <i class="i-ph-lock-duotone w-5 h-5 text-emerald-500"></i>
                </BaseIconButton>
                <BaseIconButton
                  shape="curved"
                  flow="right"
                  tooltip="Give some love!"
                >
                  <i class="i-ph-heartbeat-duotone w-5 h-5 text-rose-500"></i>
                </BaseIconButton>
                <BaseIconButton
                  shape="curved"
                  flow="down"
                  tooltip="The King in the North!"
                >
                  <i class="i-ph-crown-duotone w-5 h-5 text-yellow-500"></i>
                </BaseIconButton>
                <BaseAction shape="curved" tooltip="Here we go!">
                  <i
                    class="i-ph-bell-ringing-duotone w-4 h-4 text-primary-500 -ml-1"
                  ></i>
                  <span class="py-2">Subscribe</span>
                </BaseAction>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="positions" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tooltip -->
        <DocSection id="tooltip-avatars" title="Tooltip avatars" tag="1.0.0">
          <DocComponent label="Tooltips on avatars">
            <template #demo>
              <div class="flex items-end flex-wrap gap-2">
                <BaseAvatar
                  picture="/img/avatars/3.svg"
                  size="lg"
                  tooltip="Clarke Miller"
                />
                <BaseAvatar
                  picture="/img/avatars/17.svg"
                  size="lg"
                  tooltip="Barry Weston"
                />
                <BaseAvatar
                  picture="/img/avatars/16.svg"
                  size="lg"
                  tooltip="Carlos Perez"
                />
                <BaseAvatar
                  picture="/img/avatars/15.svg"
                  size="lg"
                  tooltip="Albert Wesker"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="avatar" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tooltip properties -->
        <DocProps
          id="tooltip-props"
          component="Tooltip"
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
