<script setup lang="ts">
definePageMeta({
  title: 'Hobbies',
})

const trending = [
  {
    name: 'Extreme foot trekk',
    date: 'Oct 31, 2022',
    image: '/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg',
    icon: 'tabler:trekking',
  },
  {
    name: 'Corporate rafting trip',
    date: 'Nov 14, 2022',
    image: '/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg',
    icon: 'map:rafting',
  },
  {
    name: 'Hiking in the Alps',
    date: 'Dec 3, 2022',
    image: '/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg',
    icon: 'map:climbing',
  },
  {
    name: 'Bicycle team mastery',
    date: 'Dec 17, 2022',
    image: '/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg',
    icon: 'map:bicycle-store',
  },
]

const popular = [
  {
    name: 'Extreme triathlon',
    date: 'Feb 4, 2023',
    image: '/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg',
    icon: 'map:kayaking',
  },
  {
    name: 'Jungle hiking',
    date: 'Jan 11, 2023',
    image: '/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg',
    icon: 'map:playground',
  },
  {
    name: 'Archery challenge',
    date: 'Dec 3, 2022',
    image: '/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg',
    icon: 'map:archery',
  },
  {
    name: 'Extreme waterskiing',
    date: 'Dec 21, 2022',
    image: '/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg',
    icon: 'map:waterskiing',
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
            <span>Explore Hobbies</span>
          </BaseHeading>
          <BaseParagraph>
            <span class="text-muted-500">
              Explore some of the best activities nearby in your region
            </span>
          </BaseParagraph>
        </div>
      </div>
      <div
        class="flex items-center justify-center md:justify-start gap-2 mt-4 md:mt-0"
      >
        <BaseButton color="primary" class="w-32">
          <span>View All</span>
        </BaseButton>
      </div>
    </div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-4">
      <!-- Column -->
      <div class="col-span-12 ltablet:col-span-8 lg:col-span-8">
        <div class="grid grid-cols-12 gap-4">
          <!-- Grid item -->
          <div class="col-span-6 sm:col-span-3">
            <NuxtLink
              to="#/"
              class="group relative w-full flex flex-col overflow-hidden rounded-2xl"
            >
              <img
                class="w-full h-80 object-cover object-center"
                src="/img/illustrations/dashboards/hobbies/hobby-1.svg"
                alt="Hobby cover"
              />
              <div
                class="absolute inset-0 w-full h-full bg-muted-900 opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10"
              ></div>
              <div
                class="absolute inset-0 w-full h-full flex flex-col justify-between p-6 z-20"
              >
                <div class="flex items-center justify-between">
                  <h3
                    class="font-sans tracking-wider text-white -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-100 transition-all duration-300"
                  >
                    Trekking
                  </h3>
                  <Icon
                    name="eos-icons:bootstrapping"
                    class="w-5 h-5 text-white -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-300 transition-all duration-300"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <h3
                    class="font-sans text-sm text-white underline underline-offset-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-500 transition-all duration-300"
                  >
                    View activities
                  </h3>
                  <Icon
                    name="lucide:arrow-right"
                    class="w-4 h-4 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-700 transition-all duration-300"
                  />
                </div>
              </div>
            </NuxtLink>
          </div>
          <!-- Grid item -->
          <div class="col-span-6 sm:col-span-3">
            <NuxtLink
              to="#/"
              class="group relative w-full flex flex-col overflow-hidden rounded-2xl"
            >
              <img
                class="w-full h-80 object-cover object-center"
                src="/img/illustrations/dashboards/hobbies/hobby-2.svg"
                alt="Hobby cover"
              />
              <div
                class="absolute inset-0 w-full h-full bg-muted-900 opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10"
              ></div>
              <div
                class="absolute inset-0 w-full h-full flex flex-col justify-between p-6 z-20"
              >
                <div class="flex items-center justify-between">
                  <h3
                    class="font-sans tracking-wider text-white -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-100 transition-all duration-300"
                  >
                    Cycling
                  </h3>
                  <Icon
                    name="fluent-emoji-high-contrast:wheel"
                    class="w-5 h-5 text-white -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-300 transition-all duration-300"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <h3
                    class="font-sans text-sm text-white underline underline-offset-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-500 transition-all duration-300"
                  >
                    View activities
                  </h3>
                  <Icon
                    name="lucide:arrow-right"
                    class="w-4 h-4 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-700 transition-all duration-300"
                  />
                </div>
              </div>
            </NuxtLink>
          </div>
          <!-- Grid item -->
          <div class="col-span-6 sm:col-span-3">
            <NuxtLink
              to="#/"
              class="group relative w-full flex flex-col overflow-hidden rounded-2xl"
            >
              <img
                class="w-full h-80 object-cover object-center"
                src="/img/illustrations/dashboards/hobbies/hobby-3.svg"
                alt="Hobby cover"
              />
              <div
                class="absolute inset-0 w-full h-full bg-muted-900 opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10"
              ></div>
              <div
                class="absolute inset-0 w-full h-full flex flex-col justify-between p-6 z-20"
              >
                <div class="flex items-center justify-between">
                  <h3
                    class="font-sans tracking-wider text-white -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-100 transition-all duration-300"
                  >
                    Exploration
                  </h3>
                  <Icon
                    name="fa6-solid:compass"
                    class="w-5 h-5 text-white -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-300 transition-all duration-300"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <h3
                    class="font-sans text-sm text-white underline underline-offset-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-500 transition-all duration-300"
                  >
                    View activities
                  </h3>
                  <Icon
                    name="lucide:arrow-right"
                    class="w-4 h-4 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-700 transition-all duration-300"
                  />
                </div>
              </div>
            </NuxtLink>
          </div>
          <!-- Grid item -->
          <div class="col-span-6 sm:col-span-3">
            <NuxtLink
              to="#/"
              class="group relative w-full flex flex-col overflow-hidden rounded-2xl"
            >
              <img
                class="w-full h-80 object-cover object-center"
                src="/img/illustrations/dashboards/hobbies/hobby-4.svg"
                alt="Hobby cover"
              />
              <div
                class="absolute inset-0 w-full h-full bg-muted-900 opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10"
              ></div>
              <div
                class="absolute inset-0 w-full h-full flex flex-col justify-between p-6 z-20"
              >
                <div class="flex items-center justify-between">
                  <h3
                    class="font-sans tracking-wider text-white -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-100 transition-all duration-300"
                  >
                    Hiking
                  </h3>
                  <Icon
                    name="mdi:pickaxe"
                    class="w-5 h-5 text-white -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-300 transition-all duration-300"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <h3
                    class="font-sans text-sm text-white underline underline-offset-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-500 transition-all duration-300"
                  >
                    View activities
                  </h3>
                  <Icon
                    name="lucide:arrow-right"
                    class="w-4 h-4 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-700 transition-all duration-300"
                  />
                </div>
              </div>
            </NuxtLink>
          </div>
          <!-- Grid item -->
          <div class="col-span-12 sm:col-span-6">
            <div class="my-4">
              <BaseHeading
                as="h2"
                size="lg"
                weight="light"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Trending Now</span>
              </BaseHeading>
              <BaseParagraph size="sm">
                <span class="text-muted-500">
                  Chek out the latest activities
                </span>
              </BaseParagraph>
            </div>
            <!-- List -->
            <div class="space-y-2">
              <!-- List item -->
              <BaseCard
                v-for="(item, i) in trending"
                :key="i"
                shape="curved"
                class="flex items-center gap-3 p-3"
              >
                <div
                  class="shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary-500/20"
                >
                  <Icon :name="item.icon" class="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="medium"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>{{ item.name }}</span>
                  </BaseHeading>
                  <BaseParagraph size="xs">
                    <span class="text-muted-400">
                      {{ item.date }}
                    </span>
                  </BaseParagraph>
                </div>
                <div class="flex items-center ml-auto">
                  <BaseButtonIcon shape="curved" muted class="scale-75">
                    <Icon name="lucide:arrow-right" class="w-5 h-5" />
                  </BaseButtonIcon>
                </div>
              </BaseCard>
            </div>
          </div>
          <!-- Grid item -->
          <div class="col-span-12 sm:col-span-6">
            <div class="my-4">
              <BaseHeading
                as="h2"
                size="lg"
                weight="light"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Popular ativities</span>
              </BaseHeading>
              <BaseParagraph size="sm">
                <span class="text-muted-500">
                  Chek out the latest activities
                </span>
              </BaseParagraph>
            </div>
            <!-- List -->
            <div class="space-y-2">
              <!-- List item -->
              <BaseCard
                v-for="(item, p) in popular"
                :key="p"
                shape="curved"
                class="flex items-center gap-3 p-3"
              >
                <div
                  class="shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary-500/20"
                >
                  <Icon :name="item.icon" class="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="medium"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>{{ item.name }}</span>
                  </BaseHeading>
                  <BaseParagraph size="xs">
                    <span class="text-muted-400">
                      {{ item.date }}
                    </span>
                  </BaseParagraph>
                </div>
                <div class="flex items-center ml-auto">
                  <BaseButtonIcon shape="curved" muted class="scale-75">
                    <Icon name="lucide:arrow-right" class="w-5 h-5" />
                  </BaseButtonIcon>
                </div>
              </BaseCard>
            </div>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div class="col-span-12 ltablet:col-span-4 lg:col-span-4">
        <div class="flex flex-col gap-6">
          <!-- Widget -->
          <BaseCard class="p-6" shape="curved">
            <div class="w-full flex items-center justify-between">
              <WidgetSearchCompact shape="curved" />
            </div>
          </BaseCard>
          <!-- Widget -->
          <BaseCard class="p-6" shape="curved">
            <WidgetDatepicker expanded />
          </BaseCard>
          <!-- Widget -->
          <BaseCard class="p-6" shape="curved">
            <div class="mb-6">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Locations</span>
              </BaseHeading>
            </div>
            <div class="space-y-1">
              <!-- Item -->
              <NuxtLink
                to="#/"
                class="flex items-center gap-3 rounded-xl hover:bg-muted-100 dark:hover:bg-muted-700/50 py-3 px-2 transition-colors duration-300"
              >
                <img
                  src="/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg"
                  alt="Hello"
                  class="max-w-[48px]"
                />
                <div>
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="medium"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>Mt Wilbur</span>
                  </BaseHeading>
                  <BaseParagraph size="xs">
                    <span class="text-muted-400">Oregon · Lvl 3</span>
                  </BaseParagraph>
                </div>
                <div class="flex items-center ml-auto">
                  <BaseButtonIcon shape="curved" muted class="scale-75">
                    <Icon name="lucide:arrow-right" class="w-5 h-5" />
                  </BaseButtonIcon>
                </div>
              </NuxtLink>
              <!-- Item -->
              <NuxtLink
                to="#/"
                class="flex items-center gap-3 rounded-xl hover:bg-muted-100 dark:hover:bg-muted-700/50 py-3 px-2 transition-colors duration-300"
              >
                <img
                  src="/img/illustrations/dashboards/hobbies/landscape-thumb-7.svg"
                  alt="Hello"
                  class="max-w-[48px]"
                />
                <div>
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="medium"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>Devil's Lair</span>
                  </BaseHeading>
                  <BaseParagraph size="xs">
                    <span class="text-muted-400">Alabama · Lvl 7</span>
                  </BaseParagraph>
                </div>
                <div class="flex items-center ml-auto">
                  <BaseButtonIcon shape="curved" muted class="scale-75">
                    <Icon name="lucide:arrow-right" class="w-5 h-5" />
                  </BaseButtonIcon>
                </div>
              </NuxtLink>
              <!-- Item -->
              <NuxtLink
                to="#/"
                class="flex items-center gap-3 rounded-xl hover:bg-muted-100 dark:hover:bg-muted-700/50 py-3 px-2 transition-colors duration-300"
              >
                <img
                  src="/img/illustrations/dashboards/hobbies/landscape-thumb-4.svg"
                  alt="Hello"
                  class="max-w-[48px]"
                />
                <div>
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="medium"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>Dragon's Den</span>
                  </BaseHeading>
                  <BaseParagraph size="xs">
                    <span class="text-muted-400">Missouri · Lvl 4</span>
                  </BaseParagraph>
                </div>
                <div class="flex items-center ml-auto">
                  <BaseButtonIcon shape="curved" muted class="scale-75">
                    <Icon name="lucide:arrow-right" class="w-5 h-5" />
                  </BaseButtonIcon>
                </div>
              </NuxtLink>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
