<script setup lang="ts">
definePageMeta({
  title: 'Promotion',
  preview: {
    title: 'Promotion',
    description: 'For promotional offers',
    categories: ['layouts'],
    src: '/img/screens/layouts-utility-promotion.png',
    srcDark: '/img/screens/layouts-utility-promotion-dark.png',
    order: 88,
  },
})
</script>

<template>
  <div class="flex items-center justify-center py-8">
    <div class="mx-auto w-full max-w-4xl">
      <BaseCard>
        <div
          class="divide-muted-200 dark:divide-muted-700 grid divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0"
        >
          <div class="flex flex-col p-8">
            <BasePlaceholderPage
              title="Empower your team"
              subtitle="Make your team more productive and more efficient with our premium plan. Don't miss out on this great opportunity!"
            >
              <template #image>
                <img
                  class="block dark:hidden"
                  src="/img/illustrations/placeholders/flat/placeholder-promotion.svg"
                  alt="placeholder-image"
                />
                <img
                  class="hidden dark:block"
                  src="/img/illustrations/placeholders/flat/placeholder-promotion-dark.svg"
                  alt="placeholder-image"
                />
              </template>

              <div
                class="mx-auto mt-6 flex w-full max-w-[280px] items-end justify-center gap-2"
              >
                <BaseHeading as="h3" size="2xl" weight="medium" lead="none">
                  <span class="text-muted-400 text-sm">Only</span>
                  <span class="px-1"> $44.99</span>
                  <span class="text-muted-400 text-sm">/per month</span>
                </BaseHeading>
              </div>
              <div class="mt-8 flex items-center justify-between gap-2">
                <BaseButton class="w-full">Skip</BaseButton>
                <BaseButton color="primary" class="w-full">Upgrade</BaseButton>
              </div>
            </BasePlaceholderPage>
          </div>
          <div>
            <div class="flex flex-col p-8">
              <BaseHeading tag="h2" size="md" weight="medium" class="mt-4">
                Upgrade Now
              </BaseHeading>
              <BaseText
                size="xs"
                class="text-muted-500 dark:text-muted-400 max-w-xs"
              >
                Take a look at some incredible features that have been added to
                our premium plan. You won't believe it!
              </BaseText>
              <div class="mt-6">
                <ul class="space-y-6">
                  <li class="flex gap-3">
                    <div
                      class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-xl"
                    >
                      <Icon
                        name="lucide:check"
                        class="text-success-500 h-4 w-4"
                      />
                    </div>
                    <div>
                      <BaseHeading as="h3" size="sm" weight="medium">
                        8 team seats
                      </BaseHeading>
                      <BaseText
                        size="xs"
                        class="text-muted-500 dark:text-muted-400 max-w-[210px]"
                      >
                        Each team member on your account can create projects and
                        tasks.
                      </BaseText>
                    </div>
                  </li>
                  <li class="flex gap-3">
                    <div
                      class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-xl"
                    >
                      <Icon
                        name="lucide:check"
                        class="text-success-500 h-4 w-4"
                      />
                    </div>
                    <div>
                      <BaseHeading as="h3" size="sm" weight="medium">
                        Integrations
                      </BaseHeading>
                      <BaseText
                        size="xs"
                        class="text-muted-500 dark:text-muted-400 max-w-[210px]"
                      >
                        Add up to 5 addons to your main application to help you
                        manage.
                      </BaseText>
                    </div>
                  </li>
                  <li class="flex gap-3">
                    <div
                      class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-xl"
                    >
                      <Icon
                        name="lucide:check"
                        class="text-success-500 h-4 w-4"
                      />
                    </div>
                    <div>
                      <BaseHeading as="h3" size="sm" weight="medium">
                        Growth scaling
                      </BaseHeading>
                      <BaseText
                        size="xs"
                        class="text-muted-500 dark:text-muted-400 max-w-[210px]"
                      >
                        Your application grows in parallel of your business,
                        without any effort.
                      </BaseText>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
