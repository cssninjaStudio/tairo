<script setup lang="ts">
definePageMeta({
  title: 'Video',
  preview: {
    title: 'Video dashboard',
    description: 'For video content creators',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-video.png',
    srcDark: '/img/screens/dashboards-video-dark.png',
    order: 19,
  },
})

const featuredVideos = [
  {
    id: 1,
    title: 'Code a responsive landing page using Tailwind CSS',
    slug: '',
    cover: '/img/illustrations/dashboards/video/1.png',
    uploaded: '2 hours ago',
    category: 'Frontend',
    author: {
      name: 'Hermann Mayer',
      avatar: '/img/avatars/16.svg',
    },
  },
  {
    id: 2,
    title: 'Designing a consistent UI framework for your app',
    slug: '',
    cover: '/img/illustrations/dashboards/video/2.jpg',
    uploaded: '6 hours ago',
    category: 'UI/UX',
    author: {
      name: 'Kendra Wilson',
      avatar: '/img/avatars/10.svg',
    },
  },
  {
    id: 3,
    title: 'Designing a set of chart widgets for my next dashboard',
    slug: '',
    cover: '/img/illustrations/dashboards/video/3.png',
    uploaded: 'Yesterday',
    category: 'Frontend',
    author: {
      name: 'Anna Lopez',
      avatar: '/img/avatars/12.svg',
    },
  },
  {
    id: 4,
    title: 'Integrating minimalism and negative space in your designs',
    slug: '',
    cover: '/img/illustrations/dashboards/video/4.png',
    uploaded: '2 days ago',
    category: 'Design',
    author: {
      name: 'John Polack',
      avatar: '/img/avatars/17.svg',
    },
  },
  {
    id: 5,
    title: 'Creating reusable sections using Tailwind CSS',
    slug: '',
    cover: '/img/illustrations/dashboards/video/5.png',
    uploaded: 'Last week',
    category: 'UI/UX',
    author: {
      name: 'Maya Rosselini',
      avatar: '/img/avatars/2.svg',
    },
  },
]

const videos = [
  {
    id: 6,
    title: 'How to think a mobile app landing page design',
    slug: '',
    cover: '/img/illustrations/dashboards/video/6.png',
    uploaded: '7 hours ago',
    category: 'Frontend',
    author: {
      name: 'Alan Skelli',
      avatar: '/img/avatars/11.svg',
    },
  },
  {
    id: 6,
    title: '8 tips to deliver the right message when talking to personas',
    slug: '',
    cover: '/img/illustrations/dashboards/video/7.jpg',
    uploaded: 'Yesterday',
    category: 'UI/UX',
    author: {
      name: 'Kendra Wilson',
      avatar: '/img/avatars/10.svg',
    },
  },
  {
    id: 7,
    title: '5 Differences between promoting your services and a product',
    slug: '',
    cover: '/img/illustrations/dashboards/video/8.jpg',
    uploaded: 'Yesterday',
    category: 'Branding',
    author: {
      name: 'Clarissa Miller',
      avatar: '/img/avatars/5.svg',
    },
  },
  {
    id: 8,
    title: 'Speed up your mobile development velocity using Flutter',
    slug: '',
    cover: '/img/illustrations/dashboards/video/9.png',
    uploaded: '2 days ago',
    category: 'Mobile',
    author: {
      name: 'Hermann Mayer',
      avatar: '/img/avatars/16.svg',
    },
  },
  {
    id: 9,
    title: 'How I created a full featured design system for my last project',
    slug: '',
    cover: '/img/illustrations/dashboards/video/10.png',
    uploaded: 'Yesterday',
    category: 'UI/UX',
    author: {
      name: 'Anna Lopez',
      avatar: '/img/avatars/12.svg',
    },
  },
  {
    id: 9,
    title: 'The never ending debate between development and low code projects',
    slug: '',
    cover: '/img/illustrations/dashboards/video/11.png',
    uploaded: '5 days ago',
    category: 'Engineering',
    author: {
      name: 'Ron Smith',
      avatar: '/img/avatars/14.svg',
    },
  },
  {
    id: 10,
    title:
      'Using javascript component to enforce code reusability in your project',
    slug: '',
    cover: '/img/illustrations/dashboards/video/12.png',
    uploaded: '2 weeks ago',
    category: 'Engineering',
    author: {
      name: 'Peter Weyland',
      avatar: '/img/avatars/15.svg',
    },
  },
  {
    id: 11,
    title:
      'How to use minimalism to emphasize the right message in your designs',
    slug: '',
    cover: '/img/illustrations/dashboards/video/13.png',
    uploaded: '1 month ago',
    category: 'UI/UX',
    author: {
      name: 'Clark Hamilton',
      avatar: '/img/avatars/3.svg',
    },
  },
  {
    id: 12,
    title: '10 Challenges UX designers should be able to face in their career',
    slug: '',
    cover: '/img/illustrations/dashboards/video/14.png',
    uploaded: '1 month ago',
    category: 'UI/UX',
    author: {
      name: 'Maya Rosselini',
      avatar: '/img/avatars/2.svg',
    },
  },
]
</script>

<template>
  <div>
    <!-- Header -->
    <div class="mb-8 flex flex-col justify-between md:flex-row md:items-center">
      <div
        class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-left lg:max-w-full"
      >
        <div>
          <BaseHeading
            as="h2"
            size="xl"
            weight="light"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Recent Videos</span>
          </BaseHeading>
          <BaseParagraph>
            <span class="text-muted-500">
              Recent videos that were posted earlier today
            </span>
          </BaseParagraph>
        </div>
      </div>
      <div class="xs:text-center xs:mt-2 space-y-2">
        <span class="text-muted-400 font-sans text-xs font-medium uppercase">
          My Team
        </span>
        <div class="flex items-center justify-center gap-2 md:justify-start">
          <BaseButtonIcon small>
            <Icon name="lucide:plus" class="h-4 w-4" />
          </BaseButtonIcon>
          <BaseAvatar
            size="xs"
            shape="straight"
            mask="blob"
            src="/img/avatars/10.svg"
          />
          <BaseAvatar
            size="xs"
            shape="straight"
            mask="blob"
            src="/img/avatars/8.svg"
          />
          <BaseAvatar
            size="xs"
            shape="straight"
            mask="blob"
            src="/img/avatars/5.svg"
          />
          <BaseAvatar
            size="xs"
            shape="straight"
            mask="blob"
            src="/img/avatars/16.svg"
          />
        </div>
      </div>
    </div>

    <!-- Featured videos -->
    <div class="relative">
      <!-- Grid -->
      <div class="grid min-h-[440px] grid-cols-12 gap-6">
        <!-- Column -->
        <div
          v-for="video in featuredVideos.slice(0, 1)"
          :key="video.id"
          class="ltablet:col-span-6 col-span-12 lg:col-span-6"
        >
          <div class="flex h-full flex-col">
            <div
              class="bg-muted-200 dark:bg-muted-800 group relative h-full w-full overflow-hidden rounded-2xl"
            >
              <img
                :src="video.cover"
                :alt="video.title"
                class="w-full object-cover object-center"
              />
              <div
                class="absolute inset-x-0 bottom-0 z-10 h-3/5 w-full bg-gradient-to-t from-black transition-all duration-500 ease-in-out group-hover:h-full"
              ></div>
              <div
                class="absolute inset-0 z-20 flex h-full w-full flex-col justify-between"
              >
                <div class="ptablet:p-10 p-6">
                  <NuxtLink
                    to="#"
                    class="group-hover:border-primary-500 text-muted-300 group-hover:text-primary-500 shadow-muted-300/30 dark:shadow-muted-900/20 flex h-14 w-14 items-center justify-center rounded-full border-2 border-transparent bg-white shadow-2xl transition-colors duration-300"
                  >
                    <Icon name="ic:round-play-arrow" class="h-7 w-7" />
                  </NuxtLink>
                </div>
                <div class="ptablet:p-10 p-6">
                  <NuxtLink to="#">
                    <BaseHeading
                      as="h3"
                      size="3xl"
                      weight="bold"
                      lead="tight"
                      class="xs:text-xl hover:text-primary-300 mb-4 line-clamp-2 text-white transition-colors duration-300"
                    >
                      <span>{{ video.title }}</span>
                    </BaseHeading>
                  </NuxtLink>
                  <div class="flex gap-3">
                    <BaseAvatar
                      :src="video.author.avatar"
                      :text="video.author.name.slice(0, 1)"
                      size="xs"
                      class="bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
                    />
                    <div>
                      <NuxtLink to="#">
                        <BaseHeading
                          as="h4"
                          size="xs"
                          weight="light"
                          lead="tight"
                          class="hover:text-primary-500 text-white transition-colors duration-300"
                        >
                          <span>{{ video.author.name }}</span>
                        </BaseHeading>
                      </NuxtLink>

                      <BaseParagraph size="xs">
                        <span class="text-muted-400">{{ video.uploaded }}</span>
                      </BaseParagraph>
                    </div>
                    <div class="ms-auto">
                      <BaseTag color="primary" shape="full" condensed>
                        <span>{{ video.category }}</span>
                      </BaseTag>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Column -->
        <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
          <div class="flex h-full flex-col">
            <div class="grid h-full grid-cols-12 gap-6">
              <!-- Subcolumn -->
              <div
                v-for="video in featuredVideos.slice(1)"
                :key="video.id"
                class="col-span-12 sm:col-span-6"
              >
                <div class="group flex h-full flex-col">
                  <div
                    class="bg-muted-200 dark:bg-muted-800 relative h-full w-full overflow-hidden rounded-2xl"
                  >
                    <img
                      :src="video.cover"
                      :alt="video.title"
                      class="w-full object-cover object-center"
                    />
                    <div
                      class="absolute inset-x-0 bottom-0 z-10 h-3/5 w-full bg-gradient-to-t from-black transition-all duration-500 ease-in-out group-hover:h-full"
                    ></div>
                    <div
                      class="absolute inset-0 z-20 flex h-full w-full flex-col justify-between"
                    >
                      <div class="p-4">
                        <NuxtLink
                          to="#"
                          class="group-hover:border-primary-500 text-muted-300 group-hover:text-primary-500 shadow-muted-300/30 dark:shadow-muted-900/20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-transparent bg-white shadow-2xl transition-colors duration-300"
                        >
                          <Icon name="ic:round-play-arrow" class="h-5 w-5" />
                        </NuxtLink>
                      </div>
                      <div class="p-4">
                        <NuxtLink to="#">
                          <BaseHeading
                            as="h3"
                            size="md"
                            weight="medium"
                            lead="tight"
                            class="xs:text-xl ptablet:text-xl ptablet:font-bold xs:font-bold hover:text-primary-300 mb-4 line-clamp-2 text-white transition-colors duration-300"
                          >
                            <span>{{ video.title }}</span>
                          </BaseHeading>
                        </NuxtLink>
                        <div class="flex gap-3">
                          <BaseAvatar
                            :src="video.author.avatar"
                            :text="video.author.name.slice(0, 1)"
                            size="xs"
                            class="bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
                          />
                          <div>
                            <NuxtLink to="#">
                              <BaseHeading
                                as="h4"
                                size="xs"
                                weight="light"
                                lead="tight"
                                class="hover:text-primary-500 text-white transition-colors duration-300"
                              >
                                <span>{{ video.author.name }}</span>
                              </BaseHeading>
                            </NuxtLink>

                            <BaseParagraph size="xs">
                              <span class="text-muted-400">
                                {{ video.uploaded }}
                              </span>
                            </BaseParagraph>
                          </div>
                          <div class="ms-auto">
                            <BaseTag color="primary" shape="full" condensed>
                              <span>{{ video.category }}</span>
                            </BaseTag>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Header -->
    <div
      class="mb-8 mt-12 flex flex-col justify-between md:flex-row md:items-center"
    >
      <div
        class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-left lg:max-w-full"
      >
        <div>
          <BaseHeading
            as="h2"
            size="lg"
            weight="light"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Popular Videos</span>
          </BaseHeading>
          <BaseParagraph size="sm">
            <span class="text-muted-500">
              Videos that were recently viewed by many people
            </span>
          </BaseParagraph>
        </div>
      </div>
      <div>
        <div
          class="xs:mt-2 flex items-center justify-center gap-2 md:justify-start"
        >
          <BaseButton small shape="full">
            <Icon name="lucide:video" class="h-4 w-4" />
            <span>Upload</span>
          </BaseButton>
        </div>
      </div>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Column -->
      <div
        v-for="video in videos"
        :key="video.id"
        class="ptablet:col-span-6 col-span-12 sm:col-span-4"
      >
        <div class="group flex flex-col">
          <div
            class="bg-muted-200 dark:bg-muted-800 relative w-full overflow-hidden rounded-2xl"
          >
            <img
              :src="video.cover"
              :alt="video.title"
              class="w-full object-cover object-center"
            />
            <div
              class="absolute inset-x-0 bottom-0 z-10 h-3/5 w-full bg-gradient-to-t from-black transition-all duration-500 ease-in-out group-hover:h-full"
            ></div>
            <div
              class="absolute inset-0 z-20 flex w-full flex-col justify-between"
            >
              <div class="p-4">
                <NuxtLink
                  to="#"
                  class="group-hover:border-primary-500 text-muted-300 group-hover:text-primary-500 shadow-muted-300/30 dark:shadow-muted-900/20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-transparent bg-white shadow-2xl transition-colors duration-300"
                >
                  <Icon name="ic:round-play-arrow" class="h-5 w-5" />
                </NuxtLink>
              </div>
              <div class="p-4">
                <NuxtLink to="#">
                  <BaseHeading
                    as="h3"
                    size="xl"
                    weight="medium"
                    lead="tight"
                    class="xs:text-xl xs:font-bold hover:text-primary-300 mb-4 line-clamp-2 text-white transition-colors duration-300"
                  >
                    <span>{{ video.title }}</span>
                  </BaseHeading>
                </NuxtLink>

                <div class="flex gap-3">
                  <BaseAvatar
                    :src="video.author.avatar"
                    :text="video.author.name.slice(0, 1)"
                    size="xs"
                    class="bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
                  />
                  <div>
                    <NuxtLink to="#">
                      <BaseHeading
                        as="h4"
                        size="xs"
                        weight="light"
                        lead="tight"
                        class="hover:text-primary-500 text-white transition-colors duration-300"
                      >
                        <span>{{ video.author.name }}</span>
                      </BaseHeading>
                    </NuxtLink>

                    <BaseParagraph size="xs">
                      <span class="text-muted-400">{{ video.uploaded }}</span>
                    </BaseParagraph>
                  </div>
                  <div class="ms-auto">
                    <BaseTag color="primary" shape="full" condensed>
                      <span>{{ video.category }}</span>
                    </BaseTag>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Load more -->
    <div class="my-16 flex items-center justify-center">
      <BaseButton shape="full" color="default">
        <Icon name="ph:dots-nine-bold" class="h-4 w-4" />
        <span>Load more</span>
      </BaseButton>
    </div>
  </div>
</template>
