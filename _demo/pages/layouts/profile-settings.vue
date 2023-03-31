<script setup lang="ts">
definePageMeta({
  title: 'Settings',
})

const { data, pending, error, refresh } = await useFetch('/api/profile')
</script>

<template>
  <div class="w-full max-w-5xl mx-auto">
    <div v-if="!data"></div>
    <div v-else class="w-full relative">
      <div class="absolute top-2 right-0 z-20">
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
              <Icon name="ph:pencil-duotone" class="w-5 h-5 block mr-2" />
            </template>
          </BaseDropdownItem>
          <BaseDropdownDivide />
          <BaseDropdownItem to="#" title="Security" text="Security settings">
            <template #start>
              <Icon name="ph:lock-duotone" class="w-5 h-5 block mr-2" />
            </template>
          </BaseDropdownItem>
          <BaseDropdownItem to="#" title="Billing" text="Manage billing">
            <template #start>
              <Icon name="ph:bank-duotone" class="w-5 h-5 block mr-2" />
            </template>
          </BaseDropdownItem>
          <BaseDropdownDivide />
          <BaseDropdownItem to="#" title="Share" text="Share profile">
            <template #start>
              <Icon name="ph:link-duotone" class="w-5 h-5 block mr-2" />
            </template>
          </BaseDropdownItem>
        </BaseDropdown>
      </div>
      <div class="w-full flex flex-col">
        <BaseAvatar
          :src="data?.personalInfo.picture"
          :badge-src="data?.personalInfo.badge"
          size="2xl"
          class="mx-auto"
        />
        <div class="w-full max-w-md mx-auto text-center">
          <BaseHeading tag="h2" size="xl" weight="medium" class="mt-4">
            {{ data?.personalInfo.firstName }} {{ data?.personalInfo.lastName }}
          </BaseHeading>
          <BaseParagraph size="sm" class="mt-1 mb-3 text-muted-400">
            {{ data?.personalInfo.shortBio }}
          </BaseParagraph>
          <div
            class="flex items-center justify-center divide-x divide-muted-200 dark:divide-muted-800"
          >
            <div class="h-8 flex items-center gap-1 px-4 text-muted-400">
              <Icon name="ph:circles-three-duotone" class="w-5 h-5" />
              <BaseText size="sm"
                >{{ data?.personalInfo.relations }}+ relations</BaseText
              >
            </div>
            <div
              class="h-8 hidden sm:flex items-center gap-1 px-4 text-muted-400"
            >
              <Icon name="ph:check-circle-duotone" class="w-5 h-5" />
              <BaseText size="sm"
                >{{ data?.personalInfo.projects }} projects</BaseText
              >
            </div>
            <div class="h-8 flex items-center gap-2 px-4">
              <NuxtLink
                v-for="link in data?.personalInfo.socials"
                :key="link.name"
                :to="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="h-8 w-8 flex items-center justify-center rounded-full border border-muted-200 hover:border-primary-500 dark:border-muted-700 dark:hover:border-primary-500 bg-white dark:bg-muted-800 text-muted-400 hover:text-primary-500 transition-colors duration-300"
              >
                <Icon :name="link.icon" class="w-3 h-3" />
                <span class="sr-only">{{ link.name }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div
        class="w-full max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 ltablet:grid-cols-5 lg:grid-cols-5 gap-4 mt-6"
      >
        <BaseCard
          shape="curved"
          elevated-hover
          class="group border-2 hover:!border-primary-500"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:buildings-duotone"
                class="group-hover:text-primary-500 group-hover:rotate-6 w-8 h-8 text-muted-400 transition-all duration-300"
              />
              <BaseHeading
                tag="h3"
                size="sm"
                weight="semibold"
                class="uppercase !text-[0.65rem] mt-2"
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
          class="group border-2 hover:!border-primary-500"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:users-four-duotone"
                class="group-hover:text-primary-500 group-hover:rotate-6 w-8 h-8 text-muted-400 transition-all duration-300"
              />
              <BaseHeading
                tag="h3"
                size="sm"
                weight="semibold"
                class="uppercase !text-[0.65rem] mt-2"
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
          class="group border-2 hover:!border-primary-500"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:briefcase-duotone"
                class="group-hover:text-primary-500 group-hover:rotate-6 w-8 h-8 text-muted-400 transition-all duration-300"
              />
              <BaseHeading
                tag="h3"
                size="sm"
                weight="semibold"
                class="uppercase !text-[0.65rem] mt-2"
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
          class="group border-2 hover:!border-primary-500"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:lock-open-duotone"
                class="group-hover:text-primary-500 group-hover:rotate-6 w-8 h-8 text-muted-400 transition-all duration-300"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="uppercase !text-[0.65rem] mt-2"
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
          class="group border-2 hover:!border-primary-500"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:note-duotone"
                class="group-hover:text-primary-500 group-hover:rotate-6 w-8 h-8 text-muted-400 transition-all duration-300"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="uppercase !text-[0.65rem] mt-2"
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
          class="group border-2 hover:!border-primary-500"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:upload-duotone"
                class="group-hover:text-primary-500 group-hover:rotate-6 w-8 h-8 text-muted-400 transition-all duration-300"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="uppercase !text-[0.65rem] mt-2"
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
          class="group border-2 hover:!border-primary-500"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:credit-card-duotone"
                class="group-hover:text-primary-500 group-hover:rotate-6 w-8 h-8 text-muted-400 transition-all duration-300"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="uppercase !text-[0.65rem] mt-2"
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
          class="group border-2 hover:!border-primary-500"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:chat-circle-duotone"
                class="group-hover:text-primary-500 group-hover:rotate-6 w-8 h-8 text-muted-400 transition-all duration-300"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="uppercase !text-[0.65rem] mt-2"
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
          class="group border-2 hover:!border-primary-500"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:shield-check-duotone"
                class="group-hover:text-primary-500 group-hover:rotate-6 w-8 h-8 text-muted-400 transition-all duration-300"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="uppercase !text-[0.65rem] mt-2"
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
          class="group border-2 hover:!border-primary-500"
        >
          <NuxtLink to="#" class="block p-6">
            <div class="text-center">
              <Icon
                name="ph:gear-six-duotone"
                class="group-hover:text-primary-500 group-hover:rotate-6 w-8 h-8 text-muted-400 transition-all duration-300"
              />
              <BaseHeading
                tag="h3"
                size="xs"
                weight="semibold"
                class="uppercase !text-[0.65rem] mt-2"
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
