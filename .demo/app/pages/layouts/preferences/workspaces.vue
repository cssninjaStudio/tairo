<script setup lang="ts">
definePageMeta({
  title: 'Workspaces',
  preview: {
    title: 'Preferences - Workspaces',
    description: 'For account management',
    categories: ['layouts', 'settings'],
    src: '/img/screens/layouts-preferences-workspaces.png',
    srcDark: '/img/screens/layouts-preferences-workspaces-dark.png',
    order: 85,
    new: true,
  },
})

const selectedWorkspace = ref(0)

const workspaces = [
  {
    name: 'Nitro Inc.',
    img: '/img/icons/logos/nitro.svg',
    members: [
      {
        name: 'Melany Smith',
        email: 'melany@tairo.io',
        img: '/img/avatars/25.svg',
      },
      {
        name: 'Clark Robertson',
        email: 'clark@tairo.io',
        img: '/img/avatars/3.svg',
      },
      {
        name: 'Hermann Mayer',
        email: 'hermann@tairo.io',
        img: '/img/avatars/16.svg',
      },
      {
        name: 'Josh Stevens',
        email: 'josh@tairo.io',
        img: '/img/avatars/11.svg',
      },
      {
        name: 'Kendra Wilson',
        email: 'kendra@tairo.io',
        img: '/img/avatars/10.svg',
      },
    ],
  },
  {
    name: 'Okano Llc.',
    img: '/img/icons/logos/okano.svg',
    members: [],
  },
]
</script>

<template>
  <div class="mt-8 space-y-8">
    <BaseCard rounded="lg" class="overflow-hidden">
      <div class="px-4 py-5 sm:p-6">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="space-y-1">
            <BaseHeading
              as="h4"
              size="md"
              weight="medium"
              class="text-muted-900 text-base font-bold dark:text-white"
            >
              Workspaces you are on
            </BaseHeading>
            <BaseParagraph
              size="sm"
              class="text-muted-500 dark:text-muted-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipis.
            </BaseParagraph>
          </div>

          <div class="mt-4 sm:mt-0">
            <BaseButton rounded="md" class="font-medium">
              <Icon name="lucide:plus" class="size-4" />
              <span>New Workspace</span>
            </BaseButton>
          </div>
        </div>

        <div class="mt-8 flow-root">
          <div class="divide-muted-100 dark:divide-muted-800/80 -my-5 divide-y">
            <div
              v-for="(workspace, index) in workspaces"
              :key="workspace.name"
              class="cursor-pointer p-4 transition-colors duration-300"
              :class="selectedWorkspace === index ? '' : ''"
              role="button"
              tabindex="0"
              @click="selectedWorkspace = index"
            >
              <div class="flex items-center gap-4">
                <div class="relative">
                  <BaseAvatar :src="workspace.img" size="sm" />
                </div>
                <div>
                  <BaseParagraph
                    size="sm"
                    weight="medium"
                    class="text-muted-900 dark:text-muted-100"
                  >
                    {{ workspace.name }}
                  </BaseParagraph>
                  <BaseParagraph
                    size="sm"
                    class="text-muted-500 dark:text-muted-400"
                  >
                    {{ workspace.members.length }} members
                  </BaseParagraph>
                </div>
                <div v-if="selectedWorkspace === index">
                  <BaseTag
                    variant="primary"
                    size="sm"
                    rounded="full"
                  >
                    Selected
                  </BaseTag>
                </div>

                <div class="ms-auto flex items-center gap-2">
                  <BaseButton
                    v-if="selectedWorkspace === index"
                    class="text-primary-500! font-medium"
                    rounded="md"
                    size="sm"
                  >
                    Edit
                  </BaseButton>
                  <BaseButton
                    rounded="md"
                    size="sm"
                    variant="muted"
                  >
                    Leave
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>

    <BaseCard rounded="lg" class="overflow-hidden">
      <div class="px-4 py-5 sm:p-6">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="space-y-1">
            <BaseHeading
              as="h4"
              size="md"
              weight="medium"
              class="text-muted-900 text-base dark:text-white"
            >
              Workspace members
            </BaseHeading>
            <BaseParagraph
              size="sm"
              class="text-muted-500 dark:text-muted-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipis.
            </BaseParagraph>
          </div>

          <div class="mt-4 sm:mt-0">
            <BaseButton rounded="md" class="font-medium">
              <Icon name="lucide:plus" class="size-4" />
              <span>New Member</span>
            </BaseButton>
          </div>
        </div>

        <div class="mt-8 flow-root">
          <div v-if="workspaces[selectedWorkspace]?.members.length === 0">
            <BasePlaceholderPage
              title="Nothing to show"
              subtitle="There are no members to show in this workspace. Start inviting people to join."
            >
              <div class="mt-4 flex justify-center gap-2">
                <BaseButton
                  rounded="md"
                  class="font-medium"
                >
                  <Icon name="lucide:plus" class="size-4" />
                  <span>Invite New Member</span>
                </BaseButton>
              </div>
            </BasePlaceholderPage>
          </div>
          <div v-else class="divide-muted-100 dark:divide-muted-800/80 -my-5 divide-y">
            <div
              v-for="(member, index) in workspaces[selectedWorkspace]?.members"
              :key="member.name"
              class="cursor-pointer p-4 transition-colors duration-300"
              :class="selectedWorkspace === index ? '' : ''"
              role="button"
              tabindex="0"
              @click="selectedWorkspace = index"
            >
              <div class="flex items-center gap-4">
                <div class="relative">
                  <BaseAvatar :src="member.img" size="sm" />
                </div>
                <div>
                  <BaseParagraph
                    size="sm"
                    weight="medium"
                    class="text-muted-900 dark:text-muted-100"
                  >
                    {{ member.name }}
                  </BaseParagraph>
                  <BaseParagraph
                    size="sm"
                    class="text-muted-500 dark:text-muted-400"
                  >
                    {{ member.email }}
                  </BaseParagraph>
                </div>

                <div class="ms-auto flex items-center gap-2">
                  <BaseButton
                    class="text-primary-500! font-medium"
                    rounded="md"
                    size="sm"
                  >
                    Edit
                  </BaseButton>
                  <BaseButton
                    rounded="md"
                    size="sm"
                    variant="muted"
                  >
                    Remove
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
