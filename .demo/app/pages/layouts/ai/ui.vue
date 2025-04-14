<script setup lang="ts">
definePageMeta({
  layout: 'empty',
  title: 'Tairo UI Generator',
  preview: {
    title: 'AI Interface',
    description: 'For Ai chat and conversation',
    categories: ['layouts', 'AI interface'],
    src: '/img/screens/layouts-ai-ui.png',
    srcDark: '/img/screens/layouts-ai-ui-dark.png',
    order: 0,
    new: true,
  },
})

interface Conversation {
  text: string
  response: string
  user: {
    name: string
    avatar: string
  }
}

const chatEl = useTemplateRef<HTMLElement>('chatEl')
const isCollapsed = ref(false)
const isMobileOpen = ref(false)
const input = ref('')
const loading = ref(false)
const upgrade = ref(false)

const conversation = ref<Conversation[]>([])

const chats = [
  {
    title: 'Invalid input error',
  },
  {
    title: 'Sticky header design',
  },
  {
    title: 'Onboarding flow',
  },
]

const recentChats = [
  {
    title: 'Generate a sticky header',
  },
  {
    title: 'Build an e-commerce dashboard',
  },
  {
    title: 'Generate a product page',
  },
]

function addMessage() {
  if (input.value) {
    loading.value = true
    conversation.value.push({
      text: input.value,
      response: `<p>
  <span>As an AI assistant focused on web development, I certainly have a strong interest in UI (User Interface) design and implementation! UI is a crucial aspect of web development, and I'm well-equipped to help with various UI-related tasks.</span>
</p>
<p>
  <span>Here are a few reasons why UI is important and interesting in the context of web development:</span>
</p>
<ol>
  <li>
    <span>User Experience: A well-designed UI can greatly enhance the user experience, making websites and applications more intuitive and enjoyable to use.</span>
  </li>
  <li>
    <span>Accessibility: Good UI design considers accessibility, ensuring that websites and apps are usable by people with diverse abilities.</span>
  </li>
  <li>
    <span>Performance: Efficient UI implementations can contribute to better website performance, which is crucial for user satisfaction and SEO.</span>
  </li>
  <li>
    <span>Creativity: UI design allows for creative expression while solving practical problems.</span>
  </li>
</ol>
<p>
  <span>Is there a specific aspect of UI that you're interested in or would like to explore further? I'd be happy to discuss UI design principles, provide code examples for UI components, or help with any UI-related questions you might have!</span>
</p>`,
      user: {
        name: 'You',
        avatar: '/img/avatars/2.svg',
      },
    })
    input.value = ''
    setTimeout(() => {
      loading.value = false
      if (chatEl.value) {
        chatEl.value.scrollTo({
          top: chatEl.value.scrollHeight,
          behavior: 'smooth',
        })
      }
      setTimeout(() => {
        if (chatEl.value) {
          chatEl.value.scrollTo({
            top: chatEl.value.scrollHeight,
            behavior: 'smooth',
          })
        }
        if (conversation.value.length > 2) {
          upgrade.value = true
        }
      }, 600)
    }, 1200)
  }
}

function clearMessages() {
  conversation.value = []
}

function closeUpgrade() {
  upgrade.value = false
}
</script>

<template>
  <div class="dark:bg-muted-900 flex min-h-screen w-full flex-col bg-white sm:flex-row dark:[--color-input-default-bg:var(--color-muted-950)]">
    <!-- Mobile menu -->
    <aside class="absolute z-10 flex h-16 items-center ps-3 lg:hidden">
      <button
        class="text-muted-900 disabled:text-muted-400"
        type="button"
        @click="isMobileOpen = !isMobileOpen"
      >
        <Icon name="lucide:menu" class="size-4 shrink-0 md:size-5" />
        <span class="sr-only">Show Menu</span>
      </button>
    </aside>
    <!-- Sidebar -->
    <aside
      class="group/sidebar bg-muted-50 dark:bg-muted-950 fixed start-0 top-0 z-30 flex h-full transition-all duration-300 lg:relative lg:h-auto [--sidebar-width:231px] [--sidebar-width-collapsed:49px]"
      :class="[
        isCollapsed ? 'w-(--sidebar-width-collapsed)' : 'w-(--sidebar-width)',
        isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
      ]"
    >
      <div
        class="border-muted-200 dark:border-muted-800 fixed inset-y-0 start-0 z-auto flex h-svh flex-col border-r transition-all duration-300"
        :class="isCollapsed ? 'lg:w-(--sidebar-width-collapsed)' : 'w-(--sidebar-width)'"
      >
        <div
          class="flex h-svh flex-1 translate-x-[-0.5px] flex-col transition-all duration-300"
          :class="isCollapsed ? 'w-(--sidebar-width-collapsed)' : 'w-(--sidebar-width)'"
        >
          <div class="relative flex items-center p-2 pb-1">
            <div class="flex items-center gap-2.5">
              <NuxtLink to="/">
                <TairoLogo class="text-primary-500 size-8" />
              </NuxtLink>
            </div>
            <div class="flex-1" />
            <div
              class="absolute z-10 transition-all duration-300 group-hover/sidebar:opacity-100"
              :class="isCollapsed ? 'opacity-0 -start-6 hidden' : 'w-(--sidebar-width) start-[calc(var(--sidebar-width)-(calc(var(--spacing)*10)))] opacity-100'"
            >
              <BaseButton
                size="icon-sm"
                rounded="md"
                @click="isCollapsed = !isCollapsed"
              >
                <Icon name="solar:siderbar-linear" class="size-4" />
              </BaseButton>
            </div>
          </div>
          <div class="transition-sidebar grid w-full min-w-0 p-2">
            <div class="transition-sidebar flex w-full min-w-0 flex-col gap-2">
              <BaseButton
                rounded="md"
                size="sm"
                class="w-full font-medium"
                variant="dark"
                @click="clearMessages"
              >
                <Icon
                  v-if="isCollapsed"
                  name="lucide:plus"
                  class="size-4 shrink-0"
                />
                <span v-else class="whitespace-nowrap">New Chat</span>
              </BaseButton>
              <div class="group relative flex items-center rounded-md">
                <NuxtLink
                  class="group-hover:bg-muted-100 dark:group-hover:bg-muted-800 text-muted-600 dark:text-muted-500 hover:text-muted-900 focus:text-muted-900 dark:hover:text-muted-100 dark:focus:text-muted-100 focus-visible:text-muted-900 dark:focus-visible:text-muted-100 peer relative flex h-8 w-full items-center justify-start! gap-2 overflow-hidden rounded-lg px-2 pe-0! text-start text-sm font-normal transition-all duration-300 focus-visible:pe-10 group-hover:pe-10"
                  :class="isCollapsed ? 'w-8' : ''"
                  to="/layouts/ai/ui"
                >
                  <div class="absolute inset-2 flex w-fit items-center justify-center gap-2 whitespace-nowrap" :class="isCollapsed ? 'start-1.5' : ''">
                    <Icon name="solar:chat-round-call-linear" class="pointer-events-none size-5 shrink-0" />
                    <span>Chat History</span>
                  </div>
                </NuxtLink>
              </div>
              <div class="group relative flex items-center rounded-md">
                <NuxtLink
                  class="group-hover:bg-muted-100 dark:group-hover:bg-muted-800 text-muted-600 dark:text-muted-500 hover:text-muted-900 focus:text-muted-900 dark:hover:text-muted-100 dark:focus:text-muted-100 focus-visible:text-muted-900 dark:focus-visible:text-muted-100 peer relative flex h-8 w-full items-center justify-start! gap-2 overflow-hidden rounded-lg px-2 pe-0! text-start text-sm font-normal transition-all duration-300 focus-visible:pe-10 group-hover:pe-10"
                  :class="isCollapsed ? 'w-8' : ''"
                  to="/layouts/ai/ui"
                >
                  <div class="absolute inset-2 flex w-fit items-center justify-center gap-2 whitespace-nowrap" :class="isCollapsed ? 'start-1.5' : ''">
                    <Icon name="solar:suitcase-lines-linear" class="pointer-events-none size-5 shrink-0" />
                    <span>Projects</span>
                  </div>
                </NuxtLink>
                <Icon
                  name="lucide:plus"
                  class="absolute end-2 top-1/2 size-4 shrink-0 -translate-y-1/2 opacity-0 transition-opacity duration-300"
                  :class="isCollapsed ? 'hidden' : 'group-hover:opacity-100'"
                />
              </div>
              <div class="group relative flex items-center rounded-md">
                <NuxtLink
                  class="group-hover:bg-muted-100 dark:group-hover:bg-muted-800 text-muted-600 dark:text-muted-500 hover:text-muted-900 focus:text-muted-900 dark:hover:text-muted-100 dark:focus:text-muted-100 focus-visible:text-muted-900 dark:focus-visible:text-muted-100 peer relative flex h-8 w-full items-center justify-start! gap-2 overflow-hidden rounded-lg px-2 pe-0! text-start text-sm font-normal transition-all duration-300 focus-visible:pe-10 group-hover:pe-10"
                  :class="isCollapsed ? 'w-8' : ''"
                  to="/layouts/ai/ui"
                >
                  <div class="absolute inset-2 flex w-fit items-center justify-center gap-2 whitespace-nowrap" :class="isCollapsed ? 'start-1.5' : ''">
                    <Icon name="solar:flag-linear" class="pointer-events-none size-5 shrink-0" />
                    <span>Feedback</span>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="flex flex-1 flex-col overflow-auto">
            <div class="grid w-full min-w-0 p-2 transition-all duration-300" :class="isCollapsed ? 'hidden' : ''">
              <div class="text-muted-400 dark:text-muted-300 border-muted-200 dark:border-muted-800 flex h-9 items-center border-t px-2 pt-4 text-[0.8125rem] font-medium transition-all duration-300" :class="isCollapsed ? '-mt-9' : ''">
                Recent Chats
              </div>
              <ul class="mt-3 space-y-1">
                <li
                  v-for="(chat, i) in chats"
                  :key="i"
                  class="group/item relative"
                >
                  <button type="button" class="text-muted-600 group-hover/item:text-muted-900 dark:text-muted-500 dark:group-hover/item:text-muted-200 group-hover/item:bg-muted-100 dark:group-hover/item:bg-muted-800 flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-start font-sans text-sm transition-colors duration-300">
                    <span class="line-clamp-1 pe-4">{{ chat.title }}</span>
                  </button>
                  <div class="absolute end-0 top-0">
                    <BaseDropdown
                      rounded="lg"
                      label="Dropdown"
                      orientation="start"
                      :bindings="{
                        portal: {
                          disabled: true,
                        },
                      }"
                    >
                      <template #button>
                        <button type="button" class="flex size-8 items-center justify-center rounded-lg p-1 opacity-0 transition-all duration-300 group-hover/item:opacity-100">
                          <Icon
                            name="lucide:more-horizontal"
                            class="size-4"
                          />
                        </button>
                      </template>
                      <BaseDropdownItem
                        to="#"
                        title="Share"
                        text="Share this chat"
                        rounded="sm"
                      >
                        <template #start>
                          <Icon name="lucide:share" class="me-2 block size-4" />
                        </template>
                      </BaseDropdownItem>
                      <BaseDropdownItem
                        to="#"
                        title="Rename"
                        text="Rename this chat"
                        rounded="sm"
                      >
                        <template #start>
                          <Icon name="lucide:edit-3" class="me-2 block size-4" />
                        </template>
                      </BaseDropdownItem>
                      <BaseDropdownItem
                        to="#"
                        title="Archive"
                        text="Archive this chat"
                        rounded="sm"
                      >
                        <template #start>
                          <Icon name="lucide:archive" class="me-2 block size-4" />
                        </template>
                      </BaseDropdownItem>
                      <BaseDropdownItem
                        to="#"
                        title="Delete"
                        text="Delete this chat"
                        rounded="sm"
                      >
                        <template #start>
                          <Icon name="lucide:trash-2" class="me-2 block size-4" />
                        </template>
                      </BaseDropdownItem>
                    </BaseDropdown>
                  </div>
                </li>
              </ul>
            </div>
            <div class="transition-sidebar mt-auto grid w-full min-w-0 p-2">
              <BaseButton
                size="icon-sm"
                rounded="md"
                :class="isCollapsed ? 'flex' : 'hidden'"
                @click="isCollapsed = !isCollapsed"
              >
                <Icon name="solar:siderbar-linear" class="size-4" />
              </BaseButton>
            </div>
          </div>
          <div class="flex items-center overflow-hidden p-2 transition-all duration-300">
            <div class="group relative flex items-center rounded-md transition-all duration-300" :class="isCollapsed ? 'w-8' : 'w-full'">
              <NuxtLink
                class="group-hover:bg-muted-100 dark:group-hover:bg-muted-800 text-muted-600 dark:text-muted-500 hover:text-muted-900 focus:text-muted-900 dark:hover:text-muted-100 dark:focus:text-muted-100 focus-visible:text-muted-900 dark:focus-visible:text-muted-100 peer relative flex h-8 items-center justify-start! gap-2 overflow-hidden rounded-lg pe-0! text-start text-sm font-normal transition-all duration-300 focus-visible:pe-10 group-hover:pe-10"
                :class="isCollapsed ? 'w-8' : 'w-full px-2'"
                to="/layouts/ai/ui"
              >
                <div class="absolute inset-2 flex w-fit items-center justify-center gap-2 whitespace-nowrap" :class="isCollapsed ? 'start-2' : ''">
                  <BaseAvatar
                    size="xxs"
                    src="/img/avatars/2.svg"
                    class="relative"
                    :class="isCollapsed ? '-start-1' : ''"
                  />
                  <span>My Account</span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <!-- Main -->
    <main class="relative z-auto min-h-screen grow">
      <div
        class="pointer-events-none absolute inset-0 start-1/2 z-auto flex size-full max-w-screen-2xl -translate-x-1/2 items-center justify-center"
        :class="conversation.length > 0 ? 'opacity-0' : ''"
      >
        <TairoLogoText class="h-16 -translate-y-40 p-2 text-black/5 transition-opacity duration-200 md:-translate-y-36 dark:text-white/5" />
      </div>
      <div class="absolute inset-0 z-auto flex items-center justify-center overflow-hidden sm:p-4">
        <div class="absolute end-5 top-5.5">
          <BaseTag
            size="sm"
            rounded="full"
            class="scale-90 font-medium flex gap-1"
          >
            <Icon name="mingcute:sparkles-fill" class="size-4 shrink-0 text-yellow-400" />
            <span>Public Beta</span>
          </BaseTag>
        </div>
        <div class="absolute end-32 top-[1.35rem] scale-75">
          <BaseThemeSwitch />
        </div>
        <!-- Content -->
        <div
          class="absolute z-20 flex min-h-[285px] w-full flex-col items-stretch justify-start sm:min-h-[270px]"
          :class="conversation.length === 0 ? 'top-1/2 -translate-y-1/2' : 'top-0 h-screen'"
        >
          <div v-if="conversation.length > 0" class="dark:bg-muted-900 flex h-16 items-center justify-between bg-white px-6">
            <div class="flex items-center gap-3">
              <button
                type="button"
                class="font-sans text-sm font-medium underline-offset-4 hover:underline"
                @click="clearMessages"
              >
                New Chat
              </button>
              <BaseTag
                size="sm"
                rounded="full"
                class="scale-90 font-medium flex gap-1 items-center justify-center"
              >
                <Icon name="solar:lock-keyhole-minimalistic-unlocked-bold" class="size-3 shrink-0" />
                <span>Private</span>
              </BaseTag>
            </div>
            <div class="flex items-center gap-3">
              <div class="scale-75">
                <BaseThemeSwitch />
              </div>
              <BaseDropdown
                rounded="lg"
                label="Dropdown"
                orientation="start"
                class="group/dropdown"
              >
                <template #button>
                  <button type="button" class="group-hover/dropdown:bg-muted-100 dark:group-hover/dropdown:bg-muted-800 flex size-8 items-center justify-center rounded-lg p-1 transition-all duration-300">
                    <Icon
                      name="lucide:more-horizontal"
                      class="size-4"
                    />
                  </button>
                </template>
                <BaseDropdownItem
                  to="#"
                  title="Share"
                  text="Share this chat"
                  rounded="sm"
                >
                  <template #start>
                    <Icon name="lucide:share" class="me-2 block size-4" />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownItem
                  to="#"
                  title="Rename"
                  text="Rename this chat"
                  rounded="sm"
                >
                  <template #start>
                    <Icon name="lucide:edit-3" class="me-2 block size-4" />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownItem
                  to="#"
                  title="Archive"
                  text="Archive this chat"
                  rounded="sm"
                >
                  <template #start>
                    <Icon name="lucide:archive" class="me-2 block size-4" />
                  </template>
                </BaseDropdownItem>
                <BaseDropdownItem
                  to="#"
                  title="Delete"
                  text="Delete this chat"
                  rounded="sm"
                >
                  <template #start>
                    <Icon name="lucide:trash-2" class="me-2 block size-4" />
                  </template>
                </BaseDropdownItem>
              </BaseDropdown>
            </div>
          </div>
          <!-- Header -->
          <div v-if="conversation.length === 0" class="mx-auto mb-6 flex max-w-[49rem] flex-col items-center gap-2 px-6">
            <BaseHeading
              as="h1"
              size="lg"
              weight="semibold"
              class="text-muted-900 text-pretty text-center tracking-tighter sm:text-xl! md:text-3xl! dark:text-white"
            >
              What do you want to ship?
            </BaseHeading>
            <h2 class="text-muted-700 dark:text-muted-500 text-balance text-center text-sm">
              Generate UI, ask questions, debug, execute code, and much more.
            </h2>
          </div>
          <!-- Conversation -->
          <div
            v-else
            ref="chatEl"
            class="nui-slimscroll relative mx-auto size-full max-w-[49rem] grow overflow-y-auto px-6"
          >
            <div
              class="relative min-h-full w-full transition-opacity duration-150 ease-in h-[600px]"
            >
              <div class="absolute inset-0 mx-auto flex max-w-3xl flex-col pb-16">
                <div v-for="(item, index) in conversation" :key="item.text">
                  <div class="mt-4 flex w-full px-4 py-3 pt-4 empty:hidden">
                    <div class="group w-full gap-2">
                      <div class="relative flex items-start gap-2">
                        <div class="flex items-center">
                          <BaseAvatar size="xxs" :src="item.user.avatar" />
                        </div>
                        <div class="min-w-0 flex-1 translate-y-[0.5px]">
                          <div class="flex flex-1 -translate-x-1 flex-col items-stretch gap-2">
                            <div class="prose prose-sm prose-muted dark:prose-invert w-full min-w-0 break-words ps-1">
                              <p>{{ item.text }}</p>
                            </div>
                            <div class="absolute inset-y-0 end-0 z-10">
                              <div class="dark:bg-muted-950 border-muted-200 dark:border-muted-700 sticky top-3 flex w-fit -translate-y-1.5 items-center gap-1 rounded-[10px] border bg-white p-1 opacity-0 shadow-xs group-hover:opacity-100">
                                <button
                                  class="hover:bg-muted-100 focus:bg-muted-100 focus-visible:bg-muted-100 dark:hover:bg-muted-900 dark:focus:bg-muted-900 dark:focus-visible:bg-muted-900 text-muted-500 hover:text-muted-900 focus:text-muted-900 focus-visible:text-muted-900 dark:hover:text-muted-100 dark:focus:text-muted-100 dark:focus-visible:text-muted-100 inline-flex h-6 min-w-6 shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap text-nowrap rounded-[6px] border border-transparent bg-transparent px-1 text-sm font-medium outline-none"
                                >
                                  <Icon name="solar:pen-linear" class="size-4" />
                                </button>
                                <button
                                  class="hover:bg-muted-100 focus:bg-muted-100 focus-visible:bg-muted-100 dark:hover:bg-muted-900 dark:focus:bg-muted-900 dark:focus-visible:bg-muted-900 text-muted-500 hover:text-muted-900 focus:text-muted-900 focus-visible:text-muted-900 dark:hover:text-muted-100 dark:focus:text-muted-100 dark:focus-visible:text-muted-100 inline-flex h-6 min-w-6 shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap text-nowrap rounded-[6px] border border-transparent bg-transparent px-1 text-sm font-medium outline-none"
                                >
                                  <Icon name="solar:trash-bin-minimalistic-linear" class="size-4" />
                                </button>
                                <button
                                  class="hover:bg-muted-100 focus:bg-muted-100 focus-visible:bg-muted-100 dark:hover:bg-muted-900 dark:focus:bg-muted-900 dark:focus-visible:bg-muted-900 text-muted-500 hover:text-muted-900 focus:text-muted-900 focus-visible:text-muted-900 dark:hover:text-muted-100 dark:focus:text-muted-100 dark:focus-visible:text-muted-100 inline-flex h-6 min-w-6 shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap text-nowrap rounded-[6px] border border-transparent bg-transparent px-1 text-sm font-medium outline-none"
                                >
                                  <Icon name="solar:copy-linear" class="size-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex w-full px-4 py-3 pb-10 empty:hidden">
                    <div class="w-full">
                      <div class="group w-full gap-2">
                        <div class="relative flex items-start gap-2">
                          <div class="flex items-center">
                            <div class="relative size-6 items-center justify-center overflow-visible">
                              <div class="absolute inset-0 flex items-center justify-center">
                                <TairoLogo class="text-muted-400 size-6" />
                              </div>
                            </div>
                          </div>
                          <div class="min-w-0 flex-1 translate-y-[0.5px]">
                            <div class="flex min-w-0 flex-1 flex-col items-stretch gap-6">
                              <div class="flex-1 text-sm">
                                <div>
                                  <div v-if="loading && index === conversation.length - 1" class="space-y-8">
                                    <div class="space-y-3">
                                      <BasePlaceload class="h-3 w-full rounded-sm" />
                                      <BasePlaceload class="h-3 w-4/5 rounded-sm" />
                                      <BasePlaceload class="h-3 w-3/5 rounded-sm" />
                                    </div>
                                    <div class="space-y-3">
                                      <BasePlaceload class="h-3 w-full rounded-sm" />
                                      <BasePlaceload class="h-3 w-4/5 rounded-sm" />
                                    </div>
                                    <div class="space-y-3">
                                      <BasePlaceload class="h-3 w-full rounded-sm" />
                                      <BasePlaceload class="h-3 w-4/5 rounded-sm" />
                                      <BasePlaceload class="h-3 w-full rounded-sm" />
                                      <BasePlaceload class="h-3 w-4/5 rounded-sm" />
                                      <BasePlaceload class="h-3 w-full rounded-sm" />
                                      <BasePlaceload class="h-3 w-4/5 rounded-sm" />
                                    </div>
                                  </div>
                                  <div
                                    v-else
                                    class="prose prose-sm prose-muted dark:prose-invert min-w-0 break-words"
                                    v-html="item.response"
                                  />
                                </div>
                              </div>
                              <div v-if="!loading" class="flex items-center gap-2">
                                <button class="border-muted-100 dark:border-muted-950 dark:bg-muted-950 bg-muted-100 text-muted-900 dark:text-muted-100 hover:bg-muted-200 focus-visible:bg-muted-200 focus:bg-muted-200 dark:hover:bg-muted-800 dark:focus-visible:bg-muted-800 dark:focus:bg-muted-800 inline-flex h-7 shrink-0 cursor-pointer items-center justify-center gap-1 whitespace-nowrap text-nowrap rounded-lg border px-2 text-xs font-medium outline-none">
                                  <Icon name="solar:copy-linear" class="size-4" />
                                  <span class="hidden sm:inline-block">Copy</span>
                                </button>
                                <button class="border-muted-100 dark:border-muted-950 dark:bg-muted-950 bg-muted-100 text-muted-900 dark:text-muted-100 hover:bg-muted-200 focus-visible:bg-muted-200 focus:bg-muted-200 dark:hover:bg-muted-800 dark:focus-visible:bg-muted-800 dark:focus:bg-muted-800 inline-flex h-7 shrink-0 cursor-pointer items-center justify-center gap-1 whitespace-nowrap text-nowrap rounded-lg border px-2 text-xs font-medium outline-none">
                                  <Icon name="solar:refresh-linear" class="size-4" />
                                  <span class="hidden sm:inline-block">Retry</span>
                                </button>
                                <button class="border-muted-100 dark:border-muted-950 dark:bg-muted-950 bg-muted-100 text-muted-900 dark:text-muted-100 hover:bg-muted-200 focus-visible:bg-muted-200 focus:bg-muted-200 dark:hover:bg-muted-800 dark:focus-visible:bg-muted-800 dark:focus:bg-muted-800 inline-flex h-7 shrink-0 cursor-pointer items-center justify-center gap-1 whitespace-nowrap text-nowrap rounded-lg border px-2 text-xs font-medium outline-none">
                                  <Icon name="solar:like-linear" class="size-4" />
                                </button>
                                <button class="border-muted-100 dark:border-muted-950 dark:bg-muted-950 bg-muted-100 text-muted-900 dark:text-muted-100 hover:bg-muted-200 focus-visible:bg-muted-200 focus:bg-muted-200 dark:hover:bg-muted-800 dark:focus-visible:bg-muted-800 dark:focus:bg-muted-800 inline-flex h-7 shrink-0 cursor-pointer items-center justify-center gap-1 whitespace-nowrap text-nowrap rounded-lg border px-2 text-xs font-medium outline-none">
                                  <Icon name="solar:dislike-linear" class="size-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Chat compose -->
          <div class="flex items-center">
            <div class="mx-auto flex w-full max-w-[49rem] flex-col px-6">
              <div v-if="upgrade" class="bg-muted-100 dark:bg-muted-800 text-muted-600 rounded-t-xl">
                <div class="text-muted-900 flex items-center justify-between gap-2 py-1.5 ps-3 pe-2 text-xs md:text-sm">
                  <span class="block sm:hidden">Get more messages with Premium.</span>
                  <span class="hidden sm:block">Need more messages? Get higher limits with Premium.</span>
                  <div class="flex items-center gap-1">
                    <button type="button" class="text-primary-500 inline-flex h-5 shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap text-nowrap rounded-lg bg-transparent p-0! px-3 font-sans text-sm font-medium underline-offset-2 outline-none transition-all hover:underline">
                      Upgrade Plan
                    </button>
                    <button type="button" @click="closeUpgrade">
                      <Icon name="lucide:x" class="size-4" />
                      <span class="sr-only">Close</span>
                    </button>
                  </div>
                </div>
              </div>
              <form @submit.prevent="addMessage">
                <BaseTextarea
                  v-model="input"
                  v-focus
                  rounded="md"
                  placeholder="Ask Tairo a question…"
                  autogrow
                  :class="[upgrade && 'rounded-t-none!']"
                />

                <div class="flex items-center justify-between mt-4">
                  <div class="flex items-center gap-2">
                    <BaseAvatar
                      src="/img/avatars/2.svg"
                      class="me-1"
                      size="xs"
                    />
                    <BaseButton
                      size="icon-sm"
                      rounded="md"
                    >
                      <Icon name="lucide:paperclip" class="size-4" />
                    </BaseButton>
                    <BaseButton
                      size="sm"
                      rounded="md"
                    >
                      <Icon name="lucide:plus" class="size-4" />
                      <span>Project</span>
                    </BaseButton>
                  </div>

                  <div class="flex items-center gap-2">
                    <BaseButton
                      size="icon-sm"
                      rounded="md"
                      variant="dark"
                      :loading="loading"
                      type="submit"
                    >
                      <Icon name="lucide:arrow-up" class="size-4" />
                    </BaseButton>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div v-if="conversation.length === 0" class="mx-auto flex h-20 min-h-0 max-w-[49rem] shrink-0 items-center justify-center px-6 sm:h-16">
            <div class="flex flex-wrap justify-center gap-3">
              <h2 class="sr-only">
                Suggested Chat Messages
              </h2>
              <button
                v-for="item in recentChats"
                :key="item.title"
                class="dark:bg-muted-950 text-muted-900 dark:text-muted-100 hover:bg-muted-100 dark:hover:bg-muted-800 border-muted-300 dark:border-muted-800 inline-flex h-6 shrink-0 cursor-pointer items-center justify-center gap-0.5 whitespace-nowrap text-nowrap rounded-full border bg-white px-2 text-xs font-medium outline-none transition-all"
              >
                <span class="block md:hidden">{{ item.title }}</span>
                <span class="hidden md:block">{{ item.title }}</span>
                <svg
                  height="16"
                  stroke-linejoin="round"
                  viewBox="0 0 16 16"
                  width="16"
                  class="text-current"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div v-else>
            <p class="text-muted-500 py-2 text-center text-xs">
              TairoGPT may make mistakes. Please use with discretion.
            </p>
          </div>
        </div>
        <footer v-if="conversation.length === 0" class="absolute bottom-4 text-xs">
          <nav class="divide-muted-300 dark:divide-muted-700 mx-auto flex h-4 max-w-[49rem] divide-x px-6">
            <NuxtLink class="text-muted-600 hover:text-muted-900 dark:text-muted-500 dark:hover:text-muted-100 flex items-center gap-1 px-2 transition-colors" to="/">
              FAQ
            </NuxtLink>
            <NuxtLink class="text-muted-600 hover:text-muted-900 dark:text-muted-500 dark:hover:text-muted-100 flex items-center gap-1 px-2 transition-colors" to="/">
              Tairo
            </NuxtLink>
            <NuxtLink class="text-muted-600 hover:text-muted-900 dark:text-muted-500 dark:hover:text-muted-100 flex items-center gap-1 px-2 transition-colors" to="/">
              Terms
            </NuxtLink>
            <NuxtLink class="text-muted-600 hover:text-muted-900 dark:text-muted-500 dark:hover:text-muted-100 flex items-center gap-1 px-2 transition-colors" to="/">
              AI Policy
            </NuxtLink>
            <NuxtLink class="text-muted-600 hover:text-muted-900 dark:text-muted-500 dark:hover:text-muted-100 flex items-center gap-1 px-2 transition-colors" to="/">
              Privacy
            </NuxtLink>
          </nav>
        </footer>
      </div>
    </main>

    <!-- Overlay -->
    <div
      v-if="isMobileOpen"
      role="button"
      tabindex="0"
      class="bg-muted-950/80 fixed start-0 top-0 z-[29] size-full starting:opacity-0 transition-opacity duration-300 lg:pointer-events-none! lg:opacity-0!"
      @click="isMobileOpen = false"
    />
  </div>
</template>
