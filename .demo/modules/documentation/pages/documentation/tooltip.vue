<script setup lang="ts">
import AvatarDemo from '../../examples/tooltip/avatar.vue'
import avatar from '../../examples/tooltip/avatar.vue?raw'
import PositionsDemo from '../../examples/tooltip/positions.vue'
import positions from '../../examples/tooltip/positions.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Tooltip -->
        <DocSection title="Tooltip flow" tag="1.0.0">
          <DocComponent label="Default tooltip positions">
            <template #demo>
              <PositionsDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(positions)"
                fullwidth
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(avatar)"
                fullwidth
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
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
