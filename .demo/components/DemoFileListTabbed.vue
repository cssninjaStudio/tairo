<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'straight' | 'rounded' | 'curved' | 'full'
  }>(),
  {
    shape: 'rounded',
  },
)

const recentFiles = [
  {
    id: 0,
    icon: '/img/icons/files/zip-format.svg',
    name: 'theme.zip',
    type: 'Zipped folder',
  },
  {
    id: 1,
    icon: '/img/icons/files/doc-2.svg',
    name: 'project_outline.doc',
    type: 'MS Word file',
  },
  {
    id: 2,
    icon: '/img/icons/files/pdf.svg',
    name: 'requirements_v3.pdf',
    type: 'PDF file',
  },
  {
    id: 3,
    icon: '/img/icons/files/sheet.svg',
    name: 'project_budget.xsls',
    type: 'MS Excel file',
  },
  {
    id: 4,
    icon: '/img/icons/files/ai.svg',
    name: 'wireframes.ai',
    type: 'Illustrator file',
  },
  {
    id: 5,
    icon: '/img/icons/files/sheet.svg',
    name: 'invoice_recap.xsls',
    type: 'MS Excel file',
  },
]

const savedFiles = [
  {
    id: 6,
    icon: '/img/icons/files/ai.svg',
    name: 'header.ai',
    type: 'Illustrator file',
  },
  {
    id: 7,
    icon: '/img/icons/files/ai.svg',
    name: 'section.ai',
    type: 'Illustrator file',
  },
  {
    id: 8,
    icon: '/img/icons/files/ai.svg',
    name: 'footer.ai',
    type: 'Illustrator file',
  },
  {
    id: 9,
    icon: '/img/icons/files/zip-format.svg',
    name: 'theme_assets.zip',
    type: 'Zipped folder',
  },
  {
    id: 10,
    icon: '/img/icons/files/doc-2.svg',
    name: 'team_structure.doc',
    type: 'MS Word file',
  },
  {
    id: 11,
    icon: '/img/icons/files/doc-2.svg',
    name: 'meeting_notes.doc',
    type: 'MS Word file',
  },
]
</script>

<template>
  <div>
    <DemoTabbedContent
      title="Files"
      :labels="['Recent', 'Saved']"
      :shape="props.shape"
    >
      <template #tab-1>
        <div class="space-y-6">
          <div
            v-for="file in recentFiles"
            :key="file.id"
            class="flex items-center gap-2"
          >
            <img :src="file.icon" class="h-10 w-10" :alt="file.name" />
            <div>
              <BaseHeading
                as="h3"
                size="sm"
                weight="medium"
                lead="tight"
                class="text-muted-800 dark:text-muted-100"
              >
                <span>{{ file.name }}</span>
              </BaseHeading>
              <BaseText size="xs" class="text-muted-400">
                <span>{{ file.type }}</span>
              </BaseText>
            </div>
            <div class="ms-auto">
              <BaseDropdown
                flavor="context"
                label="Dropdown"
                orientation="end"
                condensed
                class="z-20"
                shape="curved"
              >
                <BaseDropdownItem
                  to="#"
                  title="Download"
                  text="Download this file"
                >
                  <template #start>
                    <Icon
                      name="ph:cloud-arrow-down-duotone"
                      class="me-2 block h-5 w-5"
                    />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownItem
                  to="#"
                  title="Upload"
                  text="Upload a new version"
                >
                  <template #start>
                    <Icon
                      name="ph:cloud-arrow-up-duotone"
                      class="me-2 block h-5 w-5"
                    />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownDivide />
                <BaseDropdownItem
                  to="#"
                  title="Permissions"
                  text="Manage permissions"
                >
                  <template #start>
                    <Icon name="ph:lock-duotone" class="me-2 block h-5 w-5" />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownItem to="#" title="Share" text="Share this file">
                  <template #start>
                    <Icon name="ph:share-duotone" class="me-2 block h-5 w-5" />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownDivide />
                <BaseDropdownItem to="#" title="Delete" text="Delete this file">
                  <template #start>
                    <Icon name="ph:trash-duotone" class="me-2 block h-5 w-5" />
                  </template>
                </BaseDropdownItem>
              </BaseDropdown>
            </div>
          </div>
        </div>
      </template>
      <template #tab-2>
        <div class="space-y-6">
          <div
            v-for="file in savedFiles"
            :key="file.id"
            class="flex items-center gap-2"
          >
            <img :src="file.icon" class="h-10 w-10" :alt="file.name" />
            <div>
              <BaseHeading
                as="h3"
                size="sm"
                weight="medium"
                lead="tight"
                class="text-muted-800 dark:text-muted-100"
              >
                <span>{{ file.name }}</span>
              </BaseHeading>
              <BaseText size="xs" class="text-muted-400">
                <span>{{ file.type }}</span>
              </BaseText>
            </div>
            <div class="ms-auto">
              <BaseDropdown
                flavor="context"
                label="Dropdown"
                orientation="end"
                condensed
                shape="curved"
                class="z-20"
              >
                <BaseDropdownItem
                  to="#"
                  title="Download"
                  text="Download this file"
                >
                  <template #start>
                    <Icon
                      name="ph:cloud-arrow-down-duotone"
                      class="me-2 block h-5 w-5"
                    />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownItem
                  to="#"
                  title="Upload"
                  text="Upload a new version"
                >
                  <template #start>
                    <Icon
                      name="ph:cloud-arrow-up-duotone"
                      class="me-2 block h-5 w-5"
                    />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownDivide />
                <BaseDropdownItem
                  to="#"
                  title="Permissions"
                  text="Manage permissions"
                >
                  <template #start>
                    <Icon name="ph:lock-duotone" class="me-2 block h-5 w-5" />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownItem to="#" title="Share" text="Share this file">
                  <template #start>
                    <Icon name="ph:share-duotone" class="me-2 block h-5 w-5" />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownDivide />
                <BaseDropdownItem to="#" title="Delete" text="Delete this file">
                  <template #start>
                    <Icon name="ph:trash-duotone" class="me-2 block h-5 w-5" />
                  </template>
                </BaseDropdownItem>
              </BaseDropdown>
            </div>
          </div>
        </div>
      </template>
    </DemoTabbedContent>
  </div>
</template>
