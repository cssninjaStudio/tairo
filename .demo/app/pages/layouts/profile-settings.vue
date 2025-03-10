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
  <div class="mx-auto w-full max-w-5xl px-4 md:px-6 lg:px-8 pb-20">
    <div v-if="!data" />
    <div v-else class="relative w-full">
      <div class="absolute end-0 top-2 z-20">
        <BaseDropdown
          placement="bottom-end"
          size="md"
          class="z-20"
          rounded="lg"
        >
          <template #button>
            <BaseButton
              size="icon-sm"
              rounded="full"
              class="bg-white text-muted-400 dark:bg-muted-800 dark:text-muted-400"
            >
              <Icon name="lucide:more-horizontal" class="size-4" />
            </BaseButton>
          </template>
          <BaseDropdownItem
            to="/layouts/profile-edit"
            title="Edit"
            text="Edit profile"
          >
            <template #start>
              <Icon name="solar:pen-2-linear" class="me-2 block size-5" />
            </template>
          </BaseDropdownItem>
          <BaseDropdownSeparator />
          <BaseDropdownItem
            to="#"
            title="Security"
            text="Security settings"
          >
            <template #start>
              <Icon name="solar:lock-keyhole-linear" class="me-2 block size-5" />
            </template>
          </BaseDropdownItem>
          <BaseDropdownItem
            to="#"
            title="Billing"
            text="Manage billing"
          >
            <template #start>
              <Icon name="solar:card-linear" class="me-2 block size-5" />
            </template>
          </BaseDropdownItem>
          <BaseDropdownSeparator />
          <BaseDropdownItem
            to="#"
            title="Share"
            text="Share profile"
          >
            <template #start>
              <Icon name="solar:link-circle-linear" class="me-2 block size-5" />
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
          <BaseHeading
            tag="h2"
            size="xl"
            weight="medium"
            class="mt-4"
          >
            {{ data?.personalInfo.firstName }} {{ data?.personalInfo.lastName }}
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400 mb-3 mt-1">
            {{ data?.personalInfo.shortBio }}
          </BaseParagraph>
          <div
            class="divide-muted-200 dark:divide-muted-800 flex items-center justify-center divide-x"
          >
            <div class="text-muted-400 flex h-8 items-center gap-1 px-4">
              <Icon name="solar:widget-6-linear" class="size-5" />
              <BaseText size="sm">
                {{ data?.personalInfo.relations }}+ relations
              </BaseText>
            </div>
            <div
              class="text-muted-400 hidden h-8 items-center gap-1 px-4 sm:flex"
            >
              <Icon name="solar:suitcase-lines-linear" class="size-5" />
              <BaseText size="sm">
                {{ data?.personalInfo.projects }} projects
              </BaseText>
            </div>
            <div class="flex h-8 items-center gap-2 px-4">
              <NuxtLink
                v-for="link in data?.personalInfo.socials"
                :key="link.name"
                :to="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="border-muted-200 hover:border-primary-500 dark:border-muted-700 dark:hover:border-primary-500 dark:bg-muted-800 text-muted-400 hover:text-primary-500 flex size-8 items-center justify-center rounded-full border bg-white transition-colors duration-300"
              >
                <Icon :name="link.icon" class="size-3" />
                <span class="sr-only">{{ link.name }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mx-auto mt-6 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 lg:landscape:grid-cols-5"
      >
        <BaseCard
          rounded="lg"
          class="hover:border-primary-500! group"
        >
          <NuxtLink to="#" class="block py-6 px-4">
            <div class="text-center">
              <Icon
                name="solar:buildings-2-linear"
                class="group-hover:text-primary-500 text-muted-400 size-6 transition-all duration-300 group-hover:rotate-6 mx-auto"
              />
              <BaseHeading
                tag="h3"
                size="sm"
                weight="semibold"
                class="mt-2 text-[0.65rem]! uppercase"
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
          rounded="lg"
          class="hover:border-primary-500! group"
        >
          <NuxtLink to="#" class="block py-6 px-4">
            <div class="text-center">
              <Icon
                name="solar:users-group-rounded-linear"
                class="group-hover:text-primary-500 text-muted-400 size-6 transition-all duration-300 group-hover:rotate-6 mx-auto"
              />
              <BaseHeading
                tag="h3"
                size="sm"
                weight="semibold"
                class="mt-2 text-[0.65rem]! uppercase"
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
          rounded="lg"
          class="hover:border-primary-500! group"
        >
          <NuxtLink to="#" class="block py-6 px-4">
            <div class="text-center">
              <Icon
                name="solar:suitcase-lines-linear"
                class="group-hover:text-primary-500 text-muted-400 size-6 transition-all duration-300 group-hover:rotate-6 mx-auto"
              />
              <BaseHeading
                tag="h3"
                size="sm"
                weight="semibold"
                class="mt-2 text-[0.65rem]! uppercase"
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
          rounded="lg"
          class="hover:border-primary-500! group"
        >
          <NuxtLink to="#" class="block py-6 px-4">
            <div class="text-center">
              <Icon
                name="solar:lock-keyhole-linear"
                class="group-hover:text-primary-500 text-muted-400 size-6 transition-all duration-300 group-hover:rotate-6 mx-auto"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="mt-2 text-[0.65rem]! uppercase"
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
          rounded="lg"
          class="hover:border-primary-500! group"
        >
          <NuxtLink to="#" class="block py-6 px-4">
            <div class="text-center">
              <Icon
                name="solar:file-linear"
                class="group-hover:text-primary-500 text-muted-400 size-6 transition-all duration-300 group-hover:rotate-6 mx-auto"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="mt-2 text-[0.65rem]! uppercase"
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
          rounded="lg"
          class="hover:border-primary-500! group"
        >
          <NuxtLink to="#" class="block py-6 px-4">
            <div class="text-center">
              <Icon
                name="solar:upload-linear"
                class="group-hover:text-primary-500 text-muted-400 size-6 transition-all duration-300 group-hover:rotate-6 mx-auto"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="mt-2 text-[0.65rem]! uppercase"
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
          rounded="lg"
          class="hover:border-primary-500! group"
        >
          <NuxtLink to="#" class="block py-6 px-4">
            <div class="text-center">
              <Icon
                name="solar:card-linear"
                class="group-hover:text-primary-500 text-muted-400 size-6 transition-all duration-300 group-hover:rotate-6 mx-auto"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="mt-2 text-[0.65rem]! uppercase"
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
          rounded="lg"
          class="hover:border-primary-500! group"
        >
          <NuxtLink to="#" class="block py-6 px-4">
            <div class="text-center">
              <Icon
                name="solar:chat-dots-linear"
                class="group-hover:text-primary-500 text-muted-400 size-6 transition-all duration-300 group-hover:rotate-6 mx-auto"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="mt-2 text-[0.65rem]! uppercase"
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
          rounded="lg"
          class="hover:border-primary-500! group"
        >
          <NuxtLink to="#" class="block py-6 px-4">
            <div class="text-center">
              <Icon
                name="solar:shield-check-linear"
                class="group-hover:text-primary-500 text-muted-400 size-6 transition-all duration-300 group-hover:rotate-6 mx-auto"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="mt-2 text-[0.65rem]! uppercase"
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
          rounded="lg"
          class="hover:border-primary-500! group"
        >
          <NuxtLink to="#" class="block py-6 px-4">
            <div class="text-center">
              <Icon
                name="solar:settings-linear"
                class="group-hover:text-primary-500 text-muted-400 size-6 transition-all duration-300 group-hover:rotate-6 mx-auto"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="mt-2 text-[0.65rem]! uppercase"
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
