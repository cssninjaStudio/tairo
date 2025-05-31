<script setup lang="ts">
definePageMeta({
  title: 'Content creator',
  preview: {
    title: 'Content creator dashboard',
    description: 'For social media influencers',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-influencer.png',
    srcDark: '/img/screens/dashboards-influencer-dark.png',
    order: 15,
  },
})

const instagramStats = [
  {
    label: 'Content Posts (30 days)',
    action: 'posst published',
    value: 119,
    growth: -4.5,
    growthText: 'less than usual',
    icon: 'ri:instagram-fill',
  },
  {
    label: 'Followers',
    action: 'following you',
    value: 14300,
    growth: 9.2,
    growthText: 'follower growth',
    icon: 'solar:users-group-rounded-bold-duotone',
  },
  {
    label: 'Following',
    action: 'followed by you',
    value: 224,
    growth: 1.1,
    growthText: 'more than usual',
    icon: 'solar:user-speak-bold-duotone',
  },
  {
    label: 'Likes (30 days)',
    action: 'likes of your content',
    value: 129700,
    growth: 25.7,
    growthText: 'engagement growth',
    icon: 'solar:heart-pulse-2-bold-duotone',
  },
  {
    label: 'Comments (30 days)',
    action: 'comments published',
    value: 5200,
    growth: 11.3,
    growthText: 'engagement growth',
    icon: 'solar:chat-line-bold-duotone',
  },
  {
    label: 'Profile views (30 days)',
    action: 'views of profile',
    value: 12700,
    growth: 8.5,
    growthText: 'engagement growth',
    icon: 'solar:mention-square-bold-duotone',
  },
]

const tiktokStats = [
  {
    label: 'Shorts (30 days)',
    action: 'shorts published',
    value: 75,
    growth: 11.5,
    growthText: 'more than usual',
    icon: 'fa6-brands:tiktok',
  },
  {
    label: 'Followers',
    action: 'following you',
    value: 5700,
    growth: 17.2,
    growthText: 'follower growth',
    icon: 'ph:users-four-duotone',
  },
  {
    label: 'Following',
    action: 'followed by you',
    value: 29,
    growth: 0.3,
    growthText: 'more than usual',
    icon: 'ph:users-three-duotone',
  },
  {
    label: 'Likes (30 days)',
    action: 'likes of your content',
    value: 80400,
    growth: 65.7,
    growthText: 'engagement growth',
    icon: 'ph:heart-duotone',
  },
  {
    label: 'Comments (30 days)',
    action: 'comments published',
    value: 22800,
    growth: 49.3,
    growthText: 'engagement growth',
    icon: 'ph:chat-circle-duotone',
  },
  {
    label: 'Profile views (30 days)',
    action: 'views of profile',
    value: 48300,
    growth: 8.5,
    growthText: 'engagement growth',
    icon: 'ph:user-duotone',
  },
]

const twitchStats = [
  {
    label: 'Stream (30 days)',
    action: 'hours streamed',
    value: 398,
    growth: 26.9,
    growthText: 'more than usual',
    icon: 'fa6-brands:twitch',
  },
  {
    label: 'Subscribers',
    action: 'subscribed',
    value: 5700,
    growth: 17.2,
    growthText: 'follower growth',
    icon: 'solar:users-group-rounded-bold-duotone',
  },
  {
    label: 'Following',
    action: 'followed by you',
    value: 29,
    growth: 0.3,
    growthText: 'more than usual',
    icon: 'solar:user-speak-bold-duotone',
  },
  {
    label: 'Likes (30 days)',
    action: 'likes of your content',
    value: 80400,
    growth: 65.7,
    growthText: 'engagement growth',
    icon: 'solar:heart-pulse-2-bold-duotone',
  },
  {
    label: 'Comments (30 days)',
    action: 'comments published',
    value: 22800,
    growth: 49.3,
    growthText: 'engagement growth',
    icon: 'solar:chat-line-bold-duotone',
  },
  {
    label: 'Profile views (30 days)',
    action: 'views of profile',
    value: 48300,
    growth: 8.5,
    growthText: 'engagement growth',
    icon: 'solar:mention-square-bold-duotone',
  },
]

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
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <!-- Header -->
    <div
      class="relative flex w-full flex-col lg:flex-row p-6 lg:p-8 2xl:p-10 bg-muted-200/80 dark:bg-muted-950 rounded-2xl"
    >
      <div
        class="relative z-10 flex w-full flex-col gap-6 lg:flex-row"
      >
        <div class="lg:landscape:mx-0 mx-auto xl:landscape:mx-0">
          <BaseAvatar
            src="/img/avatars/5.svg"
            badge-src="/img/icons/flags/united-states-of-america.svg"
            size="2xl"
            alt="avatar"
          />
        </div>
        <div class="text-center lg:text-start">
          <BaseHeading
            as="h2"
            size="xl"
            weight="semibold"
            class="flex items-center justify-center gap-2 lg:justify-start"
          >
            <span class="text-muted-800 dark:text-white">Sweet_Mango12</span>
            <Icon name="uiw:star-on" class="size-4 text-yellow-400" />
          </BaseHeading>
          <span class="text-muted-600 dark:text-muted-400 mb-4 block font-sans text-base">
            Clarissa Miller
          </span>
          <div class="mb-6 flex items-center gap-x-6">
            <div
              class="flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"
            >
              <span class="text-muted-800 dark:text-muted-100 font-semibold">
                1512
              </span>
              <span
                class="text-muted-400 text-xs sm:text-sm lg:text-base"
              >
                Posts
              </span>
            </div>
            <div
              class="flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"
            >
              <span class="text-muted-800 dark:text-muted-100 font-semibold">
                38.3K
              </span>
              <span
                class="text-muted-400 text-xs sm:text-sm lg:text-base"
              >
                Followers
              </span>
            </div>
            <div
              class="flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"
            >
              <span class="text-muted-800 dark:text-muted-100 font-semibold">
                329
              </span>
              <span
                class="text-muted-400 text-xs sm:text-sm lg:text-base"
              >
                Following
              </span>
            </div>
          </div>
          <BaseProse
            class="prose-sm mx-auto mb-6 max-w-xl lg:mx-0"
          >
            <p class="line-clamp-3">
              Artist, musician, songwriter, influencer, these are the many names
              people give me. But for you Iam simply Clarissa. *Forever with all
              my friends* // Latest video can be found here
              <a href="#">youtu.be/8Tcee5Cyz</a>
            </p>
          </BaseProse>
          <div
            class="flex justify-center gap-4 lg:justify-start"
          >
            <div
              class="dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex size-10 items-center justify-center rounded-full bg-white shadow-xl"
            >
              <div
                class="bg-destructive-500/20 flex size-8 items-center justify-center rounded-full"
              >
                <Icon name="ri:fire-fill" class="text-destructive-500 size-5" />
              </div>
            </div>

            <div
              class="dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex size-10 items-center justify-center rounded-full bg-white shadow-xl"
            >
              <div
                class="bg-success-500/20 flex size-8 items-center justify-center rounded-full"
              >
                <Icon name="ri:medal-fill" class="text-success-500 size-5" />
              </div>
            </div>

            <div
              class="dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex size-10 items-center justify-center rounded-full bg-white shadow-xl"
            >
              <div
                class="bg-warning-500/20 flex size-8 items-center justify-center rounded-full"
              >
                <Icon name="ri:trophy-fill" class="text-warning-500 size-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Action -->
      <div
        class="mt-4 flex shrink-0 justify-center lg:ms-auto lg:mt-0 lg:justify-start"
      >
        <BaseButton
          class="mx-auto w-52 lg:mx-0 lg:w-auto"
        >
          <Icon name="lucide:plus" class="size-4" />
          <span>Add Account</span>
        </BaseButton>
      </div>
    </div>
    <!-- Dashboard content -->
    <div class="w-full">
      <!-- Tabs -->
      <div
        class="flex items-end gap-x-8 my-6"
      >
        <button
          type="button"
          class="cursor-pointer inline-flex items-center justify-center border-b-2 py-3 font-sans text-sm"
          :class="
            activeTab === 'tab-1'
              ? 'border-primary-500 text-muted-800 dark:text-muted-100'
              : 'border-transparent text-muted-400 hover:text-muted-600 dark:hover:text-muted-100'
          "
          @click="activeTab = 'tab-1'"
        >
          <span>Accounts</span>
        </button>
        <button
          type="button"
          class="cursor-pointer inline-flex items-center justify-center border-b-2 py-3 font-sans text-sm"
          :class="
            activeTab === 'tab-2'
              ? 'border-primary-500 text-muted-800 dark:text-muted-100'
              : 'border-transparent text-muted-400 hover:text-muted-600 dark:hover:text-muted-100'
          "
          @click="activeTab = 'tab-2'"
        >
          <span>Companies</span>
        </button>
      </div>
      <!-- Tab content -->
      <div v-if="activeTab === 'tab-1'" class="relative">
        <!-- Groups -->
        <div class="space-y-16">
          <!-- Group -->
          <div>
            <!-- Title -->
            <div class="mb-6 flex flex-col md:flex-row w-full md:items-center md:justify-between gap-y-4">
              <div>
                <BaseHeading
                  as="h3"
                  size="lg"
                  weight="medium"
                  lead="tight"
                  class="mb-2"
                >
                  <span class="text-muted-900 dark:text-muted-100">
                    Instagram stats
                  </span>
                </BaseHeading>
                <BaseParagraph
                  size="sm"
                  class="text-muted-500 dark:text-muted-400 max-w-sm"
                >
                  <span>
                    The following stats are based on the last 30 days of your
                    Instagram account
                  </span>
                </BaseParagraph>
              </div>
              <div class="shrink-0">
                <BaseButton rounded="md">
                  Manage
                </BaseButton>
              </div>
            </div>
            <!-- Grid -->
            <div class="grid grid-cols-12 gap-4">
              <!-- Grid item -->
              <div
                v-for="stat in instagramStats"
                :key="stat.label"
                class="lg:landscape:col-span-4 col-span-12 sm:col-span-6 2xl:landscape:col-span-3"
              >
                <BaseCard rounded="md" class="p-4">
                  <div class="flex items-center justify-between">
                    <BaseParagraph
                      size="xs"
                      weight="medium"
                      class="text-muted-600 dark:text-muted-400"
                    >
                      <span>{{ stat.label }}</span>
                    </BaseParagraph>
                    <BaseIconBox
                      size="sm"
                      class="bg-muted-200 dark:bg-muted-800 text-muted-500 dark:text-muted-100"
                      variant="none"
                      rounded="none"
                      mask="blob"
                    >
                      <Icon :name="stat.icon" class="size-5" />
                    </BaseIconBox>
                  </div>
                  <div class="pb-4 pt-2">
                    <span
                      class="text-muted-800 dark:text-muted-100 font-sans text-xl xl:text-2xl font-semibold leading-none"
                    >
                      {{ stat.value }}
                    </span>
                    <small
                      class="block text-muted-500 dark:text-muted-400 text-xs font-medium"
                    >
                      {{ stat.action }}
                    </small>
                  </div>
                  <div class="mb-2 flex items-center gap-2 font-sans">
                    <div
                      class="text-sm flex items-center font-semibold"
                      :class="stat.growth < 0 ? 'text-destructive-500' : 'text-success-500'"
                    >
                      <Icon v-if="stat.growth < 0" name="lucide:arrow-down-right" class="size-4" />
                      <Icon v-else name="lucide:arrow-up-right" class="size-4" />
                      <span>{{ stat.growth > 0 ? '+' : '' }}{{ stat.growth }}%</span>
                    </div>
                    <span class="text-muted-400 text-xs">
                      {{ stat.growthText }}
                    </span>
                  </div>
                </BaseCard>
              </div>
            </div>
          </div>
          <!-- Group -->
          <div>
            <!-- Title -->
            <div class="mb-6 flex flex-col md:flex-row w-full md:items-center md:justify-between gap-y-4">
              <div>
                <BaseHeading
                  as="h3"
                  size="lg"
                  weight="medium"
                  lead="tight"
                  class="mb-2"
                >
                  <span class="text-muted-900 dark:text-muted-100">
                    Tik Tok stats
                  </span>
                </BaseHeading>
                <BaseParagraph
                  size="sm"
                  class="text-muted-500 dark:text-muted-400 max-w-sm"
                >
                  <span>
                    The following stats are based on the last 30 days of your
                    Tik Tok account
                  </span>
                </BaseParagraph>
              </div>
              <div class="shrink-0">
                <BaseButton rounded="md">
                  Manage
                </BaseButton>
              </div>
            </div>
            <!-- Grid -->
            <div class="grid grid-cols-12 gap-4">
              <!-- Grid item -->
              <div
                v-for="stat in tiktokStats"
                :key="stat.label"
                class="lg:landscape:col-span-4 col-span-12 sm:col-span-6 2xl:landscape:col-span-3"
              >
                <BaseCard rounded="md" class="p-4">
                  <div class="flex items-center justify-between">
                    <BaseParagraph
                      size="xs"
                      weight="medium"
                      class="text-muted-600 dark:text-muted-400"
                    >
                      <span>{{ stat.label }}</span>
                    </BaseParagraph>
                    <BaseIconBox
                      size="sm"
                      class="bg-muted-200 dark:bg-muted-800 text-muted-500 dark:text-muted-100"
                      variant="none"
                      rounded="none"
                      mask="blob"
                    >
                      <Icon :name="stat.icon" class="size-5" />
                    </BaseIconBox>
                  </div>
                  <div class="pb-4 pt-2">
                    <span
                      class="text-muted-800 dark:text-muted-100 font-sans text-2xl font-semibold leading-none"
                    >
                      {{ stat.value }}
                    </span>
                    <small
                      class="block text-muted-500 dark:text-muted-400 text-xs font-medium"
                    >
                      {{ stat.action }}
                    </small>
                  </div>
                  <div class="mb-2 flex items-center gap-2 font-sans">
                    <div
                      class="text-sm flex items-center font-semibold"
                      :class="stat.growth < 0 ? 'text-destructive-500' : 'text-success-500'"
                    >
                      <Icon v-if="stat.growth < 0" name="lucide:arrow-down-right" class="size-4" />
                      <Icon v-else name="lucide:arrow-up-right" class="size-4" />
                      <span>{{ stat.growth > 0 ? '+' : '' }}{{ stat.growth }}%</span>
                    </div>
                    <span class="text-muted-400 text-xs">
                      {{ stat.growthText }}
                    </span>
                  </div>
                </BaseCard>
              </div>
            </div>
          </div>
          <!-- Group -->
          <div>
            <!-- Title -->
            <div class="mb-6 flex flex-col md:flex-row w-full md:items-center md:justify-between gap-y-4">
              <div>
                <BaseHeading
                  as="h3"
                  size="lg"
                  weight="medium"
                  lead="tight"
                  class="mb-2"
                >
                  <span class="text-muted-900 dark:text-muted-100">
                    Twitch stats
                  </span>
                </BaseHeading>
                <BaseParagraph
                  size="sm"
                  class="text-muted-500 dark:text-muted-400 max-w-sm"
                >
                  <span>
                    The following stats are based on the last 30 days of your
                    Twitch account
                  </span>
                </BaseParagraph>
              </div>
              <div class="shrink-0">
                <BaseButton rounded="md">
                  Manage
                </BaseButton>
              </div>
            </div>
            <!-- Grid -->
            <div class="grid grid-cols-12 gap-4">
              <!-- Grid item -->
              <div
                v-for="stat in twitchStats"
                :key="stat.label"
                class="lg:landscape:col-span-4 col-span-12 sm:col-span-6 2xl:landscape:col-span-3"
              >
                <BaseCard rounded="md" class="p-4">
                  <div class="flex items-center justify-between">
                    <BaseParagraph
                      size="xs"
                      weight="medium"
                      class="text-muted-600 dark:text-muted-400"
                    >
                      <span>{{ stat.label }}</span>
                    </BaseParagraph>
                    <BaseIconBox
                      size="sm"
                      class="bg-muted-200 dark:bg-muted-800 text-muted-500 dark:text-muted-100"
                      variant="none"
                      rounded="none"
                      mask="blob"
                    >
                      <Icon :name="stat.icon" class="size-5" />
                    </BaseIconBox>
                  </div>
                  <div class="pb-4 pt-2">
                    <span
                      class="text-muted-800 dark:text-muted-100 font-sans text-2xl font-semibold leading-none"
                    >
                      {{ stat.value }}
                    </span>
                    <small
                      class="block text-muted-500 dark:text-muted-400 text-xs font-medium"
                    >
                      {{ stat.action }}
                    </small>
                  </div>
                  <div class="mb-2 flex items-center gap-2 font-sans">
                    <div
                      class="text-sm flex items-center font-semibold"
                      :class="stat.growth < 0 ? 'text-destructive-500' : 'text-success-500'"
                    >
                      <Icon v-if="stat.growth < 0" name="lucide:arrow-down-right" class="size-4" />
                      <Icon v-else name="lucide:arrow-up-right" class="size-4" />
                      <span>{{ stat.growth > 0 ? '+' : '' }}{{ stat.growth }}%</span>
                    </div>
                    <span class="text-muted-400 text-xs">
                      {{ stat.growthText }}
                    </span>
                  </div>
                </BaseCard>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Tab content -->
      <div v-else-if="activeTab === 'tab-2'" class="relative">
        <!-- Title -->
        <div class="mb-6 flex flex-col md:flex-row w-full md:items-center md:justify-between gap-y-4">
          <div>
            <BaseHeading
              as="h3"
              size="lg"
              weight="medium"
              lead="tight"
              class="mb-2"
            >
              <span class="text-muted-900 dark:text-muted-100">
                Collaborations
              </span>
            </BaseHeading>
            <BaseParagraph
              size="sm"
              class="text-muted-500 dark:text-muted-400 max-w-sm"
            >
              <span>
                These are the companies you are currently collaborating with or have collaborated with in the past.
              </span>
            </BaseParagraph>
          </div>
          <div class="shrink-0">
            <BaseButton rounded="md">
              Manage
            </BaseButton>
          </div>
        </div>
        <!-- Inner company grid -->
        <div
          class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div
            v-for="(company, index) in companies"
            :key="index"
            class="relative h-full"
          >
            <BaseCard rounded="md" class="flex h-full flex-col p-4 md:p-6">
              <div class="flex size-full gap-4">
                <BaseTooltip :content="company.name">
                  <Icon :name="company.logo" class="size-8 shrink-0" />
                </BaseTooltip>
                <div class="flex h-full flex-col">
                  <BaseHeading
                    as="h4"
                    size="md"
                    weight="semibold"
                    lead="tight"
                    class="after:text-muted-800 mb-4 dark:text-white"
                  >
                    <span>{{ company.name }}</span>
                  </BaseHeading>
                  <BaseParagraph size="sm">
                    <span
                      class="text-muted-500 dark:text-muted-400 line-clamp-4"
                    >
                      {{ company.description }}
                    </span>
                  </BaseParagraph>
                </div>
              </div>
              <div
                class="divide-muted-200 dark:divide-muted-700 mt-auto flex items-center justify-center divide-x py-4"
              >
                <div
                  v-for="(stat, statIndex) in company.stats"
                  :key="statIndex"
                  class="my-4 flex-1 px-4 text-center font-sans"
                >
                  <span
                    class="text-muted-800 dark:text-muted-100 block font-semibold"
                  >
                    {{
                      stat.label === 'Income'
                        ? `$${stat.value}k`
                        : stat.value
                    }}
                  </span>
                  <span class="text-muted-400 block text-xs">
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
                  <BaseButton
                    rounded="md"
                    size="sm"
                  >
                    Details
                  </BaseButton>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
