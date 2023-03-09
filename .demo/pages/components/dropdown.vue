<script setup lang="ts">
import AvatarSlotDemo from '~/documentation/dropdown/avatar-slot.vue'
import avatarSlot from '~/documentation/dropdown/avatar-slot.vue?raw'
import ButtonLeftDemo from '~/documentation/dropdown/button-left.vue'
import buttonLeft from '~/documentation/dropdown/button-left.vue?raw'
import ButtonRightDemo from '~/documentation/dropdown/button-right.vue'
import buttonRight from '~/documentation/dropdown/button-right.vue?raw'
import CompactDemo from '~/documentation/dropdown/compact.vue'
import compact from '~/documentation/dropdown/compact.vue?raw'
import ContextLeftDemo from '~/documentation/dropdown/context-left.vue'
import contextLeft from '~/documentation/dropdown/context-left.vue?raw'
import ContextRightDemo from '~/documentation/dropdown/context-right.vue'
import contextRight from '~/documentation/dropdown/context-right.vue?raw'
import HeaderDemo from '~/documentation/dropdown/header.vue'
import header from '~/documentation/dropdown/header.vue?raw'
import IconSlotDemo from '~/documentation/dropdown/icon-slot.vue'
import iconSlot from '~/documentation/dropdown/icon-slot.vue?raw'
import TextLeftDemo from '~/documentation/dropdown/text-left.vue'
import textLeft from '~/documentation/dropdown/text-left.vue?raw'
import TextRightDemo from '~/documentation/dropdown/text-right.vue'
import textRight from '~/documentation/dropdown/text-right.vue?raw'

definePageMeta({
  title: 'Dropdowns',
  documentation: {
    category: 'NUI Elements',
    components: ['BaseDropdown', 'BaseDropdownItem'],
  },
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
    label: 'Dropdown',
    hideLabel: false,
    to: '#',
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
        <!-- Dropdown button -->
        <DocSection title="Button left" tag="1.0.0">
          <DocComponent label="Dropdown left example">
            <template #demo>
              <div class="flex items-end">
                <ButtonLeftDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(buttonLeft)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(buttonRight)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(compact)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(contextLeft)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(contextRight)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(textLeft)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(textRight)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(iconSlot)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(avatarSlot)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(header)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Dropdown properties -->
        <DocComponentMeta name="BaseDropdown" />
        <DocComponentMeta name="BaseDropdownItem" />

        <div class="py-24" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
