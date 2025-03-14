<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const workspaces = ref([
  {
    id: 1,
    name: 'Business',
    logo: '/img/avatars/10.svg',
  },
  {
    id: 2,
    name: 'Help Desk',
    logo: '/img/avatars/25.svg',
  },
  {
    id: 3,
    name: 'Innovation',
    logo: '/img/avatars/22.svg',
  },
])

const selectedWorkspace = ref(workspaces.value[0])
const target = ref(null)
const open = ref(false)

function toggleDropdown() {
  open.value = !open.value
}

onClickOutside(
  target,
  () => {
    open.value = false
  },
)

function setWorkspace(workspace: any) {
  selectedWorkspace.value = workspace
  open.value = false
}
</script>

<template>
  <div
    ref="target"
    class="group/workspace relative z-10 w-full"
  >
    <button
      type="button"
      class="w-full max-w-[170px] rounded-lg py-1.5 pe-3 ps-2 border border-muted-200 dark:border-muted-800 transition-colors duration-300 group-hover/workspace:bg-muted-100 dark:group-hover/workspace:bg-muted-900/60 md:max-w-[240px]"
      :class="open && 'bg-muted-100 dark:bg-muted-900/60'"
      @click="toggleDropdown()"
    >
      <span class="flex w-full items-center gap-3 text-start">
        <BaseAvatar
          size="xxs"
          :src="selectedWorkspace?.logo"
        />
        <div>
          <BaseText
            size="sm"
            class="line-clamp-1 block text-muted-800 dark:text-muted-200"
          >
            {{ selectedWorkspace?.name }}
          </BaseText>
        </div>
        <Icon
          name="lucide:chevrons-up-down"
          class="ms-auto size-4 text-muted-400 transition-transform duration-300"
          :class="open && 'rotate-180'"
        />
      </span>
    </button>
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="open"
        class="absolute end-0 top-12 w-full min-w-[280px] overflow-hidden rounded-xl border border-muted-200 bg-white shadow-xl shadow-muted-400/10 dark:border-muted-800 dark:bg-muted-950 dark:shadow-muted-800/10 md:start-0 md:min-w-[575px]"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-muted-200 md:dark:divide-muted-800">
          <div>
            <div class="font-sans flex items-center border-b border-muted-200 dark:border-muted-800">
              <div class="shrink-0 size-8 flex items-center justify-center">
                <Icon
                  name="lucide:search"
                  class="size-4 text-muted-400 dark:text-muted-100"
                />
              </div>
              <input
                type="text"
                class="h-10 px-2 w-full border-none outline-none bg-transparent text-sm text-muted-700 dark:text-muted-100"
                placeholder="Find workspace..."
              >
              <button
                type="button"
                class="me-2 ms-auto rounded-lg border border-muted-200 px-2 py-0.5 dark:border-muted-800"
              >
                <BaseText size="xs">
                  Esc
                </BaseText>
              </button>
            </div>
            <div class="flex h-[calc(100%_-_2.5rem)] flex-col p-3">
              <BaseHeading
                as="h4"
                size="sm"
                weight="medium"
                class="text-muted-400"
              >
                Workspaces
              </BaseHeading>
              <div class="my-3 xs:nui-slimscroll xs:max-h-[128px] xs:min-h-[128px]">
                <ul class="space-y-1">
                  <li
                    v-for="workspace in workspaces"
                    :key="workspace.id"
                  >
                    <button
                      type="button"
                      class="flex w-full items-center gap-2 rounded-lg py-2 pe-4 ps-2 transition-colors duration-200 hover:bg-muted-100 dark:hover:bg-muted-800"
                      @click="setWorkspace(workspace)"
                    >
                      <BaseAvatar
                        size="xxs"
                        :src="workspace.logo"
                      />
                      <BaseText size="sm">
                        {{ workspace.name }}
                      </BaseText>
                      <Icon
                        v-if="selectedWorkspace === workspace"
                        name="lucide:check"
                        class="ms-auto size-4 text-muted-900 dark:text-muted-100"
                      />
                    </button>
                  </li>
                </ul>
              </div>
              <div class="mt-auto">
                <BaseButton
                  rounded="md"
                  class="w-full"
                >
                  <Icon
                    name="lucide:plus"
                    class="size-4"
                  />
                  <span>Create Workspace</span>
                </BaseButton>
              </div>
            </div>
          </div>
          <div class="block">
            <div class="font-sans flex items-center border-b border-muted-200 dark:border-muted-800">
              <div class="shrink-0 size-8 flex items-center justify-center">
                <Icon
                  name="lucide:search"
                  class="size-4 text-muted-400 dark:text-muted-100"
                />
              </div>
              <input
                type="text"
                class="h-10 px-2 w-full border-none outline-none bg-transparent text-sm text-muted-700 dark:text-muted-100"
                placeholder="Find project..."
              >
              <button
                type="button"
                class="me-2 ms-auto rounded-lg border border-muted-200 px-2 py-0.5 dark:border-muted-800"
              >
                <BaseText size="xs">
                  Esc
                </BaseText>
              </button>
            </div>
            <div class="flex h-[calc(100%_-_2.5rem)] flex-col p-3">
              <BaseHeading
                as="h4"
                size="sm"
                weight="medium"
                class="text-muted-400"
              >
                Projects
              </BaseHeading>
              <div class="my-3 xs:nui-slimscroll xs:max-h-[128px] xs:min-h-[128px]">
                <ul>
                  <li>
                    <div>
                      <BaseHeading
                        size="sm"
                        weight="medium"
                      >
                        No projects yet
                      </BaseHeading>
                      <BaseParagraph
                        size="xs"
                        class="text-muted-400"
                      >
                        This workspace has no projects.
                      </BaseParagraph>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mt-auto">
                <BaseButton
                  rounded="md"
                  variant="dark"
                  class="w-full"
                >
                  <Icon
                    name="lucide:plus"
                    class="size-4"
                  />
                  <span>Create Project</span>
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
