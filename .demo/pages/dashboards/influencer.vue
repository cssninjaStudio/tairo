<script setup lang="ts">
definePageMeta({
  title: 'Influencer',
  preview: {
    title: 'Influencer dashboard',
    description: 'For social media influencers',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-influencer.png',
    srcDark: '/img/screens/dashboards-influencer-dark.png',
    order: 15,
  },
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
      class="ltablet:h-[410px] dark:bg-muted-800 absolute start-0 top-0 h-[590px] w-full bg-white lg:h-[410px]"
    ></div>
    <!-- Header -->
    <div
      class="ltablet:h-64 ltablet:flex-row relative flex h-[460px] w-full flex-col lg:h-64 lg:flex-row"
    >
      <div
        class="ltablet:flex-row relative z-10 flex w-full flex-col gap-6 lg:flex-row"
      >
        <BaseAvatar
          src="/img/avatars/5.svg"
          badge-src="/img/icons/flags/united-states-of-america.svg"
          size="3xl"
          alt="avatar"
          class="ltablet:mx-0 mx-auto lg:mx-0"
        />
        <div class="ltablet:text-left text-center lg:text-left">
          <BaseHeading
            as="h2"
            size="xl"
            weight="semibold"
            class="ltablet:justify-start flex items-center justify-center gap-2 lg:justify-start"
          >
            <span class="text-muted-800 dark:text-white">Sweet_Mango12</span>
            <Icon name="uiw:star-on" class="h-4 w-4 text-yellow-400" />
          </BaseHeading>
          <span class="text-muted-400 mb-4 block font-sans text-base">
            Clarissa Miller
          </span>
          <div class="mb-6 flex items-center gap-x-6">
            <div
              class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"
            >
              <span class="text-muted-800 dark:text-muted-100 font-semibold">
                1512
              </span>
              <span
                class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"
              >
                Posts
              </span>
            </div>
            <div
              class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"
            >
              <span class="text-muted-800 dark:text-muted-100 font-semibold">
                38.3K
              </span>
              <span
                class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"
              >
                Followers
              </span>
            </div>
            <div
              class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"
            >
              <span class="text-muted-800 dark:text-muted-100 font-semibold">
                329
              </span>
              <span
                class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"
              >
                Following
              </span>
            </div>
          </div>
          <BaseProse
            class="ltablet:mx-0 prose-sm mx-auto mb-6 max-w-xl lg:mx-0"
          >
            <p class="line-clamp-3">
              Artist, musician, songwriter, influencer, these are the many names
              people give me. But for you Iam simply Clarissa. *Forever with all
              my friends* // Latest video can be found here
              <a href="#">youtu.be/8Tcee5Cyz</a>
            </p>
          </BaseProse>
          <div
            class="ltablet:justify-start flex justify-center gap-4 lg:justify-start"
          >
            <TairoPopover size="sm">
              <div
                class="dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl"
              >
                <div
                  class="bg-danger-500/20 flex h-8 w-8 items-center justify-center rounded-full"
                >
                  <Icon name="ri:fire-fill" class="text-danger-500 h-5 w-5" />
                </div>
              </div>

              <template #content>
                <TairoPopoverContentHelp
                  title="On Fire"
                  subtitle="You are on rampage"
                  text="You have been on fire for the last 7 days. Keep up the good
                    work!"
                  icon="ri:fire-fill"
                  icon-color="danger"
                />
              </template>
            </TairoPopover>
            <TairoPopover size="sm">
              <div
                class="dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl"
              >
                <div
                  class="bg-success-500/20 flex h-8 w-8 items-center justify-center rounded-full"
                >
                  <Icon name="ri:medal-fill" class="text-success-500 h-5 w-5" />
                </div>
              </div>

              <template #content>
                <TairoPopoverContentHelp
                  title="Veteran"
                  subtitle="Way to go soldier"
                  text="You posted more than 250 posts. You are now a post veteran!"
                  icon="ri:medal-fill"
                  icon-color="success"
                />
              </template>
            </TairoPopover>
            <TairoPopover size="sm">
              <div
                class="dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl"
              >
                <div
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/20"
                >
                  <Icon name="ri:trophy-fill" class="h-5 w-5 text-yellow-500" />
                </div>
              </div>

              <template #content>
                <TairoPopoverContentHelp
                  title="Champion"
                  subtitle="Hail to the king"
                  text="You have more than 100k followers. You are a champion!"
                  icon="ri:trophy-fill"
                  icon-color="yellow"
                />
              </template>
            </TairoPopover>
          </div>
        </div>
      </div>
      <!-- Action -->
      <div
        class="ltablet:justify-start ltablet:ms-auto ltablet:mt-0 mt-4 flex shrink-0 justify-center lg:ms-auto lg:mt-0 lg:justify-start"
      >
        <BaseButton
          class="ltablet:w-auto ltablet:mx-0 mx-auto w-52 lg:mx-0 lg:w-auto"
        >
          <Icon name="lucide:plus" class="h-4 w-4" />
          <span>Add Account</span>
        </BaseButton>
      </div>
      <!-- Tabs -->
      <div
        class="ltablet:bottom-[-70px] absolute bottom-[-48px] start-0 flex items-end gap-2 lg:bottom-[-70px]"
      >
        <button
          type="button"
          class="inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm"
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
          class="inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm"
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
            <div class="mb-6 flex w-full items-center justify-between">
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
                class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4"
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
                      <Icon name="ri:instagram-fill" class="h-6 w-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pb-6 pt-4">
                    <span
                      class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"
                    >
                      119
                      <small
                        class="text-muted-500 dark:text-muted-400 text-sm font-medium"
                      >
                        posts published
                      </small>
                    </span>
                  </div>
                  <div class="mb-2 flex items-center gap-2 font-sans">
                    <div
                      class="text-danger-500 flex items-center font-semibold"
                    >
                      <Icon name="lucide:arrow-down-right" class="h-4 w-4" />
                      <span>-4.5%</span>
                    </div>
                    <span class="text-muted-400 text-sm">less than usual</span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4"
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
                      <Icon name="ph:users-four-duotone" class="h-6 w-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pb-6 pt-4">
                    <span
                      class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"
                    >
                      14.3k
                      <small
                        class="text-muted-500 dark:text-muted-400 text-sm font-medium"
                      >
                        following you
                      </small>
                    </span>
                  </div>
                  <div class="mb-2 flex items-center gap-2 font-sans">
                    <div
                      class="text-success-500 flex items-center font-semibold"
                    >
                      <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
                      <span>+9.2%</span>
                    </div>
                    <span class="text-muted-400 text-sm">follower growth</span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4"
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
                      <Icon name="ph:users-three-duotone" class="h-6 w-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pb-6 pt-4">
                    <span
                      class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"
                    >
                      224
                      <small
                        class="text-muted-500 dark:text-muted-400 text-sm font-medium"
                      >
                        followed by you
                      </small>
                    </span>
                  </div>
                  <div class="mb-2 flex items-center gap-2 font-sans">
                    <div
                      class="text-success-500 flex items-center font-semibold"
                    >
                      <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
                      <span>+1.1%</span>
                    </div>
                    <span class="text-muted-400 text-sm">more than usual</span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4"
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
                      <Icon name="ph:heart-duotone" class="h-6 w-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pb-6 pt-4">
                    <span
                      class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"
                    >
                      129.7k
                      <small
                        class="text-muted-500 dark:text-muted-400 text-sm font-medium"
                      >
                        likes of your content
                      </small>
                    </span>
                  </div>
                  <div class="mb-2 flex items-center gap-2 font-sans">
                    <div
                      class="text-success-500 flex items-center font-semibold"
                    >
                      <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
                      <span>+25.7%</span>
                    </div>
                    <span class="text-muted-400 text-sm">
                      engagement growth
                    </span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4"
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
                      <Icon name="ph:chat-circle-duotone" class="h-6 w-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pb-6 pt-4">
                    <span
                      class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"
                    >
                      5.2k
                      <small
                        class="text-muted-500 dark:text-muted-400 text-sm font-medium"
                      >
                        comments published
                      </small>
                    </span>
                  </div>
                  <div class="mb-2 flex items-center gap-2 font-sans">
                    <div
                      class="text-success-500 flex items-center font-semibold"
                    >
                      <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
                      <span>+11.3%</span>
                    </div>
                    <span class="text-muted-400 text-sm">
                      engagement growth
                    </span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4"
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
                      <Icon name="ph:user-duotone" class="h-6 w-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pb-6 pt-4">
                    <span
                      class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"
                    >
                      12.7k
                      <small
                        class="text-muted-500 dark:text-muted-400 text-sm font-medium"
                      >
                        views of profile
                      </small>
                    </span>
                  </div>
                  <div class="mb-2 flex items-center gap-2 font-sans">
                    <div
                      class="text-success-500 flex items-center font-semibold"
                    >
                      <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
                      <span>+8.5%</span>
                    </div>
                    <span class="text-muted-400 text-sm">
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
            <div class="mb-6 flex w-full items-center justify-between">
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
                class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4"
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
                      <Icon name="fa6-brands:tiktok" class="h-6 w-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pb-6 pt-4">
                    <span
                      class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"
                    >
                      248
                      <small
                        class="text-muted-500 dark:text-muted-400 text-sm font-medium"
                      >
                        posts published
                      </small>
                    </span>
                  </div>
                  <div class="mb-2 flex items-center gap-2 font-sans">
                    <div
                      class="text-success-500 flex items-center font-semibold"
                    >
                      <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
                      <span>+15.5%</span>
                    </div>
                    <span class="text-muted-400 text-sm">more than usual</span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4"
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
                      <Icon name="ph:users-four-duotone" class="h-6 w-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pb-6 pt-4">
                    <span
                      class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"
                    >
                      5.7k
                      <small
                        class="text-muted-500 dark:text-muted-400 text-sm font-medium"
                      >
                        following you
                      </small>
                    </span>
                  </div>
                  <div class="mb-2 flex items-center gap-2 font-sans">
                    <div
                      class="text-success-500 flex items-center font-semibold"
                    >
                      <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
                      <span>+17.2%</span>
                    </div>
                    <span class="text-muted-400 text-sm">follower growth</span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4"
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
                      <Icon name="ph:users-three-duotone" class="h-6 w-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pb-6 pt-4">
                    <span
                      class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"
                    >
                      29
                      <small
                        class="text-muted-500 dark:text-muted-400 text-sm font-medium"
                      >
                        followed by you
                      </small>
                    </span>
                  </div>
                  <div class="mb-2 flex items-center gap-2 font-sans">
                    <div
                      class="text-success-500 flex items-center font-semibold"
                    >
                      <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
                      <span>+0.3%</span>
                    </div>
                    <span class="text-muted-400 text-sm">more than usual</span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4"
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
                      <Icon name="ph:heart-duotone" class="h-6 w-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pb-6 pt-4">
                    <span
                      class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"
                    >
                      80.4k
                      <small
                        class="text-muted-500 dark:text-muted-400 text-sm font-medium"
                      >
                        likes of your content
                      </small>
                    </span>
                  </div>
                  <div class="mb-2 flex items-center gap-2 font-sans">
                    <div
                      class="text-success-500 flex items-center font-semibold"
                    >
                      <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
                      <span>+65.7%</span>
                    </div>
                    <span class="text-muted-400 text-sm">
                      engagement growth
                    </span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4"
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
                      <Icon name="ph:chat-circle-duotone" class="h-6 w-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pb-6 pt-4">
                    <span
                      class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"
                    >
                      22.8k
                      <small
                        class="text-muted-500 dark:text-muted-400 text-sm font-medium"
                      >
                        comments published
                      </small>
                    </span>
                  </div>
                  <div class="mb-2 flex items-center gap-2 font-sans">
                    <div
                      class="text-success-500 flex items-center font-semibold"
                    >
                      <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
                      <span>+49.3%</span>
                    </div>
                    <span class="text-muted-400 text-sm">
                      engagement growth
                    </span>
                  </div>
                </BaseCard>
              </div>
              <!-- Grid item -->
              <div
                class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4"
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
                      <Icon name="ph:user-duotone" class="h-6 w-6" />
                    </BaseIconBox>
                  </div>
                  <div class="pb-6 pt-4">
                    <span
                      class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"
                    >
                      48.3k
                      <small
                        class="text-muted-500 dark:text-muted-400 text-sm font-medium"
                      >
                        views of profile
                      </small>
                    </span>
                  </div>
                  <div class="mb-2 flex items-center gap-2 font-sans">
                    <div
                      class="text-success-500 flex items-center font-semibold"
                    >
                      <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
                      <span>+34.2%</span>
                    </div>
                    <span class="text-muted-400 text-sm">
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
          class="ltablet:grid-cols-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div
            v-for="(company, index) in companies"
            :key="index"
            class="relative h-full"
          >
            <BaseCard shape="curved" class="flex h-full flex-col p-6">
              <div class="flex h-full w-full flex-col gap-4">
                <div :data-tooltip="company.name">
                  <Icon :name="company.logo" class="h-8 w-8 shrink-0" />
                </div>
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
