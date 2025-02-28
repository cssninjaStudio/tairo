<script setup lang="ts">
const actions = ref([
  {
    id: 1,
    user: 'Helen Mariakis',
    avatar: '/img/avatars/12.svg',
    action: 'left a comment',
    time: '1 hour ago',
  },
  {
    id: 2,
    user: 'Clarissa Perez',
    avatar: '/img/avatars/19.svg',
    action: 'uploaded a file',
    time: '2 hours ago',
  },
  {
    id: 3,
    user: 'Mike Miller',
    avatar: '/img/avatars/3.svg',
    action: 'left a comment',
    time: '3 hours ago',
  },
  {
    id: 4,
    user: 'Lana Henriks',
    avatar: '/img/avatars/4.svg',
    action: 'sent you a message',
    time: 'Yesterday',
  },
  {
    id: 5,
    user: ' Dan Walker',
    avatar: '/img/avatars/8.svg',
    action: 'left a comment',
    time: 'Yesterday',
  },
])
</script>

<template>
  <div class="group inline-flex items-center justify-center text-right">
    <DropdownMenuRoot>
      <DropdownMenuTrigger class="group-hover:ring-muted-200 dark:group-hover:ring-muted-700 dark:ring-offset-muted-900 inline-flex size-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4">
        <span
          class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex size-9 items-center justify-center rounded-full border bg-white"
        >
          <Icon name="ph:bell-duotone" class="text-muted-400 size-5" />
        </span>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent
          align="end"
          side="bottom"
          class="divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute end-0 mt-2 w-72 origin-top-right divide-y rounded-md border bg-white shadow-lg focus:outline-none origin-top-right starting:scale-95 starting:opacity-0 transition-all duration-100"
        >
          <div class="p-4">
            <div class="relative flex items-center justify-between">
              <h4
                class="font-heading text-muted-500 dark:text-muted-200 text-xs uppercase"
              >
                Notifications
              </h4>
              <NuxtLink
                to="#"
                class="font-alt text-primary-500 text-sm font-semibold"
              >
                View All
              </NuxtLink>
            </div>
          </div>
          <div class="p-4">
            <DropdownMenuItem v-for="item in actions" :key="item.id">
              <NuxtLink
                to="#"
                class="group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300 in-data-highlighted:bg-muted-100 in-data-highlighted:dark:bg-muted-700 in-data-highlighted:text-primary-500 text-muted-500"
              >
                <div
                  class="relative inline-flex size-9 items-center justify-center rounded-full"
                >
                  <img
                    :src="item.avatar"
                    class="max-w-full rounded-full object-cover shadow-xs dark:border-transparent"
                    alt=""
                  >
                </div>
                <div class="ms-2">
                  <h6
                    class="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white"
                  >
                    {{ item.user }}
                    <span
                      class="text-muted-500 dark:text-muted-400 font-normal"
                    >
                      {{ item.action }}
                    </span>
                  </h6>
                  <p class="text-muted-400 font-sans text-xs">
                    {{ item.time }}
                  </p>
                </div>
              </NuxtLink>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  </div>
</template>
