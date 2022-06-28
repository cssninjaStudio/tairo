<script setup lang="ts">
/* import CKE from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {
  editorConfig,
  editorData,
} from '@@/documentation/elements/form/editor/data' */

// import { toc } from '@@/documentation/elements/form/editor/toc'
// import { } from '@@/documentation/elements/form/editor'

definePageMeta({
  title: 'Text Editor',
})

// const CKEditor = CKE.component

const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'i-lucide-home',
    to: '/',
  },
  {
    label: 'Elements',
    hideLabel: false,
    to: '/elements',
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
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

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
