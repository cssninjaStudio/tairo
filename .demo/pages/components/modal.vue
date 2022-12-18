<script setup lang="ts">
import {
  footerAlign,
  largeTier,
  mediumTier,
  smallTier,
} from '@@/documentation/modal'
// import { properties } from '@@/documentation/modal/properties'

definePageMeta({
  title: 'Modals',
  documentation: {
    category: 'Interaction',
    components: ['BaseModal'],
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
        <!-- Modal small -->
        <DocSection title="Small tier" tag="1.0.0">
          <DocComponent label="Small modals example">
            <template #demo>
              <ExampleModalSmallTier />
            </template>
            <template #code>
              <DocCode language="html" :code="smallTier" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Modal medium -->
        <DocSection title="Medium tier" tag="1.0.0">
          <DocComponent label="Medium modals example">
            <template #demo>
              <ExampleModalMediumTier />
            </template>
            <template #code>
              <DocCode language="html" :code="mediumTier" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Modal large -->
        <DocSection title="Large tier" tag="1.0.0">
          <DocComponent label="Large modals example">
            <template #demo>
              <ExampleModalLargeTier />
            </template>
            <template #code>
              <DocCode language="html" :code="largeTier" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Modal footer -->
        <DocSection title="Modal footer" tag="1.0.0">
          <DocComponent label="Footer options example">
            <template #demo>
              <ExampleModalFooter />
            </template>
            <template #code>
              <DocCode language="html" :code="footerAlign" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Modal properties -->
        <DocComponentMeta name="BaseModal" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
