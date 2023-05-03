<script setup lang="ts">
definePageMeta({
  title: 'Notifications',
  preview: {
    title: 'Notifications',
    description: 'For displaying account notifications',
    categories: ['layouts', 'profile'],
    src: '/img/screens/layouts-subpages-notifications.png',
    srcDark: '/img/screens/layouts-subpages-notifications-dark.png',
    order: 80,
  },
})

const { data, pending, error, refresh } = await useFetch(
  '/api/profile/notifications',
)

const notifications = ref()

if (data.value) {
  notifications.value = data.value
}
</script>

<template>
  <div class="min-h-screen overflow-hidden">
    <div class="mx-auto w-full max-w-4xl pt-12">
      <div v-if="notifications.length === 0"></div>
      <div v-else class="">
        <div
          v-for="item in notifications"
          :key="item.id"
          class="ltablet:after:start-[104px] after:border-muted-300 dark:after:border-muted-800 relative flex items-center gap-4 after:absolute after:start-[8px] after:top-3 after:h-full after:w-px after:border-e-2 after:content-[''] lg:after:start-[104px] [&:not(:first-child)]:pt-3"
        >
          <div class="ltablet:block hidden w-24 text-right lg:block">
            <BaseText size="xs" class="text-muted-400">
              {{ item.date }}
            </BaseText>
          </div>
          <div
            class="dark:bg-muted-800 relative z-10 h-4 w-4 shrink-0 rounded-full bg-white"
          >
            <div
              class="h-4 w-4 rounded-full border-2 border-current"
              :class="getRandomColor()"
            ></div>
          </div>

          <BaseCard class="p-4">
            <div class="flex w-full items-center gap-4">
              <div
                class="h-2 w-2 shrink-0 rounded-full"
                :class="
                  item.status === 0
                    ? 'bg-primary-500'
                    : 'bg-muted-300 dark:bg-muted-700/50'
                "
              ></div>
              <BaseAvatar :src="item.user.src" size="sm" />
              <div>
                <BaseText size="sm" lead="tight">
                  <span class="text-muted-800 dark:text-muted-100"
                    >{{ item.user.name }}&nbsp;</span
                  >
                  <span class="text-muted-500 dark:text-muted-400"
                    >{{ item.target.text }}&nbsp;</span
                  >
                  <NuxtLink
                    :to="item.target.url"
                    class="text-primary-500 underline-offset-4 hover:underline"
                    >{{ item.target.name }}</NuxtLink
                  >
                  <span class="text-muted-500 dark:text-muted-400"
                    >&nbsp;{{ item.target.type }}</span
                  >
                </BaseText>
                <BaseText size="xs" class="text-muted-400">
                  <span class="ltablet:hidden lg:hidden">{{ item.date }}</span>
                  <span class="ltablet:hidden px-2 lg:hidden">&middot;</span>
                  <span>{{ item.time }}</span>
                </BaseText>
              </div>
              <div class="ms-auto hidden items-center gap-3 sm:flex">
                <BaseAvatar
                  v-for="user in item.people"
                  :key="user.name"
                  :src="user.src"
                  size="xxs"
                />
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
