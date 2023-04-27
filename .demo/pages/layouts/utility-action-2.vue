<script setup lang="ts">
definePageMeta({
  title: 'Action',
  preview: {
    title: 'Action 2',
    description: 'For actions and tasks',
    categories: ['layouts'],
    src: '/img/screens/layouts-subpages-action-2.png',
    srcDark: '/img/screens/layouts-subpages-action-2-dark.png',
    order: 86,
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
            <BaseAvatar
              class="mx-auto"
              size="xl"
              src="/img/avatars/10.svg"
              badge-src="/img/stacks/reactjs.svg"
            />
            <div class="mx-auto mb-4 max-w-xs text-center">
              <BaseHeading as="h2" size="md" weight="medium" class="mt-4">
                Kendra W. has invited you to the
                <span class="text-primary-500">Banking Solution Website</span>
                project.
              </BaseHeading>
            </div>
            <div class="mx-auto max-w-sm">
              <BaseCard elevated class="p-6">
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400 mb-2 !text-[0.65rem] uppercase"
                >
                  Message from Kendra
                </BaseHeading>
                <BaseParagraph
                  size="xs"
                  class="text-muted-500 dark:text-muted-400"
                >
                  Hey Maya, It would be really cool if you could give us a hand
                  on this project. There are a lot of tasks popping out every
                  day and I feel the team is getting a bit overwhelmed. We'd
                  love to have you on board.
                </BaseParagraph>
              </BaseCard>
              <div class="mt-6 flex items-center justify-center gap-3">
                <BaseAvatar
                  src="/img/avatars/25.svg"
                  size="xs"
                  data-tooltip="Melany L."
                />
                <BaseAvatar
                  size="xs"
                  text="OD"
                  data-tooltip="Oliver D."
                  :class="getRandomColor()"
                />
                <BaseAvatar
                  src="/img/avatars/16.svg"
                  size="xs"
                  data-tooltip="Hermann M."
                />
              </div>
              <div class="mt-2 text-center">
                <BaseText size="xs" class="text-muted-400">
                  And 5 others are members of this project
                </BaseText>
              </div>
              <div class="mt-6 flex items-center justify-between gap-2">
                <BaseButton class="w-full">Decline</BaseButton>
                <BaseButton color="primary" class="w-full">Accept</BaseButton>
              </div>
            </div>
          </div>
          <div>
            <div class="flex flex-col p-8">
              <BaseHeading tag="h2" size="md" weight="medium" class="mt-4">
                Additional Instructions
              </BaseHeading>
              <BaseText
                size="xs"
                class="text-muted-500 dark:text-muted-400 max-w-xs"
              >
                Please read the following instructions carefully before
                accepting the invitation.
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
                        Project Summary
                      </BaseHeading>
                      <BaseText
                        size="xs"
                        class="text-muted-500 dark:text-muted-400 max-w-[210px]"
                      >
                        Please read the project summary. You'll find it in your
                        inbox
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
                        UI Review
                      </BaseHeading>
                      <BaseText
                        size="xs"
                        class="text-muted-500 dark:text-muted-400 max-w-[210px]"
                      >
                        Please review the latest wireframes the team has
                        provided
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
                        Schedule
                      </BaseHeading>
                      <BaseText
                        size="xs"
                        class="text-muted-500 dark:text-muted-400 max-w-[210px]"
                      >
                        Please schedule a meeting with the team so they can ramp
                        you up.
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
