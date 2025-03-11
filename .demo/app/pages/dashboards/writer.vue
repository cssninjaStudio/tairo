<script setup lang="ts">
definePageMeta({
  title: 'Writer',
  preview: {
    title: 'Writer dashboard',
    description: 'For writers and bloggers',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-writer.png',
    srcDark: '/img/screens/dashboards-writer-dark.png',
    order: 18,
  },
})

const activePosts = ref('recent')
</script>

<template>
  <div class="overflow-hidden relative px-4 md:px-6 lg:px-8 pb-20">
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-4">
      <!-- Column -->
      <div class="col-span-12 xl:col-span-8">
        <!-- Inner grid -->
        <div class="grid grid-cols-12 gap-4">
          <!-- Header -->
          <div class="col-span-12">
            <div
              class="bg-primary-800 flex flex-col items-center rounded-2xl p-4 sm:flex-row"
            >
              <div class="relative h-[150px] w-[320px] shrink-0 sm:h-[175px]">
                <img
                  class="pointer-events-none absolute start-6 top-0 sm:-start-10"
                  src="/img/illustrations/dashboards/writer/readers.svg"
                  alt="Readers illustration"
                >
              </div>
              <div class="mt-6 grow sm:mt-0">
                <div class="pb-4 text-center sm:pb-0 sm:text-start">
                  <BaseHeading tag="h1" size="2xl" class="text-white">
                    <span>Hello, Kendra</span>
                  </BaseHeading>
                  <BaseParagraph
                    size="sm"
                    class="max-w-xs text-white/90"
                  >
                    <span>
                      Have any ideas for a new article? If not, you should
                      definitely check the feed for some inspiration.
                    </span>
                  </BaseParagraph>
                  <div class="mt-2">
                    <BaseButton
                      size="sm"
                      class="w-full sm:w-auto"
                    >
                      <Icon name="lucide:plus" class="size-4" />
                      <span>New Article</span>
                    </BaseButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Content -->
          <div class="col-span-12">
            <!-- Sub grid -->
            <div class="grid grid-cols-12 gap-4">
              <!-- Sub column -->
              <div class="col-span-12 sm:col-span-6">
                <div class="flex flex-col gap-4">
                  <!-- Tile grid -->
                  <div class="grid grid-cols-12 gap-4">
                    <!-- Tile -->
                    <div class="col-span-4">
                      <BaseCard rounded="lg" class="p-4">
                        <BaseParagraph
                          size="xs"
                          weight="medium"
                          class="text-muted-400 uppercase"
                        >
                          <span>Articles</span>
                        </BaseParagraph>
                        <span
                          class="text-muted-900 dark:text-muted-100 block font-sans text-2xl font-bold"
                        >
                          138
                        </span>
                      </BaseCard>
                    </div>
                    <!-- Tile -->
                    <div class="col-span-4">
                      <BaseCard rounded="lg" class="p-4">
                        <BaseParagraph
                          size="xs"
                          weight="medium"
                          class="text-muted-400 uppercase"
                        >
                          <span>Readers</span>
                        </BaseParagraph>
                        <span
                          class="text-muted-900 dark:text-muted-100 block font-sans text-2xl font-bold"
                        >
                          921
                        </span>
                      </BaseCard>
                    </div>
                    <!-- Tile -->
                    <div class="col-span-4">
                      <BaseCard rounded="lg" class="p-4">
                        <BaseParagraph
                          size="xs"
                          weight="medium"
                          class="text-muted-400 uppercase"
                        >
                          <span>Comments</span>
                        </BaseParagraph>
                        <span
                          class="text-muted-900 dark:text-muted-100 block font-sans text-2xl font-bold"
                        >
                          279
                        </span>
                      </BaseCard>
                    </div>
                  </div>
                  <!-- Widget -->
                  <BaseCard class="p-4 md:p-6" rounded="lg">
                    <!-- Title -->
                    <div class="mb-8 flex items-center justify-between">
                      <BaseHeading
                        as="h3"
                        size="md"
                        weight="medium"
                        lead="tight"
                        class="text-muted-900 dark:text-white"
                      >
                        <span>Popular authors</span>
                      </BaseHeading>
                      <BaseButton
                        size="sm"
                        rounded="md"
                      >
                        View all
                      </BaseButton>
                    </div>
                    <DemoAuthorsListCompact />
                  </BaseCard>
                </div>
              </div>
              <!-- Sub column -->
              <div class="col-span-12 sm:col-span-6">
                <!-- Widget -->
                <BaseCard class="p-4 md:p-6" rounded="lg">
                  <!-- Title -->
                  <div class="mb-8 flex items-center justify-between">
                    <BaseHeading
                      as="h3"
                      size="md"
                      weight="medium"
                      lead="tight"
                      class="text-muted-900 dark:text-white"
                    >
                      <span>Latest comments</span>
                    </BaseHeading>
                    <BaseButton
                      size="sm"
                      rounded="md"
                    >
                      View all
                    </BaseButton>
                  </div>
                  <DemoCommentListCompact />
                </BaseCard>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div class="col-span-12 xl:col-span-4">
        <div class="bg-muted-200 dark:bg-muted-800/70 rounded-2xl p-6">
          <!-- Title -->
          <div class="mb-8 flex items-center justify-between">
            <BaseHeading
              as="h3"
              size="md"
              weight="medium"
              lead="tight"
              class="text-muted-900 dark:text-white"
            >
              <span>New articles</span>
            </BaseHeading>
            <div class="flex scale-90 gap-2 sm:justify-end">
              <BaseButton
                size="sm"
                :variant="activePosts === 'recent' ? 'primary' : 'default'"
                @click="activePosts = 'recent'"
              >
                Recent
              </BaseButton>
              <BaseButton
                size="sm"
                :variant="activePosts === 'popular' ? 'primary' : 'default'"
                @click="activePosts = 'popular'"
              >
                Popular
              </BaseButton>
            </div>
          </div>
          <!-- Posts -->
          <div class="grid grid-cols-1 md:portrait:grid-cols-2 lg:grid-cols-2 xl:landscape:grid-cols-1 flex flex-col gap-6">
            <!-- Post -->
            <NuxtLink to="#" class="flex flex-col">
              <img
                src="/img/illustrations/dashboards/writer/post-1.svg"
                alt="Post image"
                class="bg-muted-200 rounded-xl"
              >
              <BaseCard
                class="shadow-muted-300/30 dark:shadow-muted-900/20 -mt-8 rounded-2xl! p-4 md:p-6 shadow-xl"
              >
                <div class="mb-3">
                  <BaseHeading
                    as="h4"
                    size="md"
                    weight="medium"
                    lead="tight"
                    class="text-muted-900 mb-1 dark:text-white"
                  >
                    <span>Learning the modern novel</span>
                  </BaseHeading>
                  <BaseParagraph size="xs">
                    <span class="text-muted-600 dark:text-muted-400">
                      Some article content and lorem ipsum sit dolor amet as a
                      nice dummy subtitle
                    </span>
                  </BaseParagraph>
                </div>
                <div class="flex gap-3">
                  <BaseAvatar
                    src="/img/avatars/6.svg"
                    text="BT"
                    size="xs"
                    class="bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
                  />
                  <div>
                    <BaseHeading
                      as="h4"
                      size="xs"
                      weight="medium"
                      lead="tight"
                      class="text-muted-900 dark:text-white"
                    >
                      <span>Mike Janovski</span>
                    </BaseHeading>
                    <BaseParagraph size="xs">
                      <span class="text-muted-600 dark:text-muted-400">Novel writer</span>
                    </BaseParagraph>
                  </div>
                </div>
              </BaseCard>
            </NuxtLink>
            <!-- Post -->
            <NuxtLink to="#" class="flex flex-col">
              <img
                src="/img/illustrations/dashboards/writer/post-2.svg"
                alt="Post image"
                class="bg-muted-200 rounded-xl"
              >
              <BaseCard
                class="shadow-muted-300/30 dark:shadow-muted-900/20 -mt-8 rounded-2xl! p-4 md:p-6 shadow-xl"
              >
                <div class="mb-3">
                  <BaseHeading
                    as="h4"
                    size="md"
                    weight="medium"
                    lead="tight"
                    class="text-muted-900 mb-1 dark:text-white"
                  >
                    <span>5 writing tips just for you</span>
                  </BaseHeading>
                  <BaseParagraph size="xs">
                    <span class="text-muted-600 dark:text-muted-400">
                      Some article content and lorem ipsum sit dolor amet as a
                      nice dummy subtitle
                    </span>
                  </BaseParagraph>
                </div>
                <div class="flex gap-3">
                  <BaseAvatar
                    src="/img/avatars/5.svg"
                    text="BT"
                    size="xs"
                    class="bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
                  />
                  <div>
                    <BaseHeading
                      as="h4"
                      size="xs"
                      weight="medium"
                      lead="tight"
                      class="text-muted-900 dark:text-white"
                    >
                      <span>Clarissa Miller</span>
                    </BaseHeading>
                    <BaseParagraph size="xs">
                      <span class="text-muted-600 dark:text-muted-400">Novel writer</span>
                    </BaseParagraph>
                  </div>
                </div>
              </BaseCard>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
