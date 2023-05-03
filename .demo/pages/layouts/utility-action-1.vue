<script setup lang="ts">
definePageMeta({
  title: 'Action',
  preview: {
    title: 'Action 1',
    description: 'For actions and tasks',
    categories: ['layouts'],
    src: '/img/screens/layouts-subpages-action-1.png',
    srcDark: '/img/screens/layouts-subpages-action-1-dark.png',
    order: 85,
  },
})
</script>

<template>
  <div class="flex items-center justify-center py-8">
    <div class="mx-auto w-full max-w-md">
      <BaseCard class="p-6">
        <div class="flex flex-col py-2">
          <BaseAvatar
            class="mx-auto"
            size="xl"
            src="/img/avatars/10.svg"
            badge-src="/img/stacks/reactjs.svg"
          />
          <div class="mx-auto mb-4 max-w-xs text-center">
            <BaseHeading tag="h2" size="md" weight="medium" class="mt-4">
              Kendra W. has invited you to the
              <span class="text-primary-500">Banking Solution Website</span>
              project.
            </BaseHeading>
          </div>
          <div class="mx-auto max-w-sm">
            <BaseCard elevated class="p-6">
              <BaseHeading
                tag="h3"
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
                Hey Maya, It would be really cool if you could give us a hand on
                this project. There are a lot of tasks popping out every day and
                I feel the team is getting a bit overwhelmed. We'd love to have
                you on board.
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
      </BaseCard>
    </div>
  </div>
</template>
