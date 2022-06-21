<script setup lang="ts">
// import { toc } from '@@/documentation/components/table/toc'
// import { } from '@@/documentation/components/table'

definePageMeta({
  title: 'Tables',
})

const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'i-lucide-home',
    hideIcon: false,
    to: '/',
  },
  {
    label: 'Components',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components',
  },
  {
    label: 'Table',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components/table',
  },
]

const team = [
  {
    id: 0,
    picture: '/img/avatars/22.svg',
    name: 'Anna Vrinkof',
    role: 'UI/UX designer',
    expertise: 'UX Design',
    rate: 49,
    status: 'Available',
  },
  {
    id: 1,
    picture: '/img/avatars/3.svg',
    name: 'John Cambell',
    role: 'Sales manager',
    expertise: 'Management',
    rate: 74,
    status: 'Hired',
  },
  {
    id: 2,
    picture: '/img/avatars/9.svg',
    name: 'Beth Delanoe',
    role: 'Product designer',
    expertise: 'Product',
    rate: 43,
    status: 'Available',
  },
  {
    id: 3,
    picture: '/img/avatars/14.svg',
    name: 'Andrew Higgs',
    role: 'Project manager',
    expertise: 'Project',
    rate: 69,
    status: 'New',
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
        <!-- Table -->
        <DocSection id="table-base" title="Table" tag="1.0.0">
          <DocComponent label="Left aligned example">
            <template #demo>
              <div class="w-full">
                <BaseTable>
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
                  <template #body>
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
                  </template>
                </BaseTable>
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Table -->
        <DocSection id="table-media" title="Table" tag="1.0.0">
          <DocComponent label="Left aligned example">
            <template #demo>
              <div class="w-full">
                <BaseTable>
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
                  <template #body>
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
                          <BaseAvatar :picture="member.picture" size="sm" />
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
                  </template>
                </BaseTable>
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
