<script setup lang="ts">
import CondensedDemo from '#examples/select/condensed.vue'
import condensed from '#examples/select/condensed.vue?raw'
import CurvedDemo from '#examples/select/curved.vue'
import curved from '#examples/select/curved.vue?raw'
import FloatLabelDemo from '#examples/select/float-label.vue'
import floatLabel from '#examples/select/float-label.vue?raw'
import FullDemo from '#examples/select/full.vue'
import full from '#examples/select/full.vue?raw'
import GroupDemo from '#examples/select/group.vue'
import group from '#examples/select/group.vue?raw'
import IconDemo from '#examples/select/icon.vue'
import icon from '#examples/select/icon.vue?raw'
import InvalidDemo from '#examples/select/invalid.vue'
import invalid from '#examples/select/invalid.vue?raw'
import LoadingDemo from '#examples/select/loading.vue'
import loading from '#examples/select/loading.vue?raw'
import RoundedDemo from '#examples/select/rounded.vue'
import rounded from '#examples/select/rounded.vue?raw'
import StraightDemo from '#examples/select/straight.vue'
import straight from '#examples/select/straight.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}

const model = `
const selectStraight = ref('')
`
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Select straight -->
        <DocSection title="Select straight" tag="1.0.0">
          <DocComponent label="Straight select example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <StraightDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(straight)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select rounded -->
        <DocSection title="Select rounded" tag="1.0.0">
          <DocComponent label="Rounded select example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <RoundedDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(rounded)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select curved -->
        <DocSection title="Select curved" tag="1.0.0">
          <DocComponent label="Curved select example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <CurvedDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(curved)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select full -->
        <DocSection title="Select full" tag="1.0.0">
          <DocComponent label="Full select example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <FullDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(full)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select icon -->
        <DocSection title="Select icon" tag="1.0.0">
          <DocComponent label="Icon select example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <IconDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(icon)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select float label -->
        <DocSection title="Float labels" tag="1.0.0">
          <DocComponent label="Material style labels example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-lg space-y-4">
                  <FloatLabelDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(floatLabel)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select condensed -->
        <DocSection title="Condensed selects" tag="1.0.0">
          <DocComponent label="Smaller selects example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-lg space-y-4">
                  <CondensedDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(condensed)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select group -->
        <DocSection title="Option group" tag="1.0.0">
          <DocComponent label="Option group example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <GroupDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(group)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select loading -->
        <DocSection title="Select loading" tag="1.0.0">
          <DocComponent label="Loading state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <LoadingDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(loading)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select invalid -->
        <DocSection title="Select invalid" tag="1.0.0">
          <DocComponent label="Invalid state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <InvalidDemo />
                </div>
                <!-- State box -->
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(invalid)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select properties -->
        <DocComponentMeta name="BaseSelect" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
