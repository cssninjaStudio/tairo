<script setup lang="ts">
import AvatarSlotDemo from '#examples/dropdown/avatar-slot.vue'
import avatarSlot from '#examples/dropdown/avatar-slot.vue?raw'
import ButtonLeftDemo from '#examples/dropdown/button-left.vue'
import buttonLeft from '#examples/dropdown/button-left.vue?raw'
import ButtonRightDemo from '#examples/dropdown/button-right.vue'
import buttonRight from '#examples/dropdown/button-right.vue?raw'
import CompactDemo from '#examples/dropdown/compact.vue'
import compact from '#examples/dropdown/compact.vue?raw'
import ContextLeftDemo from '#examples/dropdown/context-left.vue'
import contextLeft from '#examples/dropdown/context-left.vue?raw'
import ContextRightDemo from '#examples/dropdown/context-right.vue'
import contextRight from '#examples/dropdown/context-right.vue?raw'
import HeaderDemo from '#examples/dropdown/header.vue'
import header from '#examples/dropdown/header.vue?raw'
import IconSlotDemo from '#examples/dropdown/icon-slot.vue'
import iconSlot from '#examples/dropdown/icon-slot.vue?raw'
import TextLeftDemo from '#examples/dropdown/text-left.vue'
import textLeft from '#examples/dropdown/text-left.vue?raw'
import TextRightDemo from '#examples/dropdown/text-right.vue'
import textRight from '#examples/dropdown/text-right.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Dropdown button -->
        <DocSection title="Button left" tag="1.0.0">
          <DocComponent label="Dropdown left example">
            <template #demo>
              <div class="flex items-end">
                <ButtonLeftDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(buttonLeft)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown button right -->
        <DocSection title="Button right" tag="1.0.0">
          <DocComponent label="Dropdown right example">
            <template #demo>
              <div class="flex items-end justify-end">
                <ButtonRightDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(buttonRight)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown menu compact -->
        <DocSection title="Compact menu" tag="1.0.0">
          <DocComponent label="Dropdown with compact menu">
            <template #demo>
              <div class="flex items-end">
                <CompactDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(compact)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown context left -->
        <DocSection title="Context left" tag="1.0.0">
          <DocComponent label="Dropdown left example">
            <template #demo>
              <div class="flex items-end">
                <ContextLeftDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(contextLeft)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown context right -->
        <DocSection
          id="dropdown-context-right"
          title="Context right"
          tag="1.0.0"
        >
          <DocComponent label="Dropdown right example">
            <template #demo>
              <div class="flex items-end justify-end">
                <ContextRightDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(contextRight)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown text left -->
        <DocSection title="Text left" tag="1.0.0">
          <DocComponent label="Dropdown left example">
            <template #demo>
              <div class="flex items-end">
                <TextLeftDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(textLeft)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown text right -->
        <DocSection title="Text right" tag="1.0.0">
          <DocComponent label="Dropdown right example">
            <template #demo>
              <div class="flex items-end justify-end">
                <TextRightDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(textRight)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown icon slot -->
        <DocSection title="Icon slot" tag="1.0.0">
          <DocComponent label="Icon slot example">
            <template #demo>
              <div class="flex items-end">
                <IconSlotDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(iconSlot)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown avatar slot -->
        <DocSection title="Avatar slot" tag="1.0.0">
          <DocComponent label="Avatar slot example">
            <template #demo>
              <div class="flex items-end">
                <AvatarSlotDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(avatarSlot)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown header -->
        <DocSection title="Header" tag="1.0.0">
          <DocComponent label="Dropdown header example">
            <template #demo>
              <div class="flex items-end">
                <HeaderDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(header)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown properties -->
        <DocComponentMeta name="BaseDropdown" />
        <DocComponentMeta name="BaseDropdownItem" />
        <DocComponentMeta name="BaseDropdownDivide" />

        <div class="py-24" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
