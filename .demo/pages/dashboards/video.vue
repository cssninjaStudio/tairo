<script setup lang="ts">
definePageMeta({
  title: 'Video',
  layout: 'sidebar',
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
    <div class="flex flex-col md:flex-row md:items-center justify-between mb-8">
      <div
        class="flex flex-col md:flex-row items-center gap-4 text-center md:text-left max-w-[425px] ltablet:max-w-full lg:max-w-full"
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
      <div class="space-y-2 xs:text-center xs:mt-2">
        <span class="font-sans text-xs uppercase font-medium text-muted-400"
          >My Team</span
        >
        <div class="flex items-center justify-center md:justify-start gap-2">
          <BaseButtonIcon small>
            <Icon name="lucide:plus" class="w-4 h-4" />
          </BaseButtonIcon>
          <BaseAvatar size="xs" shape="square" src="/img/avatars/10.svg" />
          <BaseAvatar size="xs" shape="square" src="/img/avatars/8.svg" />
          <BaseAvatar size="xs" shape="square" src="/img/avatars/5.svg" />
          <BaseAvatar size="xs" shape="square" src="/img/avatars/16.svg" />
        </div>
      </div>
    </div>

    <!-- Featured videos -->
    <div class="relative">
      <!-- Grid -->
      <div class="grid grid-cols-12 gap-6 min-h-[440px]">
        <!-- Column -->
        <div
          v-for="video in featuredVideos.slice(0, 1)"
          :key="video.id"
          class="col-span-12 ltablet:col-span-6 lg:col-span-6"
        >
          <div class="h-full flex flex-col">
            <div
              class="group relative h-full w-full rounded-2xl bg-muted-200 dark:bg-muted-800 overflow-hidden"
            >
              <img
                :src="video.cover"
                :alt="video.title"
                class="object-cover object-center w-full"
              />
              <div
                class="absolute inset-x-0 bottom-0 w-full h-3/5 group-hover:h-full bg-gradient-to-t from-black z-10 transition-all duration-500 ease-in-out"
              ></div>
              <div
                class="absolute inset-0 w-full h-full flex flex-col justify-between z-20"
              >
                <div class="p-6 ptablet:p-10">
                  <NuxtLink
                    to="/"
                    class="h-14 w-14 flex items-center justify-center border-2 border-transparent group-hover:border-primary-500 text-muted-300 group-hover:text-primary-500 rounded-full bg-white shadow-2xl shadow-muted-300/30 dark:shadow-muted-900/20 transition-colors duration-300"
                  >
                    <Icon name="ic:round-play-arrow" class="w-7 h-7" />
                  </NuxtLink>
                </div>
                <div class="p-6 ptablet:p-10">
                  <NuxtLink to="/">
                    <BaseHeading
                      as="h3"
                      size="3xl"
                      weight="bold"
                      lead="tight"
                      class="xs:text-xl line-clamp-2 text-white hover:text-primary-300 mb-4 transition-colors duration-300"
                    >
                      <span>{{ video.title }}</span>
                    </BaseHeading>
                  </NuxtLink>
                  <div class="flex gap-3">
                    <BaseAvatar
                      :src="video.author.avatar"
                      :text="video.author.name.slice(0, 1)"
                      size="xs"
                      class="flex-shrink-0 bg-primary-100 dark:bg-primary-500/20 text-primary-500"
                    />
                    <div>
                      <NuxtLink to="/">
                        <BaseHeading
                          as="h4"
                          size="xs"
                          weight="light"
                          lead="tight"
                          class="text-white hover:text-primary-500 transition-colors duration-300"
                        >
                          <span>{{ video.author.name }}</span>
                        </BaseHeading>
                      </NuxtLink>

                      <BaseParagraph size="xs">
                        <span class="text-muted-400">{{ video.uploaded }}</span>
                      </BaseParagraph>
                    </div>
                    <div class="ml-auto">
                      <BaseTag color="primary" shape="full" compact>
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
        <div class="col-span-12 ltablet:col-span-6 lg:col-span-6">
          <div class="h-full flex flex-col">
            <div class="h-full grid grid-cols-12 gap-6">
              <!-- Subcolumn -->
              <div
                v-for="video in featuredVideos.slice(1)"
                :key="video.id"
                class="col-span-12 sm:col-span-6"
              >
                <div class="group h-full flex flex-col">
                  <div
                    class="relative h-full w-full rounded-2xl bg-muted-200 dark:bg-muted-800 overflow-hidden"
                  >
                    <img
                      :src="video.cover"
                      :alt="video.title"
                      class="object-cover object-center w-full"
                    />
                    <div
                      class="absolute inset-x-0 bottom-0 w-full h-3/5 group-hover:h-full bg-gradient-to-t from-black z-10 transition-all duration-500 ease-in-out"
                    ></div>
                    <div
                      class="absolute inset-0 w-full h-full flex flex-col justify-between z-20"
                    >
                      <div class="p-4">
                        <NuxtLink
                          to="/"
                          class="h-10 w-10 flex items-center justify-center border-2 border-transparent group-hover:border-primary-500 text-muted-300 group-hover:text-primary-500 rounded-full bg-white shadow-2xl shadow-muted-300/30 dark:shadow-muted-900/20 transition-colors duration-300"
                        >
                          <Icon name="ic:round-play-arrow" class="w-5 h-5" />
                        </NuxtLink>
                      </div>
                      <div class="p-4">
                        <NuxtLink to="/">
                          <BaseHeading
                            as="h3"
                            size="md"
                            weight="medium"
                            lead="tight"
                            class="xs:text-xl ptablet:text-xl ptablet:font-bold xs:font-bold text-white mb-4 line-clamp-2 hover:text-primary-300 transition-colors duration-300"
                          >
                            <span>{{ video.title }}</span>
                          </BaseHeading>
                        </NuxtLink>
                        <div class="flex gap-3">
                          <BaseAvatar
                            :src="video.author.avatar"
                            :text="video.author.name.slice(0, 1)"
                            size="xs"
                            class="flex-shrink-0 bg-primary-100 dark:bg-primary-500/20 text-primary-500"
                          />
                          <div>
                            <NuxtLink to="/">
                              <BaseHeading
                                as="h4"
                                size="xs"
                                weight="light"
                                lead="tight"
                                class="text-white hover:text-primary-500 transition-colors duration-300"
                              >
                                <span>{{ video.author.name }}</span>
                              </BaseHeading>
                            </NuxtLink>

                            <BaseParagraph size="xs">
                              <span class="text-muted-400">{{
                                video.uploaded
                              }}</span>
                            </BaseParagraph>
                          </div>
                          <div class="ml-auto">
                            <BaseTag color="primary" shape="full" compact>
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
      class="flex flex-col md:flex-row md:items-center justify-between mt-12 mb-8"
    >
      <div
        class="flex flex-col md:flex-row items-center gap-4 text-center md:text-left max-w-[425px] ltablet:max-w-full lg:max-w-full"
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
          class="flex items-center justify-center md:justify-start gap-2 xs:mt-2"
        >
          <BaseButton small shape="full">
            <Icon name="lucide:video" class="w-4 h-4" />
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
        class="col-span-12 sm:col-span-4 ptablet:col-span-6"
      >
        <div class="group flex flex-col">
          <div
            class="relative w-full rounded-2xl bg-muted-200 dark:bg-muted-800 overflow-hidden"
          >
            <img
              :src="video.cover"
              :alt="video.title"
              class="object-cover object-center w-full"
            />
            <div
              class="absolute inset-x-0 bottom-0 w-full h-3/5 group-hover:h-full bg-gradient-to-t from-black z-10 transition-all duration-500 ease-in-out"
            ></div>
            <div
              class="absolute inset-0 w-full flex flex-col justify-between z-20"
            >
              <div class="p-4">
                <NuxtLink
                  to="/"
                  class="h-10 w-10 flex items-center justify-center border-2 border-transparent group-hover:border-primary-500 text-muted-300 group-hover:text-primary-500 rounded-full bg-white shadow-2xl shadow-muted-300/30 dark:shadow-muted-900/20 transition-colors duration-300"
                >
                  <Icon name="ic:round-play-arrow" class="w-5 h-5" />
                </NuxtLink>
              </div>
              <div class="p-4">
                <NuxtLink to="/">
                  <BaseHeading
                    as="h3"
                    size="xl"
                    weight="medium"
                    lead="tight"
                    class="xs:text-xl xs:font-bold text-white mb-4 line-clamp-2 hover:text-primary-300 transition-colors duration-300"
                  >
                    <span>{{ video.title }}</span>
                  </BaseHeading>
                </NuxtLink>

                <div class="flex gap-3">
                  <BaseAvatar
                    :src="video.author.avatar"
                    :text="video.author.name.slice(0, 1)"
                    size="xs"
                    class="flex-shrink-0 bg-primary-100 dark:bg-primary-500/20 text-primary-500"
                  />
                  <div>
                    <NuxtLink to="/">
                      <BaseHeading
                        as="h4"
                        size="xs"
                        weight="light"
                        lead="tight"
                        class="text-white hover:text-primary-500 transition-colors duration-300"
                      >
                        <span>{{ video.author.name }}</span>
                      </BaseHeading>
                    </NuxtLink>

                    <BaseParagraph size="xs">
                      <span class="text-muted-400">{{ video.uploaded }}</span>
                    </BaseParagraph>
                  </div>
                  <div class="ml-auto">
                    <BaseTag color="primary" shape="full" compact>
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
    <div class="flex items-center justify-center my-16">
      <BaseButton shape="full" color="default">
        <Icon name="ph:dots-nine-bold" class="w-4 h-4" />
        <span>Load more</span>
      </BaseButton>
    </div>
  </div>
</template>
