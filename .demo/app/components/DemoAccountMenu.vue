<script setup lang="ts">
const props = defineProps<{
  horizontal?: boolean
}>()
</script>

<template>
  <div class="group inline-flex items-center justify-center text-end">
    <DropdownMenuRoot>
      <DropdownMenuTrigger class="group-hover:ring-primary-500 dark:ring-offset-muted-800 inline-flex size-10 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4">
        <div
          class="relative inline-flex size-10 items-center justify-center rounded-full"
        >
          <img
            src="/img/avatars/10.svg"
            class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
            alt=""
          >
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuPortal disabled>
        <DropdownMenuContent
          :side="props.horizontal ? 'bottom' : 'right'"
          :side-offset="5"
          align="end"
          class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 mt-2 w-60 origin-bottom-right rounded-md border bg-white text-start shadow-lg focus:outline-none"
        >
          <div class="bg-muted-50 dark:bg-muted-700/40 p-6">
            <div class="flex items-center">
              <div
                class="relative inline-flex size-14 items-center justify-center rounded-full"
              >
                <img
                  src="/img/avatars/10.svg"
                  class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                  alt=""
                >
              </div>
              <div class="ms-3">
                <h6
                  class="font-heading text-muted-800 text-sm font-medium dark:text-white"
                >
                  Kendra Wilson
                </h6>
                <p class="text-muted-400 font-sans text-xs">
                  Product Manager
                </p>
              </div>
            </div>
          </div>
          <div class="p-2">
            <DropdownMenuItem as="div">
              <NuxtLink
                to="/layouts/profile"
                class="group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300 in-data-highlighted:bg-muted-100 dark:in-data-highlighted:bg-muted-700 in-data-highlighted:text-primary-500 text-muted-400"
              >
                <Icon name="ph:user-circle-duotone" class="size-5" />
                <div class="ms-3">
                  <h6
                    class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"
                  >
                    Profile
                  </h6>
                  <p class="text-muted-400 font-sans text-xs">
                    View your profile
                  </p>
                </div>
              </NuxtLink>
            </DropdownMenuItem>
            <DropdownMenuItem as="div">
              <NuxtLink
                to="/layouts/projects"
                class="group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300 in-data-highlighted:bg-muted-100 dark:in-data-highlighted:bg-muted-700 in-data-highlighted:text-primary-500 text-muted-400"
              >
                <Icon name="ph:briefcase-duotone" class="size-5" />
                <div class="ms-3">
                  <h6
                    class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"
                  >
                    Projects
                  </h6>
                  <p class="text-muted-400 font-sans text-xs">
                    All my projects
                  </p>
                </div>
              </NuxtLink>
            </DropdownMenuItem>
            <DropdownMenuItem as="div">
              <NuxtLink
                to="/layouts/user-grid-4"
                class="group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300 in-data-highlighted:bg-muted-100 dark:in-data-highlighted:bg-muted-700 in-data-highlighted:text-primary-500 text-muted-400"
              >
                <Icon name="ph:users-three-duotone" class="size-5" />
                <div class="ms-3">
                  <h6
                    class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"
                  >
                    Team
                  </h6>
                  <p class="text-muted-400 font-sans text-xs">
                    Manage my team
                  </p>
                </div>
              </NuxtLink>
            </DropdownMenuItem>
            <DropdownMenuItem as="div">
              <NuxtLink
                to="/layouts/profile-edit"
                class="group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300in-data-highlighted:bg-muted-100 dark:in-data-highlighted:bg-muted-700 in-data-highlighted:text-primary-500 text-muted-400"
              >
                <Icon name="ph:gear-six-duotone" class="size-5" />
                <div class="ms-3">
                  <h6
                    class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"
                  >
                    Settings
                  </h6>
                  <p class="text-muted-400 font-sans text-xs">
                    Account settings
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
