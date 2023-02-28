<script setup lang="ts">
import AvatarDemo from '~/documentation/tooltip/avatar.vue'
import avatar from '~/documentation/tooltip/avatar.vue?raw'
import PositionsDemo from '~/documentation/tooltip/positions.vue'
import positions from '~/documentation/tooltip/positions.vue?raw'

definePageMeta({
  title: 'Tooltips',
})

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}

const demoBreadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Components Hub',
    hideLabel: false,
    to: '/components',
  },
  {
    label: 'Tooltip',
    hideLabel: false,
    to: '#/',
  },
]
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="demoBreadcrumb" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Tooltip -->
        <DocSection title="Tooltip flow" tag="1.0.0">
          <DocComponent label="Default tooltip positions">
            <template #demo>
              <PositionsDemo />
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(positions)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tooltip -->
        <DocSection title="Tooltip avatars" tag="1.0.0">
          <DocComponent label="Tooltips on avatars">
            <template #demo>
              <AvatarDemo />
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(avatar)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tooltip properties -->
        <!-- <DocProps
          component="Tooltip"
          :properties="properties.props"
          :slots="properties.slots"
        /> -->
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
