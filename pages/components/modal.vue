<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/modal/toc'
import {
  footerAlign,
  largeTier,
  mediumTier,
  smallTier,
} from '@@/documentation/components/modal'
import { properties } from '@@/documentation/components/modal/properties'

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
              <PartialDocModalSmallTier />
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
              <PartialDocModalMediumTier />
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
              <PartialDocModalLargeTier />
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
              <PartialDocModalFooter />
            </template>
            <template #code>
              <DocCode language="html" :code="footerAlign" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Modal properties -->
        <DocProps
          component="BaseModal"
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
