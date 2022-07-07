<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/tooltip/toc'
import { avatar, positions } from '@@/documentation/components/tooltip'
import { properties } from '@@/documentation/components/tooltip/properties'

definePageMeta({
  title: 'Tooltips',
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
        <!-- Tooltip -->
        <DocSection title="Tooltip flow" tag="1.0.0">
          <DocComponent label="Default tooltip positions">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <BaseButtonIcon shape="curved" tooltip="Time for a nap!">
                  <BaseIcon
                    name="ph:timer-duotone"
                    class="h-5 w-5 text-sky-500"
                  />
                </BaseButtonIcon>
                <BaseButtonIcon
                  shape="curved"
                  flow="left"
                  tooltip="Unlock this now!"
                >
                  <BaseIcon
                    name="ph:lock-duotone"
                    class="h-5 w-5 text-emerald-500"
                  />
                </BaseButtonIcon>
                <BaseButtonIcon
                  shape="curved"
                  flow="right"
                  tooltip="Give some love!"
                >
                  <BaseIcon
                    name="ph:heartbeat-duotone"
                    class="h-5 w-5 text-rose-500"
                  />
                </BaseButtonIcon>
                <BaseButtonIcon
                  shape="curved"
                  flow="down"
                  tooltip="The King in the North!"
                >
                  <BaseIcon
                    name="ph:crown-duotone"
                    class="h-5 w-5 text-yellow-500"
                  />
                </BaseButtonIcon>
                <BaseButtonAction shape="curved" tooltip="Here we go!">
                  <BaseIcon
                    name="ph:bell-ringing-duotone"
                    class="-ml-1 h-4 w-4 text-primary-500"
                  />
                  <span class="py-2">Subscribe</span>
                </BaseButtonAction>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="positions" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tooltip -->
        <DocSection title="Tooltip avatars" tag="1.0.0">
          <DocComponent label="Tooltips on avatars">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <BaseAvatar
                  src="/img/avatars/3.svg"
                  size="lg"
                  tooltip="Clarke Miller"
                />
                <BaseAvatar
                  src="/img/avatars/17.svg"
                  size="lg"
                  tooltip="Barry Weston"
                />
                <BaseAvatar
                  src="/img/avatars/16.svg"
                  size="lg"
                  tooltip="Carlos Perez"
                />
                <BaseAvatar
                  src="/img/avatars/15.svg"
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
          component="Tooltip"
          :properties="properties.props"
          :slots="properties.slots"
        />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
