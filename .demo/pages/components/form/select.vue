<script setup lang="ts">
import CurvedDemo from '~/documentation/form/select/curved.vue'
import curved from '~/documentation/form/select/curved.vue?raw'
import FullDemo from '~/documentation/form/select/full.vue'
import full from '~/documentation/form/select/full.vue?raw'
import GroupDemo from '~/documentation/form/select/group.vue'
import group from '~/documentation/form/select/group.vue?raw'
import IconDemo from '~/documentation/form/select/icon.vue'
import icon from '~/documentation/form/select/icon.vue?raw'
import CondensedDemo from '~/documentation/form/select/condensed.vue'
import condensed from '~/documentation/form/select/condensed.vue?raw'
import FloatLabelDemo from '~/documentation/form/select/float-label.vue'
import floatLabel from '~/documentation/form/select/float-label.vue?raw'
import InvalidDemo from '~/documentation/form/select/invalid.vue'
import invalid from '~/documentation/form/select/invalid.vue?raw'
import RoundedDemo from '~/documentation/form/select/rounded.vue'
import rounded from '~/documentation/form/select/rounded.vue?raw'
import LoadingDemo from '~/documentation/form/select/loading.vue'
import loading from '~/documentation/form/select/loading.vue?raw'
import StraightDemo from '~/documentation/form/select/straight.vue'
import straight from '~/documentation/form/select/straight.vue?raw'

definePageMeta({
  title: 'Selects',
  documentation: {
    category: 'NUI Forms',
    components: ['BaseSelect'],
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
    label: 'Select',
    hideLabel: false,
    to: '#',
  },
]

const model = `
const selectStraight = ref('')
`
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="demoBreadcrumb" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Select straight -->
        <DocSection title="Select straight" tag="1.0.0">
          <DocComponent label="Straight select example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <StraightDemo />
                </div>
                <!-- State box -->
                <DocState label="V-Model" :state="model" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(straight)"
                class="prose max-w-full"
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
                <!-- State box -->
                <DocState label="V-Model" :state="model" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(rounded)"
                class="prose max-w-full"
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
                <!-- State box -->
                <DocState label="V-Model" :state="model" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(curved)"
                class="prose max-w-full"
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
                <!-- State box -->
                <DocState label="V-Model" :state="model" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(full)"
                class="prose max-w-full"
              />
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
              <DocMarkdown
                :source="wrapVueMarkdown(icon)"
                class="prose max-w-full"
              />
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
              <DocMarkdown
                :source="wrapVueMarkdown(floatLabel)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(condensed)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(group)"
                class="prose max-w-full"
              />
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
              <DocMarkdown
                :source="wrapVueMarkdown(loading)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(invalid)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select properties -->
        <DocComponentMeta name="BaseSelect" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
