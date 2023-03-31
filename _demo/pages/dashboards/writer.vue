<script setup lang="ts">
definePageMeta({
  title: 'Writer',
})

const activePosts = ref('recent')
</script>

<template>
  <div class="relative">
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Column -->
      <div class="col-span-12 ltablet:col-span-8 lg:col-span-8">
        <!-- Inner grid -->
        <div class="grid grid-cols-12 gap-6">
          <!-- Header -->
          <div class="col-span-12">
            <div
              class="flex flex-col sm:flex-row items-center p-4 rounded-2xl bg-primary-800"
            >
              <div class="relative shrink-0 h-[150px] sm:h-[175px] w-[320px]">
                <img
                  class="absolute top-0 left-6 sm:-left-10 pointer-events-none"
                  src="/img/illustrations/dashboards/writer/readers.svg"
                  alt="Readers illustration"
                />
              </div>
              <div class="grow mt-6 sm:mt-0">
                <div class="text-center sm:text-left pb-4 sm:pb-0">
                  <BaseHeading tag="h1" class="text-white opacity-90">
                    <span>Hello, Maya</span>
                  </BaseHeading>
                  <BaseParagraph
                    size="sm"
                    class="max-w-xs text-white opacity-70"
                  >
                    <span>
                      Have any ideas for a new article? If not, you should
                      definitely check the feed for some inspiration.
                    </span>
                  </BaseParagraph>
                  <div class="mt-2">
                    <BaseButton
                      size="sm"
                      color="light"
                      flavor="outline"
                      class="w-full sm:w-auto"
                    >
                      <Icon name="lucide:plus" class="w-4 h-4" />
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
            <div class="grid grid-cols-12 gap-6">
              <!-- Sub column -->
              <div class="col-span-12 sm:col-span-6">
                <div class="flex flex-col gap-6">
                  <!-- Tile grid -->
                  <div class="grid grid-cols-12 gap-4">
                    <!-- Tile -->
                    <div class="col-span-4">
                      <BaseCard shape="curved" class="p-4">
                        <BaseParagraph
                          size="xs"
                          weight="medium"
                          class="uppercase text-muted-400"
                        >
                          <span>Articles</span>
                        </BaseParagraph>
                        <span
                          class="block font-sans font-bold text-2xl text-muted-800 dark:text-muted-100"
                        >
                          138
                        </span>
                      </BaseCard>
                    </div>
                    <!-- Tile -->
                    <div class="col-span-4">
                      <BaseCard shape="curved" class="p-4">
                        <BaseParagraph
                          size="xs"
                          weight="medium"
                          class="uppercase text-muted-400"
                        >
                          <span>Readers</span>
                        </BaseParagraph>
                        <span
                          class="block font-sans font-bold text-2xl text-muted-800 dark:text-muted-100"
                        >
                          921
                        </span>
                      </BaseCard>
                    </div>
                    <!-- Tile -->
                    <div class="col-span-4">
                      <BaseCard shape="curved" class="p-4">
                        <BaseParagraph
                          size="xs"
                          weight="medium"
                          class="uppercase text-muted-400"
                        >
                          <span>Comments</span>
                        </BaseParagraph>
                        <span
                          class="block font-sans font-bold text-2xl text-muted-800 dark:text-muted-100"
                        >
                          279
                        </span>
                      </BaseCard>
                    </div>
                  </div>
                  <!-- Widget -->
                  <BaseCard class="p-6" shape="curved">
                    <!-- Title -->
                    <div class="flex items-center justify-between mb-8">
                      <BaseHeading
                        as="h3"
                        size="md"
                        weight="semibold"
                        lead="tight"
                        class="text-muted-800 dark:text-white"
                      >
                        <span>Popular authors</span>
                      </BaseHeading>
                      <NuxtLink
                        to="#"
                        class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
                      >
                        View All
                      </NuxtLink>
                    </div>
                    <DemoAuthorsListCompact />
                  </BaseCard>
                </div>
              </div>
              <!-- Sub column -->
              <div class="col-span-12 sm:col-span-6">
                <!-- Widget -->
                <BaseCard class="p-6" shape="curved">
                  <!-- Title -->
                  <div class="flex items-center justify-between mb-8">
                    <BaseHeading
                      as="h3"
                      size="md"
                      weight="semibold"
                      lead="tight"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>Latest comments</span>
                    </BaseHeading>
                    <NuxtLink
                      to="#"
                      class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
                    >
                      View All
                    </NuxtLink>
                  </div>
                  <DemoCommentListCompact />
                </BaseCard>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div class="col-span-12 ltablet:col-span-4 lg:col-span-4">
        <div class="p-6 rounded-2xl bg-muted-200 dark:bg-muted-800/70">
          <!-- Title -->
          <div class="flex items-center justify-between mb-8">
            <BaseHeading
              as="h3"
              size="md"
              weight="semibold"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              <span>New articles</span>
            </BaseHeading>
            <div class="flex sm:justify-end gap-2 scale-90">
              <BaseButtonAction
                small
                :color="activePosts === 'recent' ? 'primary' : 'default'"
                @click="activePosts = 'recent'"
              >
                Recent
              </BaseButtonAction>
              <BaseButtonAction
                small
                :color="activePosts === 'popular' ? 'primary' : 'default'"
                @click="activePosts = 'popular'"
              >
                Popular
              </BaseButtonAction>
            </div>
          </div>
          <!-- Posts-->
          <div class="flex flex-col ptablet:grid ptablet:grid-cols-2 gap-6">
            <!-- Post -->
            <NuxtLink to="#" class="flex flex-col">
              <img
                src="/img/illustrations/dashboards/writer/post-1.svg"
                alt="Post image"
                class="rounded-xl bg-muted-200"
              />
              <BaseCard
                class="!rounded-2xl p-6 -mt-8 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/20"
              >
                <div class="mb-3">
                  <BaseHeading
                    as="h4"
                    size="md"
                    weight="light"
                    lead="tight"
                    class="mb-1 text-muted-800 dark:text-white"
                  >
                    <span>Learning the modern novel</span>
                  </BaseHeading>
                  <BaseParagraph size="xs">
                    <span class="text-muted-400">
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
                    class="flex-shrink-0 bg-primary-100 dark:bg-primary-500/20 text-primary-500"
                  />
                  <div>
                    <BaseHeading
                      as="h4"
                      size="xs"
                      weight="light"
                      lead="tight"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>Mike Janovski</span>
                    </BaseHeading>
                    <BaseParagraph size="xs">
                      <span class="text-muted-400">Novel writer</span>
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
                class="rounded-xl bg-muted-200"
              />
              <BaseCard
                class="!rounded-2xl p-6 -mt-8 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/20"
              >
                <div class="mb-3">
                  <BaseHeading
                    as="h4"
                    size="md"
                    weight="light"
                    lead="tight"
                    class="mb-1 text-muted-800 dark:text-white"
                  >
                    <span>5 writing tips just for you</span>
                  </BaseHeading>
                  <BaseParagraph size="xs">
                    <span class="text-muted-400">
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
                    class="flex-shrink-0 bg-primary-100 dark:bg-primary-500/20 text-primary-500"
                  />
                  <div>
                    <BaseHeading
                      as="h4"
                      size="xs"
                      weight="light"
                      lead="tight"
                      class="text-muted-800 dark:text-white"
                    >
                      <span>Clarissa Miller</span>
                    </BaseHeading>
                    <BaseParagraph size="xs">
                      <span class="text-muted-400">Novel writer</span>
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
