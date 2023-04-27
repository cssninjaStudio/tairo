<script setup lang="ts">
definePageMeta({
  title: 'Creative Widgets',
  preview: {
    title: 'Creative Widgets',
    description: 'For page compositions',
    categories: ['dashboards', 'widgets'],
    src: '/img/screens/dashboards-widgets-creative.png',
    srcDark: '/img/screens/dashboards-widgets-creative-dark.png',
    order: 28,
  },
})
</script>

<template>
  <div class="ptablet:grid-cols-2 grid gap-4 sm:grid-cols-4">
    <!-- Column -->
    <div class="relative flex flex-col gap-4">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <DemoInfoBadges
          image="/img/illustrations/widgets/1.svg"
          badge-small="/img/illustrations/widgets/3.svg"
          badge-medium="/img/illustrations/widgets/2.svg"
          title="You've unlocked 2 new Achievements"
          text="Congrats, your efforts have been rewarded. Keep up like this!"
        />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <DemoVcardRight />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-4">
        <DemoInfoImage
          shape="curved"
          image="/img/illustrations/widgets/7.svg"
          title="You've unlocked 2 new Achievements"
          text="Congrats, your efforts have been rewarded. Keep up like this!"
        />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-5">
        <!-- Title -->
        <div class="mb-8 flex items-center justify-between">
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>My Team</span>
          </BaseHeading>
          <NuxtLink
            to="#"
            class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
          >
            View All
          </NuxtLink>
        </div>
        <DemoTeamListCompact />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative flex flex-col gap-4">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-4">
        <DemoInfoImage
          shape="curved"
          image="/img/illustrations/widgets/4.svg"
          title="You've unlocked 2 new Achievements"
          text="Congrats, your efforts have been rewarded. Keep up like this!"
        />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-4">
        <DemoSocialLinks shape="curved" />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-4">
        <DemoTeamSearchCompact shape="curved" />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <DemoShoppingCartCompact shape="curved" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative flex flex-col gap-4">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <DemoIconText
          title="@cssninjaStudio"
          icon="lucide:twitter"
          text="Tairo will be released very soon, probably around the end of the year of the Christmas holidays."
          indicator
        >
          <div
            class="text-primary-500 mt-3 flex w-full gap-2 font-sans text-xs font-medium"
          >
            <NuxtLink to="#">#uikit</NuxtLink>
            <NuxtLink to="#">#dashboards</NuxtLink>
            <NuxtLink to="#">#tailwind</NuxtLink>
          </div>
        </DemoIconText>
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-4">
        <DemoInfoImage
          shape="curved"
          image="/img/illustrations/widgets/5.svg"
          title="You've unlocked 2 new Achievements"
          text="Congrats, your efforts have been rewarded. Keep up like this!"
        />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <DemoVcardRight centered />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-4">
        <DemoImageLinks shape="curved" />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <DemoProgressCircle
          image="/img/avatars/6.svg"
          :title="`${78}% completed!`"
          text="Congrats, your efforts have been rewarded. Keep up like this!"
          :value="78"
        />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative flex flex-col gap-4">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <DemoProductCompact
          image="/img/illustrations/widgets/watch-3.svg"
          title="Connected Watch"
          text="Apple — 5th Gen Connected Watch series, 64GB, 2023 issue"
          icon="fa6-brands:apple"
          shape="curved"
        />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <DemoIconsSquare shape="curved" />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-4">
        <DemoInfoImage
          shape="curved"
          image="/img/illustrations/widgets/8.svg"
          title="You've unlocked 2 new Achievements"
          text="Congrats, your efforts have been rewarded. Keep up like this!"
        />
      </BaseCard>
    </div>
  </div>
</template>
