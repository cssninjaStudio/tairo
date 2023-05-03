<script setup lang="ts">
definePageMeta({
  title: 'Settings',
  preview: {
    title: 'Settings',
    description: 'For displaying account settings',
    categories: ['layouts', 'profile'],
    src: '/img/screens/layouts-subpages-settings.png',
    srcDark: '/img/screens/layouts-subpages-settings-dark.png',
    order: 81,
  },
})

const { data, pending, error, refresh } = await useFetch('/api/profile')
</script>

<template>
  <div class="mx-auto w-full max-w-5xl">
    <div v-if="!data"></div>
    <div v-else class="relative w-full">
      <div class="absolute end-0 top-2 z-20">
        <BaseDropdown
          flavor="context"
          label="Dropdown"
          orientation="end"
          condensed
          class="z-20"
          shape="curved"
        >
          <BaseDropdownDivide />
          <BaseDropdownItem
            to="/layouts/profile-edit"
            title="Edit"
            text="Edit profile"
          >
            <template #start>
              <Icon name="ph:pencil-duotone" class="me-2 block h-5 w-5" />
            </template>
          </BaseDropdownItem>
          <BaseDropdownDivide />
          <BaseDropdownItem to="#" title="Security" text="Security settings">
            <template #start>
              <Icon name="ph:lock-duotone" class="me-2 block h-5 w-5" />
            </template>
          </BaseDropdownItem>
          <BaseDropdownItem to="#" title="Billing" text="Manage billing">
            <template #start>
              <Icon name="ph:bank-duotone" class="me-2 block h-5 w-5" />
            </template>
          </BaseDropdownItem>
          <BaseDropdownDivide />
          <BaseDropdownItem to="#" title="Share" text="Share profile">
            <template #start>
              <Icon name="ph:link-duotone" class="me-2 block h-5 w-5" />
            </template>
          </BaseDropdownItem>
        </BaseDropdown>
      </div>
      <div class="flex w-full flex-col">
        <BaseAvatar
          :src="data?.personalInfo.picture"
          :badge-src="data?.personalInfo.badge"
          size="2xl"
          class="mx-auto"
        />
        <div class="mx-auto w-full max-w-md text-center">
          <BaseHeading tag="h2" size="xl" weight="medium" class="mt-4">
            {{ data?.personalInfo.firstName }} {{ data?.personalInfo.lastName }}
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-400 mb-3 mt-1">
            {{ data?.personalInfo.shortBio }}
          </BaseParagraph>
          <div
            class="divide-muted-200 dark:divide-muted-800 flex items-center justify-center divide-x"
          >
            <div class="text-muted-400 flex h-8 items-center gap-1 px-4">
              <Icon name="ph:circles-three-duotone" class="h-5 w-5" />
              <BaseText size="sm"
                >{{ data?.personalInfo.relations }}+ relations</BaseText
              >
            </div>
            <div
              class="text-muted-400 hidden h-8 items-center gap-1 px-4 sm:flex"
            >
              <Icon name="ph:check-circle-duotone" class="h-5 w-5" />
              <BaseText size="sm"
                >{{ data?.personalInfo.projects }} projects</BaseText
              >
            </div>
            <div class="flex h-8 items-center gap-2 px-4">
              <NuxtLink
                v-for="link in data?.personalInfo.socials"
                :key="link.name"
                :to="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="border-muted-200 hover:border-primary-500 dark:border-muted-700 dark:hover:border-primary-500 dark:bg-muted-800 text-muted-400 hover:text-primary-500 flex h-8 w-8 items-center justify-center rounded-full border bg-white transition-colors duration-300"
              >
                <Icon :name="link.icon" class="h-3 w-3" />
                <span class="sr-only">{{ link.name }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div
        class="ltablet:grid-cols-5 mx-auto mt-6 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5"
      >
        <BaseCard
          shape="curved"
          elevated-hover
          class="hover:!border-primary-500 group border-2"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:buildings-duotone"
                class="group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
              />
              <BaseHeading
                tag="h3"
                size="sm"
                weight="semibold"
                class="mt-2 !text-[0.65rem] uppercase"
              >
                Company
              </BaseHeading>
              <BaseText size="xs" class="text-muted-400">
                Manage company
              </BaseText>
            </div>
          </NuxtLink>
        </BaseCard>
        <BaseCard
          shape="curved"
          elevated-hover
          class="hover:!border-primary-500 group border-2"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:users-four-duotone"
                class="group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
              />
              <BaseHeading
                tag="h3"
                size="sm"
                weight="semibold"
                class="mt-2 !text-[0.65rem] uppercase"
              >
                Team
              </BaseHeading>
              <BaseText size="xs" class="text-muted-400">
                Manage team
              </BaseText>
            </div>
          </NuxtLink>
        </BaseCard>
        <BaseCard
          shape="curved"
          elevated-hover
          class="hover:!border-primary-500 group border-2"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:briefcase-duotone"
                class="group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
              />
              <BaseHeading
                tag="h3"
                size="sm"
                weight="semibold"
                class="mt-2 !text-[0.65rem] uppercase"
              >
                Projects
              </BaseHeading>
              <BaseText size="xs" class="text-muted-400">
                Project settings
              </BaseText>
            </div>
          </NuxtLink>
        </BaseCard>
        <BaseCard
          shape="curved"
          elevated-hover
          class="hover:!border-primary-500 group border-2"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:lock-open-duotone"
                class="group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="mt-2 !text-[0.65rem] uppercase"
              >
                Permissions
              </BaseHeading>
              <BaseText size="xs" class="text-muted-400">
                Manage permissions
              </BaseText>
            </div>
          </NuxtLink>
        </BaseCard>
        <BaseCard
          shape="curved"
          elevated-hover
          class="hover:!border-primary-500 group border-2"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:note-duotone"
                class="group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="mt-2 !text-[0.65rem] uppercase"
              >
                Documents
              </BaseHeading>
              <BaseText size="xs" class="text-muted-400">
                Data privacy
              </BaseText>
            </div>
          </NuxtLink>
        </BaseCard>
        <BaseCard
          shape="curved"
          elevated-hover
          class="hover:!border-primary-500 group border-2"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:upload-duotone"
                class="group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="mt-2 !text-[0.65rem] uppercase"
              >
                Upload
              </BaseHeading>
              <BaseText size="xs" class="text-muted-400">
                Upload settings
              </BaseText>
            </div>
          </NuxtLink>
        </BaseCard>
        <BaseCard
          shape="curved"
          elevated-hover
          class="hover:!border-primary-500 group border-2"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:credit-card-duotone"
                class="group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="mt-2 !text-[0.65rem] uppercase"
              >
                Billing
              </BaseHeading>
              <BaseText size="xs" class="text-muted-400">
                Billing and plans
              </BaseText>
            </div>
          </NuxtLink>
        </BaseCard>
        <BaseCard
          shape="curved"
          elevated-hover
          class="hover:!border-primary-500 group border-2"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:chat-circle-duotone"
                class="group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="mt-2 !text-[0.65rem] uppercase"
              >
                Messaging
              </BaseHeading>
              <BaseText size="xs" class="text-muted-400">
                Chat settings
              </BaseText>
            </div>
          </NuxtLink>
        </BaseCard>
        <BaseCard
          shape="curved"
          elevated-hover
          class="hover:!border-primary-500 group border-2"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:shield-check-duotone"
                class="group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="mt-2 !text-[0.65rem] uppercase"
              >
                Security
              </BaseHeading>
              <BaseText size="xs" class="text-muted-400">
                Security settings
              </BaseText>
            </div>
          </NuxtLink>
        </BaseCard>
        <BaseCard
          shape="curved"
          elevated-hover
          class="hover:!border-primary-500 group border-2"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:gear-six-duotone"
                class="group-hover:text-primary-500 text-muted-400 h-8 w-8 transition-all duration-300 group-hover:rotate-6"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="mt-2 !text-[0.65rem] uppercase"
              >
                Preferences
              </BaseHeading>
              <BaseText size="xs" class="text-muted-400">
                General settings
              </BaseText>
            </div>
          </NuxtLink>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
