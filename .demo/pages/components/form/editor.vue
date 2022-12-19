<script setup lang="ts">
definePageMeta({
  title: 'Text Editor',
  documentation: {
    category: 'Addons',
    components: ['CKEditor'],
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
        <!-- CK editor -->
        <DocSection title="CK Editor" tag="1.0.0">
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
            <template #code />
          </DocComponent>
        </DocSection>
      </template>
      <!-- Toc -->
      <template #toc />
    </DocLayout>
  </div>
</template>
