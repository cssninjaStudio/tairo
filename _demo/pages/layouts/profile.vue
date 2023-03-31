<script setup lang="ts">
definePageMeta({
  title: 'Profile',
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

      <div class="grid grid-cols-12 gap-6 mt-6">
        <div class="col-span-12 sm:col-span-8">
          <div class="flex flex-col gap-6">
            <BaseCard class="p-8">
              <!-- Bio -->
              <div class="pb-8 border-b border-muted-200 dark:border-muted-700">
                <div class="flex items-center gap-2 mb-4">
                  <h4
                    class="font-sans text-xs font-semibold uppercase text-muted-400"
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
              <div class="py-8 border-b border-muted-200 dark:border-muted-700">
                <div class="flex items-center gap-2 mb-8">
                  <h4
                    class="font-sans text-xs font-semibold uppercase text-muted-400"
                  >
                    Experiences
                  </h4>
                </div>
                <div class="grid sm:grid-cols-2 gap-x-4 gap-y-8">
                  <div
                    v-for="item in data.personalInfo.experiences"
                    :key="item.company"
                    class="w-full flex items-center gap-2"
                  >
                    <img
                      :src="item.logo"
                      :alt="item.company"
                      class="max-w-[50px] rounded-full border border-muted-200 dark:border-muted-600 bg-white dark:bg-muted-700"
                    />
                    <div>
                      <BaseHeading tag="h3" size="sm" weight="medium">
                        {{ item.company }}
                      </BaseHeading>
                      <BaseParagraph size="xs" class="text-muted-400">
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
              <div class="py-8 border-b border-muted-200 dark:border-muted-700">
                <div class="flex items-center gap-2 mb-8">
                  <h4
                    class="font-sans text-xs font-semibold uppercase text-muted-400"
                  >
                    Languages
                  </h4>
                </div>
                <div class="grid sm:grid-cols-2 gap-x-4 gap-y-8">
                  <div
                    v-for="item in data.personalInfo.languages"
                    :key="item.name"
                    class="w-full flex items-center gap-2"
                  >
                    <div
                      class="relative flex items-center justify-center h-[50px] w-[50px] shrink-0 rounded-full border border-muted-200 dark:border-muted-600 bg-white dark:bg-muted-700"
                    >
                      <img
                        :src="item.icon"
                        :alt="item.name"
                        class="h-8 w-8 rounded-full"
                      />
                      <BaseProgressCircle
                        :size="68"
                        :thickness="1.5"
                        :value="item.level"
                        class="absolute -top-2.5 -left-2.5 text-primary-500"
                      />
                    </div>
                    <div>
                      <BaseHeading tag="h3" size="sm" weight="medium">
                        {{ item.name }}
                      </BaseHeading>
                      <BaseParagraph size="xs" class="text-muted-400">
                        <span>{{ item.mastery }}</span>
                      </BaseParagraph>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Skills -->
              <div class="py-8">
                <div class="flex items-center gap-2 mb-8">
                  <h4
                    class="font-sans text-xs font-semibold uppercase text-muted-400"
                  >
                    Skills
                  </h4>
                </div>
                <div class="space-y-8">
                  <div
                    v-for="item in data.personalInfo.skills"
                    :key="item.name"
                    class="w-full flex items-center gap-2"
                  >
                    <div
                      class="relative flex items-center justify-center h-[50px] w-[50px] shrink-0 rounded-full border border-muted-200 dark:border-muted-600 bg-white dark:bg-muted-700"
                    >
                      <img
                        v-if="'logo' in item"
                        :src="item.logo"
                        :alt="item.name"
                        class="h-8 w-8 rounded-full"
                      />
                      <Icon
                        v-else
                        :name="item.icon"
                        class="w-6 h-6 text-muted-400"
                      />
                      <BaseProgressCircle
                        :size="68"
                        :thickness="1.5"
                        :value="item.level"
                        class="absolute -top-2.5 -left-2.5 text-primary-500"
                      />
                    </div>
                    <div>
                      <BaseHeading tag="h3" size="sm" weight="medium">
                        {{ item.name }}
                      </BaseHeading>
                      <BaseParagraph size="xs" class="text-muted-400">
                        <span>{{ item.experience }} years of experience</span>
                      </BaseParagraph>
                    </div>
                    <div class="ml-auto flex items-center gap-2">
                      <BaseAvatar
                        v-for="user in item.related.people"
                        :key="user.name"
                        :src="'src' in user ? user.src : undefined"
                        :text="user.text"
                        :class="getRandomColor()"
                        :data-tooltip="user.name"
                        size="xs"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!--Load more-->
              <div class="py-6">
                <div class="w-full max-w-[240px] mx-auto">
                  <BaseButton class="w-full">Load More</BaseButton>
                </div>
              </div>
            </BaseCard>
            <!-- Recommandations -->
            <BaseCard class="p-8">
              <div class="flex items-center gap-2 mb-8">
                <h4
                  class="font-sans text-xs font-semibold uppercase text-muted-400"
                >
                  Recommendations
                </h4>
              </div>
              <div class="grid sm:grid-cols-2 gap-6">
                <div
                  v-for="item in data.personalInfo.recommandations"
                  :key="item.name"
                  class="p-5 rounded-md bg-muted-100 dark:bg-muted-700/60"
                >
                  <div class="flex flex-col py-4">
                    <BaseAvatar
                      :src="item.src"
                      :text="item.text"
                      size="lg"
                      :badge-src="item.badge"
                      class="mx-auto"
                    />
                    <div class="text-center py-4">
                      <BaseHeading tag="h3" size="md" weight="medium">
                        {{ item.name }}
                      </BaseHeading>
                      <BaseText size="xs" class="mb-4 text-muted-400">
                        <span>{{ item.role }}</span>
                      </BaseText>
                      <BaseParagraph size="xs" class="text-muted-400">
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
        <div class="col-span-12 sm:col-span-4">
          <div class="flex flex-col gap-6">
            <!-- Notifications -->
            <BaseCard class="p-8">
              <div class="flex items-center gap-2 mb-8">
                <h4
                  class="font-sans text-xs font-semibold uppercase text-muted-400"
                >
                  Notifications
                </h4>
                <div class="ml-auto">
                  <BaseSwitchBall v-model="data.notifications" />
                </div>
              </div>
              <div>
                <BaseParagraph size="xs" class="text-muted-400">
                  Enable or disable this setting to manage if your network
                  should be notified when you make changes to your profile.
                </BaseParagraph>
              </div>
            </BaseCard>
            <!-- Tools -->
            <BaseCard class="p-8">
              <div class="flex items-center gap-2 mb-8">
                <h4
                  class="font-sans text-xs font-semibold uppercase text-muted-400"
                >
                  Tools
                </h4>
              </div>
              <div class="space-y-6">
                <div
                  v-for="item in data.personalInfo.tools"
                  :key="item.name"
                  class="w-full flex items-center gap-2"
                >
                  <div
                    class="relative flex items-center justify-center h-[50px] w-[50px] shrink-0 rounded-full border border-muted-200 dark:border-muted-600 bg-white dark:bg-muted-700"
                  >
                    <img
                      :src="item.logo"
                      :alt="item.name"
                      class="h-8 w-8 rounded-full"
                    />
                    <BaseProgressCircle
                      :size="68"
                      :thickness="1.5"
                      :value="item.level"
                      class="absolute -top-2.5 -left-2.5 text-primary-500"
                    />
                  </div>
                  <div>
                    <BaseHeading tag="h3" size="sm" weight="medium">
                      {{ item.name }}
                    </BaseHeading>
                    <BaseParagraph size="xs" class="text-muted-400">
                      <span>{{ item.mastery }}</span>
                    </BaseParagraph>
                  </div>
                </div>
              </div>
            </BaseCard>
            <!-- Recent Views -->
            <BaseCard class="p-8">
              <div class="flex items-center gap-2 mb-8">
                <h4
                  class="font-sans text-xs font-semibold uppercase text-muted-400"
                >
                  Recent Views
                </h4>
              </div>
              <div class="space-y-6">
                <div
                  v-for="item in data.personalInfo.viewed"
                  :key="item.name"
                  class="w-full flex items-center gap-2"
                >
                  <BaseAvatar
                    :src="item.src"
                    :text="item.text"
                    size="xs"
                    :badge-src="item.badge"
                    :class="getRandomColor()"
                  />
                  <div>
                    <BaseHeading tag="h3" size="sm" weight="medium">
                      {{ item.name }}
                    </BaseHeading>
                    <BaseParagraph size="xs" class="text-muted-400">
                      <span>{{ item.role }}</span>
                    </BaseParagraph>
                  </div>
                  <div class="ml-auto">
                    <BaseButtonIcon
                      to="#"
                      condensed
                      shape="full"
                      data-tooltip="View Profile"
                    >
                      <Icon name="lucide:arrow-right" class="w-4 h-4" />
                    </BaseButtonIcon>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
