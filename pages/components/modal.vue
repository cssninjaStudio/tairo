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
        <DocSection id="modal-small" title="Small tier" tag="1.0.0">
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
        <DocSection id="modal-medium" title="Medium tier" tag="1.0.0">
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
        <DocSection id="modal-large" title="Large tier" tag="1.0.0">
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
        <DocSection id="modal-footer" title="Modal footer" tag="1.0.0">
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
          id="modal-props"
          component="Modal"
          :properties="properties.props"
          :slots="properties.slots"
        />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
