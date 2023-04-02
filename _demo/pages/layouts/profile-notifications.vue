<script setup lang="ts">
definePageMeta({
  title: 'Notifications',
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
    <div class="w-full max-w-4xl mx-auto pt-12">
      <div v-if="notifications.length === 0"></div>
      <div v-else class="">
        <div
          v-for="item in notifications"
          :key="item.id"
          class="[&:not(:first-child)]:pt-3 relative flex items-center gap-4 after:content-[''] after:absolute after:top-3 after:start-[8px] ltablet:after:start-[104px] lg:after:start-[104px] after:w-px after:h-full after:border-e-2 after:border-muted-300 dark:after:border-muted-800"
        >
          <div class="hidden ltablet:block lg:block w-24 text-right">
            <BaseText size="xs" class="text-muted-400">
              {{ item.date }}
            </BaseText>
          </div>
          <div
            class="relative z-10 shrink-0 h-4 w-4 rounded-full bg-white dark:bg-muted-800"
          >
            <div
              class="h-4 w-4 rounded-full border-2 border-current"
              :class="getRandomColor()"
            ></div>
          </div>

          <BaseCard class="p-4">
            <div class="w-full flex items-center gap-4">
              <div
                class="h-2 w-2 rounded-full shrink-0"
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
                  <span class="px-2 ltablet:hidden lg:hidden">&middot;</span>
                  <span>{{ item.time }}</span>
                </BaseText>
              </div>
              <div class="hidden sm:flex items-center gap-3 ms-auto">
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
