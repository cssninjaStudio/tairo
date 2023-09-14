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
    class="relative w-full z-10 group/workspace max-w-[170px] md:max-w-[240px] ms-auto md:ms-0"
  >
    <button
      type="button"
      class="w-full py-2 ps-2 pe-3 group-hover/workspace:bg-muted-100 dark:group-hover/workspace:bg-muted-900/60 rounded-xl max-w-[170px] md:max-w-[240px] transition-colors duration-300"
      :class="open && 'bg-muted-100 dark:bg-muted-900/60'"
      @click="openDropdown()"
    >
      <span class="w-full flex items-center gap-3 text-start">
        <BaseAvatar size="xxs" :src="selectedWorkspace.logo" />
        <div>
          <BaseText
            size="sm"
            class="block text-muted-800 dark:text-muted-200 line-clamp-1"
          >
            {{ selectedWorkspace.name }}
          </BaseText>
        </div>
        <Icon
          name="lucide:chevrons-up-down"
          class="w-4 h-4 ms-auto text-muted-400 transition-transform duration-300"
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
        class="absolute overflow-hidden min-w-[280px] md:min-w-[575px] top-12 end-0 md:start-0 w-full rounded-xl border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950 shadow-xl shadow-muted-400/10 dark:shadow-muted-800/10"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-muted-200 md:dark:divide-muted-700"
        >
          <div>
            <div
              class="flex items-center border-b border-muted-200 dark:border-muted-700"
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
                class="px-2 py-1 rounded-lg border border-muted-200 dark:border-muted-700 ms-auto me-2"
              >
                <BaseText size="xs">Esc</BaseText>
              </button>
            </div>
            <div class="p-3 flex flex-col h-[calc(100%_-_2.5rem)]">
              <BaseHeading
                as="h4"
                size="sm"
                weight="medium"
                class="text-muted-400"
                >Workspaces</BaseHeading
              >
              <div class="my-3">
                <ul class="space-y-1">
                  <li v-for="workspace in workspaces" :key="workspace.id">
                    <button
                      type="button"
                      class="flex items-center gap-2 py-2 ps-2 pe-4 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-800 w-full transition-colors duration-200"
                      @click="setWorkspace(workspace)"
                    >
                      <BaseAvatar size="xxs" :src="workspace.logo" />
                      <BaseText size="sm">{{ workspace.name }}</BaseText>
                      <Icon
                        v-if="selectedWorkspace === workspace"
                        name="lucide:check"
                        class="w-4 h-4 text-primary-500 ms-auto"
                      />
                    </button>
                  </li>
                </ul>
              </div>
              <div class="mt-auto">
                <BaseButton shape="smooth" class="w-full">
                  <Icon name="lucide:plus" class="w-4 h-4" />
                  <span>Create Workspace</span>
                </BaseButton>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div
              class="flex items-center border-b border-muted-200 dark:border-muted-700"
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
                class="px-2 py-1 rounded-lg border border-muted-200 dark:border-muted-700 ms-auto me-2"
              >
                <BaseText size="xs">Esc</BaseText>
              </button>
            </div>
            <div class="p-3 flex flex-col h-[calc(100%_-_2.5rem)]">
              <BaseHeading
                as="h4"
                size="sm"
                weight="medium"
                class="text-muted-400"
                >Projects</BaseHeading
              >
              <div class="my-3">
                <ul>
                  <li>
                    <div>
                      <BaseHeading size="sm" weight="medium"
                        >No projects yet</BaseHeading
                      >
                      <BaseParagraph size="xs" class="text-muted-400"
                        >This workspace has no projects.</BaseParagraph
                      >
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mt-auto">
                <BaseButton shape="smooth" class="w-full">
                  <Icon name="lucide:plus" class="w-4 h-4" />
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
