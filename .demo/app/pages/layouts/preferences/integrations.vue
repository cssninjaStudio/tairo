<script setup lang="ts">
definePageMeta({
  title: 'Integrations',
  preview: {
    title: 'Preferences - Integrations',
    description: 'For account management',
    categories: ['layouts', 'settings'],
    src: '/img/screens/layouts-preferences-integrations.png',
    srcDark: '/img/screens/layouts-preferences-integrations-dark.png',
    order: 87,
    new: true,
  },
})

const integrations = [
  {
    name: 'Mailchimp',
    description: 'Lorem ipsum dolor sit amet, consectetur adipis.',
    icon: 'logos:mailchimp-freddie',
  },
  {
    name: 'Zapier',
    description: 'Lorem ipsum dolor sit amet, consectes.',
    icon: 'logos:zapier-icon',
  },
  {
    name: 'Telegram',
    description: 'Lorem ipsum dolor sit amet.',
    icon: 'logos:telegram',
  },
  {
    name: 'Slack',
    description: 'Lorem ipsum dolor sit amet, consectetur adipis.',
    icon: 'logos:slack-icon',
  },
  {
    name: 'Dropbox',
    description: 'Lorem ipsum dolor sit amet adipis.',
    icon: 'logos:dropbox',
  },
]
</script>

<template>
  <div class="mt-8 dark:[--color-input-default-bg:var(--color-muted-950)]">
    <div class="border-primary-500 bg-primary-500/10 rounded-2xl border-2">
      <div class="p-4">
        <div class="gap-6 md:flex md:items-center md:justify-between">
          <BaseAvatar
            rounded="none"
            mask="blob"
            src="/img/avatars/15.svg"
            size="lg"
          />
          <div class="max-w-xs flex-1">
            <BaseParagraph weight="semibold" class="text-primary-700 dark:text-primary-400">
              Learn how to connect to our API
            </BaseParagraph>
            <BaseParagraph
              size="sm"
              class="text-primary-600 dark:text-primary-300"
            >
              We've put together a nice and simple tutorial.
            </BaseParagraph>
          </div>

          <div class="mt-6 flex items-center justify-start gap-3 md:ms-auto md:mt-0 md:justify-end md:space-x-reverse">
            <BaseButton rounded="md">
              Dismiss
            </BaseButton>
            <BaseButton
              variant="primary"
              rounded="md"
            >
              View Tutorial
            </BaseButton>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 sm:flex sm:items-center sm:justify-between">
      <div class="space-y-1">
        <BaseHeading
          as="h4"
          size="md"
          weight="medium"
          class="text-muted-900 text-base font-bold dark:text-white"
        >
          Connected integrations
        </BaseHeading>
        <BaseParagraph
          size="sm"
          weight="medium"
          class="text-muted-500 dark:text-muted-400"
        >
          View and manager your connected integrations.
        </BaseParagraph>
      </div>

      <TairoInput
        icon="lucide:search"
        rounded="md"
        placeholder="Search integrations..."
        class="mt-4 sm:mt-0"
      />
    </div>

    <div class="mt-8 flow-root">
      <div class="divide-muted-200 dark:divide-muted-700 -my-5 divide-y">
        <div
          v-for="integration in integrations"
          :key="integration.name"
          class="py-5"
        >
          <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
            <div class="flex min-w-0 flex-1 items-center">
              <div class="dark:bg-muted-950 border-muted-300 dark:border-muted-800 mb-3 flex size-12 items-center justify-center rounded-xl border bg-white">
                <div class="bg-muted-100 dark:bg-muted-800 flex size-10 items-center justify-center rounded-lg">
                  <Icon :name="integration.icon" class="text-muted-500 dark:text-muted-400 group-hover/chain:text-primary-500 dark:group-hover/chain:text-primary-500 size-6 transition-colors duration-500" />
                </div>
              </div>
              <div class="ms-4 min-w-0 flex-1 space-y-1">
                <BaseParagraph
                  size="sm"
                  weight="semibold"
                  class="text-muted-900 dark:text-muted-100 truncate"
                >
                  {{ integration.name }}
                </BaseParagraph>
                <BaseParagraph
                  size="xs"
                  weight="medium"
                  class="text-muted-500 dark:text-muted-400"
                >
                  {{ integration.description }}
                </BaseParagraph>
              </div>
            </div>

            <div class="mt-4 flex items-center justify-between ps-14 sm:mt-0 sm:justify-end sm:space-x-6 sm:ps-0">
              <BaseButton size="sm">
                Learn More
              </BaseButton>

              <BaseSwitchBall />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
