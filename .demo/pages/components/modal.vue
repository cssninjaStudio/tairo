<script setup lang="ts">
import footerAlign from '~/documentation/modal/footer-align.md?raw'
import largeTier from '~/documentation/modal/large-tier.md?raw'
import mediumTier from '~/documentation/modal/medium-tier.md?raw'
import smallTier from '~/documentation/modal/small-tier.md?raw'

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
              <DocMarkdown :source="smallTier" class="prose max-w-full" />
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
              <DocMarkdown :source="mediumTier" class="prose max-w-full" />
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
              <DocMarkdown :source="largeTier" class="prose max-w-full" />
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
              <DocMarkdown :source="footerAlign" class="prose max-w-full" />
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
