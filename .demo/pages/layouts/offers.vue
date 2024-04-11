<script setup lang="ts">
definePageMeta({
  title: 'Offers',
  preview: {
    title: 'Offers',
    description: 'For partner offers',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-offers.png',
    srcDark: '/img/screens/layouts-offers-dark.png',
    order: 37,
    new: true,
  },
})

const route = useRoute()
const router = useRouter()
const page = computed(() => parseInt((route.query.page as string) ?? '1'))

const filter = ref('')
const perPage = ref(100)

watch([filter, perPage], () => {
  router.push({
    query: {
      page: undefined,
    },
  })
})

const query = computed(() => {
  return {
    filter: filter.value,
    perPage: perPage.value,
    page: page.value,
  }
})

const { data, pending, error, refresh } = await useFetch('/api/offers', {
  query,
})

const popular = computed(() => {
  return data?.value?.data.filter((item: any) =>
    item.categories.includes('popular'),
  )
})

const recent = computed(() => {
  return data?.value?.data.filter((item: any) =>
    item.categories.includes('recent'),
  )
})

const communication = computed(() => {
  return data?.value?.data.filter((item: any) =>
    item.categories.includes('communication'),
  )
})

const design = computed(() => {
  return data?.value?.data.filter((item: any) =>
    item.categories.includes('design'),
  )
})

const development = computed(() => {
  return data?.value?.data.filter((item: any) =>
    item.categories.includes('development'),
  )
})
</script>

<template>
  <div class="w-full pb-24">
    <!--Header-->
    <div class="border-muted-200 dark:border-muted-800 border-b py-6">
      <BaseHeading
        as="h2"
        size="3xl"
        weight="medium"
        class="text-muted-800 dark:text-white"
      >
        Offers
      </BaseHeading>
      <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
        Discover special offers from our partners
      </BaseParagraph>
    </div>

    <!--List-->
    <div class="space-y-10 py-6">
      <!--popular offers-->
      <div class="py-6">
        <div class="mb-6">
          <BaseHeading
            as="h3"
            size="xl"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Popular
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
            Most popular offers among our customers
          </BaseParagraph>
        </div>
        <!--Grid-->
        <div
          class="ptablet:grid-cols-2 ltablet:grid-cols-3 bg-muted-200 dark:bg-muted-700 grid gap-3 rounded-xl p-6 lg:grid-cols-3"
        >
          <DemoOfferCollapse
            v-for="item in popular"
            :key="item.id"
            :slug="item.slug"
            :title="item.title"
            :subtitle="item.subtitle"
            :icon="item.icon"
            :remaining="item.remaining"
          />
        </div>
      </div>

      <!--recent offers-->
      <div class="py-6">
        <div class="mb-6">
          <BaseHeading
            as="h3"
            size="xl"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Recent
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
            Recent offers we've just added
          </BaseParagraph>
        </div>
        <!--Grid-->
        <div
          class="ptablet:grid-cols-2 ltablet:grid-cols-3 bg-muted-200 dark:bg-muted-700 grid gap-3 rounded-xl p-6 lg:grid-cols-3"
        >
          <DemoOfferCollapse
            v-for="item in recent"
            :key="item.id"
            :slug="item.slug"
            :title="item.title"
            :subtitle="item.subtitle"
            :icon="item.icon"
            :remaining="item.remaining"
          />
        </div>
      </div>

      <!--communication offers-->
      <div class="py-6">
        <div class="mb-6">
          <BaseHeading
            as="h3"
            size="xl"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Communication
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
            Communication related offers
          </BaseParagraph>
        </div>
        <!--Grid-->
        <div
          class="ptablet:grid-cols-2 ltablet:grid-cols-3 bg-muted-200 dark:bg-muted-700 grid gap-3 rounded-xl p-6 lg:grid-cols-3"
        >
          <DemoOfferCollapse
            v-for="item in communication"
            :key="item.id"
            :slug="item.slug"
            :title="item.title"
            :subtitle="item.subtitle"
            :icon="item.icon"
            :remaining="item.remaining"
          />
        </div>
      </div>

      <!--design offers-->
      <div class="py-6">
        <div class="mb-6">
          <BaseHeading
            as="h3"
            size="xl"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            UX Design
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
            UX design related offers
          </BaseParagraph>
        </div>
        <!--Grid-->
        <div
          class="ptablet:grid-cols-2 ltablet:grid-cols-3 bg-muted-200 dark:bg-muted-700 grid gap-3 rounded-xl p-6 lg:grid-cols-3"
        >
          <DemoOfferCollapse
            v-for="item in design"
            :key="item.id"
            :slug="item.slug"
            :title="item.title"
            :subtitle="item.subtitle"
            :icon="item.icon"
            :remaining="item.remaining"
          />
        </div>
      </div>

      <!--development offers-->
      <div class="py-6">
        <div class="mb-6">
          <BaseHeading
            as="h3"
            size="xl"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Development
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
            Development related offers
          </BaseParagraph>
        </div>
        <!--Grid-->
        <div
          class="ptablet:grid-cols-2 ltablet:grid-cols-3 bg-muted-200 dark:bg-muted-700 grid gap-3 rounded-xl p-6 lg:grid-cols-3"
        >
          <DemoOfferCollapse
            v-for="item in development"
            :key="item.id"
            :slug="item.slug"
            :title="item.title"
            :subtitle="item.subtitle"
            :icon="item.icon"
            :remaining="item.remaining"
          />
        </div>
      </div>
    </div>
  </div>
</template>
