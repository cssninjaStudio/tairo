<script setup lang="ts">
definePageMeta({
  title: 'Creative Widgets',
})
</script>

<template>
  <div class="grid sm:grid-cols-4 ptablet:grid-cols-2 gap-4">
    <!-- Column -->
    <div class="relative flex flex-col gap-4">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <WidgetInfoBadges
          image="/img/illustrations/widgets/1.svg"
          badge-small="/img/illustrations/widgets/3.svg"
          badge-medium="/img/illustrations/widgets/2.svg"
          title="You've unlocked 2 new Achievements"
          text="Congrats, your efforts have been rewarded. Keep up like this!"
        />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <WidgetVcardRight />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-4">
        <WidgetInfoImage
          shape="curved"
          image="/img/illustrations/widgets/7.svg"
          title="You've unlocked 2 new Achievements"
          text="Congrats, your efforts have been rewarded. Keep up like this!"
        />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-5">
        <!-- Title -->
        <div class="flex items-center justify-between mb-8">
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
            to="#/"
            class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
          >
            View All
          </NuxtLink>
        </div>
        <WidgetTeamListCompact />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative flex flex-col gap-4">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-4">
        <WidgetInfoImage
          shape="curved"
          image="/img/illustrations/widgets/4.svg"
          title="You've unlocked 2 new Achievements"
          text="Congrats, your efforts have been rewarded. Keep up like this!"
        />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-4">
        <WidgetSocialLinks shape="curved" />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-4">
        <WidgetTeamSearchCompact shape="curved" />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <WidgetShoppingCartCompact shape="curved" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative flex flex-col gap-4">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <WidgetIconText
          title="@cssninjaStudio"
          icon="lucide:twitter"
          text="Tairo will be released very soon, probably around the end of the year of the Christmas holidays."
          indicator
        >
          <div
            class="w-full flex gap-2 mt-3 font-sans font-medium text-xs text-primary-500"
          >
            <NuxtLink to="#/">#uikit</NuxtLink>
            <NuxtLink to="#/">#dashboards</NuxtLink>
            <NuxtLink to="#/">#tailwind</NuxtLink>
          </div>
        </WidgetIconText>
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-4">
        <WidgetInfoImage
          shape="curved"
          image="/img/illustrations/widgets/5.svg"
          title="You've unlocked 2 new Achievements"
          text="Congrats, your efforts have been rewarded. Keep up like this!"
        />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <WidgetVcardRight centered />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-4">
        <WidgetImageLinks shape="curved" />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <WidgetProgressCircle
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
        <WidgetProductCompact
          image="/img/illustrations/widgets/watch-3.svg"
          title="Connected Watch"
          text="Apple — 5th Gen Connected Watch series, 64GB, 2023 issue"
          icon="fa6-brands:apple"
          shape="curved"
        />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <WidgetIconsSquare shape="curved" />
      </BaseCard>
      <!-- Widget -->
      <BaseCard shape="curved" class="p-4">
        <WidgetInfoImage
          shape="curved"
          image="/img/illustrations/widgets/8.svg"
          title="You've unlocked 2 new Achievements"
          text="Congrats, your efforts have been rewarded. Keep up like this!"
        />
      </BaseCard>
    </div>
  </div>
</template>
