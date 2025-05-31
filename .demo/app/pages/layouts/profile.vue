<script setup lang="ts">
definePageMeta({
  title: 'Profile',
  preview: {
    title: 'Profile',
    description: 'For displaying a user profile',
    categories: ['layouts', 'profile'],
    src: '/img/screens/layouts-subpages-profile.png',
    srcDark: '/img/screens/layouts-subpages-profile-dark.png',
    order: 75,
  },
})

const { data, pending, error, refresh } = await useFetch('/api/profile')
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <div class="mx-auto w-full">
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
            :classes="{
              root: 'mx-auto',
            }"
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
                  class="border-muted-200 hover:border-primary-500 dark:border-muted-800/80 dark:hover:border-primary-500 dark:bg-muted-800 text-muted-400 hover:text-primary-500 flex size-8 items-center justify-center rounded-full border bg-white transition-colors duration-300"
                >
                  <Icon :name="link.icon" class="size-3" />
                  <span class="sr-only">{{ link.name }}</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 grid grid-cols-12 gap-4">
          <div class="col-span-12 lg:landscape:col-span-8">
            <div class="flex flex-col gap-4">
              <BaseCard rounded="md" class="p-4 md:p-8">
                <!-- Bio -->
                <div class="border-muted-200 dark:border-muted-800/80 border-b pb-8">
                  <div class="mb-4 flex items-center gap-2">
                    <h4
                      class="text-muted-600 dark:text-muted-400 font-sans text-xs font-medium uppercase"
                    >
                      About me
                    </h4>
                  </div>
                  <div class="relative">
                    <BaseParagraph
                      size="sm"
                      class="text-muted-500 dark:text-muted-400"
                    >
                      {{ data?.personalInfo.longBio }}
                    </BaseParagraph>
                  </div>
                </div>
                <!-- Experience -->
                <div class="border-muted-200 dark:border-muted-800/80 border-b py-8">
                  <div class="mb-8 flex items-center gap-2">
                    <h4
                      class="text-muted-600 dark:text-muted-400 font-sans text-xs font-medium uppercase"
                    >
                      Experiences
                    </h4>
                  </div>
                  <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div
                      v-for="item in data.personalInfo.experiences"
                      :key="item.company"
                      class="flex w-full items-center gap-2"
                    >
                      <img
                        :src="item.logo"
                        :alt="item.company"
                        class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 max-w-[50px] rounded-full border bg-white"
                      >
                      <div>
                        <BaseHeading
                          tag="h3"
                          size="sm"
                          weight="medium"
                        >
                          {{ item.company }}
                        </BaseHeading>
                        <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
                          <span>{{ item.period }}</span>
                        </BaseParagraph>
                        <BaseParagraph size="xs" class="text-primary-500">
                          <span>{{ item.position }}</span>
                        </BaseParagraph>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Languages -->
                <div class="border-muted-200 dark:border-muted-800/80 border-b py-8">
                  <div class="mb-8 flex items-center gap-2">
                    <h4
                      class="text-muted-600 dark:text-muted-400 font-sans text-xs font-medium uppercase"
                    >
                      Languages
                    </h4>
                  </div>
                  <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div
                      v-for="item in data.personalInfo.languages"
                      :key="item.name"
                      class="flex w-full items-center gap-2"
                    >
                      <div
                        class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 relative flex size-[50px] shrink-0 items-center justify-center rounded-full border bg-white"
                      >
                        <img
                          :src="item.icon"
                          :alt="item.name"
                          class="size-8 rounded-full"
                        >
                        <BaseProgressCircle
                          :size="68"
                          :thickness="1.5"
                          :model-value="item.level"
                          variant="primary"
                          class="absolute -start-2.5 -top-2.5"
                        />
                      </div>
                      <div>
                        <BaseHeading
                          tag="h3"
                          size="sm"
                          weight="medium"
                        >
                          {{ item.name }}
                        </BaseHeading>
                        <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
                          <span>{{ item.mastery }}</span>
                        </BaseParagraph>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Skills -->
                <div class="py-8">
                  <div class="mb-8 flex items-center gap-2">
                    <h4
                      class="text-muted-600 dark:text-muted-400 font-sans text-xs font-medium uppercase"
                    >
                      Skills
                    </h4>
                  </div>
                  <div class="space-y-8">
                    <div
                      v-for="item in data.personalInfo.skills"
                      :key="item.name"
                      class="flex w-full items-center gap-2"
                    >
                      <div
                        class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 relative flex size-[50px] shrink-0 items-center justify-center rounded-full border bg-white"
                      >
                        <img
                          v-if="'logo' in item"
                          :src="item.logo"
                          :alt="item.name"
                          class="size-8 rounded-full"
                        >
                        <Icon
                          v-else
                          :name="item.icon"
                          class="text-muted-500 dark:text-muted-400 size-6"
                        />
                        <BaseProgressCircle
                          :size="68"
                          :thickness="1.5"
                          :model-value="item.level"
                          variant="primary"
                          class="absolute -start-2.5 -top-2.5"
                        />
                      </div>
                      <div>
                        <BaseHeading
                          tag="h3"
                          size="sm"
                          weight="medium"
                        >
                          {{ item.name }}
                        </BaseHeading>
                        <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
                          <span>{{ item.experience }} years of experience</span>
                        </BaseParagraph>
                      </div>
                      <div class="ms-auto flex items-center gap-2">
                        <BaseTooltip
                          v-for="user in item.related.people"
                          :key="user.name"
                          :content="user.name"
                        >
                          <BaseAvatar
                            :src="'src' in user ? user.src : undefined"
                            :text="user.text"
                            :class="getRandomColor()"
                            size="xs"
                          />
                        </BaseTooltip>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Load more -->
                <div class="py-6">
                  <div class="mx-auto w-full max-w-[240px]">
                    <BaseButton class="w-full">
                      Load More
                    </BaseButton>
                  </div>
                </div>
              </BaseCard>
              <!-- Recommandations -->
              <BaseCard rounded="md" class="p-4 md:p-8">
                <div class="mb-8 flex items-center gap-2">
                  <h4
                    class="text-muted-600 dark:text-muted-400 font-sans text-xs font-medium uppercase"
                  >
                    Recommendations
                  </h4>
                </div>
                <div class="grid gap-4 sm:grid-cols-2">
                  <div
                    v-for="item in data.personalInfo.recommandations"
                    :key="item.name"
                    class="bg-muted-100 dark:bg-muted-700/60 rounded-lg p-5"
                  >
                    <div class="flex flex-col py-4">
                      <BaseAvatar
                        :src="item.src"
                        :text="item.text"
                        size="lg"
                        :badge-src="item.badge"
                        class="mx-auto"
                      />
                      <div class="py-4 text-center">
                        <BaseHeading
                          tag="h3"
                          size="md"
                          weight="medium"
                        >
                          {{ item.name }}
                        </BaseHeading>
                        <BaseText size="xs" class="text-muted-400 dark:text-muted-300 mb-4">
                          <span>{{ item.role }}</span>
                        </BaseText>
                        <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400 max-w-xs mx-auto">
                          <span>{{ item.text }}</span>
                        </BaseParagraph>
                        <div class="mt-4">
                          <BaseText size="xs" class="text-primary-500">
                            <span>{{ item.date }}</span>
                          </BaseText>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </div>
          </div>
          <div class="col-span-12 lg:landscape:col-span-4">
            <div class="flex flex-col gap-4">
              <!-- Notifications -->
              <BaseCard rounded="md" class="p-4 md:p-8">
                <div class="mb-8 flex items-center gap-2">
                  <h4
                    class="text-muted-600 dark:text-muted-400 font-sans text-xs font-medium uppercase"
                  >
                    Notifications
                  </h4>
                  <div class="ms-auto">
                    <BaseSwitchBall v-model="data.notifications" variant="primary" />
                  </div>
                </div>
                <div>
                  <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400">
                    Enable or disable this setting to manage if your network
                    should be notified when you make changes to your profile.
                  </BaseParagraph>
                </div>
              </BaseCard>
              <!-- Tools -->
              <BaseCard rounded="md" class="p-8">
                <div class="mb-8 flex items-center gap-2">
                  <h4
                    class="text-muted-600 dark:text-muted-400 font-sans text-xs font-medium uppercase"
                  >
                    Tools
                  </h4>
                </div>
                <div class="space-y-6">
                  <div
                    v-for="item in data.personalInfo.tools"
                    :key="item.name"
                    class="flex w-full items-center gap-2"
                  >
                    <div
                      class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 relative flex size-[50px] shrink-0 items-center justify-center rounded-full border bg-white"
                    >
                      <img
                        :src="item.logo"
                        :alt="item.name"
                        class="size-8 rounded-full"
                      >
                      <BaseProgressCircle
                        :size="68"
                        :thickness="1.5"
                        :model-value="item.level"
                        variant="primary"
                        class="absolute -start-2.5 -top-2.5"
                      />
                    </div>
                    <div>
                      <BaseHeading
                        tag="h3"
                        size="sm"
                        weight="medium"
                      >
                        {{ item.name }}
                      </BaseHeading>
                      <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
                        <span>{{ item.mastery }}</span>
                      </BaseParagraph>
                    </div>
                  </div>
                </div>
              </BaseCard>
              <!-- Recent Views -->
              <BaseCard rounded="md" class="p-4 md:p-8">
                <div class="mb-8 flex items-center gap-2">
                  <h4
                    class="text-muted-600 dark:text-muted-400 font-sans text-xs font-medium uppercase"
                  >
                    Recent Views
                  </h4>
                </div>
                <div class="space-y-6">
                  <div
                    v-for="item in data.personalInfo.viewed"
                    :key="item.name"
                    class="flex w-full items-center gap-2"
                  >
                    <BaseAvatar
                      :src="item.src"
                      :text="item.text"
                      size="xs"
                      :badge-src="item.badge"
                      :class="getRandomColor()"
                    />
                    <div>
                      <BaseHeading
                        tag="h3"
                        size="sm"
                        weight="medium"
                      >
                        {{ item.name }}
                      </BaseHeading>
                      <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
                        <span>{{ item.role }}</span>
                      </BaseParagraph>
                    </div>
                    <div class="ms-auto">
                      <BaseTooltip content="View Profile">
                        <BaseButton
                          to="#"
                          size="icon-sm"
                          rounded="full"
                        >
                          <Icon name="lucide:arrow-right" class="size-4" />
                        </BaseButton>
                      </BaseTooltip>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
