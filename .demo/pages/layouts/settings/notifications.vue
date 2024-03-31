<script setup lang="ts">
definePageMeta({
  title: 'Notifications',
  preview: {
    title: 'Notifications',
    description: 'For settings management',
    categories: ['layouts', 'settings'],
    src: '/img/screens/layouts-settings-notifications.png',
    srcDark: '/img/screens/layouts-settings-notifications-dark.png',
    order: 37,
    new: true,
  },
})

const incoming = ref(true)
const outgoing = ref(false)
const failed = ref(false)
const uncashed = ref(false)
const payments = ref(true)
const low = ref(true)
const features = ref(true)
const offers = ref(true)
</script>

<template>
  <div class="divide-muted-200 dark:divide-muted-800 space-y-20 py-6">
    <!--Statements-->
    <div class="grid gap-8 md:grid-cols-12">
      <!--Column-->
      <div class="md:col-span-4">
        <BaseHeading
          as="h3"
          size="md"
          weight="medium"
          class="text-muted-800 dark:text-muted-100 mb-1"
        >
          Account activity
        </BaseHeading>
        <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
          Customize what email notifications you want to receive about
          transactions on your account.
        </BaseParagraph>
      </div>
      <!--Column-->
      <div class="md:col-span-8">
        <BaseHeading
          as="h3"
          size="xs"
          weight="medium"
          class="border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 border-b px-4 pb-4"
        >
          Activity
        </BaseHeading>
        <div
          class="divide-muted-200 dark:divide-muted-800 flex flex-col divide-y"
        >
          <!--Item-->
          <div class="group">
            <div
              class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
            >
              <BaseSwitchThin v-model="incoming" />
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Incoming
                </BaseHeading>
                <BaseText size="sm">
                  Incoming transactions
                </BaseText>
              </div>
            </div>
          </div>
          <!--Item-->
          <div class="group">
            <div
              class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
            >
              <BaseSwitchThin v-model="outgoing" />
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Outgoing
                </BaseHeading>
                <BaseText size="sm">
                  Outgoing transactions
                </BaseText>
              </div>
            </div>
          </div>
          <!--Item-->
          <div class="group">
            <div
              class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
            >
              <BaseSwitchThin v-model="failed" />
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Failed
                </BaseHeading>
                <BaseText size="sm">
                  Failed transactions
                </BaseText>
              </div>
            </div>
          </div>
          <!--Item-->
          <div class="group">
            <div
              class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
            >
              <BaseSwitchThin v-model="uncashed" />
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Uncashed
                </BaseHeading>
                <BaseText size="sm">
                  Uncashed cheques
                </BaseText>
              </div>
            </div>
          </div>
          <!--Item-->
          <div class="group">
            <div
              class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
            >
              <BaseSwitchThin v-model="payments" />
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Payments
                </BaseHeading>
                <BaseText size="sm">
                  Payment requests
                </BaseText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Balance-->
    <div class="grid gap-8 md:grid-cols-12">
      <!--Column-->
      <div class="md:col-span-4">
        <BaseHeading
          as="h3"
          size="md"
          weight="medium"
          class="text-muted-800 dark:text-muted-100 mb-1"
        >
          Low balance
        </BaseHeading>
        <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
          We’ll email you when the balance on one of your accounts drops below
          the amount you set in your account.
        </BaseParagraph>
      </div>
      <!--Column-->
      <div class="md:col-span-8">
        <BaseHeading
          as="h3"
          size="xs"
          weight="medium"
          class="border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 border-b px-4 pb-4"
        >
          Low balance
        </BaseHeading>
        <div
          class="divide-muted-200 dark:divide-muted-800 flex flex-col divide-y"
        >
          <!--Item-->
          <div class="group">
            <div
              class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
            >
              <BaseSwitchThin v-model="low" />
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Low alert
                </BaseHeading>
                <BaseText size="sm">
                  Balance drops under $200.00
                </BaseText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Updates-->
    <div class="grid gap-8 md:grid-cols-12">
      <!--Column-->
      <div class="md:col-span-4">
        <BaseHeading
          as="h3"
          size="md"
          weight="medium"
          class="text-muted-800 dark:text-muted-100 mb-1"
        >
          Tairo updates
        </BaseHeading>
        <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
          Stay up to date on cool new product features or events you might like.
        </BaseParagraph>
      </div>
      <!--Column-->
      <div class="md:col-span-8">
        <BaseHeading
          as="h3"
          size="xs"
          weight="medium"
          class="border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 border-b px-4 pb-4"
        >
          Updates
        </BaseHeading>
        <div
          class="divide-muted-200 dark:divide-muted-800 flex flex-col divide-y"
        >
          <!--Item-->
          <div class="group">
            <div
              class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
            >
              <BaseSwitchThin v-model="features" />
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Features
                </BaseHeading>
                <BaseText size="sm">
                  New feature
                </BaseText>
              </div>
            </div>
          </div>
          <!--Item-->
          <div class="group">
            <div
              class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
            >
              <BaseSwitchThin v-model="offers" />
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Offers
                </BaseHeading>
                <BaseText size="sm">
                  Special offers
                </BaseText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
