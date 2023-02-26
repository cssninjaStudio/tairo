<script setup lang="ts">
definePageMeta({
  title: 'Influencer',
})

const companies = [
  {
    name: 'Airbnb',
    logo: 'logos:airbnb-icon',
    title: 'UI / UX Designer',
    description:
      'Airbnb is a company that enables people to list, discover, and book accommodations around the world.',
    tags: ['Full Time', 'UX design', 'Senior level'],
    stats: [
      {
        label: 'Contracts',
        value: 22,
      },
      {
        label: 'Publications',
        value: 49,
      },
      {
        label: 'Income',
        value: 43.2,
      },
    ],
    followers: [
      {
        tooltip: 'Clark Smith',
        src: '/img/avatars/3.svg',
      },
      {
        tooltip: 'Maya Rosselini',
        src: '/img/avatars/2.svg',
      },
      {
        tooltip: 'Clarissa Miller',
        src: '/img/avatars/5.svg',
      },
      {
        tooltip: 'Jane Doe',
        src: '/img/avatars/4.svg',
      },
    ],
  },
  {
    name: 'Slack',
    logo: 'logos:slack-icon',
    title: 'Product Designer',
    description:
      'Slack is a cloud-based set of team collaboration tools and services.',
    tags: ['Full Time', 'Product design', 'Marketing'],
    stats: [
      {
        label: 'Contracts',
        value: 22,
      },
      {
        label: 'Publications',
        value: 49,
      },
      {
        label: 'Income',
        value: 43.2,
      },
    ],
    followers: [
      {
        tooltip: 'Hermann Mayer',
        src: '/img/avatars/16.svg',
      },
      {
        tooltip: 'Jen Rossi',
        src: '/img/avatars/10.svg',
      },
    ],
  },
  {
    name: 'Gitlab',
    logo: 'logos:gitlab',
    title: 'Project Manager',
    description:
      'GitLab is a web-based DevOps lifecycle tool that provides a Git-repository manager.',
    tags: ['Full Time', 'Product management'],
    stats: [
      {
        label: 'Contracts',
        value: 22,
      },
      {
        label: 'Publications',
        value: 49,
      },
      {
        label: 'Income',
        value: 43.2,
      },
    ],
    followers: [
      {
        tooltip: 'Alex Wielder',
        src: '/img/avatars/11.svg',
      },
      {
        tooltip: 'Rob Howards',
        src: '/img/avatars/18.svg',
      },
    ],
  },
  {
    name: 'Google',
    logo: 'logos:google-icon',
    title: 'Product Owner',
    description:
      'Google is an American multinational technology company that specializes in Internet-related services and products.',
    tags: ['Full Time', 'Scrum master', 'Management'],
    stats: [
      {
        label: 'Contracts',
        value: 22,
      },
      {
        label: 'Publications',
        value: 49,
      },
      {
        label: 'Income',
        value: 43.2,
      },
    ],
    followers: [
      {
        tooltip: 'Clarence Bodicker',
        src: '/img/avatars/13.svg',
      },
      {
        tooltip: 'Andrew Holmes',
        src: '/img/avatars/14.svg',
      },
    ],
  },
  {
    name: 'Atlassian',
    logo: 'logos:atlassian',
    title: 'Fullstack Developer',
    description:
      'Atlassian is a company that provides enterprise software for teams. It develops products for software developers, project managers, and content management.',
    tags: ['Full Time', 'Fullstack', 'Engineering'],
    stats: [
      {
        label: 'Contracts',
        value: 22,
      },
      {
        label: 'Publications',
        value: 49,
      },
      {
        label: 'Income',
        value: 43.2,
      },
    ],
    followers: [
      {
        tooltip: 'Sam Brettman',
        src: '/img/avatars/15.svg',
      },
      {
        tooltip: 'Elina Wheeler',
        src: '/img/avatars/9.svg',
      },
    ],
  },
  {
    name: 'Dribbble',
    logo: 'logos:dribbble-icon',
    title: 'Community Manager',
    description:
      'Dribbble is a community of designers sharing screenshots of their work, process, and projects.',
    tags: ['Full Time', 'Manager', 'Community'],
    stats: [
      {
        label: 'Contracts',
        value: 22,
      },
      {
        label: 'Publications',
        value: 49,
      },
      {
        label: 'Income',
        value: 43.2,
      },
    ],
    followers: [
      {
        tooltip: 'John Baxter',
        src: '/img/avatars/6.svg',
      },
      {
        tooltip: 'Maya Rosselini',
        src: '/img/avatars/2.svg',
      },
    ],
  },
  {
    name: 'Figma',
    logo: 'logos:figma',
    title: 'Business Developer',
    description:
      'Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.',
    tags: ['Full Time', 'Business', 'Sales'],
    stats: [
      {
        label: 'Contracts',
        value: 22,
      },
      {
        label: 'Publications',
        value: 49,
      },
      {
        label: 'Income',
        value: 43.2,
      },
    ],
    followers: [
      {
        tooltip: 'Edward Rowell',
        src: '/img/avatars/8.svg',
      },
      {
        tooltip: 'Nick Kowalski',
        src: '/img/avatars/17.svg',
      },
    ],
  },
  {
    name: 'Airtable',
    logo: 'logos:airtable',
    title: 'Frontend Developer',
    description:
      'Airtable is a cloud-based spreadsheet-database hybrid that allows users to create and manage tables and data through a web browser.',
    tags: ['Full Time', 'Frontend', 'Sales'],
    stats: [
      {
        label: 'Contracts',
        value: 22,
      },
      {
        label: 'Publications',
        value: 49,
      },
      {
        label: 'Income',
        value: 43.2,
      },
    ],
    followers: [
      {
        tooltip: 'Edward Rowell',
        src: '/img/avatars/8.svg',
      },
      {
        tooltip: 'Nick Kowalski',
        src: '/img/avatars/17.svg',
      },
      {
        tooltip: 'John Baxter',
        src: '/img/avatars/6.svg',
      },
      {
        tooltip: 'Maya Rosselini',
        src: '/img/avatars/2.svg',
      },
    ],
  },
]

const activeTab = ref('tab-1')
</script>

<template>
  <div>
    <!-- Header bg -->
    <div
      class="absolute top-0 left-0 w-full h-[590px] ltablet:h-[410px] lg:h-[410px] bg-white dark:bg-muted-800"
    ></div>
    <!-- Header -->
    <div
      class="relative w-full h-[460px] ltablet:h-64 lg:h-64 flex flex-col ltablet:flex-row lg:flex-row"
    >
      <div
        class="relative z-10 w-full flex flex-col ltablet:flex-row lg:flex-row gap-6"
      >
        <BaseAvatar
          src="/img/avatars/5.svg"
          badgeSrc="/img/icons/flags/united-states-of-america.svg"
          size="3xl"
          alt="avatar"
          class="mx-auto ltablet:mx-0 lg:mx-0"
        />
        <div class="text-center ltablet:text-left lg:text-left">
          <BaseHeading
            as="h2"
            size="xl"
            weight="semibold"
            class="flex items-center justify-center ltablet:justify-start lg:justify-start gap-2"
          >
            <span class="text-muted-800 dark:text-white">Sweet_Mango12</span>
            <Icon name="uiw:star-on" class="w-4 h-4 text-yellow-400" />
          </BaseHeading>
          <span class="block mb-4 font-sans text-base text-muted-400">
            Clarissa Miller
          </span>
          <div class="flex items-center gap-x-6 mb-6">
            <div
              class="flex flex-col ltablet:flex-row lg:flex-row flex-1 ltablet:flex-auto lg:flex-auto gap-x-2 font-sans"
            >
              <span class="font-semibold text-muted-800 dark:text-muted-100">
                1512
              </span>
              <span
                class="text-muted-400 text-xs sm:text-sm ltablet:text-base lg:text-base"
              >
                Posts
              </span>
            </div>
            <div
              class="flex flex-col ltablet:flex-row lg:flex-row flex-1 ltablet:flex-auto lg:flex-auto gap-x-2 font-sans"
            >
              <span class="font-semibold text-muted-800 dark:text-muted-100">
                38.3K
              </span>
              <span
                class="text-muted-400 text-xs sm:text-sm ltablet:text-base lg:text-base"
              >
                Followers
              </span>
            </div>
            <div
              class="flex flex-col ltablet:flex-row lg:flex-row flex-1 ltablet:flex-auto lg:flex-auto gap-x-2 font-sans"
            >
              <span class="font-semibold text-muted-800 dark:text-muted-100">
                329
              </span>
              <span
                class="text-muted-400 text-xs sm:text-sm ltablet:text-base lg:text-base"
              >
                Following
              </span>
            </div>
          </div>
          <BaseParagraph
            size="sm"
            class="max-w-xl mx-auto ltablet:mx-0 lg:mx-0 mb-6 text-muted-500 dark:text-muted-400"
          >
            <span class="line-clamp-3">
              Artist, musician, songwriter, influencer, these are the many names
              people give me. But for you Iam simply Clarissa. *Forever with all
              my friends* // Latest video can be found here youtu.be/8Tcee5Cyz
            </span>
          </BaseParagraph>
          <div
            class="flex justify-center ltablet:justify-start lg:justify-start gap-4"
          >
            <!-- Icon -->
            <Popover arrow hover placement="top">
              <div
                class="h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-muted-700 shadow-xl shadow-muted-300/40 dark:shadow-muted-900/20"
              >
                <div
                  class="h-8 w-8 flex items-center justify-center rounded-full bg-rose-500/20"
                >
                  <Icon name="ri:fire-fill" class="w-5 h-5 text-rose-500" />
                </div>
              </div>
              <template #content>
                <PopoverHead
                  title="On Fire"
                  icon="ri:fire-fill"
                  class="text-rose-500 bg-rose-500/20"
                />
                <PopoverContent>
                  You have been on fire for the last 7 days. Keep up the good
                  work!
                </PopoverContent>
              </template>
            </Popover>
            <Popover arrow hover placement="top">
              <!-- Icon -->
              <div
                class="h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-muted-700 shadow-xl shadow-muted-300/40 dark:shadow-muted-900/20"
              >
                <div
                  class="h-8 w-8 flex items-center justify-center rounded-full bg-emerald-500/20"
                >
                  <Icon name="ri:medal-fill" class="w-5 h-5 text-emerald-500" />
                </div>
              </div>
              <template #content>
                <PopoverHead
                  title="Veteran"
                  icon="ri:medal-fill"
                  class="text-emerald-500 bg-emerald-500/20"
                />
                <PopoverContent>
                  You posted more than 250 posts. You are now a post veteran!
                </PopoverContent>
              </template>
            </Popover>
            <Popover arrow hover placement="top">
              <!-- Icon -->
              <div
                class="h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-muted-700 shadow-xl shadow-muted-300/40 dark:shadow-muted-900/20"
              >
                <div
                  class="h-8 w-8 flex items-center justify-center rounded-full bg-yellow-500/20"
                >
                  <Icon name="ri:trophy-fill" class="w-5 h-5 text-yellow-500" />
                </div>
              </div>
              <template #content>
                <PopoverHead
                  title="Champion"
                  icon="ri:trophy-fill"
                  class="text-yellow-500 bg-yellow-500/20"
                />
                <PopoverContent>
                  You have more than 100k followers. You are a champion!
                </PopoverContent>
              </template>
            </Popover>
          </div>
        </div>
      </div>
      <!-- Action -->
      <div
        class="flex justify-center ltablet:justify-start lg:justify-start shrink-0 ltablet:ml-auto lg:ml-auto mt-4 ltablet:mt-0 lg:mt-0"
      >
        <BaseButton
          class="w-52 ltablet:w-auto lg:w-auto mx-auto ltablet:mx-0 lg:mx-0"
        >
          <Icon name="lucide:plus" class="w-4 h-4" />
          <span>Add Account</span>
        </BaseButton>
      </div>
      <!-- Tabs -->
      <div
        class="absolute bottom-[-48px] ltablet:bottom-[-70px] lg:bottom-[-70px] left-0 flex items-end gap-2"
      >
        <button
          type="button"
          class="font-sans text-sm inline-flex items-center justify-center px-4 py-3 border-b-2"
          :class="
            activeTab === 'tab-1'
              ? 'border-primary-500 text-muted-800 dark:text-muted-100'
              : 'border-transparent text-muted-400'
          "
          @click="activeTab = 'tab-1'"
        >
          <span>Accounts</span>
        </button>
        <button
          type="button"
          class="font-sans text-sm inline-flex items-center justify-center px-4 py-3 border-b-2"
          :class="
            activeTab === 'tab-2'
              ? 'border-primary-500 text-muted-800 dark:text-muted-100'
              : 'border-transparent text-muted-400'
          "
          @click="activeTab = 'tab-2'"
        >
          <span>Companies</span>
        </button>
      </div>
    </div>
    <!-- Dashboard content -->
    <div class="w-full">
      <!-- Tab content -->
      <div v-if="activeTab === 'tab-1'" class="mt-28">
        <!-- Groups -->
        <div class="space-y-16">
          <!-- Group -->
          <div>
            <!-- Title -->
            <div class="w-full flex items-center justify-between mb-6">
              <div class="hidden sm:block">
                <BaseHeading
                  as="h3"
                  size="lg"
                  weight="medium"
                  lead="tight"
                  class="mb-2"
                >
                  <span class="text-muted-800 dark:text-muted-100">
                    Instagram stats
                  </span>
                </BaseHeading>
                <BaseParagraph
                  size="sm"
                  class="text-muted-500 dark:text-muted-400"
                >
                  <span>Lorem ipsum sit dolor amet is a dummy text</span>
                </BaseParagraph>
              </div>
              <div class="shrink-0">
                <Icon
                  name="logos:instagram"
                  class="w-24 text-3xl dark:invert"
                />
              </div>
            </div>
            <!-- Grid -->
            <div class="grid grid-cols-12 gap-6">
              <!-- Grid item -->
              <div
                class="col-span-12 sm:col-span-6 ltablet:col-span-4 lg:col-span-4"
              >
                <BaseCard class="p-6">
                  <div class="flex items-center justify-between">
                    <BaseParagraph
                      size="md"
                      class="text-muted-500 dark:text-muted-400"
                    >
                      <span>Content Posts (30 days)</span>
                    </BaseParagraph>
                    <BaseIconBox size="md" class="bg-pink-500/20 text-pink-500">
                      <Icon name="ri:instagram-fill" class="w-6 h-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pt-4 pb-6">
                    <span
                      class="font-sans font-semibold text-4xl leading-none text-muted-800 dark:text-muted-100"
                    >
                      119
                      <small
                        class="font-medium text-sm text-muted-500 dark:text-muted-400"
                      >
                        posts published
                      </small>
                    </span>
                  </div>
                  <div class="flex items-center gap-2 font-sans mb-2">
                    <div
                      class="flex items-center font-semibold text-danger-500"
                    >
                      <Icon name="lucide:arrow-down-right" class="w-4 h-4" />
                      <span>-4.5%</span>
                    </div>
                    <span class="text-sm text-muted-400">less than usual</span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="col-span-12 sm:col-span-6 ltablet:col-span-4 lg:col-span-4"
              >
                <BaseCard class="p-6">
                  <div class="flex items-center justify-between">
                    <BaseParagraph
                      size="md"
                      class="text-muted-500 dark:text-muted-400"
                    >
                      <span>Followers</span>
                    </BaseParagraph>
                    <BaseIconBox
                      size="md"
                      class="bg-primary-500/20 text-primary-500"
                    >
                      <Icon name="ph:users-four-duotone" class="w-6 h-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pt-4 pb-6">
                    <span
                      class="font-sans font-semibold text-4xl leading-none text-muted-800 dark:text-muted-100"
                    >
                      14.3k
                      <small
                        class="font-medium text-sm text-muted-500 dark:text-muted-400"
                      >
                        following you
                      </small>
                    </span>
                  </div>
                  <div class="flex items-center gap-2 font-sans mb-2">
                    <div
                      class="flex items-center font-semibold text-success-500"
                    >
                      <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
                      <span>+9.2%</span>
                    </div>
                    <span class="text-sm text-muted-400">follower growth</span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="col-span-12 sm:col-span-6 ltablet:col-span-4 lg:col-span-4"
              >
                <BaseCard class="p-6">
                  <div class="flex items-center justify-between">
                    <BaseParagraph
                      size="md"
                      class="text-muted-500 dark:text-muted-400"
                    >
                      <span>Following</span>
                    </BaseParagraph>
                    <BaseIconBox
                      size="md"
                      class="bg-emerald-500/20 text-emerald-500"
                    >
                      <Icon name="ph:users-three-duotone" class="w-6 h-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pt-4 pb-6">
                    <span
                      class="font-sans font-semibold text-4xl leading-none text-muted-800 dark:text-muted-100"
                    >
                      224
                      <small
                        class="font-medium text-sm text-muted-500 dark:text-muted-400"
                      >
                        followed by you
                      </small>
                    </span>
                  </div>
                  <div class="flex items-center gap-2 font-sans mb-2">
                    <div
                      class="flex items-center font-semibold text-success-500"
                    >
                      <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
                      <span>+1.1%</span>
                    </div>
                    <span class="text-sm text-muted-400">more than usual</span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="col-span-12 sm:col-span-6 ltablet:col-span-4 lg:col-span-4"
              >
                <BaseCard class="p-6">
                  <div class="flex items-center justify-between">
                    <BaseParagraph
                      size="md"
                      class="text-muted-500 dark:text-muted-400"
                    >
                      <span>Likes (30 days)</span>
                    </BaseParagraph>
                    <BaseIconBox size="md" class="bg-pink-500/20 text-pink-500">
                      <Icon name="ph:heart-duotone" class="w-6 h-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pt-4 pb-6">
                    <span
                      class="font-sans font-semibold text-4xl leading-none text-muted-800 dark:text-muted-100"
                    >
                      129.7k
                      <small
                        class="font-medium text-sm text-muted-500 dark:text-muted-400"
                      >
                        likes of your content
                      </small>
                    </span>
                  </div>
                  <div class="flex items-center gap-2 font-sans mb-2">
                    <div
                      class="flex items-center font-semibold text-success-500"
                    >
                      <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
                      <span>+25.7%</span>
                    </div>
                    <span class="text-sm text-muted-400">
                      engagement growth
                    </span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="col-span-12 sm:col-span-6 ltablet:col-span-4 lg:col-span-4"
              >
                <BaseCard class="p-6">
                  <div class="flex items-center justify-between">
                    <BaseParagraph
                      size="md"
                      class="text-muted-500 dark:text-muted-400"
                    >
                      <span>Comments (30 days)</span>
                    </BaseParagraph>
                    <BaseIconBox
                      size="md"
                      class="bg-yellow-500/20 text-yellow-500"
                    >
                      <Icon name="ph:chat-circle-duotone" class="w-6 h-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pt-4 pb-6">
                    <span
                      class="font-sans font-semibold text-4xl leading-none text-muted-800 dark:text-muted-100"
                    >
                      5.2k
                      <small
                        class="font-medium text-sm text-muted-500 dark:text-muted-400"
                      >
                        comments published
                      </small>
                    </span>
                  </div>
                  <div class="flex items-center gap-2 font-sans mb-2">
                    <div
                      class="flex items-center font-semibold text-success-500"
                    >
                      <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
                      <span>+11.3%</span>
                    </div>
                    <span class="text-sm text-muted-400">
                      engagement growth
                    </span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="col-span-12 sm:col-span-6 ltablet:col-span-4 lg:col-span-4"
              >
                <BaseCard class="p-6">
                  <div class="flex items-center justify-between">
                    <BaseParagraph
                      size="md"
                      class="text-muted-500 dark:text-muted-400"
                    >
                      <span>Profile views (30 days)</span>
                    </BaseParagraph>
                    <BaseIconBox size="md" class="bg-lime-500/20 text-lime-500">
                      <Icon name="ph:user-duotone" class="w-6 h-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pt-4 pb-6">
                    <span
                      class="font-sans font-semibold text-4xl leading-none text-muted-800 dark:text-muted-100"
                    >
                      12.7k
                      <small
                        class="font-medium text-sm text-muted-500 dark:text-muted-400"
                      >
                        views of profile
                      </small>
                    </span>
                  </div>
                  <div class="flex items-center gap-2 font-sans mb-2">
                    <div
                      class="flex items-center font-semibold text-success-500"
                    >
                      <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
                      <span>+8.5%</span>
                    </div>
                    <span class="text-sm text-muted-400">
                      engagement growth
                    </span>
                  </div>
                </BaseCard>
              </div>
            </div>
          </div>
          <!-- Group -->
          <div>
            <!-- Title -->
            <div class="w-full flex items-center justify-between mb-6">
              <div class="hidden sm:block">
                <BaseHeading
                  as="h3"
                  size="lg"
                  weight="medium"
                  lead="tight"
                  class="mb-2"
                >
                  <span class="text-muted-800 dark:text-muted-100">
                    Tik Tok stats
                  </span>
                </BaseHeading>
                <BaseParagraph
                  size="sm"
                  class="text-muted-500 dark:text-muted-400"
                >
                  <span>Lorem ipsum sit dolor amet is a dummy text</span>
                </BaseParagraph>
              </div>
              <div class="shrink-0">
                <Icon name="logos:tiktok" class="w-24 text-3xl dark:invert" />
              </div>
            </div>
            <!-- Grid -->
            <div class="grid grid-cols-12 gap-6">
              <!-- Grid item -->
              <div
                class="col-span-12 sm:col-span-6 ltablet:col-span-4 lg:col-span-4"
              >
                <BaseCard class="p-6">
                  <div class="flex items-center justify-between">
                    <BaseParagraph
                      size="md"
                      class="text-muted-500 dark:text-muted-400"
                    >
                      <span>Content Posts (30 days)</span>
                    </BaseParagraph>
                    <BaseIconBox size="md" class="bg-sky-500/20 text-sky-500">
                      <Icon name="fa6-brands:tiktok" class="w-6 h-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pt-4 pb-6">
                    <span
                      class="font-sans font-semibold text-4xl leading-none text-muted-800 dark:text-muted-100"
                    >
                      248
                      <small
                        class="font-medium text-sm text-muted-500 dark:text-muted-400"
                      >
                        posts published
                      </small>
                    </span>
                  </div>
                  <div class="flex items-center gap-2 font-sans mb-2">
                    <div
                      class="flex items-center font-semibold text-success-500"
                    >
                      <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
                      <span>+15.5%</span>
                    </div>
                    <span class="text-sm text-muted-400">more than usual</span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="col-span-12 sm:col-span-6 ltablet:col-span-4 lg:col-span-4"
              >
                <BaseCard class="p-6">
                  <div class="flex items-center justify-between">
                    <BaseParagraph
                      size="md"
                      class="text-muted-500 dark:text-muted-400"
                    >
                      <span>Followers</span>
                    </BaseParagraph>
                    <BaseIconBox
                      size="md"
                      class="bg-primary-500/20 text-primary-500"
                    >
                      <Icon name="ph:users-four-duotone" class="w-6 h-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pt-4 pb-6">
                    <span
                      class="font-sans font-semibold text-4xl leading-none text-muted-800 dark:text-muted-100"
                    >
                      5.7k
                      <small
                        class="font-medium text-sm text-muted-500 dark:text-muted-400"
                      >
                        following you
                      </small>
                    </span>
                  </div>
                  <div class="flex items-center gap-2 font-sans mb-2">
                    <div
                      class="flex items-center font-semibold text-success-500"
                    >
                      <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
                      <span>+17.2%</span>
                    </div>
                    <span class="text-sm text-muted-400">follower growth</span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="col-span-12 sm:col-span-6 ltablet:col-span-4 lg:col-span-4"
              >
                <BaseCard class="p-6">
                  <div class="flex items-center justify-between">
                    <BaseParagraph
                      size="md"
                      class="text-muted-500 dark:text-muted-400"
                    >
                      <span>Following</span>
                    </BaseParagraph>
                    <BaseIconBox
                      size="md"
                      class="bg-emerald-500/20 text-emerald-500"
                    >
                      <Icon name="ph:users-three-duotone" class="w-6 h-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pt-4 pb-6">
                    <span
                      class="font-sans font-semibold text-4xl leading-none text-muted-800 dark:text-muted-100"
                    >
                      29
                      <small
                        class="font-medium text-sm text-muted-500 dark:text-muted-400"
                      >
                        followed by you
                      </small>
                    </span>
                  </div>
                  <div class="flex items-center gap-2 font-sans mb-2">
                    <div
                      class="flex items-center font-semibold text-success-500"
                    >
                      <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
                      <span>+0.3%</span>
                    </div>
                    <span class="text-sm text-muted-400">more than usual</span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="col-span-12 sm:col-span-6 ltablet:col-span-4 lg:col-span-4"
              >
                <BaseCard class="p-6">
                  <div class="flex items-center justify-between">
                    <BaseParagraph
                      size="md"
                      class="text-muted-500 dark:text-muted-400"
                    >
                      <span>Likes (30 days)</span>
                    </BaseParagraph>
                    <BaseIconBox size="md" class="bg-pink-500/20 text-pink-500">
                      <Icon name="ph:heart-duotone" class="w-6 h-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pt-4 pb-6">
                    <span
                      class="font-sans font-semibold text-4xl leading-none text-muted-800 dark:text-muted-100"
                    >
                      80.4k
                      <small
                        class="font-medium text-sm text-muted-500 dark:text-muted-400"
                      >
                        likes of your content
                      </small>
                    </span>
                  </div>
                  <div class="flex items-center gap-2 font-sans mb-2">
                    <div
                      class="flex items-center font-semibold text-success-500"
                    >
                      <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
                      <span>+65.7%</span>
                    </div>
                    <span class="text-sm text-muted-400">
                      engagement growth
                    </span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="col-span-12 sm:col-span-6 ltablet:col-span-4 lg:col-span-4"
              >
                <BaseCard class="p-6">
                  <div class="flex items-center justify-between">
                    <BaseParagraph
                      size="md"
                      class="text-muted-500 dark:text-muted-400"
                    >
                      <span>Comments (30 days)</span>
                    </BaseParagraph>
                    <BaseIconBox
                      size="md"
                      class="bg-yellow-500/20 text-yellow-500"
                    >
                      <Icon name="ph:chat-circle-duotone" class="w-6 h-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pt-4 pb-6">
                    <span
                      class="font-sans font-semibold text-4xl leading-none text-muted-800 dark:text-muted-100"
                    >
                      22.8k
                      <small
                        class="font-medium text-sm text-muted-500 dark:text-muted-400"
                      >
                        comments published
                      </small>
                    </span>
                  </div>
                  <div class="flex items-center gap-2 font-sans mb-2">
                    <div
                      class="flex items-center font-semibold text-success-500"
                    >
                      <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
                      <span>+49.3%</span>
                    </div>
                    <span class="text-sm text-muted-400">
                      engagement growth
                    </span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="col-span-12 sm:col-span-6 ltablet:col-span-4 lg:col-span-4"
              >
                <BaseCard class="p-6">
                  <div class="flex items-center justify-between">
                    <BaseParagraph
                      size="md"
                      class="text-muted-500 dark:text-muted-400"
                    >
                      <span>Profile views (30 days)</span>
                    </BaseParagraph>
                    <BaseIconBox size="md" class="bg-lime-500/20 text-lime-500">
                      <Icon name="ph:user-duotone" class="w-6 h-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pt-4 pb-6">
                    <span
                      class="font-sans font-semibold text-4xl leading-none text-muted-800 dark:text-muted-100"
                    >
                      48.3k
                      <small
                        class="font-medium text-sm text-muted-500 dark:text-muted-400"
                      >
                        views of profile
                      </small>
                    </span>
                  </div>
                  <div class="flex items-center gap-2 font-sans mb-2">
                    <div
                      class="flex items-center font-semibold text-success-500"
                    >
                      <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
                      <span>+34.2%</span>
                    </div>
                    <span class="text-sm text-muted-400">
                      engagement growth
                    </span>
                  </div>
                </BaseCard>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Tab content -->
      <div v-else-if="activeTab === 'tab-2'" class="mt-28">
        <!-- Inner company grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 ltablet:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          <div
            v-for="(company, index) in companies"
            :key="index"
            class="relative h-full"
          >
            <BaseCard shape="curved" class="p-6 h-full flex flex-col">
              <div class="w-full h-full flex flex-col gap-4">
                <div :tooltip="company.name">
                  <Icon :name="company.logo" class="w-8 h-8 shrink-0" />
                </div>
                <div class="h-full flex flex-col">
                  <BaseHeading
                    as="h4"
                    size="md"
                    weight="semibold"
                    lead="tight"
                    class="mb-4 after:text-muted-800 dark:text-white"
                  >
                    <span>{{ company.name }}</span>
                  </BaseHeading>
                  <BaseParagraph size="sm">
                    <span
                      class="line-clamp-4 text-muted-500 dark:text-muted-400"
                    >
                      {{ company.description }}
                    </span>
                  </BaseParagraph>
                  <div
                    class="mt-auto flex items-center justify-center py-4 divide-x divide-muted-200 dark:divide-muted-700"
                  >
                    <div
                      v-for="(stat, statIndex) in company.stats"
                      :key="statIndex"
                      class="flex-1 px-4 my-4 text-center font-sans"
                    >
                      <span
                        class="block font-semibold text-muted-800 dark:text-muted-100"
                      >
                        {{
                          stat.label === 'Income'
                            ? `$${stat.value}k`
                            : stat.value
                        }}
                      </span>
                      <span class="block text-xs text-muted-400">
                        {{ stat.label }}
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <div>
                      <BaseAvatarGroup
                        :avatars="company.followers"
                        :limit="3"
                        size="xs"
                      />
                    </div>
                    <div class="flex gap-2">
                      <BaseButton shape="curved" color="default" class="w-28">
                        Details
                      </BaseButton>
                    </div>
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
