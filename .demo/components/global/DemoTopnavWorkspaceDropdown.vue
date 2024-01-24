<script setup lang="ts">
const workspaces = ref([
  {
    id: 1,
    name: 'Nitro Inc.',
    logo: '/img/icons/logos/nitro.svg',
  },
  {
    id: 2,
    name: 'Okano LLC',
    logo: '/img/icons/logos/okano.svg',
  },
  {
    id: 3,
    name: 'Flashlite LLC',
    logo: '/img/icons/logos/flashlite.svg',
  },
])

const selectedWorkspace = ref(workspaces.value[0])
const target = ref(null)
const open = ref(false)

function openDropdown() {
  open.value = true
}

onClickOutside(target, () => (open.value = false))

function setWorkspace(workspace: any) {
  selectedWorkspace.value = workspace
  open.value = false
}
</script>

<template>
  <div
    ref="target"
    class="group/workspace relative z-10 ms-auto w-full max-w-[170px] md:ms-0 md:max-w-[240px]"
  >
    <button
      type="button"
      class="group-hover/workspace:bg-muted-100 dark:group-hover/workspace:bg-muted-900/60 w-full max-w-[170px] rounded-xl py-2 pe-3 ps-2 transition-colors duration-300 md:max-w-[240px]"
      :class="open && 'bg-muted-100 dark:bg-muted-900/60'"
      @click="openDropdown()"
    >
      <span class="flex w-full items-center gap-3 text-start">
        <BaseAvatar size="xxs" :src="selectedWorkspace.logo" />
        <div>
          <BaseText
            size="sm"
            class="text-muted-800 dark:text-muted-200 line-clamp-1 block"
          >
            {{ selectedWorkspace.name }}
          </BaseText>
        </div>
        <Icon
          name="lucide:chevrons-up-down"
          class="text-muted-400 ms-auto size-4 transition-transform duration-300"
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
      <!--Menu-->
      <div
        v-if="open"
        class="border-muted-200 dark:border-muted-800 dark:bg-muted-950 shadow-muted-400/10 dark:shadow-muted-800/10 absolute end-0 top-12 w-full min-w-[280px] overflow-hidden rounded-xl border bg-white shadow-xl md:start-0 md:min-w-[575px]"
      >
        <div
          class="md:divide-muted-200 md:dark:divide-muted-700 grid grid-cols-1 md:grid-cols-2 md:divide-x"
        >
          <div>
            <div
              class="border-muted-200 dark:border-muted-700 flex items-center border-b"
            >
              <BaseInput
                icon="lucide:search"
                placeholder="Find a team..."
                :classes="{
                  input: 'border-none !outline-none !bg-transparent',
                }"
              />
              <button
                type="button"
                class="border-muted-200 dark:border-muted-700 me-2 ms-auto rounded-lg border px-2 py-1"
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
              <div class="my-3">
                <ul class="space-y-1">
                  <li v-for="workspace in workspaces" :key="workspace.id">
                    <button
                      type="button"
                      class="hover:bg-muted-100 dark:hover:bg-muted-800 flex w-full items-center gap-2 rounded-lg py-2 pe-4 ps-2 transition-colors duration-200"
                      @click="setWorkspace(workspace)"
                    >
                      <BaseAvatar size="xxs" :src="workspace.logo" />
                      <BaseText size="sm">
                        {{ workspace.name }}
                      </BaseText>
                      <Icon
                        v-if="selectedWorkspace === workspace"
                        name="lucide:check"
                        class="text-primary-500 ms-auto size-4"
                      />
                    </button>
                  </li>
                </ul>
              </div>
              <div class="mt-auto">
                <BaseButton rounded="md" class="w-full">
                  <Icon name="lucide:plus" class="size-4" />
                  <span>Create Workspace</span>
                </BaseButton>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div
              class="border-muted-200 dark:border-muted-700 flex items-center border-b"
            >
              <BaseInput
                icon="lucide:search"
                placeholder="Find project..."
                :classes="{
                  input: 'border-none !outline-none !bg-transparent',
                }"
              />
              <button
                type="button"
                class="border-muted-200 dark:border-muted-700 me-2 ms-auto rounded-lg border px-2 py-1"
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
              <div class="my-3">
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
                <BaseButton rounded="md" class="w-full">
                  <Icon name="lucide:plus" class="size-4" />
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
