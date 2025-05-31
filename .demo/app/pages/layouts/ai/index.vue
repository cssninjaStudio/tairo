<script setup lang="ts">
definePageMeta({
  layout: 'empty',
  title: 'Tairo GPT',
  preview: {
    title: 'AI Interface',
    description: 'For Ai chat and conversation',
    categories: ['layouts', 'AI interface'],
    src: '/img/screens/layouts-ai.png',
    srcDark: '/img/screens/layouts-ai-dark.png',
    order: 0,
    new: true,
  },
})

const isOpen = ref(true)
const isMobileOpen = ref(false)
const isEphemeral = ref(false)

const archive = [
  {
    period: 'Today',
    chats: [
      {
        title: 'User request clarification',
      },
      {
        title: 'Write a business blog article',
      },
    ],
  },
  {
    period: 'Last 7 days',
    chats: [
      {
        title: 'A SaaS business model for a startup',
      },
    ],
  },
  {
    period: 'Last 30 days',
    chats: [
      {
        title: 'Introduction to interface design systems',
      },
    ],
  },
  {
    period: 'July',
    chats: [
      {
        title: 'User request clarification',
      },
      {
        title: 'Write a business blog article',
      },
    ],
  },
  {
    period: 'June',
    chats: [
      {
        title: 'User request clarification',
      },
      {
        title: 'Write a business blog article',
      },
    ],
  },
  {
    period: 'May',
    chats: [
      {
        title: 'User request clarification',
      },
      {
        title: 'Write a business blog article',
      },
    ],
  },
]
</script>

<template>
  <div class="bg-muted-white dark:bg-muted-900 h-screen w-full overflow-hidden">
    <!-- Sidebar -->
    <div
      class="bg-muted-100 dark:bg-muted-950 fixed start-0 top-0 z-40 flex h-full w-[260px] flex-col transition-transform duration-300"
      :class="[
        isOpen ? 'lg:translate-x-0' : 'lg:-translate-x-full!',
        isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
      ]"
    >
      <div class="flex h-16 shrink-0 items-center gap-2 px-4">
        <div class="lg:hidden">
          <button
            type="button"
            class="nui-mask nui-mask-blob hover:bg-muted-200 dark:hover:bg-muted-800 flex size-10 items-center justify-center transition-colors duration-300"
            @click="isMobileOpen = false"
          >
            <Icon name="lucide:x" class="size-5" />
          </button>
        </div>
        <BaseTooltip content="Close Sidebar">
          <button
            type="button"
            class="nui-mask nui-mask-blob hover:bg-muted-200 dark:hover:bg-muted-800 hidden lg:flex size-10 items-center justify-center transition-colors duration-300"
            @click="isOpen = false"
          >
            <Icon name="solar:siderbar-linear" class="size-5" />
          </button>
        </BaseTooltip>
        <BaseTooltip content="New Chat">
          <button type="button" class="nui-mask nui-mask-blob hover:bg-muted-200 dark:hover:bg-muted-800 flex size-10 ms-auto items-center justify-center transition-colors duration-300">
            <Icon name="lucide:plus" class="size-5" />
          </button>
        </BaseTooltip>
      </div>
      <div class="nui-slimscroll grow overflow-y-auto px-4 py-3">
        <div>
          <ul class="space-y-1">
            <li>
              <button type="button" class="hover:bg-muted-200 dark:hover:bg-muted-800 flex w-full items-center gap-2 rounded-xl p-1 transition-colors duration-300">
                <span class="dark:bg-muted-950 border-muted-300 dark:border-muted-800 flex size-8 items-center justify-center rounded-lg border bg-white">
                  <span class="bg-muted-100 dark:bg-muted-800 flex size-6 items-center justify-center rounded-md">
                    <TairoLogo class="text-primary-500 size-4" />
                  </span>
                </span>
                <BaseText size="sm" weight="medium">
                  Tairo GPT
                </BaseText>
              </button>
            </li>
            <li>
              <button type="button" class="hover:bg-muted-200 dark:hover:bg-muted-800 flex w-full items-center gap-2 rounded-xl p-1 transition-colors duration-300">
                <span class="dark:bg-muted-950 border-muted-300 dark:border-muted-800 flex size-8 items-center justify-center rounded-lg border bg-white">
                  <span class="bg-muted-100 dark:bg-muted-800 flex size-6 items-center justify-center rounded-md">
                    <Icon name="solar:graph-linear" class="text-primary-500 size-5" />
                  </span>
                </span>
                <BaseText size="sm" weight="medium">
                  Image Generator
                </BaseText>
              </button>
            </li>
            <li>
              <button type="button" class="hover:bg-muted-200 dark:hover:bg-muted-800 flex w-full items-center gap-2 rounded-xl p-1 transition-colors duration-300">
                <span class="dark:bg-muted-950 border-muted-300 dark:border-muted-800 flex size-8 items-center justify-center rounded-lg border bg-white">
                  <span class="bg-muted-100 dark:bg-muted-800 flex size-6 items-center justify-center rounded-md">
                    <Icon name="solar:graph-linear" class="text-primary-500 size-5" />
                  </span>
                </span>
                <BaseText size="sm" weight="medium">
                  Explore GPTs
                </BaseText>
              </button>
            </li>
          </ul>
          <ul class="mt-16 space-y-12">
            <li v-for="item in archive" :key="item.period">
              <BaseParagraph
                weight="semibold"
                size="xs"
                class="text-muted-900 dark:text-muted-100 px-3 uppercase tracking-wide"
              >
                {{ item.period }}
              </BaseParagraph>
              <ul class="mt-3 space-y-1">
                <li
                  v-for="(message, i) in item.chats"
                  :key="i"
                  class="group/item relative"
                >
                  <button type="button" class="text-muted-600 group-hover/item:text-muted-900 dark:text-muted-500 dark:group-hover/item:text-muted-200 group-hover/item:bg-muted-200 dark:group-hover/item:bg-muted-800 flex w-full items-center gap-2 rounded-xl px-3 py-1.5 text-start font-sans text-sm transition-colors duration-300">
                    <span class="line-clamp-1 pe-4">{{ message.title }}</span>
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
                        <button type="button" class="pointer-events-none flex size-8 items-center justify-center rounded-lg p-1 opacity-0 transition-all duration-300 group-hover/item:pointer-events-auto group-hover/item:opacity-100">
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
            </li>
          </ul>
        </div>
      </div>
      <div class="flex h-16 shrink-0 items-center gap-2 px-4">
        <BaseButton
          variant="dark"
          size="md"
          class="w-full"
        >
          Upgrade to Pro
        </BaseButton>
      </div>
    </div>
    <!-- Main content -->
    <div class="h-screen transition-[width,margin] duration-300 overflow-y-auto nui-slimscroll" :class="isOpen ? 'w-full lg:w-[calc(100%_-_260px)] lg:ms-[260px]' : 'w-full ms-0'">
      <div class="min-h-screen px-4">
        <!-- Chat content -->
        <div class="mx-auto min-h-screen w-full max-w-3xl">
          <div class="flex min-h-screen flex-col justify-end">
            <!-- Navigation -->
            <div class="fixed start-0 top-0 px-4 transition-all duration-300" :class="isOpen ? 'w-full lg:ms-[260px] lg:w-[calc(100%_-_260px)]' : 'w-full ms-0'">
              <div class="flex h-16 w-full items-center justify-between">
                <div class="flex items-center gap-2">
                  <button
                    type="button"
                    class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-800 flex size-10 items-center justify-center transition-colors duration-300 lg:hidden"
                    @click="isMobileOpen = true"
                  >
                    <Icon name="lucide:menu" class="size-5" />
                  </button>
                  <BaseDropdown
                    label="Dropdown"
                    orientation="start"
                    rounded="lg"
                  >
                    <template #button>
                      <button type="button" class="border-muted-200 dark:border-muted-800 dark:bg-muted-950 relative flex h-10 w-40 items-center gap-2 whitespace-nowrap rounded-lg border bg-white pe-12 ps-3 md:w-48">
                        <span class="shrink-0 whitespace-nowrap pe-4 font-sans text-[0.85rem] font-medium leading-none">Tairo GPT Mode</span>
                        <span class="absolute end-0 top-0 flex size-10 items-center justify-center">
                          <Icon
                            name="lucide:chevron-down"
                            class="text-muted-900 dark:text-muted-300 size-5 shrink-0 transition-all duration-300 in-data-[state=open]:-rotate-180"
                          />
                        </span>
                      </button>
                    </template>
                    <BaseDropdownItem
                      to="#"
                      title="Tairo GPT Plus"
                      text="Our most performant model, with advanced features."
                      rounded="sm"
                    >
                      <template #start>
                        <span class="dark:bg-muted-950 border-muted-300 dark:border-muted-800 relative flex size-8 shrink-0 items-center justify-center rounded-lg border bg-white">
                          <span class="bg-muted-100 dark:bg-muted-800 flex size-6 items-center justify-center rounded-md">
                            <TairoLogo class="size-4 text-yellow-400" />
                          </span>
                        </span>
                      </template>
                    </BaseDropdownItem>
                    <BaseDropdownItem
                      to="#"
                      title="Tairo GPT"
                      text="Our most performant model, with advanced features."
                      rounded="sm"
                    >
                      <template #start>
                        <span class="dark:bg-muted-950 border-muted-300 dark:border-muted-800 relative flex size-8 shrink-0 items-center justify-center rounded-lg border bg-white">
                          <span class="bg-muted-100 dark:bg-muted-800 flex size-6 items-center justify-center rounded-md">
                            <TairoLogo class="text-primary-500 size-4" />
                          </span>
                        </span>
                      </template>
                    </BaseDropdownItem>
                    <BaseDropdownSeparator />
                    <BaseDropdownItem
                      to="#"
                      title="Ephemeral chat"
                      rounded="sm"
                      as="label"
                      @select.prevent
                    >
                      <template #start>
                        <div class="flex size-8 shrink-0 items-center justify-center">
                          <Icon name="solar:chat-round-broken" class="text-primary-500 size-5" />
                        </div>
                      </template>
                      <template #end>
                        <div class="scale-90">
                          <BaseSwitchBall v-model="isEphemeral" />
                        </div>
                      </template>
                    </BaseDropdownItem>
                  </BaseDropdown>
                  <BaseTooltip content="Open Sidebar">
                    <button
                      v-if="!isOpen"
                      type="button"
                      class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-800 flex size-10 items-center justify-center transition-colors duration-300"
                      @click="isOpen = true"
                    >
                      <Icon name="solar:siderbar-linear" class="size-5" />
                    </button>
                  </BaseTooltip>
                </div>
                <div class="flex items-center gap-2">
                  <div class="scale-90">
                    <BaseThemeSwitch />
                  </div>
                  <div>
                    <BaseButton size="sm" rounded="full">
                      <Icon name="lucide:share-2" class="size-4" />
                      <span>Share</span>
                    </BaseButton>
                  </div>
                  <DemoAccountMenu horizontal />
                </div>
              </div>
            </div>
            <div class="grow py-16">
              <!-- Logo section -->
              <div class="dark:bg-muted-950 border-muted-300 dark:border-muted-800 mx-auto mb-10 flex size-16 items-center justify-center rounded-xl border bg-white">
                <div class="bg-muted-100 dark:bg-muted-800 flex size-14 items-center justify-center rounded-lg">
                  <TairoLogo class="text-primary-500 size-8" />
                </div>
              </div>
              <!-- Grid section -->
              <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div>
                  <BaseCard
                    rounded="lg"
                    shadow="flat"
                    class="hover:border-muted-900! dark:hover:border-muted-400! h-full p-4"
                    role="button"
                  >
                    <div class="mb-2">
                      <Icon name="solar:archive-down-minimlistic-broken" class="text-primary-500 size-5" />
                    </div>
                    <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-300">
                      Create an image for your business presentation
                    </BaseParagraph>
                  </BaseCard>
                </div>
                <div>
                  <BaseCard
                    rounded="lg"
                    shadow="flat"
                    class="hover:border-muted-900! dark:hover:border-muted-400! h-full p-4"
                    role="button"
                  >
                    <div class="mb-2">
                      <Icon name="solar:document-text-linear" class="text-success-500 size-5" />
                    </div>
                    <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-300">
                      Make a summary of the last meeting
                    </BaseParagraph>
                  </BaseCard>
                </div>
                <div>
                  <BaseCard
                    rounded="lg"
                    shadow="flat"
                    class="hover:border-muted-900! dark:hover:border-muted-400! h-full p-4"
                    role="button"
                  >
                    <div class="mb-2">
                      <Icon name="solar:camera-linear" class="text-destructive-500 size-5" />
                    </div>
                    <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-300">
                      Retrieve the date and place of an uploaded image
                    </BaseParagraph>
                  </BaseCard>
                </div>
                <div>
                  <BaseCard
                    rounded="lg"
                    shadow="flat"
                    class="hover:border-muted-900! dark:hover:border-muted-400! h-full p-4"
                    role="button"
                  >
                    <div class="mb-2">
                      <Icon name="solar:call-chat-rounded-linear" class="size-5 text-yellow-400" />
                    </div>
                    <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-300">
                      Create a scenario for marketing leads and phone calls
                    </BaseParagraph>
                  </BaseCard>
                </div>
              </div>
            </div>
            <!-- Input section -->
            <div class="relative pb-6">
              <div class="relative min-h-14">
                <textarea
                  placeholder="Message Tairo GPT..."
                  class="field-sizing-content placeholder:text-muted-300 dark:placeholder:text-muted-700 focus-visible:nui-focus bg-muted-100 dark:bg-muted-950 relative min-h-14 w-full rounded-4xl py-4.5 px-16 leading-tight"
                />
                <BaseTooltip content="Attach a file">
                  <button
                    type="button"
                    class="absolute bottom-1.5 start-0 flex size-14 items-center justify-center"
                  >
                    <Icon name="solar:paperclip-linear" class="text-muted-500 size-6" />
                  </button>
                </BaseTooltip>
                <button
                  type="button"
                  class="absolute bottom-1.5 end-0 flex size-14 items-center justify-center"
                >
                  <span class="bg-muted-900 flex size-10 items-center justify-center rounded-full">
                    <Icon name="mdi:arrow-up" class="size-5 text-white" />
                  </span>
                </button>
              </div>
              <div class="mt-1 text-center">
                <BaseText size="xs" class="text-muted-400 dark:text-muted-500">
                  Tairo GPT may produce errors. Make sure to verify important info.
                </BaseText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Overlay -->
    <div
      role="button"
      tabindex="0"
      class="bg-muted-950/80 fixed start-0 top-0 z-[39] size-full transition-opacity duration-300 lg:pointer-events-none! lg:opacity-0!"
      :class="isMobileOpen ? 'opacity-100 pointer-events-all' : 'opacity-0 pointer-events-none'"
      @click="isMobileOpen = false"
    />
  </div>
</template>
