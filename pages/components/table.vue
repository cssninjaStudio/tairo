<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/table/toc'
import {
  curved,
  mediaCurved,
  mediaRounded,
  mediaStraight,
  rounded,
  straight,
} from '@@/documentation/components/table'
import {
  cellProperties,
  headingProperties,
  properties,
  rowProperties,
} from '@@/documentation/components/table/properties'
import { team } from '@@/documentation/components/table/data'

definePageMeta({
  title: 'Tables',
})
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Straight table -->
        <DocSection id="table-straight" title="Straight shape" tag="1.0.0">
          <DocComponent label="Straight table example">
            <template #demo>
              <div class="w-full">
                <BaseTable shape="straight">
                  <template #header>
                    <BaseTableHeading uppercase class="p-4">
                      <div class="flex items-center">
                        <BaseFormCheckbox
                          name="table-1-main"
                          shape="straight"
                          class="text-primary-500"
                        />
                      </div>
                    </BaseTableHeading>
                    <BaseTableHeading uppercase>Collaborator</BaseTableHeading>
                    <BaseTableHeading uppercase>Expertise</BaseTableHeading>
                    <BaseTableHeading uppercase>Rate</BaseTableHeading>
                    <BaseTableHeading uppercase>Status</BaseTableHeading>
                    <BaseTableHeading uppercase class="p-4">
                      <span class="sr-only">View</span>
                    </BaseTableHeading>
                  </template>

                  <BaseTableRow v-for="member in team" :key="member.id">
                    <BaseTableCell class="p-4">
                      <div class="flex items-center">
                        <BaseFormCheckbox
                          :name="`member-checkbox-${member.id}`"
                          shape="straight"
                          class="text-primary-500"
                        />
                      </div>
                    </BaseTableCell>
                    <BaseTableCell>
                      {{ member.name }}
                    </BaseTableCell>
                    <BaseTableCell light>
                      {{ member.expertise }}
                    </BaseTableCell>
                    <BaseTableCell>${{ member.rate }}/hour</BaseTableCell>
                    <BaseTableCell>
                      <BaseTag
                        v-if="member.status === 'Available'"
                        color="success"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                      <BaseTag
                        v-else-if="member.status === 'New'"
                        color="info"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                      <BaseTag
                        v-else-if="member.status === 'Hired'"
                        color="warning"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                    </BaseTableCell>
                    <BaseTableCell>
                      <a
                        href="#"
                        class="text-violet-500 dark:text-violet-400 hover:opacity-75 transition-opacity duration-300"
                      >
                        View
                      </a>
                    </BaseTableCell>
                  </BaseTableRow>
                </BaseTable>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="straight" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Rounded table -->
        <DocSection id="table-rounded" title="Rounded shape" tag="1.0.0">
          <DocComponent label="Rounded table example">
            <template #demo>
              <div class="w-full">
                <BaseTable shape="rounded">
                  <template #header>
                    <BaseTableHeading uppercase class="p-4">
                      <div class="flex items-center">
                        <BaseFormCheckbox
                          name="table-1-main"
                          shape="rounded"
                          class="text-primary-500"
                        />
                      </div>
                    </BaseTableHeading>
                    <BaseTableHeading uppercase>Collaborator</BaseTableHeading>
                    <BaseTableHeading uppercase>Expertise</BaseTableHeading>
                    <BaseTableHeading uppercase>Rate</BaseTableHeading>
                    <BaseTableHeading uppercase>Status</BaseTableHeading>
                    <BaseTableHeading uppercase class="p-4">
                      <span class="sr-only">View</span>
                    </BaseTableHeading>
                  </template>

                  <BaseTableRow v-for="member in team" :key="member.id">
                    <BaseTableCell class="p-4">
                      <div class="flex items-center">
                        <BaseFormCheckbox
                          :name="`member-checkbox-${member.id}`"
                          shape="rounded"
                          class="text-primary-500"
                        />
                      </div>
                    </BaseTableCell>
                    <BaseTableCell>
                      {{ member.name }}
                    </BaseTableCell>
                    <BaseTableCell light>
                      {{ member.expertise }}
                    </BaseTableCell>
                    <BaseTableCell>${{ member.rate }}/hour</BaseTableCell>
                    <BaseTableCell>
                      <BaseTag
                        v-if="member.status === 'Available'"
                        color="success"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                      <BaseTag
                        v-else-if="member.status === 'New'"
                        color="info"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                      <BaseTag
                        v-else-if="member.status === 'Hired'"
                        color="warning"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                    </BaseTableCell>
                    <BaseTableCell>
                      <a
                        href="#"
                        class="text-violet-500 dark:text-violet-400 hover:opacity-75 transition-opacity duration-300"
                      >
                        View
                      </a>
                    </BaseTableCell>
                  </BaseTableRow>
                </BaseTable>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="rounded" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Curved table -->
        <DocSection id="table-curved" title="Curved shape" tag="1.0.0">
          <DocComponent label="Curved table example">
            <template #demo>
              <div class="w-full">
                <BaseTable shape="curved">
                  <template #header>
                    <BaseTableHeading uppercase class="p-4">
                      <div class="flex items-center">
                        <BaseFormCheckbox
                          name="table-1-main"
                          shape="curved"
                          class="text-primary-500"
                        />
                      </div>
                    </BaseTableHeading>
                    <BaseTableHeading uppercase>Collaborator</BaseTableHeading>
                    <BaseTableHeading uppercase>Expertise</BaseTableHeading>
                    <BaseTableHeading uppercase>Rate</BaseTableHeading>
                    <BaseTableHeading uppercase>Status</BaseTableHeading>
                    <BaseTableHeading uppercase class="p-4">
                      <span class="sr-only">View</span>
                    </BaseTableHeading>
                  </template>

                  <BaseTableRow v-for="member in team" :key="member.id">
                    <BaseTableCell class="p-4">
                      <div class="flex items-center">
                        <BaseFormCheckbox
                          :name="`member-checkbox-${member.id}`"
                          shape="curved"
                          class="text-primary-500"
                        />
                      </div>
                    </BaseTableCell>
                    <BaseTableCell>
                      {{ member.name }}
                    </BaseTableCell>
                    <BaseTableCell light>
                      {{ member.expertise }}
                    </BaseTableCell>
                    <BaseTableCell>${{ member.rate }}/hour</BaseTableCell>
                    <BaseTableCell>
                      <BaseTag
                        v-if="member.status === 'Available'"
                        color="success"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                      <BaseTag
                        v-else-if="member.status === 'New'"
                        color="info"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                      <BaseTag
                        v-else-if="member.status === 'Hired'"
                        color="warning"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                    </BaseTableCell>
                    <BaseTableCell>
                      <a
                        href="#"
                        class="text-violet-500 dark:text-violet-400 hover:opacity-75 transition-opacity duration-300"
                      >
                        View
                      </a>
                    </BaseTableCell>
                  </BaseTableRow>
                </BaseTable>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="curved" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Straight media table -->
        <DocSection
          id="table-media-straight"
          title="Straight media"
          tag="1.0.0"
        >
          <DocComponent label="Media straight table example">
            <template #demo>
              <div class="w-full">
                <BaseTable shape="straight">
                  <template #header>
                    <BaseTableHeading uppercase class="p-4">
                      <div class="flex items-center">
                        <BaseFormCheckbox
                          name="table-1-main"
                          shape="straight"
                          class="text-primary-500"
                        />
                      </div>
                    </BaseTableHeading>
                    <BaseTableHeading uppercase>Collaborator</BaseTableHeading>
                    <BaseTableHeading uppercase>Expertise</BaseTableHeading>
                    <BaseTableHeading uppercase>Rate</BaseTableHeading>
                    <BaseTableHeading uppercase>Status</BaseTableHeading>
                    <BaseTableHeading uppercase class="p-4">
                      <span class="sr-only">View</span>
                    </BaseTableHeading>
                  </template>

                  <BaseTableRow v-for="member in team" :key="member.id">
                    <BaseTableCell class="p-4">
                      <div class="flex items-center">
                        <BaseFormCheckbox
                          :name="`member-checkbox-${member.id}`"
                          shape="straight"
                          class="text-primary-500"
                        />
                      </div>
                    </BaseTableCell>
                    <BaseTableCell>
                      <div class="flex items-center">
                        <BaseAvatar :src="member.src" />
                        <div class="ml-3 leading-none">
                          <h4 class="font-main text-sm font-semibold">
                            {{ member.name }}
                          </h4>
                          <p class="font-sub text-xs text-slate-400">
                            {{ member.role }}
                          </p>
                        </div>
                      </div>
                    </BaseTableCell>
                    <BaseTableCell light>
                      {{ member.expertise }}
                    </BaseTableCell>
                    <BaseTableCell>${{ member.rate }}/hour</BaseTableCell>
                    <BaseTableCell>
                      <BaseTag
                        v-if="member.status === 'Available'"
                        color="success"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                      <BaseTag
                        v-else-if="member.status === 'New'"
                        color="info"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                      <BaseTag
                        v-else-if="member.status === 'Hired'"
                        color="warning"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                    </BaseTableCell>
                    <BaseTableCell>
                      <a
                        href="#"
                        class="text-violet-500 dark:text-violet-400 hover:opacity-75 transition-opacity duration-300"
                      >
                        View
                      </a>
                    </BaseTableCell>
                  </BaseTableRow>
                </BaseTable>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="mediaStraight" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Rounded media table -->
        <DocSection id="table-media-rounded" title="Rounded media" tag="1.0.0">
          <DocComponent label="Media rounded table example">
            <template #demo>
              <div class="w-full">
                <BaseTable shape="rounded">
                  <template #header>
                    <BaseTableHeading uppercase class="p-4">
                      <div class="flex items-center">
                        <BaseFormCheckbox
                          name="table-1-main"
                          shape="rounded"
                          class="text-primary-500"
                        />
                      </div>
                    </BaseTableHeading>
                    <BaseTableHeading uppercase>Collaborator</BaseTableHeading>
                    <BaseTableHeading uppercase>Expertise</BaseTableHeading>
                    <BaseTableHeading uppercase>Rate</BaseTableHeading>
                    <BaseTableHeading uppercase>Status</BaseTableHeading>
                    <BaseTableHeading uppercase class="p-4">
                      <span class="sr-only">View</span>
                    </BaseTableHeading>
                  </template>

                  <BaseTableRow v-for="member in team" :key="member.id">
                    <BaseTableCell class="p-4">
                      <div class="flex items-center">
                        <BaseFormCheckbox
                          :name="`member-checkbox-${member.id}`"
                          shape="rounded"
                          class="text-primary-500"
                        />
                      </div>
                    </BaseTableCell>
                    <BaseTableCell>
                      <div class="flex items-center">
                        <BaseAvatar :src="member.src" />
                        <div class="ml-3 leading-none">
                          <h4 class="font-main text-sm font-semibold">
                            {{ member.name }}
                          </h4>
                          <p class="font-sub text-xs text-slate-400">
                            {{ member.role }}
                          </p>
                        </div>
                      </div>
                    </BaseTableCell>
                    <BaseTableCell light>
                      {{ member.expertise }}
                    </BaseTableCell>
                    <BaseTableCell>${{ member.rate }}/hour</BaseTableCell>
                    <BaseTableCell>
                      <BaseTag
                        v-if="member.status === 'Available'"
                        color="success"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                      <BaseTag
                        v-else-if="member.status === 'New'"
                        color="info"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                      <BaseTag
                        v-else-if="member.status === 'Hired'"
                        color="warning"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                    </BaseTableCell>
                    <BaseTableCell>
                      <a
                        href="#"
                        class="text-violet-500 dark:text-violet-400 hover:opacity-75 transition-opacity duration-300"
                      >
                        View
                      </a>
                    </BaseTableCell>
                  </BaseTableRow>
                </BaseTable>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="mediaRounded" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Curved media table -->
        <DocSection id="table-media-curved" title="Curved media" tag="1.0.0">
          <DocComponent label="Media curved table example">
            <template #demo>
              <div class="w-full">
                <BaseTable shape="curved">
                  <template #header>
                    <BaseTableHeading uppercase class="p-4">
                      <div class="flex items-center">
                        <BaseFormCheckbox
                          name="table-1-main"
                          shape="curved"
                          class="text-primary-500"
                        />
                      </div>
                    </BaseTableHeading>
                    <BaseTableHeading uppercase>Collaborator</BaseTableHeading>
                    <BaseTableHeading uppercase>Expertise</BaseTableHeading>
                    <BaseTableHeading uppercase>Rate</BaseTableHeading>
                    <BaseTableHeading uppercase>Status</BaseTableHeading>
                    <BaseTableHeading uppercase class="p-4">
                      <span class="sr-only">View</span>
                    </BaseTableHeading>
                  </template>

                  <BaseTableRow v-for="member in team" :key="member.id">
                    <BaseTableCell class="p-4">
                      <div class="flex items-center">
                        <BaseFormCheckbox
                          :name="`member-checkbox-${member.id}`"
                          shape="curved"
                          class="text-primary-500"
                        />
                      </div>
                    </BaseTableCell>
                    <BaseTableCell>
                      <div class="flex items-center">
                        <BaseAvatar :src="member.src" />
                        <div class="ml-3 leading-none">
                          <h4 class="font-main text-sm font-semibold">
                            {{ member.name }}
                          </h4>
                          <p class="font-sub text-xs text-slate-400">
                            {{ member.role }}
                          </p>
                        </div>
                      </div>
                    </BaseTableCell>
                    <BaseTableCell light>
                      {{ member.expertise }}
                    </BaseTableCell>
                    <BaseTableCell>${{ member.rate }}/hour</BaseTableCell>
                    <BaseTableCell>
                      <BaseTag
                        v-if="member.status === 'Available'"
                        color="success"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                      <BaseTag
                        v-else-if="member.status === 'New'"
                        color="info"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                      <BaseTag
                        v-else-if="member.status === 'Hired'"
                        color="warning"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                    </BaseTableCell>
                    <BaseTableCell>
                      <a
                        href="#"
                        class="text-violet-500 dark:text-violet-400 hover:opacity-75 transition-opacity duration-300"
                      >
                        View
                      </a>
                    </BaseTableCell>
                  </BaseTableRow>
                </BaseTable>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="mediaCurved" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Table props -->
        <DocProps
          id="table-props"
          component="Table"
          :properties="properties.props"
          :slots="properties.slots"
        />

        <!-- Row props -->
        <DocProps
          id="table-row-props"
          component="Row"
          :properties="rowProperties.props"
          :slots="rowProperties.slots"
        />

        <!-- Heading props -->
        <DocProps
          id="table-heading-props"
          component="Heading"
          :properties="headingProperties.props"
          :slots="headingProperties.slots"
        />

        <!-- Cell props -->
        <DocProps
          id="cell-props"
          component="Cell"
          :properties="cellProperties.props"
          :slots="cellProperties.slots"
        />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
