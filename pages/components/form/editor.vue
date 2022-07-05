<script setup lang="ts">
// @todo: implement CK editor. Got the setup from Vuero, but it seems it doesn't work under Nuxt, even inside a <client-only> tag.

/* import CKE from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {
  editorConfig,
  editorData,
} from '@@/documentation/components/form/editor/data' */

// import { toc } from '@@/documentation/components/form/editor/toc'
// import { } from '@@/documentation/components/form/editor'

definePageMeta({
  title: 'Text Editor',
  documentation: {
    category: 'Forms',
    components: ['CKEditor'],
  },
})

// const CKEditor = CKE.component

const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Elements',
    hideLabel: false,
    to: '/components',
  },
  {
    label: 'Rich text',
    hideLabel: false,
    to: '/form/editor',
  },
]
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- CK editor -->
        <DocSection id="editor-base" title="CK Editor" tag="1.0.0">
          <DocComponent label="CK Editor example">
            <template #demo>
              <div class="flex flex-col">
                <!-- ClientOnly>
                  <CKEditor
                    v-model="editorData"
                    :editor="ClassicEditor"
                    :config="editorConfig"
                  ></CKEditor>
                </ClientOnly -->
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>
      </template>
      <!-- Toc -->
      <template #toc></template>
    </DocLayout>
  </div>
</template>
