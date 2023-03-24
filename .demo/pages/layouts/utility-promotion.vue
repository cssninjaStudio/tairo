<script setup lang="ts">
definePageMeta({
  title: 'Promotion',
})
</script>

<template>
  <div class="flex items-center justify-center py-8">
    <div class="w-full max-w-4xl mx-auto">
      <BaseCard>
        <div
          class="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-muted-200 dark:divide-muted-700"
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
                class="w-full max-w-[280px] mx-auto flex items-end justify-center gap-2 mt-6"
              >
                <BaseHeading as="h3" size="2xl" weight="medium" lead="none">
                  <span class="text-sm text-muted-400">Only</span>
                  <span class="px-1"> $44.99</span>
                  <span class="text-sm text-muted-400">/per month</span>
                </BaseHeading>
              </div>
              <div class="flex items-center justify-between gap-2 mt-8">
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
                class="max-w-xs text-muted-500 dark:text-muted-400"
              >
                Take a look at some incredible features that have been added to
                our premium plan. You won't believe it!
              </BaseText>
              <div class="mt-6">
                <ul class="space-y-6">
                  <li class="flex gap-3">
                    <div
                      class="flex items-center justify-center h-9 w-9 rounded-full border border-muted-200 dark:border-muted-600 bg-white dark:bg-muted-700 shadow-xl shadow-muted-300/30 dark:shadow-muted-800/20"
                    >
                      <Icon
                        name="lucide:check"
                        class="w-4 h-4 text-success-500"
                      />
                    </div>
                    <div>
                      <BaseHeading as="h3" size="sm" weight="medium">
                        8 team seats
                      </BaseHeading>
                      <BaseText
                        size="xs"
                        class="max-w-[210px] text-muted-500 dark:text-muted-400"
                      >
                        Each team member on your account can create projects and
                        tasks.
                      </BaseText>
                    </div>
                  </li>
                  <li class="flex gap-3">
                    <div
                      class="flex items-center justify-center h-9 w-9 rounded-full border border-muted-200 dark:border-muted-600 bg-white dark:bg-muted-700 shadow-xl shadow-muted-300/30 dark:shadow-muted-800/20"
                    >
                      <Icon
                        name="lucide:check"
                        class="w-4 h-4 text-success-500"
                      />
                    </div>
                    <div>
                      <BaseHeading as="h3" size="sm" weight="medium">
                        Integrations
                      </BaseHeading>
                      <BaseText
                        size="xs"
                        class="max-w-[210px] text-muted-500 dark:text-muted-400"
                      >
                        Add up to 5 addons to your main application to help you
                        manage.
                      </BaseText>
                    </div>
                  </li>
                  <li class="flex gap-3">
                    <div
                      class="flex items-center justify-center h-9 w-9 rounded-full border border-muted-200 dark:border-muted-600 bg-white dark:bg-muted-700 shadow-xl shadow-muted-300/30 dark:shadow-muted-800/20"
                    >
                      <Icon
                        name="lucide:check"
                        class="w-4 h-4 text-success-500"
                      />
                    </div>
                    <div>
                      <BaseHeading as="h3" size="sm" weight="medium">
                        Growth scaling
                      </BaseHeading>
                      <BaseText
                        size="xs"
                        class="max-w-[210px] text-muted-500 dark:text-muted-400"
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
